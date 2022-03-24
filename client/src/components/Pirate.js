import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from './Navbar';

export default function Pirate() {
    const [pirate, setPirate] = useState({})
    const {_id} = useParams();
    const[effect, setEffect] = useState(true);

    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/pirates/${_id}`)
        .then(response => {
            if(isMounted){
                setPirate(response.data)
            }
        })
        .catch(err => console.log("Error: ", err))

        return () => {isMounted = false};
    },[])


    function handleClick(valToChange){
        console.log("Pirate: ", pirate)
        let newItem = pirate;
        newItem[valToChange] = !pirate[valToChange];
        console.log("Changing: ", valToChange);
        console.log("newItem: ", newItem);

        axios.put(`http://localhost:8000/api/pirates/update/${pirate._id}`, newItem)
            .then(response => console.log(response))
            .catch(err => console.log("error: ", err))

        setEffect(!effect);
    }


    return (
        <>
            <Navbar title={pirate.name} noButton={true}/>
            <div className="container display-pirate content-container p-3">
                <div className="row">
                    <div className="col">
                        <img src={pirate.imageUrl} />
                        <h2>
                            "{pirate.catchPhrase}"
                        </h2>
                    </div>
                    <div className="col bg-light">
                        <strong className="text-center">About</strong>
                        <p>Position: {pirate.position}</p>
                        <p>Treasures: {pirate.chests}</p>
                        <p>
                            Peg Leg: {pirate.pegLeg ? "yes" : "no"}
                            <button onClick={() => handleClick("pegLeg")} className={"btn " + (pirate.pegLeg ? "btn-success" : "btn-danger")}>{pirate.pegLeg ? "yes" : "no"}</button>
                        </p>
                        <p>
                            Eye Patch: {pirate.eyePatch ? "yes" : "no"}
                            <button onClick={() => handleClick("eyePatch")} className={"btn " + (pirate.eyePatch ? "btn-success" : "btn-danger")}>{pirate.eyePatch ? "yes" : "no"}</button>
                        </p>
                        <p>
                            Hook Hand: {pirate.hookHand ? "yes" : "no"}
                            <button onClick={() => handleClick("hookHand")} className={"btn " + (pirate.hookHand ? "btn-success" : "btn-danger")}>{pirate.hookHand ? "yes" : "no"}</button>
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
