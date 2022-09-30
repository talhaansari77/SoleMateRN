import moment from 'moment';

export const chatFormat = (time, format) => {
  const fireBaseTime = new Date(
    time.seconds * 1000 + time.nanoseconds / 1000000,
  );
  return moment(fireBaseTime).format(format);
};
