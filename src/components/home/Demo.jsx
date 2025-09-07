import React from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const Demo = () => {
    if (true) {
        return (
            <div className="mx-4 mt-4 grid gap-2">
                <Button primary>Do not Click</Button>
                <Button accent>Do not Click</Button>
                <Card className="grid gap-4 blur-xs hover:blur-none">
                    <Button primary>Hello World</Button>
                    <Button primary>Hello World</Button>
                    <Button primary>Hello World</Button>
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias ipsa temporibus nulla, quos nesciunt
                        accusamus corporis dolorem nisi dolores quas dicta at
                        eius laboriosam labore aliquam error eligendi iure
                        ratione!{" "}
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptatem incidunt et, explicabo quibusdam
                        necessitatibus architecto provident iste laboriosam,
                        modi, vero quam corrupti perspiciatis possimus!
                        Architecto cum iure officia impedit repellendus? Aliquid
                        illo nobis consequuntur deserunt, alias, quas corrupti
                        voluptatibus assumenda recusandae, debitis hic rem
                        corporis aut eaque expedita fugiat repellendus dicta quo
                        exercitationem. Vel molestias libero dolorum. Tenetur,
                        animi repellat.
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
