import React from 'react'
import About from './About'
import Articles from './Articles'
import { Video } from './Video'
import MyWorks from './MyWorks'
import Services from './Services'
import Projects from './Projects'

export default function HomeParent() {
  return (
    <div className='container mx-auto'>
      <About/>
      {/* <Articles/> */}
      <Services/>
      {/* <Video/> */}
      <MyWorks/>
      <Projects/>
    </div>
  )
}
