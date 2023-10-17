import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const About = () => {
    return (
        <div className="container mt-48 grid grid-rows-4 gap-4">

            <h1 className="text-dark-teal text-5xl text-center row-span-1 mx-0 my-8">Magic Wand</h1>

            <div className="grid grid-cols-2 row-span-1">
                <div className="rounded-full bg-aquamarine-blue w-64 h-64 flex items-center justify-center">
                    <h1 className="text-center text-lg font-bold drop-shadow-2xl">Who are we?</h1></div>
                <p className="tracking-wider">
                    Solid and Affordable Cleaming Services
                    As a cleaning organization, Magic Wand remains consistent
                    with our name. We will probably make enlisting a cleaning administration as basic as workable for you as our client. We are genuinely devoted to giving you extraordinary administrations at sensible rates. We will probably streamline your life by taking housekeeping off your schedule.
                </p>
            </div>
            <div className="grid grid-cols-2 row-span-1">
                <div>house: uhasuahsuasu</div>
                <h1 className="rounded-full bg-aquamarine-blue text-center w-64 h-64 flex items-center justify-center text-lg font-bold drop-shadow-2xl">Why Choose us ?</h1>
            </div>
            <div className="row-span-1">
                <div><p>
                    At Magic Wand, we give  reasonable and dependable housekeeping
                    by expert staff individuals who are legitimately prepared. Our housekeeper and cleaning administrations can enable you to possess
                    more energy for different exercises,
                    incorporating investing time with your family. </p></div>
            </div>
        </div>
    )
} 