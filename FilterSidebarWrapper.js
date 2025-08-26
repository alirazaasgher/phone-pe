"use client";
import FilterSidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";

export default function FilterSidebarWrapper() {
  const pathname = usePathname();
  const showSidebar = shouldShowSidebar(pathname);

  return showSidebar ? <FilterSidebar /> : null;
}

function shouldShowSidebar(pathname) {
  if (!pathname) return false;
  if (pathname === "/") return true; // homepage shows sidebar
  if (pathname.startsWith("/mobiles")) return true; // category pages show sidebar
  return false; // hide sidebar everywhere else (like `/apple-iphone-15-pro-max`)
}