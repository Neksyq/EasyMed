const express = require("express");
const app = express();
const prescriptionRoutes = require("./routes/prescriptions.js");

app.use(express.json());

app.use("/api/prescriptions", prescriptionRoutes);

const PORT = process.env.PRESCRIPTION_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Prescription Service running on port ${PORT}`);
});
