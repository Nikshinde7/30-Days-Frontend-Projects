"use client"
import { ChevronDownIcon } from "lucide-react"
import React, { cloneElement, useState } from "react"

export const Accordion = ({ children }: any) => {
    const [activePanel, setActivePanel] = useState(null)

    return (
        <div className="flex flex-col gap-y-8 w-full">
            {React.Children.map(children, (child) =>
                cloneElement(child, { activePanel, setActivePanel })
            )}
        </div>
    )
}

Accordion.Item = ({ children, id, activePanel, setActivePanel }: any) => {
    return (
        <div className="flex flex-col w-full h-full">
            {React.Children.map(children, (child) =>
                cloneElement(child, { id, activePanel, setActivePanel })
            )}
        </div>

    )
}

Accordion.Toggle = ({ children, id, activePanel, setActivePanel }: any) => {

    const isActive = id !== activePanel;

    return (
        <div className="flex cursor-pointer w-full items-ce-nter justify-between p-4 pb-0 rounded-lg hover:underline-offset-2 transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
            onClick={() => {
                if (isActive)
                    setActivePanel(id)
                else
                    setActivePanel(null)
            }}
        >
            {children}

            {/* Toggle Button */}
            <ChevronDownIcon className={`h-4 w-4 shrink-0 transition-transform duration-200 ${activePanel === null && "rotate-180"
                }`} />
        </div>
    )
}

Accordion.Panel = ({ children, id, activePanel }: any) => {
    return (
        <div className="flex border-b pb-4 p-4 pt-3 w-full">
            {id === activePanel &&
                <div>
                    {children}
                </div>
            }
        </div>
    )
}