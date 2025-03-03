import './App.css'
import {AboutSection, HeroSection, MobileSection} from "./Sections.tsx";
import Header from "./header.tsx";
import Footer from "./footer.tsx";

function App() {

    return (
        <>
            <Header/>
            <div className="vstack">
                <HeroSection/>
                <AboutSection/>
                <MobileSection/>
            </div>
            <Footer/>
        </>
    )
}

export default App
