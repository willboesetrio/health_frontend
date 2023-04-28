import './App.css';
import AllPatients from "./components/AllPatients";
import PatientDetails from './components/PatientDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPatients />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
      </Routes>
    </div>
  );
}

export default App;
