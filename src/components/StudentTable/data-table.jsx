import * as React from "react"

// import {
//     // flexRender,
//     // getCoreRowModel,
//     // useReactTable,
// } from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import {

    // ColumnFiltersState,
    // SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import FloatingLabelInput from "@/components/ui/FloatingLabelInput";




export function StudentTable({
    columns,
    data,
}) {
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [sorting, setSorting] = React.useState([]);
    const [selectedColumn, setSelectedColumn] = React.useState("email");


    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })
    return (
<<<<<<< Updated upstream
        <div className="max-w-screen-xl mx-auto rounded-md border bg-gray-10">
=======
        <div className="max-w-screen-xl  mx-auto rounded-md border p-1 ">

>>>>>>> Stashed changes
            <div className="flex justify-between px-3 py-2 gap-2 ">

                <FloatingLabelInput
                    placeholder={`Filter ${selectedColumn}...`}
                    value={(table.getColumn(selectedColumn)?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                    // table.getColumn(selectedColumn)?.setFilterValue(event.target.value)
                    {
                        const value = event.target.value;
                        table.getColumn(selectedColumn)?.setFilterValue(value || "")
                    }
                    }
                    className="max-w-sm "
                />

                <select className="flex justify-center items-center gap-2 border rounded px-2 bg-gray-200 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm "

                    value={selectedColumn}
                    onChange={(e) => setSelectedColumn(e.target.value)
                    }
                >
                    <option value="email">Email</option>
                    <option value="section">Section</option>
                    <option value="batch">Batch</option>

                </select>
            </div>
<<<<<<< Updated upstream
            <div className="rounded-md border">
                <Table>
=======

            <div className="table-container rounded-md border ">
                <Table className="responsive-table ">
>>>>>>> Stashed changes
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
<<<<<<< Updated upstream
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
=======
                                    {row.getVisibleCells().map((cell) => {
                                        if (cell.column.id === "name") {
                                            return (
                                                <TableCell
                                                    className="flex items-center gap-1"
                                                    key={cell.id}>
                                                    <img
                                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(cell.getValue())}`}
                                                        alt="Avatar"
                                                        className="w-8 h-8 rounded-full"
                                                    />
                                                    {/* Render email */}
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            )
                                        }
                                        return (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>

                                        )
                                    })}
>>>>>>> Stashed changes
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}