import React from 'react'

const Education = () => {

  const Educations = [
    {
      institution: 'School',
      name: "St. Stephen's School, Dum Dum, West Bengal",
    },
    {
      institution: 'University',
      name: "Bidhan Chandra Krishi Vishwavidyalaya, Main Campus, Mohanpur, Nadia, West Bengal",
    }
  ]

  return (
    <div className='education'>
      <div className="title">Education</div>
      <div className="education-content">
        {Educations.map((edu, index) => {
          return(
            <div className="education-item" key={index}>
              <h1>{edu.institution}</h1>
              <p>{edu.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education