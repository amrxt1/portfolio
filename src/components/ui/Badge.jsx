const Badge = ({ children }) => {
  return (
    <span
      className={`bg-accent/15 border-accent/50 text-text rounded-md border px-2 text-sm`}
    >
      {children}
    </span>
  );
};

export default Badge;
