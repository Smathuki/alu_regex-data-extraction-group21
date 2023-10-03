const dateTimeRegex = /(\w{3} \d{2}, \d{4} - \d{2}:\d{2} [APap][Mm])/;
const apiResponse7 = "Event Date: Nov 15, 2023 - 02:30 PM";
const match7 = apiResponse7.match(dateTimeRegex);
if (match7) {
  const dateTime = match7[0];
  console.log(`Date and Time: ${dateTime}`);
}
