"use client"
import React from "react";
import { Accordion } from "./components/Accordion";


export default function Page() {
    return (
        <div className="flex w-full h-screen bg-stone-600 items-center justify-center px-10">
            <Accordion>
                <Accordion.Item id="1">
                    <Accordion.Toggle>Devtools Tech? 🤔</Accordion.Toggle>
                    <Accordion.Panel>
                        The aim with Devtools Tech is to create a platform for Frontend
                        Engineers where we all can improve, invest in ourselves, and grow by
                        learning from high quality real world programming content. This is a
                        platform where you can practice actual interview questions, watch
                        courses, read blogs, and keep track of your progress across various
                        domains and topics.
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item id="2">
                    <Accordion.Toggle>Is it Free?</Accordion.Toggle>
                    <Accordion.Panel>
                        Yes, the platform and YouTube both are completely free!
                        Yes, the platform and YouTube both are completely free!
                        Yes, the platform and YouTube both are completely free!
                        Yes, the platform and YouTube both are completely free!
                        Yes, the platform and YouTube both are completely free!
                        Yes, the platform and YouTube both are completely free!
                        Yes, the platform and YouTube both are completely free!
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    )
};