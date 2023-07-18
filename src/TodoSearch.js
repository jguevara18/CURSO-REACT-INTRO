import React from 'react';
import { useState } from 'react';
import './TodoSearch'

function TodoSearch(){
const [searchValue, setSearchValue] = useState('');

    return (
      <input placeholder= 'Cortar cebollas'
      className="TodoSearch"
      value= { searchValue }
      onChange={(event) => setSearchValue(event.target.value)}/>
    )};

export { TodoSearch };