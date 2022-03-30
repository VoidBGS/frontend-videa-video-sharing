import "./style/general.css";
import Homepage from "./pages/Homepage";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/container/Container";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Container>
    </div>

  );
}

export default App;