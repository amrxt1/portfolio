import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 w-full">
      <Container className="bg-background">
        <nav className="pt-2 pb-0.5">
          <Button primary>
            <Link href={"/"}>Contact</Link>
          </Button>
        </nav>
      </Container>
      <div className="to-background h-5 w-full bg-gradient-to-t from-transparent" />
    </div>
  );
};

export default Header;
