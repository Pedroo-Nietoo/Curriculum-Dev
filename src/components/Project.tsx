import { ArrowRight } from "lucide-react";

interface ProjectProps {
 title: string;
 description: string;
 technologies: string[];
 url: string;
}

export default function Project({ title, description, technologies, url }: ProjectProps) {
 return (
  <div className="mt-4 mb-2 bg-white rounded-lg p-4 border border-gray-200">
   <a
    href={url}
    target="_blank"
    className="flex items-center underline decoration-transparent hover:decoration-inherit transition-all"
   >
    <span className="text-gray-700 font-semibold">{title}</span>
    <ArrowRight className="ml-2 h-4 text-gray-700 transition-transform hover:translate-x-1" />
   </a>
   <div className="flex flex-col items-start">
    <span className="text-gray-400">{description}</span>
    <div className="flex flex-wrap gap-2 my-4">
     {technologies.map((tech) => (
      <span
       key={tech}
       className="bg-gray-200 py-1 px-2 rounded-md text-sm text-gray-600"
      >
       {tech}
      </span>
     ))}
    </div>
   </div>
  </div>
 );
}
