import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function AddPirate() {
    const [isCaptain, setIsCaptain] = useState(false);
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [chests, setChests] = useState(0);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [position, setPosition] = useState("First Mate");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);


    //function to determine if there is already a captain
    useEffect(() => {
        console.log("Running use effect...")
        let isMounted = true;
        axios.get('http://localhost:8000/api/pirates')
        .then(response => {
            if(isMounted){
                console.log(response);
                const pirates = response.data;
                for(let i = 0; i < pirates.length; i++){
                    console.log(pirates[i]);
                    if(pirates[i].position === "Captain"){
                        console.log("setting is captain to true.")
                        setIsCaptain(true);
                    }
                }
            }
        })
        .catch(err => console.log("Error: ", err))
        return () => { isMounted = false }
    }, [])
    

    function handlePegLegChange(){
        console.log("Changing peg")
        setPegLeg(!pegLeg);
    }
    function handleEyePatchChange(){
        console.log("Changing eye")
        setEyePatch(!eyePatch);
    }
    function handleHookHandChange(){
        console.log("Changing hook")
        setHookHand(!hookHand);
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates/create', {name: name, imageUrl: imageUrl, chests: chests, catchPhrase: catchPhrase, position: position, pegLeg: pegLeg, eyePatch: eyePatch, hookHand: hookHand})
            .then(response => {
                console.log("New Pirate Added: ", response)
                setName("");
                setImageUrl("");
                setChests(0);
                setCatchPhrase("");
                setPosition("First Mate");
                setEyePatch(true);
                setHookHand(true);
                setPegLeg(true);
        })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })

        
    }

    return (
        <div className="content-container p-3">
            {
                        !isCaptain ?
                        <p>There is no captain yet</p>
                        :
                        <p>There is a captain</p>
                    }
            <form onSubmit={e => handleSubmit(e)}>
                {errors.map((message, index) => <p className="text-danger" key={index}>{message}</p>)}
                
                <div className="form-group">
                    <label htmlFor="">Pirate Name</label>
                    <input type="text" className="form-control" id="" onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Image URL</label>
                    <input type="text" className="form-control" id="" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}/>
                </div>
                <div className="form-group">
                    <label htmlFor=""># Of Treasure Chests</label>
                    <input type="number" className="form-control" id="" onChange={(e) => setChests(e.target.value)} value={chests}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Pirate Catch Phrase</label>
                    <input type="text" className="form-control" id="" onChange={(e) => setCatchPhrase(e.target.value)} value={catchPhrase}/>
                </div>

                <select className="form-select my-3" onChange={e => setPosition(e.target.value)} value={position}>
                    <option value="First Mate">First Mate</option>
                    
                    {
                        !isCaptain ? 
                        <option value="Captain">Captain</option>
                        :
                        null
                    }
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>


                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id=""  checked={pegLeg ? true : false} onChange={handlePegLegChange}/>
                    <label className="form-check-label" htmlFor="">Peg Leg</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="" checked={eyePatch ? true : false} onChange={handleEyePatchChange}/>
                    <label className="form-check-label" htmlFor="">Eye Patch</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="" checked={hookHand ? true : false} onChange={handleHookHandChange}/>
                    <label className="form-check-label" htmlFor="">Hook Hand</label>
                </div>
                <button type="submit" className="btn btn-primary">Add Pirate</button>
            </form>
        </div>
    )
}
