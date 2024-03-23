import { Container, Group, Anchor, Image } from "@mantine/core";
import safePlan from "./assets/safeplanelogo.png";

const links = [
  { link: "#contact-us", label: "Contact" },
  { link: "#about-us", label: "About us" },
];

export default function Footer() {
  const items = links.map((link) => (
    <Anchor c="dimmed" key={link.label} href={link.link} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className="footer-section">
      <Container className="footer-wrapper">
        <Image src={safePlan} w={120} />
        <Group className="footer-links">{items}</Group>
      </Container>
    </div>
  );
}
