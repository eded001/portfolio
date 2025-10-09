export default function Section({ children, padding = 5, backgroundColor = "transparent", paddingTop = 0, id, height = 100}) {
    return (
        <section
            id={id}
            className="min-h-[100dvh] flex justify-center items-center border-1 border-black"
            style={{ backgroundColor: backgroundColor, paddingTop: paddingTop, padding: padding, minHeight: height + "dvh"}}
        >
            {children}
        </section>
    );
}