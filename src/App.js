import "./App.css";
import { Main } from "./Main/Main";
import { Parent } from "./Parent";
import { UseRefHook } from "./UseRefHook";
import { Routes, Route } from "react-router-dom";
import { CalendarEvents } from "./CalendarEvents/CalendarEvents";
import { Navbar } from "./Navbar";
import { BookStore } from "./BookStore/BookStore";
import { CartPage } from "./BookStore/CartPage";
import { BooksPage } from "./BookStore/BooksPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/profile" element={<Main />} />
        <Route path="/events" element={<CalendarEvents />} />
        <Route path="/bookstore" element={<BookStore />}>
          <Route index element={<BooksPage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
      {/* <Parent />
      <UseRefHook /> */}
    </div>
  );
}

export default App;
