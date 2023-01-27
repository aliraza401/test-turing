import { AccountCircle, Lock } from "@mui/icons-material"
import { Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { InputField } from "../../components/InputField"
import { useLoginMutation } from "../../services/user"
import { FormState, LoginProps } from "./Login.interfaces"

export const Login: React.FC<LoginProps> = (props) => {
  const [login] = useLoginMutation()

  const { control, handleSubmit } = useForm<FormState>({
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = async (value: FormState) => {
    toast.promise(login(value).unwrap(), {
      error: (e) => (e ? (Array.isArray(e) ? e[0].message : e.message) : 'ERR'),
      loading: "Loading",
      success: () => "User Login Success",
    })
  }

  return (
    <main className="mt-60 relative max-w-lg w-screen h-screen container p-8 space-y-3 mx-auto ">
      <form className="space-y-5 pt-3" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          control={control}
          name="username"
          label="* User Name"
        >
          <TextField
            size="small"
            type="text"
            fullWidth
            placeholder="User name"
            InputProps={{
              startAdornment: <AccountCircle />,
            }}
          />
        </InputField>

        <InputField
          control={control}
          name="password"
          label="* Password"
          rules={{
            required: { message: "Value is Required", value: true },
            minLength: { message: "Password Length should be 8", value: 8 },
          }}
        >
          <TextField
            size="small"
            fullWidth
            placeholder="Password"
            InputProps={{
              startAdornment: <Lock />
            }}
          />
        </InputField>
        <div className="text-center">
          <Button type="submit" variant="contained" className="">
            Log In
          </Button>
        </div>
      </form>
    </main>
  )
}
