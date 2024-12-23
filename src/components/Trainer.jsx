import { columns } from "@/components/StudentTable/column";
import { StudentTable } from "@/components/StudentTable/data-table";
import { Button } from "@/components/ui/button";
import { studentData } from "@/lib/data";


export default function Trainer() {
    return (
        <div className="">
            {/* max-w-screen-xl mx-auto */}
            <h1 className="title-font text-center sm:text-4xl text-3xl py-10 mb-4 font-bold text-gray-900">
               Students List
            </h1>
            <div className="p-5 ">
                <StudentTable columns={columns} data={studentData} />
            </div>
            {/* <Button className="max-sm ">Login </Button> */}
        </div>
    );
}