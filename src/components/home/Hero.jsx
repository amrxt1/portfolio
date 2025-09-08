import Container from "../layout/Container";

const Hero = () => {
  return (
    <Container className="text-xl">
      <div className="flex h-full min-h-[400px] flex-col items-center justify-center font-mono">
        <span className="text-primary text-3xl wrap-break-word">
          {"amritv[eer's].space"}
        </span>
        <span>on the internet</span>
      </div>
    </Container>
  );
};

export default Hero;
