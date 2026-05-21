"use client";

import { useEffect, useRef } from "react";

const labels = [
  "React.js Development",
  "Node.js Development",
  "Machine Learning",
  "AI Development",
  "Frontend Development",
  "Backend Development",
  "Mobile App Development",
  "Web Development",
  "PHP Laravel",
  "Shopify Development",
  "Digital Marketing",
  "E-Commerce Development",
];

const PILL_W = 240;
const PILL_H = 48;

const Heromatterjs = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    let Matter;
    try {
      Matter = require("matter-js");
    } catch {
      return;
    }

    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, World } = Matter;

    const engine = Engine.create();
    const world = engine.world;

    const W = sceneRef.current.offsetWidth || window.innerWidth;
    const H = 420;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: W,
        height: H,
        background: "transparent",
        wireframes: false,
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    /* Walls */
    const floor = Bodies.rectangle(W / 2, H + 20, W + 100, 40, { isStatic: true, render: { fillStyle: "transparent" } });
    const wallL = Bodies.rectangle(-10, H / 2, 20, H * 2, { isStatic: true, render: { fillStyle: "transparent" } });
    const wallR = Bodies.rectangle(W + 10, H / 2, 20, H * 2, { isStatic: true, render: { fillStyle: "transparent" } });
    Composite.add(world, [floor, wallL, wallR]);

    /* Drop pills */
    labels.forEach((text, i) => {
      const x = 80 + Math.random() * Math.max(0, W - 160);
      const y = -60 - i * 60;

      const body = Bodies.rectangle(x, y, PILL_W, PILL_H, {
        chamfer: { radius: 24 },
        restitution: 0.3,
        friction: 0.5,
        render: {
          fillStyle: "rgba(245, 243, 255, 0.92)",
          strokeStyle: "#7c3aed",
          lineWidth: 2,
        },
      });

      body.labelText = text;
      Composite.add(world, body);
    });

    /* Mouse drag */
    const mouse = Mouse.create(render.canvas);
    const mc = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Composite.add(world, mc);
    render.mouse = mouse;

    /* Draw text labels after each render frame */
    Events.on(render, "afterRender", () => {
      const ctx = render.context;
      if (!ctx) return;

      ctx.font = "bold 13px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      world.bodies.forEach((body) => {
        if (!body.labelText) return;
        ctx.save();
        ctx.translate(body.position.x, body.position.y);
        ctx.rotate(body.angle);
        ctx.fillStyle = "#5b21b6";
        ctx.fillText(body.labelText, 0, 0);
        ctx.restore();
      });
    });

    /* Resize handler */
    const onResize = () => {
      const newW = sceneRef.current?.offsetWidth || window.innerWidth;
      render.canvas.width = newW;
      render.options.width = newW;
      Render.setPixelRatio(render, window.devicePixelRatio);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-white border-t border-gray-100">
      {/* Heading */}
      <div className="text-center mb-10">
        <span
          className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
          style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
        >
          Grow Your Business
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
          With Our{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            Expertise
          </span>
        </h2>
        <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
          Toss, drag and drop the technologies we master — every skill built to
          power your digital success.
        </p>
      </div>

      {/* Mobile: static pill grid */}
      <div className="md:hidden flex flex-wrap justify-center gap-3">
        {labels.map((skill) => (
          <span
            key={skill}
            className="text-sm font-semibold text-violet-700 bg-violet-50 border border-violet-200 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Desktop: Matter.js physics canvas */}
      {/* <div
        className="hidden md:block relative w-full rounded-3xl p-5 overflow-hidden border border-violet-100 bg-gradient-to-br from-violet-50/60 to-indigo-50/40 select-none"
        style={{ height: 420 }}
      > */}
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #c4b5fd 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Matter canvas mounts here */}
        <div ref={sceneRef} className="relative inset-0 w-full h-full" />
        
      {/* </div> */}
    </section>
  );
};

export default Heromatterjs;
