const express = require("express");
const router = express.Router();
const {
  createPrescriptions,
  getPrescription,
} = require("../controllers/prescriptionController");

// Create prescription
router.post("/", createPrescriptions);

router.get("/:id", getPrescription);

module.exports = router;
