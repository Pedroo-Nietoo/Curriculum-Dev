"use client";

import { useState } from "react";
import { DndContext, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import HeaderInfo from "@/components/HeaderInfo";
import ContactInfo from "@/components/ContactInfo";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Language from "@/components/Language";
import Bullet from "@/components/Bullet";
import Project from "@/components/Project";

import {
  resumeData,
  skills as initialSkills,
  experiences as initialExperiences,
  education as initialEducation,
  languages as initialLanguages,
  projects as initialProjects,
} from "@/data/resumeData";

function SortableSectionItem({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

function SortableProjectItem({ id, project }: { id: string; project: any }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Project {...project} />
    </div>
  );
}

export default function Page() {
  const sensors = useSensors(useSensor(PointerSensor));

  const [leftSections, setLeftSections] = useState(["skills", "experience"]);
  const [rightSections, setRightSections] = useState(["contacts", "education", "languages"]);
  const [projects, setProjects] = useState(initialProjects);

  const handleSectionDragEnd = (
    event: import("@dnd-kit/core").DragEndEvent,
    setSections: React.Dispatch<React.SetStateAction<string[]>>,
    sections: string[]
  ) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sections.indexOf(active.id as string);
    const newIndex = sections.indexOf(over.id as string);

    setSections(arrayMove(sections, oldIndex, newIndex));
  };

  const handleProjectsDragEnd = (event: import("@dnd-kit/core").DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = projects.findIndex((p) => p.title === active.id);
    const newIndex = projects.findIndex((p) => p.title === over.id);

    setProjects(arrayMove(projects, oldIndex, newIndex));
  };

  return (
    <div className="px-4 py-8 sm:px-10 md:px-20 xl:p-40">
      <HeaderInfo {...resumeData} />

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-3/5">
          <DndContext sensors={sensors} onDragEnd={(e) => handleSectionDragEnd(e, setLeftSections, leftSections)}>
            <SortableContext items={leftSections} strategy={verticalListSortingStrategy}>
              {leftSections.map((section) => (
                <SortableSectionItem key={section} id={section}>
                  {section === "skills" && (
                    <div className="my-10">
                      <h3 className="text-2xl font-semibold text-gray-700">Habilidades</h3>
                      <div className="flex flex-wrap w-full">
                        {initialSkills.map((skill, index) => (
                          <Bullet key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                  )}
                  {section === "experience" && (
                    <div className="my-10">
                      <h3 className="text-2xl font-semibold text-gray-700 mb-3">Experiências</h3>
                      {initialExperiences.map((exp, index) => (
                        <Experience key={index} {...exp} />
                      ))}
                    </div>
                  )}
                </SortableSectionItem>
              ))}
            </SortableContext>
          </DndContext>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col items-start lg:items-end">
          <DndContext sensors={sensors} onDragEnd={(e) => handleSectionDragEnd(e, setRightSections, rightSections)}>
            <SortableContext items={rightSections} strategy={verticalListSortingStrategy}>
              {rightSections.map((section) => (
                <SortableSectionItem key={section} id={section}>
                  {section === "contacts" && (
                    <div className="w-full max-w-xs my-8">
                      <ContactInfo {...resumeData.contacts} />
                    </div>
                  )}

                  {section === "education" && (
                    <div className="flex flex-col items-start w-full max-w-xs my-8">
                      <h3 className="text-2xl font-semibold text-gray-700">Educação</h3>
                      {initialEducation.map((edu, index) => (
                        <Education key={index} {...edu} />
                      ))}
                    </div>
                  )}

                  {section === "languages" && (
                    <div className="flex flex-col items-start w-full max-w-xs my-8">
                      <h3 className="text-2xl font-semibold text-gray-700">Idiomas</h3>
                      {initialLanguages.map((lang, index) => (
                        <Language key={index} {...lang} />
                      ))}
                    </div>
                  )}
                </SortableSectionItem>
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>

      <div className="flex flex-col my-10">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Projetos</h3>
        <DndContext sensors={sensors} onDragEnd={handleProjectsDragEnd}>
          <SortableContext items={projects.map((p) => p.title)} strategy={verticalListSortingStrategy}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <SortableProjectItem key={project.title} id={project.title} project={project} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
