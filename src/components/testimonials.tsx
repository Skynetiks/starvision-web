"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechGrowth Inc.",
    image: "/images/avatars/avatar-1.jpg",
    content:
      "CSG Advisory made expanding our tech business to Singapore incredibly smooth. Their expertise in international regulations saved us months of research and potential compliance issues.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder, EcoTrade Solutions",
    image: "/images/avatars/avatar-2.jpg",
    content:
      "Setting up our European operations would have been impossible without CSG Advisory's guidance. Their team handled everything from company formation to tax registration across multiple jurisdictions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: "Director, Global Ventures Ltd",
    image: "/images/avatars/avatar-3.jpg",
    content:
      "As a serial entrepreneur with businesses in three countries, I rely on CSG Advisory for all my international compliance needs. Their ongoing support ensures my companies remain in good standing worldwide.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="mt-12 relative max-w-6xl mx-auto">
      <div className="flex justify-center mb-8">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-rose-100 text-primary hover:bg-rose-200 mr-4"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-rose-100 text-primary hover:bg-rose-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <div
                  key={testimonial.id}
                  className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
