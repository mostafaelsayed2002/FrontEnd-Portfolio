import React from "react";

export default function ProjectCard({
  img,
  title,
  description,
  github,
  techarray,
}) {
  return (
    <div className="rounded-3xl gap-3 border-black border p-4 items-center justify-center flex flex-col ">
      <img
        src={img}
        alt="project"
        className="rounded-3xl border  w-[400px] h-[350px]"
      />
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-lg text-center font-normal text-gray-400 ">
        {description}
      </div>

      <div className="flex gap-4">
        {techarray.map((tech) => (
          <div key={tech} className="w-10 h-10">
            {tech}
          </div>
        ))}
      </div>
      <a
        href={github}
        class=" py-2 px-8 bg-transparent hover:bg-blue-500  hover:text-white border-[2px] border-black hover:border-transparent rounded-3xl font-bold"
      >
        GitHub
      </a>
    </div>
  );
}
