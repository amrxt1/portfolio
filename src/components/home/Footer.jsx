import Container from "@/components/layout/Container";
import Card from "../ui/Card";
import Link from "next/link";

const Footer = () => {
  return (
    <Card className="mt-16 rounded-t-2xl rounded-b-none text-center font-bold">
      <Container className="py-8">
        <p className="">2025 Amritveer Singh</p>
        <Link href={"https://github.com/amrxt1"} className="text-accent">
          View Source
        </Link>
      </Container>
    </Card>
  );
};

export default Footer;
