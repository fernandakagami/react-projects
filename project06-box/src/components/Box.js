import { useState } from "react"

export default function Box(props) {
    const [on, setOn] = useState(props.on)
    
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}