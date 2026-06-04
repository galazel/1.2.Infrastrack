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
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


function LoginClient() {
  const navigate = useNavigate();
  const handleSetupClick = () => {
    navigate("/setup");
  };
  return (
    <div className="flex flex-col justify-between  h-full   w-full p-10">
      <div className="invisible">fdsa</div>
      <div>
        <FieldSet>
          <FieldLegend className ='text-5xl'>Log into INFRASTRACK </FieldLegend>
          <FieldDescription>
            Sign in to continue to your account.{" "}
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" autoComplete="off" placeholder="Evil Rabbit" />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" autoComplete="off" placeholder="••••••••" />
            </Field>
            <Field>
              <FieldDescription>
                Forgot your password?{" "}
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Reset Password
                </a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
      <Button
        className="w-full h-13 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
        variant="outline"
        onClick={handleSetupClick}
      >
        Create an Account
      </Button>
    </div>
  );
}

export default LoginClient;
