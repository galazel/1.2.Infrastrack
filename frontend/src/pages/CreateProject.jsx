import React, { useState } from "react"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ProjectFiles from "@/components/ProjectFiles"
import FileUpload from "../components/Upload"

// ─── helpers ────────────────────────────────────────────────────────────────

function required(val) {
  return !val || String(val).trim() === "" ? "This field is required." : null
}
function email(val) {
  if (required(val)) return required(val)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? null : "Enter a valid email."
}
function phone(val) {
  if (required(val)) return required(val)
  return /^[+\d\s\-()]{7,20}$/.test(val) ? null : "Enter a valid contact number."
}
function positiveNum(val) {
  if (required(val)) return required(val)
  return Number(val) > 0 ? null : "Must be greater than 0."
}
function nonNegNum(val) {
  if (required(val)) return required(val)
  return Number(val) >= 0 ? null : "Must be 0 or greater."
}
function dateOrder(start, end) {
  if (!start || !end) return null
  return new Date(start) <= new Date(end) ? null : "End date must be after start date."
}

// ─── CustomerDetails ─────────────────────────────────────────────────────────

function CustomerDetails({ setPage, setDetails, details }) {
  const [local, setLocal] = useState({
    firstName: "", lastName: "", email: "", contactNumber: "", address: "",
  })
  const [errors, setErrors] = useState({})

  function change(key, val) {
    setLocal((p) => ({ ...p, [key]: val }))
    setErrors((p) => ({ ...p, [key]: null }))
    setDetails?.((p) => ({ ...p, [key]: val }))
  }

  function validate() {
    const e = {
      firstName:     required(local.firstName),
      lastName:      required(local.lastName),
      email:         email(local.email),
      contactNumber: phone(local.contactNumber),
      address:       required(local.address),
    }
    setErrors(e)
    return Object.values(e).every((v) => !v)
  }

  CustomerDetails._validate = validate
  return (
    <div className="flex flex-col gap-5">
      <h3>CUSTOMER DETAILS</h3>

      <FieldSet>
        <FieldLegend>Profile</FieldLegend>

        <FieldGroup>
          <Field>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <FieldLabel htmlFor="first-name">First Name</FieldLabel>
                <Input
                  id="first-name"
                  placeholder="First"
                  aria-invalid={!!errors.firstName}
                  value={local.firstName}
                  onChange={(e) => change("firstName", e.target.value)}
                />
                {errors.firstName && <FieldError>{errors.firstName}</FieldError>}
              </div>
              <div>
                <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
                <Input
                  id="last-name"
                  placeholder="Last"
                  aria-invalid={!!errors.lastName}
                  value={local.lastName}
                  onChange={(e) => change("lastName", e.target.value)}
                />
                {errors.lastName && <FieldError>{errors.lastName}</FieldError>}
              </div>
            </div>
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              value={local.email}
              onChange={(e) => change("email", e.target.value)}
            />
            {errors.email && <FieldError>{errors.email}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="contact-number">Contact Number</FieldLabel>
            <Input
              id="contact-number"
              type="tel"
              placeholder="+63 900 000 0000"
              aria-invalid={!!errors.contactNumber}
              value={local.contactNumber}
              onChange={(e) => change("contactNumber", e.target.value)}
            />
            {errors.contactNumber && <FieldError>{errors.contactNumber}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="customer-address">Address</FieldLabel>
            <Input
              id="customer-address"
              placeholder="123 Main St, City"
              aria-invalid={!!errors.address}
              value={local.address}
              onChange={(e) => change("address", e.target.value)}
            />
            {errors.address && <FieldError>{errors.address}</FieldError>}
          </Field>
        </FieldGroup>
      </FieldSet>

     
    </div>
  )
}

// ─── ProjectDetails ───────────────────────────────────────────────────────────

function ProjectDetails({ setPage, setDetails }) {
  const [local, setLocal] = useState({
    projectName: "", projectType: "", projectAddress: "",
    numFloors: "", lotArea: "", floorArea: "",
    projectDescription: "", startDate: "", endDate: "", budget: "",
  })
  const [errors, setErrors] = useState({})

  function change(key, val) {
    setLocal((p) => ({ ...p, [key]: val }))
    setErrors((p) => ({ ...p, [key]: null }))
    setDetails?.((p) => ({ ...p, [key]: val }))
  }

  function validate() {
    const e = {
      projectName:        required(local.projectName),
      projectType:        required(local.projectType),
      projectAddress:     required(local.projectAddress),
      numFloors:          positiveNum(local.numFloors),
      lotArea:            nonNegNum(local.lotArea),
      floorArea:          nonNegNum(local.floorArea),
      projectDescription: required(local.projectDescription),
      startDate:          required(local.startDate),
      endDate:            required(local.endDate) ?? dateOrder(local.startDate, local.endDate),
      budget:             positiveNum(local.budget),
    }
    setErrors(e)
    return Object.values(e).every((v) => !v)
  }

  ProjectDetails._validate = validate

  return (
    <div className="flex flex-col gap-5">
      <h3>PROJECT DETAILS</h3>

      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="project-name">Project Name</FieldLabel>
            <Input
              id="project-name"
              placeholder="e.g. Villa Construction Phase 1"
              aria-invalid={!!errors.projectName}
              value={local.projectName}
              onChange={(e) => change("projectName", e.target.value)}
            />
            {errors.projectName && <FieldError>{errors.projectName}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="project-type">
              Project Type (Residential / Commercial / Renovation / etc.)
            </FieldLabel>
            <Input
              id="project-type"
              placeholder="e.g. Residential"
              aria-invalid={!!errors.projectType}
              value={local.projectType}
              onChange={(e) => change("projectType", e.target.value)}
            />
            {errors.projectType && <FieldError>{errors.projectType}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="project-address">Project Address / Location</FieldLabel>
            <Input
              id="project-address"
              placeholder="123 Main St, City"
              aria-invalid={!!errors.projectAddress}
              value={local.projectAddress}
              onChange={(e) => change("projectAddress", e.target.value)}
            />
            {errors.projectAddress && <FieldError>{errors.projectAddress}</FieldError>}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLegend>Project Specifications</FieldLegend>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <FieldLabel htmlFor="num-floors">No. of Floors</FieldLabel>
                <Input
                  id="num-floors"
                  type="number"
                  min={1}
                  placeholder="e.g. 2"
                  aria-invalid={!!errors.numFloors}
                  value={local.numFloors}
                  onChange={(e) => change("numFloors", e.target.value)}
                />
                {errors.numFloors && <FieldError>{errors.numFloors}</FieldError>}
              </div>
              <div>
                <FieldLabel htmlFor="lot-area">Lot Area (sqm)</FieldLabel>
                <Input
                  id="lot-area"
                  type="number"
                  min={0}
                  placeholder="e.g. 150"
                  aria-invalid={!!errors.lotArea}
                  value={local.lotArea}
                  onChange={(e) => change("lotArea", e.target.value)}
                />
                {errors.lotArea && <FieldError>{errors.lotArea}</FieldError>}
              </div>
              <div>
                <FieldLabel htmlFor="floor-area">Floor Area (sqm)</FieldLabel>
                <Input
                  id="floor-area"
                  type="number"
                  min={0}
                  placeholder="e.g. 120"
                  aria-invalid={!!errors.floorArea}
                  value={local.floorArea}
                  onChange={(e) => change("floorArea", e.target.value)}
                />
                {errors.floorArea && <FieldError>{errors.floorArea}</FieldError>}
              </div>
            </div>
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="project-description">Project Description</FieldLabel>
            <Textarea
              id="project-description"
              placeholder="Describe the project scope, goals, and any relevant details…"
              aria-invalid={!!errors.projectDescription}
              value={local.projectDescription}
              onChange={(e) => change("projectDescription", e.target.value)}
            />
            {errors.projectDescription && (
              <FieldError>{errors.projectDescription}</FieldError>
            )}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <FieldLegend>Timeline</FieldLegend>
          <Field>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <FieldLabel htmlFor="start-date">Start Date</FieldLabel>
                <Input
                  id="start-date"
                  type="date"
                  aria-invalid={!!errors.startDate}
                  value={local.startDate}
                  onChange={(e) => change("startDate", e.target.value)}
                />
                {errors.startDate && <FieldError>{errors.startDate}</FieldError>}
              </div>
              <div>
                <FieldLabel htmlFor="end-date">Estimated Completion Date</FieldLabel>
                <Input
                  id="end-date"
                  type="date"
                  aria-invalid={!!errors.endDate}
                  value={local.endDate}
                  onChange={(e) => change("endDate", e.target.value)}
                />
                {errors.endDate && <FieldError>{errors.endDate}</FieldError>}
              </div>
            </div>
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="budget">Budget (₱)</FieldLabel>
            <Input
              id="budget"
              type="number"
              min={0}
              placeholder="e.g. 5000000"
              aria-invalid={!!errors.budget}
              value={local.budget}
              onChange={(e) => change("budget", e.target.value)}
            />
            {errors.budget && <FieldError>{errors.budget}</FieldError>}
          </Field>
        </FieldGroup>
      </FieldSet>

      
    </div>
  )
}

// ─── ProjectFilesStep ─────────────────────────────────────────────────────────

function ProjectFilesStep({ setPage, handleSubmit, setDetails }) {
  return (
    <div className="flex flex-col gap-5">
      <h3>PROJECT FILES</h3>
      <FileUpload/>
      <ProjectFiles
        setPage={setPage}
        handleSubmit={handleSubmit}
        setDetails={setDetails}
      />
      <button className="button-primary">Create Project</button>
    
    </div>
  )
}

export { CustomerDetails, ProjectDetails,  ProjectFilesStep }