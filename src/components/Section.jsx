export default function Section({ children, padding = 5, backgroundColor = "transparent", paddingTop = 0, id }) {
    return (
        <section
            id={id}
            className={`min-h-[100dvh] flex justify-center items-center`}
            style={{ backgroundColor: backgroundColor, paddingTop: paddingTop, padding: padding, height: "auto" }}
        >
            {children}
        </section>
    );
}