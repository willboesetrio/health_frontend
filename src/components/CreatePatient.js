import React, { useState } from 'react';
import styles from './CreatePatient.module.css';

function CreatePatient() {
  const usStatesNoId = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  const usStates = usStatesNoId.map((s, index) => ({ state: s, id: index }));
  const genderOptions = [{ gender: 'Male', id: 1 }, { gender: 'Female', id: 2 }, { gender: 'Other', id: 3 }];
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
  const [usState, setUsState] = useState('Alabama');
  const [gender, setGender] = useState('Male');
  const [formClicked, setFormClicked] = useState(false);
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
        {formClicked && <p style={{ marginRight: 100 }}>FORM WAS CLICKED</p>}
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
