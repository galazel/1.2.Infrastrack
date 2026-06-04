import React from "react"
import Image from "@/components/Image"


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
      
    </>
  )
}

export default NewChat
