import { Call } from "../../services/calls";

export interface DetailProps {
  call?: Call & { edit?: boolean };
  onCancel: (value?: Call) => void;
  onAddNote: (value: string, call: Call & { edit?: boolean | undefined; }) => void
}

export interface FormState {
  content: string
}
