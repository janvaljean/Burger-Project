import React from 'react'
import  {Data} from "../helpers/Data"
import Cards from './Cards'

const Menu = () => {
  
  return (
    <div className='menu'>
      <h1 className="menmuTitle">Our Burgers</h1>
      
      <div className="menuList">
        {Data.map((menuItem,index)=> (<Cards key={index} {...menuItem}/>)
        )}
      </div>
    </div>
  )
}

export default Menu
