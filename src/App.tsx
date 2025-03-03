import './App.css'
import {AboutSection, HeroSection, MobileSection, SectionSkills} from "./Sections.tsx";
import Header from "./header.tsx";
import Footer from "./footer.tsx";

function App() {

    return (
        <>
            <Header/>
            <div className="vstack">
                <HeroSection/>
                <AboutSection/>
                <SectionSkills/>
                <MobileSection/>

            </div>
            <Footer/>
        </>
    )
}

export default App
