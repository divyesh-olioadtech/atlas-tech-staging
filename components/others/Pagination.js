import React from "react";
import { useRouter } from "next/router";

const Pagination = ({ currentPage, totalPages }) => {
  const navigate = useRouter().push;

  // Hide pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  const pages = [];

  // Logic for pagination (showing a limited range of pages with ellipses)
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const onPageChange = (page) => {
    navigate(`/blog/page/${page}`);
  };

  return (
    <div className="flex items-center mb-10 justify-center mt-10 text-[16px] plus space-x-2">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="w-11 h-11 flex cursor-pointer items-center justify-center bg-[#343745] rounded-[10px] shadow-md hover:bg-[#8FD254] transition duration-200"
        >
          <img src="/images/comman/backword.png" alt="Previous" />
        </button>
      )}

      {/* Pages within range */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 ${
            page === currentPage
              ? "bg-[#8FD254] text-[#121C17] border-[#121C17]"
              : "bg-gray-200 border-gray-200"
          } rounded-md hover:bg-gray-300 cursor-pointer transition duration-200 border`}
        >
          {page}
        </button>
      ))}

      {/* Show Ellipsis and Last Page button if applicable */}
      {endPage < totalPages && (
        <>
          <span className="">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 transition duration-200 bg-gray-200 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Show Next button if applicable */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="w-11 h-11 cursor-pointer flex items-center justify-center bg-[#343745] rounded-[10px] shadow-md hover:bg-[#8FD254] transition duration-200"
        >
          <img src="/images/comman/forward.png" alt="Next" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
