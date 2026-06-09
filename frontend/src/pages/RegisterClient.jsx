import React, { useState } from "react"
import { toast } from "sonner"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import FileUpload from "@/components/Upload"
import { useOutletContext, useNavigate } from "react-router-dom"
import {handleSignUp} from '../auth/signup'
import { useAuth } from "../hooks/AuthProvider"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,20}$/

function validate(values) {
  const errors = {}

  if (!values.firstName?.trim()) errors.firstName = "First name is required."
  if (!values.lastName?.trim()) errors.lastName = "Last name is required."

  if (!values.username?.trim()) errors.username = "Username is required."
  else if (!USERNAME_REGEX.test(values.username))
    errors.username = "3–20 characters, letters, numbers, or underscores only."

  if (!values.email?.trim()) errors.email = "Email is required."
  else if (!EMAIL_REGEX.test(values.email)) errors.email = "Enter a valid email address."

  if (!values.password) errors.password = "Password is required."
  else if (values.password.length < 8) errors.password = "Password must be at least 8 characters."

  if (!values.projectCode?.trim()) errors.projectCode = "Project code is required."

  return errors
}

function RegisterClient() {
  const navigate = useNavigate()
  const {submitRef} = useOutletContext()
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    profilePicture: null,
    projectCode: "",
  })

  const [errors, setErrors] = useState({})
  const handleChange = (field) => (e) => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }))
  }
  const handleProfilePicture = (file) => {
    setUserDetails((prev) => ({ ...prev, profilePicture: file }))
  }
  const handleSubmit = () => {
    const errs = validate(userDetails)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    handleSignUp(userDetails.email, userDetails.password, navigate, 'Client')
  }
  submitRef.current = handleSubmit

  return (
    <FieldSet>
      <FieldGroup>
        <Field>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <FieldLabel htmlFor="first-name">First Name</FieldLabel>
              <Input
                id="first-name"
                autoComplete="given-name"
                placeholder="First"
                onChange={handleChange("firstName")}
              />
              {errors.firstName && <FieldError>{errors.firstName}</FieldError>}
            </div>
            <div>
              <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
              <Input
                id="last-name"
                autoComplete="family-name"
                placeholder="Last"
                onChange={handleChange("lastName")}
              />
              {errors.lastName && <FieldError>{errors.lastName}</FieldError>}
            </div>
          </div>
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            id="username"
            autoComplete="username"
            placeholder="Username"
            onChange={handleChange("username")}
          />
          {errors.username && <FieldError>{errors.username}</FieldError>}
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            onChange={handleChange("email")}
          />
          {errors.email && <FieldError>{errors.email}</FieldError>}
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            onChange={handleChange("password")}
          />
          {errors.password && <FieldError>{errors.password}</FieldError>}
        </Field>
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="profile-picture">Profile Picture</FieldLabel>
        <ProfilePicture onFileSelect={handleProfilePicture} />
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="project-code">Project Code</FieldLabel>
          <Input
            id="project-code"
            autoComplete="off"
            placeholder="Project Code"
            onChange={handleChange("projectCode")}
          />
          {errors.projectCode && <FieldError>{errors.projectCode}</FieldError>}
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export default RegisterClient