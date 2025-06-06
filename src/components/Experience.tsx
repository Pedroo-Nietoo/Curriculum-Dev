interface ExperienceProps {
 title: string;
 company: string;
 date: string;
 description: string;
}

export default function Experience({ title, company, date, description }: ExperienceProps) {
 return (
  <div className="w-[40vw] mb-4">
   <div className="flex justify-between mb-2">
    <div>
     <span className="text-gray-600 font-bold">{company}</span> | <span className="text-gray-700">{title}</span>
    </div>

    <div>
     <span className="text-gray-600">{date}</span>
    </div>
   </div>

   <p className="mb-8 text-gray-400">{description}</p>
  </div>
 );
}