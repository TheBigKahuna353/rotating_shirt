import React from 'react';
import { Irgb } from '../types';
import { Button } from '@mui/material';
import ColorPickerModal from '../components/AllColors'


interface ColorPickerProps {
    color: Irgb,
    setColor: (color: Irgb) => void
}

const colors: { [key: string]: { r: number, g: number, b: number } } = {
    "white": {r: 255, g: 255, b: 255},
    "black": {r: 0, g: 0, b: 0},
    "red": {r: 255, g: 0, b: 0},
    "green": {r: 0, g: 255, b: 0},
    "blue": {r: 0, g: 0, b: 255},
    "yellow": {r: 255, g: 255, b: 0},
    "orange": {r: 255, g: 165, b: 0},
    "gray": {r: 128, g: 128, b: 128},
    "brown": {r: 165, g: 42, b: 42},
    "pink": {r: 255, g: 192, b: 203},
    "violet": {r: 238, g: 130, b: 238},
    "navy": {r: 0, g: 0, b: 128},
    "hot pink": {r: 255, g: 105, b: 180},
    "ferrarri red": {r: 255, g: 40, b: 0},
    "cream": {r: 255, g: 253, b: 208},
}

const ColorPicker = (props: ColorPickerProps) => {

    const color = props.color
    const setColor = props.setColor

    const [openColor, setOpenColor] = React.useState(false)


    return (
        <div>
            <div style={{margin: "20px", marginLeft: "0px", display: "flex"}}>
                <p style={{marginRight: "50px"}}>Color Picker</p>
                <Button variant='contained' onClick={() =>setOpenColor(true)}>More Color Options</Button>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", width: "25vw"}}>
                {Object.keys(colors).map((key) => {
                    return (
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div key={key} 
                                style={
                                    {width: "70px",
                                    height: "70px", 
                                    backgroundColor: `rgb(${colors[key].r}, ${colors[key].g}, ${colors[key].b})`, 
                                    margin: "10px", 
                                    cursor: "pointer",
                                    border: "2px solid black",
                                }} 
                                onClick={() => setColor(colors[key])}/>
                            <p style={{margin:"auto"}}>{key}</p>
                        </div>
                    )
                })}
            </div>
            <ColorPickerModal open={openColor} setOpen={setOpenColor} />
        </div>
    )
}
 
export default ColorPicker;