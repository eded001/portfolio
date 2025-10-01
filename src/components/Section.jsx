export default function Section({ children, justify = "center", align = "center" }) {
    return (
        <div className={`min-h-[100dvh] flex justify-${justify} items-${align} border-5 border-white`}>
            {children}
        </div>
    );
}