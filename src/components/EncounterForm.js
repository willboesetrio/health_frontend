import React from 'react';
import styles from './CreatePatient.module.css';

function EncounterForm({
  formClicked, notes, notesErr, setNotes, visitCode, visitCodeErr, setVisitCode,
  provider, providerErr, setProvider, billingCode, billingCodeErr, setBillingCode,
  icd10, setIcd10, icd10Err, totalCost, totalCostErr, setTotalCost, copay,
  setCopay, copayErr, chiefComplaint, setChiefComplaint, chiefComplaintErr,
  pulse, setPulse, diastolic, setDiastolic, systolic, setSystolic, date, dateErr,
  setDate, handleSubmit
}) {
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
      <button type="button" className={styles.btn} onClick={() => handleSubmit()}>SUBMIT</button>
    </div>
  );
}

export default EncounterForm;
