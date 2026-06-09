import React, { useState } from "react"
import { toast } from "sonner"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FileUpload from "@/components/Upload"
import { useOutletContext, useNavigate } from "react-router-dom"
import {handleSignUp} from '../auth/signup'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\+?[\d\s\-().]{7,20}$/

function validate(values) {
  const errors = {}

  if (!values.companyName?.trim())
    errors.companyName = "Company name is required."

  if (!values.companyEmail?.trim())
    errors.companyEmail = "Company email is required."
  else if (!EMAIL_REGEX.test(values.companyEmail))
    errors.companyEmail = "Enter a valid email address."

  if (!values.companyPhone?.trim())
    errors.companyPhone = "Phone number is required."
  else if (!PHONE_REGEX.test(values.companyPhone))
    errors.companyPhone = "Enter a valid phone number."

  if (!values.password) errors.password = "Password is required."
  else if (values.password.length < 8)
    errors.password = "Password must be at least 8 characters."

  if (!values.companyAddress?.trim())
    errors.companyAddress = "Company address is required."

  return errors
}

function RegisterPageCompany() {
  const navigate = useNavigate()
  const { submitRef } = useOutletContext()
  const [userDetails, setUserDetails] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    password: "",
    companyAddress: "",
    licenseNumber: "",
    description: "",
    profilePicture: null,
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
    handleSignUp(userDetails.companyEmail, userDetails.password, navigate, 'Company')
  }
  submitRef.current = handleSubmit

  return (
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="company-name">Company Name</FieldLabel>
          <Input
            id="company-name"
            autoComplete="organization"
            placeholder="Company Name"
            onChange={handleChange("companyName")}
          />
          {errors.companyName && <FieldError>{errors.companyName}</FieldError>}
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="company-email">Company Email</FieldLabel>
          <Input
            id="company-email"
            type="email"
            autoComplete="email"
            placeholder="company@example.com"
            onChange={handleChange("companyEmail")}
          />
          {errors.companyEmail && (
            <FieldError>{errors.companyEmail}</FieldError>
          )}
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="company-phone">Company Phone Number</FieldLabel>
          <Input
            id="company-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            onChange={handleChange("companyPhone")}
          />
          {errors.companyPhone && (
            <FieldError>{errors.companyPhone}</FieldError>
          )}
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
        <Field>
          <FieldLabel htmlFor="company-address">Company Address</FieldLabel>
          <Input
            id="company-address"
            autoComplete="street-address"
            placeholder="Company Address"
            onChange={handleChange("companyAddress")}
          />
          {errors.companyAddress && (
            <FieldError>{errors.companyAddress}</FieldError>
          )}
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="license-number">
            License Number (optional)
          </FieldLabel>
          <Input
            id="license-number"
            autoComplete="off"
            placeholder="License Number"
            onChange={handleChange("licenseNumber")}
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <Textarea
            id="description"
            placeholder="Tell us about your company…"
            onChange={handleChange("description")}
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="profile-picture">Profile Picture</FieldLabel>
        <ProfilePicture onFileSelect={handleProfilePicture} />
      </FieldGroup>
    </FieldSet>
  )
}

export default RegisterPageCompany
