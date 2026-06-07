import React from "react"
import Image from "@/components/Image"
import { useOutletContext } from "react-router-dom"

function NewChat() {
  const { conversation } = useOutletContext()

  if (conversation.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <Image
            src="/engineer-ai-profile.webp"
            alt="engineer profile"
            className="h-70 w-110 rounded-full"
          />

          <p className="text-3xl font-extrabold">
            Eng. Contractor AI
          </p>

          <p className="w-145 text-center">
            Engr. Contractor AI is a smart construction assistant that helps
            you track your house progress, budget, and updates in real time
            through simple chat.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-3">
        <Image
          src="/engineer-ai-profile.webp"
          alt="engineer profile"
          className="h-10 w-10 rounded-full"
        />

        <p className="text-lg font-extrabold">
          Eng. Contractor AI
        </p>
      </div>

      {/* Scrollable Messages */}
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3">
        {conversation.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            {/* User Message */}
            <div className="flex justify-end">
              <span className="max-w-[70%] rounded-2xl bg-black px-4 py-2 text-sm text-white">
                {item.user}
              </span>
            </div>

            {/* AI Message */}
            <div className="flex justify-start">
              <span className="max-w-[70%] rounded-2xl bg-gray-100 px-4 py-2 text-sm text-gray-800">
                {item.ai}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewChat