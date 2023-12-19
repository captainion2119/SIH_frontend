import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Audio from '../components/Audio';
import Video from '../components/Video';
import Text from '../components/Text';
import Image from '../components/Image';
import Diagnosis from './Diagnosis';
import { Typography,Stack,Button } from '@mui/material';
function TakeTest({ tests,apiEndPoint}) {
  const navigate = useNavigate();
  const [cur, setCur] = useState(0);
  const [show, setShow] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [textData, setTextData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  
  const handleYesClick = () => {
    setShow(true);
  };

  const handleNextClick = () => {
    cur === tests.length - 1 ? handleSubmit() : setCur(cur + 1);
    setShow(false);

  };

  const handleSubmit = () => {
    
    const formData = new FormData();

    formData.append('audioData', audioData);
    formData.append('imageData', imageData);
    formData.append('textData', textData);
    // formData.append('videoData', videoData);
    // need to work on the video data

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
    <Stack alignItems={'center'} justifyContent={'center'} sx={{height:'100%',width:'100%'}}>
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

      {show &&
        (cur < tests.length - 1 ? (
          <Button onClick={handleNextClick}>Next</Button>
        ) : (
       
            <Button onClick={handleSubmit}>Submit</Button>
          
        ))}
    </Stack>
  );
}

export default TakeTest;
