import { Button, ButtonGroup } from "@mui/material";

import CSS from "csstype";


const tabs = ["New Zealand", "Politics", "Trump", "THE U.S.", "LIBERALS", "RELIGON", "CARS", "ISRAEL", "CHINA", "ENVIRONMENT", "MISC", "PATTERN"];

const captions = [
    "Things Kiwi",
    "Politics is a messed up game",
    "Wear the man himself",
    "It's a big big land",
    "So much to take the piss out of",
    "Christ is King",
    "Round and round the wheels go",
    "God bless the holy land",
    "Authoritarianism, fakes, scams, enslavement, deception, China has it all",
    "Some people are just misinformed",
    "All the other stuff",
    "Full design all over"
]


interface DesignsTabsProps {
    tab: string;
    setTab: (tab: string) => void;
}

const DesignsTabs = (props: DesignsTabsProps) => { 


    const style : CSS.Properties = {
        fontFamily: "Raleway",
        float: "left",
        padding: "15px 25px",
        border: "1px solid #ddd",
        borderBottom: "none",
        color: "#000000",
    }

    const style2 : CSS.Properties = {
        ...style,
        backgroundColor: "black",
        color: "white",
    }

    const h2: CSS.Properties = {
        textAlign: "center",
        background: "black",
        color: "white",
        fontSize: "50px",
        fontFamily: "Raleway",
        fontWeight: "bold",
        padding: "14px",
    }

    const i = tabs.indexOf(props.tab);

    return (
        <div style={{background: "white"}}>
            <ButtonGroup variant="outlined" color="primary" aria-label="text primary button group">
                {tabs.map((tab, index) => (
                    <Button 
                        style={index === i ? style2 : style} 
                        key={index} 
                        sx={ {":hover":{ background: "#F78C8E"}}}
                        onClick={() => props.setTab(tab)}
                        >
                            {tab}
                        </Button>
                ))}
            </ButtonGroup>
            <div style={h2}>{captions[i]}</div>
        </div>
    );
}

export default DesignsTabs;