interface EducationProps {
 graduation: string;
 institution: string;
 date: string;

}

export default function Education({ graduation, institution, date }: EducationProps) {
 return (
  <div className="my-4 flex flex-col">
   <div className="flex gap-2 max-w-72 break-words">
    <h3 className="text-gray-400 font-bold">{institution}</h3> |
    <span className="text-gray-400">{date}</span>
   </div>

   <div className="flex">
    <h1 className="text-lg text-gray-600 font-bold max-w-64 break-words">
     {graduation}
    </h1>
   </div>
  </div>
 );
}