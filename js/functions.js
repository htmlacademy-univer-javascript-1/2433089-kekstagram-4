const getMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const checkTime = (startWorkDay, endWorkDay, startMeeting, meetingTimeValue) => {
  const startWorkDayMinutes = getMinutes(startWorkDay);
  const endWorkDayMinutes = getMinutes(endWorkDay);
  const startMeetingMinutes = getMinutes(startMeeting);

  return (
    startMeetingMinutes >= startWorkDayMinutes &&
    startMeetingMinutes + meetingTimeValue <= endWorkDayMinutes
  );
};

checkTime('08:00', '17:30', '14:00', 90); // true
checkTime('8:0', '10:0', '8:0', 120);     // true
checkTime('08:00', '14:30', '14:00', 90); // false
checkTime('14:00', '17:30', '08:0', 90);  // false
checkTime('8:00', '17:30', '08:00', 900); // false
