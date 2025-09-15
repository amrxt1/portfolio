import Container from "../layout/Container";
import Link from "next/link";
import Button from "../ui/Button";

const links = [
  { href: "https://github.com/amrxt1", name: "GitHub" },
  { href: "https://linkedin.com/in/amritveer-singh", name: "LinkedIn" },
  { href: "/resume", name: "Resume" },
  { href: "/projects", name: "Projects" },
  { href: "", name: "X" },
  { href: "mailto:amritv.dev@proton.me", name: "Email" },
];

function ContactButton({ link }) {
  return (
    <Button tertiary>
      <Link href={link.href}>{link.name}</Link>
    </Button>
  );
}

const ContactLinks = () => {
  return (
    <Container className="py-24">
      <h3 className="text-primary mb-4 text-center text-2xl font-bold">
        Let's Work Together
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        <Button accent>Leave a Message</Button>
        {links.map((link, i) => (
          <ContactButton link={link} key={i} />
        ))}
      </div>
    </Container>
  );
};

export default ContactLinks;
