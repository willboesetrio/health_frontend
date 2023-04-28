import React from 'react';
import styles from './CreatePatient.module.css';

function CreatePatient() {
  const usStates = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  const genderOptions = ['Male', 'Female', 'Other          '];
  return (
    <div style={{ width: 400, 'margin-left': 200 }}>
      <h3>CREATE NEW PATIENT</h3>
      <div className={styles.container}>
        <div className={styles.formrow}>
          <label htmlFor="firstname">
            First Name:
            <input type="text" id="firstname" name="firstname" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="lastname">
            Last Name:
            <input type="text" id="lastname" name="lastname" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="ssn">
            SSN:
            <input type="text" id="ssn" name="ssn" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="lastname" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="dtreet">
            Street Address:
            <input type="text" id="street" name="street" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="city">
            City:
            <input type="text" id="city" name="city" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="lastname">
            State:
            <select id="state" name="state" className={styles.input} style={{ width: 177 }}>
              {usStates.map((state) => <option value={state}>{state}</option>)}
            </select>
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="zip">
            Zip Code:
            <input type="text" id="zip" name="zip" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="age">
            Age:
            <input type="number" id="age" name="age" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="height">
            Height(inches):
            <input type="number" id="height" name="height" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="weight">
            Weight(lbs):
            <input type="number" id="weight" name="weight" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="insurance">
            Insurance:
            <input type="text" id="insurance" name="insurance" className={styles.input} />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="gender">
            Gender:
            <select id="gender" name="gender" className={styles.input} style={{ width: 177 }}>
              {genderOptions.map((state) => <option value={state}>{state}</option>)}
            </select>
          </label>
        </div>
      </div>
      <button type="button" className={styles.btn}>CREATE</button>
    </div>
  );
}

export default CreatePatient;
