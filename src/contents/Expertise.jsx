import Title from "@/components/Title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Expertise() {
    const expertises = [
        {
            title: "",
            description: "",
            icon: ""
        },
        {
            title: "",
            description: "",
            icon: ""
        },
        {
            title: "",
            description: "",
            icon: ""
        },
    ]

    return (
        <div className="space-y-6">
            <Title>My Expertise</Title>

            <div className="flex flex-wrap gap-4 justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {
                        expertises.map((expertises, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    
                                </CardHeader>
                                <CardContent>
                                    <CardTitle></CardTitle>
                                    <CardDescription></CardDescription>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}