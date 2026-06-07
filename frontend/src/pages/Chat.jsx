import React from 'react'
import { useParams } from 'react-router-dom'
import engineerAI from "@/assets/engineer-ai-profile.webp"
import Image from '../components/Image'

function Chat() {
  const { chatId } = useParams()
  return (
    <div className='h-full w-full grid grid-rows-[12%_1fr] gap-2'>
      <div className='bg-blue-100 rounded-2xl overflow-hidden py-5 grid grid-cols-[10%_1fr] place-content-center'>
        <Image 
          src={engineerAI} 
          alt='Engineer Contractor AI' 
          className='w-50'
        />
        <p className='flex items-center text-2xl font-bold'>Eng. Contractor AI</p>
      </div>
      <div className='bg-red-300'>
        fsda
      </div>
    </div>
  )
}

export default Chat