import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';

const Image = ({ imageData, setImageData }) => {
  const videoRef = useRef(null);
  let stream = null;

  const startCamera = async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to a Blob
    canvas.toBlob(
      (blob) => {
        setImageData(blob);
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      },
      'image/jpeg', // Specify the format (you can change it to 'image/png' or other formats)
      1             // Quality (from 0 to 1)
    );
  };

  const retakeImage = () => {
    setImageData(null);
    startCamera();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      {!imageData ? (
        <video ref={videoRef} autoPlay />
      ) : (
        <img src={URL.createObjectURL(imageData)} alt="Captured" />
      )}
      {!imageData ? (
        <Button onClick={captureImage}>Capture Image</Button>
      ) : (
        <Button onClick={retakeImage}>Retake</Button>
      )}
    </div>
  );
};

export default Image;
