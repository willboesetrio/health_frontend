import React from 'react';
import { useNavigate } from 'react-router-dom';

function PatientRow({ patient, deletePatient }) {
  const navigate = useNavigate();

  const viewPatient = () => {
    navigate(`patients/${patient.id}`);
  };

  return (
    <tr>
      <td>
        {patient.firstName}
        {' '}
        {patient.lastName}
      </td>
      <td>{patient.age}</td>
      <td>{patient.gender}</td>
      <td>
        <button type="button" onClick={() => viewPatient()}>VIEW DETAILS</button>
      </td>
      <td>
        <button type="button" onClick={() => deletePatient(patient.id)}>DELETE</button>
      </td>
    </tr>
  );
}

export default PatientRow;
