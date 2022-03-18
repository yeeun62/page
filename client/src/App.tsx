import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignPage from "./pages/DesignPage";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/design" element={<DesignPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
