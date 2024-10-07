const express = require("express");
const dotenv = require("dotenv");
const prescriptionRoutes = require("./routes/prescriptions.js");
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();
const PORT = process.env.PRESCRIPTION_PORT;

app.use(express.json());
app.use(prescriptionRoutes);
app.use(errorMiddleware); // Error handling middleware

app.listen(PORT, () => {
  console.log(
    `Prescription Service running on port ${PORT}`
  );
});
