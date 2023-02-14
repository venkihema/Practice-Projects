import { Box, Button, Grid } from "@mui/material";
import "../App.css";
export const EachBook = ({
  title,
  id,
  author,
  image,
  price,
  addToCartHandler = () => {},
}) => {
  return (
    <Box
      style={{
        height: "300px",
        width: "200px",
        margin: "11.5px",
        boxShadow: "8px 8px 10px #646C64 ",
        borderRadius: "10px",
      }}
    >
      <Grid container>
        <Grid item container sx={{ height: "200px", position: "relative" }}>
          <img
            src={image}
            alt="images"
            style={{ width: "200px", height: "200px", borderRadius: "10px" }}
          />
          <Button
            onClick={() => addToCartHandler(id, price)}
            sx={{ position: "absolute", right: "5px", top: "5px" }}
            variant="contained"
          >
            Cart
          </Button>
        </Grid>
        <Grid item container xs={12}>
          <Grid item container xs={12} mt={2}>
            <h6>Book Name: {title}</h6>
          </Grid>
          <Grid item container xs={12} mt={2}>
            <h6>Author: {author}</h6>
          </Grid>
          <Grid item container xs={12} mt={2}>
            <h6>Price: {price}</h6>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
