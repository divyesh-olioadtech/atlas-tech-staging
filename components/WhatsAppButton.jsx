export default function WhatsAppButton() {
  const phoneNumber = "919879810565";
  const message = "Hello, I would like to know more about your products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-8 h-8"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.052 31.2l6.012-1.97A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.614c-.396 1.116-1.97 2.042-3.2 2.312-.84.18-1.938.324-5.632-1.21-4.726-1.962-7.77-6.756-8.006-7.07-.228-.314-1.9-2.53-1.9-4.826s1.2-3.424 1.628-3.892c.396-.432 1.05-.648 1.678-.648.202 0 .384.02.548.036.428.018.644.042.926.72.354.852 1.216 2.964 1.32 3.18.108.216.216.504.072.792-.136.294-.252.474-.468.732-.216.258-.426.456-.642.732-.198.24-.42.498-.174.93.246.426 1.092 1.8 2.346 2.916 1.614 1.434 2.974 1.884 3.396 2.088.318.156.696.132.948-.132.318-.336.714-.894 1.116-1.446.288-.396.648-.444.996-.3.354.138 2.244 1.058 2.628 1.252.384.198.642.294.738.456.09.162.09.93-.306 2.046z" />
      </svg>
    </a>
  );
}
