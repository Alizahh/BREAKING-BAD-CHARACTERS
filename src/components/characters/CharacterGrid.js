import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ items }) => {
  return !items ? 'loading': (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  )
}
export default CharacterGrid