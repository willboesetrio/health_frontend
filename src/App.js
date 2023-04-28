import './App.css';
import React, { Route, Routes } from 'react-router-dom';
import AllPatients from './components/AllPatients';
import CreatePatient from './components/CreatePatient';
import PatientDetails from './components/PatientDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPatients />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
        <Route path="/new-patient" element={<CreatePatient />} />
      </Routes>
    </div>
  );
}

export default App;
