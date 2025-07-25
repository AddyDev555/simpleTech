import Navbar from "../home/components/Navbar";
import { Card } from "@/components/ui/card";

export const metadata = {
    title: "SimplerTechnologies | About",
    description: "Learn more about SimplerTechnologies and our mission.",
};

export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <Card className="max-w-md mx-auto mt-25 pt-0 bg-white shadow-lg rounded-xl overflow-hidden">
                <h1 className="text-2xl font-bold bg-blue-950 text-white px-6 py-4">About SimplerTechnologies</h1>
                <p className="text-gray-700 px-3">
                    At SimplerTechnologies, we strive to provide innovative solutions that simplify technology for everyone. Our mission is to make technology accessible and user-friendly, empowering individuals and businesses to achieve their goals with ease.
                </p>
                <p className="text-gray-700 px-3">
                    We believe in the power of simplicity and are committed to delivering products and services that enhance productivity and improve the user experience.
                </p>
            </Card>
        </div>
    );
}