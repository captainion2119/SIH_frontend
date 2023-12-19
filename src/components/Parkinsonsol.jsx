import React from 'react'
import GetHospitle from './GetHospitle'
function Parkinsonsol(total_updrs_pred) {
  return (
    <>
    { total_updrs_pred> 45 ?(
    <>
    <p>"**YOU HAVE PARKINSON'S, PLEASE CONSULT A DOCTOR**"</p>
    <p>EMERGENCY HELPLINE-- Toll-Free Mental Health Rehabilitation Helpline Kiran: 1800-599-0019</p>
    <GetHospitle keywords={"neurotic,Parkinson's,hospital"}/>
    </>
    ) : (<>
    <p>No emergency at the moment </p>
    </>)
    }

    </>
  )
}

export default Parkinsonsol