import Container from "@/components/layout/Container";
import Card from "../ui/Card";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <Card className="text-center font-bold">
        <h3 className="text-primary mb-4 text-2xl">Footer</h3>
        <p className="">2025 Amritveer Singh</p>
        <Link href={"https://github.com/amrxt1"} className="text-accent">
          View Source
        </Link>
      </Card>
    </Container>
  );
};

export default Footer;
