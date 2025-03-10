"use client";
import React, { useEffect } from "react";
import { BadgeCheck, BookOpen, GraduationCap, Store, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav() {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: "/courses",
    },
    {
      id: 2,
      name: "Store",
      icon: Store,
      path: "/store",
    },
    {
      id: 3,
      name: "Membership",
      icon: BadgeCheck,
      path: "/membership",
    },
    {
      id: 4,
      name: "Be Instructor",
      icon: GraduationCap,
      path: "/beinstructor",
    },
    {
      id: 5,
      name: "Newsletter",
      icon: Mail,
      path: "/beinstructor",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image src="/logo.png" alt="logo" width={50} height={80} />
      <hr className="mt-7" />
      <div className="mt-8">
        {menu.map((item, index) => (
          <Link href={item.path}>
            <div
              className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200 ${
                path.includes(item.path) && "bg-primary text-white"
              }`}
            >
              <item.icon className="group-hover:animate-bounce" />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
