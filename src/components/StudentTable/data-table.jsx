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
        <div className="max-w-screen-xl mx-auto rounded-md border ">
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

                <select className="flex justify-center items-center gap-2 border rounded px-3 bg-grey-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm text-grey "

                    value={selectedColumn}
                    onChange={(e) => setSelectedColumn(e.target.value)
                    }
                >
                    <option value="email">Email</option>
                    <option value="section">Section</option>
                    <option value="batch">Batch</option>
                </select>
            </div>
            <div className="rounded-md border">

                <div className="table-container rounded-md border ">
                    <Table className="responsive-table ">
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead
                                                className="bg-gray-200"
                                                key={header.id}>
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
                        <TableBody >
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        className="hover:bg-gray-100"
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
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
        </div>
    )
}