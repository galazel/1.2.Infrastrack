import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import Logo from "../components/Logo"

function RegisterLayout() {
  const location = useLocation()
  return (
    <section className="flex h-screen w-full flex-col gap-5 overflow-auto px-130 py-10">
      <div>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-4xl"
          onClick={() => window.history.back()}
        />
        <Logo />
        <h2>Get started on INFRASTRACK</h2>
        <p>{location.state?.description || "Welcome to INFRASTRACK!"}</p>
      </div>
      <div>
        <Outlet />
      </div>
      <Button className="w-full">Submit</Button>
    </section>
  )
}

export default RegisterLayout
