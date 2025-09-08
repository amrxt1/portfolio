import Container from "@/components/layout/Container";
import Card from "../ui/Card";
import Link from "next/link";

const Footer = () => {
  return (
    <Card className="rounded-t-2xl rounded-b-none text-center font-bold">
      <Container>
        <h3 className="text-primary mb-4 text-2xl">Footer</h3>
        <p className="">2025 Amritveer Singh</p>
        <Link href={"https://github.com/amrxt1"} className="text-accent">
          View Source
        </Link>
      </Container>
    </Card>
  );
};

export default Footer;
