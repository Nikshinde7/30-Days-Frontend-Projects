import Image from "next/image";
import { TLink } from "./types";
import { SocialLink } from "./components/SocialLink";


const links: TLink[] = [
    {
        label: "Github",
        url: "https://github.com/Nikshinde7"
    },
    {
        label: "Frontend Mentor",
        url: "https://www.frontendmentor.io/profile/Nikshinde7"
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhil-shinde-a505a8184/"
    },
    {
        label: "Twitter",
        url: "https://x.com/Nik_shinde7"
    },
    {
        label: "Instagram",
        url: "https://www.instagram.com/is_it_playdead/"
    }
]

export default function Page() {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-[#141414] font-inter">
            <div className="p-10 bg-[#1f1f1f] h-[767px] w-[482px] rounded-2xl flex flex-col">
                <div className=" w-full flex justify-center">
                    <Image src="/assets/avatar-jessica.jpeg" alt="img" width={112} height={112} className="rounded-full m-3" />
                </div>
                <div className="flex flex-col p-6 gap-y-4 items-center">
                    <div className="text-3xl text-center font-semibold">
                        Jessica Randall
                    </div>
                    <div className="text-[#bfde5c] text-lg font-bold">
                        London, United Kingdom
                    </div>
                </div>

                <div className="flex flex-col gap-y-5">
                    <div className="text-[#b0b0b0] text-lg text-center">
                        "Front-end developer and avid reader."
                    </div>
                    {
                        links && links.map((link) => {
                            return <SocialLink {...link} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}