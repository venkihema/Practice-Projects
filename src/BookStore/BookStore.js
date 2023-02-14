import { Link, Outlet } from "react-router-dom";

export const BookStore = () => {
  return (
    <div>
      <nav
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "#058C70",
          lineHeight: "50px",
          marginBottom: "10px",
        }}
      >
        <Link
          style={{
            color: "white",
            fontSize: "2em",
            textDecoration: "none",
            padding: "0px 20px ",
          }}
          to="books"
        >
          Books
        </Link>
        <Link
          style={{
            color: "white",
            fontSize: "2em",
            textDecoration: "none",
            padding: "0px 20px ",
          }}
          to="cart"
        >
          Cart
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
