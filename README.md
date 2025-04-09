# Dev Curriculum 

Currículo universal para desenvolvedores O projeto é uma aplicação web que apresenta um currículo responsivo e interativo. Através do preenchimento do arquiovo `resumeData.ts`, o usuário pode personalizar as informações que deseja exibir no currículo.

---

### 📄 `resumeData.ts` – Dados de Currículo

Este arquivo exporta os dados do currículo que serão utilizados pela aplicação. Ele deve estar localizado em:  
`/src/data/resumeData.ts`

Crie um arquivo chamado `resumeData.ts` no diretório `src/data` com o seguinte conteúdo e estrutura.

### 📌 Estrutura esperada

```ts
export const resumeData = {
  name: string,
  title: string,
  birthDate: string,
  address: string,
  phone: string,
  contacts: {
    email: string,
    linkedin: string,
    github: string,
  }
};

export const skills: string[] = [
  "JavaScript",
  "Node.js",
  ...
];

export const experiences = [
  {
    title: string,
    company: string,
    date: string,
    description: string
  },
  ...
];

export const education = [
  {
    graduation: string,
    institution: string,
    date: string
  },
  ...
];

export const languages = [
  {
    name: string,
    proeficiency: string,
    level: string
  },
  ...
];

export const projects = [
  {
    title: string,
    description: string,
    technologies: string[],
    url: string
  },
  ...
];
```
