import React from 'react'
import rightObserver from '../../../utils/RightObserver'

const AboutMe = () => {

  rightObserver()

  const AboutMe = [
    { item: 'I have cleared the ICAR AIEEA -UG examination {Indian Council of Agriculture Research (ICAR) All India Entrance Examination (AIEEA) Under Graduate (UG)} securing a rank of AIR -1313.' },
    { item: 'Currently, I am an NTS scholar pursuing BSc. (Hons) in horticulture.' },
    { item: 'I am a Bengali Hindu by birth and a follower of Sanatan Dharma by choice.' },
    { item: 'I love my country India and believe in Bhartiya Nationalism.' },
    { item: 'But above all I consider the world to be my family i.e., Vasudhaiva kutumbakam, and pray for the well-being of all (Sarve-bhavantu-sukhinah)' },
    { item: 'A lifelong passion for Indian culture and traditions, nurtured through childhood bedtime stories, extensive reading on Bhartiya culture and Indian independence, watching documentaries, attending webinars on Vedic philosophy and science, and active participation in a Vrikshayurveda practitioner group.' }
  ]

  return (
    <div className="AboutMe">
      <div className="title">About</div>
      <div className="aboutme-content">
        {AboutMe.map((aboutme, index) => {
          return (
            <div className="aboutme-item right-hidden" key={index}>
              <p>{aboutme.item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutMe