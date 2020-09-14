import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    const fetchItems = async () => { 
      const result = await axios( `https://www.breakingbadapi.com/api/characters?name=${input}`)
      setItems(result.data)
    }     
    fetchItems()
  }, [input])

  return (
    <div className='container'>
      <Header />
      <Search getInputs={(i) => setInput(i)} />
      <CharacterGrid  items={items} />
    </div>
  )
}

export default App