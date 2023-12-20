import React, { useState } from 'react';
import { Paper, Typography, Button, Stack, RadioGroup, Radio, FormControlLabel, TextField } from '@mui/material';

const questions = [
  { text: 'Age', id: 'Age', type: 'text' },
  { text: 'Gender', id: 'Gender', type: 'radio', options: ['Female', 'Male'] },
  { text: 'Number of sleeping hours', id: 'Number of sleeping hours', type: 'text' },
  { text: 'BP History', id: 'BP_hist', type: 'radio', options: ['Low BP', 'No BP', 'High BP'] },
  { text: 'Oxygen Level', id: 'Oxygen Level', type: 'text' },
  { text: 'Pulse Rate', id: 'Pulse Rate', type: 'text' },
  { text: 'Exercise Routine', id: 'Exercise Routine', type: 'radio', options: ['No', 'Yes'] },
  { text: 'Food Amount', id: 'Food_amt', type: 'radio', options: ['No', 'Less', 'Normal', 'More'] },
  { text: 'Food Intake', id: 'Food Intake', type: 'radio', options: ['No', 'Yes'] },
  { text: 'Any External Pressure', id: 'Any External Pressure', type: 'radio', options: ['No', 'Yes'] },
  { text: 'Reason for Pressure', id: 'Reason for Pressure', type: 'text' },
  { text: 'Do they know it? (Anxiety)', id: 'Do they know it?', type: 'radio', options: ['No', 'Yes'] },
  { text: 'Mother', id: 'Mother', type: 'radio', options: ['No History', 'High BP', 'Low BP', 'Sugar'] },
  { text: 'Father', id: 'Father', type: 'radio', options: ['No History', 'High BP', 'Low BP', 'Sugar'] },
  { text: 'Medication', id: 'Medication', type: 'radio', options: ['None', 'Fever', 'Sugar', 'Cholesterol', 'BP', 'Heart', 'Calcium', 'Vitamin', 'Pain', 'Iron', 'Breathing', 'Cough', 'Thyroid', 'Hormones'] },
  { text: 'BP Sys', id: 'bp_sys', type: 'text' },
  { text: 'BP Dia', id: 'bp_dia', type: 'text' },
  
];

const AnxietyQuestion = ({setAnswers}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleResponse = (value) => {
    setResponses({ ...responses, [questions[currentQuestion].id]: value });

    // Check if the next question is Pulse, and if so, enable the skipPulse
      setIsNextDisabled(!value);
    
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setIsNextDisabled(true);
  };

  const handleSubmit = () => {
    // Implement your logic to submit the form with responses
    console.log('Form submitted:', responses);
    setAnswers(responses);
  };

  return (
    <Paper sx={{ height: '70vh', width: '100%', padding: '1rem', marginTop: '2rem' }}>
      {currentQuestion < questions.length ? (
        <Stack alignItems={'center'} sx={{ height: '80%' }} justifyContent={'center'} spacing={3}>
          <Typography variant="body1" lineHeight={1.5}>
            {questions[currentQuestion].text}
          </Typography>
          {questions[currentQuestion].type === 'text' ? (
            <TextField
              type="text"
              value={responses[questions[currentQuestion].id] || ''}
              onChange={(e) => handleResponse(e.target.value)}
              required
            />
          ) : (
            <RadioGroup
              value={responses[questions[currentQuestion].id] || ''}
              onChange={(e) => handleResponse(e.target.value)}
            >
              {questions[currentQuestion].options.map((option, index) => (
                <FormControlLabel key={index} value={String(index)} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          )}
          <Stack direction={'row'} spacing={2}>
          <Button onClick={handleNext} disabled={isNextDisabled }>
              'Next'
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Stack sx={{ height: '50%' }} alignItems={'center'} justifyContent={'center'}>
          <Typography>Form Completed!</Typography>
          <Typography>
            Form Responses: {JSON.stringify(responses, null, 2)}
          </Typography>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      )}
    </Paper>
  );
};

export default AnxietyQuestion;