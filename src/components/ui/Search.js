import React, { useState } from 'react'

const Search = ({ getInputs }) => {
  const [text, setText] = useState('');

  const onChange = (i) => {
    setText(i)
    getInputs(i)
  }  

 const onFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className='search'>
      <form onSubmit={ event => onFormSubmit(event) }>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};



export default Search;