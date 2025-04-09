interface ProjectProps {
 title: string;
 description: string;
 technologies: string[];
 url: string;
}

export default function Project({ title, description, technologies, url }: ProjectProps) {
 return (
  <div className="mt-4 mb-2">
   <a href={url} target="_blank">
    <span className="text-gray-700 font-semibold">{title}</span>
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
   </a>
  </div>
 );
}
