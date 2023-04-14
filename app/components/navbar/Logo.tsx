'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

interface LogoProps {
  children: React.ReactNode
}

const Logo = () => {
  return (
    <Image 
      alt="Logo" 
      className="hidden md:block cursor-pointer" 
      height="100" 
      width="100" 
      src ="/images/logo.png"
      />
  )
}

export default Logo