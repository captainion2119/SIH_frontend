import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Audio from '../assets/BipolarMusic.mp3'
import GetHospitle from './GetHospitle';
import { Paper, Typography, Button, Stack, RadioGroup, Radio, FormControlLabel } from '@mui/material';
const questions = [
   [ "1. In the past, have you experienced periods of unusually elevated or irritable mood that lasted for several days or more, during which you felt extremely energetic, talkative, and confident, and may have engaged in impulsive or risky activities? ", 0.99, 0.182],
    ["2. Have you ever had periods of time when you felt excessively grandiose or superior to others, believing that you possessed special powers, talents, or abilities that others did not, even when there was no evidence to support these beliefs? ", 0.87, 0.095],
    ["3. During elevated or manic periods, have you noticed a significant increase in your talkativeness, where you speak more rapidly than usual, and it's challenging to interrupt or stop your speech? ", 0.82, 0.193],
["4. During times when you feel exceptionally energetic and confident (hypomanic), do you find yourself engaging in impulsive or risky activities without considering the potential negative consequences, such as excessive spending, reckless driving, or other behaviours that could harm you or your relationships? ", 0.82, 0.122],
["5. During periods of elevated mood, have you engaged in risky behaviours such as excessive gambling, engaging in risky sexual activity or increased interest in sexual activity, starting risky business ventures, or taking part in activities that could have negative consequences for your personal, financial, or social life?", 0.77, 0.232],
["6. During episodes of elevated mood (mania or hypomania), have you noticed a significant increase in the speed of your speech, where you talk much faster than usual, and it becomes difficult for others to keep up with or understand what you're saying? ", 0.38, 0.033],
["7. Have you ever engaged in impulsive or reckless activities without considering the potential consequences during periods when you felt extremely energized or confident?  ", 0.38, 0.041],
["8. During certain periods, do you experience an unusual and sustained increase in your energy levels, where you feel more active, alert, and full of energy compared to your usual state?  ", .37, 0.055],
["9. Do you experience frequent and abrupt changes in your mood, where you can go from feeling extremely high and energetic to very low and sad within a short period of time, sometimes without an obvious reason?  ", .35, 0.037],
["10. Have you engaged in impulsive or risky activities without considering the potential consequences, even during times when you were not necessarily feeling elevated or low in mood? ", 0.31, 0.225],
["11. During your mood episodes, whether they are characterized by elevated mood or depression, do they last long? ", 0.30, 0.050],
["12. Have you ever experienced periods when your mood was elevated, more energetic, or confident, but not to the extent of a full-blown manic episode, while also having episodes of major depressive symptoms such as persistent sadness, loss of interest, or feelings of hopelessness?  ", 0.27, 0.030],
["13. In your lifetime, have you ever had periods when your mood was significantly elevated, characterized by extreme energy, increased confidence, rapid speech, impulsivity, and possibly engaging in reckless behaviours or excessive spending? These episodes might have lasted for several days or more.  ", 0.38, 0.033],
["14. Do you often experience an intense fear of being abandoned or left alone by those you care about, leading to significant distress or efforts to avoid abandonment?  ", 0.22, 0.031],
["15. Have you experience a major number of such distinct mood episodes in the last year? >4 ", 0.21, 0.050],
["16. Do you often find that your self-image or sense of self changes rapidly, leading to uncertainty about who you are or how you see yourself in different situations or with different people?  ", 0.18, 0.034],
["17. During certain periods, do you find that your thoughts race or move quickly, making it difficult for you to concentrate or quiet your mind?  ", 0.14, 0.065],
["18. 19. Over the past two weeks, how often have you felt loved, appreciated, or valued by the people around you?  ", 0.14, 0.022],
["19. Do you find that your interpersonal relationships are often unstable, marked by intense attachments and frequent conflict, where your feelings toward others can rapidly change from idealization to devaluation?  ", 0.12, 0.023],
["20. During periods when you experience elevated or manic moods, do you engage inye impulsive or reckless behaviours, such as excessive spending, risky sexual encounters, or other activities that put your safety, financial stability, or well-being at risk?  ", 0.1, 0.040],
["21. Have you ever experienced periods when your symptoms related to bipolar disorder (such as extreme mood swings, impulsivity, or other associated symptoms) significantly interfered with your ability to carry out daily activities, maintain employment, or resulted in hospitalization or treatment in a psychiatric facility? ", 0.09, 0.055],
["22. Over the past year, have you often engaged in social activities, such as spending time with friends or family, attending social events, or participating in group activities outside of work or school? ", 0.08, 0.031],
["23. Over the past year, would you describe your level of productivity in daily tasks, work, or other responsibilities to be unaltered?  ", 0.07, 0.017],
["24. Over the past year, have you experienced difficulties with your sleep, such as trouble falling asleep, staying asleep, or waking up too early, and has this caused significant distress or impairment in your daily life?  ", 0.07, 0.004],
["25. Have you experienced symptoms of social phobia, where you feel extremely anxious or fearful in social situations?  ", 0.07, 0.010],
]



const BipolarForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [response, setResponse] = useState(null);

  const handleResponse = () => {
    const currentQuestionInfo = questions[currentQuestion];
    const responseValue = response === 'yes' ? currentQuestionInfo[1] * currentQuestionInfo[2] : 0;

    setTotalScore(totalScore + responseValue);
    setCurrentQuestion(currentQuestion + 1);
    setResponse(null); // Reset response for the next question
  };

  return (
    <Paper sx={{width:'100%',marginTop:'2rem',minHeight:'70vh',padding:'1rem'}}>
      {currentQuestion < questions.length ? (
        <Stack alignItems={'center'} sx={{ height: '80%' }} justifyContent={'center'} spacing={3}>
          <Typography variant="body1" lineHeight={1.5}>{questions[currentQuestion][0]}</Typography>
          <RadioGroup sx={{alignSelf:'flex-start'}} value={response} onChange={(e) => setResponse(e.target.value)}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          <Stack direction={'row'} spacing={2}>
            <Button onClick={handleResponse} >
              Next
            </Button>
          </Stack>
        </Stack>
      ) : (
        <>
        <Stack  alignItems={'center'} justifyContent={'center'} spacing={2}>
          <Typography variant='body1'>Questionnaire completed!</Typography>
          <Typography variant='body1'>
            Probability of bipolar occurrence is {(totalScore / 0.91856 * 100).toFixed(2)} %
          </Typography>
        </Stack>
        { ((totalScore / 0.91856 * 100).toFixed(2)) <= 85 ? (
          <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
          <Typography variant='h6' align='center' sx={{marginTop:'1rem'}}>DID YOU KNOW?</Typography>
          <Typography variant='body1'>• Bipolar disorder (formerly called manic-depressive illness or manic depression) is a mental disorder that causes unusual shifts in mood, energy, activity levels, concentration, and the ability to carry out day-to-day tasks.</Typography>
          <Typography variant='body1'>• The frequencies used in this session are based on the work of Royal Raymond Rife. Rife was a 20th-century inventor who, through frequency, was able to cure many ailments of the body, including most common illnesses that we seek medical assistance for today.</Typography>
          <Typography variant='body1'>• Please don't listen at high volume. It may damage your hearing or give you a headache. Adjust the volume to your comfort and use headphones for better effects and sound.</Typography>
          <Typography variant='body1'>• We hope this binaural beats will help you to heal yourself. We are trying to provide the best and most effective healing frequency to be helpful in your daily life.</Typography>
          <ReactAudioPlayer
        src={Audio}
        autoPlay
        controls
      />
      </Stack>
         ):(
              <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
              <Typography variant="h6" style={{fontWeight: 'bold' }}>
              EXTREME BIPOLAR
            </Typography>
            <Typography variant="body1" style={{  fontWeight: 'bold' }}>
              EMERGENCY HELPLINE-- Toll-Free Mental Health Rehabilitation Helpline Kiran: 1800-599-0019
            </Typography>
            <Typography variant="body1">
              Finding nearby mental healthcare centers and clinics...
            </Typography>
          <GetHospitle keywords={'mental healthcare, bipolar'}/>
          </Stack>
          )
        }
      </>)}
    </Paper>
  );
};

export default BipolarForm;