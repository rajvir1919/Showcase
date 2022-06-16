const mongoose = require("mongoose");

const SavedVideoSchema= new mongoose.Schema({
    videoId: {  
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    VideoLink:[{
        type: String,
        required: true,
    }],
    productId:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Saved", SavedVideoSchema);
