import Card from "@/components/ui/Card";

const CodeBlock = ({
  children,
  cmd = "ls",
  childClass = "",
  selfClass = "",
}) => {
  return (
    <Card className={selfClass}>
      <h2>
        <span>root@portfolio:~</span> {cmd}
      </h2>
      <div className={childClass}>{children}</div>
    </Card>
  );
};

export default CodeBlock;
