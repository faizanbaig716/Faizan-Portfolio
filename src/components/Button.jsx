import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants";

const Button = ({ children, variant = "primary", className = "", href, isWhatsApp, onClick, type = "button" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium rounded-full transition-colors duration-300";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-[#00b8e6]",
    secondary: "bg-transparent border border-white/20 text-textMain hover:bg-white/5",
    success: "bg-success text-background hover:bg-[#00e67a]"
  };

  const link = isWhatsApp ? `https://wa.me/${PERSONAL_INFO.whatsapp}` : href;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return <button type={type} onClick={onClick} className="inline-block">{content}</button>;
};

export default Button;
