const fs = require("fs");

fs.write("abc.txt", "this is a new file", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("file successfly created");
  }
});
