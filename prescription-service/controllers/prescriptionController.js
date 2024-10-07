const pool = require("../config/db");

exports.createPrescription = async (req, res) => {
  const { patientName, medication, dosage } = req.body;
  try {
    const result = await pool.query(
      "INSERT into prescriptions( patient_name, medication, dosage) VALUES ($1, $2, $3) RETURNING *",
      [patientName, medication, dosage]
    );
    res.status(201).json(result.row[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create prescription" });
  }
};

exports.getPrescriptions = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM prescriptions");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve prescriptions" });
  }
};
