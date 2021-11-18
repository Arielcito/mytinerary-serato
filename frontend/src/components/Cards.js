import React from 'react'
import CardComp from "./CardComp";

const Cards = ({item}) => {
    return (
        <div className="slide">
            {
                item.map((photo,index) =>{
                    return  <CardComp photo={photo} key={index} />
                })
            }
        </div>
    )
}

export default Cards