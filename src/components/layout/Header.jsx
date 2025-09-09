import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full">
      <Container className="bg-background">
        <nav className="flex justify-end gap-2 pt-2 pb-0.5">
          <Link href={"/projects"}>
            <Button tertiary>Projects</Button>
          </Link>
          <Link href={"/"}>
            <Button primary>Contact</Button>
          </Link>
        </nav>
      </Container>
      <div className="to-background h-5 w-full bg-gradient-to-t from-transparent" />
    </div>
  );
};

export default Header;
