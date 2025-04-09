"use client";

import {
 DndContext,
 closestCorners,
 PointerSensor,
 useSensor,
 useSensors,
 DragEndEvent,
 DragStartEvent,
 DragOverEvent
} from "@dnd-kit/core";
import {
 arrayMove,
 SortableContext,
 verticalListSortingStrategy,
 useSortable
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface SectionItem {
 id: string;
 content: React.ReactNode;
}

interface SectionColumn {
 id: string;
 items: SectionItem[];
}

interface Props {
 initialColumns: SectionColumn[];
}

export default function DragAndDropLayout({ initialColumns }: Props) {
 const [columns, setColumns] = useState(initialColumns);

 const sensors = useSensors(useSensor(PointerSensor));
 const [activeId, setActiveId] = useState<string | null>(null);

 const handleDragStart = (event: DragStartEvent) => {
  setActiveId(event.active.id as string);
 };

 const handleDragOver = (event: DragOverEvent) => {
  const { active, over } = event;
  if (!over) return;

  const activeColumnIndex = columns.findIndex((col) =>
   col.items.find((item) => item.id === active.id)
  );
  const overColumnIndex = columns.findIndex((col) =>
   col.items.find((item) => item.id === over.id)
  );

  if (activeColumnIndex !== overColumnIndex) {
   const activeItem = columns[activeColumnIndex].items.find((item) => item.id === active.id)!;

   const newColumns = [...columns];
   newColumns[activeColumnIndex].items = newColumns[activeColumnIndex].items.filter(
    (item) => item.id !== active.id
   );
   newColumns[overColumnIndex].items.splice(0, 0, activeItem); // Add to top

   setColumns(newColumns);
  }
 };

 const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;
  if (!over || active.id === over.id) return;

  const columnIndex = columns.findIndex((col) =>
   col.items.find((item) => item.id === active.id)
  );

  const itemIndex = columns[columnIndex].items.findIndex((item) => item.id === active.id);
  const overIndex = columns[columnIndex].items.findIndex((item) => item.id === over.id);

  const newItems = arrayMove(columns[columnIndex].items, itemIndex, overIndex);
  const newColumns = [...columns];
  newColumns[columnIndex].items = newItems;
  setColumns(newColumns);
 };

 return (
  <DndContext
   collisionDetection={closestCorners}
   onDragStart={handleDragStart}
   onDragEnd={handleDragEnd}
   onDragOver={handleDragOver}
   sensors={sensors}
  >
   <div className="flex gap-10">
    {columns.map((column) => (
     <div key={column.id} className="w-1/2 flex flex-col items-end gap-6">
      <SortableContext items={column.items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
       {column.items.map((item) => (
        <SortableItem key={item.id} id={item.id} activeId={activeId}>
         {item.content}
        </SortableItem>
       ))}
      </SortableContext>
     </div>
    ))}
   </div>
  </DndContext>
 );
}

function SortableItem({ id, children, activeId }: { id: string; children: React.ReactNode; activeId: string | null }) {
 const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

 const style = {
  transform: CSS.Transform.toString(transform),
  transition,
  cursor: "grab",
  backgroundColor: id === activeId ? "lightblue" : "transparent",
 };

 return (
  <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
   {children}
  </div>
 );
}