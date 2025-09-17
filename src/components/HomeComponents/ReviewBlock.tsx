import Image from "next/image";

interface Props {
    pfp?: string;
    name: string;
    title?: string;
    content: string;
}

export default function ReviewBlock({ content, name, title, pfp }: Props) {
    return (<>
        <div className="rounded-2xl w-full min-h-[15svh] h-fit border-2 border-primary/40 shadow-md shadow-secondary overflow-clip">
            <div className="w-full h-full flex flex-col p-2">
                <div className="flex justify-start gap-4 items-center m-3">

                    <div className="w-10 h-10 rounded-full overflow-clip">
                        {
                            pfp ?
                                <Image src={pfp} alt="Profile Picture" className="w-full h-full object-center object-contain" width={256} height={256} />
                                :
                                <div className="w-full h-full flex items-center justify-center bg-green-800 font-semibold">
                                    {name.split(" ").map((n, i) => i < 2 && n[0]).join("")}
                                </div>
                        }
                    </div>
                    <div className="flex flex-col ">
                        <h4 className="font-schibsted font-semibold">{name}</h4>
                        <p className="font-sans font-extralight text-gray-300">{title}</p>
                    </div>

                </div>

                <div className="p-3 px-4 font-schibsted font-semibold italic">
                    {content}
                </div>
            </div>
        </div>
    </>)
}