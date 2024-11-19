import { TLink } from "../types";
import Link from "next/link";
import React from "react";

export const SocialLink = (LinkItem: TLink) => {
    return (
        <Link href={LinkItem.url} className="bg-[#333333] rounded-lg h-14 w-full flex items-center justify-center text-lg text-white hover:text-black font-bold hover:bg-[#b9ed32]" id={LinkItem.label}>
            {LinkItem.label}
        </Link>
    )
}