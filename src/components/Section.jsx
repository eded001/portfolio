export default function Section({ children, padding = 5, id, height = 100}) {
    return (
        <section
            id={id}
            className="min-h-[100dvh] flex justify-center items-center border-red-500 border-1"
            style={{ padding: padding, minHeight: height + "dvh"}}
        >
            {children}
        </section>
    );
}