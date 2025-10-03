export default function Section({ children, justify = "center", align = "center" }) {
    return (
        <div className={`min-h-[100dvh] flex justify-${justify} items-${align} border-2 border-black p-10`}>
            {children}
        </div>
    );
}