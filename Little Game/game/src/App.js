import {Routes, Route} from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Quiz } from "./components/Quiz/Quiz";
import { Result } from "./components/Result/Result";
import { CreateQuestion } from "./components/CreateQuestion/CreateQuestion";
import { Footer } from "./components/Footer/Footer";
import { Page404 } from "./components/404/404"

function App() {
  return (
    <div className="main">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/create" element={<CreateQuestion />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;