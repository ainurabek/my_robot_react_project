import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
            type="search" 
            placeholder="search"
            onChange={searchChange} //когда вводишь текст выходит event.target.value 
            />
        </div>
        
    );
}

export default SearchBox;