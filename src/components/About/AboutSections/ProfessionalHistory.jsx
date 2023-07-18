import React from 'react'
import rightObserver from '../../../utils/RightObserver'

const ProfessionalHistory = () => {

  rightObserver()

  const Professional = [
    {
      topic: 'Subject Matter Expert',
      description: 'Have worked for Doubtnut as an SME Content developer in CNE ASSOCIATES.'
    },
    {
      topic: 'Q/A Analyst',
      description: 'I have worked for Thomson Digital as a Quality Controller in CNE ASSOCIATES'
    },
    {
      topic: 'Subject Matter Expert',
      description: 'Have worked for Embibe as an SME Content developer in CNE ASSOCIATES.'
    },
    {
      topic: 'Subject Matter Expert',
      description: "Have worked for Byju's as an SME Content developer in CNE ASSOCIATES."
    },
    {
      topic: 'Subject Matter Expert',
      description: 'Working for Video solutions as a SME Content developer in Physics-Wallah'
    },
    {
      topic: 'Columnist',
      description: 'Columnists in many local newspapers and news portals, write on topics including Hinduism, agriculture, horticulture, etc.'
    },
  ]

  return (
    <div className='professional-history'>
      <div className="title">Professional History</div>
      <div className="professional-history-content">
        {Professional.map((item, index) => {
          return (
            <div className="professional-history-content-item" key={index}>
              <h1 className='right-hidden'>{item.topic}</h1>
              <p className='right-hidden'>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProfessionalHistory