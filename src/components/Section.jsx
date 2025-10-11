export default function Section({ children, id, height = 100}) {
    return (
        <section
            id={id}
            className="min-h-[100vh] flex justify-center p-5 items-center border-2 border-red-500"
            style={{ minHeight: height + "vh"}}
        >
            {children}
        </section>
    );
}