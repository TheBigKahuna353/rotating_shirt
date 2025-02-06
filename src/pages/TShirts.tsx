import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

import { reader, doGsap } from '../helper'
import { Irgb } from '../types'
import NavBar from '../components/NavBar'
import DesignsTabs from '../components/DesignsTabs'

import CSS from 'csstype'
import Products from '../components/products'

const TShirts = () => {
	
	const [isMobile, setIsMobile] = useState(false)
	const [color, setColor] = useState<Irgb>({ r: 255, g: 255, b: 255 })
	const [logo, setLogo] = useState('')
	const [isLogo, setIsLogo] = useState(false)
	const [full, setFull] = useState('')
	const [isFull, setIsFull] = useState(false)
	const [logoP, setLogoP] = useState(0)
	const [logoS, setLogoS] = useState(0)
	const [img, setImg] = useState('')
	const [file, setFile] = useState<File | null>(null)

	const [tab, setTab] = useState('New Zealand')

	const tref = useRef(null)

	useEffect(() => {
		if (file) {
			reader(file).then((result) => setImg(result))
		}
	}, [file])


	useEffect(() => {
		if (window.innerWidth < 768) setIsMobile(true)
	}, [])

	useGSAP(() => {
		doGsap(tref)
	})

	const checkScreen = () => {
		if (window.innerWidth < 768) setIsMobile(true)
		else setIsMobile(false)
	}

	window.addEventListener('resize', checkScreen)

	const style : CSS.Properties = {
			fontFamily: "sans-serif", /* Correct the font-family syntax */
			fontSize: "40px", /* Change the font size */
			color: "#000000", /* Change the text color */
			textAlign: "center", /* Center align the text */
			margin: "0px 0", /* Add margin above and below the h2 */
			fontWeight: "bold", /* Apply bold using font-weight */
			padding: "14px 20px",
			backgroundColor: "white",
		}

	return (
		<div >
			<NavBar />
			<h2 style={style}>Check out our awesome designs</h2>
			<DesignsTabs tab={tab} setTab={setTab}/>
			<Products tab={tab} />
			{/* <section ref={tref} className="h-full">
				<Model
					isMobile={isMobile}
					color={color}
					logo={logo}
					isLogo={isLogo}
					full={full}
					isFull={isFull}
					logoP={logoP}
					logoS={logoS}
				/>
			</section> */}
		</div>
	)
}

export default TShirts
