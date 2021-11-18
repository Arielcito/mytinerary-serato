import React from "react"

const CardComp =  ({photo}) => {
  
  return (
      <div className="slideCity" style={{                
                                      backgroundImage: `url(${photo.src})`, 
                                      backgroundSize: "cover", 
                                      backgroundRepeat: "no-repeat",
                                      backgroundPosition: "50% 50%",
                                      width: "30vw",
                                      height: "40vh"
                                       }}>
      <h3>{photo.title}</h3>
      </div>
  )
}

export default CardComp