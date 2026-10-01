"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

// STYLE 1: Text Shadow Style (for images) - With Color Props
const BreadcrumbTextShadow = ({
  homeLabel = "Home",
  separator = <ChevronRight className="w-4 h-4" />,
  containerClasses = "",
  textColor = "text-white/90", // Default white for images
  textHoverColor = "hover:text-white",
  activeColor = "text-white",
  separatorColor = "text-white/80",
  useTextShadow = true, // Enable/disable text shadow
}) => {
  const pathname = usePathname();

  const formatSegment = (segment) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter((segment) => segment !== "");
    const breadcrumbs = [{ label: homeLabel, href: "/", isHome: true }];

    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        label: formatSegment(segment),
        href: currentPath,
        isHome: false,
        isLast: index === segments.length - 1,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (pathname === "/") return null;

  const textShadowStyle = useTextShadow
    ? { textShadow: "0 2px 4px rgba(0,0,0,0.5)" }
    : {};

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-xs sm:text-sm ${containerClasses}`}
    >
      <ol className="flex flex-wrap items-center gap-0.5 sm:gap-1">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && (
              <span
                className={`mx-1 sm:mx-2 ${separatorColor}`}
                style={textShadowStyle}
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            )}
            {crumb.isLast ? (
              <span
                className={`font-semibold ${activeColor}`}
                aria-current="page"
                style={textShadowStyle}
              >
                {crumb.isHome ? (
                  <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  crumb.label
                )}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className={`transition-all duration-200 ${textColor} ${textHoverColor} hover:underline`}
                style={textShadowStyle}
              >
                {crumb.isHome ? (
                  <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  crumb.label
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// STYLE 2: Semi-Transparent Background Style - With Color Props
const BreadcrumbWithBg = ({
  homeLabel = "Home",
  separator = <ChevronRight className="w-4 h-4" />,
  containerClasses = "",
  textColor = "text-white/90",
  textHoverColor = "hover:text-white",
  activeColor = "text-white",
  separatorColor = "text-white/70",
  bgColor = "bg-black/30", // Background color
  borderColor = "", // Optional border
}) => {
  const pathname = usePathname();

  const formatSegment = (segment) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter((segment) => segment !== "");
    const breadcrumbs = [{ label: homeLabel, href: "/", isHome: true }];

    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        label: formatSegment(segment),
        href: currentPath,
        isHome: false,
        isLast: index === segments.length - 1,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (pathname === "/") return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-xs sm:text-sm ${bgColor} backdrop-blur-sm px-2 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg inline-flex ${borderColor} ${containerClasses}`}
    >
      <ol className="flex flex-wrap items-center gap-0.5 sm:gap-1">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && (
              <span className={`mx-1 sm:mx-2 ${separatorColor}`}>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            )}
            {crumb.isLast ? (
              <span
                className={`font-semibold ${activeColor}`}
                aria-current="page"
              >
                {crumb.isHome ? (
                  <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  crumb.label
                )}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className={`transition-all duration-200 ${textColor} ${textHoverColor} hover:underline`}
              >
                {crumb.isHome ? (
                  <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  crumb.label
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// STYLE 3: Pill/Badge Style - With Color Props
const BreadcrumbPill = ({
  homeLabel = "Home",
  separator = <ChevronRight className="w-3 h-3" />,
  containerClasses = "",
  linkBgColor = "bg-white/20",
  linkHoverBgColor = "hover:bg-white/30",
  linkTextColor = "text-white",
  activeBgColor = "bg-white",
  activeTextColor = "text-gray-900",
  separatorColor = "text-white/60",
}) => {
  const pathname = usePathname();

  const formatSegment = (segment) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter((segment) => segment !== "");
    const breadcrumbs = [{ label: homeLabel, href: "/", isHome: true }];

    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        label: formatSegment(segment),
        href: currentPath,
        isHome: false,
        isLast: index === segments.length - 1,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (pathname === "/") return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-[10px] sm:text-xs ${containerClasses}`}
    >
      <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-1 sm:gap-2">
            {index > 0 && (
              <span className={separatorColor}>
                <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </span>
            )}
            {crumb.isLast ? (
              <span
                className={`px-2 py-0.5 sm:px-3 sm:py-1 font-medium ${activeBgColor} ${activeTextColor} rounded-full`}
                aria-current="page"
              >
                {crumb.isHome ? (
                  <Home className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                ) : (
                  crumb.label
                )}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className={`px-2 py-0.5 sm:px-3 sm:py-1 ${linkTextColor} transition-all duration-200 rounded-full ${linkBgColor} ${linkHoverBgColor}`}
              >
                {crumb.isHome ? (
                  <Home className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                ) : (
                  crumb.label
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Export all styles
export { BreadcrumbTextShadow, BreadcrumbWithBg, BreadcrumbPill };
export default BreadcrumbTextShadow;
