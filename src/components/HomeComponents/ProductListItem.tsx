import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

interface Props {
    loading?: boolean;
    imageURL: string;
    title: string;
    description: string;
    price: number;
    left?: boolean;
}


export default function ({ loading, imageURL, title, description, price, left=true }: Props) {

    // if (!imageURL || !title ) loading = true;

    // if (loading) {
    //     return (<>
    //         <div className="w-full lg:w-[75%] flex flex-col md:flex-row-reverse gap-4 mt-15">
    //             <div className="w-full h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl skeleton"></div>
    //             <div className="w-full flex flex-col items-start gap-4">
    //                 <div className="w-[95%] h-[3.5svh] rounded-lg skeleton"></div>
    //                 <div className="w-[75%] h-[2.5svh] rounded-lg skeleton"></div>
    //                 <div className="w-8/12 h-[5svh] rounded-lg skeleton"></div>
    //             </div>
    //         </div>
    //     </>)
    // }

    return (<>
        <div className={`w-full lg:w-[90%] flex flex-col items-center ${left ? " md:flex-row-reverse ":" md:flex-row " } gap-4 mt-15 border-3 rounded-xl py-15 md:py-10 px-10`}>
            {/* <div className="w-[80%] h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl flex flex-col items-center object-contain drop-shadow-xl drop-shadow-secondary/50"> */}
                <Carousel className="w-[80%] h-[25svh] md:w-[75%] lg:w-[50%] xl:w-1/2 mx-3">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1 flex justify-center">
                                <img src={imageURL} alt={"thumbnail"} className="w-full h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl object-contain drop-shadow-xl drop-shadow-secondary/50"></img>
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div className="p-1 flex justify-center">
                                <img src={imageURL} alt={"thumbnail"} className="w-full h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl object-contain drop-shadow-xl drop-shadow-secondary/50"></img>
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div className="p-1 flex justify-center">
                                <img src={imageURL} alt={"thumbnail"} className="w-full h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl object-contain drop-shadow-xl drop-shadow-secondary/50"></img>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            {/* </div> */}
            <div className={`w-full flex flex-col gap-4 ${left ?" items-start" :" items-end "}`}>
                <div className="w-full text-center md:text-left md:w-8/12 text-4xl font-semibold font-schibsted rounded-lg ">{title}</div>
                <div className="w-full text-center md:text-left md:w-8/12 text-md text-gray-400 rounded-lg">{description}</div>
                <div className={`w-full items-center md:items-start gap-4 md:w-8/12 h-[5svh] rounded-lg text-3xl font-semibold font-mono flex flex-col ${left? "md:flex-row-reverse" : "md:flex-row"} justify-between `}>
                    <div>&#x20B9;{price}</div>
                    <Button className="">View Detials</Button>
                </div>
            </div>
        </div>
    </>)
}