// Time must have following format:
// 12 or 24 hours -> "XX:YY"
// Where XX <= 23 and YY <= 59
const timeValidator = (time) => {
  const parsedTime = time.split(':');

  const newTime = new Date().setHours(
    parsedTime[0] > 23 ? 23 : parsedTime[0] < 0 ? 0 : parsedTime[0],
    parsedTime[1] > 59 ? 59 : parsedTime[1] < 0 ? 0 : parsedTime[1],
    null,
    null
  );
  return new Date(newTime);
};

module.exports = timeValidator;
