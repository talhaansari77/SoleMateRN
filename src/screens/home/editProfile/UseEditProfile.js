import moment from 'moment';
import Toast from 'react-native-simple-toast';

export const EditValidate = (data, submitError, setSubmitError, images) => {
  if (!images.image1) {
    Toast.show('All images are required');
    return;
  }
  if (!images.image2) {
    Toast.show('All images are required');
    return;
  }
  if (!images.image3) {
    Toast.show('All images are required');
    return;
  }
  if (!images.image4) {
    Toast.show('All images are required');
    return;
  }
  if (!images.image5) {
    Toast.show('All images are required');
    return;
  }
  if (!images.image6) {
    Toast.show('All images are required');
    return;
  }

  if (!data.firstName) {
    setSubmitError({
      ...submitError,
      firstNameError: 'First Name is required',
    });
    return;
  }
  if (!data.lastName) {
    setSubmitError({
      ...submitError,
      lastNameError: 'Last Name is required',
    });
    return;
  }
  if (!data.aboutMe) {
    setSubmitError({
      ...submitError,
      aboutError: 'About me is required',
    });
    return;
  }
  if (!data.dob) {
    setSubmitError({
      ...submitError,
      birthdayError: 'Birthday is required',
    });
    return;
  }
  if (moment().diff(data.dob, 'years', false) < 17) {
    setSubmitError({
      ...submitError,
      birthdayError: 'Your age must be 17',
    });
    return;
  }
  if (!data.gender) {
    setSubmitError({
      ...submitError,
      genderError: 'Gender is required',
    });
    return;
  }
  
  if (!data?.iceBreakerQ[0]?.answer) {
    Toast.show('All Ice Breaker Questions are required');
    return;
  }
  if (!data?.iceBreakerQ[1]?.answer) {
    Toast.show('All Ice Breaker Questions are required');
    return;
  }
  if (!data?.iceBreakerQ[2]?.answer) {
    Toast.show('All Ice Breaker Questions are required');
    return;
  }
  if (data.personality.length < 1) {
    Toast.show('Atleast one Personality is required');
    return;
  }
  
  
  
  if ( !data.basicInfo[1].status) {
    setSubmitError({
      ...submitError,
      familyError: 'Family Origin is required',
    });
    return;
  }
  if ( data.basicInfo[3].status.length<=0) {
    setSubmitError({ 
      ...submitError,
      languageError: 'Language is required',
    });
    return;
  }
  if ( !data.basicInfo[0].status) {
    setSubmitError({
      ...submitError,
      editlocationError: 'Location is required',
    });
    return; 
  }
  if (!data.basicInfo[2].feet||!data.basicInfo[2].inches) {
    setSubmitError({
      ...submitError,
      heightError: 'height is required',
    });
    return;
  }
  
  
  
  if (!data.education[1].status) {
    setSubmitError({
      ...submitError,
      employmentError: 'Employment is required',
    });
    return;
  }
  if (!data.education[0].status) {
    setSubmitError({
      ...submitError,
      occupationError: 'Occupation is required',
    });
    return;
  }
  if (!data.religiousness[0].status) {
    setSubmitError({
      ...submitError,
      religionError: 'Religion is required',
    });
    return;
  }

  if(data.religiousness[0].status=== "Islam" ||data.religiousness[0].status=== "Christianity"){
  if (!data.religiousness[2].status) {
    setSubmitError({
      ...submitError,
      sectorError: 'Sector is required',
    });
    return;
  }
  }
  if ( !data.religiousness[1].status) {
    setSubmitError({
      ...submitError,
      religiousityError: 'Religiousity is required',
    });
    return;
  }
  
  if ( !data.partnerExpectations[1].status) {
    setSubmitError({
      ...submitError,
      martialHistoryError: 'Martial History is required',
    });
    return;
  }  
  if ( !data.partnerExpectations[0].status) {
    setSubmitError({
      ...submitError,
      martialTimmingError: 'Martial Timming is required',
    });
    return;
  }


  // if (data.partnerExpectations[2].label === 'WhatKids' && !data.status) {
  //   Toast.show('Whats Kids is required');
  //   return;
  // }
  // if (data.partnerExpectations[3].label === 'HasKids' && !data.status) {
  //   Toast.show('Has Kids is required');
  //   return;
  // }
  // if (data.partnerExpectations[4].label === 'Drinking' && !data.status) {
  //   Toast.show('Drinking is required');
  //   return;
  // }
  // if (data.partnerExpectations[5].label === 'Smoking' && !data.status) {
  //   Toast.show('Smoking is required');
  //   return;
  // }
  // if (data.partnerExpectations[6].label === 'WillRelocate' && !data.status) {
  //   Toast.show('willing Relocate is required');
  //   return;
  // }
  
  
  return true;
}