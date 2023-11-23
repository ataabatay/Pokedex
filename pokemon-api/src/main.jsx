import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import Pokemon from './components/Pokemon.jsx'
import PokemonSingle from './components/PokemonSingle.jsx'
import PokemonByType from './components/PokemonByType.jsx'
import { pokemonLoader, getSinglePokemon, getPokemonByType } from './utils/pokemon.js'

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



// Search bar for all names
// Styling
// 