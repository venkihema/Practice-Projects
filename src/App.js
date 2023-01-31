import "./App.css";
import { Main } from "./Main/Main";
import { Parent } from "./Parent";
import { UseRefHook } from "./UseRefHook";
import { Routes, Route } from "react-router-dom";
import { CalendarEvents } from "./CalendarEvents/CalendarEvents";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/profile" element={<Main />} />
        <Route path="/events" element={<CalendarEvents />} />
      </Routes>
      {/* <Parent />
      <UseRefHook /> */}
    </div>
  );
}

export default App;
