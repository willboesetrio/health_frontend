import React, { useState, useEffect } from 'react';
import styles from './CreatePatient.module.css';

function CreatePatient() {
  const usStatesNoId = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  const usStates = usStatesNoId.map((s, index) => ({ state: s, id: index }));
  const genderOptions = [{ gender: 'Male', id: 1 }, { gender: 'Female', id: 2 }, { gender: 'Other', id: 3 }];
  // Input Variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ssn, setSsn] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postal, setPostal] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [insurance, setInsurance] = useState('');
  const [usState, setUsState] = useState('AL');
  const [gender, setGender] = useState('Male');
  const [formClicked, setFormClicked] = useState(false);
  // Error Variables
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [ssnError, setSsnError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [postalError, setPostalError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [insuranceError, setInsuranceError] = useState(false);
  useEffect(() => {
    // Regular Expressions
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const alphabeticRegex = /^[a-zA-Z][\\'\\-\\ ]*$/g;
    // const specificSsnRegex = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    const zipRegex1 = /^\d{5}$/;
    const zipRegex2 = /^\d{5}-\d{4}$/;
    if (!firstName.match(alphabeticRegex)) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
    if (!lastName.match(alphabeticRegex)) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (!ssn.match(ssnRegex)) {
      setSsnError(true);
    } else {
      setSsnError(false);
    }
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!street) {
      setStreetError(true);
    } else {
      setStreetError(false);
    }
    if (!city) {
      setCityError(true);
    } else {
      setCityError(false);
    }
    if (!postal.match(zipRegex1) || !postal.match(zipRegex2)) {
      setPostalError(true);
    } else {
      setPostalError(false);
    }
    if (age < 0) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    if (!height) {
      setHeightError(true);
    } else {
      setHeightError(false);
    }
    if (!weight) {
      setWeightError(true);
    } else {
      setWeightError(false);
    }
    if (!insurance) {
      setInsuranceError(true);
    } else {
      setInsuranceError(false);
    }
  }, [firstName, lastName, ssn, email, street, city, postal, age, height, weight, insurance]);
  const handleCreate = () => {
    setFormClicked(true);
    const payloadObject = {
      firstName,
      lastName,
      ssn,
      email,
      age,
      height,
      weight,
      insurance,
      gender,
      street,
      city,
      state: usState,
      postal
    };
    console.log(payloadObject);
  };
  return (
    <div style={{ width: 400, marginLeft: 200 }}>
      <h3>CREATE NEW PATIENT</h3>
      <div className={styles.container}>
        {formClicked && firstNameError && <p style={{ marginRight: 100 }}>error</p>}
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
        {formClicked && lastNameError && <p style={{ marginRight: 100 }}>error</p>}
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
        {formClicked && ssnError && <p style={{ marginRight: 100 }}>error</p>}
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
        {formClicked && emailError && <p style={{ marginRight: 100 }}>error</p>}
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
        {formClicked && streetError && <p style={{ marginRight: 100 }}>error</p>}
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
        {formClicked && cityError && <p style={{ marginRight: 100 }}>error</p>}
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
        {formClicked && postalError && <p style={{ marginRight: 100 }}>error</p>}
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
        {formClicked && ageError && <p style={{ marginRight: 100 }}>error</p>}
        <div className={styles.formrow}>
          <label htmlFor="age">
            Age:
            <input
              type="number"
              id="age"
              name="age"
              className={styles.input}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        {formClicked && heightError && <p style={{ marginRight: 100 }}>error</p>}
        <div className={styles.formrow}>
          <label htmlFor="height">
            Height(inches):
            <input
              type="number"
              id="height"
              name="height"
              className={styles.input}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        {formClicked && weightError && <p style={{ marginRight: 100 }}>error</p>}
        <div className={styles.formrow}>
          <label htmlFor="weight">
            Weight(lbs):
            <input
              type="number"
              id="weight"
              name="weight"
              className={styles.input}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        {formClicked && insuranceError && <p style={{ marginRight: 100 }}>error</p>}
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
      <button type="button" className={styles.btn} onClick={() => handleCreate()}>CREATE</button>
    </div>
  );
}

export default CreatePatient;
