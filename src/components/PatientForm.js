import React from 'react';
import styles from './CreatePatient.module.css';

function PatientForm({
  formClicked, firstNameError, firstName, setFirstName, lastName,
  lastNameError, setLastName, ssn, ssnError, setSsn, email, emailError,
  setEmail, streetError, street, setStreet, cityError, city, setCity, usState,
  setUsState, postal, postalError, setPostal, age, ageError, setAge, heightError,
  height, setHeight, weight, weightError, setWeight, insurance, insuranceError,
  setInsurance, gender, setGender, handleSubmit
}) {
  const usStatesNoId = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  const usStates = usStatesNoId.map((s, index) => ({ state: s, id: index }));
  const genderOptions = [{ gender: 'Male', id: 1 }, { gender: 'Female', id: 2 }, { gender: 'Other', id: 3 }];
  return (
    <div style={{ width: 400, marginLeft: 200 }}>
      <h3>CREATE NEW PATIENT</h3>
      <div className={styles.container}>
        {formClicked
        && firstNameError
        && <p className={styles.err} style={{ marginRight: 100 }}>first name is required</p>}
        <div className={styles.formrow}>
          <label htmlFor="firstname">
            First Name:
            <input
              type="text"
              id="firstname"
              name="firstname"
              className={styles.input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && lastNameError
        && <p className={styles.err} style={{ marginRight: 100 }}>last name is required</p>}
        <div className={styles.formrow}>
          <label htmlFor="lastname">
            Last Name:
            <input
              type="text"
              id="lastname"
              name="lastname"
              className={styles.input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && ssnError
        && <p className={styles.err} style={{ marginRight: 100 }}>SSN must be XXX-XX-XXXX</p>}
        <div className={styles.formrow}>
          <label htmlFor="ssn">
            SSN:
            <input
              type="text"
              id="ssn"
              name="ssn"
              className={styles.input}
              value={ssn}
              onChange={(e) => setSsn(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && emailError
        && <p className={styles.err} style={{ marginRight: 100 }}>must be valid email</p>}
        <div className={styles.formrow}>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && streetError
        && <p className={styles.err} style={{ marginRight: 100 }}>street is required</p>}
        <div className={styles.formrow}>
          <label htmlFor="street">
            Street Address:
            <input
              type="text"
              id="street"
              name="street"
              className={styles.input}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && cityError
        && <p className={styles.err} style={{ marginRight: 100 }}>city is required</p>}
        <div className={styles.formrow}>
          <label htmlFor="city">
            City:
            <input
              type="text"
              id="lastname"
              name="lastname"
              className={styles.input}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="state">
            State:
            <select
              id="state"
              name="state"
              className={styles.input}
              value={usState}
              onChange={(e) => setUsState(e.target.value)}
              style={{ width: 177 }}
            >
              {usStates.map((s) => <option key={s.id} value={s.state}>{s.state}</option>)}
            </select>
          </label>
        </div>
        {formClicked
        && postalError
        && <p className={styles.err} style={{ marginRight: 100 }}>must be a valid zip code</p>}
        <div className={styles.formrow}>
          <label htmlFor="postal">
            postal Code:
            <input
              type="text"
              id="postal"
              name="postal"
              className={styles.input}
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && ageError
        && <p className={styles.err} style={{ marginRight: 100 }}>age is required</p>}
        <div className={styles.formrow}>
          <label htmlFor="age">
            Age:
            <input
              type="number"
              min={0}
              id="age"
              name="age"
              className={styles.input}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && heightError
        && <p className={styles.err} style={{ marginRight: 100 }}>height is required</p>}
        <div className={styles.formrow}>
          <label htmlFor="height">
            Height(inches):
            <input
              type="number"
              min={0}
              id="height"
              name="height"
              className={styles.input}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && weightError
        && <p className={styles.err} style={{ marginRight: 100 }}>weight is required</p>}
        <div className={styles.formrow}>
          <label htmlFor="weight">
            Weight(lbs):
            <input
              type="number"
              min={0}
              id="weight"
              name="weight"
              className={styles.input}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        {formClicked
        && insuranceError
        && <p className={styles.err} style={{ marginRight: 100 }}>insurance is required</p>}
        <div className={styles.formrow}>
          <label htmlFor="insurance">
            Insurance:
            <input
              type="text"
              id="insurance"
              name="insurance"
              className={styles.input}
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.formrow}>
          <label htmlFor="gender">
            Gender:
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={styles.input}
              style={{ width: 177 }}
            >
              {
              genderOptions.map((g) => <option key={g.id} value={g.gender}>{g.gender}</option>)
              }
            </select>
          </label>
        </div>
      </div>
      <button type="button" className={styles.btn} onClick={() => handleSubmit()}>SUBMIT</button>
    </div>
  );
}

export default PatientForm;
