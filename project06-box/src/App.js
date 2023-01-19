import boxes from "./boxes"
import Box from "./components/Box"
import { useState } from "react"

export default function App() {
    const [squares, setSquares] = useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id}             
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
