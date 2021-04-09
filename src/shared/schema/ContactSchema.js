import * as Yup from 'yup';

const ContactSchema = Yup.object({
  name: Yup.string().min(5, "Minimo 5 caracteres").max(20, "Maximo 20 caracteres").required("El campo nombre es requerido"),
  email: Yup.string().min(5).max(100).email().required(),
  message: Yup.string().required()
});

export default ContactSchema;
