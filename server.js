require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const Saved = require("./models/savedModal");

const User = require("./models/userModel");
const client = require("twilio")(process.env.acountSID, process.env.authToken);
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

app.post("/user/saved", async (req, res) => {
  let { videoId, VideoLink,productId } = req.body;
  //console.log(videoId, VideoLink);
  videoId = mongoose.Types.ObjectId(videoId);
  try {
    // here videoId -userid check if user exist or not
    let check = await Saved.exists({ videoId: videoId });
    // console.log(check);
    if (check) {
      let data = await Saved.findOne({ videoId: videoId });
      let newLink = data.VideoLink;
      let already = newLink.includes(VideoLink);
      
      if (already) {
        res.json({ message: 0 });
      } else {
        newLink.push(VideoLink);
        await Saved.findOneAndUpdate(
          { videoId: videoId },
          { VideoLink: newLink },
      
        );
        res.json({ message: 1 });
      }
    } else {
      let saved = new Saved({
        videoId: videoId,
        VideoLink: VideoLink,
        productId,
      });
      console.log(saved);
      await saved.save();
      res.json({message:1});
    }

  } catch (err) {
    console.log(err);
    res.json({
      message: "Something went wrong",
    });
  }
});
app.get("/user/saved/:id", (req, res) => {
  let id = req.params.id;
  id = mongoose.Types.ObjectId(id);
  Saved.findOne({ videoId: id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({message: "Something went wrong",err});
    });
});
app.delete("/user/delete/:id", (req, res) => {
  let id = req.params.id;
  id = mongoose.Types.ObjectId(id);
  User.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: "Account has been deleted successfully" });
    })
    .catch((err) => {
      console.log({ error: err, message: "Something went wrong" });
    });
});
app.post("/onetimepassword", (req, res) => {
  let { country, phone } = req.body;
  console.log(country, phone);
  client.verify
    .services(process.env.serviceID)
    .verifications.create({ to: `+${country}${phone}`, channel: "sms" })
    .then((verification) => {
      console.log(verification);
      res.json({ message: "OTP sent successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Something went wrong" });
    });
});
app.post('/otpcheck',(req,res)=>{
  let {otp,country,phone}=req.body;
  console.log(otp,country,phone);
  client.verify
    .services(process.env.serviceID)
    .verificationChecks.create({ to: `+${country}${phone}`, code: otp })
    .then((verification_check)=>{
      res.json({message: "OTP verified successfully",data:verification_check.status});
    }).catch((err)=>{
      console.log(err);
      res.json({message: "Something went wrong"});
    })
})
// get all product with particular id
app.post('/fetchdetails',(req,res)=>{
    const {email}=req.body;
    User.find({email})
    .then((data)=>{
      res.json(data);
    }).catch((err)=>{
      console.log(err);
      res.json({message: "Something went wrong"});
    })
})
app.post('/exist',(req,res)=>{
  const {email}=req.body;
  User.findOne({email})
  .then((data)=>{
    if(data){
      res.json({message:'Email already exist',exist:1});
    }
    else{
      res.json({message:'Email not exist',exist:0});
    }
  }
  ).catch((err)=>{
    console.log(err);
    res.json({message:'Something went wrong'});
  }
  )
})
app.use("/user", require("./routes/userRoutes"));

app.use("/admin", require("./routes/proRoutes"));

// Connect to mongodb

const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {}, (err) => {
  if (err) throw err;
  console.log("Connected to mongoDB");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
