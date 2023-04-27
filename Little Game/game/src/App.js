import { Routes, Route } from 'react-router-dom';

import { Test } from './components/Test/Test';
import { CardTrue } from './components/CardTrue/CardTrue';
import { CardFalse } from './components/CardFalse/CardFalse';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/true' element={<CardTrue />} />
        <Route path='/false' element={<CardFalse />} />
      </Routes>
    </div>
  );
}

export default App;