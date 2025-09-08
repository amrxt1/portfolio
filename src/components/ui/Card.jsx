const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`${className} bg-surface border-text/30 w-full rounded-md border px-4 py-6`}
        >
            {children}
        </div>
    );
};

export default Card;
