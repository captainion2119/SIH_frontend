import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
} from '@mui/material';

const Questionnaire = ({setAnswers}) => {
  const questions = [
    'Do you feel down recently?',
    'Irritable towards work?',
    'Trouble sleeping at night?',
    'Do you feel demotivated?',
    'Overeating or loss of appetite?',
    'Do you get too many negative thoughts?',
    'Do you feel sad easily?',
    'Trouble in socializing with people/Are you introverted suddenly?',
  ];

const [answers, updateAnswers] = useState(Array(questions.length).fill(null));
  

  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    updateAnswers(newAnswers);
  };

  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Questionnaire
      </Typography>
      {questions.map((question, index) => (
        <FormControl component="fieldset" key={index}>
          <Typography variant="body1" gutterBottom>
            {question}
          </Typography>
          <RadioGroup
            name={`question${index}`}
            value={answers[index]}
            onChange={(e) => handleAnswer(index, parseInt(e.target.value))}
          >
            <FormControlLabel value={0} control={<Radio />} label="No" />
            <FormControlLabel value={1} control={<Radio />} label="Sometimes" />
            <FormControlLabel value={2} control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
      ))}
      <Button variant="contained" onClick={() => setAnswers(answers)}>
        Submit
      </Button>
    </Paper>
  );
};

export default Questionnaire;
