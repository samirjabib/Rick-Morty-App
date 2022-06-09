import React from 'react';
import ResidentInfo from './ResidentInfo';
const ResidentList = ({residentUrl}) => {

    return (
        <div className='row'>  
            {
                //hacemos el map de la operacion. 
                residentUrl?.map( resident => (
                    <ResidentInfo resident={resident} key={resident}/>
                ))
            }
        </div>
    );
};

export default ResidentList;