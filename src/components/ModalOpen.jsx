import React from "react";
import { motion, AnimatePresence } from "framer-motion";    

const ModalAddPaciente = ({ isOpen, onClose, children }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-11/12 max-w-2xl shadow-md p-6 rounded-md relative"
            >
              <button
                onClick={onClose}
                className="absolute top-1 right-1 text-gray-500 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };
  

export default ModalAddPaciente;
