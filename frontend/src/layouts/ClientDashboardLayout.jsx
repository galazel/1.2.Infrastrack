import React from "react"
import Logo from "../components/Logo"
import { Button } from "@/components/ui/button"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Image from "@/components/Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { Textarea } from "@/components/ui/textarea"

function ClientDashboardLayout() {
  const navigate = useNavigate()

  const handleNewChat = () => {}
  return (
    <main className="grid h-screen grid-cols-[20%_1fr]">
      <section className="grid grid-rows-[5%_5%_1fr_10%] gap-2 rounded-tr-2xl rounded-br-2xl bg-gray-100 p-5">
        <Logo />
        <Button onClick={handleNewChat}>New Chat</Button>
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
        <div className="grid grid-cols-[5%_1fr] bg-amber-300">
          <Image />
          <p>Hello World</p>
        </div>
      </section>

      <section className="grid grid-rows-[1fr_8%] place-items-center gap-2 p-5">
        <Outlet />
        <div className="grid h-full w-full grid-cols-[1fr_5%] overflow-hidden rounded-2xl border-2 border-black">
          <Textarea
            className="h-full w-full resize-none rounded-none border-none p-5"
            placeholder="Ask anything"
          />
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faPaperPlane} className="text-2xl" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ClientDashboardLayout
