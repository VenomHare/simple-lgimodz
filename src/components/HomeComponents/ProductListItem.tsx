import Image from "next/image";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Link from "next/link";

interface Props {
    id: string,
    loading?: boolean
    poster: string
    title: string
    description: string
    left?: boolean
    detailsLink: string
    purchaseLink?: string
    onPurchase?: () => void
    buyButtonLabel?: string
}


export default function ({ loading, id, poster, title, description, left = true, detailsLink, purchaseLink, onPurchase, buyButtonLabel = "Buy Now" }: Props) {


    if (loading) {
        return (<>
            <div className="w-full lg:w-[75%] flex flex-col md:flex-row-reverse gap-4 mt-15">
                <div className="w-full h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl skeleton"></div>
                <div className="w-full flex flex-col items-start gap-4">
                    <div className="w-[95%] h-[3.5svh] rounded-lg skeleton"></div>
                    <div className="w-[75%] h-[2.5svh] rounded-lg skeleton"></div>
                    <div className="w-8/12 h-[5svh] rounded-lg skeleton"></div>
                </div>
            </div>
        </>)
    }

    return (<>
        <div className={`w-full  lg:w-[90%] flex flex-col items-center ${left ? " md:flex-row-reverse " : " md:flex-row "} gap-4 mt-15 border-3 rounded-xl py-15 md:py-10 px-10`}>
            {/* <div className="w-[80%] h-[25svh] md:w-[75%] xl:w-1/2 rounded-3xl flex flex-col items-center object-contain drop-shadow-xl drop-shadow-secondary/50"> */}
            {/* <Carousel className="w-[80%] h-[25svh] md:w-[75%] lg:w-[50%] xl:w-1/2 mx-3">
                <CarouselContent>
                    {
                        Array.from({ length: screenshots_count }).map((_, i) =>
                            <CarouselItem key={i}>
                                <div className="w-full p-1 flex justify-center">
                                    <Image width={960} height={540} src={`/${id}/screenshots/${i+1}.webp`} alt={"thumbnail"} className="w-full h-[25svh] rounded-3xl object-contain drop-shadow-xl drop-shadow-secondary/50"></Image>
                                </div>
                            </CarouselItem>
                        )
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> */}
            <div className="w-full flex justify-center">
                {/* 
                    The shadow may not appear if the parent has overflow:hidden or if the shadow color is not visible against the background.
                    Try removing overflow-hidden from parent containers, or use a more visible shadow color.
                    Also, ensure you are using the correct Tailwind classes.
                */}
                <Image
                    src={poster}
                    alt={"Poster"}
                    width={200}
                    height={300}
                    className="rounded"
                />
            </div>
            {/* </div> */}
            <div className={`w-full h-fit flex flex-col gap-4 ${left ? " items-start" : " items-end "}`}>
                <div className="w-full text-center md:text-left md:w-8/12 text-4xl font-semibold font-sans rounded-lg ">{title}</div>
                <div className="w-full text-center md:text-left md:w-8/12 text-md text-gray-400 rounded-lg">{description}</div>
                <div className={`w-full h-fit items-center md:items-start gap-4 md:w-8/12  rounded-lg text-3xl font-semibold font-mono flex flex-col justify-between `}>
                    {/* <div className="flex gap-2 text-2xl text-white-400">
                        <div>
                            ${price}
                        </div>
                        <div className="w-[2px] h-lg bg-gray-400/50 rounded -skew-12"></div>
                        <div className="text-foreground/40">
                            ₹{price * 80}
                        </div>
                    </div> */}
                    <div className="flex gap-1 items-center">
                        {
                            purchaseLink ?
                                <Link href={purchaseLink} className="flex items-center">
                                    <Button className="">{buyButtonLabel}</Button>
                                </Link>
                                :
                                <Button className="" onClick={() => {
                                    onPurchase?.();
                                }}>
                                    {buyButtonLabel}
                                </Button>
                        }

                        <Link href={detailsLink} className="flex items-center">
                            <Button className="" variant={"secondary"}>View Detials</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}