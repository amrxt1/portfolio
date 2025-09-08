const Badge = ({ children }) => {
  return (
    <span
      className={`bg-accent/15 border-accent/50 text-text rounded-md border px-2 py-0.5 text-sm font-bold`}
    >
      {children}
    </span>
  );
};

export default Badge;
