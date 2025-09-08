import Card from "@/components/ui/Card";

const CodeBlock = ({ children, cmd = "ls", className = "" }) => {
    return (
        <Card className={className}>
            <h2>
                <span>root@portfolio:~</span> {cmd}
            </h2>
            <div>{children}</div>
        </Card>
    );
};

export default CodeBlock;
