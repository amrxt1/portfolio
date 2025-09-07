const Button = ({
    children,
    primary = false,
    accent = false,
    className = "",
}) => {
    return (
        <button
            className={`${primary ? "bg-primary" : ""} ${accent ? "bg-accent" : ""} text-background rounded-md px-4 py-2 font-bold ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
