import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Code from "@/components/Code"
import { handleResetPasswordConfirm } from "../auth/password"
import { handleConfirm } from "../auth/confirmSignup"
import { useAuth } from "../hooks/AuthProvider"

function VerificationCode() {
  const [code, setCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [error, setError] = useState("")
  const [step, setStep] = useState("otp")
    const { refresh } = useAuth()

  const location = useLocation()
  const navigate = useNavigate()

  const email = location.state?.email
  const type = location.state?.type
  const password = location.state?.password

  const handleOTPComplete = () => {
    setStep("newPassword")
  }

  const handleSignUpConfirm = () => {
    handleConfirm(email, code, password, navigate, refresh)
  }

  const handleSubmit = async () => {
    if (!newPassword) {
      setError("Password is required.")
      return
    }
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }
    setError("")
    await handleResetPasswordConfirm(email, code, newPassword, navigate)
  }

  if (type === "signUpVerification") {
    return (
      <div>
        <Code setCode={setCode} handleOTPComplete={handleSignUpConfirm} />
      </div>
    )
  }

  return (
    <div>
      {step === "otp" ? (
        <Code setCode={setCode} handleOTPComplete={handleOTPComplete} />
      ) : (
        <FieldSet className="w-full">
          <Field>
            <FieldLabel htmlFor="newPassword">New Password</FieldLabel>
            <Input
              id="newPassword"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {error && <FieldError>{error}</FieldError>}
          </Field>
          <Button onClick={handleSubmit}>Submit</Button>
        </FieldSet>
      )}
    </div>
  )
}

export default VerificationCode