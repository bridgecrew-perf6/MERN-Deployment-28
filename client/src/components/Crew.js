import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from './Button';
import DeleteButton from './DeleteButton';

export default function Crew() {
    const [pirates, setPirates] = useState([]);
    
    useEffect(() => {
        let isMounted = true;
        axios.get('http://localhost:8000/api/pirates')
        .then(response => {
            if(isMounted){
                setPirates(response.data)
            }
        })
        .catch(err => console.log("Error: ", err))
        return () => { isMounted = false }
    }, [pirates])


    return (
        <div className="container pirate-container content-container p-3">
            {pirates.sort((item1, item2) => {
                if(item1.name.toLowerCase() < item2.name.toLowerCase()){
                    return -1;
                } else if(item1.name.toLowerCase() > item2.name.toLowerCase()){
                    return 1;
                } else {
                    return 0;
                }
            })
                .map((item, index) => {
                return (
                    <div className="pirate-box" key={index}>
                        <img src={item.imageUrl}/>
                        <h3>{item.name}</h3>
                        <Button buttonMessage="View Pirate" link={`/pirate/${item._id}`} color={"btn-primary"}/>
                        <DeleteButton _id={item._id}/>
                    </div>
                )
            })}
        </div>
        
        
    )
}
