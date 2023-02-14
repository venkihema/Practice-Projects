import { Box, Grid, Button } from "@mui/material";

export const CartItem = ({
  id,
  title,
  image,
  price,
  author,
  count,
  removeCartItem = () => {},
}) => {
  return (
    <Box
      style={{
        height: "200px",
        width: "100%",
        margin: "11.5px",
        boxShadow: "8px 8px 10px #646C64 ",
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          container
          xs={4}
          sx={{ height: "200px", position: "relative" }}
        >
          <img
            src={image}
            alt="images"
            style={{ width: "200px", height: "200px", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item container xs={6}>
          <Grid item container xs={12} mt={2}>
            <h6>Book Name: {title}</h6>
          </Grid>
          <Grid item container xs={12} mt={2}>
            <h6>Author: {author}</h6>
          </Grid>
          <Grid item container xs={12} mt={2}>
            <h6>No of Books: {count + 1}</h6>
          </Grid>
          <Grid item container xs={12} mt={2}>
            {count > 0 ? (
              <h6>
                Price: {price}*{count + 1} = {price * (count + 1)} /-
              </h6>
            ) : (
              <h6>Price:{price}/-</h6>
            )}
          </Grid>
        </Grid>
        <Grid item container xs={2}>
          <Button
            variant={"contained"}
            sx={{ height: "50px", marginTop: "70px" }}
            onClick={() => removeCartItem(id, count, price)}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
