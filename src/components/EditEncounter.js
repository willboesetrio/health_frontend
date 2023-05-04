import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EncounterForm from './EncounterForm';

function EditEncounter() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.pathname.split('/')[2];
  const encounterId = location.pathname.split('/')[4];
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
  const updateEncounter = async (payloadObject) => {
    const response = await fetch(`http://localhost:8080/patients/${patientId}/encounters/${encounterId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payloadObject)
    });
    if (response.status === 200) {
      console.log('THE POST WENT THROUGH');
      navigate(`/patients/${patientId}`);
    }
  };
  useEffect(() => {
    const getThisEncounter = async () => {
      const response = await fetch(`http://localhost:8080/patients/${patientId}/encounters/${encounterId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const encountersResponse = await response.json();
      console.log(encountersResponse);
      if (response.status === 200) {
        setNotes(encountersResponse.notes);
        setVisitCode(encountersResponse.visitCode);
        setProvider(encountersResponse.provider);
        setBillingCode(encountersResponse.billingCode);
        setIcd10(encountersResponse.icd10);
        setCopay(encountersResponse.copay);
        setTotalCost(encountersResponse.totalCost);
        setChiefComplaint(encountersResponse.chiefComplaint);
        setPulse(encountersResponse.pulse);
        setSystolic(encountersResponse.systolic);
        setDiastolic(encountersResponse.diastolic);
        setDate(encountersResponse.date.slice(0, 10));
      }
    };
    getThisEncounter();
  }, [encounterId, patientId]);
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
  const handleSubmit = () => {
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
      updateEncounter(payloadObject);
    } else {
      console.log('VALIDATION NOT PASSED');
    }
  };
  return (
    <EncounterForm
      formClicked={formClicked}
      notes={notes}
      setNotes={setNotes}
      notesErr={notesErr}
      visitCode={visitCode}
      setVisitCode={setVisitCode}
      visitCodeErr={visitCodeErr}
      provider={provider}
      setProvider={setProvider}
      providerErr={providerErr}
      billingCode={billingCode}
      setBillingCode={setBillingCode}
      billingCodeErr={billingCodeErr}
      icd10={icd10}
      setIcd10={setIcd10}
      icd10Err={icd10Err}
      totalCost={totalCost}
      setTotalCost={setTotalCost}
      totalCostErr={totalCostErr}
      copay={copay}
      setCopay={setCopay}
      copayErr={copayErr}
      chiefComplaint={chiefComplaint}
      setChiefComplaint={setChiefComplaint}
      chiefComplaintErr={chiefComplaintErr}
      pulse={pulse}
      setPulse={setPulse}
      systolic={systolic}
      setSystolic={setSystolic}
      diastolic={diastolic}
      setDiastolic={setDiastolic}
      date={date}
      setDate={setDate}
      dateErr={dateErr}
      handleSubmit={handleSubmit}
    />
  );
}

export default EditEncounter;
