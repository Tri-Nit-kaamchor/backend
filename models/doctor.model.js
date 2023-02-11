const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
    {
        publicKey : {
            type : String,
            default: null
        },
        licenseNumber : {
            type : String,
            default: null
        },
        hospital : {
            type : String,
            default: null
        },
        name : {
            type : String,
            default: null
        },
        
    },  
    {
      timestamps: true,
    }
  );
  
  const DocterModel = mongoose.model("Doctor", doctorSchema);
  module.exports = DocterModel;
