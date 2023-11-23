import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Filter() {
  const [filter, setFilter] = useState([])
  const navigate = useNavigate()

const handleTypeChange = (e) => {
  navigate(`/pokemon/type/${e.target.value}`)
}

  async function getTypes() {
    const response = await fetch('https://pokeapi.co/api/v2/type')
    const data = await response.json()
    const arrVersion = data.results.map(type => {
      return type.name
    })
    setFilter(arrVersion)
  }

  useEffect(() => {
    getTypes()
  }, [])
  
  return (
    <select name="dropdown" onChange={handleTypeChange}>
      {filter.map((type, idx) => {
        return <option key={idx} value={type}>{type}</option>
      })}
    </select>
  )





}
