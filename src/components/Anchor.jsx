export default function Anchor({ href = "#", target = "_blank", children }) {
    return (
        <a
            href={href}
            target={target}
            rel="noopener noreferrer"
            className="transition-colors duration-300"
        >
            {children}
        </a>
    );
}