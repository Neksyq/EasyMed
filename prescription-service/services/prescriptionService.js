const pool = require("../config/db");

exports.create = async ({ patientName, medication, dosage }) => {
  const result = await pool.query(
    "INSERT INTO prescriptions( patient_name, medication, dosage) VALUES (?, ?, ?)",
    [patientName, medication, dosage]
  );
  return { success: true, insertId: result[0].insertId };
};

exports.getAll = async () => {
  const [result] = await pool.query("SELECT * FROM prescriptions");
  return result;
};

exports.getById = async (id) => {
  const [result] = await pool.query("SELECT * FROM prescriptions WHERE id=?", [
    id,
  ]);
  return result;
};

exports.delete = async (id) => {
  const result = await pool.query("DELETE FROM prescriptions WHERE id=?", [id]);
  return result;
};

exports.update = async (fields, values) => {
  const query = `UPDATE prescriptions SET ${fields.join(", ")} WHERE id = ?`;
  const [result] = await pool.query(query, values);
  return result
};
