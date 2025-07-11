"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      nom: "",
      email: "",
      sujet: "",
      message: "",
    },
    mode: "onBlur",
  });

  const sendEmail = () => {
    const templateParams = {
      name: getValues().nom,
      email: getValues().email,
      subject: getValues().sujet,
      message: getValues().message,
    };

    emailjs
      .send(
        "service_5xy3bg6", 
        "template_iw5phsf", 
        templateParams,
        "Ou2fqOiMhT01BqJex" 
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          reset(); 
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section className="bg-gray-50 py-20 px-4 pt-28">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Contactez-nous</h2>

        <form onSubmit={handleSubmit(sendEmail)} className="space-y-6" noValidate>
          <div>
            <label htmlFor="nom" className="block mb-2 font-semibold text-gray-700">
              Nom
            </label>
            <input
              {...register("nom", { required: "Champ obligatoire" })}
              type="text"
              id="nom"
              placeholder="Votre nom"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.nom && <div className="text-red-500 text-sm mt-1">{errors.nom.message}</div>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              {...register("email", {
                required: "Champ obligatoire",
                pattern: {
                 value: /^(?!.*[_%.+-]{2,})[a-zA-Z0-9]+(?:[a-zA-Z0-9_%.+-]*[a-zA-Z0-9]+)?@[a-zA-Z0-9]+(?:[a-zA-Z0-9.-]*[a-zA-Z0-9]+)?\.[a-zA-Z]{2,}$/,
                  message: "Adresse email invalide",
                },
              })}
              type="email"
              id="email"
              placeholder="exemple@domaine.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>}
          </div>

          <div>
            <label htmlFor="sujet" className="block mb-2 font-semibold text-gray-700">
              Sujet
            </label>
            <input
              {...register("sujet", { required: "Champ obligatoire" })}
              type="text"
              id="sujet"
              placeholder="Sujet de votre message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.sujet && <div className="text-red-500 text-sm mt-1">{errors.sujet.message}</div>}
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
              Message
            </label>
            <textarea
              {...register("message", { required: "Champ obligatoire" })}
              id="message"
              rows="5"
              placeholder="Votre message..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && (
              <div className="text-red-500 text-sm mt-1">{errors.message.message}</div>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
