import React, { useEffect, useState } from 'react'

const AboutScroll = () => {

  const [activeAbout, setActiveAbout] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('AboutMe');
      const educationSection = document.getElementById('Education');
      const proficiencyAndExpertiseSection = document.getElementById('ProficiencyAndExpertise');
      const professionalHistorySection = document.getElementById('ProfessionalHistory');
      const academicSynopsisSection = document.getElementById('AcademicSynopsis');
      const recentAwardsCertificationSection = document.getElementById('RecentAwardsCertification');
      const coCurricularActivitiesSection = document.getElementById('CoCurricularActivities');

      const scrollPosition = window.scrollY;

      if (
        scrollPosition < aboutMeSection.offsetTop
        && activeAbout !== 'AboutMe'
      ) {
        setActiveAbout('AboutMe');
      } else if (
        scrollPosition >= aboutMeSection.offsetTop
        && scrollPosition < educationSection.offsetTop
        && activeAbout !== 'Education'
      ) {
        setActiveAbout('Education');
      } else if (
        scrollPosition >= educationSection.offsetTop
        && scrollPosition < proficiencyAndExpertiseSection.offsetTop
        && activeAbout !== 'ProficiencyAndExpertise'
      ) {
        setActiveAbout('ProficiencyAndExpertise');
      } else if (
        scrollPosition >= proficiencyAndExpertiseSection.offsetTop
        && scrollPosition < professionalHistorySection.offsetTop
        && activeAbout !== 'ProfessionalHistory'
      ) {
        setActiveAbout('ProfessionalHistory');
      } else if (
        scrollPosition >= professionalHistorySection.offsetTop
        && scrollPosition < academicSynopsisSection.offsetTop
        && activeAbout !== 'AcademicSynopsis'
      ) {
        setActiveAbout('AcademicSynopsis');
      } else if (
        scrollPosition >= academicSynopsisSection.offsetTop
        && scrollPosition < recentAwardsCertificationSection.offsetTop
        && activeAbout !== 'RecentAwardsCertification'
      ) {
        setActiveAbout('RecentAwardsCertification');
      } else if (
        scrollPosition >= recentAwardsCertificationSection.offsetTop
        && scrollPosition < coCurricularActivitiesSection.offsetTop
        && activeAbout !== 'CoCurricularActivities'
      ) {
        setActiveAbout('CoCurricularActivities');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeAbout]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
      });
    }
  }

  return (
    <div className="about-links">
      <a href="#AboutMe" className={activeAbout === 'AboutMe' ? 'active' : ''} onClick={() => scrollToSection('AboutMe')} >About</a>
      <a href="#Education" className={activeAbout === 'Education' ? 'active' : ''} onClick={() => scrollToSection('Education')} >Education</a>
      <a href="#ProficiencyAndExpertise" className={activeAbout === 'ProficiencyAndExpertise' ? 'active' : ''} onClick={() => scrollToSection('ProficiencyAndExpertise')} >Proficiency And Expertise</a>
      <a href="#ProfessionalHistory" className={activeAbout === 'ProfessionalHistory' ? 'active' : ''} onClick={() => scrollToSection('ProfessionalHistory')} >Professional History</a>
      <a href="#AcademicSynopsis" className={activeAbout === 'AcademicSynopsis' ? 'active' : ''} onClick={() => scrollToSection('AcademicSynopsis')} >Academic Synopsis</a>
      <a href="#RecentAwardsCertification" className={activeAbout === 'RecentAwardsCertification' ? 'active' : ''} onClick={() => scrollToSection('RecentAwardsCertification')} >Recent Awards Certification</a>
      <a href="#CoCurricularActivities" className={activeAbout === 'CoCurricularActivities' ? 'active' : ''} onClick={() => scrollToSection('CoCurricularActivities')} >Co Curricular Activities</a>
    </div>
  )
}

export default AboutScroll