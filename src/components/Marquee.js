import React from "react";
import { motion } from "framer-motion";
import "./Marquee.css";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee" class="z-10 relative top-4">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="text-teal-200/25">
            2022 is here. 2022 is here. 2022 is here. 2022 is here. 2022 is
            here. 2022 is here. 2022 is here. 2022 is here.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
