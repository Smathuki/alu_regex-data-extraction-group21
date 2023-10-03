const emailRegex = /(\S+@\S+\.\S+)/;
const apiResponse8 = "Contact us at: info@example.com";
const match8 = apiResponse8.match(emailRegex);
if (match8) {
  const emailAddress = match8[0];
  console.log(`Email Address: ${emailAddress}`);
}
