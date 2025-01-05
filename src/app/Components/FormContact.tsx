"use client";

import React, { ChangeEvent, useState } from "react";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSent, setIsFormSent] = useState(false);
  const [formMessage, setFormMessage] = useState(
    "Mensagem enviada com sucesso! Em breve retornarei seu contato =)",
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xdoqavey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormMessage(
          "Mensagem enviada com sucesso! Em breve retornarei seu contato =)",
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setFormMessage(
        "Ooops, algo deu errado. Por favor, tente novamente mais tarde.",
      );
    } finally {
      setIsFormSent(true);
    }
  };

  const handleChangeIsFormSent = () => {
    setIsFormSent(!isFormSent);
  };

  return (
    <>
      <form
        className={`flex flex-col items-center justify-center gap-4 rounded-xl bg-primary p-10 shadow-xl dark:shadow-sm dark:shadow-primary`}
        onSubmit={handleSubmit}
      >
        <div className="sm:col-span-4">
          <label className="block text-base font-medium leading-6">Nome:</label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-label focus-within:ring-2 focus-within:ring-inset focus-within:ring-label sm:max-w-md">
            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-1 xxl:w-[450px] block flex-1 rounded-xl bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6 lg:w-96"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label className="block text-base font-medium leading-6">
            Email:
          </label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-label focus-within:ring-2 focus-within:ring-inset focus-within:ring-label sm:max-w-md">
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="xxl:w-[450px] block flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6 lg:w-96"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label className="block text-base font-medium leading-6">
            Assunto:
          </label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-label focus-within:ring-2 focus-within:ring-inset focus-within:ring-label sm:max-w-md">
            <input
              type="text"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="xxl:w-[450px] block flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6 lg:w-96"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label className="block text-base font-medium leading-6">
            Mensagem:
          </label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-label focus-within:ring-2 focus-within:ring-inset focus-within:ring-label sm:max-w-md">
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="xxl:w-[450px] block h-28 flex-1 bg-transparent pl-1 focus:ring-0 sm:text-sm sm:leading-6 lg:w-96"
            />
          </div>
        </div>

        <button
          type="submit"
          className="h-14 w-[140px] rounded-3xl bg-secondary p-4 font-medium text-black shadow-lg hover:bg-[#f78e90]"
        >
          Enviar
        </button>
      </form>

      {isFormSent && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="shadow-bg-dark dark:shadow-bg-light flex flex-col items-center justify-center gap-y-5 rounded-md border-2 bg-white p-5 shadow-md dark:bg-gray-800">
            <p>{formMessage}</p>
            <button
              className="h-14 w-[100px] rounded-3xl bg-secondary p-4 font-medium text-black shadow-lg hover:bg-[#f78e90]"
              onClick={handleChangeIsFormSent}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </>
  );
}
