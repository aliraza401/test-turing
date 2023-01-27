import { Button } from "@mui/material"
import { DataGrid, GridColumns } from "@mui/x-data-grid"
import { intervalToDuration } from "date-fns"
import React, { FC, useMemo, useState } from "react"
import { Call } from "../../services/calls"

import { CallsListProps } from "./CallsList.interface";

const VISIBLE_FIELDS: (keyof Call)[] = [
  "call_type",
  "direction",
  "duration",
  "from",
  "to",
  "via",
  "created_at",
  "is_archived",
  "notes",
]

export const PAGESIZE = [10];

export const CallsList: FC<CallsListProps> = (props) => {
  const { onEdit, onRowClick, className, rowsPerPageOptions = PAGESIZE, ...rest } = props

  const [page, setPage] = useState(props.page ?? 0)
  const [pageSize, setPageSize] = useState(rowsPerPageOptions[0])

  const col: GridColumns<Call> = useMemo(
    () => [
      {
        headerClassName: "bg-slate-200 uppercase font-bold",
        field: "call_type",
        headerName: "Call Type",
        renderCell: ({ value, row }) => value,
        sortable: true,
        flex: 1,
        
      },
      {
        headerClassName: "bg-slate-200 uppercase font-bold",
        field: "direction",
        cellClassName: "text-primary",
        headerName: "Direction",
        sortable: true,
        flex: 1,
        
      },
      {
        headerClassName: "bg-slate-200 uppercase font-bold",
        field: "duration",
        renderCell: ({ value, row }) => {
          const duration = intervalToDuration({ start: 0, end: value * 1000 })
          let str = ""
          if (duration.years) str += ` ${duration.years} year${duration.years > 1 ? "s" : ""}`
          if (duration.days) str += ` ${duration.days} day${duration.days > 1 ? "s" : ""}`
          if (duration.hours) str += ` ${duration.hours} hour${duration.hours > 1 ? "s" : ""}`
          if (duration.minutes)
            str += ` ${duration.minutes} minute${duration.minutes > 1 ? "s" : ""}`
          if (duration.months) str += ` ${duration.months} month${duration.months > 1 ? "s" : ""}`
          return (
            <div className="whitespace-normal">
              <div>{str}</div>
              <div className="text-primary-300">({value} seconds)</div>
            </div>
          )
        },
        headerName: "Duration",
        sortable: true,
        flex: 1,
        
      },
      {
        headerClassName: "bg-slate-200 uppercase font-bold",
        field: "from",
        headerName: "From",
        sortable: true,
        flex: 1,
        
      },
      {
        headerClassName: "bg-slate-200 uppercase font-bold",
        field: "to",
        headerName: "To",
        sortable: true,
        flex: 1,
        
      },
      {
        headerClassName: "bg-slate-200 uppercase font-bold",
        field: "via",
        headerName: "Via",
        sortable: true,
        flex: 1,
        
      },
      {
        headerClassName: "bg-slate-200 uppercase font-bold",
        field: "created_at",
        headerName: "Created At",
        sortable: true,
        renderCell: ({ value }) => new Date(value).toLocaleDateString(),
        flex: 1,
        
      },
      {
        headerClassName: "bg-slate-200 uppercase font-bold",
        field: "is_archived",
        headerName: "Status",
        renderCell: ({ value, row }) => {
          if (value)
            return (
              <Button variant="contained" color="primary" disabled >
                Archived
              </Button>
            )

          return (
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              UnArchived
            </Button>
          )
        },
        sortable: true,
        flex: 1,
        
      },
      {
        headerClassName: "bg-slate-200 uppercase font-bold",
        field: "notes",
        headerName: "Actions",
        renderCell: ({ row }) => (
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation()
              onEdit?.(row)
            }}
          >
            Add Note
          </Button>
        ),
        sortable: false,
        flex: 1,
        filterable: false,
      },
    ],
    [onEdit]
  )

  const columns = React.useMemo(
    () => col.filter((column) => VISIBLE_FIELDS.includes(column.field as keyof Call)),
    [col]
  )

  return (
    <div className={className}>
      <DataGrid<Call>
        autoHeight
        isRowSelectable={() => false}
        onRowClick={({ row }) => onRowClick?.(row)}
        componentsProps={{
          toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 500 } },
        }}
        pageSize={pageSize}
        page={page}
        paginationMode="server"
        rowsPerPageOptions={PAGESIZE}
        pagination
        {...rest}
        onPageChange={(page) => {
          setPage(page)
          console.log({ page, pageSize });
          props.onPageChange?.(page, pageSize)
        }}
        columns={columns}
      />
    </div>
  )
}
