import { useEffect, useState } from "react";

const greetings = [
  "Hello", "नमस्ते", "Hola", "Bonjour", "こんにちは",
  "Ciao", "Olá", "안녕하세요", "Hallo", "مرحبا"
];

const Loader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 100); // show one greeting every 0.25s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-50">
      <h1 className="text-white text-4xl sm:text-6xl font-bold animate-fade">
        {greetings[index]}
      </h1>

      {/* Inline fade animation */}
      <style>
        {`
          @keyframes fade {
            0% { opacity: 0; transform: scale(0.95); }
            50% { opacity: 1; transform: scale(1.05); }
            100% { opacity: 0; transform: scale(1); }
          }
          .animate-fade {
            animation: fade 0.25s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
