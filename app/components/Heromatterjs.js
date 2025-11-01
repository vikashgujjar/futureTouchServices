"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "Mobile App Development",
  "Web Development",
  "Backend Development",
  "DevOps",
  "Data Science",
  "Frontend Development",
  "Artificial Intelligence",
  "Digital Marketing",
  "PHP Laravel",
  "Shopify Development",
  "React.js Development",
  "Machine Learning",
  "Node Js Development",
  "E-commerce Development",
];

const BOX_WIDTH = 270; // estimated pill width
const BOX_HEIGHT = 90; // estimated pill height

const Heromatterjs = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);

      // initial random drop positions
      setPositions(
        skills.map(() => ({
          x: Math.random() * (window.innerWidth - BOX_WIDTH),
          y: Math.random() * (window.innerHeight - BOX_HEIGHT),
        }))
      );
    }
  }, []);

  const handleDrag = (index, event, info) => {
    const newPositions = [...positions];
    newPositions[index] = {
      x: Math.min(
        Math.max(info.point.x - BOX_WIDTH / 2, 0),
        screenWidth - BOX_WIDTH
      ),
      y: Math.min(
        Math.max(info.point.y - BOX_HEIGHT / 2, 0),
        screenHeight - BOX_HEIGHT
      ),
    };

    // check collisions
    newPositions.forEach((pos, i) => {
      if (i !== index) {
        const dx = newPositions[index].x - pos.x;
        const dy = newPositions[index].y - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < BOX_WIDTH * 0.8) {
          // push only left/right (X-axis)
          if (dx > 0) {
            // dragged box is to the right → push other left
            newPositions[i].x = Math.max(pos.x - 20, 0);
          } else {
            // dragged box is to the left → push other right
            newPositions[i].x = Math.min(pos.x + 20, screenWidth - BOX_WIDTH);
          }
        }
      }
    });

    setPositions(newPositions);
  };

  return (
    <section className="mt-5 px-10 max-md:hidden choose-background">
     <div className='content text-center'>

        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-3 font-bold my-5">
          <span
            className=" text-4xl mb-5 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest "
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Grow Your Business <br />
          </span>
          With Our
          <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text ml-2">
            Expertise
          </span>
        </h3>

      </div>

    <div className="relative w-full h-[50vh] overflow-hidden ">
      {positions.length > 0 &&
        skills.map((skill, i) => (
          <motion.div
            key={i}
            className="absolute w-80 text-center py-3 text-base rounded-full border-2 border-teal-400 text-[#6248f9] font-bold bg-white/80 backdrop-blur-sm cursor-grab active:cursor-grabbing shadow-md"
            initial={{ y: -100, opacity: 0 }}
            animate={{
              x: positions[i].x,
              y: positions[i].y,
              opacity: 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            drag
            dragMomentum={false}
            onDrag={(e, info) => handleDrag(i, e, info)}
            whileTap={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
    </div>
    </section>
  );
};

export default Heromatterjs;
