import React from 'react'
import './Projects.css'

import useIntersectionObserver from '../../utils/IntersectionObserver'
import leftObserver from '../../utils/LeftObserver'

import kpk from '../../assets/blog-project-images/kpk.jpg'
import bthu from '../../assets/blog-project-images/bthu.png'

const Projects = () => {

  useIntersectionObserver()
  leftObserver()

  const allProjects = [
    { img: kpk ,title: "BOOK: “কৃষি,পরিবেশ ও কৃষ্টির অন্তর্জগৎ” ড. কল্যাণ চক্রবর্তী ও অরিত্র ঘোষ দস্তিদারের বই প্রকাশ", href: "https://deshersamay.com/book-কৃষিপরিবেশ-ও-কৃষ্টির-অন/", date: '2023-2-16'},
    { img: kpk ,title: "BOOK: “কৃষি,পরিবেশ ও কৃষ্টির অন্তর্জগৎ” ড. কল্যাণ চক্রবর্তী ও অরিত্র ঘোষ দস্তিদারের বই প্রকাশ", href: "https://deshersamay.com/book-কৃষিপরিবেশ-ও-কৃষ্টির-অন/", date: '2023-2-16'},
    { img: bthu ,title: "From Bisuddha to Hindu unity. A detailed landscape drawn by Aritra Ghosh Dastidar and panel.", href: "https://youtu.be/-wobUYP1vhg", date: '2023-2-16'},
  ]


  return (
    <div className="projects">
      <div className="container content">
        <div className="project-grid-container">
          {allProjects.map((project, index) => {
            return (
              <div className="project-item left-hidden" key={index}>
                <div className="project-img">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project-description">
                  <h1>
                    <div><a href={project.href} target='_blank' rel='noopener noreferrer'>{project.title}</a></div>
                  </h1>
                  <p>{project.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
