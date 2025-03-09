import React from 'react'

const Home = () => {
    return (
        <div className="w-screen h-auto bg-[#2D1D4C] bg-cover relative">
            <div className="absolute inset-0 z-0">
                <Background />
            </div>
            <Fireworks />
            <ShootingStars />
            <StarsBackground />
            <Navbar />

            <div className="w-full bg-black relative z-10">
                <section id="footer">
                    <Footer />
                </section>
            </div>
        </div>
    )
}

export default Home