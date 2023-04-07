import React from 'react'
import  {Data} from "../helpers/Data"
import Cards from './Cards'
import "../styles/Menu.css";

const Menu = () => {
  
  return (
    <div className='menu'>
      <h1 className="menuTitle">Our Burgers</h1>
      
      <div className="menuList">
        {Data.map((menuItem,index)=> (<Cards key={index} {...menuItem}/>)
        )}
      </div>
    </div>
  )
}

export default Menu
