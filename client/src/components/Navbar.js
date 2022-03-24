import React from 'react'
import Button from './Button'

export default function Navbar(props) {
    return (
        <nav>
            <h1>{props.title}</h1>
            {props.noButton ? null
            :
            <Button buttonMessage={props.buttonMessage} color={"btn-primary"} link={props.link}/>
            }
        </nav>
    )
}
