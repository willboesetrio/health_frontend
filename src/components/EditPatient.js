import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './CreatePatient.module.css';

function EditPatient() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = location.pathname.split('/')[2];
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
  const putPatient = async (payloadObject) => {
    const response = await fetch(`http://localhost:8080/patients/${currentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payloadObject)
    });
    if (response.status === 200) {
      console.log('THE PUT WENT THROUGH');
      navigate('/');
    }
  };
  useEffect(() => {
    // Regular Expressions
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const alphabeticRegex = /^[A-Za-z'\- ]+$/;
    // const specificSsnRegex = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    // can I combine the two zip regexes???
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
    if (!postal.match(zipRegex1) && !postal.match(zipRegex2)) {
      setPostalError(true);
    } else {
      setPostalError(false);
    }
    if (age < 0 || age.length === 0) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    if (height <= 0) {
      setHeightError(true);
    } else {
      setHeightError(false);
    }
    if (weight <= 0) {
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
          setFirstName(thisPatient.firstName);
          setLastName(thisPatient.lastName);
          setSsn(thisPatient.ssn);
          setEmail(thisPatient.email);
          setStreet(thisPatient.street);
          setCity(thisPatient.city);
          setUsState(thisPatient.state);
          setPostal(thisPatient.postal);
          setAge(thisPatient.age);
          setHeight(thisPatient.height);
          setWeight(thisPatient.weight);
          setInsurance(thisPatient.insurance);
          setGender(thisPatient.gender);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPatient();
  }, [currentId]);
  const handleUpdate = () => {
    setFormClicked(true);
    const payloadObject = {
      firstName,
      lastName,
      ssn,
      email,
      age: Number(age),
      height: Number(height),
      weight: Number(weight),
      insurance,
      gender,
      street,
      city,
      state: usState,
      postal
    };
    console.log(payloadObject);
    if (!firstNameError
        && !lastNameError
        && !ssnError
        && !streetError
        && !cityError
        && !emailError
        && !postalError
        && !ageError
        && !heightError
        && !weightError
        && !insuranceError) {
      console.log('VALIDATION PASSED');
      // try catch to determine server error arounr this function call
      putPatient(payloadObject);
    } else {
      console.log('VALIDATION NOT PASSED');
    }
  };
  return (
    <div style={{ width: 400, marginLeft: 200 }}>
      <h3>UPDATE PATIENT</h3>
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
      <button type="button" className={styles.btn} onClick={() => handleUpdate()}>UPDATE</button>
    </div>
  );
}

export default EditPatient;
