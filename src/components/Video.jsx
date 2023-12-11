import React, { useState, useRef, useEffect } from 'react';
import { Stack,Button } from '@mui/material';
const Video = ({ videoData, setVideoData }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const videoRef = useRef(null);

  const handleRetake =()=>{
    setVideoData(null);
    chunksRef.current = [];
  }
  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunksRef.current.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const videoBlob = new Blob(chunksRef.current, { type: 'video/webm' });
          setVideoData(videoBlob);
        };

        mediaRecorder.start();
        setIsRecording(true);
      })
      .catch((error) => console.error('Error accessing camera and microphone:', error));
  };

  const stopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    // If videoData is available, clear live video stream
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    // If videoData is not available, display live video stream
    if (!videoData && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((error) => console.error('Error accessing camera:', error));
    }

    return () => {
      const mediaRecorder = mediaRecorderRef.current;
      if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
      }
    };
  }, [videoData, isRecording]);

  return (
    <Stack alignContent={'center'}>
       { !videoData ?<>
       <Stack justifyContent={'space-evenly'} flexDirection={'row'}>
      <Button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </Button>
      <Button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </Button>
      </Stack>
      </>:
      <>
      <Button onClick={handleRetake}>Retake</Button></>
}
      {videoData ? (
        <Stack alignItems={'center'} >
          <video controls width="400" height="300">
            <source src={URL.createObjectURL(videoData)} type="video/webm" />
            Your browser does not support the video element.
          </video>
          </Stack>
      ) : (
        <Stack alignItems={'center'}>
          <video ref={videoRef} autoPlay width="400" height="300">
            Your browser does not support the video element.
          </video>
        </Stack>
      )}
    </Stack>
  );
};

export default Video;
