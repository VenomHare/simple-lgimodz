import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function () {
    return (<>
        <div className="w-full lg:w-[90%] flex flex-col items-center md:flex-row-reverse gap-4 mt-15 border-0 rounded-xl py-15 md:py-10 px-10 ">
            <div className="w-full">
                <Carousel className="w-full">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1 flex justify-center">
                                <img src={"/brown_flower.png"} alt={"thumbnail"} className="w-full h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl object-contain drop-shadow-xl drop-shadow-secondary/50"></img>
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div className="p-1 flex justify-center">
                                <img src={"/brown_flower.png"} alt={"thumbnail"} className="w-full h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl object-contain drop-shadow-xl drop-shadow-secondary/50"></img>
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div className="p-1 flex justify-center">
                                <img src={"/brown_flower.png"} alt={"thumbnail"} className="w-full h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl object-contain drop-shadow-xl drop-shadow-secondary/50"></img>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    </>)
}