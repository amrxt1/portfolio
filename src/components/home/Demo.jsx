"use client";

import Container from "@/components/layout/Container";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const Demo = () => {
  return (
    <Container className="space-y-8 pt-16">
      <div className="text-text/30 flex w-full justify-center underline">
        <h1 className="from-primary to-accent w-fit bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent">
          UI Components
        </h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint
        delectus totam cumque consectetur corrupti facilis corporis adipisci cum
        dolore commodi rem ex perspiciatis beatae unde illo quod, minus
        nesciunt!
      </p>
      <div className="flex gap-4">
        <Button primary>Click Here</Button>
        <Button accent>CTA Main</Button>
        <Button tertiary>Misc</Button>
      </div>
      <Card className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam
          temporibus debitis quo autem fugiat obcaecati, accusantium eos
          delectus dolores, culpa quas sit eligendi maxime nihil odio sunt,
          consequatur asperiores.
        </p>
        <div className="flex gap-1.5">
          <Badge>FPGA</Badge>
          <Badge>Rails</Badge>
          <Badge>React</Badge>
          <Badge>Ruby</Badge>
        </div>
        <Button primary className="">
          Acknowledge
        </Button>
      </Card>
    </Container>
  );
};

export default Demo;
