import dynamic from "next/dynamic";

// react-player is a client-only library; SSR-ing it causes a hydration
// mismatch, so load it on the client only.
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function AboutSection() {
  return (
    <section className="max-w-4xl px-4 pt-20 mx-auto text-center rm sm:pt-10">
      <p className="text-[14px] text-[#1A1D2D] font-bold mb-1 tracking-widest uppercase">
        About Atlas
      </p>
      <h1 className="h1t">
        <span className="block mt-2 text-4xl font-bold text-gray-900">
          A Legacy of Engineering
        </span>
        <span className="block text-4xl font-bold text-gray-900">
          Excellence<span className="text-green-500">.</span>
        </span>
      </h1>

      <p className="mt-5 text-[#606370]">
        Our journey began in the 1980s in Mehsana, Gujarat, with a vision to
        build road construction machinery India could trust. From Ashirvad
        Equipments to Atlas Industries and Atlas Technologies, three generations
        have grown our family enterprise into an ISO-certified manufacturer
        exporting asphalt plants, concrete batching equipment, and civil
        construction machinery worldwide, blending traditional values with
        modern innovation.
      </p>

      <div className="relative w-full mt-8 overflow-hidden rounded-lg shadow-xl aspect-video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=yl64rOapw1I"
          playing={true}
          muted={true}
          loop={true}
          controls={false}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1, // minimal YouTube branding
                rel: 0, // no related videos
                showinfo: 0, // (legacy) no title info
                controls: 0, // hide controls
                fs: 0, // disable fullscreen button
                disablekb: 1, // disable keyboard shortcuts
              },
            },
          }}
        />
      </div>
    </section>
  );
}
