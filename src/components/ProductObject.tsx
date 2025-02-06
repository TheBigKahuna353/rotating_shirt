import { Card, CardActionArea, CardMedia } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { Link } from "react-router-dom";

import type { Product } from "../types";

interface ProductObjectProps {
    product: Product
}

const ProductObject = (props: ProductObjectProps) => {


    const product = props.product;

    const url = import.meta.env.BASE_URL;

  return (
    <div style={{width: "20%", margin: "20px", height: "300px", position: "relative", minWidth: "250px"}}>
        <Card elevation={3} >
            <Carousel swipe={false} autoPlay={false}>
                <CardActionArea component={Link} to={`/products/${product.name}`}>
                    <CardMedia component="img" image={url + "/" + product.image1} height={"250"}/>
                </CardActionArea>
                <CardActionArea>
                    <CardMedia component="img" image={url + "/" + product.image2} height={"250"}/>
                </CardActionArea>
                <CardActionArea>
                    <CardMedia component="img" image={url + "/" + product.image3} height={"250"}/>
                </CardActionArea>
            </Carousel>
        </Card>
        <div style={{textAlign: "center", backgroundColor: "white"}}>
            <CardActionArea component={Link} to={`/products/${product.name}`}>
                <h2>{product.name}</h2>
            </CardActionArea>
        </div>
    </div>
  );
}


export default ProductObject;