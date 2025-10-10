export default function Section({ children, padding = 5, id, height = 100}) {
    return (
        <section
            id={id}
            className="min-h-[100vh] flex justify-center items-center border-2 border-red-500"
            style={{ padding: padding, minHeight: height + "vh"}}
        >
            {children}
        </section>
    );
}