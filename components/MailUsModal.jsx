"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import Button from "./Button";
import { MailIcon, ClipboardCheck } from "lucide-react";

const MailUsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        title="E-mail us"
        icon="/mail.svg"
        variant="btn_dark_green_outline hover:bg-green-90/90 duration-300"
        full
        handleClick={() => setIsOpen(true)}
      />
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "info@greengrowlandscape.com.au";

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <MailIcon className="text-green-50" />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Reach out to us!!
              </h3>
              <p
                className="text-center mb-6 cursor-pointer underline text-white"
                onClick={handleCopyToClipboard}
              >
                {email}
              </p>
              {isCopied && (
                <div className="text-center text-green-100 mb-4">
                  <ClipboardCheck className="inline-block mr-1" />
                  Email copied!
                </div>
              )}
              <div className="flex gap-2">
                <a
                  href={`mailto:${email}`}
                  className="bg-white hover:opacity-90 transition-opacity text-green-600 font-semibold w-full py-2 rounded text-center"
                >
                  Email Us
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-green-600 font-semibold w-full py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MailUsModal;
