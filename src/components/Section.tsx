export default function Section({ children, id, height = 100}) {
    return (
        <section
            id={id}
            className="min-h-[100vh] flex justify-center items-center"
            style={{ minHeight: height + "vh"}}
        >
            {children}
        </section>
    );
}