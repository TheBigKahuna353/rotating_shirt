import React, { useState } from 'react';
import  CSS  from 'csstype';

interface CollapsablePanelProps {
    data: {
        title: string;
        content: React.ReactNode;
    }
}

const CollapsablePanel = (props: CollapsablePanelProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const { title, content } = props.data;

    const container: CSS.Properties = {
        cursor: "pointer", /* Cursor changes to pointer */
        backgroundColor: "#4CAF50", /* Button background color */
        color: "white", /* Button text color */
        padding: "10px", /* Padding around button */
        border: "none", /* Remove border */
        outline: "none", /* Remove outline */
        fontSize: "1.5vw", /* Font size */
        margin: "20px", /* Margin around button */
        fontFamily: "Arial, sans-serif",
        width: "100%",
        textAlign: "left"
    }

    const contentStyle: CSS.Properties = {
        backgroundColor: "#060606", /* Background color of the panel */
        border: "5px solid #060606", /* Border around the panel */
        borderRadius: "2px", /* Rounded corners */
        marginLeft: "20px", /* Margin to the left of panel */
        padding: "0px", /* Padding inside the panel */
        color: "white", /* Text color */
        fontFamily: "Arial, sans-serif"
    }

    return (
        <div>
            <button style={container} onClick={() => setIsOpen(!isOpen)}>
                <span>{isOpen ? "-" : "+"}</span>
                <h2>{title}</h2>
            </button>
            {isOpen && (
                <div style={contentStyle}>
                    {content}
                </div>
            )}
        </div>
    );
}

export default CollapsablePanel;