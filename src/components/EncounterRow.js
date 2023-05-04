import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @name EncounterRow
 * @description displays a row in encounter table
 * @param {*} encounter
 * @returns component
 */
function EncounterRow({ encounter }) {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate(`/patients/${encounter.patient_id}/encounters/${encounter.id}`);
  };
  return (
    <tr>
      <td>{encounter.id}</td>
      <td>{encounter.visitCode}</td>
      <td>{encounter.provider}</td>
      <td>{encounter.date.slice(0, 10)}</td>
      <td><button type="button" onClick={() => goToDetails()}>View Details</button></td>
    </tr>
  );
}

export default EncounterRow;
