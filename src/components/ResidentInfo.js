import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident}) => {

    const [character,setCharacter] = useState({})
    const [color, setColor] = useState({})
    //Accedemos a la informacion de los residentes con la cual completaremos la card
    useEffect(()=>{
        axios.get(resident)
            .then( res => setCharacter(res.data))
                    if(character.status === "Alive"){
                        setColor("green");
                    }
                    if(character.status ==="Dead"){
                        setColor("red")
                    }
                    if(character.status ==="unknown"){
                        setColor("gray")
                    }     
    },[character.status, resident]);

    

    console.log(character)
    return (
            <div className='col-md-6'>
                <div className='resident-card'>
                        <img src={character.image} alt='img'/>
                        <div className='info'>
                            <p><b>{character.name}</b></p>
                            <p className='circle'><span><i className="fas fa-circle" style={{color:color}}></i></span>
                            {character.status} - {character.species}
                            </p>
                            <p className='description'>origin</p>
                            <p>{character.origin?.name}</p>
                            <p className='description'>episodes where appear</p>
                            <p>{character.episode?.length}</p>
                        </div>
                    </div>
                </div>
                
            
    );
};

export default ResidentInfo;