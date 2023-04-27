import React, { useEffect, useState } from 'react'

function PatientDetails() {

    const [patient, setpatient] = useState([]);

    useEffect(() => {
    
        /**
         * @name getPatient
         * @description fetch call to get patient by Id
         */
        const getPatient= async() => {
    
          try {
            const response = await fetch("http://localhost:8080/patients/1", {
              method : "GET",
              headers : {
                "Content-Type" : "application/json"
              }
            })
            const patient = await response.json();
            console.log(patient);
            if(response.status == 200) {
            setpatient(patient);
            //setLoading(false);
            }
          } catch(err) {
            console.log(err);
            //setServerError(true);
            //setLoading(false);
          }
        }
        getPatient();
      }, [])

  return (
    <div>
    <p>{patient.firstName} {patient.lastName}</p>
    </div>
  )
}

export default PatientDetails