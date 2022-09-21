import moment from "moment";
import Toast from "react-native-root-toast";

export const EditValidate = (data, submitError, setSubmitError) => {
  if (data.images.length < 2) {
    Toast.show("All images are required");
    return 
  } 
   if (!data.firstName) {
     setSubmitError({
      ...submitError,
      firstNameError: "First Name is required",
    });
    return
  } 
   if (!data.lastName) {
     setSubmitError({
      ...submitError,
      lastNameError: "Last Name is required",
    });
    return
  } 
   if (!data.aboutMe) {
     setSubmitError({
      ...submitError,
      aboutError: "About me is required",
    });
    return
  } 
   if (!data.aboutMe) {
     setSubmitError({
      ...submitError,
      aboutError: "About me is required",
    });
    return
  } 
   if (data.personality.length < 1) {
    Toast.show("Atleast one Personality is required");
    return
  } 
   if (data.characteristics.length < 1) {
    Toast.show("Atleast one Characteristics is required");
    return 
  } 
   if (!data.dob) {
     setSubmitError({
      ...submitError,
      birthdayError: "Birthday is required",
    });
    return
  } 
   if (moment().diff(data.dob, "years", false) < 17) {
     setSubmitError({
      ...submitError,
      birthdayError: "Your age must be 17",
    });
    return
  } 
   if (!data.familyOrigin) {
     setSubmitError({
      ...submitError,
      familyError: "Family Origin is required",
    });
    return
  } 
   if (!data.language) {
     setSubmitError({
      ...submitError,
      languageError: "Language is required",
    });
    return
  } 
   if (!data.gender) {
     setSubmitError({
      ...submitError,
      genderError: "Gender is required",
    });
    return
  } 
   if (!data.location) {
     setSubmitError({
      ...submitError,
      editlocationError: "Location is required",
    });
    return
  } 
   if (!data.height) {
     setSubmitError({
      ...submitError,
      heightError: "height is required",
    });
    return
  } 
   if (!data.employment) {
     setSubmitError({
      ...submitError,
      employmentError: "Employment is required",
    });
    return
  } 
   if (!data.occupation) {
     setSubmitError({
      ...submitError,
      occupationError: "Occupation is required",
    });
    return
  } 
   if (!data.religion) {
     setSubmitError({
      ...submitError,
      religionError: "Religion is required",
    });
    return
  } 
   if (!data.religiousity) {
     setSubmitError({
      ...submitError,
      religiousityError: "Religiousity is required",
    });
    return
  } 
   if (!data.prayerLevel) {
     setSubmitError({
      ...submitError,
      prayerLevelError: "Prayer Level is required",
    });
    return
  } 
   if (!data.sector) {
     setSubmitError({
      ...submitError,
      sectorError: "Sector is required",
    });
    return
  } 
   if (!data.martialHistory) {
     setSubmitError({
      ...submitError,
      martialHistoryError: "Martial History is required",
    });
    return
  }  if (!data.martialTimming) {
     setSubmitError({
      ...submitError,
      martialTimmingError: "Martial Timming is required",
    });
    return
  }
  // whatKids:whatKids,
  // hasKids:hasKids,
  // willRelocate:willRelocate,
  // jobStatus:jobStatus,
  // drinking:drinking,
  // smoking:smoking,
   if (!data.whatKids) {
    Toast.show("Whats Kids is required");
    return 
  } 
   if (!data.hasKids) {
    Toast.show("Has Kids is required");
    return 

  } 
   if (!data.willRelocate) {
    Toast.show("willing Relocate is required");
    return 
  } 
   if (!data.jobStatus) {
    Toast.show("Job Status is required");
    return 
  } 
   if (!data.drinking) {
    Toast.show("Drinking is required");
    return 
  } 
   if (!data.smoking) {
    Toast.show("Smoking is required");
    return 
  } 
    return true;
  
};
