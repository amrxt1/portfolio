"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const Demo = ({ uiDemo = false }) => {
  if (uiDemo) {
    return (
      <div className="w-full space-y-8 px-4 pt-16 md:px-64">
        <div className="flex w-full justify-center">
          <h1 className="from-primary to-accent w-fit bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent">
            Hello World!
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint
          delectus totam cumque consectetur corrupti facilis corporis adipisci
          cum dolore commodi rem ex perspiciatis beatae unde illo quod, minus
          nesciunt!
        </p>

        <div className="flex gap-4">
          <Button primary>Click Here</Button>
          <Button accent>CTA Main</Button>
          <Button tertiary>Misc</Button>
        </div>
        <Card className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            magnam temporibus debitis quo autem fugiat obcaecati, accusantium
            eos delectus dolores, culpa quas sit eligendi maxime nihil odio
            sunt, consequatur asperiores.
          </p>
          <div className="flex gap-1.5">
            <Badge>Ruby on Rails</Badge>
            <Badge>React</Badge>
            <Badge>Ruby</Badge>
          </div>
          <Button primary className="">
            Acknowledge
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full px-4 pt-16 md:px-64">
      <div className="bg-surface rounded-2xl p-4">
        <h1 className="text-primary pb-4 text-center text-4xl font-bold">
          Hello World!
        </h1>
        <section className="space-y-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ipsa temporibus nulla, quos nesciunt accusamus corporis dolorem nisi
            dolores quas dicta at eius laboriosam labore aliquam error eligendi
            iure ratione!{" "}
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            incidunt et, explicabo quibusdam necessitatibus architecto provident
            iste laboriosam, modi, vero quam corrupti perspiciatis possimus!
            Architecto cum iure officia impedit repellendus? Aliquid illo nobis
            consequuntur deserunt, alias, quas corrupti voluptatibus assumenda
            recusandae, debitis hic rem corporis aut eaque expedita fugiat
            repellendus dicta quo exercitationem. Vel molestias libero dolorum.
            Tenetur, animi repellat.
          </p>
        </section>
        <div className="flex gap-4">
          <button className="bg-primary text-background mt-4 cursor-pointer rounded-lg px-4 py-2 font-bold">
            Do not Click
          </button>
          <button className="bg-accent text-background mt-4 cursor-pointer rounded-lg px-4 py-2 font-bold">
            You may Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
