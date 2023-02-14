import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome to My Projects</h1>
      </div>
      <nav>
        <Link to="profile">
          <h2>Profile</h2>
        </Link>
        <br />
        <Link to="events">
          <h2>CalendarEvents</h2>
        </Link>
        <Link to="bookstore">
          <h2>BookStore</h2>
        </Link>
      </nav>
    </div>
  );
};

// const clickedBook = Books.find((book) => id === book.Id);
// console.log(clickedBook);

// let storage = JSON.parse(localStorage.getItem("cart"));
// if (storage === null) {
//   storage = [];
// } else {
//   const addedBooks = [...storage, clickedBook];
//   localStorage.setItem("cart", JSON.stringify(addedBooks));
// }
