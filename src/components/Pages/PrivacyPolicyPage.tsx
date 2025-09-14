"use client";
import Appbar from "@/components/Appbar"
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const policies = {
    "sections": [
        {
            "title": "Title",
            "data": `
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-bold mb-4">Privacy Policy</h1>
                    <div class="text-muted-foreground">
                        <p><strong>Effective Date:</strong> 15th April, 2025</p>
                        <p class="mt-4">Welcome to <strong>LGI Mod'z</strong> ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit or make a purchase from our website.</p>
                        <p class="mt-2">By accessing or using our services, you agree to the collection and use of your information in accordance with this Privacy Policy.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "1. Information We Collect",
            "data": "<ul><li><strong>Name and Email Address</strong> (provided during purchase or inquiry)</li><li><strong>Payment Details</strong> (processed via third-party platforms like PayPal)</li><li><strong>Purchase History</strong></li><li><strong>Communications</strong> (emails, inquiries, support messages)</li><li><strong>Device Information and IP Address</strong> (automatically collected for analytics)</li></ul>"
        },
        {
            "title": "2. How We Use Your Information",
            "data": "<ul><li>To process orders and deliver mods via email/Google Drive</li><li>To respond to inquiries or support requests</li><li>To analyze usage and improve our services</li><li>To enforce our terms and protect against fraud</li></ul>"
        },
        {
            "title": "3. No Refund Policy",
            "data": "<p>Due to the digital nature of our products, <strong>all sales are final</strong> and <strong>no refunds</strong> will be issued once a mod has been delivered.</p><p>Please read product descriptions carefully before making a purchase. If you have any issues with your download, feel free to contact us at <a href=\"mailto:lgimodsofficial@gmail.com\">lgimodsofficial@gmail.com</a>.</p>"
        },
        {
            "title": "4. Third-Party Services",
            "data": "<p>We use trusted third-party services to process payments and deliver content, including:</p><ul><li><strong>PayPal</strong> (for secure payments)</li><li><strong>Google Drive</strong> (for delivering mod files)</li><li><strong>Google Workspace (Gmail)</strong> (for communication and delivery)</li></ul><p>These services may collect and store your data according to their own privacy policies. We encourage you to review them.</p>"
        },
        {
            "title": "5. Data Sharing and Disclosure",
            "data": "<p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p><p>We may disclose information if required by law or to protect our rights, property, or safety.</p>"
        },
        {
            "title": "6. International Users",
            "data": "<p>As we operate globally, your information may be transferred to and processed in countries outside of your own. By using our services, you consent to such transfers.</p>"
        },
        {
            "title": "7. Data Retention",
            "data": "<p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable laws.</p>"
        },
        {
            "title": "8. Security",
            "data": "<p>We implement reasonable security measures to protect your personal data. However, no method of transmission or storage is 100% secure. You use our services at your own risk.</p>"
        },
        {
            "title": "9. Your Rights",
            "data": "<p>Depending on your location, you may have the right to:</p><ul><li>Access the personal data we hold about you</li><li>Request corrections or deletions</li><li>Object to or restrict data processing</li><li>Withdraw consent</li></ul><p>To exercise any of these rights, contact us at <a href=\"mailto:lgimodsofficial@gmail.com\">lgimodsofficial@gmail.com</a>.</p>"
        },
        {
            "title": "10. Changes to This Policy",
            "data": "<p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our services means you accept any updates.</p>"
        },
        {
            "title": "11. Contact Us",
            "data": "<p>If you have any questions or concerns about this Privacy Policy or our practices, please contact:</p><p><strong>LGI Mod'z</strong><br/>Email: <a href=\"mailto:lgimodsofficial@gmail.com\">lgimodsofficial@gmail.com</a></p>"
        }
    ]
}


const PoliciesPage = () => {
    const [activeSection, setActiveSection] = useState<string>("");
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const handleSetRef = (title: string, element: HTMLDivElement | null) => {
        sectionRefs.current[title] = element;
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const section of policies.sections) {
                const element = sectionRefs.current[section.title];
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.title);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (title: string) => {
        sectionRefs.current[title]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Appbar />
            <div className="min-h-screen bg-background ">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Index/Table of Contents */}
                        <Card className="p-4 lg:sticky lg:top-24 h-fit">
                            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                            <nav className="space-y-2">
                                {policies.sections.map((section) => (
                                    <Button
                                        key={section.title}
                                        variant={activeSection === section.title ? "default" : "ghost"}
                                        className="w-full justify-start text-left"
                                        onClick={() => scrollToSection(section.title)}
                                    >
                                        {section.title}
                                    </Button>
                                ))}
                            </nav>
                        </Card>

                        {/* Main Content */}
                        <div className="lg:col-span-3 space-y-8">
                            {policies.sections.map((section) => {
                                if (section.title == "Title") {
                                    return (
                                        <div
                                            key={section.title}
                                            ref={(el) => handleSetRef(section.title, el)}
                                            className="scroll-mt-24"
                                        >
                                            <div
                                                className="prose prose-invert max-w-none font-bebas"
                                                dangerouslySetInnerHTML={{ __html: section.data }}
                                            />
                                        </div>
                                    )
                                }
                                return (
                                    <div
                                        key={section.title}
                                        ref={(el) => handleSetRef(section.title, el)}
                                        className="scroll-mt-24"
                                    >
                                        <Card className="p-6">
                                            <h2 className="text-2xl font-semibold mb-4 font-barlow">{section.title}</h2>
                                            <div
                                                className="prose prose-invert max-w-none"
                                                dangerouslySetInnerHTML={{ __html: section.data }}
                                            />
                                        </Card>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PoliciesPage