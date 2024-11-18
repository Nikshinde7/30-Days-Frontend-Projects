"use client"
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { DATA } from "./data"
import { checkPair, shuffle } from "./helpers";


export default function Page() {

    const listOfCountries = Object.keys(DATA);
    const listOfCapitals = Object.values(DATA);

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // A function to randomize the Array of Capitals and Countries
    const shuffledList = shuffle([...listOfCountries, ...listOfCapitals])

    const [renderedList, setRenderedList] = useState(shuffledList)

    const [activeEl, setActiveEl] = useState<string[]>([]);

    const [bgColor, setBgColor] = useState<string>('');

    useEffect(() => {
        if (activeEl.length === 2) {
            const result = checkPair(activeEl, listOfCapitals, listOfCountries);

            if (result) {
                setBgColor('!bg-green-600');
                const newRenderedList = renderedList.filter((el) => !activeEl.includes(el));
                setTimeout(() => {
                    setBgColor('')
                    setRenderedList(newRenderedList)
                    setActiveEl([])
                }, 1000);
            } else {
                setBgColor('!bg-red-500')
                setTimeout(() => {
                    setBgColor('')
                    setActiveEl([]);
                }, 1000);
            }
        }

    }, [activeEl])

    return (
        <>
            {isClient && (
                <div className="bg-stone-50 min-h-screen flex h-full w-full items-start justify-center py-10">
                    {
                        renderedList.length === 0 ? (
                            <div className="text-5xl mt-20 text-center gap-y-4 flex flex-col font-youngSerif text-stone-600">
                                Congratulations!
                                <div>
                                    You've completed this game!
                                </div>
                            </div>
                        ) : (
                            <div className="w-full flex flex-col mt-10 max-w-3xl">
                                <div className="text-center text-black text-3xl font-youngSerif capitalize">
                                    Match the capitals and countries!
                                </div>
                                <div className="flex flex-wrap gap-6 mt-20 justify-center">
                                    {
                                        renderedList && renderedList.map((el: string, index: number) => {
                                            return (
                                                <Card key={index} label={el} bgColor={bgColor} isActive={activeEl.find((innerEl) => innerEl === el)} onCardClick={(e) => {
                                                    if (activeEl.length === 2)
                                                        return ''
                                                    else {
                                                        setBgColor('!bg-blue-500');
                                                        const activeElements = [...activeEl];
                                                        activeElements.push(el);
                                                        setActiveEl(activeElements);
                                                    }
                                                }} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>)}
        </>
    )
}