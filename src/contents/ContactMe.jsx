import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";

export default function ContactMe() {
    return (
        <div className="grid place-items-center gap-10 text-center px-4">
            <Title>Hey, let's do a job!</Title>

            <p className="max-w-xl">
                I love exploring new opportunities and partnerships. If you have a project
                or a question, feel free to contact me.
            </p>

            <div className="flex gap-5 items-center">
                <Button asChild variant={"secondary"} className={"bg-blue-300 text-blue-600 hover:bg-blue-200 hover:text-blue-500"}>
                    <a href="https://www.linkedin.com/in/edgar-augusto/" target="_blank">Connect on LinkedIn <SiLinkedin /></a>
                </Button>

                <p>or</p>

                <Button asChild className={"bg-sky-300 text-sky-600 hover:bg-sky-200 hover:text-sky-500"}>
                    <a href="mailto:edgarams.profissional@gmail.com" target="_blank">Send an email <IoSend /></a>
                </Button>
            </div>
        </div>
    );
}