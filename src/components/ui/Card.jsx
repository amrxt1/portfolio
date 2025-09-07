const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`${className} bg-surface border-text/50 w-full rounded-md border p-4`}
        >
            {children}
        </div>
    );
};

export default Card;
