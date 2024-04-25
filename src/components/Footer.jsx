import React, { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [need, setNeed] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform your submission logic
        console.log("Email:", email);
        console.log("Need:", need);
        // Reset the form after submission
        setEmail("");
        setNeed("");
    };

    return (
        <footer className="bg-[#6f847e] text-white py-6">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-center text-lg mb-4">Uzzini Izmaksas Savam Projektam!</p>
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Vajadzīgie materiāli"
                        value={need}
                        onChange={(e) => setNeed(e.target.value)}
                        className="py-2 px-4 mr-2 rounded-l-lg border border-white focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Tava E-pasta adrese"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-2 px-4 mr-2 rounded-l-lg border border-white focus:outline-none"
                        required
                    />
                    <button type="submit" className="bg-[#00df9a] text-white py-2 px-6 rounded-r-lg hover:bg-black focus:outline-none">
                        Jautāt
                    </button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
