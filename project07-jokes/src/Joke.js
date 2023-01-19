import React, { useState } from "react"

export default function Joke(props) {
    const [isShown, setisShown] = useState(false)

    function toggleShown() {
        setisShown(!isShown)    
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}