"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function VideoPlayer({
  thumbnail,
  videoUrl,
  isYoutube = true,
  title,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rm xl:h-[650px] mx-auto overflow-hidden aspect-video"
    >
      {isPlaying ? (
        isYoutube ? (
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title="Product Video"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="object-cover w-full h-full"
          />
        )
      ) : (
        <div
          className="relative w-full h-full bg-center bg-cover cursor-pointer group"
          style={{ backgroundImage: `url(${thumbnail})` }}
          onClick={() => setIsPlaying(true)}
        >
          {/* Background image zoom on hover */}
          <div
            className="absolute inset-0 transition-transform duration-500 bg-center bg-cover group-hover:scale-105"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white transition-colors duration-300 bg-black/50 group-hover:bg-black/40">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2 font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] px-4"
            >
              {title}
            </motion.h2>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.2 }}
              src="/images/comman/play.png"
              alt=""
              className="transition-transform duration-300 h-11 sm:h-14 md:h-16 lg:h-20"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
