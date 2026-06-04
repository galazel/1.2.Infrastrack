import React from "react"
import Image from "@/components/Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { Textarea } from "@/components/ui/textarea"

function NewChat() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-1">
          <Image
            src="/engineer-ai-profile.webp"
            alt="engineer profile"
            className="h-70 w-110 rounded-full"
          />
          <p className="text-3xl font-extrabold">Eng. Contractor AI</p>
          <p className="w-145 text-center">
            Engr. Contractor AI is a smart construction assistant that helps you
            track your house progress, budget, and updates in real time through
            simple chat.
          </p>
        </div>
      </div>
      <div className="grid h-full w-full grid-cols-[1fr_5%] overflow-hidden rounded-2xl border-2 border-black ">
        <Textarea className="h-full w-full resize-none rounded-none border-none p-5" placeholder='Ask anything'/>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon icon={faPaperPlane} className="text-2xl" />
        </div>
      </div>
    </>
  )
}

export default NewChat
