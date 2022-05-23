import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./containers/Home";
import Contactpage from "./containers/Contact";
import Aboutpage from "./containers/About";
import Loginpage from "./containers/Login";
import Bookspage from "./containers/Books";
import Rentpage from "./containers/Rent";
import Yourbookspage from "./containers/Yourbooks";
import Adminsearchbookpage from "./containers/Adminsearchbook";
import Viewrentedbooks from "./containers/Viewrentedbooks";
import Libadminpage from "./containers/Libadmin";
import Librarianpage from "./containers/Librarian";
import Regfunc from "./containers/Signup";
import Guestbookfunc from "./containers/Guestbooks";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/contact" element={<Contactpage />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/books" element={<Bookspage />} />
        <Route exact path="/rent" element={<Rentpage />} />
        <Route exact path="/signup" element={<Regfunc />} />
        <Route exact path="/yourbooks" element={<Yourbookspage />} />
        <Route exact path="/guestbooks" element={<Guestbookfunc />} />
        <Route exact path="/viewrentedbooks" element={<Viewrentedbooks />} />
        <Route
          exact
          path="/adminsearchbook"
          element={<Adminsearchbookpage />}
        />
        <Route exact path="/libadmin" element={<Libadminpage />} />
        <Route exact path="/librarian" element={<Librarianpage />} />
      </Routes>
    </>
  );
}

export default App;
