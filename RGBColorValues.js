:const colorRegex = /rgb\((\d{1,3}),\s(\d{1,3}),\s(\d{1,3})\)/;
const apiResponse3 = "Background color: rgb(255, 0, 128)";
const match3 = apiResponse3.match(colorRegex);
if (match3) {
  const red = match3[1];
  const green = match3[2];
  const blue = match3[3];
  console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
}
