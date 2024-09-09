"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SideBanners() {
  const [sideBanners, setSideBanners] = useState([]);
  useEffect(() => {
    getSideBanners();

    return () => {};
  }, []);

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((resp) => {
      setSideBanners(resp.sideBanners);
    });
  };
  return (
    <div>
      {sideBanners.map((item, index) => (
        <div>
          <Image
            onClick={() => window.open(item.url)}
            src={item.banner.url}
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}

export default SideBanners;
