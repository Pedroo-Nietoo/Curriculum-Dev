interface LanguageProps {
 name: string;
 proeficiency: string;
 level: string;
}

export default function Language({ name, proeficiency, level }: LanguageProps) {
 return (
  <div className="mt-4 mb-2">
   <div className="flex justify-between">
    <div className="flex gap-2 items-center">
     <span className="bg-gray-200 px-3 py-2 rounded-md text-gray-700">{name}</span>
     <div className="flex flex-col items-start">
      <span className="text-gray-700 font-bold">{proeficiency}</span>
      <span className="text-gray-700">{level}</span>
     </div>
    </div>
   </div>
  </div>
 );
}