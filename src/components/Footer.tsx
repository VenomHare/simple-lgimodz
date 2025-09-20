import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
    return (<>
        <div className="w-[100svw] min-h-[10svh] border-t-2 border-primary flex justify-center mt-10">
            <div className="w-[85svw] lg:w-[75svw] xl:w-[60svw]  h-full flex flex-col items-center md:flex-row py-10 gap-10">
                <div className="flex flex-col gap-4 w-full items-center">
                    <div className="w-full h-full flex items-center gap-4 px-4">
                        <img src="/lgimodz.webp" alt="lgimodz" width={128} height={128}></img>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium text-4xl font-neon">LGI Modz</h4>
                            <h5 className="font-light text-sm font-schibsted">A Mod that you always want</h5>
                        </div>
                    </div>
                    <div className="font-schibsted text-balance text-center">
                        Before making any purchase, please read our <Link href={"/privacy-policies"} className="text-primary hover:underline">Privacy Policy</Link>
                    </div>
                </div>
                <div className="w-full flex flex-col items-end gap-4">
                    <div className="w-full flex flex-col items-center">
                        <div className="text-2xl font-semibold font-schibsted">Connect with us</div>
                        {/* <div className="text-md font-light text-gray-400 font-schibsted">Kalyan, Maharashtra</div>
                        <div className="text-md font-light text-gray-400 font-schibsted">+91 986 995 0563</div> */}
                    </div>
                    <div className="w-full flex justify-center gap-4">
                        <Link href="https://www.patreon.com/cw/lgimodz" target="blank">
                            <Button
                                size={"icon"}
                                variant={"outline"}
                                className="flex text-blue-600">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <PatreonIcon />
                                </span>

                            </Button>
                        </Link>
                        <Link href="https://discord.com/invite/wMrBMKzYFX" target="blank">
                            <Button
                                size={"icon"}
                                variant={"outline"}
                                className="flex text-blue-600">
                                <DiscordIcon />
                            </Button>
                        </Link>
                        <Link href="mailto:lgimodsofficial@gmail.com" target="blank">
                            <Button
                                size={"icon"}
                                variant={"outline"}
                                className="flex text-blue-600">
                                <Mail />
                            </Button>
                        </Link>
                        <Link href="https://instagram.com/lgi.yt" target="blank">
                            <Button
                                size={"icon"}
                                variant={"outline"}
                                className="flex text-blue-600">
                                <InstagramIcon />
                            </Button>
                        </Link>
                        <Link href="https://www.youtube.com/@lgiyt" target="blank">
                            <Button
                                size={"icon"}
                                variant={"outline"}
                                className="flex text-blue-600">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <YoutubeIcon />
                                </span>

                            </Button>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    </>)
}

const PatreonIcon = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1080 1080" xmlSpace="preserve">
        <path className="st0" d="M1033.05,324.45c-0.19-137.9-107.59-250.92-233.6-291.7c-156.48-50.64-362.86-43.3-512.28,27.2  C106.07,145.41,49.18,332.61,47.06,519.31c-1.74,153.5,13.58,557.79,241.62,560.67c169.44,2.15,194.67-216.18,273.07-321.33  c55.78-74.81,127.6-95.94,216.01-117.82C929.71,603.22,1033.27,483.3,1033.05,324.45z" />
    </svg>)
}

const YoutubeIcon = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
        <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z" />
    </svg>)
}

const InstagramIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
        </svg>
    )
}
const DiscordIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" width="800px" height="800px" viewBox="0 -28.5 256 256" version="1.1" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor" fillRule="nonzero">

                </path>
            </g>
        </svg>
    )
}