import Title from "@/components/Title";
import { Button } from "@/components/ui/button";

export default function ContactMe() {
    return (
        <div className="grid place-items-center gap-10 text-center px-4">
            <Title>Hey, let's do a job!</Title>

            <p className="max-w-xl text-gray-700">
                I love exploring new opportunities and partnerships. If you have a project
                or a question, feel free to contact me.
            </p>

            <Button asChild>
                <a href="mailto:edgarams.profissional@gmail.com">Say hello</a>
            </Button>
        </div>
    );
}