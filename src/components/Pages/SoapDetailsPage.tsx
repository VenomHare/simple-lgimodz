"use client";
import { useParams } from "next/navigation"
import CustomizeBlock from "../CustomizeBlock";
import LargeLandscapeCarousel from "../SoapComponents/LargeLandscapeCarousel";
import { Circle, Dot, Star } from "lucide-react";
import { Button } from "../ui/button";
import Footer from "../Footer";

export default function () {

    const params = useParams<{ soapid: string }>();

    return (<>
        <div className="w-full flex justify-center">
            <div className="w-[85svw] lg:w-[75svw] xl:w-[60svw] mt-6 flex flex-col items-center">

                <div className="w-full text-center">
                    <h1 className="text-4xl font-semibold mt-5 lg:mt-10 font-playwrite">Brown Soap</h1>
                </div>
                <LargeLandscapeCarousel />
                <div className="w-full flex flex-col-reverse md:flex-row justify-around my-5 gap-10 md:gap-0">
                    <div className="w-full md:w-2/3 flex flex-col items-center">
                        <h3 className="text-2xl font-semibold flex items-center "><Dot /> Details <Dot /></h3>
                        <div className="py-4 w-[80%] flex flex-col gap-2 font-schibsted">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas numquam tempora iste reiciendis! Architecto enim vitae ratione, veniam, est ea eos et nisi, impedit officia quod reiciendis! Quaerat sapiente amet impedit nobis ut necessitatibus labore.</p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur repudiandae aliquid ratione autem reprehenderit quod aspernatur dolores animi itaque laborum? Commodi dolores excepturi officia mollitia itaque dolorem ipsam earum, ea labore necessitatibus, voluptate iusto perspiciatis sunt dicta natus fugiat voluptatum. Unde iure, corporis nobis labore ducimus consequuntur tempora reiciendis totam? Ad corrupti saepe consequuntur numquam sit incidunt dolor nostrum earum nulla harum, veritatis ipsam quam architecto ex eos dicta distinctio consectetur facere deserunt, natus repellat neque reiciendis. Repellendus aspernatur dolorum eius, ipsa consectetur fuga illum, natus perspiciatis voluptate tempora iusto vitae temporibus quasi ipsum! Itaque excepturi non iusto perspiciatis quae.
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-start gap-10 mt-[10svh]">
                        <div className="p-3 border-2 border-primary/40 bg-secondary rounded font-schibsted text-xl">
                            Price: 75
                        </div>
                        <Button className="w-[80%] text-xl" size={"lg"} >Buy Now</Button>
                    </div>
                </div>
                <CustomizeBlock />
            </div>
        </div>
        <Footer/>
    </>)
}   