"use client"
import Image from "next/image"
import React, { useState } from "react"
import { Dialog } from "./components/Dialog";

export default function Page() {

    const [isActive, setIsActive] = useState(false);

    const handleOnclick = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="w-full min-h-screen h-full bg-aircraft-white flex items-center justify-center font-manrope">
            <div className="bg-white flex flex-col md:flex-row max-w-[331px] md:max-w-[730px] rounded-lg">
                <Image src="/assets/drawers.jpg" alt="img" width={331} height={122} className="rounded-t-lg md:rounded-none md:rounded-l-lg max-h-[203px] md:max-h-[331px] md:min-w-[310px] bg-contain object-cover object-left" />

                <div className="flex flex-col justify-center">
                    <div className="flex flex-col gap-y-4 p-8 md:pb-0">
                        <div className="text-rainmaker font-bold md:text-xl">
                            Shift the overall look and feel by adding these wonderful touches to furniture in your home
                        </div>
                        <div className="font-medium text-grey-blueberry text-[13.5px]">
                            Ever been in a room and felt like something was missing? Perhaps
                            it felt slightly bare and uninviting. I’ve got some simple tips
                            to help you make any room feel complete.
                        </div>
                    </div>


                    {/* Mobile Share */}
                    {
                        isActive ? (
                            <div className="relative md:hidden">
                                <Dialog onClick={handleOnclick} />
                            </div>
                        ) : (
                            <div className="flex px-8 py-4 justify-between !min-h-[72.5px] md:hidden"
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
                                <div className="bg-aircraft-white p-2.5 md:flex md:items-center md:justify-center md:size-8 md:p-0 rounded-full cursor-pointer"
                                    onClick={handleOnclick}
                                >
                                    <Image src={"/svg/icon-share.svg"} alt="" width={16} height={16} className="md:min-w-[14px] md:min-h-[14px]" />
                                </div>
                            </div>
                        )
                    }

                    {/* Desktop Share */}
                    <div className="sm:flex px-8 py-8 justify-between !min-h-[72.5px] hidden"
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
                        <div className={`bg-aircraft-white p-2.5 md:flex md:items-center md:justify-center md:size-8 md:p-0 rounded-full cursor-pointer ${isActive && '!bg-grey-blueberry'}`}
                            onClick={handleOnclick}
                        >
                            {
                                isActive && (
                                    <div className="absolute mb-[135px]">
                                        <Dialog onClick={handleOnclick} />
                                        <div className="border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-rainmaker size-0 -mt-1 -z-10 ml-[42%] rounded-full">
                                        </div>
                                    </div>
                                )
                            }

                            <Image src={"/svg/icon-share.svg"} alt="" width={16} height={16} className={`md:min-w-[14px] md:min-h-[14px] ${isActive && 'brightness-[5]'}`} />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}