import React from 'react'
import Navbar from "../components/Navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Background from "../components/Background";
import Fireworks from "../components/ui/fireworks";
import Footer from "../components/Footer";
import Broucherdetails from "../components/Broucherdetails";

const Broucher = () => {
    return (
        <div className="w-screen h-auto bg-[#2D1D4C] bg-cover relative">
            <div className="absolute inset-0 z-0">
                <Background />
            </div>
            <Fireworks />
            <ShootingStars />
            <StarsBackground />
            <Navbar />
            <Broucherdetails/>
            <div className="w-full bg-black relative z-10">
                <section id="footer">
                    <Footer />
                </section>
            </div>
        </div>
    )
}

export default Broucher