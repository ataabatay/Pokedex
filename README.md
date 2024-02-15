# Pokedex (pair project - 48 hours)
## Description
This is a paired project completed with [Dan Edmunds](https://github.com/DanEdmunds1). We worked on creating a website using React that uses the [Pokémon API](https://pokeapi.co/) third party public API to fetch all Pokemon, Pokemon by type and a single Pokemon. We displayed the fetched data in our React app using multiple components. The app functions as a basic Pokédex where you can see all the Pokémon throughout all the generations with their original images. You can filter Pokémon by type and also search for a specific one using a search input. This project is my second project for my graduation portfolio from software engineering bootcamp.

## Demo Link
Visit [Pokedex](https://pokemonatadan.netlify.app/).

## Getting Started/Code Installation
1. Access the source code via the 'Clone or download' button,
2. Run “npm i” inside terminal to install the packages,
3. Run “npm run dev” inside terminal,
4. Follow the link.

## Timeframe & Working Team
We worked in a pair with [Dan Edmunds](https://github.com/DanEdmunds1) for roughly 48 hours to complete the project.

## Technologies Used
### React.js
Used to create each component and to create a router.
### Sass
Employed for styling and layout, ensuring a visually appealing and responsive design.

## Brief
The project centred on developing a React app consuming a public API. The main goal was to craft a user-friendly experience achieved through well-organised components with loaders using a public API to practise specifically how to fetch data from an API and create React components with loaders.

### Requirements and deliverables
This project requires integration of a React app with a designated public API. The use of components with loaders is expected as well as routing mechanisms if appropriate. The final product needed to be accessible online through GitHub.

Expectations included delivering a live, fully functional React app. Maintain an actively updated GitHub repository, complemented by a comprehensive README.md file detailing chosen technologies, the strategic approach, and graphical representations of our design intentions.

## Planning
We started off with reading the documentation for several public APIs. Soon after, we settled on working with the Pokemon API to create a Pokedex.

Next was creating **wireframes **and a **route map**.

### Wireframes

![1](https://github.com/ataabatay/Pokedex/assets/25418371/5fa747ee-ed42-4801-bded-4dba2af3bb50)


**Route Map**

![image](https://github.com/ataabatay/Pokedex/assets/25418371/e3f53670-5269-42ad-bca2-e4a27640774c)

## Build Process
Throughout the project, we pair-coded while Dan screen-shared.

First item we worked on was to create a router for our app with empty page components and loaders for the relevant pages.

```javascript
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/pokemon',
        element: <Pokemon />,
        loader: pokemonLoader
      },
      {
        path: '/pokemon/:id',
        element: <PokemonSingle />,
        loader: async ({ params }) => getSinglePokemon(params.id)
      },
      {
        path: '/pokemon/type/:type',
        element: <PokemonByType />,
        loader: async ({ params }) => getPokemonByType(params.type)
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
```

Once the router was up and running, the next step was to implement the loader functions and import these. These were simple fetch functions hitting various endpoints, two of which were using params to dynamically hit the endpoint to allow us to fetch unique pokemon or pokemon by type. 

```javascript
export async function pokemonLoader() {
    const all = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000')
    const allPokemon = await all.json()
    const types = await fetch(`https://pokeapi.co/api/v2/type/`)
    const allTypes = await types.json()
    return { allPokemon, allTypes } 
}

export async function getSinglePokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res.json()
}

export async function getPokemonByType(type) {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    const pokemonType = await res.json()
    const all = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000')
    const pokemonSearch = await all.json()

    return { pokemonType, pokemonSearch }
}
```

Final step that brought everything together was to build all page components. 

The all pokemon endpoint simply gave us a name and a url of each pokemon making it difficult to use as we wanted to show images of each Pokemon. Single pokemon endpoint had urls for Pokemon artwork which was indexed by Pokemon ids. We used the Pokemon ids to dynamically use artwork urls to fetch the correct images for each Pokemon. This allowed us to load the images not only on the All Pokemon page but also on the Pokemon by type page.

```javascript
export default function Pokemon() {
  const navigation = useNavigation() // Load in API data
  const pokemons = useLoaderData() // Destructure data
  const { allPokemon } = pokemons

  // Creating states for filter to work and render filtered state
  const [pokemon, setPokemon] = useState(allPokemon.results)
  const [filters, setFilters] = useState('')
  const [filteredPokemon, setFilteredPokemon] = useState([])

  // Getting input from search bar
  function handleSearch(e) {
    setFilters(e.target.value)
  }

  // Filter effect rerendering each time search bar input changes
  useEffect(() => {
    const pattern = new RegExp(filters, 'i')
    const filteredArray = pokemon.filter(creature => {
      return pattern.test(creature.name)
    })
    setFilteredPokemon(filteredArray)
  }, [filters, pokemon, setFilteredPokemon])

  // Getting abolsute index for each pokemon
  const pokemonIndex = pokemon.map((poke) => {
    return poke.name
  })

  return (
    <>
      <div className='filters'>
        <Filter />
        <input name="search" placeholder="Search..." onChange={handleSearch} />
      </div>
      <Container fluid>
        <Row>
          {filteredPokemon.map((pokemon, idx) => {
            if (idx + 1 <= 1017) {
              return (
                <Col as={Link} key={pokemon.url} className="card" xs={6} md={4} lg={3}
                  to={`/pokemon/${pokemon.name}`}>
                  <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex.indexOf(pokemon.name) + 1}.png`} alt={pokemon.name} />
                  <div className="card-body">
                    <h5 className="card-title">{(pokemon.name).toUpperCase().charAt(0) + pokemon.name.slice(1, pokemon.name.length)}</h5>
                  </div>
                </Col>
              )
            } else if (idx + 1 > 1017 && idx + 1 <= 10275) {
              return (
                <Col as={Link} key={pokemon.url} className="card" xs={6} md={4} lg={3}
                  to={`/pokemon/${idx + 8984}`}>
                  {navigation.state === 'idle' ?
                    <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 8984}.png`} alt={pokemon.name} /> :
                    <div className="centred">
                      <Spinner animation='border' />
                    </div>
                  }
                  <div className="card-body">
                    <h5 className="card-title">{(pokemon.name).toUpperCase().charAt(0) + pokemon.name.slice(1, pokemon.name.length)}</h5>
                  </div>
                </Col>
              )
            } else {
              return
            }
          })}
        </Row>
      </Container>
    </>
  )
}
```

Once all the components were completed we focused the last hours of the project on design and worked on designs.

## Challenges
The biggest challenge was working with the public API we chose which was a lesson. The choice of API dictated what we could achieve substantially. We were not fully aware of what we could and could not do with what we had. It has been a tremendous lesson in making sure to fully read documentation and planning ahead of time to understand what is and is not possible with a public API.

The biggest challenge we faced was that the GET all Pokemon endpoint only had names and urls of Pokemon. So in order to be able to show images for Pokemon on the index page (where we showed all Pokemon) we had to be crafty and do url manipulation to be able to show images we knew existed as urls in GET single Pokemon endpoint.

## Wins
* Being able to come up with a properly functioning Pokedex in such a short amount of time and with such complex yet insufficient data from the API.
* Coding together is a massive win on every front. 
* I also learnt shortcuts and methods from Dan I was not familiar or comfortable to use alone (i.e destructuring).

## Key learnings
Biggest learning was working in a pair. The experience was completely different than how I worked solo in my first project. I learnt the value of conceding on some ideas on occasions to not lose rhythm and focus, and save time. Coding together was challenging but we had an extremely clear channel of communication with Dan which facilitated the delivery and brought us joy to work together.

## Bugs
Some Pokemon do not have an image associated with them due to the API not having image urls available for said Pokemon. No other major bug is present given the size of the project.

## Future Improvements
Due to the way that the API was built we were unable to fetch all Pokemon with rich data beyond their name and a URL linking to their individual pages. Due to this we were unable to create a search input component that could be passed inside other components. This will be looked into to see if any improvement would be possible. Design also left a lot of room for improvement but given the time constraint and the focus of the project this was postponed to a later date.
