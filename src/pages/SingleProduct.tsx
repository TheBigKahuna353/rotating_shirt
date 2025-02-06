import React from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../types'
import { getProduct } from '../products'
import NavBar from '../components/NavBar'
import NumberInput from '../components/NumberInput'
import { Box, Button, Modal } from '@mui/material'
import { Model } from '../model'
import CSS from 'csstype'
import SizePicker from '../components/SizePicker'
import { Irgb } from '../types'
import ColorPicker from '../components/ColorPicker'

const SingleProduct = () => {

    const { name } = useParams() as { name: string }

    const product = getProduct(name) as Product

    const [size, setSize] = React.useState("M")
    const [open, setOpen] = React.useState(false)
    const [quantity, setQuantity] = React.useState(1)
    const [color, setColor] = React.useState<Irgb>({r: 190, g: 0, b: 0})

    const style: CSS.Properties = {
        height: "70vh",
        width: "80%",
        margin: "auto",
        background: "white",
        border: "5px solid black",
    }

    const h1 : CSS.Properties = {
        fontSize: "3vw",
    }

    const h2 : CSS.Properties = {
        fontSize: "1vw",
    }

    const modal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "55vw",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const URL = import.meta.env.BASE_URL

    return (
        <div>
            <NavBar />
            <h1>Single Product</h1>
            <div style={{height: "100vh", background: "LightGrey", display: "flex"}}>
                <div style={{margin: "20px", width: "50%"}}>
                    <div style={style}>
                        <Model 
                            isMobile={false}
                            color={color}
                            logo={URL+"/test.jpeg"}
                            isLogo={true}
                            full="full"
                            isFull={false}
                            logoP={1}
                            logoS={2}
                        />
                    </div>
                </div>
                <div style={{margin: "20px", paddingLeft: "5px", width: "50%", padding: "10px"}}>
                    <div style={h1}>{product.name}</div>
                    <div style={h2}>$35.00</div>
                    <div style={{margin: "20px", marginLeft: "0px", display: "flex"}}>
                        <p style={{marginRight:"50px"}}>Quantity:</p>
                        <NumberInput value={quantity} setValue={setQuantity} />
                    </div>
                    <div style={{margin: "20px", marginLeft: "0px", display: "flex"}}>
                        <p style={{marginRight:"80px"}}>Size:</p>
                        <Button variant="contained" onClick={() => setOpen(true)}>SIze Guide</Button>
                    </div>
                    <SizePicker selectedSize={size} onSelectSize={setSize}/>
                    <ColorPicker color={color} setColor={setColor}/>
                    <Button variant="contained">Add to Cart</Button>
                </div>
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal} onClick={() => setOpen(false)}>
                    <img src={URL + '/images/Size_chart.png'} alt="size guide" style={{width: "55vw"}}/>
                </Box>
            </Modal>
        </div>
    )
}

export default SingleProduct