import Navbar from "../home/components/Navbar";
import { Card } from "@/components/ui/card";

export const metadata = {
    title: "SimplerTechnologies | Contact",
    description: "Learn more about SimplerTechnologies and our mission.",
};

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <Card className="max-w-md mx-auto mt-25 pt-0 bg-white shadow-lg rounded-xl overflow-hidden">
                <h1 className="text-2xl font-bold bg-blue-950 text-white px-6 py-4">Contact SimplerTechnologies</h1>
                <p className="text-gray-700 px-3">
                    If you have any questions, feedback, or inquiries, feel free to reach out to us. We are here to help you with any issues or concerns you may have regarding our products and services.
                </p>
                <p className="text-gray-700 px-3">
                    You can contact us via email at support@simplertechnologies.com or through our social media channels. We look forward to hearing from you!
                </p>
                <p className="text-gray-700 px-3">
                    Thank you for choosing SimplerTechnologies!
                </p>
            </Card>
        </div>
    );
}