import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Typewriter from "typewriter-effect";
import { meFace } from "@/imgs/share";

export default function Presentation() {
    return (
        <div className="flex items-center w-full justify-between relative px-10
        max-sm:p-4 max-sm:justify-center max-sm:space-y-10 max-sm:flex-col
        ">
            <div className="flex flex-col space-y-4
            max-sm:space-y-2
            ">
                <p className="text-2xl
                max-sm:text-xl
                max-lg:text-2xl
                ">Hello my name is</p>

                <h1 className="text-8xl font-bold text-zinc-900
                max-sm:text-4xl
                max-lg:text-6xl
                ">Edgar Augusto</h1>

                <h2 className="text-2xl font-light text-zinc-700
                max-sm:text-xl
                max-lg:text-2xl
                ">aka Ed</h2>

                <div>
                    <h2 className="text-2xl mt-5
                    max-sm:hidden
                    max-lg:text-2xl
                    ">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Dev ")
                                    .pauseFor(1000)
                                    .typeString("full stack")
                                    .pauseFor(1500)
                                    .deleteChars(10)
                                    .pauseFor(500)
                                    .typeString("mobile")
                                    .pauseFor(1500)
                                    .deleteChars(6)
                                    .pauseFor(500)
                                    .typeString("desktop")
                                    .pauseFor(1000)
                                    .start();
                            }}
                            options={{
                                delay: 75,
                                deleteSpeed: 40,
                                cursor: "|",
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                </div>
            </div>

            <div className="flex flex-col items-center relative">
                <div className="w-75 relative z-10 flex justify-center">
                    <img
                        src={meFace}
                        className="rounded-full w-full shadow-xl
                            max-lg:w-75
                            "
                    />
                </div>

                <div className="text-center">
                    <b className="text-2xl text-zinc-800">Currently</b>
                    <p className="text-zinc-700">
                        <b className="font-medium">Technical Support Intern</b> at{" "}
                        <Tooltip className="font-medium">
                            <TooltipTrigger className="decoration-1">
                                <b className="font-medium">SEMCULT</b>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Secretaria Municipal de Cultura e Turismo de Belém</p>
                            </TooltipContent>
                        </Tooltip>
                    </p>
                </div>
            </div>
        </div>
    );
}