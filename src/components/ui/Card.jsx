const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-surface border-text/30 rounded-md border px-4 py-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
