import Tshirts from './pages/TShirts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import Home from './pages/Home'
import CustomDesigner from './pages/CustomDesigner'
import Cart from './pages/Cart'

const App = () => {

	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/T-SHIRT-GUIDE" element={<Tshirts />} />
				<Route path="/DESIGN-T-SHIRTS" element={<Tshirts />} />
				<Route path="/CUSTOM-DESIGNER" element={<CustomDesigner />} />
				<Route path="/CART" element={<Cart />} />
				<Route path="/NEWS" element={<Tshirts />} />
				<Route path="/products/:name" element={<SingleProduct />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
