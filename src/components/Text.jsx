import React, { useState } from 'react';
import { Typography, TextField, Container, Paper, Grid } from '@mui/material';
import axios from 'axios';

function Text({textData,setTextData}) {
  const questions = [
    "How would you describe your overall mood lately?",
    "Can you share specific situations or experiences that have impacted your emotions recently?",
    "Have you noticed any changes in your ability to find joy or pleasure in activities you used to enjoy?",
    "Do you find it challenging to cope with stress, and if so, how do you typically handle it?",
    "Are there particular thoughts or concerns that consistently occupy your mind?"
  ];

  // Initialize textData with empty strings
  
 

  const handleAnswerChange = (index, value) => {
    const newTextData = [...textData];
    newTextData[index] = value;
    setTextData(newTextData);

    // Automatically submit the questionnaire when an answer is changed
    
  };



  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        

        <form>
          
        

          <Grid container spacing={2}>
            {questions.map((question, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant="body1" paragraph>
                  {question}
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  required
                  rows={4}
                  value={textData[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Text;
