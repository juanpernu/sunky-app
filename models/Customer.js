import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor introduce tu nombre."],
    maxlength: [60, "En nombre no puede contener mas de 60 caracteres"],
  },
  lastname: {
    type: String,
    required: [true, "Por favor introduce tu apellido."],
    maxlength: [30, "El teléfono no puede contener mas de 30 caracteres"],
  },
  phone: {
    type: String,
    required: [true, "Por favor indica un número de teléfono."],
    maxlength: [30, "El teléfono no puede contener mas de 30 caracteres"],
  },
  email: {
    type: String,
    required: [true, "Por favor indica un email."],
    maxlength: [50, "El email no puede contener mas de 50 caracteres"],
  },
});

export default mongoose.models.Customer ||
  mongoose.model("Customer", CustomerSchema);
