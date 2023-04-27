import React, {useState, useEffect} from 'react'
import styles from "./AllPatients.module.css"

function AllPatients() {

    const [patientsArray, setPatientsArray] = useState([]);

    useEffect(() => {
    
        /**
         * @name getPatients
         * @description fetch call to get all patients
         */
        const getPatients= async() => {
    
          try {
            const response = await fetch("http://localhost:8080/patients", {
              method : "GET",
              headers : {
                "Content-Type" : "application/json"
              }
            })
            const allPatients = await response.json();
            console.log(allPatients);
            if(response.status == 200) {
            setPatientsArray(allPatients);
            //setLoading(false);
            }
          } catch(err) {
            console.log(err);
            //setServerError(true);
            //setLoading(false);
          }
        }
        getPatients();
      }, [])

  return (
    <div className={styles.test}>
        <table className={styles.test}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                {patientsArray.length > 0 && patientsArray.map((patient) => {
            return (
              // NOTE - make this <tr> it's own component...
                <tr key={patient.id}>
                  <td>{patient.firstName} {patient.lastName}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>
                    <button>VIEW DETAILS</button>
                  </td>
                  <td>
                    <button>DELETE</button>
                  </td>
                </tr>
            )
        })}
            </thead>
        </table>
    </div>
  )
}

export default AllPatients