import React, { useState } from 'react';
import { Paper, Typography, Button, Radio, RadioGroup, FormControlLabel, Stack } from '@mui/material';

const EatingForm = () => {
  const [disorderState, setDisorderState] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
        "question": "How much more or less do you feel you worry about your weight and body shape than other people your age?",
        "options": [
            "1. I WORRY A LOT LESS THAN OTHER PEOPLE",
            "2. I WORRY A LITTLE LESS THAN OTHER PEOPLE",
            "3. I WORRY ABOUT THE SAME AS OTHER PEOPLE",
            "4. I WORRY A LITTLE MORE THAN OTHER PEOPLE",
            "5. I WORRY A LOT MORE THAN OTHER PEOPLE"
        ],
        "disorders": ['a', 'b', 'c'],
    },
    {
        "question": "How afraid are you of gaining 2kgs?",
        "options": [
            "1. NOT AFRAID OF GAINING",
            "2. SLIGHTLY AFRAID OF GAINING",
            "3. MODERATELY AFRAID OF GAINING",
            "4. VERY AFRAID OF GAINING",
            "5. TERRIFIED OF GAINING"
        ],
        "disorders": ['a', 'b', 'c'],
    },
    {
        "question": "Did you eat until uncomfortably full in the past 3 months?",
        "options": [
            "1. NEVER",
            "2. RARELY",
            "3. SOMETIMES",
            "4. OFTEN",
            "5. ALWAYS"
        ],
        "disorders": ['b', 'c'],
    },
    {
        "question": "Did you eat large amounts of food when not feeling hungry in the past 3 months?",
        "options": [
            "1. NEVER",
            "2. RARELY",
            "3. SOMETIMES",
            "4. OFTEN",
            "5. ALWAYS"
        ],
        "disorders": ['b', 'c'],
    },
    {
        "question": "Do you consume a small amount of food (i.e., less than 1200 calories/day) on a regular basis to influence your shape or weight?",
        "options": ["Yes", "No"],
        "disorders": ['a'],
    },
    {
        "question": "Do you make yourself throw-up/use diuretics or laxatives/exercise excessively to control your weight and shape?",
        "options": ["Yes", "No"],
        "disorders": ['b'],
    },
    {
        "question": "Do you struggle with a lack of interest in eating or food?",
        "options": ["Yes", "No"],
        "disorders": ['d'],
    },
    {
        "question": "Do you avoid certain or many foods because of such features as texture, consistency, temperature, or smell, or have other people suggested this may be the case for you?",
        "options": [
            "1. NEVER",
            "2. RARELY",
            "3. SOMETIMES",
            "4. OFTEN",
            "5. ALWAY"
        ],
        "disorders": ['d'],
    },
    {
        "question": "Do you avoid certain or many foods because of fear of experiencing negative consequences like choking or vomiting, or have other people suggested this may be the case for you?",
        "options": [
            "1. NEVER",
            "2. RARELY",
            "3. SOMETIMES",
            "4. OFTEN",
            "5. ALWAYS"
        ],
        "disorders": ['d'],
    },
]


const handleResponse = () => {
  if (selectedOption !== null) {
    const increment = parseInt(selectedOption);
    const currentQuestion = questions[questionIndex];

    // Update disorder state only when "Next" button is pressed
    currentQuestion.disorders.forEach((disorder) => {
      setDisorderState((prevDisorderState) => ({
        ...prevDisorderState,
        [disorder]: prevDisorderState[disorder] + increment,
      }));
    });

    // Move to the next question
    setQuestionIndex((prevIndex) => prevIndex + 1);
    // Clear selected option for the next question
    setSelectedOption(null);
  }
};

const renderOptions = (options) => {
  return (
    <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={index.toString()}
          control={<Radio />}
          label={option}
        />
      ))}
    </RadioGroup>
  );
};

const renderQuestion = () => {
  const currentQuestion = questions[questionIndex];

  return (
    <div>
      <Typography variant="body1" lineHeight={1.5}>{currentQuestion.question}</Typography>
      {renderOptions(currentQuestion.options)}
    </div>
  );
};

  const renderResults = () => {
    // Calculate risk levels
    const risk_a = disorderState.a <= 7 ? "no" : (disorderState.a <= 13 ? "risk" : "yes");
    const risk_b = disorderState.b <= 10 ? "no" : (disorderState.b <= 15 ? "risk" : "yes");
    const risk_c = disorderState.c <= 8 ? "no" : (disorderState.c <= 12 ? "risk" : "yes");
    const risk_d = disorderState.d <= 4 ? "no" : (disorderState.d <= 7 ? "risk" : "yes");
  
    const noEatingDisorder = risk_a === "no" && risk_b === "no" && risk_c === "no" && risk_d === "no";
  
    return (
      <div>
        <p>Your results:</p>
        <p>Disorder A (Anorexia Nervosa): {disorderState.a}</p>
        <p>Disorder B (Bulimia Nervosa): {disorderState.b}</p>
        <p>Disorder C (Binge Eating Disorder): {disorderState.c}</p>
        <p>Disorder D (ARFID): {disorderState.d}</p>
        {risk_a === "risk" && <p>You are at risk of Anorexia Nervosa disorder.</p>}
        {risk_a === "yes" && <p>You have Anorexia Nervosa disorder.</p>}
  
        {risk_b === "risk" && <p>You are at risk of Bulimia Nervosa disorder.</p>}
        {risk_b === "yes" && <p>You have Bulimia Nervosa disorder.</p>}
  
        {risk_c === "risk" && <p>You are at risk of Binge Eating Disorder.</p>}
        {risk_c === "yes" && <p>You have Binge Eating Disorder.</p>}
  
        {risk_d === "risk" && <p>You are at risk of Avoidant Restrictive Food Intake Disorder (ARFID).</p>}
        {risk_d === "yes" && <p>You have Avoidant Restrictive Food Intake Disorder (ARFID).</p>}
        {noEatingDisorder && <p>You don't have an eating disorder.</p>}
      </div>
    );
  };
  

  return (
    <Paper sx={{ height: '70vh',width:'100%', padding: '1rem', marginTop: '2rem' }}>
      {questionIndex < questions.length ? (
        <Stack  sx={{ height: '80%' }} justifyContent={'center'} spacing={2}>
          {renderQuestion()}
          
           <Button onClick={handleResponse} sx={{alignSelf:'center'}}>Next</Button>
          
        </Stack>
      ) : (
        <Stack sx={{ height: '50%' }} alignItems={'center'} justifyContent={'center'}>
          {renderResults()}
        </Stack>
      )}
    </Paper>
  );
};

export default EatingForm;