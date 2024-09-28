const {
  createPrescription,
  getPrescription,
} = require("../services/prescriptionService");

exports.createPrescription = async (req, res, next) => {
  try {
    const newPrescription = req.body;
    const prescription = await createPrescription(newPrescription);
    res.status(201).json(prescription);
  } catch (error) {
    next(error);
  }
};

exports.getPrescription = async (req, rest, next) => {
  try {
    const { id } = req.params;
    const prescription = await getPrescription(id);
    if (!prescription) {
      return res.status(404).json({ message: "Prescription not found" });
    }
    res.status(200).json(prescription);
  } catch (error) {
    next(error);
  }
};
