import React, { lazy, Suspense } from 'react';
import { Stack } from '@mui/material';
const Home = lazy(() => import('./pages/Home'));
const Tests = lazy(() => import('./pages/Tests'));
const Navbar = lazy(()=> import('./components/Navbar'));
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import TakeTest from './pages/TakeTest';
const Diagnosis = lazy(()=> import('./pages/Diagnosis'));
const BipolarForm = lazy(()=> import('./components/BipolarForm'));
const EatingForm  =lazy(()=> import('./components/EatingForm'));
import depression from './assets/depression.jpg';
import bipolar from './assets/bipolar.png';
import eating from './assets/eating_disorder.png';
import anxiety from './assets/anxiety.jpg';
import Details from './pages/Details';
import  Grid  from '@mui/material/Grid';
import bg from './assets/wall.jpg'
import SignUp from './pages/SignUp';
import Footer from './components/Footer'
function App() {
  
  const data = [
    {
      icon: depression,
      name: 'depression',
      testTypes: ['audio', 'image','text','depressionquesionnaire'],
      detail: {
        'What is depression':
          'Depression is a common and serious medical illness that negatively affects how you feel, think, and act. It causes feelings of sadness and/or a loss of interest in activities once enjoyed.',
        Types: [
          
            'Major Depressive Disorder : Major Depressive Disorder is characterized by a persistent low mood, lack of interest or pleasure in daily activities, and other symptoms that significantly impact daily life.',
           'Persistent Depressive Disorder: Persistent Depressive Disorder, or dysthymia, is a chronic form of depression where individuals experience a low mood for a longer duration, often lasting for years.',
        
        ],
        Symptoms: [
          'Persistent sadness or emptiness',
          'Loss of interest or pleasure in activities',
          'Changes in sleep patterns',
          'Fatigue or low energy',
        ],
        'Risk factors': [
          'Family history of depression',
          'Trauma or stressful life events',
          'Chronic illnesses or certain medications',
        ],
      },
    },
    {
      icon: anxiety,
      name: 'anxiety',
      testTypes: ['image', 'audio', 'text', 'questionnaire'],
      detail: {
        'What is anxiety':
          'Anxiety is a normal reaction to stress and can be beneficial in some situations. However, when it becomes excessive or chronic, it can interfere with daily life.',
        Types: [
           'Generalized Anxiety Disorder : Generalized Anxiety Disorder involves excessive and persistent worrying about various aspects of life, often without a specific cause.',
          'Panic Disorder: Panic Disorder is characterized by sudden and repeated episodes of intense fear, often accompanied by physical symptoms like heart palpitations and shortness of breath.',
         
        ],
        Symptoms: [
          'Excessive worrying',
          'Restlessness or feeling on edge',
          'Difficulty concentrating',
          'Muscle tension',
        ],
        'Risk factors': ['Genetics', 'Brain chemistry', 'Trauma or stressful events'],
      },
    },
    {
      icon: bipolar,
      name: 'bipolar_disorder',
      testTypes: ['mcq'],
      detail: {
        'What is bipolar disorder':
          'Bipolar disorder, also known as manic-depressive illness, is a mental health condition characterized by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression).',
        Types: [
          'Bipolar I Disorder : Bipolar I Disorder involves at least one manic episode, which may be followed by a depressive episode. The manic episodes can be severe and may include psychosis.',
         'Bipolar II Disorder: Bipolar II Disorder involves a pattern of depressive episodes and hypomanic episodes, but never a full manic episode.',
          
        ],
        Symptoms: [
          'Manic episodes (elevated mood, increased energy)',
          'Depressive episodes (sadness, lack of interest)',
          'Mood swings',
        ],
        'Risk factors': ['Genetics', 'Brain structure and function', 'Family history'],
      },
    },
    {icon: eating,
      name: 'eating_disorder',
      testTypes: ['mcq'],
      detail: {
        'What is eating disorder':
          'Eating disorders are serious mental health conditions characterized by unhealthy eating habits that negatively impact physical and mental well-being.',
        Types: [
            'Anorexia Nervosa : Anorexia Nervosa involves extreme calorie restriction, intense fear of gaining weight, and a distorted body image.',
       
          'Bulimia Nervosa : Bulimia Nervosa involves episodes of overeating followed by compensatory behaviors such as vomiting, fasting, or excessive exercise.',
        ],
        Symptoms: [
          'Extreme weight loss',
          'Distorted body image',
          'Fear of gaining weight',
          'Binge eating followed by purging (in bulimia)',
        ],
        'Risk factors': [
          'Genetics',
          'Social pressures and cultural factors',
          'Body dissatisfaction',
        ],
      },
    },
  ];
  
  return (
    <Suspense fallback={<div>Loading...</div>}>

    <Stack style={{backgroundImage:`url(${bg})`,backgroundAttachment: 'fixed',backgroundSize:'cover',minHeight:'100%',position:'absolute',width:'100%'}}>
    <Router>
    <Navbar data={data.map((item)=>item.name)}/>
    
    <Grid container xs={10} sm={10} md={8} sx={{margin:'auto',overflow:'hidden',height:'100%'}}>
    <Routes>
      <Route exact path='/' element={<Home data= {data.map((item)=>{
        return {name: item.name,detail: item.detail[Object.keys(item.detail)[0]],icon:item.icon}
      })} />}/>
      <Route exact path='/tests' element={<Tests data={data.map((item)=>{
        return {name:item.name, icon: item.icon}
      })}/>}/>
      <Route exact path='/tests/depression' element={<TakeTest tests={data[0].testTypes} apiEndPoint={'2'}/>}/>
      <Route path='/tests/anxiety' element={<TakeTest tests={data[1].testTypes} apiEndPoint={'1'}/> }/>
      {/* <Route path="/tests/parkinson's_disease" element={<TakeTest tests={data[4].testTypes} apiEndPoint={'3'}/>}/> */}
      <Route path='/tests/bipolar_disorder' element={<BipolarForm/>}/>
      <Route path='/tests/eating_disorder' element={<EatingForm/>}/>
      <Route path= "/tests/:testName/diagnosis/:data" element={<Diagnosis/>}/>
      <Route path= "/details/depression" element={<Details data = {{name:data[0].name,detail:data[0].detail}}/>}/>
      <Route path= "/details/anxiety" element={<Details data = {{name:data[1].name,detail:data[1].detail}}/>}/>
      <Route path= "/details/bipolar_disorder" element={<Details data = {{name:data[2].name,detail:data[2].detail}}/>}/>
      <Route path= "/details/eating_disorder" element={<Details data = {{name:data[3].name,detail:data[3].detail}}/>}/>
      <Route path= "/signup" element={<SignUp/>}/>
      {/* <Route path= "/details/parkinson's_disease" element={<Details data = {{name:data[4].name,detail:data[4].detail}}/>}/> */}
      
    </Routes>
    </Grid>
    </Router>
    <Footer/>
    </Stack>
      
    </Suspense>
  )
}

export default App