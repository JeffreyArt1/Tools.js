// El tiempo debe tener el siguiente formato
// 12 o 24 horas -> "XX:YY"
// Donde XX <= 23 y YY<= 59
const timeValidator = (time) => {
  const parsedTime = time.split(':');

  const newTime = new Date().setHours(
    parsedTime[0] > 23 ? 23 : parsedTime[0] < 0 ? 0 : parsedTime[0],
    parsedTime[1] > 59 ? 59 : parsedTime[1] < 0 ? 0 : parsedTime[1],
    0,
    0
  );
  return new Date(newTime);
};
