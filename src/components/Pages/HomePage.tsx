import { Shapes, SlidersHorizontal, WandSparkles } from "lucide-react";
import HomePageListItem from "../HomeComponents/HomePageListItem";
import { Button } from "../ui/button";
import ReviewBlock from "../HomeComponents/ReviewBlock";
import Footer from "../Footer";
import ProductListItem from "../HomeComponents/ProductListItem";

export default function () {


    return (<>
        {/* bg gradient */}
        <div className="absolute top-[-25%] left-0 w-[100svw] h-screen bg-[radial-gradient(circle_at_top,#5CF16E_-100%,#03071272_40%)] backdrop-blur-lg inset-0 z-[-1]">

        </div>
        <div className="flex flex-col items-center mt-6">
            <div className="w-[85svw] lg:w-[75svw] xl:w-[60svw] ">
                <div className="w-full h-[60svh] md:h-[75svh] flex flex-col items-center justify-center gap-6">
                    <h1 className="text-3xl md:text-5xl font-semibold font-playwrite text-center">Homemade Soaps</h1>
                    <h2 className="text-lg md:text-2xl font-playwrite text-center">"Because Your Skin Deserves the Best"</h2>
                    <Button push="/soaps" className="w-[50svw] sm:w-[30svw] md:w-[30svw] xl:w-[20svw] 2xl:w-[10svw] md:text-xl text-secondary md:mt-5 md:p-2" size={"lg"}>Explore More</Button>
                </div>
                <div className="w-full flex flex-col items-center gap-4 mb-5">
                    <h3 className="text-2xl font-semibold font-playwrite">We Offer </h3>
                    <div className="w-full flex flex-col gap-4 md:w-[75%] ">
                        <HomePageListItem
                            title="Fully Customizable Blends of Soap"
                            description="Pick your own scents, colors, and ingredients to make a soap that's just right for you. Freshly made by hand, the way you want it."
                            Icon={SlidersHorizontal}
                        />
                        <HomePageListItem
                            title="Fun & Unique Soap Shapes"
                            description="Choose from a wide range of shapes - from classic bars to cute hearts, flowers, and more. Add a personal touch to your soap with shapes that match your style or occasion."
                            Icon={Shapes}
                        />
                        <HomePageListItem
                            title="Choose Your Favorite Fragrance"
                            description="Pick the scent you love - floral, fruity, fresh, or calming. Make your soap smell just the way you like it, every time."
                            Icon={WandSparkles}
                        />
                    </div>
                    <Button variant={"secondary"} size={"lg"} className="w-full md:w-1/2 mt-5"> Customize Now</Button>
                </div>

                <div className="w-full flex flex-col items-center gap-4 mt-[15svh] mb-5">
                    <h3 className="text-3xl font-semibold font-playwrite text-center">Handpicked Just for You</h3>
                    <div className="w-full flex flex-col gap-4 items-center">
                        <ProductListItem
                            imageURL="/brown_flower.png"
                            left
                            price={75} title="Brown Soap"
                            description="A Brown Soap with so many good stuff inside it. This Soap will Nourish your Skin so bad that you will take a bath 10 times a day"
                        />
                        <ProductListItem
                            imageURL="/heart_brown.png"
                            price={75} 
                            left={false}
                            title="Brown Soap"
                            description="A Brown Soap with so many good stuff inside it. This Soap will Nourish your Skin so bad that you will take a bath 10 times a day"
                        />
                        <ProductListItem
                            imageURL="/brown_flower.png"
                            price={75} title="Brown Soap"
                            left
                            description="A Brown Soap with so many good stuff inside it. This Soap will Nourish your Skin so bad that you will take a bath 10 times a day"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-4 mt-[15svh] mb-5">
                    <h3 className="text-2xl font-semibold font-playwrite">Testimonials</h3>
                    <p className="text-lg font-semibold text-gray-400 font-schibsted">See what our customers love about our products.</p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                        <ReviewBlock 
                            pfp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/85/85cc10c584e7b004065dc5db0ac84feb976bea84_full.jpg"
                            name="Sarthak Kadam"
                            title="Developer"
                            content="Best Soaps in world! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, praesentium nostrum. Qui tempore, fugiat tempora aliquam distinctio nisi fuga reiciendis deleniti necessitatibus! Laudantium voluptates alias, debitis rem dolorum ex deserunt earum, maxime, iusto enim praesentium ab nesciunt officia sapiente consequatur!"
                            
                        />
                        
                        <ReviewBlock 
                            name="Sarthak Kadam"
                            title="Developer"
                            content="Best Soaps in world!"
                        />
                        <ReviewBlock 
                            name="Sarthak Kadam"
                            content="Best Soaps in world!"
                        />

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </>)
}