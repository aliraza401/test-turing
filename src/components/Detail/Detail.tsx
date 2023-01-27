import { Close } from "@mui/icons-material"
import { Dialog, DialogContent, DialogTitle, IconButton, TextField, Button } from "@mui/material"
import { FC } from "react"

import { DetailProps, FormState } from "./Detail.interface";
import { useForm } from "react-hook-form";
import { InputField } from "../InputField";


export const Detail: FC<DetailProps> = (props) => {
  const { call, onCancel, onAddNote } = props

  const calltype = () => {
    if (!call?.call_type) return;

    if (call.call_type === "answered") return <span className="text-cyan-500">Answered</span>
    if (call.call_type === "missed") return <span className="text-red-500">Missed</span>
    if (call.call_type === "voicemail") return <span className="text-primary">Voice mail</span>
    return call.call_type
  };


  const { control, handleSubmit } = useForm<FormState>({
    defaultValues: {
      content: "",
    },
  })

  return (
    <Dialog
      open={!!call}
      onClose={() => onCancel(call)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle className="flex justify-between items-start">
        <div>
          <div className="text-2xl mb-3">Detaili</div>
          <div className="text-primary"> <span className="font-bold">Call ID : </span> {call?.id}</div>
        </div>
        <IconButton className="text-3xl text-primary" onClick={() => onCancel(call)}>
          <Close />
        </IconButton>
      </DialogTitle>
      <hr />
      <DialogContent>
        <table>
          <tr className="align-baseline">
            <td className="font-bold">Call type</td>
            <td>{calltype()}</td>
          </tr>
          <tr className="align-baseline">
            <td className="font-bold">Duration</td>
            <td>{call?.duration}</td>
          </tr>
          <tr className="align-baseline">
            <td className="font-bold">From</td>
            <td>{call?.from}</td>
          </tr>
          <tr className="align-baseline">
            <td className="font-bold">To</td>
            <td>{call?.to}</td>
          </tr>
          <tr className="align-baseline">
            <td className="font-bold">Via</td>
            <td>{call?.via}</td>
          </tr>
          {!!call?.notes.length && (
            <tr className="align-baseline">
              <td className="font-bold">Notes</td>
              <td className="space-y-3">
                <ul className="list-disc ml-5">
                  {call?.notes.map(({ content }) => (
                    <li>{content}</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </table>


        {
          call?.edit ?
            <form onSubmit={handleSubmit((form) => onAddNote(form.content, call))} className="space-y-10">
              <InputField
                control={control}
                name="content"
                label={<span className="font-bold">Add Note</span>}
                rules={{
                  required: { message: "Value is Required", value: true },
                }}
              >
                <TextField multiline rows={4} placeholder="Add Notes" fullWidth />
              </InputField>
              <Button fullWidth variant="contained" type="submit">
                Add Note
              </Button>
            </form> : null

        }


      </DialogContent>
    </Dialog>
  )
}