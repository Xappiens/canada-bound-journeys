import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HighlightBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-8 right-8 z-30 w-full max-w-sm px-4"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-4 border border-white/20"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(255, 255, 255, 0.4)",
              "0 0 0 10px rgba(255, 255, 255, 0)",
              "0 0 0 0 rgba(255, 255, 255, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="relative"
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-semibold text-red-600 mb-1">¡NUEVO GRUPO CONFIRMADO!</span>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Septiembre 19 - 27, 2024
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Únete a nuestro próximo grupo y vive la experiencia de British Columbia
            </p>
            <div className="bg-red-50 text-red-600 text-sm font-semibold px-3 py-1 rounded-full mb-2">
              ¡Solo quedan 4 plazas!
            </div>
            <Link
              to="/itinerarios"
              className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Ver Itinerario
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HighlightBox; 