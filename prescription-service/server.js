const express = require("express");
const app = express();
const dotenv = require("dotenv");
const prescriptionRoutes = require("./routes/prescriptions.js");

dotenv.config();

app.use(express.json());

app.use(prescriptionRoutes);

app.listen(process.env.PRESCRIPTION_PORT, () => {
  console.log(
    `Prescription Service running on port ${process.env.PRESCRIPTION_PORT}`
  );
});
