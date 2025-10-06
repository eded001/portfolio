export default function Section({ children, justify = "center", align = "center", height = "100dvh", padding = 10 }) {
    return (
        <div className={`min-h-[${height}] flex justify-${justify} items-${align} p-${padding} border-2 border-black bg-[-primary-foreground]`}>
            {children}
        </div>
    );
}