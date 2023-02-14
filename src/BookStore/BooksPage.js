import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Books from "./Books.json";
import { EachBook } from "./EachBook";

export const BooksPage = () => {
  // const [cartBooks, setCartBooks] = useState([]);
  const [newCart, setNewCart] = useState([]);

  const addToCartHandler = (id, price) => {
    const clickedBook = Books.find((book) => book.Id === id);
    const newCartBook = newCart.find((book) => book.Id === id);
    let updatedCart = {};
    if (!newCartBook) {
      updatedCart = [...newCart, { ...clickedBook, count: 0 }];
    } else {
      updatedCart = newCart.map((item) => {
        if (item.Id === id) {
          return { ...clickedBook, count: newCartBook.count + 1 };
        } else {
          return item;
        }
      });
    }
    setNewCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const existingItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setNewCart(existingItems);
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid item container>
          {Books.map((book) => (
            <EachBook
              key={book.Id}
              id={book.Id}
              title={book.Title}
              image={book.img}
              price={book.Price}
              author={book.Author}
              addToCartHandler={addToCartHandler}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
