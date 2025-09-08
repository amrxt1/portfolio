import Container from "../layout/Container";
import Card from "../ui/Card";

const AboutMe = () => {
  return (
    <Container>
      <Card>
        <h1 className="text-primary mb-4 text-center text-2xl font-bold">
          About Me
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta
          doloribus assumenda! Tempora itaque est, similique explicabo ullam
          molestias quidem debitis. Atque quis quisquam ipsa maxime iste
          obcaecati inventore ipsum.
        </p>
      </Card>
    </Container>
  );
};

export default AboutMe;
