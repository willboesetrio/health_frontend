import './App.css';
import React, { Route, Routes } from 'react-router-dom';
import Patients from './components/Patients';
import CreatePatient from './components/CreatePatient';
import PatientDetails from './components/PatientDetails';
import EditPatient from './components/EditPatient';
import EncounterDetails from './components/EncounterDetails';
import CreateEncounter from './components/CreateEncounter';
import EditEncounter from './components/EditEncounter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Patients />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
        <Route path="/new-patient" element={<CreatePatient />} />
        <Route path="/edit-patient/:id" element={<EditPatient />} />
        <Route path="/patients/:patientId/encounters/:encounterId" element={<EncounterDetails />} />
        <Route path="/patients/:id/encounters/create" element={<CreateEncounter />} />
        <Route path="/patients/:patientId/edit-encounter/:encounterId" element={<EditEncounter />} />
      </Routes>
    </div>
  );
}

export default App;
