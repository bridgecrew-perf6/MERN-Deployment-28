import React from 'react'
import {Switch, Route} from 'react-router-dom';
import AddPirate from '../components/AddPirate';
import Crew from '../components/Crew';
import Navbar from '../components/Navbar';
import Pirate from '../components/Pirate';
import MyContext from '../contexts/context';
import { useState } from 'react';

export default function Main() {
    const [isCaptain, setIsCaptain] = useState(false);


    return ( //Need to add links to navbar props.
        <div className="container m-5 p-4">
            <MyContext.Provider value={{isCaptain, setIsCaptain}}>
            <Switch>
                <Route exact path="/pirates">
                    <Navbar buttonMessage={"Add Pirate"} title={"Pirate Crew"} link={"/pirate/new"}/>
                    <Crew/> 
                </Route>
                <Route exact path="/pirate/new">
                    <Navbar buttonMessage={"Crew Board"} title={"Add Pirate"} link={"/pirates"}/>
                    <AddPirate/>
                </Route>
                <Route exact path="/pirate/:_id">
                    <Pirate/>
                </Route>
            </Switch>
            </MyContext.Provider>
        </div>
    )
}
