import React, { useState, useRef } from 'react';
import { Stack, Button, Box } from '@mui/material';

const Audio = ({ audioData, setAudioData }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const handleRetake = () => {
    setAudioData(null);
    chunksRef.current = []; // Clear the chunks array
  };

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunksRef.current.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunksRef.current, { type: 'audio/wav' });
          setAudioData(audioBlob);
        };

        mediaRecorder.start();
        setIsRecording(true);
      })
      .catch((error) => console.error('Error accessing microphone:', error));
  };

  const stopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      {!audioData && (
        <Stack flexDirection={'row'}>
          <Button onClick={startRecording} disabled={isRecording}>
            Start Recording
          </Button>
          <Button onClick={stopRecording} disabled={!isRecording}>
            Stop Recording
          </Button>
        </Stack>
      )}

      {audioData && (
        <Stack alignItems={'center'} spacing={2}>
          <audio controls>
            <source src={URL.createObjectURL(audioData)} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <Button onClick={handleRetake}>
            Retake
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Audio;
