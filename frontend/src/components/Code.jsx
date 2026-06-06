import React from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {Button} from '@/components/ui/button'
function Code({setCode,handleOTPComplete}) {
  return <div className="flex flex-col gap-2">
    <InputOTP
      maxLength={6}
      onChange={(value) => setCode(value)}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} className="h-16 w-16 text-xl" />
        <InputOTPSlot index={1} className="h-16 w-16 text-xl" />
        <InputOTPSlot index={2} className="h-16 w-16 text-xl" />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} className="h-16 w-16 text-xl" />
        <InputOTPSlot index={4} className="h-16 w-16 text-xl" />
        <InputOTPSlot index={5} className="h-16 w-16 text-xl" />
      </InputOTPGroup>
    </InputOTP>
    <Button className='w-full' onClick={handleOTPComplete}>Confirm</Button>
  </div>
  
  
}

export default Code
