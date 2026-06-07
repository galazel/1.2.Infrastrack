import React, { useEffect, useState } from "react"
import Logo from "../components/Logo"
import { Button } from "@/components/ui/button"
import { Outlet, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaperPlane,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"
import { Textarea } from "@/components/ui/textarea"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar"
import { handleSignOut } from "../auth/signOut"

function ClientDashboardLayout() {
  const navigate = useNavigate()

  const [conversation, setConversation] = useState([])
  const [chat, setChat] = useState("")
  const [history, setHistory] = useState([])
  const [isDisable, setIsDisable] = useState(true)

  const handleNewChat = () => {
    navigate("/home/client")
    setConversation([])
  }

  const handleSubmitChat = () => {
    if (!chat.trim()) return
    console.log("dd")
    setConversation((prev) => [
      ...prev,
      {
        user: chat,
        ai: "hello",
      },
    ])

    setChat("")
  }

  useEffect(() => {
    if (chat == "") setIsDisable(true)
    else setIsDisable(false)
  }, [chat])
  return (
    <main className="grid h-screen grid-cols-[20%_1fr]">
      {/* Sidebar */}
      <section className="grid grid-rows-[auto_auto_1fr_auto] gap-3 rounded-tr-2xl rounded-br-2xl bg-gray-100 p-4">
        <div>
          <Logo />
        </div>

        <div>
          <button onClick={handleNewChat} className="w-full button-primary">
            New Chat
          </button>
        </div>

        <div className="overflow-y-auto">
          {history.length === 0 ? (
            <p className="px-1 text-xs text-gray-400">
              No conversation history
            </p>
          ) : (
            <div className="flex flex-col gap-1">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer truncate rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-200"
                  onClick={() => navigate(`${index}`)}
                >
                  {item.title || "Untitled"}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>

            <p className="truncate text-sm font-medium text-gray-700">
              Hello World
            </p>
          </div>

          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="cursor-pointer"
            onClick={handleSignOut}
          />
        </div>
      </section>

      {/* Chat Area */}
      <section className="grid min-h-0 grid-rows-[1fr_auto] gap-2 p-5">
        <div className="min-h-0">
          <Outlet context={{ conversation }} />
        </div>

        <div className="grid h-14 w-full grid-cols-[1fr_auto] overflow-hidden rounded-2xl border-2 border-black">
          <Textarea
            className="h-full w-full resize-none rounded-none border-none p-4"
            placeholder="Ask anything"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
          />

          <div className="flex items-center justify-center px-4">
            <button disabled={isDisable} onClick={handleSubmitChat}>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className={`cursor-pointer text-2xl ${isDisable ? "text-gray-400" : "text-black"}`}
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ClientDashboardLayout
