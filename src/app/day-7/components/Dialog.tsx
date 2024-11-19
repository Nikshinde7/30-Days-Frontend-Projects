import Image from "next/image"
import React from "react"

type DialogProps = {
    onClick: (e: any) => void;
}

export const Dialog = ({
    onClick
}: DialogProps) => {
    return (
        <div className="flex px-8 py-4 justify-between !min-h-[72.5px] md:!min-h-[45px] z-10 bg-rainmaker items-center rounded-b-lg md:rounded-lg">
            <div className="flex gap-x-4 items-center">
                <div className="font-medium uppercase tracking-[0.5rem] text-xs text-sterling-silver mt-0.5">
                    Share
                </div>
                <div className="flex gap-x-4">
                    <Image src={'/svg/icon-facebook.svg'} width={20} height={20} alt="avtarimg" className="" />
                    <Image src={'/svg/icon-twitter.svg'} width={20} height={20} alt="avtarimg" className="" />
                    <Image src={'/svg/icon-pinterest.svg'} width={20} height={20} alt="avtarimg" className="" />
                </div>
            </div>

            <div className="bg-grey-blueberry p-2.5 rounded-full cursor-pointer md:hidden"
                onClick={onClick}
            >
                <Image src={"/svg/icon-share.svg"} alt="" width={16} height={16} className="brightness-[5]" />
            </div>
        </div>
    )
}