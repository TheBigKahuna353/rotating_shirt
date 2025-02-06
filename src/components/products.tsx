import ProductObject from "./ProductObject"
import {getDefault, getProducts} from "../products"
import React from "react";
import type { Product } from "../types";

interface ProductProps {
    tab: string;
}



const Products = (props: ProductProps) => {

    const [products, setProducts] = React.useState<Product[]>([])

    React.useEffect(() => {
        setProducts(getProducts(props.tab))
    }, [props.tab])

    const defaultProducts = getDefault()


    return (
        <div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", background: "grey", height: "100vh", rowGap: "50px"}}>
                {products?.map((product, index) => (
                    <ProductObject key={index+product.name} product={product} />
                ))}
                <ProductObject product={defaultProducts[0]} />
            </div>
        </div>
    )
}


export default Products