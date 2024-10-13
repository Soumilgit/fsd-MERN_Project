import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading"><strong>Our Special Dishes</strong></h1>
                <p> It is a long established fact that a reader will be distracted by the read content 
                of a page when looking at its layout </p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu;
