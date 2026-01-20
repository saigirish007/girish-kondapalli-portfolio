import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";

export default function App() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16">
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="/profile.jpg"
          alt="Girish Kondapalli"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />

        <div className="max-w-xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Girish Kondapalli
          </motion.h1>

          <p className="mt-3 text-xl text-gray-600">
            Digital Marketing Executive | Performance, Content & Growth
          </p>

          <p className="mt-4 text-gray-500">
            Data-driven marketer with hands-on experience in SEO, PPC, social
            media, and community growth. Currently pursuing an MBA in Germany
            and open to full-time opportunities.
          </p>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="mailto:saigirish502@gmail.com"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg"
            >
              <Mail size={18} /> Contact
            </a>

            <a
              href="https://www.linkedin.com/in/kondapalli-girish-33856017b"
              target="_blank"
              className="flex items-center gap-2 border px-4 py-2 rounded-lg"
            >
              <Linkedin size={18} /> LinkedIn
            </a>

            <a
              href="#"
              className="flex items-center gap-2 border px-4 py-2 rounded-lg"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
