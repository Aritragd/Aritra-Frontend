import React from 'react'
import rightObserver from '../../../utils/RightObserver'

const RecentAwardsCertification = () => {

  rightObserver()

  const Awards = [
    { topic: "International",
      description: "Secured 2nd global position in a writing competition on 'Current Scientific Relevance of Ancient Vedic Literature' by TSSP" 
    },
    { topic: "National",
      description: "Participated and attended an Essay Competition at the International Conference on Contributions of “Acharya Prafulla Chandra Ray as a Chemist and Freedom Fighter held on 11-12 Sravana, 1944 (02-03 August 2022) as a part of the Azadi ka Amrit Mahotsava organized by Vijnana Bharati & Ministry of Culture, Government of India in Association with Indraprastha Vigyan Bharati and Department of Chemistry, University of Delhi." 
    },
  ]

  return (
    <div className="recent-awards-certification">
      <div className="title">Recent Awards & Certification</div>
      <div className="recent-awards-certification-content">
        {Awards.map((item, index) => {
          return (
            <div className="recent-awards-certification-content-item" key={index}>
              <h1 className='right-hidden'>{item.topic}</h1>
              <p className='right-hidden'>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentAwardsCertification