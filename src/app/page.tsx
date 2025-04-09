import Bullet from "@/components/Bullet"
import ContactInfo from "@/components/ContactInfo";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HeaderInfo from "@/components/HeaderInfo";
import Language from "@/components/Language";
import Project from "@/components/Project";
import { education, experiences, languages, projects, resumeData, skills } from "@/data/resumeData";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="p-40">
      <div className="flex pb-20">
        <div className="w-3/5 pr-10">
          <HeaderInfo
            name={resumeData.name}
            title={resumeData.title}
            birthDate={resumeData.birthDate}
            address={resumeData.address}
            phone={resumeData.phone}
          />

          <div className="my-20">
            <h3 className="text-2xl font-semibold text-gray-700">Habilidades</h3>

            <div className="flex flex-wrap w-full">
              {skills.map((skill, index) => (
                <Bullet key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="my-10">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Experiências</h3>
            {experiences.map((experience, index) => (
              <Experience
                key={index}
                title={experience.title}
                company={experience.company}
                date={experience.date}
                description={experience.description}
              />
            ))}
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-end pl-10">
          <div className="w-full max-w-xs">
            <ContactInfo
              email={resumeData.contacts.email}
              linkedin={resumeData.contacts.linkedin}
              github={resumeData.contacts.github}
            />
          </div>

          <div className="flex flex-col items-start w-full max-w-xs mt-24">
            <h3 className="text-2xl font-semibold text-gray-700">Educação</h3>

            {education.map((edu, index) => (
              <Education
                key={index}
                graduation={edu.graduation}
                institution={edu.institution}
                date={edu.date}
              />
            ))}
          </div>

          <div className="flex flex-col items-start w-full max-w-xs mt-24">
            <h3 className="text-2xl font-semibold text-gray-700">Idiomas</h3>

            {languages.map((language, index) => (
              <Language
                key={index}
                name={language.name}
                proeficiency={language.proeficiency}
                level={language.level}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex  flex-col my-10">
        <h3 className="text-2xl font-semibold text-gray-700">Projetos</h3>

        <div className="grid grid-cols-3 gap-12">
          {
            projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                url={project.url}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}