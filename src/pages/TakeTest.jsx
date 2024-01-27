import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Audio from '../components/Audio';
import Video from '../components/Video';
import Text from '../components/Text';
import Image from '../components/Image';
import Diagnosis from './Diagnosis';
import { Typography,Stack,Button,Paper } from '@mui/material';
import AnxietyQuestion from '../components/AnxietyQuestion';

function TakeTest({ tests,apiEndPoint}) {
  const navigate = useNavigate();
  const [cur, setCur] = useState(0);
  const [show, setShow] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [textData, setTextData] = useState(Array(5).fill(''));
  const [videoData, setVideoData] = useState(null);
  const [answers,setAnswers] = useState(null);
  const handleYesClick = () => {
    setShow(true);
  };

  const handleNextClick = () => {
    cur === tests.length - 1 ? handleSubmit() : setCur(cur + 1);
    setShow(false);

  };

  const handleSubmit = () => {
    console.log('textData:', textData);
    if (textData.some((data) => data.trim() === '')) {
      console.error('Text data cannot be empty. Please fill in all the text forms.');
      return;
    }
    const formData = new FormData();

    formData.append('audioData', audioData);
    formData.append('imageData', imageData);
    formData.append('textData', textData);
    formData.append('questionnaireData',answers);
    // formData.append('videoData', videoData);
    // need to work on the video data
    console.log(answers)

    //console.log(textData);
    fetch(`http://127.0.0.1:5000/update/${apiEndPoint}`, { //Change this back to /1
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          //console.log(formData);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data submitted successfully:',data);
  const currentLocation = window.location.pathname;
  navigate(`${currentLocation}/diagnosis/${data['message']}`);
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <Paper sx={{width:'100%',height:'70%',margin:'auto',backgroundColor:'magenta'}}>
    <Stack alignItems={'center'} justifyContent={'center'} sx={{height:'100%',width:'100%'}} gap={'2rem'}>
      {cur === tests.length && <Diagnosis />}
      {!show && cur < tests.length && (
        <>
          <Typography variant='h5'>{`Take ${tests[cur]} test ?`}</Typography>
          <Stack flexDirection={'row'}>
          <Button onClick={handleYesClick}>yes</Button>
          <Button onClick={handleNextClick}>no</Button>
          </Stack>
        </>
      )}

      {show && cur < tests.length && tests[cur] === 'audio' && <Audio audioData={audioData} setAudioData={setAudioData} />}

      {show && cur < tests.length && tests[cur] === 'image' && <Image imageData={imageData} setImageData={setImageData} />}

      {show && cur < tests.length && tests[cur] === 'text' && <Text setTextData={setTextData} textData={textData} />}

      {show && cur < tests.length && tests[cur] === 'video' && <Video videoData={videoData} setVideoData={setVideoData} />}

        {show && cur<tests.length && tests[cur] === 'questionnaire' && <AnxietyQuestion setAnswers={setAnswers}/>}
        
        {show && cur<tests.length && tests[cur] === 'depressionquestionnaire' && <DepressionQuestion setAnswers={setAnswers} />}
      {show &&
        (cur < tests.length - 1 ? (
          <Button onClick={handleNextClick}sx={{marginTop:'1rem',marginBottom:'2rem'}}>Next</Button>
        ) : (
       
            <Button onClick={handleSubmit} sx={{marginTop:'1rem',marginBottom:'2rem'}}>Submit</Button>
          
        ))}
    </Stack>
    </Paper>
  );
}

export default TakeTest;
