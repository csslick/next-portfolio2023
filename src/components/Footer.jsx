import Link from 'next/link'
import { SiBlogger } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiKakaotalk } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className='main-footer'>
      <div className="sns">
        <Link href='#'><SiBlogger /></Link>
        <Link href='#'><SiInstagram /></Link>
        <Link href='#'><SiKakaotalk /></Link>
      </div>
      <p className='copy'>&copy; 2023 portfolio</p>
    </footer>
  )
}
