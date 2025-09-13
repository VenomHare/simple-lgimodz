import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const discordInviteLink = "https://discord.gg/wMrBMKzYFX" // Replace with your actual Discord link
export default function () {
    return (<>
        <div className="w-full lg:w-[90%] flex flex-col items-center md:flex-row-reverse gap-4 mt-15 border-3 rounded-xl py-15 md:py-10 px-10 ">
            <div className="w-[80%] h-[25svh] md:w-[75%] lg:w-[50%] xl:w-1/2 mx-3">
                <Image width={215} height={215} src="/hero.webp" alt="Custom Patch" className="w-full h-full object-contain object-center " />
            </div>
            <div className="w-full flex flex-col gap-6 ">
                <div className="w-full text-center md:text-left md:w-8/12 text-4xl font-semibold font-schibsted rounded-lg ">Create a Custom Patch</div>
                <div className="w-full text-center md:text-left md:w-8/12 text-md text-gray-400 rounded-lg">Design your own personalized patch — made just for you.</div>
                <div className={`w-full items-center md:items-start gap-4 md:w-8/12 h-[5svh] rounded-lg text-3xl font-semibold font-mono flex flex-col md:flex-row justify-between `}>
                    <Link href={"mailto:lgimodsofficial@gmail.com"} target="blank">
                        <Button className="shadow shadow-primary" variant={"link"}>Contact Us</Button>
                    </Link>
                </div>
            </div>
        </div>
    </>)
}