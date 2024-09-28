const express = require("express");
const router = express.Router();
const {
  createPrescription,
  getPrescriptionById,
} = require("../controllers/prescriptionController");

router.post("/", createPrescription);

router.get("/:id", getPrescriptionById);

module.exports = router;
