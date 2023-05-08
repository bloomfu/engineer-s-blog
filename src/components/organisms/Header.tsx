import { ReactNode } from 'react'
import Layout from '../atoms/NameImage/Layout'
import Profile from '../atoms/Profile/Profile'

interface HeaderProps {
  children: ReactNode
}

function Header({ children }: HeaderProps) {
  return (
    <>
      <Layout home />
      <main className='container mx-auto'>
        <Profile />
        {children}
      </main>
    </>
  )
}

export default Header
