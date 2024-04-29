import { styled } from "@mui/system";

const Container = styled("div")({
    gridArea: "result-panel",
    marginBottom: "10px",
    display: "grid",
    overflow: "hidden",
    gridTemplateColumns: "auto",
    gridTemplateRows: "1fr 30px",
    gridTemplateAreas: `
        "player-list-table"
        "player-list-stats"
    `,
  boxShadow: "0 4px 8px -4px #0000001a",
  backgroundColor: "#4c4c4c",
  borderRadius: "0.4rem",
  margin: "5px"
})

const ResultPanel = () => {
  
  
  return (
    <Container>
      
    </Container>
  )
}

export default ResultPanel;