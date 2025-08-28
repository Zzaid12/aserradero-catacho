"use client";

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function FloatingWhatsApp() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href="https://wa.me/34927530602"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-16 h-16 p-0 flex items-center justify-center"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={40}
            height={40}
            className="w-10 h-10"
            priority
          />
        </Button>
      </a>
    </motion.div>
  )
} 