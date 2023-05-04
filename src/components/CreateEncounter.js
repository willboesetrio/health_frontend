import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CreatePatient.module.css';

function CreateEncounter() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.pathname.split('/')[2];
  // form variables
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
  const [formClicked, setFormClicked] = useState(false);
  // error variables
  const [notesErr, setNotesErr] = useState(false);
  const [visitCodeErr, setVisitCodeErr] = useState(false);
  const [providerErr, setProviderErr] = useState(false);
  const [billingCodeErr, setBillingCodeErr] = useState(false);
  const [icd10Err, setIcd10Err] = useState(false);
  const [totalCostErr, setTotalCostErr] = useState(false);
  const [copayErr, setCopayErr] = useState(false);
  const [chiefComplaintErr, setChiefComplaintErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  const postNewEncounter = async (payloadObject) => {
    const response = await fetch(`http://localhost:8080/patients/${patientId}/encounters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payloadObject)
    });
    if (response.status === 201) {
      console.log('THE POST WENT THROUGH');
      navigate(`/patients/${patientId}`);
    }
  };
  useEffect(() => {
    // Regular Expressions
    const visitCodeRegex = /^[a-zA-Z][\d][a-zA-Z][ ][\d][a-zA-Z][\d]$/;
    const billingCodeRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    const icd10Regex = /^[a-zA-Z][\d][\d]$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!notes) { setNotesErr(true); } else { setNotesErr(false); }
    if (!visitCode.match(visitCodeRegex)) {
      setVisitCodeErr(true);
    } else { setVisitCodeErr(false); }
    if (!provider) { setProviderErr(true); } else { setProviderErr(false); }
    if (!billingCode.match(billingCodeRegex)) {
      setBillingCodeErr(true);
    } else { setBillingCodeErr(false); }
    if (!icd10.match(icd10Regex)) { setIcd10Err(true); } else { setIcd10Err(false); }
    if (!totalCost || Number.isNaN(totalCost)) {
      setTotalCostErr(true);
    } else { setTotalCostErr(false); }
    if (!copay || Number.isNaN(copay)) {
      setCopayErr(true);
    } else { setCopayErr(false); }
    if (!chiefComplaint) { setChiefComplaintErr(true); } else { setChiefComplaintErr(false); }
    if (!date.match(dateRegex)) { setDateErr(true); } else { setDateErr(false); }
  }, [billingCode,
    chiefComplaint,
    copay,
    date,
    icd10,
    notes,
    provider,
    totalCost,
    visitCode]);
  const handleCreate = () => {
    setFormClicked(true);
    const payloadObject = {
      billingCode,
      chiefComplaint,
      copay: parseFloat(copay),
      date,
      diastolic: Number(diastolic),
      icd10,
      notes,
      provider,
      pulse: Number(pulse),
      systolic: Number(systolic),
      totalCost: parseFloat(totalCost),
      visitCode
    };
    console.log(payloadObject);
    if (!billingCodeErr
        && !chiefComplaintErr
        && !copayErr
        && !dateErr
        && !icd10Err
        && !notesErr
        && !providerErr
        && !totalCostErr
        && !visitCodeErr) {
      postNewEncounter(payloadObject);
    } else {
      console.log('VALIDATION NOT PASSED');
    }
  };
  return (
    <div style={{ width: 400, marginLeft: 200 }}>
      <h3>CREATE NEW ENCOUNTER</h3>
      <div className={styles.container}>
        {formClicked
        && notesErr
        && <p className={styles.err} style={{ marginRight: 100 }}>notes required</p>}
        <div className={styles.formrow}>
          <label htmlFor="notes">
            Notes:
            <input
              type="text"
              id="notes"
              name="notes"
              className={styles.input}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && visitCodeErr
        && <p className={styles.err} style={{ marginRight: 100 }}>visit code must be LDL DLD</p>}
        <div className={styles.formrow}>
          <label htmlFor="visitCode">
            Visit Code:
            <input
              type="text"
              id="visitCode"
              name="visitCode"
              className={styles.input}
              value={visitCode}
              onChange={(e) => setVisitCode(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && providerErr
        && <p className={styles.err} style={{ marginRight: 100 }}>provider required</p>}
        <div className={styles.formrow}>
          <label htmlFor="provider">
            Provider:
            <input
              type="text"
              id="provider"
              name="provider"
              className={styles.input}
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && billingCodeErr
        && <p className={styles.err} style={{ marginRight: 100 }}>must be XXX.XXX.XXX-XX</p>}
        <div className={styles.formrow}>
          <label htmlFor="billingCode">
            Billing Code:
            <input
              type="text"
              id="billingCode"
              name="billingCode"
              className={styles.input}
              value={billingCode}
              onChange={(e) => setBillingCode(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && icd10Err
        && <p className={styles.err} style={{ marginRight: 100 }}>icd10 must be LDD</p>}
        <div className={styles.formrow}>
          <label htmlFor="icd10">
            ICD 10:
            <input
              type="text"
              id="icd10"
              name="icd10"
              className={styles.input}
              value={icd10}
              onChange={(e) => setIcd10(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && totalCostErr
        && <p className={styles.err} style={{ marginRight: 100 }}>cost required</p>}
        <div className={styles.formrow}>
          <label htmlFor="totalCost">
            Total Cost:
            <input
              type="text"
              id="totalCost"
              name="totalCost"
              className={styles.input}
              value={totalCost}
              onChange={(e) => setTotalCost(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && copayErr
        && <p className={styles.err} style={{ marginRight: 100 }}>copay required</p>}
        <div className={styles.formrow}>
          <label htmlFor="copay">
            Copay:
            <input
              type="text"
              id="copay"
              name="copay"
              className={styles.input}
              value={copay}
              onChange={(e) => setCopay(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && chiefComplaintErr
        && <p className={styles.err} style={{ marginRight: 100 }}>cheif complaint required</p>}
        <div className={styles.formrow}>
          <label htmlFor="chiefComplaint">
            Chief Complaint:
            <input
              type="text"
              id="chiefComplaint"
              name="chiefComplaint"
              className={styles.input}
              value={chiefComplaint}
              onChange={(e) => setChiefComplaint(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="pulse">
            Pulse:
            <input
              type="number"
              min={0}
              id="pulse"
              name="pulse"
              className={styles.input}
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="systolic">
            Systolic:
            <input
              type="number"
              min={0}
              id="systolic"
              name="systolic"
              className={styles.input}
              value={systolic}
              onChange={(e) => setSystolic(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="diastolic">
            Diastolic:
            <input
              type="number"
              min={0}
              id="diastolic"
              name="diastolic"
              className={styles.input}
              value={diastolic}
              onChange={(e) => setDiastolic(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && dateErr
        && <p className={styles.err} style={{ marginRight: 100 }}>date must be YYYY-MM-DD</p>}
        <div className={styles.formrow}>
          <label htmlFor="date">
            Date:
            <input
              type="text"
              id="date"
              name="date"
              className={styles.input}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
      </div>
      <button type="button" className={styles.btn} onClick={() => handleCreate()}>CREATE</button>
    </div>
  );
}

export default CreateEncounter;
