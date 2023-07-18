import React from 'react'
import rightObserver from '../../../utils/RightObserver'

const CoCurricularActivities = () => {

  rightObserver()

  const Activities = [
    { item : 'Indology' },
    { item : 'Graphology' },
    { item : 'Geopolitics' },
    { item : 'Sociology' },
    { item : 'Spirituality' },
    { item : 'Metaphysics' },
    { item : 'Kabaddi' },
    { item : 'Bengali Recitation' },
    { item : 'Drawing' },
  ]

  return (
    <div className="co-curricular-activities">
      <div className="title">Co-Curricular Activities</div>
      <div className="co-curricular-activities-content">
        {Activities.map((item, index) => {
          return (
            <div className="co-curricular-activities-content-item right-hidden" key={index}>
              <p>{item.item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CoCurricularActivities