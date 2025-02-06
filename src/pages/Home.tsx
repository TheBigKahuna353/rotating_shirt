import NavBar from "../components/NavBar"
import CSS from 'csstype'
import * as panelData from "../homepageText"
import CollapsablePanel from "../components/CollapsablePanel"

const data = [panelData.getOne(), panelData.getTwo(), panelData.getThree(), panelData.getFour(), panelData.getFive(), 
    panelData.getSix(), panelData.getSeven(), panelData.getEight(), panelData.getNine(), panelData.getTen()
]

const Home = () => {

    const container: CSS.Properties = {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        fontFamily: "Lucida Handwriting, cursive", /* Change the font family */
        margin: "5px", /* Add some margin */
        fontSize: "2vw", /* Change the font size */

        color: "#F7F9FC", /* Change the text color */
    }

    const image: CSS.Properties = {
        width: "68%",
        height: "auto"
    }

    const URL = import.meta.env.BASE_URL

    return (
        <div>
            <NavBar />
            <div style={container}>
                A revolution in common sense
            </div>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={URL + "/" + item.image} style={image}/>
                        <CollapsablePanel data={{title: item.title, content: item.content}} />
                    </div>
                )
            })}
        </div>
    )
}


export default Home