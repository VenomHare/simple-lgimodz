import CustomizeBlock from "../CustomizeBlock";
import Footer from "../Footer";
import ProductListItemRight from "../HomeComponents/ProductListItem";
import ProductListItem from "../HomeComponents/ProductListItem";

export default function () {
    return (<>
        {/* bg gradient */}
        <div className="absolute top-[-25%] left-0 w-[100svw] h-screen bg-[radial-gradient(circle_at_top,#5CF16E_-100%,#03071272_40%)] backdrop-blur-lg inset-0 z-[-1]">

        </div>
        <div className="flex flex-col items-center mt-6">
            <div className="w-[85svw] lg:w-[75svw] xl:w-[60svw] min-h-[50svh]">
                <div className="w-full flex flex-col gap-0 items-center">
                    <ProductListItem
                        imageURL="/brown_flower.png"
                        price={75} title="Brown Soap"
                        left
                        description="A Brown Soap with so many good stuff inside it. This Soap will Nourish your Skin so bad that you will take a bath 10 times a day"
                    />
                    <CustomizeBlock/>
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
                    <ProductListItem
                        imageURL="/heart_brown.png"
                        price={75}
                        title="Brown Soap"
                        left={false}
                        description="A Brown Soap with so many good stuff inside it. This Soap will Nourish your Skin so bad that you will take a bath 10 times a day"
                    />
                    <ProductListItem
                        imageURL="/brown_flower.png"
                        left
                        price={75} title="Brown Soap"
                        description="A Brown Soap with so many good stuff inside it. This Soap will Nourish your Skin so bad that you will take a bath 10 times a day"
                    />
                    <ProductListItem
                        imageURL="/heart_brown.png"
                        price={75}
                        title="Brown Soap"
                        left={false}
                        description="A Brown Soap with so many good stuff inside it. This Soap will Nourish your Skin so bad that you will take a bath 10 times a day"
                    />
                </div>
            </div>
        </div>
        <Footer />
    </>)
}