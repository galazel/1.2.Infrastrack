import React, { useState } from "react"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  handleResetPasswordRequest,
} from "../auth/password"
import { useNavigate } from "react-router-dom"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ResetEmail() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Email is required.")
    } else if (!EMAIL_REGEX.test(email)) {
      setError("Enter a valid email address.")
    } else {
      setError("")
      handleResetPasswordRequest(email,navigate)
    }
  }

  return (
    <FieldSet className="w-full">
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <FieldError>{error}</FieldError>}
      </Field>
      <Button onClick={handleSubmit}>Submit</Button>
    </FieldSet>
  )
}

export default ResetEmail
