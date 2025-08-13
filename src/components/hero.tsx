"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import GradientText from "./ui/gradient-text";
import { Button } from "./ui/button";
import AnimatedGradientButton from "./ui/gradient-button";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";

const GlobalHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    // Use requestAnimationFrame for smoother animation trigger
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    // Only generate random particles on the client after mount
    const generatedParticles = Array.from({ length: 15 }, (_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-rose-400 rounded-full opacity-20 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    ));
    setParticles(generatedParticles);
  }, []);

  // Memoize rotating text items
  const rotatingTextItems = useMemo(
    () => [
      "Worldwide Business",
      "International Expansion",
      "Worldwide Registration",
      "Cross-Border Growth",
    ],
    []
  );

  return (
    <>
      {/* Optimized CSS with GPU acceleration */}
      <style jsx>{`
        @keyframes text-slide {
          0%,
          20% {
            transform: translate3d(0, 0%, 0);
          }
          25%,
          45% {
            transform: translate3d(0, -25%, 0);
          }
          50%,
          70% {
            transform: translate3d(0, -50%, 0);
          }
          75%,
          95% {
            transform: translate3d(0, -75%, 0);
          }
          100% {
            transform: translate3d(0, -100%, 0);
          }
        }

        .animate-text-slide {
          animation: text-slide 12s infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .text-slide-container {
          position: relative;
          display: inline-block;
          vertical-align: top;
          overflow: hidden;
          transform: translateZ(0);
        }

        /* Optimize animations for better performance */
        .optimized-animation {
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        /* Reduce layout thrashing */
        .floating-element {
          position: absolute;
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>

      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-br relative overflow-hidden">
        {/* Optimized background elements with reduced complexity */}
        <div className="absolute inset-0">
          {particles}

          {/* Simplified floating orbs with transform3d */}
          <div
            className="floating-element top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-bounce"
            style={{
              animationDuration: "6s",
              transform: "translateZ(0)",
            }}
          />
          <div
            className="floating-element bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-bounce"
            style={{
              animationDuration: "8s",
              animationDelay: "2s",
              transform: "translateZ(0)",
            }}
          />
          <div
            className="floating-element top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full animate-bounce"
            style={{
              animationDuration: "7s",
              animationDelay: "1s",
              transform: "translateZ(0)",
            }}
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-items-center">
            {/* Left side - Optimized content animations */}
            <div
              className={`space-y-4 optimized-animation transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Animated badge with reduced delay */}
              <div
                className={`inline-flex items-center space-x-2 bg-rose-500/10 backdrop-blur-sm border border-rose-200 rounded-full px-4 py-2 text-logo-primary optimized-animation transition-all duration-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Trusted by Global Entrepreneurs
                </span>
              </div>

              {/* Optimized main heading */}
              <div className="space-y-2">
                <h1 className="text-3xl justify-start font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
                  Transform Your{" "}
                  <span
                    className="text-slide-container h-[1.2em] lg:h-[2em]"
                    // style={{ height: "1.2em" }}
                  >
                    <div className="animate-text-slide">
                      {rotatingTextItems.map((text, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                        >
                          <GradientText className="text-md">{text}</GradientText>
                        </div>
                      ))}
                    </div>
                  </span>
                  <br />
                  Vision Into Reality
                </h1>
              </div>

              {/* Optimized description with reduced delay */}
              <p
                className={`max-w-[600px] text-gray-500 md:text-xl optimized-animation transition-all duration-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                We simplify international business registration with expert
                consultation and comprehensive support for entrepreneurs and
                established companies.
              </p>

              {/* Optimized buttons with reduced delay */}
              <div
                className={`flex gap-4 optimized-animation transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <Button size="lg" className="rounded-full">
                  <Link href="/services">Know More</Link>
                </Button>

                <AnimatedGradientButton
                  className="rounded-full w-full md:w-auto max-w-none md:max-w-fit"
                  onClick={() => redirect("/contact")}
                >
                  <GradientText className="flex items-center">
                    Get Started
                    <ChevronRight className="!text-logo-blend size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </GradientText>
                </AnimatedGradientButton>
              </div>
            </div>

            {/* Right side - Optimized image section */}
            <div
              className={`relative h-[400px] w-full optimized-animation transition-all duration-800 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                {/* Optimized gradient background */}
                <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-gradient-to-r from-logo-primary to-logo-secondary rounded-2xl" />

                {/* Optimized image container */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative w-full max-w-2xl">
                    <div className="relative z-30 ml-12">
                      <Image
                        width={700}
                        height={420}
                        src="/images/team.webp"
                        alt="Business team collaboration"
                        className="w-full h-80 object-cover rounded-xl shadow-2xl border-4 border-white"
                        priority={true}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                    </div>
                  </div>
                </div>

                {/* Simplified floating shapes with reduced complexity */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="floating-element top-1/4 left-1/4 w-8 h-8 border-2 border-white/20 rounded-full animate-spin"
                    style={{
                      animationDuration: "10s",
                      transform: "translateZ(0)",
                    }}
                  />
                  <div
                    className="floating-element top-1/2 right-1/4 w-6 h-6 border-2 border-white/15 rounded-full animate-spin"
                    style={{
                      animationDuration: "15s",
                      animationDirection: "reverse",
                      transform: "translateZ(0)",
                    }}
                  />
                </div>

                {/* Simplified SVG overlay */}
                <div className="absolute inset-0 animate-pulse opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <circle
                      cx="200"
                      cy="200"
                      r="150"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalHeroSection;
