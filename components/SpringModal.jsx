import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import Button from "./Button";
import { Youtube } from "lucide-react";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        handleClick={() => setIsOpen(true)}
        type="button"
        title="How we work?"
        icon="/play.svg"
        variant="btn_white_text"
      />
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
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
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-green-600 grid place-items-center mx-auto">
                <Youtube />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Get to know us better!!
              </h3>

              {/* Responsive Video Container */}
              <div className="relative w-full overflow-hidden pb-[56.25%]">
                {" "}
                {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/-rL-HOqHhfE?si=czZuqm5eZqSoHnwr"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:bg-neutral-200 transition-opacity text-green-600 font-semibold w-full py-2 rounded"
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

export default ExampleWrapper;
