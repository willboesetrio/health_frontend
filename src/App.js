import './App.css';
import React, { Route, Routes } from 'react-router-dom';
import Patients from './components/Patients';
import CreatePatient from './components/CreatePatient';
import PatientDetails from './components/PatientDetails';
import EditPatient from './components/EditPatient';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Patients />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
        <Route path="/new-patient" element={<CreatePatient />} />
        <Route path="/edit-patient/:id" element={<EditPatient />} />
      </Routes>
    </div>
  );
}

export default App;
