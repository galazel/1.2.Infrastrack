import React from "react"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import ProfilePicture from "@/components/ProfilePicture"
import { Textarea } from "@/components/ui/textarea"

function RegisterPageCompany() {
  return (
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="first-name">Company Name</FieldLabel>
          <Input
            id="first-name"
            autoComplete="off"
            placeholder="Company Name"
          />
        </Field>
      </FieldGroup>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Company Email</FieldLabel>
          <Input id="username" autoComplete="off" placeholder="Company Email" />
        </Field>
      </FieldGroup>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Company Phone Number</FieldLabel>
          <Input
            id="email"
            autoComplete="off"
            placeholder="Company Phone Number"
          />
        </Field>
      </FieldGroup>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            autoComplete="off"
            placeholder="Password"
          />
        </Field>
      </FieldGroup>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="company-address">Company Address</FieldLabel>
          <Input
            id="company-address"
            autoComplete="off"
            placeholder="Company Address"
          />
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
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="project-code">Description</FieldLabel>
        <Textarea />
      </FieldGroup>
      <FieldGroup>
        <FieldLabel htmlFor="profile-picture">Profile Picture</FieldLabel>
        <ProfilePicture />
      </FieldGroup>
    </FieldSet>
  )
}

export default RegisterPageCompany
