import boxes from "./boxes"
import Box from "./components/Box"
import { useState } from 'react'

export default function App() {
    const [squares, setSquares] = useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
