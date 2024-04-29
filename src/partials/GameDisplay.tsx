import { styled } from "@mui/system";

const Container = styled("div")({
    gridArea: "game-display",
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "20px 1fr 33px",
    gridTemplateAreas: `
        "max-profit-box"
        "graphic-display"
        "previous-crashes"
    `,
  boxShadow: "0 4px 8px -4px #0000001a",
  backgroundColor: "#4c4c4c",
  borderRadius: "0.4rem",
  margin: "5px"
})

const GameDisplay = () => {
  
  
  return (
    <Container>
      
    </Container>
  )
}

export default GameDisplay;