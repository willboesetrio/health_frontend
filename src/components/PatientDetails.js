import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './PatientDetails.module.css';

function PatientDetails() {
  const [patient, setPatient] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const currentId = location.pathname.slice(-1);

  useEffect(() => {
    /**
         * @name getPatient
         * @description fetch call to get patient by Id
         */
    const getPatient = async () => {
      try {
        const response = await fetch(`http://localhost:8080/patients/${currentId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const thisPatient = await response.json();
        console.log(thisPatient);
        if (response.status === 200) {
          setPatient(thisPatient);
          // setLoading(false);
        }
      } catch (err) {
        console.log(err);
        // setServerError(true);
        // setLoading(false);
      }
    };
    getPatient();
  }, [currentId]);

  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>FIRST</td>
            <td>{patient.firstName}</td>
          </tr>
          <tr>
            <td>LAST</td>
            <td>{patient.lastName}</td>
          </tr>
          <tr>
            <td>SSN</td>
            <td>{patient.ssn}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{patient.email}</td>
          </tr>
          <tr>
            <td>street</td>
            <td>{patient.street}</td>
          </tr>
          <tr>
            <td>city</td>
            <td>{patient.city}</td>
          </tr>
          <tr>
            <td>state</td>
            <td>{patient.state}</td>
          </tr>
          <tr>
            <td>postal</td>
            <td>{patient.postal}</td>
          </tr>
          <tr>
            <td>age</td>
            <td>{patient.age}</td>
          </tr>
          <tr>
            <td>height</td>
            <td>
              {patient.height}
              `&quot;`
            </td>
          </tr>
          <tr>
            <td>weigt</td>
            <td>
              {patient.weight}
              {' '}
              lbs.
            </td>
          </tr>
          <tr>
            <td>insurance</td>
            <td>{patient.insurance}</td>
          </tr>
          <tr>
            <td>gender</td>
            <td>{patient.gender}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className={styles.btn} onClick={() => navigate(`/edit-patient/${patient.id}`)}>EDIT THIS PATIENT</button>
      <button type="button" className={styles.btn} onClick={() => navigate('/')}>BACK TO ALL PATIENTS</button>
    </div>
  );
}

export default PatientDetails;
