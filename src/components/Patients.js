import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AllPatients.module.css';
import PatientRow from './PatientRow';

function Patients() {
  const navigate = useNavigate();

  const [patientsArray, setPatientsArray] = useState([]);
  const [conflictError, setConflictError] = useState(false);

  useEffect(() => {
    /**
         * @name getPatients
         * @description fetch call to get all patients
         */
    const getPatients = async () => {
      try {
        const response = await fetch('http://localhost:8080/patients', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const allPatients = await response.json();
        console.log(allPatients);
        if (response.status === 200) {
          setPatientsArray(allPatients);
          // setLoading(false);
        }
      } catch (err) {
        console.log(err);
        // setServerError(true);
        // setLoading(false);
      }
    };
    getPatients();
  }, []);
  /**
  * @name deletePatient
  * @description deletes an individual patient
  * @param {*} id
  */
  const deletePatient = async (id) => {
    const response = await fetch(`http://localhost:8080/patients/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // if successful,remove the patients from the state array and rerender the patients
    if (response.status === 204) {
      setConflictError(false);
      console.log('successful delete');
      console.log(response.status);
      let currentIndex;
      for (let i = 0; i < patientsArray.length; i += 1) {
        if (patientsArray[i].id === id) { currentIndex = i; }
      }
      const previousState = [...patientsArray];
      previousState.splice(currentIndex, 1);
      setPatientsArray(previousState);
    }
    if (response.status === 409) {
      setConflictError(true);
    }
  };

  return (
    <div>
      {conflictError
      && <p className={styles.err}>You cannot delete a patient with existing encounters</p>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patientsArray.length > 0 && patientsArray.map((patient) => (
            <PatientRow patient={patient} deletePatient={deletePatient} key={patient.id} />
          ))}
        </tbody>
      </table>
      <button type="button" onClick={() => navigate('/new-patient')}>CREATE NEW PATIENT</button>
    </div>
  );
}

export default Patients;
