import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials">
      {testimonialsData.length > 0 && (
        <div className="left-t">
          <span>Testimonials</span>
          <span className="stroke-text">what they</span>
          <span>say about us</span>
          {testimonialsData[selected] && (
            <>
              <motion.span
              key={selected}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={transition}
              >{testimonialsData[selected].review}</motion.span>
              <span>
                <span style={{ color: "var(--orange)" }}>
                  {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].position}
              </span>
            </>
          )}
        </div>
      )}

      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          transition={{ ...transition, duration: 3 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          transition={{ ...transition, duration: 3 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              setSelected((prev) => (prev === 0 ? tLength - 1 : prev - 1));
            }}
          />
          <img
            src={RightArrow}
            alt=""
            onClick={() => {
              setSelected((prev) => (prev === tLength - 1 ? 0 : prev + 1));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
