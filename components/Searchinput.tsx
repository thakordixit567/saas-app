"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Input } from "./ui/input";

const Searchinput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") || "";

  const [searchQuery, setsearchQuery] = useState("");
  return (
    <div className=" relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit ">
      <Image src='/icons/search.svg' alt='search' width={15} height={15} />
      <Input 
      placeholder="Search companions..."
      className="outline-none"
      value={searchQuery}
      onChange={(e) => setsearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchinput;
