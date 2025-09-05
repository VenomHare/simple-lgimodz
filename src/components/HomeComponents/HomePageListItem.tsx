import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface Props{
    title: string;
    description: string;
    Icon: LucideIcon
}

export default function({title, description, Icon}:Props){
    return (<>
        <div className="flex justify-start gap-4 items-start mt-4">
            <Button variant={"outline"} size={"icon"} className="font-bold">
                <Icon className="text-primary" size={"7rem"} />
            </Button>
            <div className="flex flex-col">
                <div className="text-lg font-schibsted ">{title}</div>
                <div className="text-gray-600 text-sm font-schibsted ">{description}</div>
            </div>
        </div>
    </>)
}