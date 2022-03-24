import axios from 'axios'
import React, { useContext } from 'react'
import Button from './Button'
import MyContext from '../contexts/context';


export default function DeleteButton(props) {
    const context = useContext(MyContext);

    function handleDelete(){
        axios.delete(`http://localhost:8000/api/pirates/delete/${props._id}`)
            .then(response => console.log(response))
            .catch(err => console.log("error: ", err))
    }


    return (
        <Button buttonMessage={"Walk The Plank"} clickFunction={handleDelete} color="btn-danger"/>
    )
}
