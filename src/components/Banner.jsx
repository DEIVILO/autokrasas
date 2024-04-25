import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2 text-l">Uzlabo rezultātu kopā ar mums!</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Profesionāli auto krāsošanas piederumi</h1>
                <div className="">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold mt-3 text-[#6f847e]">Saņem konsultāciju no</p>
                    <ReactTyped strings={["Profesionāļa", "Krāsotāja", "Zinātāja"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    className="md:text-5xl sm:text-4xl text-xl font-bold mt-3 text-[#00df9a]">
                    <input type="text" className="mt-2 " />
                    </ReactTyped>
                </div>
            </div>
        </div>
    )
}

export default Banner;


//jaadabuu inline texts