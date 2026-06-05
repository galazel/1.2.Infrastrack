import React from "react"
import { Outlet } from "react-router-dom"

function ResetPasswordLayout() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="grid h-100 w-100 grid-rows-[20%_1fr] place-content-center place-items-center">
        <div>
          <h1 className="text-center text-2xl font-bold">Verification Code</h1>
          <p>We sent an otp to your email. Send it here.</p>
        </div>
        <Outlet />
      </div>
    </main>
  )
}

export default ResetPasswordLayout
