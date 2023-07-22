import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/App.css";
import Coffee from "./screens/Coffee";
import Banner from "./components/Banner";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/coffee" element={<Coffee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
