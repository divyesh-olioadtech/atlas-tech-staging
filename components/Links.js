import Link from "next/link";

const Links = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`text-[#8FD254]   hover:text-green-800 font-bold transition-colors duration-300 ${className}`}
    >
      {" "}
      {children}{" "}
    </Link>
  );
};

export default Links;
