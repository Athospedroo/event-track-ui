import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { LoginPageView } from '@/components/LoginPage/LoginPageView'
import { NavBarView } from '@/components/NavBar/NavBarView'

export default function Home() {
  return (
    
    <div>
      {/* <NavBarView/>  */}
      <LoginPageView/>
      {/* <PageHome/> */}
    </div>
  )
}
