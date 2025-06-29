

import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import Loader from './components/Loader/Loader'
import Navbarmain from './components/navbar/Navbarmain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import SubHeroMain from './components/subHeroSection/SubHeroMain'
import { useState,useEffect } from 'react'

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading time (2 seconds)
    const timeout = setTimeout(() => setLoading(false), 2500);
    
  }, []);

  if (loading) return  <Loader/>;
  



  return <main className="font-body text-white relative overflow-hidden">
    <Navbarmain />
    <HeroMain />
    <HeroGradient />
    <SubHeroMain />
    <AboutMeMain />
    {/* <HelperSection /> */}
    <SkillsMain />
    <SubSkills />
    <ProjectsMain />
<ContactMeMain/>
<FooterMain/>
  </main>


}

export default App
