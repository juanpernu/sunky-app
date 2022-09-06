import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor indica el nombre de tu negocio."],
    maxlength: [60, "En nombre no puede contener mas de 60 caracteres"],
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
  city: {
    type: String,
    required: [true, "Por favor indica la ciudad de origen."],
    maxlength: [50, "La ciudad no puede contener mas de 50 caracteres"],
  },
  terms_conditions: {
    type: Boolean,
    required: [true, "Por favor acepta los términos y condiciones."],
  },
  newsletter: {
    type: Boolean,
  },
});

export default mongoose.models.Business ||
  mongoose.model("Business", BusinessSchema);
