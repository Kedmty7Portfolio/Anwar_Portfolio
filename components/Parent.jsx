
import Experiences from './Experiences'
import Skills from './Skills'
import Education from './Education'
import Certificates from './Certificates'
import Memberships from './Memberships'
import Achievements from './Achievements'


export default function Parent() {
  return (
    <div className='container m-auto  p-[var(--main-padding)] flex flex-col gap-2'>
 
      <Skills/>
      <Experiences/>
      <Education/>
      <Certificates/>
      <Memberships/>
      <Achievements/>
 
    </div>
  )
}
