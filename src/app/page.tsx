import Bullet from "@/components/bullet"
import Experience from "@/components/experience";

export default function Home() {

  const skills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "Fastify",
    "NestJS",
    "Java",
    "Spring Boot",
    "React",
    "Angular",
    "React Native",
    "Bootstrap",
    "Sass",
    "Material Icon",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "PrismaORM",
    "TypeORM",
    "Docker",
    "AWS",
    "Cypress",
    "Jest",
    "JUnit",
    "Git",
    "POO",
    "Testes Unitários e E2E",
    "Front-end",
    "Back-end",
    "Full-Stack",
  ]

  const experiences = [
    {
      title: "Desenvolvedor Backend",
      company: "Intelbras",
      date: "2023 - 2024",
      description: "Desenvolvi, testei, diagramei e documentei parte do software Guardian Parceiro - uma CLI para Canary Testing dos endpoints da aplicação, além de desenvolver testes automatizados em microserviços utilizando TypeScript, Node.js, NestJS, Swagger, PrismaORM, Docker, Jest, Java, Spring Boot, JUnit e PostgreSQL."
    },
    {
      title: "Quality Assurance",
      company: "Essentia Group",
      date: "fev/2023 - mai/2024",
      description: "Realizei testes manuais Mobile e Desktop dos softwares de saúde Easy Health e Easy Patient, além de desenvolver testes automatizados com Cypress, abrir tarefas durante as sprints e auxiliar no desenvolvimento do software utilizando Cypress, Jira, Angular, Bootstrap, Sass, Typescript, Node, TypeORM e MySQL."
    },
    {
      title: "Desenvolvedor Full-Stack",
      company: "Essentia Group",
      date: "mai/2023 - Presente",
      description: "Desenvolvi o sistema de controle de estoque integrado com pedidos de compra, sistemas de compartilhamentos de arquivos baseados em permissões em diversos meios (e-mail, WhatsApp e integração com o aplicativo do sistema), assinaturas de documentos com certificados digitais e a integração e desenvolvimento de módulos de Inteligência Artificial (IA) - como recomendações médicas através do uso de IA integrada com bases de dados - para reduzir o esforço dos usuários e facilitar suas tarefas cotidianas! Além disso, desenvolvo, mantenho e documento a aplicação conforme os processos e tarefas da sprint utilizando Angular, Bootstrap, Material Icon, Pug, Sass, Typescript, Storybook, Node.js, TypeORM, Swagger, MySQL, MongoDB, PHP, Zend, e NestJS."
    }
  ]

  return (
    <div className="flex flex-col p-40">
      <div className="w-100 flex">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-gray-700 mb-2">Pedro Henrique Nieto da Silva</h1>
          <h3 className="text-3xl font-semibold text-gray-400">Desenvolvedor Full-Stack</h3>

          <div className="flex mt-4 gap-3">
            <p className="text-gray-400">Nascimento: 27/11/2005</p>|
            <p className="text-gray-400">Endereço: São José - SC</p>|
            <p className="text-gray-400">Telefone: +55 48 98806-3563</p>
          </div>
        </div>

        <div className="w-1/2 flex justify-end text-end">
          <div className="flex-col">
            <p className="text-gray-400">
              <a href="mailto:pedronieto.2005@gmail.com" className="hover:underline">pedronieto.2005@gmail.com</a>
            </p>
            <p className="text-gray-400">
              <a href="https://www.linkedin.com/in/pedroo-nietoo/" className="hover:underline">in/pedroo-nietoo</a>
            </p>
            <p className="text-gray-400">
              <a href="https://github.com/Pedroo-Nietoo" className="hover:underline">@Pedroo-Nietoo</a>
            </p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <h3 className="text-3xl font-semibold text-gray-700">Habilidades</h3>

        <div className="flex flex-wrap w-1/2">
          {
            skills.map((skill, index) => (
              <Bullet key={index} skill={skill} />
            ))
          }
        </div>
      </div>

      <div className="my-10">
        <h3 className="text-3xl font-semibold text-gray-700 mb-3">Experiências</h3>
        {
          experiences.map((experience, index) => (
            <Experience
              key={index}
              title={experience.title}
              company={experience.company}
              date={experience.date}
              description={experience.description}
            />
          ))
        }
      </div>
    </div>
  );
}
