import React from "react";
import{ data } from "../restApi.json";
const Menu = () => {
  return (
    <section className = "menu" id = "menu">
        <div className = "container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHERS</h1>
                <p>Our signature dish, Truffle Lobster Pasta, is a must-try for any first-time visitor. Made with a unique blend of herbs and spices, it reflects the true essence of gourmet seafood dining.
                </p>
            </div>
            <div className="dishes_container">
                {data[0].dishes.map(element=>{
                  return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title} </h3>
                                <button>{element.category}</button>
                            </div>
                        );
                    })} 

            </div>
        </div>
    </section>
  )
}

export default Menu
