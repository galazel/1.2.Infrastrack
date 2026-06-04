import React from "react"
import Image from "@/components/Image"

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src="/infrastrack-logo.webp" alt="logo" className="size-10" />
      <p className="logo">INFRASTRACK</p>
    </div>
  )
}

export default Logo
