import { useRouter } from "next/router";
import BreadcrumbTextShadow from "../Breadcrumb";
export default function Blog_heading({ title, date }) {
  const router = useRouter();
  return (
    <div className="mt-28">
      <div className="mb-5">
        <BreadcrumbTextShadow
          textColor="text-gray-700"
          textHoverColor="hover:text-gray-900"
          activeColor="text-gray-900"
          separatorColor="text-gray-400"
          useTextShadow={false}
        />
      </div>
      {/* <button
        onClick={() => router.back()}
        className="flex cursor-pointer justify-center items-center  gap-1 text-[16px] text-[#8FD254]"
      >
        <img src="/images/comman/back.png" alt="" className="pr-1 " /> Back
      </button> */}
      <h1 className="">{title}</h1>
      {/* <p className="">{date}</p>{" "} */}
      <p className="text-[#636B7E] mt-2 mb-1 font-semibold">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </p>
    </div>
  );
}
