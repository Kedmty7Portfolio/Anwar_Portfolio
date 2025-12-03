import React from 'react'
import About from './About'
import MyWorks from './MyWorks'
import Services from './Services'
import Projects from './Projects'

export default function HomeParent() {
  return (
    <div className='container mx-auto'>
      <About/>
      <Services/>
      <MyWorks/>
      <Projects/>
    </div>
  )
}
