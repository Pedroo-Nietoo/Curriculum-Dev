import { Github, Linkedin, Mail } from "lucide-react";

interface ContactInfoProps {
 email: string;
 linkedin: string;
 github: string;
}

export default function ContactInfo({ email, linkedin, github }: ContactInfoProps) {
 return (
  <div className="flex flex-col">
   <div className="items-start">
    {email && (
     <p className="text-gray-400 flex items-center gap-2">
      <Mail className="h-5" />
      <a href={`mailto:${email}`} className="hover:underline">{email}</a>
     </p>
    )}
    {linkedin && (
     <p className="text-gray-400 flex items-center gap-2">
      <Linkedin className="h-5" />
      <a href={`https://www.linkedin.com/in/${linkedin}`} className="hover:underline">in/{linkedin}</a>
     </p>
    )}
    {github && (
     <p className="text-gray-400 flex items-center gap-2">
      <Github className="h-5" />
      <a href={`https://github.com/${github}`} className="hover:underline">{github}</a>
     </p>
    )}
   </div>
  </div>
 );
}
