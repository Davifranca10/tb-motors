import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Machine = () => {
  const sectionRef = useRef(null);
  const particlesRef = useRef(null);

  useGSAP(() => {
    const particles = particlesRef.current.querySelectorAll(".particle");

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to(particles, {
          backgroundColor: "#006dff", // azul ao entrar
          duration: 1.5,
          ease: "power2.out",
        }),
      onLeaveBack: () =>
        gsap.to(particles, {
          backgroundColor: "#e48c08", 
          duration: 1.5,
          ease: "power2.out",
        }),
    });
  }, []);

  return (
    <div
      id="porshe"
      ref={sectionRef}
      className="relative w-full overflow-hidden p-50"
    >
      {/* partículas */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-[#e48c08] rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* textos */}
      <h2 className="text-[8em] uppercase font-poppins font-bold tracking-tight leading-none relative z-10">
        Quando potência e <br /> desejo se <br /> encontram em{" "}
        <span className="text-blue-700 tracking-widest">{">>>"}</span>
      </h2>

      <h1 className="uppercase font-bebas font-extrabold text-[#006dff] text-[9em] text-center pt-20 relative z-10">
        Porshe
        <span className="bg-gradient-to-r text-[1.5em] from-[#003172] via-[#8ab4ec] to-[#003780] bg-clip-text text-transparent">
          {" "}
          718
        </span>{" "}
        Caymann
      </h1>

      <img
        src="images/porshe718.png"
        alt="porshe"
        className="relative z-10 mx-auto mt-10"
      />
    </div>
  );
};

export default Machine;