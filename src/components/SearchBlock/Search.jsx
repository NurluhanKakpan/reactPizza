import { MyContext } from '../../App';
import '../../scss/app.scss';
import React from 'react'

const Search = () =>{
    const {searchValue,setSearchValue} = React.useContext(MyContext)
    return(
        <div className='root'>
            <img src="./img/search.png" alt="search" className='icon' />
            <input className="search" placeholder="search" value={searchValue} onChange={(event) =>setSearchValue(event.target.value)} /> 
            { searchValue && <img className='remove' src="./img/remove.png" alt=""  onClick={() =>(setSearchValue('')) } />}
            
        </div>
    )
}
export default Search