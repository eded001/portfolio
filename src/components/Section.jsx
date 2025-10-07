export default function Section({ children, justify = "center", align = "center", padding = 5, height = 75, backgroundColor = "transparent", paddingTop }) {
    return (
        <section
            className={`min-h-[${height}dvh] flex justify-${justify} items-${align} p-${padding} border-b-2`}
            style={{ backgroundColor: backgroundColor, paddingTop: paddingTop }}
        >
            {children}
        </section>
    );
}