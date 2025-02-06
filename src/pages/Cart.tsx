import { CartDto } from "../types";
import { useCart } from "../cart/cartStore";
import NavBar from "../components/NavBar";


const Cart = () => {

    const { cart, removeItem } = useCart();

    const cartList = Object.values(cart);

    return (
        <div>
            <NavBar />
            <div style={{backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                {cartList.map((item: CartDto) => (
                    <div key={item.id} style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <img src={item.image} alt={item.name} style={{width: "100px", height: "100px"}} />
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;