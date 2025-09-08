import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Header = () => {
    return (
        <div className="sticky top-0 w-full">
            <Container className="bg-surface">
                <nav className="pt-2">
                    <Button primary>
                        <Link href={"/"}>Contact</Link>
                    </Button>
                </nav>
            </Container>
            <div className="bg-surface h-4 w-full backdrop-blur-lg [mask:linear-gradient(to_bottom,black,transparent)]" />
        </div>
    );
};

export default Header;
