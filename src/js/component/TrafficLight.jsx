import React, { useState } from 'react';


 export const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <div className="semaforo">
      <div className= "container-fluid flex-colum justify-content-center p-5 ">
        <div className="row">
          <div className=' align-items-center'>
         <div className={`light col-2 btn bg-success ${color == 'verde' ? 'glow-green' : ''}`}
        onClick={() => setColor('verde')}>       
          </div>
         <div className={`light col-2 btn bg-warning ${color == 'amarillo' ? 'glow-yellow': ''}`}
        onClick={() => setColor('amarillo')}>       
         </div>
         <div className={`light col-2 btn bg-danger ${color == 'rojo' ? 'glow-red' : ''}`}
        onClick={() => setColor('rojo')}>       
         </div>
          </div>       
        </div>        
      </div>
    </div>   
    
  );
};

