import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion"; // ✅ Make sure you're importing from framer-motion

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  // ✅ Variants for animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 bg-blue-600 text-white">
        Our Plans
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the plans
      </h1>

      {/* ✅ Motion container for stagger */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {plans.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="bg-white drop-shadow-sm border-0 rounded-lg py-12 px-8 text-gray-600 hover:scale-105 hover:bg-gradient-to-b from-teal-100 to-white transition-all duration-500"
          >
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">
                ₹{item.price} credits
              </span>{" "}
              / {item.credits}
            </p>
            <p className="mt-5 text-zinc-700 font-medium pl-1">
              What includes :
            </p>

            {/* ✅ Benefits list with tick icons */}
            <ul className="mt-6 space-y-1 text-sm">
              {item.benefits.map((benefit, i) => (
                <li className="text-gray-500 flex items-start gap-2" key={i}>
                  <img
                    src={assets.tick}
                    alt="tick"
                    className="w-4 h-4 mt-1"
                  />
                  <span>{benefit.replace("✅ ", "")}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52">
              {user ? "Purchase" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BuyCredit;
