export default function Section({ children, justify = "center", align = "center", padding = 5, height,backgroundColor = "transparent", paddingTop }) {
    return (
        <section
        className={`min-h-[75dvh] flex justify-${justify} items-${align} border-b-2`}
        style={{ backgroundColor: backgroundColor, paddingTop: paddingTop, height: height + "dvh", padding: padding }}
        >
            {children}
        </section>
    );
}