import React from "react";

const MapIframe = () => {
  return (
    <div className="bg-white ">
      <div className="w-full mx-auto custom-1800">
        <div className="w-full h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden border border-gray-300 shadow-lg ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117087.39014691269!2d72.2572731971741!3d23.497195929736595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c3f675070d155%3A0xdac6c768265a8efd!2sAtlas%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743765915588!5m2!1sen!2sin"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapIframe;
