import './App.css';
import { Routes, Route} from "react-router-dom"
import CreatePage from './views/CreatePage';
import MainPage from './views/MainPage';
import UpdatePage from './views/UpdatePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="/edit/:id" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
