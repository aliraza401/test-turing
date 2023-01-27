import React from 'react';
import { LoaderProps } from "./Home.interfaces";

import { Call, useGetCallsQuery, useAddNoteMutation } from "./../../services/calls";

import { CallsList } from './../../components/CallsList';
import { Detail } from './../../components/Detail';
import toast from "react-hot-toast"
// import { AddNote } from './../../components/AddNote';

export const Home: React.FC<LoaderProps> = (props) => {
  React.useEffect(() => { }, []);
  const [initCalls, setInitCalls] = React.useState({ offset: 0, limit: 10 });
  const [selected, setSelected] = React.useState<(Call & { edit?: boolean }) | undefined>(undefined)
  const [addNote] = useAddNoteMutation()

  const { data, isFetching, isLoading, isError } = useGetCallsQuery(initCalls);

  const onAddNote = async (value: string, call: Call) => {
    if (call)
      toast
        .promise(addNote({ content: value, id: call?.id }).unwrap(), {
          error: (e) => (e ? (Array.isArray(e) ? e[0].message : e.message) : 'ERROR'),
          loading: 'LOADING',
          success: () => "Successful Note Added",
        })
        .then(() => setSelected(undefined))
  }
  return (
    <div className={`container mt-24`}>
      <CallsList
        className="flex-grow"
        onEdit={(value) => setSelected({ ...value, edit: true })}
        onRowClick={(value) => setSelected({ ...value, edit: false })}
        loading={isFetching}
        rows={data?.nodes ?? []}
        onPageChange={(page, pageSize) => setInitCalls({ limit: pageSize, offset: page * pageSize })}
        rowCount={data?.totalCount}
      />

      <Detail call={selected} onCancel={() => setSelected(undefined)} onAddNote={onAddNote} />
      {/* <AddNote call={selected} onCancel={() => setSelected(undefined)}  /> */}
    </div>
  );
};
