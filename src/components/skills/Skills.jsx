import React from 'react';
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs/'

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container skill-container">
        <div className="skills-frontend">
          <h3>Frontend Knowledge</h3>
          <div className="skill-content">
            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Avanced</small>
              </div>
            </article>

            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className="skills-backend">
        <h3>Backend Knowledge</h3>
          <div className="skill-content">
            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Avanced</small>
              </div>
            </article>

            <article className='skill-details'>
              <BsPatchCheckFill className='skill-details-icons'/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills