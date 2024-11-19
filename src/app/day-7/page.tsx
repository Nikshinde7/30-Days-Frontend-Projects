"use client"
import Image from "next/image"
import React, { useState } from "react"

export default function Page() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-full min-h-screen h-full bg-aircraft-white flex items-center justify-center font-manrope">
            <div className="bg-white flex flex-col max-w-[331px] rounded-lg">
                <Image src="/assets/drawers.jpg" alt="img" width={331} height={122} className="rounded-t-lg max-h-[203px] bg-contain object-cover" />

                <div className="flex flex-col justify-center">
                    <div className="flex flex-col gap-y-4 p-8">
                        <div className="text-rainmaker font-bold">
                            Shift the overall look and feel by adding these wonderful touches to furniture in your home
                        </div>
                        <div className="font-medium text-grey-blueberry text-[13.5px]">
                            Ever been in a room and felt like something was missing? Perhaps
                            it felt slightly bare and uninviting. I’ve got some simple tips
                            to help you make any room feel complete.
                        </div>
                    </div>


                    {
                        isActive ? (
                            <div className="flex px-8 py-4 justify-between !min-h-[72.5px] bg-rainmaker items-center rounded-b-lg">
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

                                <div className="bg-grey-blueberry p-2.5 rounded-full cursor-pointer"
                                    onClick={() => {
                                        setIsActive(!isActive)
                                    }}
                                >
                                    <Image src={"/svg/icon-share.svg"} alt="" width={16} height={16} className="brightness-[5]" />
                                </div>
                            </div>
                        ) : (
                            <div className="flex px-8 py-4 justify-between !min-h-[72.5px]"
                            >
                                <div className="flex">
                                    <Image src={'/assets/avatar-michelle.jpg'} width={40} height={40} alt="avtarimg" className="rounded-full max-w-[40px] max-h-[40px]" />
                                    <div className="flex flex-col justify-between ml-4">
                                        <p className="text-[13.5px] text-rainmaker font-bold">
                                            Michelle Appleton
                                        </p>
                                        <p className="text-sterling-silver font-medium text-[13.5px]">
                                            28 Jun 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-aircraft-white p-2.5 rounded-full cursor-pointer"
                                    onClick={() => {
                                        setIsActive(!isActive)
                                    }}
                                >
                                    <Image src={"/svg/icon-share.svg"} alt="" width={16} height={16} className="" />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}