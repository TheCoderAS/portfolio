// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
// } from 'reactstrap';

import ReactHack from '../assets/images/reacthack.jpg'
import ReactCourse from '../assets/images/reactcourse.jpg'
import CodeJam from '../assets/images/codejam.jpg'
import Prody from '../assets/images/Prody.jpg'
import ncc from '../assets/images/ncc.webp'
import spartificialcert from '../assets/images/spartificialcert.jpeg'
import kapadhcert from '../assets/images/kapadhcert.jpeg'
import sannkalpcert from '../assets/images/sannkalpcert.jpeg'
import mlcert from '../assets/images/mlcert.jpeg'


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'React.js Certification by HackerRank',
    imgPath: ReactHack,
  },
  {
    label: 'Full Stack Development Specialization by Coursera',
    imgPath: ReactCourse,
  },
  {
    label: 'Machine Learning by Coursera',
    imgPath: mlcert,
  },
  {
    label: 'NCC Army- 4HP (I) COY NCC NIT HAMIRPUR',
    imgPath: ncc,
  },
  {
    label: 'Lost Lander Event (Prodyogiki 2020) by NIT Hamirpur',
    imgPath: Prody,
  },
  {
    label: 'Spartificial Freelancer Certificate',
    imgPath: spartificialcert,
  },
  {
    label: 'Sannkalp Internship Certificate',
    imgPath: sannkalpcert,
  },
  {
    label: 'Kapadh Internship Certificate',
    imgPath: kapadhcert,
  },
  {
    label: 'Codejam by Google',
    imgPath: CodeJam,
  }
];

function CertCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'rgb(26, 32, 39)',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                  maxHeight: '70vh'
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{ bgcolor: 'rgb(26, 32, 39)' }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ color: activeStep === maxSteps - 1 ? 'secondary' : 'white' }}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}
            sx={{ color: activeStep === 0 ? 'secondary' : 'white' }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default CertCarousel;
