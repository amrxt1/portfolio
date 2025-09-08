import Container from "../layout/Container";
import CodeBlock from "@/components/ui/CodeBlock";

const Hero = () => {
    return (
        <Container>
            <div className="flex h-full min-h-[400px] flex-col justify-center gap-4 font-mono">
                <div>
                    <h1 className="text-3xl">Hero Text</h1>
                    <h3>Some subheading goes here</h3>
                </div>
                <CodeBlock cmd="whoami">
                    <p>amrit</p>
                </CodeBlock>
            </div>
        </Container>
    );
};

export default Hero;
