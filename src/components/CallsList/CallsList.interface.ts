import { DataGridProps } from "@mui/x-data-grid"
import { Call } from "../../services/calls"

export interface CallsListProps
  extends Omit<
    DataGridProps<Call>,
    "onRowClick" | "onPageChange" | "onPageSizeChange" | "columns"
  > {
  className?: string
  onEdit?: (value: Call) => void
  onRowClick?: (value: Call) => void
  onPageChange?: (page: number, pageSize: number) => void
}
