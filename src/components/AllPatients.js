import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AllPatients.module.css';
import PatientRow from './PatientRow';

function AllPatients() {
  const navigate = useNavigate();

  const [patientsArray, setPatientsArray] = useState([]);

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

  return (
    <div>
      <table className={styles.test}>
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
            <PatientRow patient={patient} key={patient.id} />
          ))}
        </tbody>
      </table>
      <button type="button" onClick={() => navigate('/new-patient')}>CREATE NEW PATIENT</button>
    </div>
  );
}

export default AllPatients;
