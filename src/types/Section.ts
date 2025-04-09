export interface SectionItem {
 id: string;
 type: "component";
 content: React.ReactNode;
}

export interface SectionColumn {
 id: string;
 items: SectionItem[];
}
