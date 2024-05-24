const express = require("express");
const cors = require("cors");
const UserModel = require("./models/Users")
const Listing = require("./models/listing")
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@mern-estate.zats7iu.mongodb.net/mern-estate').then(()=>{
    console.log("db connect successfully");
}) 
.catch((error) => {
    console.log(error);
})

app.get('/getUsers', (req,res) =>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getListing', (req,res) =>{
    Listing.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id",async(req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete({ _id:id });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
})

app.delete("/deleteRent/:id",async(req, res) => {
    try {
        const id = req.params.id;
        const user = await Listing.findByIdAndDelete({ _id:id });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
})

app.delete("/deleteSale/:id",async(req, res) => {
    try {
        const id = req.params.id;
        const user = await Listing.findByIdAndDelete({ _id:id });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
})

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`);
});







// app.get("/", (req,res) => {
//     res.send("From gets router");
// });

// const listingSchema = new mongoose.Schema(
//     {
//       name: {
//         type: String,
//         required: true,
//       },
//       description: {
//         type: String,
//         required: true,
//       },
//       address: {
//         type: String,
//         required: true,
//       },
//       regularPrice: {
//         type: Number,
//         required: true,
//       },
//       discountPrice: {
//         type: Number,
//         required: true,
//       },
//       bathrooms: {
//         type: Number,
//         required: true,
//       },
//       bedrooms: {
//         type: Number,
//         required: true,
//       },
//       furnished: {
//         type: Boolean,
//         required: true,
//       },
//       parking: {
//         type: Boolean,
//         required: true,
//       },
//       type: {
//         type: String,
//         required: true,
//       },
//       offer: {
//         type: Boolean,
//         required: true,
//       },
//       imageUrls: {
//         type: Array,
//         required: true,
//       },
//       userRef: {
//         type: String,
//         required: true,
//       },
//     },
//     { timestamps: true }
//   );
  
//   const Listing = mongoose.model('Listing', listingSchema);
  

// //createuser
// app.post("/createuser",async(req,res)=>{
//     try{
//         const bodyData = req.body;
//         const user = new User(bodyData);
//         const userData = await user.save();
//         res.send(userData);
//     }   catch(error){
//         res.send(error);
//     }
// })


//readall
// app.get("/readAllListing",async(req,res)=>{
//     try{
//         const userData = await Listing.find({});
//         res.send(userData);
//     }catch(error){
//         res.send(error);
//     }
// })

// app.get("/read/:id",async(req,res)=>{
//     try {
//         const id = req.params.id;
//         const user = await Listing.findById({_id: id});
//         res.send(user);
//     } catch (error) {
//         res.send(error);
//     }
// })

// //update
// app.put("/updateuser/:id",async(req,res) => {
//     try {
//         const id = req.params.id;
//         const user = await User.findByIdAndUpdate({ _id:id }, req.body,{
//             new: true,
//         });
//         res.send(user);
//     } catch (error) {
//         res.send(error);
//     }
// })


// //delete
// app.delete("/delete/:id",async(req, res) => {
//     try {
//         const id = req.params.id;
//         const user = await User.findByIdAndDelete({ _id:id });
//         res.send(user);
//     } catch (error) {
//         res.send(error);
//     }
// })

