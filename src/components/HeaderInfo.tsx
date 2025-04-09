interface HeaderInfoProps {
 name: string;
 title: string;
 birthDate: string;
 address: string;
 phone: string;
}

export default function HeaderInfo({ name, title, birthDate, address, phone }: HeaderInfoProps) {
 return (
  <div>
   <h1 className="text-4xl font-bold text-gray-700 mb-2">{name}</h1>
   <h3 className="text-3xl font-semibold text-gray-400">{title}</h3>

   <div className="flex mt-4 gap-3 flex-wrap">
    <p className="text-gray-400">Nascimento: {birthDate}</p> |
    <p className="text-gray-400">Endereço: {address}</p> |
    <p className="text-gray-400">Telefone: {phone}</p>
   </div>
  </div>
 );
}
