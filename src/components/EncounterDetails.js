import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './PatientDetails.module.css';

/**
 * @name EncounterDetails
 * @description shows details of an individual encounter
 * @returns component
 */
function EncounterDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const encounterId = location.pathname.split('/')[4];
  const patientId = location.pathname.split('/')[2];
  const [notes, setNotes] = useState('');
  const [visitCode, setVisitCode] = useState('');
  const [provider, setProvider] = useState('');
  const [billingCode, setBillingCode] = useState('');
  const [icd10, setIcd10] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [copay, setCopay] = useState('');
  const [chiefComplaint, setChiefComplaint] = useState('');
  const [pulse, setPulse] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [date, setDate] = useState('');
  useEffect(() => {
    /**
     * @name getThisEncounter
     */
    const getThisEncounter = async () => {
      const response = await fetch(`http://localhost:8080/patients/${patientId}/encounters/${encounterId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const encountersResponse = await response.json();
      if (response.status === 200) {
        setNotes(encountersResponse.notes);
        setVisitCode(encountersResponse.visitCode);
        setProvider(encountersResponse.provider);
        setBillingCode(encountersResponse.billingCode);
        setIcd10(encountersResponse.icd10);
        setCopay(encountersResponse.copay);
        setTotalCost(encountersResponse.totalCost);
        setChiefComplaint(encountersResponse.chiefComplaint);
        setPulse(encountersResponse.pulse);
        setSystolic(encountersResponse.systolic);
        setDiastolic(encountersResponse.diastolic);
        setDate(encountersResponse.date);
      }
    };
    getThisEncounter();
  }, [encounterId, patientId]);
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Encounter ID</td>
            <td>{encounterId}</td>
          </tr>
          <tr>
            <td>Notes</td>
            <td>{notes}</td>
          </tr>
          <tr>
            <td>Visit Code</td>
            <td>{visitCode}</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>{provider}</td>
          </tr>
          <tr>
            <td>Billing Code</td>
            <td>{billingCode}</td>
          </tr>
          <tr>
            <td>ICD10</td>
            <td>{icd10}</td>
          </tr>
          <tr>
            <td>Total Cost</td>
            <td>{totalCost}</td>
          </tr>
          <tr>
            <td>Copay</td>
            <td>{copay}</td>
          </tr>
          <tr>
            <td>Chief Complaint</td>
            <td>{chiefComplaint}</td>
          </tr>
          <tr>
            <td>Pulse</td>
            <td>{pulse}</td>
          </tr>
          <tr>
            <td>Systolic</td>
            <td>{systolic}</td>
          </tr>
          <tr>
            <td>Diastolic</td>
            <td>{diastolic}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{date.slice(0, 10)}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        className={styles.btn}
        onClick={() => navigate(`/patients/${patientId}/edit-encounter/${encounterId}`)}
      >
        EDIT THIS ENCOUNTER
      </button>
    </div>
  );
}

export default EncounterDetails;
