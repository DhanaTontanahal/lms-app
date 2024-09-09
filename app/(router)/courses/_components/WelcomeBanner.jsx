import Image from "next/image";
import React from "react";

function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src="/banner.png" width={100} height={100} />

      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to <span className="text-primary">Maste Learn </span>Academy
        </h2>
        <h2 className="text-gray-400">
          Explore , Learn and Build All Real Life Projects
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
