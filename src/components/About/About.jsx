import React from 'react'
import './About.css'
import AboutMe from './AboutSections/AboutMe'
import Education from './AboutSections/Education'
import ProficiencyAndExpertise from './AboutSections/ProficiencyAndExpertise'
import ProfessionalHistory from './AboutSections/ProfessionalHistory'
import AcademicSynopsis from './AboutSections/AcademicSynopsis'
import RecentAwardsCertification from './AboutSections/RecentAwardsCertification'
import CoCurricularActivities from './AboutSections/CoCurricularActivities'
import AboutScroll from './AboutScroll'

const About = () => {
  return (
    <div className='About'>
      <div className="container content">
        <div className="about-grid-container">
          <div className="aboutScroll grid-item-1">
            <AboutScroll />
          </div>
          <div className="aboutSections grid-item -2">
            <section id="AboutMe"><AboutMe/></section>
            <section id="Education" className='about-section-content' ><Education/></section>
            <section id="ProficiencyAndExpertise" className='about-section-content' ><ProficiencyAndExpertise/></section>
            <section id="ProfessionalHistory" className='about-section-content' ><ProfessionalHistory/></section>
            <section id="AcademicSynopsis" className='about-section-content' ><AcademicSynopsis/></section>
            <section id="RecentAwardsCertification" className='about-section-content' ><RecentAwardsCertification/></section>
            <section id="CoCurricularActivities" className='about-section-content' ><CoCurricularActivities/></section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About