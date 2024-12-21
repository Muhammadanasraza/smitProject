import { columns } from "@/components/StudentTable/column";
import { StudentTable } from "@/components/StudentTable/data-table";
import { Button } from "@/components/ui/button";
import { studentData } from "@/lib/data";


export default function Trainer() {
    return (
        <div className="container mt-5">
            <h1 className="flex justify-center font-bold p-10 text-3xl underline">Student Info:</h1>
            <div className="p-5 ">
                <StudentTable columns={columns} data={studentData}  />
            </div>
            {/* <Button className="max-sm ">Login </Button> */}
        </div>
    );
}