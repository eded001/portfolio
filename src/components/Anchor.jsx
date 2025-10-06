export default function Anchor({ href = "#", target = "_blank", children }) {
    return (
        <a
            href={href}
            target={target}
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
            {children}
        </a>
    );
}