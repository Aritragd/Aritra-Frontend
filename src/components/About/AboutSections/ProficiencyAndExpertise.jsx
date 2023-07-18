import React from 'react'
import rightObserver from '../../../utils/RightObserver'

const ProficiencyAndExpertise = () => {

  rightObserver()

  const Expertise = [
    { item: 'Fluent in Communicating in English, Hindi and Bengali' },
    { item: 'Strategy Development' },
    { item: 'Creating interactive sessions' },
    { item: 'Dispelling doubts' },
    { item: 'Project-Oriented study' },
    { item: 'Understanding audience psychology' },
    { item: 'Handwriting analysis' },
  ]


  return (
    <div className='proficiency-and-expertise'>
      <div className="title">Proficiency And Expertise</div>
      <div className="proficiency-and-expertise-content">
        {Expertise.map((expertise, index) => {
          return (
            <div className="proficiency-and-expertise-item right-hidden" key={index}>
              <p>{expertise.item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProficiencyAndExpertise