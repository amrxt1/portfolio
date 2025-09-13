import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border-text/30 sticky top-0 z-999 w-full border-b">
      <Container className="bg-background/80 backdrop-blur-sm">
        <nav className="flex justify-end gap-2 py-2">
          <Link href={"/projects"}>
            <Button tertiary>Projects</Button>
          </Link>
          <Link href={"/"}>
            <Button primary>Contact</Button>
          </Link>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
