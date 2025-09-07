import React from "react";

const Demo = () => {
  return (
    <div className="mx-auto w-full px-4 pt-16 md:px-64">
      <div className="bg-surface rounded-2xl p-4">
        <h1 className="text-primary pb-4 text-center text-4xl">Hello World!</h1>
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
