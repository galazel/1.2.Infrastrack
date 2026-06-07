import React from "react"
import Image from "@/components/Image"
import infrastract from "../assets/infrastrack-logo.webp"

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src={infrastract} alt="logo" className="size-10" />
      <p className="logo">INFRASTRACK</p>
    </div>
  )
}

export default Logo
