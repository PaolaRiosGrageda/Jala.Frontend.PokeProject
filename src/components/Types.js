import React from 'react';
import {v4 as uuidv4} from 'uuid';
import './../styles/types.css';


export const Types = ({info}) => {
  return (
    <div className = "TypesContainer">
        {
            info.map(x => (
                <div key={uuidv4()} className = "TypeChild">
                    {x}
                </div>
            ))
        }
        
    </div>
  )
}
