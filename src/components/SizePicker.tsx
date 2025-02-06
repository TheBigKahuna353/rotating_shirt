
interface SizePickerProps {
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const sizes = ["6-8", "8-10", "10-12", "12-14", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

const SizePicker = (props: SizePickerProps) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", width: "50vw", maxWidth: "500px"}}>
            {sizes.map((size) => {
                return (
                    <button 
                        style={{
                            border: "2px solid black",
                            padding: "10px",
                            margin: "15px",
                            marginTop: "5px",
                            marginBottom: "5px",
                            width: "max(3vw, 60px)",
                            backgroundColor: size === props.selectedSize ? "black" : "lightgray",
                            cursor: "pointer",
                            color: size === props.selectedSize ? "white" : "black"
                        }}
                        onClick={() => props.onSelectSize(size)}
                    >
                        {size}
                    </button>
                )
            })}
        </div>
    )

}

export default SizePicker;