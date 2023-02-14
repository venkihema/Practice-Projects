import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { CartItem } from "./CartItem";

export const CartPage = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartData(cart);
  }, []);

  const removeCartItem = (id, count, price) => {
    const filteredItems = cartData.filter((item) => item.Id !== id);
    setCartData(filteredItems);
    localStorage.setItem("cart", JSON.stringify(filteredItems));
  };

  const total = cartData.reduce((p, c) => p + (c.Price + c.Price * c.count), 0);

  return (
    <Box>
      <Grid container spacing={2}>
        {cartData.map((item) => (
          <Grid item container xs={12} key={Math.random()}>
            <CartItem
              id={item.Id}
              title={item.Title}
              price={item.Price}
              image={item.img}
              author={item.Author}
              count={item.count}
              removeCartItem={removeCartItem}
            />
          </Grid>
        ))}
        <Grid sx={{ ml: "20px" }}>
          <h2> Total Amount to bo Paid: Rs. {total}/-</h2>
        </Grid>
      </Grid>
    </Box>
  );
};
