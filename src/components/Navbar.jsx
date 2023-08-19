'use client'
import Link from 'next/link'
import { useState } from 'react' // 1
import { AiOutlineMenu } from 'react-icons/ai' // 2. 토글 메뉴 아이콘 추가

export default function Navbar() {
  const [toggle, setToggle] = useState(false); // 3. 토글 메뉴 상태 변수

  return (
    <nav className='navbar'>
      <h1><Link href='/'>Portfolio</Link></h1>
      <ul className={ toggle ? 'active' : ''}>
        <li><Link href='/' onClick={()=>{setToggle(!toggle)}}>Home</Link></li>
        <li><Link href='/about' onClick={()=>{setToggle(!toggle)}}>About</Link></li>
        <li><Link href='/projects' onClick={()=>{setToggle(!toggle)}}>Projects</Link></li>
      </ul>
      <button 
        className='btn-toggle'
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <AiOutlineMenu size={32} />
      </button>
    </nav>
  )
}