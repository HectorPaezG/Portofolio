"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+52) 314 182 48 91",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hecxav3010@outlook.com",
  },
];

const Contact = () => {
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalError, setModalError] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [warningVisible, setWarningVisible] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const userEmail = formData.get("user_email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    if (!firstName || !lastName || !userEmail || !phone || !message) {
      setWarningMessage("Por favor, completa todos los campos.");
      setWarningVisible(true);
      return;
    }

    emailjs
      .sendForm("service_hgiuc3w", "template_w4d83of", form.current, {
        publicKey: "kAyvCZL3zS01pYKzU",
      })
      .then(
        () => {
          setModalMessage("¡Tu mensaje ha sido enviado correctamente!");
          setModalError(false);
          setModalOpen(true);
          form.current.reset();
          setWarningMessage("");
          setWarningVisible(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setModalMessage("Error al enviar el mensaje. Inténtalo de nuevo.");
          setModalError(true);
          setModalOpen(true);
        }
      );
  };

  useEffect(() => {
    if (warningVisible) {
      const timer = setTimeout(() => {
        setWarningVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [warningVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              ref={form}
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-blue-700">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              {/* Mensaje de advertencia */}
              {warningVisible && (
                <div className={`transition-opacity duration-500 ease-in-out ${warningVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-md shadow-md">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                      </svg>
                      <span>{warningMessage}</span>
                    </div>
                  </div>
                </div>
              )}
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" name="firstName" />
                <Input type="lastname" placeholder="Lastname" name="lastName" />
                <Input type="email" placeholder="Email address" name="user_email" />
                <Input type="phone" placeholder="Phone number" name="phone" />
              </div>
              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />
              {/* Button */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex item xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-blue-700 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`bg-${modalError ? 'red-500' : '[#27272c]'} rounded-lg p-6 max-w-sm mx-auto`}>
            <h3 className="text-lg font-semibold text-white">
              {modalError ? "Error" : "Mensaje Enviado"}
            </h3>
            <p className="mt-2 text-white">{modalMessage}</p>
            <div className="flex justify-end mt-4">
              <Button onClick={() => setModalOpen(false)} >Cerrar</Button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
