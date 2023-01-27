import { LabelHTMLAttributes, ReactElement } from "react"
import { ControllerRenderProps, FieldError, FieldValues, Path, UseControllerProps } from "react-hook-form"

type ExtraElement<ControllerProps extends FieldValues> = (
  values: ControllerRenderProps<ControllerProps, InputFieldProps<ControllerProps>["name"]>
) => ReactElement

export type InputFieldChildren<ControllerProps extends FieldValues> = {
  error?: FieldError
  checked?: ControllerRenderProps["value"]
} & ControllerRenderProps<ControllerProps, Path<ControllerProps>>

export type InputFieldChildrenFn<ControllerProps extends FieldValues> = (
  props: InputFieldChildren<ControllerProps>
) => JSX.Element

export interface InputFieldProps<ControllerProps extends FieldValues = FieldValues>
  extends UseControllerProps<ControllerProps>,
    Omit<LabelHTMLAttributes<HTMLLabelElement>, "defaultValue" | "children"> {
  ExtraElement?: ExtraElement<ControllerProps>
  label?: string | JSX.Element
  infoText?: string | JSX.Element
  onChange?: (value: ControllerRenderProps["value"], ...rest: any) => ControllerRenderProps["value"]
  children: JSX.Element | InputFieldChildrenFn<ControllerProps>
  className?: string
}
