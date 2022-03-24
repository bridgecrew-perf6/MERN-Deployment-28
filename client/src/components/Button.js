import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {

    return (
        <Link to={props.link}><button className={"btn " + props.color} onClick={props.clickFunction}>{props.buttonMessage}</button></Link>
    )
}
