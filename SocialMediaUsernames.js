const usernameRegex = /@(\w+)/;
const apiResponse4 = "Follow us on Twitter: @SampleUser1";
const match4 = apiResponse4.match(usernameRegex);
if (match4) {
  const username = match4[1];
  console.log(`Username: ${username}`);
}
