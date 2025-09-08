const Button = ({
  children,
  primary = false,
  accent = false,
  tertiary = false,
  className = "",
}) => {
  return (
    <button
      className={`${primary ? "bg-primary text-background border-primary" : ""} ${accent ? "bg-accent text-background border-accent" : ""} ${tertiary ? "bg-surface border-text/30" : ""} cursor-pointer rounded-md border px-4 py-1 font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
