"use client";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function HomePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = sessionStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    return (
        <div>
            <Navbar />
            <Card className="max-w-md mx-auto mt-25 pt-0 bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="bg-blue-950 px-6 py-4">
                    <h2 className="text-xl font-semibold text-white">User Information</h2>
                </div>

                <div className="px-6 py-4 text-gray-700 space-y-2">
                    {user ? (
                        <>
                            <p>
                                <span className="font-medium">Full Name:</span> {user.fullName}
                            </p>
                            <p>
                                <span className="font-medium">Email:</span> {user.email}
                            </p>
                        </>
                    ) : (
                        <p className="text-gray-500 italic">No user information available.</p>
                    )}
                </div>
            </Card>
        </div>
    );
}
