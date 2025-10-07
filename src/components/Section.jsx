export default function Section({ children, justify = "center", align = "center", padding = 5, minHeight = 75, height,backgroundColor = "transparent", paddingTop }) {
    return (
        <section
            className={`min-h-[${minHeight}dvh] flex justify-${justify} items-${align} p-${padding} border-b-2`}
            style={{ backgroundColor: backgroundColor, paddingTop: paddingTop, height: height + "dvh" }}
        >
            {children}
        </section>
    );
}