import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Anxietysol from '../components/Anxietysol';
import Depressionsol from '../components/Depressionsol';
function Diagnosis() {
  const { testName ,data} = useParams()
  return (
    <>
    {
      testName == 'anxiety' && <Anxietysol anxietyLevel={data}/>
    }
    {
      testName == 'depression' && <Depressionsol depressionLevel = {data}/>
    }
    {
      testName == "parkinson's_disease" && <Parkinsonsol data={data}/>
    }
    {
      testName == 'bipolar_disorder' && <Bipolarsol data={data}/>
    }
    {
      testName == 'eating_disorder' && <Eatingsol data={data}/>
    }
    </>
  );
}

export default Diagnosis;
