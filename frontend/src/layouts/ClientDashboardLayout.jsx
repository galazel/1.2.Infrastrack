import React from "react"
import Logo from "../components/Logo"
import { Button } from "@/components/ui/button"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function ClientDashboardLayout() {
  const navigate = useNavigate()

  return (
    <main className="grid h-screen grid-cols-[20%_1fr]">
      <section className="grid grid-rows-[5%_5%_1fr] gap-2 rounded-tr-2xl rounded-br-2xl bg-gray-100 p-5">
        <Logo />
        <Button>New Chat</Button>
        <div className="grid grid-rows-5 gap-1 bg-orange-100">
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <div
                key={index}
                className="bg-red-500"
                onClick={() => navigate(`/gg/${index}`)}
              >
                fdsaf
              </div>
            )
          })}
        </div>
      </section>

      <section className="grid grid-rows-[1fr_8%] place-items-center gap-2 p-5">
        <Outlet />
      </section>
    </main>
  )
}

export default ClientDashboardLayout
