import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import Logo from "../components/Logo"
import { handleSignUp } from "../auth/signup"
import { useRef } from "react"

function RegisterLayout() {
  const location = useLocation()
  const submitRef = useRef()
  return (
    <section className="flex  w-full flex-col gap-5 px-130 py-20">
      <div className="flex flex-col gap-3">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-4xl"
          onClick={() => window.history.back()}
        />
        <Logo />
        <h2>
          Get started on <span>INFRASTRACK</span>
        </h2>
        <p>{location.state?.description || "Welcome to INFRASTRACK!"}</p>
      </div>
      <div >
        <Outlet context={{ submitRef }} />
      </div>
      <div>
        <button
          className="button-primary"
          onClick={() => submitRef.current?.()}
        >
          Submit
        </button>
      </div>
    </section>
  )
}

export default RegisterLayout
