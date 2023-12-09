import React, { useState } from 'react';
import { Typography ,Grid} from '@mui/material';
import Card from '../components/Card';
function Tests() {
    const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [
    {
      icon: '📊',
      name:'depression',
      background: '#3498db',
      testTypes: ['audio', 'video'],
      apiEndpoint: 'https://api.example.com/test1',
    },
    {
      icon: '📋',
      name:'anxity',
      background: '#e74c3c',
      testTypes: ['text'],
      apiEndpoint: 'https://api.example.com/test2',
    },
    {
        name:'bipolar'
    },
    {
        name:'eating disorder'
    }
    // Add more icons as needed
  ];

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleSubmitData = (data, testType, apiEndpoint) => {
    // Here, you would make an API call to apiEndpoint with the collected data and test type.
    console.log(`Submitting data to ${apiEndpoint} for test type ${testType}:`, data);
    //For illustration purposes, you can replace this with an actual API call.
    
  };

  return (
    <>
        <Grid container spacing={{ xs: 2, md: 3 }} >
        {icons.map((iconData,index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <Card data = {iconData}></Card>
        </Grid>
        ))}
        </Grid>
    </>
  )
}

export default Tests