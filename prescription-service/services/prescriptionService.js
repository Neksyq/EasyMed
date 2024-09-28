const prescriptions = [];

exports.createPrescription = async (data) => {
  const newPrescription = { id: prescriptions.length + 1, ...data };
  prescriptions.push(newPrescription);
  return newPrescription;
};

exports.getPrescription = async (id) => {
  const prescription = prescriptions.find((p) => p.id == parseInt(id));
  if (!prescription) throw new Error("Prescription not found");
  return prescription;
};
