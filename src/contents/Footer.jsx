import Title from "@/components/Title";

export default function Footer() {
    return (
        <div className="">
            <p className="text-center space-x-1 text-sm">
                <span className="text-blue-500">
                    Code
                </span>

                <span className="text-red-500 ">
                    &lt;3
                </span>

                by

                <span className="font-semibold">
                    Ed
                </span>

                | Built with

                <span className="font-semibold">
                    React
                </span>

                and

                <span className="font-semibold">
                    TailwindCSS
                </span>

                | Hosted on

                <span className="font-semibold">
                    GitHub Pages
                </span>
            </p>
        </div>
    );
}