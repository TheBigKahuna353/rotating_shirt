import type { Product } from './types';

// TODO create backend to get products
// currently just a placeholder
const products = [
    {
        "category": "New Zealand",
        "products": [{
            name: "Top 2",
            image1: "tops/top_2/1.PNG",
            image2: "tops/top_2/2.PNG"
        }]
    },
    {
        "category": "CHINA",
        "products": [{
            name: "cpp",
            image1: "tops/cpp/1.PNG",
            image2: "tops/cpp/2.PNG",
            image3: "tops/cpp/3.PNG"
        }]
    },
    {
        "category": "Trump",
        "products": [{
            name: "trump",
            image1: "tops/trump/1.PNG",
            image2: "tops/trump/2.PNG",
            image3: "tops/trump/3.PNG"
        }]
    },
]


const getProducts = (category: string) => {
    return products.find((product) => product.category === category)?.products as Product[];
}

const getDefault = () => {
    return products[0].products as Product[];
}

const getProduct = (name: string) => {
    return products.find((product) => product.products.find((product) => product.name === name))?.products.find((product) => product.name === name) as Product;
}

export {getProducts, getDefault, getProduct};