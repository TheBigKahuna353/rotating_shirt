import NavBar from "../components/NavBar";
import { Model } from "../model";



const CustomDesigner = () => {
    return (
        <div>
            <NavBar />
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1>Custom Designer</h1>
                <Model 
                    isMobile={false}
                    color={{r: 255, g: 255, b: 255}}
                    logo=""
                    isLogo={false}
                    isFull={false}
                    logoS={1}
                    logoP={0}
                    full="front"
                />
            </div>
        </div>
    );
}


export default CustomDesigner;