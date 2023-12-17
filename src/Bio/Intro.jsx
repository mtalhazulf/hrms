import react from "react";
import ProfilePage from "./Info_card";
import FindUsPage from "./findus";

const Intro = () => {
    return (

        <div className="bg-gray-800 text-white flex flex-col items-center justify-center px-4 w-screen h-screen">
            <h1 className="text-4xl font-bold mb-4 text-center bg-gray-900 text-white rounded-2xl p-4">About Us</h1>
            <div className="max-w-2xl bg-gray-900 rounded-lg shadow-md p-6 text-center">

                <p className="mb-4">
                    We are a team of passionate software developers dedicated to crafting professional software solutions.
                    Our commitment to excellence drives us to deliver high-quality, reliable, and innovative software
                    tailored to meet the unique needs of our clients.
                </p>
                <p className="mb-4">
                    With a blend of expertise in various programming languages and frameworks, our team thrives on solving
                    complex problems and transforming ideas into reality. We focus on creating user-friendly, scalable,
                    and secure applications that empower businesses to grow and succeed in the digital world.
                </p>
                <p className="mb-4">
                    Our portfolio spans across different sectors, showcasing our versatility and ability to adapt to
                    diverse software needs. Trust us to be your technology partner in navigating the ever-evolving
                    landscape of software development.
                </p>

            </div>
            <a className="p-4 mt-4 hover:cursor-pointer" onClick={(e) => {
                e.preventDefault();
                document.getElementById('profiles').scrollIntoView({ behavior: "smooth" });

            }}>
                Go Down
            </a>
        </div>
    )
}

export default Intro