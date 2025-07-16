"use client";

import { motion } from "framer-motion";
import { MessageSquare, LineChart, FileCheck, BarChart } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Initial Consultation",
    description:
      "We discuss your business goals, requirements, and help you select the optimal jurisdiction for registration.",
    icon: MessageSquare,
    color: "bg-gradient",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "Analysis & Strategy",
    description:
      "Our experts analyze your business model and develop a customized strategy for efficient global expansion.",
    icon: LineChart,
    color: "bg-gradient",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "Implementation",
    description:
      "We handle the complete registration process, including document preparation and regulatory compliance.",
    icon: FileCheck,
    color: "bg-gradient",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "Results & Growth",
    description:
      "Monitor the progress of your international business and receive ongoing compliance support for sustainable growth.",
    icon: BarChart,
    color: "bg-gradient",
    textColor: "text-white",
  },
];

export default function ProcessSteps() {
  return (
    <div className="mt-12 space-y-12 md:space-y-16 max-w-4xl mx-auto">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-12 items-start md:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className={`${step.color} rounded-full p-4 mb-2`}>
              <step.icon className={`h-8 w-8 ${step.textColor}`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{step.id}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
