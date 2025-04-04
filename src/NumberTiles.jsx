import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import {DndContext} from '@dnd-kit/core';
// import {Draggable} from './Draggable';
// import {Droppable} from './Droppable';

function NumberTiles() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (    
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "center",
            }}
        >
            {numbers.map((n) => (
                <Paper key={n}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "48px",
                        height: "48px",
                    }}
                >
                    <span style={{fontWeight: "500", fontSize: "1.5rem", textAlign: "center"}}>{n}</span>
                </Paper>
            ))}
        </Box>
    )
}

export default NumberTiles;