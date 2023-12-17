import react from "react";
import ProfilePage from "./Info_card";
import FindUsPage from "./findus";
import Intro from "./Intro";

const AboutUs = () => {
    return (
        <div className="bg-gray-800">

            <section id="Intro" className="w-screen h-screen">
                <Intro />
            </section>

            <section id="profiles" className="w-screen h-screen">
                <ProfilePage />
            </section>
            <section id="findus" className="w-screen h-screen ">
                <FindUsPage />
            </section>

        </div>
    )
}

export default AboutUs