import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PatientForm from './PatientForm';

/**
 * @name EditPatient
 * @description contains error validation and fetch for editing a patient
 * @returns component
 */
function EditPatient() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = location.pathname.split('/')[2];
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
  /**
   * @name putPatient
   * @param {*} payloadObject
   */
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
  /**
   * @name handleSubmit
   * @description checks validation and passes payload object
   */
  const handleSubmit = () => {
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
    <PatientForm
      formClicked={formClicked}
      firstName={firstName}
      firstNameError={firstNameError}
      setFirstName={setFirstName}
      lastName={lastName}
      lastNameError={lastNameError}
      setLastName={setLastName}
      ssn={ssn}
      ssnError={ssnError}
      setSsn={setSsn}
      email={email}
      emailError={emailError}
      setEmail={setEmail}
      city={city}
      cityError={cityError}
      setCity={setCity}
      street={street}
      streetError={streetError}
      setStreet={setStreet}
      usState={usState}
      setUsState={setUsState}
      postal={postal}
      postalError={postalError}
      setPostal={setPostal}
      age={age}
      ageError={ageError}
      setAge={setAge}
      weight={weight}
      weightError={weightError}
      setWeight={setWeight}
      height={height}
      heightError={heightError}
      setHeight={setHeight}
      insurance={insurance}
      insuranceError={insuranceError}
      setInsurance={setInsurance}
      gender={gender}
      setGender={setGender}
      handleSubmit={handleSubmit}
    />
  );
}

export default EditPatient;
