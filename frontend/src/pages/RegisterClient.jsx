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

function RegisterClient() {
  return (
    <FieldSet>
      <FieldGroup>
        <Field>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <FieldLabel htmlFor="first-name">Name</FieldLabel>
              <Input id="first-name" autoComplete="off" placeholder="First" />
            </div>
            <div>
              <FieldLabel htmlFor="last-name" className="invisible">
                Full name
              </FieldLabel>
              <Input id="last-name" autoComplete="off" placeholder="Last" />
            </div>
          </div>
        </Field>
      </FieldGroup>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" autoComplete="off" placeholder="Username" />
        </Field>
      </FieldGroup>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" autoComplete="off" placeholder="Email" />
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
        <FieldLabel htmlFor="profile-picture">Profile Picture</FieldLabel>
        <ProfilePicture />
      </FieldGroup>
      <FieldGroup>
        <FieldLabel htmlFor="project-code">Project Code</FieldLabel>
        <Input id="project-code" autoComplete="off" placeholder="Project Code" />
      </FieldGroup>
    </FieldSet>
  )
}

export default RegisterClient
