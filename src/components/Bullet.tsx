export default function Bullet({ skill }: { skill: string }) {
 return (
  <div className="mx-1 my-2">
   <span className="bg-gray-200 py-2 px-3 rounded-md text-gray-700">{skill}</span>
  </div>
 );
}