"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { motion } from "motion/react";
import { TextAnimate } from "../animated/Text_Animate";

const PlayButton = () => (
  <span className="flex items-center justify-center transition-transform duration-300 w-14 h-14 md:w-16 md:h-16 group-hover:scale-110">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
      aria-hidden="true"
    >
      <path d="M24 17L49 32L24 47V17Z" fill="#FFFFFF" />
    </svg>
  </span>
);

const Youtube_Slider = ({ title = "Watch Real Installations" }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Updated slides array with custom thumbnails
  // title values are the videos' real YouTube titles (previously fetched at
  // runtime via the oEmbed API; hardcoded here to avoid the extra network requests).
  const slides = [
    {
      id: "AhBkEv9qE50",
      thumbnail: "/images/thumbnails/1.jpg",
      title: "Bitumen pressure distributor export from India",
    },
    {
      id: "_92cgEkx7v0",
      thumbnail: "/images/thumbnails/2.jpg",
      title: "Behind the Scenes: Dispatching a 60-90 TPH Asphalt Drum Mix Plant!",
    },
    {
      id: "Gtb16Dqpuak",
      thumbnail: "/images/thumbnails/3.jpg",
      title: "What is concrete batching plant | Atlas Technologies Pvt. Ltd.",
    },
    {
      id: "60cPhs0XfoE",
      thumbnail: "/images/thumbnails/4.jpg",
      title: "60-90 tph mobile drum mixing plant for Cameroon",
    },
    {
      id: "Re6bT_uY5KU",
      thumbnail: "/images/thumbnails/5.jpg",
      title: "Asphalt batching plant 3D video by Atlas Technologies Pvt. Ltd., India",
    },
    {
      id: "RBx9xiXvzck",
      thumbnail: "/images/thumbnails/6.jpg",
      title: "Quality asphalt production | Asphalt Batch Mix Plant | 120 tph #AsphaltPlant",
    },
    {
      id: "Mdabe5Itw9s",
      thumbnail: "/images/thumbnails/7.jpg",
      title: "160 tph asphalt batch mix plant for Philippines",
    },
  ];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000 })],
  );

  // Static title lookup (title data lives on each slide; previously fetched
  // at runtime via the YouTube oEmbed API).
  const titles = Object.fromEntries(
    slides.map((slide) => [slide.id, slide.title || null]),
  );

  const openVideo = useCallback((videoId) => {
    setSelectedVideo(videoId);
  }, []);

  const closePopup = () => {
    setSelectedVideo(null);
  };

  const youtubeChannel = "https://www.youtube.com/@AtlasTechnologiesPvt.Ltd.";

  return (
    <div
      className="py-12 overflow-hidden rm sm:py-14 md:py-16 lg:py-20"
      style={{
        backgroundColor: "#E7F1E9",
        backgroundImage: `url(/images/comman/bg1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between px-[5%] mb-10 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-2.5">
          <p className="text-center pitag sm:text-left">MORE THAN MACHINES</p>
          <TextAnimate
            animation="blurIn"
            by="word"
            delay={0}
            duration={0.4}
            className="max-w-3xl leading-[120%] text-center h2t sm:text-left"
            once={true}
          >
            {title}
          </TextAnimate>
        </div>

        <div className="flex justify-center sm:justify-end shrink-0">
          <Link href={youtubeChannel} target="_blank">
            <button className="flex items-center gap-2.5 rounded-[12px] bg-[#8FD254] border border-[#8FD254] px-[21px] py-[13px] font-semibold text-[16px] text-[#272D16] transition-colors hover:bg-[#7cbf43]">
              <img
                src="/images/comman/youtube.png"
                alt=""
                className="w-[26px] h-[26px]"
              />
              Visit Our YouTube Channel
            </button>
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-[1700px]"
      >
        {/* Fixed: Added embla__viewport class */}
        <div
          className="w-full mx-auto overflow-hidden embla__viewport"
          ref={emblaRef}
        >
          <div className="flex items-stretch embla__container will-change-transform">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-[85%] sm:w-[60%] md:w-[46%] lg:w-[40%] px-2 lg:px-2.5 embla__slide shrink-0"
                onClick={() => openVideo(slide.id)}
              >
                <div className="relative w-full aspect-video rounded-[12px] overflow-hidden group cursor-pointer shadow-[0_10px_30px_rgba(26,29,45,0.12)]">
                  <Image
                    src={slide.thumbnail}
                    alt=""
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 68vw, 62vw"
                  />
                  {/* Top gradient for depth */}
                  <div className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b from-black/45 to-transparent" />
                  {/* Hover dim */}
                  <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/10" />
                  {/* Video title overlay (white, top) */}
                  {titles[slide.id] && (
                    <div className="absolute inset-x-0 top-0 flex items-center gap-2.5 px-4 pt-4 pointer-events-none">
                      <img
                        src="/images/comman/youtube.png"
                        alt=""
                        className="w-5 h-5 shrink-0"
                      />
                      <p className="text-white text-[15px] md:text-[16px] font-medium leading-snug line-clamp-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                        {titles[slide.id]}
                      </p>
                    </div>
                  )}
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayButton />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Popup */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={closePopup}
          >
            <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
              <button
                className="absolute z-10 text-2xl font-bold text-white top-4 right-4"
                onClick={closePopup}
              >
                ✕
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Youtube_Slider;
