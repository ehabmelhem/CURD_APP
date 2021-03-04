const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
// fRYabgcTWn3ai6UI
// mongodb+srv://ehab:fRYabgcTWn3ai6UI@cluster0.3reas.mongodb.net/test

mongoose.connect(
  "mongodb+srv://ehab:fRYabgcTWn3ai6UI@cluster0.3reas.mongodb.net/curd_app",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const userModel = mongoose.model("userCollection", {
  username: String,
  password: String,
});

app.get("/stam", (req, res) => {
  res.send({ messege: "hii" });
});

app.post("/add-user", async (req, res) => {
  const { username, password } = req.body;
  try {
    await userModel.find({ username: username }).then((data) => {
      if (data.length === 0) {
        const newUser = new userModel({
          username: username,
          password: password,
        });
        newUser.save().then(() => {
          console.log("add new user to db");
        });
        res.send({ index: 1 });
      } else {
        res.send({ index: -1 });
      }
    });
  } catch (e) {
    res.send({ index: -1 });
  }
});

app.get("/get-password", async (req, res) => {
  const { username } = req.query;
  try {
    await userModel.find({ username: username }).then((data) => {
      if (data.length === 0) {
        res.send({ index: -1 });
      } else {
        res.send({ index: 1, password: data[0].password });
      }
    });
  } catch (e) {
    res.send({ index: -1 });
  }
});

app.put("/update-password", async (req, res) => {
  const { username, password, newPassword } = req.body;
  try {
    await userModel
      .find({ username: username, password: password })
      .then(async (data) => {
        if (data.length === 0) {
          res.send({ index: -1 });
        } else {
          if (password === newPassword) res.send({ index: -1 });
          else {
            await userModel
              .update(
                { username: username, password: password },
                { password: newPassword }
              )
              .then(() => {
                console.log("update is good");
              });
            res.send({ index: 1 });
          }
        }
      });
  } catch (e) {
    res.send({ index: -1 });
  }
});

app.delete("/delete-user", async (req, res) => {
  const { username, password } = req.body;
  try {
    await userModel
      .find({ username: username, password: password })
      .then(async (data) => {
        if (data.length === 0) {
          res.send({ index: -1 });
        } else {
          await userModel
            .deleteOne({ username: username, password: password })
            .then(() => {
              //   console.log("delete has been success full");
              res.send({ index: 1 });
            })
            .catch((err) => {
              res.send({ index: -1 });
            });
        }
      });
  } catch (e) {
    res.send({ index: -1 });
  }
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
