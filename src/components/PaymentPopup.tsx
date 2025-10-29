"use client"
import { useEffect, useState } from "react"
import { CheckCircle, CreditCard, X, AlertCircle, ArrowLeft, ExternalLink, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import axios, { AxiosResponse } from "axios"
import { PatchDetails, PaymentPopupProps, PaymentScreens, UserInfo } from "@/lib/types"

// Declare confetti as any to avoid TypeScript errors
declare const confetti: any;

export default function PaymentPopup({ isOpen, onClose, patchDetails }: PaymentPopupProps) {
    const [currentScreen, setCurrentScreen] = useState<PaymentScreens>("details")
    const [isProcessing, setIsProcessing] = useState(false)
    const [paymentId, setPaymentId] = useState("");
    const [userInfo, setUserInfo] = useState<UserInfo>({
        gmail: "",
        discordId: "",
        platform: "",
    })
    const [errors, setErrors] = useState<Partial<UserInfo>>({})
    // const dispatch = useDispatch();

    const discordInviteLink = "https://discord.gg/wMrBMKzYFX" // Replace with your actual Discord link

    const handleClose = () => {
        setCurrentScreen("details")
        setUserInfo({ gmail: "", discordId: "", platform: "" })
        setErrors({})
        onClose()
    }

    // useEffect(() => {
    //     dispatch(setIsLoading(isProcessing))
    // }, [isProcessing, dispatch])

    const validateForm = (): boolean => {
        const newErrors: Partial<UserInfo> = {}

        if (!userInfo.gmail) {
            newErrors.gmail = "Gmail is required"
        } else if (!userInfo.gmail.includes("@gmail.com")) {
            newErrors.gmail = "Please enter a valid Gmail address"
        }

        if (!userInfo.platform && patchDetails.id !== "donate") {
            //@ts-expect-error: Error when user not gives platform input
            newErrors.platform = "Please select a platform"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handlePaymentSuccess = () => {
        setCurrentScreen("success")
    }

    const handlePaymentFailed = () => {
        setCurrentScreen("failed")
    }

    const handleRetryPayment = () => {
        setCurrentScreen("payment")
    }

    const handleUPI = () => {
        setCurrentScreen("upi");
    }




    const handleProceedToPayment = async () => {
        if (validateForm()) {
            try {
                setCurrentScreen("payment")
            }
            catch (err) {
                console.warn(err);
            }
        }
    }

    const renderScreen = () => {
        switch (currentScreen) {
            case "details":
                return (
                    <PatchDetailsScreen
                        patchDetails={patchDetails}
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        errors={errors}
                        onProceed={handleProceedToPayment}
                    />
                )
            case "payment":
                return (
                    <PaymentScreen
                        patchDetails={patchDetails}
                        userInfo={userInfo}
                        onSuccess={handlePaymentSuccess}
                        onFailed={handlePaymentFailed}
                        onBack={() => setCurrentScreen("details")}
                        isProcessing={isProcessing}
                        setIsProcessing={setIsProcessing}
                        setPaymentId={setPaymentId}
                        onUPI={handleUPI}
                    />
                )
            case "success":
                return (
                    <SuccessScreen
                        patchDetails={patchDetails}
                        userInfo={userInfo}
                        onClose={handleClose}
                        discordLink={discordInviteLink}
                        paymentId={paymentId}
                    />
                )
            case "failed":
                return <FailedScreen onRetry={handleRetryPayment} onClose={handleClose} discordLink={discordInviteLink} />
            case "upi":
                return <UPIScreen onClose={handleClose} discordLink={discordInviteLink} onRetry={handleRetryPayment} />
            default:
                return null
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md max-h-[90vh] mt-[5dvh] overflow-y-auto" showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle className="flex items-center justify-between">
                        <span>
                            {currentScreen === "details" && "Purchase Patch"}
                            {currentScreen === "payment" && "Complete Payment"}
                            {currentScreen === "success" && "Payment Successful"}
                            {currentScreen === "failed" && "Payment Failed"}
                        </span>
                        <Button variant="ghost" size="icon" onClick={handleClose}>
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogTitle>
                </DialogHeader>
                {renderScreen()}
            </DialogContent>
        </Dialog>
    )
}

function PatchDetailsScreen({
    patchDetails,
    userInfo,
    setUserInfo,
    errors,
    onProceed,
}: {
    patchDetails: PatchDetails
    userInfo: UserInfo
    setUserInfo: (info: UserInfo) => void
    errors: Partial<UserInfo>
    onProceed: () => void
}) {


    const handleInputChange = (field: keyof UserInfo, value: string) => {
        setUserInfo({ ...userInfo, [field]: value })
    }

    return (
        <div className="space-y-6">
            {/* Patch Info with Thumbnail */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <img
                                width={100} height={150}
                                src={patchDetails.thumbnail || "/placeholder.svg"}
                                alt={patchDetails.name}
                                className="w-20 h-28 object-cover rounded-lg border"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{patchDetails.name}</h3>
                            <p className="text-sm text-muted-foreground">{patchDetails.description}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* User Information Form */}
            <Card className="border-2 bg-gradient-to-br from-card to-secondary/10 ">
                <CardHeader>
                    <CardTitle className="text-lg">Delivery Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="gmail">Gmail Address *</Label>
                        <Input
                            id="gmail"
                            type="email"
                            placeholder="your.email@gmail.com"
                            value={userInfo.gmail}
                            onChange={(e) => handleInputChange("gmail", e.target.value)}
                            className={errors.gmail ? "border-red-500" : ""}
                        />
                        {errors.gmail && <p className="text-sm text-red-500">{errors.gmail}</p>}
                        {
                            patchDetails.id !== "donate" &&
                            <p className="text-xs text-muted-foreground">Required for Google Drive access to download the patch</p>
                        }
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="discord">Discord ID (Optional)</Label>
                        <Input
                            id="discord"
                            placeholder="username#1234 or @username"
                            value={userInfo.discordId}
                            onChange={(e) => handleInputChange("discordId", e.target.value)}
                        />
                        {
                            patchDetails.id !== "donate" ?
                                <p className="text-xs text-muted-foreground">For support and community updates</p>
                                :
                                <p className="text-xs text-muted-foreground">For Role and other perks</p>
                        }
                    </div>

                    {
                        patchDetails.id !== "donate" &&
                        <div className="space-y-2">
                            <Label htmlFor="platform">Platform *</Label>
                            <Select value={userInfo.platform} onValueChange={(value) => handleInputChange("platform", value)}>
                                <SelectTrigger className={errors.platform ? "border-red-500" : ""}>
                                    <SelectValue placeholder="Select your platform" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="PC">PC</SelectItem>
                                    <SelectItem value="Mobile">Mobile</SelectItem>
                                    <SelectItem value="PS2">PlayStation 2</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.platform && <p className="text-sm text-red-500">{errors.platform}</p>}
                        </div>
                    }

                </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="bg-gradient-to-br from-card to-secondary/10">
                <CardHeader>
                    <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex justify-between">
                        <span>Patch Price</span>
                        <span>${patchDetails.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Delivery Charges</span>
                        <span>$0.00</span>
                    </div>
                    {
                        patchDetails.hasDiscount && <>
                            <Separator />
                            <div className="flex justify-between text-sm text-green-600">
                                <span>Discount</span>
                                <span>-${(patchDetails.price - patchDetails.discountPrice).toFixed(2)}</span>
                            </div>
                        </>
                    }

                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        {
                            patchDetails.hasDiscount ?
                                <span>${patchDetails.discountPrice.toFixed(2)}</span>
                                :
                                <span>${patchDetails.price.toFixed(2)}</span>
                        }
                    </div>
                </CardContent>
            </Card>

            <Button onClick={onProceed} className="w-full" size="lg">
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Payment
            </Button>
        </div>
    )
}

function PaymentScreen({
    patchDetails,
    userInfo,
    onSuccess,
    onFailed,
    onBack,
    onUPI,
    setIsProcessing,
    setPaymentId,
}: {
    patchDetails: PatchDetails
    userInfo: UserInfo
    onSuccess: () => void
    onFailed: () => void
    onBack: () => void
    onUPI: () => void
    isProcessing: boolean
    setIsProcessing: (processing: boolean) => void
    setPaymentId: (paymentId: string) => void
}) {


    const total = patchDetails.hasDiscount ? patchDetails.discountPrice :patchDetails.price

    const options = {
        "clientId": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        "enable-funding": "venmo",
        "disable-funding": "paylater",
        "data-page-type": "product-details",
        "components": "buttons",
        "data-sdk-integration-source": "developer-studio",
        "intent": "capture",
    }

    const createOrder = async () => {
        if (patchDetails.id === "donate") {
            const response = await axios.post("/api/payment/paypal/donate/create", {
                email: userInfo.gmail,
                discordId: userInfo.discordId,
                amount: patchDetails.price
            });
            return response.data.id
        }
        else {
            const response = await axios.post("/api/payment/paypal/create", {
                patchId: patchDetails.id,
                email: userInfo.gmail,
                discordId: userInfo.discordId,
                name: patchDetails.name
            });
            return response.data.id
        }
    }

    const onApprove = async (data: any) => {

        const id = data.orderID;
        let response: AxiosResponse<any, any>;

        try {
            if (patchDetails.id === "donate") {
                response = await axios.post("/api/payment/paypal/donate/verify", {
                    orderId: id,
                    email: userInfo.gmail,
                    discord: userInfo.discordId,
                    patch: patchDetails.id
                })
            }
            else {
                response = await axios.post("/api/payment/paypal/verify", {
                    orderId: id,
                    email: userInfo.gmail,
                    discord: userInfo.discordId,
                    platform: userInfo.platform,
                    patch: patchDetails.id
                });
            }
            setIsProcessing(false);
            if (response.data.message === "CAPTURED") {
                setPaymentId(response.data.paymentId);
                onSuccess();
            }
            else {
                onFailed();
            }
        }
        catch (err) {
            setIsProcessing(false);
            console.log(err);
            onFailed();
        }
    }

    const onCancel = () => {
        setIsProcessing(false);
        onFailed();
    }
    console.log(options);
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={onBack}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                    <h3 className="font-semibold">{patchDetails.name}</h3>
                    <p className="text-sm text-muted-foreground">
                        {userInfo.platform} • ${total.toFixed(2)}
                    </p>
                </div>
            </div>

            <Card className="bg-gradient-to-br from-card to-secondary/10">
                <CardHeader>
                    <CardTitle className="text-lg">Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg bg-muted/50 " style={{ colorScheme: "none" }}>
                        <Button className="w-full rounded-sm text-lg bg-blue-500 text-white hover:text-black tracking-wider font-russo italic" onClick={() => {
                            axios.post("/api/message", {
                                email: userInfo.gmail,
                                discord: userInfo.discordId,
                                method: "upi",
                                patchId: patchDetails.id
                            })
                            onUPI();
                        }}>UPI <p className="text-xs not-italic font-sans">(Gpay, PhonePe, etc)</p></Button>
                    </div>
                    <div className="p-4 border rounded-lg bg-muted/50 " style={{ colorScheme: "none" }}>
                        <PayPalScriptProvider options={options}>
                            <PayPalButtons style={
                                {
                                    layout: "vertical",
                                    color: "gold",
                                    shape: "rect",
                                    label: "paypal",
                                }
                            }
                                createOrder={() => createOrder()}
                                onApprove={onApprove}
                                onCancel={onCancel}
                                onError={onCancel}
                                className="bg-transparent!"
                                onClick={() => {
                                    // setIsProcessing(true);
                                    axios.post("/api/message", {
                                        email: userInfo.gmail,
                                        discord: userInfo.discordId,
                                        method: "paypal",
                                        patchId: patchDetails.id
                                    })
                                }}
                            />
                        </PayPalScriptProvider>
                    </div>

                    <div className="text-xs text-muted-foreground text-center">
                        <p>Secure payment powered by PayPal</p>
                        <p>Your payment information is encrypted and secure</p>
                    </div>
                </CardContent>
            </Card>
        </div >
    )
}

function SuccessScreen({
    patchDetails,
    userInfo,
    onClose,
    discordLink,
    paymentId,
}: {
    patchDetails: PatchDetails
    userInfo: UserInfo
    onClose: () => void
    discordLink: string
    paymentId: string
}) {

    function popConfetti() {
        confetti({
            particleCount: 250,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // 2. A more explosive fireworks effect
    function fireworks() {
        const duration = 10 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    useEffect(() => {
        try {
            popConfetti();
            setTimeout(fireworks, 500);
        }
        catch{
            console.log("Failed to play animation");
        }
    },[])

    return (
        <div className="text-center space-y-6">
            <div className="flex justify-center">
                <div className="rounded-full bg-green-100 p-3">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Payment Successful!</h3>
                {
                    patchDetails.id === "donate" ? <>
                        <p className="text-muted-foreground">Thank you for Donating to LGI Modz</p>
                        <p className="text-muted-foreground">Your support helps us continue our mission. We truly appreciate your contribution.</p>

                    </>
                        :
                        <p className="text-muted-foreground">Thank you for purchasing {patchDetails.name}</p>
                }
            </div>

            <Card>
                <CardContent className="pt-6">
                    <div className="space-y-2 text-sm">
                        {
                            paymentId &&
                                <div className="flex justify-between">
                                    <span>Order ID:</span>
                                    <span className="font-mono">#{paymentId}</span>
                                </div>
                        }
                        {
                            patchDetails.id !== "donate" &&
                            <div className="flex justify-between">
                                <span>Platform:</span>
                                <span>{userInfo.platform}</span>
                            </div>
                        }
                        <div className="flex justify-between">
                            <span>Gmail:</span>
                            <span className="text-xs">{userInfo.gmail}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            {
                patchDetails.id !== "donate" ?
                    <>
                        <Card className="bg-gradient-to-br from-card to-secondary/10 border-2 border-primary/40">
                            <CardHeader>
                                <div className="flex items-center gap-2 text-primary font-medium">
                                    <Mail className="h-4 w-4" />
                                    Delivery Information
                                </div>
                            </CardHeader>
                            <CardContent className="pt-1">
                                <div className="text-sm space-y-2">
                                    <p className="text-foreground">
                                        Your patch will be delivered via Google Drive within <strong>2-3 business days</strong>. We&apos;ll manually
                                        grant access to your Gmail account.
                                    </p>
                                    <p className="text-xs text-foreground">You&apos;ll receive an email notification once access is granted.</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background ">
                            <CardHeader>
                                <div className="flex items-center gap-2 text-foreground font-medium">
                                    <MessageCircle className="h-4 w-4" />
                                    Need Help?
                                </div>
                            </CardHeader>
                            <CardContent className="pt-2">
                                <div className="text-sm space-y-3">
                                    <p className=" text-foreground">If you don&apos;t receive access within 3 business days or have any issues:</p>
                                    <div className="space-y-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full border-purple-300  text-foreground hover:bg-purple-100"
                                            onClick={() => window.open(discordLink, "_blank")}
                                        >
                                            <MessageCircle className="mr-2 h-4 w-4" />
                                            Open Support Ticket on Discord
                                            <ExternalLink className="ml-2 h-3 w-3" />
                                        </Button>
                                        <p className="text-xs text-foreground">Or email us with your Order ID for assistance</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </>
                    : <>

                    </>
            }

            <Button onClick={onClose} className="w-full">
                Close
            </Button>
        </div>
    )
}

function FailedScreen({
    onRetry,
    onClose,
    discordLink,
}: {
    onRetry: () => void
    onClose: () => void
    discordLink: string
}) {
    return (
        <div className="text-center space-y-6">
            <div className="flex justify-center">
                <div className="rounded-full bg-red-100 p-3">
                    <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Payment Failed</h3>
                <p className="text-muted-foreground">We couldn&apos;t process your payment. Please try again.</p>
            </div>

            <Card>
                <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground">
                        <p className="mb-2">Common issues:</p>
                        <ul className="text-left space-y-1">
                            <li>• Insufficient funds</li>
                            <li>• Expired payment method</li>
                            <li>• Network connection issues</li>
                            <li>• PayPal account restrictions</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
                <CardContent className="pt-6">
                    <div className="text-sm space-y-3">
                        <div className="flex items-center gap-2 text-orange-700 font-medium">
                            <AlertCircle className="h-4 w-4" />
                            Payment Successful but Showing Failed?
                        </div>
                        <p className="text-orange-600">
                            If your payment went through but you&apos;re seeing this error, please contact support immediately.
                        </p>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-orange-300 text-orange-700 hover:bg-orange-100"
                            onClick={() => window.open(discordLink, "_blank")}
                        >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Open Support Ticket
                            <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-2">
                <Button onClick={onRetry} className="w-full">
                    Try Again
                </Button>
                <Button onClick={onClose} variant="outline" className="w-full">
                    Cancel
                </Button>
            </div>
        </div>
    )
}


function UPIScreen({
    onClose,
}: {
    onRetry: () => void
    onClose: () => void
    discordLink: string
}) {
    return (
        <div className="text-center space-y-6">
            <div className="flex justify-center">
                <div className="rounded-full bg-blue-100 p-3">
                    <AlertCircle className="h-8 w-8 text-blue-500" />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Need UPI Payment Help? <br /> You&apos;re Just a Message Away!</h3>
                <p className="text-muted-foreground">UPI payments are handled via support, simply contact us, and we,ll respond super quickly to assist you.</p>
            </div>


            <div className="space-y-2">
                <Button onClick={() => { window.open("https://discord.com/invite/dMzNNVuYv7", '_blank') }} className="w-full">
                    Send Message
                </Button>
                <Button onClick={() => { window.open("mailto:lgimodsofficial@gmail.com", '_blank') }} className="w-full">
                    Send Mail
                </Button>
                <Button onClick={onClose} variant="outline" className="w-full">
                    Cancel
                </Button>
            </div>
        </div>
    )
}

