const express = require("express");
const app = express();
const port = 3000;

app.get("/fibonacci/:input", (req, res) => {
  let int = req.params.input;
  let result = [1, 1];
  if (int == 1) return result[0];
  if (int == 2) return result.join(" ");
  let temp = 0;
  let tempArr = [1, 1];
  j = 2;
  for (let i = 2; i <= int; i++) {
    if (result.length == int) break;
    temp = tempArr[j - 2] + tempArr[j - 1];
    if (temp % 2 != 0) {
      tempArr.push(temp);
      result.push(temp);
    } else {
      tempArr.push(temp);
      i--;
    }
    j++;
  }
  result = result.sort((a, b) => b - a).join(" ");
  res.send(result);
});

app.get("/longestSubStr/:input", (req, res) => {
  let str = req.params.input;
  if (!str || typeof str != "string") return res.send("0");
  let result = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let tempAlphabet = "";
  let tempArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1] || str[i] > str[i + 1]) {
      if (tempAlphabet) {
        tempArr.push(tempAlphabet);
      }
      tempAlphabet = "";
      continue;
    }
    if (str.length - 1 == i && tempAlphabet && str[i] > str[i - 1]) {
      tempAlphabet += str[i];
      tempArr.push(tempAlphabet);
    }
    tempAlphabet += str[i];
  }
  processedSubStr = tempArr.sort()[tempArr.length - 1];
  if (!processedSubStr) return res.send("0");
  while (!result) {
    result = alphabet.match(processedSubStr);
    if (!result) {
      processedSubStr = processedSubStr.substr(0, processedSubStr.length - 1);
    }
  }
  res.status(200).json({ output: result[0].length });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
