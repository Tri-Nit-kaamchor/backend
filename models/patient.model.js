const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            default: null
        },
        disease : {
            type : String,
            default: null
        },
        age : {
            type : String,
            default: null
        },
    },  
    {
      timestamps: true,
    }
  );
  
  const PatientModel = mongoose.model("Patient", patientSchema);
  module.exports = PatientModel;
