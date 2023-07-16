import React from 'react'

const AcademicSynopsis = () => {

  const Academic = [
    {
      head: 'Lower Classes',
      description : 'Have always been the class topper in school examinations and school topper in exams like NSO and IMO.'
    },
    {
      head: 'Engineering Entrances',
      description : 'I have cleared exams like WBJEE and JEE after class 12th'
    },
    {
      head: 'Other Entrances',
      description : 'I have sailed through several competitive exams like ICAR-AIEEA UG and others'
    },
    {
      head: 'At Present',
      description : 'Study B.Sc (Hons), Horticulture, at Bidhan Chandra Krishi Vishwavidyalaya'
    },
    {
      head: 'Seminars / Webinars',
      description : 'I have attended and participated (and continue to do so) in various national and international webinars (both govt and non-govt) on various topics including health, agriculture, horticulture, etc.'
    },
  ]

  return (
    <div className='academic-synopsis'>
      <div className="title">Academic Synopsis</div>
      <div className="academic-synopsis-content">
        {Academic.map((item, index) => {
          return (
            <div className="academic-synopsis-content-item" key={index}>
              <h1>{item.head}</h1>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AcademicSynopsis