import {Routes, Route} from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Quiz } from "./components/Quiz/Quiz";
import { Result } from "./components/Result/Result";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;