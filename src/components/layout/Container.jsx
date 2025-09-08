const Container = ({ children, className = "" }) => {
  return (
    <section className={`w-full px-4 md:px-48 lg:px-64 xl:px-96 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
