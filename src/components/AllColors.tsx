import { MouseEvent, useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { getPixel } from "../helper";

// Define color type
type Color = {
  name: string;
  hex: string;
  category: string;
};

interface ColorPickerModalProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
}

// Full color list matching the image layout
const colors: Color[] = [
  { name: "Yellow", hex: "#FFCC00", category: "Yellow" },
  { name: "Orange", hex: "#FF6600", category: "Orange" },
  { name: "Red", hex: "#D30000", category: "Red" },
  { name: "Pink", hex: "#FF00A2", category: "Pink" },
  { name: "Violet", hex: "#8B00ED", category: "Violet" },
  { name: "Blue", hex: "#0018F9", category: "Blue" },
  { name: "Green", hex: "#3BB143", category: "Green" },
  { name: "Brown", hex: "#7D3F00", category: "Brown" },
  { name: "Gray", hex: "#828282", category: "Gray" },
  // Add more colors to match the full list
];

export default function ColorPickerModal(props: ColorPickerModalProps) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const { open, setOpen } = props;


     // Function to handle clicks on the image

    const handleImageClick = (event: MouseEvent<HTMLImageElement>) => {

        // Get the position of the click relative to the image
        const image = event.currentTarget;
        const x = event.pageX - image.getBoundingClientRect().left;
        
        const y = event.pageY - image.getBoundingClientRect().top - window.scrollY;
        
        // Get the color at that position
        
        const color = getPixel(URL+"/images/ColorChart.jpeg", x, y);
        
        // Add the click and color to our list
        console.log(color);
        console.log(x + " " + y);
        
        // Update the display to show the new click
        
        // ... (your code to update the display)
    
    } 

    const URL = import.meta.env.BASE_URL

  return (
    <div>
      {/* MUI Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "90vw",
                maxWidth: "800px",
                height: "90vh",
                bgcolor: "white",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
                overflow: "scroll",
            }}
        >
            <div onClick={handleImageClick}>
                <img src={URL + "/images/ColorChart.jpeg"} alt="color chart" style={{ width: "100%" }}/>
            </div>

          {/* Selected Color Display */}
          {selectedColor && (
            <Typography sx={{ mt: 2, textAlign: "center" }}>
              Selected Color:{" "}
              <span style={{ color: selectedColor.hex, fontWeight: "bold" }}>
                {selectedColor.name} ({selectedColor.hex})
              </span>
            </Typography>
          )}

          {/* Close Button */}
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
