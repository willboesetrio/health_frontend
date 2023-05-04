import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './PatientDetails.module.css';
import EncounterRow from './EncounterRow';

/**
 * @name PatientDetails
 * @description displays patient detailed view
 * @returns component
 */
function PatientDetails() {
  const [patient, setPatient] = useState([]);
  const [encounters, setEncounters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = location.pathname.split('/')[2];

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
    /**
     * @name getEncountersOnPatient
     * @description gets all encounters with a patient ID that match the current patient
     */
    const getEncountersOnPatient = async () => {
      const response = await fetch(`http://localhost:8080/patients/${currentId}/encounters`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const encountersResponse = await response.json();
      console.log(encountersResponse);
      if (response.status === 200) {
        setEncounters(encountersResponse);
      }
    };
    getPatient();
    getEncountersOnPatient();
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
              &quot;
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
      {encounters.length > 0 ? <h4>Encounters:</h4> : <p>no encounters for this patient</p>}
      <button type="button" className={styles.btn} onClick={() => navigate(`/patients/${patient.id}/encounters/create`)}>CREATE NEW ENCOUNTER</button>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Encounter ID</th>
            <th>Visit Code</th>
            <th>Provider</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
          {encounters.length > 0
          && encounters.map((enc) => <EncounterRow encounter={enc} key={enc.id} />)}
        </tbody>
      </table>
    </div>
  );
}

export default PatientDetails;
