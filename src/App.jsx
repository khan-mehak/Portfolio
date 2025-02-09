import React, { useContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ThemeContext } from './components/Toggle/Toggle';
import './App.css';

const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            {/* Navbar now includes the theme toggle */}
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Work />
            <Contact /> 
            <Footer />
        </div>
    );
};

export default App;
