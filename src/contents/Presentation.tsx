import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { meFace } from "../imgs/share";
import { useT } from "@/hooks/useT";

export default function Presentation() {
    const t = useT();

    return (
        <div className="flex items-center w-full justify-between relative px-10 max-sm:p-4 max-sm:justify-center max-sm:space-y-10 max-sm:flex-col">

            <div className="flex flex-col space-y-4 max-sm:space-y-2">
                <p className="text-2xl text-zinc-800 max-sm:text-xl max-lg:text-2xl">
                    {t("presentation.hello")}
                </p>

                <h1 className="text-8xl font-bold text-zinc-900 max-sm:text-4xl max-lg:text-6xl">
                    Edgar Augusto
                </h1>

                <h2 className="text-2xl font-light text-zinc-700 max-sm:text-xl max-lg:text-2xl">
                    Dev Full Stack & Mobile
                </h2>
            </div>

            <div className="flex flex-col items-center relative">
                <div className="w-75 relative z-10 flex justify-center">
                    <img
                        src={meFace}
                        className="rounded-full w-full shadow-xl max-lg:w-75"
                        alt="Profile"
                    />
                </div>

                <div className="text-center">
                    <b className="text-2xl text-zinc-800">
                        {t("presentation.currently")}
                    </b>

                    <p className="text-zinc-700">
                        <span className="font-medium">
                            {t("presentation.role")}
                        </span>{" "}
                        <Tooltip className="font-medium">
                            <TooltipTrigger>
                                <span className="font-medium border-b-2 border-zinc-600 border-dotted cursor-help">
                                    SEMCULT
                                </span>
                            </TooltipTrigger>

                            <TooltipContent className="bg-zinc-900">
                                <p>{t("presentation.department")}</p>
                            </TooltipContent>
                        </Tooltip>
                    </p>
                </div>
            </div>
        </div>
    );
}