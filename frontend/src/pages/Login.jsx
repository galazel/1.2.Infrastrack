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
import { Button } from "@/components/ui/button"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { handleSignIn } from "../auth/signin"
import { handleResetPasswordRequest } from "../auth/password"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate({ email, password }) {
  const errors = {}
  if (!email.trim()) errors.email = "Email is required."
  else if (!EMAIL_REGEX.test(email))
    errors.email = "Enter a valid email address."

  if (!password) errors.password = "Password is required."
  else if (password.length < 8)
    errors.password = "Password must be at least 8 characters."

  return errors
}

function LoginClient() {
  const [values, setValues] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const navigate = useNavigate()

  const handleChange = (field) => (e) => {
    const next = { ...values, [field]: e.target.value }
    setValues(next)
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(next)[field] }))
    }
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({ ...prev, [field]: validate(values)[field] }))
  }

  const handleSubmit = async () => {
    setTouched({ email: true, password: true })
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSubmitting(true)
    setSubmitError("")
    try {
      await handleSignIn(values.email, values.password, navigate)
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass = (field) =>
    touched[field] && errors[field] ? "border-red-400" : "border-gray-300"

  return (
    <div className="flex h-full w-full flex-col justify-between p-10">
      <div className="invisible">fdsa</div>
      <div>
        <FieldSet>
          <FieldLegend>
            <h2>
              {" "}
              Log into <span>INFRASTRACK</span>{" "}
            </h2>
          </FieldLegend>
          <FieldDescription>
            Sign in to continue to your account.
          </FieldDescription>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                className={fieldClass("email")}
              />
              {touched.email && errors.email && (
                <FieldError>{errors.email}</FieldError>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                className={fieldClass("password")}
              />
              {touched.password && errors.password && (
                <FieldError>{errors.password}</FieldError>
              )}
            </Field>

            <Field>
              <FieldDescription>
                Forgot your password?{" "}
                <Link
                  to="code"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Reset Password
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>

          {submitError && (
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
              {submitError}
            </p>
          )}

          <FieldGroup>
            <button
              className="button-primary"
              variant="outline"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? "Signing in…" : "Sign Up"}
            </button>
          </FieldGroup>
        </FieldSet>
      </div>

      <Button variant="outline" onClick={() => navigate("/setup")}>
        Create an Account
      </Button>
    </div>
  )
}

export default LoginClient
