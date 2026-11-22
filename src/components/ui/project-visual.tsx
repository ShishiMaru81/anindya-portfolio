import Image from "next/image";
import { ArrowDown, ArrowRight, Camera, FileSearch, Film, Layers, ScanLine, ShieldCheck } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "agrosphere") {
    return (
      <figure className="relative h-64 overflow-hidden border-b border-border bg-[#e9f2eb]">
        <figcaption className="absolute left-5 top-4 z-10 text-[11px] font-semibold uppercase tracking-widest text-[#285b43]">AgroDoctor · Interface captures</figcaption>
        <div className="absolute inset-x-6 top-12 flex items-start justify-center gap-5">
          <Image src="/images/projects/agrosphere-chat.png" width={374} height={528} alt="AgroDoctor farmer chat showing a saved crop screening and its sources" className="w-[43%] max-w-[155px] rounded-t-xl shadow-xl" />
          <Image src="/images/projects/agrosphere-bangla.png" width={318} height={807} alt="AgroDoctor Bangla action card with follow-up guidance and farmer support" className="w-[43%] max-w-[155px] rounded-t-xl shadow-xl" />
        </div>
      </figure>
    );
  }
  if (project.visual === "tracewatch") {
    return (
      <figure className="relative h-64 overflow-hidden border-b border-border bg-[#0b0f13]">
        <Image src="/images/projects/tracewatch-interface.jpg" alt="Tracewatch upload interface captured from its original frontend source" fill sizes="(max-width: 767px) 100vw, 560px" className="object-contain p-3" />
        <figcaption className="absolute bottom-3 right-3 rounded-full bg-[#0b0f13]/90 px-3 py-1 text-[10px] text-[#d1e8b2]">Upload interface · source preview</figcaption>
      </figure>
    );
  }
  if (project.visual === "glamnet") {
    return (
      <figure className="relative h-64 overflow-hidden border-b border-border bg-[#b8738b]">
        <Image src="/images/projects/glamnet-interface.jpg" alt="GlamNet web application showing its navigation and sign-in interface" fill sizes="(max-width: 767px) 100vw, 560px" className="object-contain" />
        <figcaption className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-[10px] text-foreground">GlamNet · Sign-in interface</figcaption>
      </figure>
    );
  }
  const isTraffic = project.visual === "traffic";
  const isCinema = project.visual === "cinema";
  const nodes = isTraffic
      ? [{ icon: Camera, title: "Video frames", text: "OpenCV input" }, { icon: ScanLine, title: "Two YOLO models", text: "Crashes + vehicles" }, { icon: Film, title: "Annotated video", text: "Status · count · density" }]
      : isCinema
        ? [{ icon: Film, title: "Movie metadata", text: "Titles & descriptions" }, { icon: FileSearch, title: "TF-IDF vectors", text: "Cosine similarity" }, { icon: Layers, title: "Recommendations", text: "Streamlit interface" }]
        : [{ icon: Camera, title: "Webcam / video", text: "Frame input" }, { icon: ScanLine, title: "YOLOv8 + SORT", text: "Detection & tracking" }, { icon: ShieldCheck, title: "Labelled objects", text: "Classes · IDs · confidence" }];
  return (
    <figure className="flex h-64 flex-col justify-center gap-6 overflow-hidden border-b border-border bg-gradient-to-br from-sky-500/10 via-card to-primary/10 p-5">
      <figcaption className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Pipeline overview</figcaption>
      <div className="flex items-start justify-between gap-2">
        {nodes.map((node, index) => (
          <div key={node.title} className="contents">
            <div className="min-w-0 flex-1 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/80 text-foreground"><node.icon className="h-5 w-5" aria-hidden="true" /></div>
              <p className="text-xs font-semibold leading-relaxed text-foreground">{node.title}</p>
              <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">{node.text}</p>
            </div>
            {index < nodes.length - 1 && <ArrowRight className="mt-4 h-4 w-4 flex-shrink-0 text-primary/70" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <p className="flex items-center gap-2 text-[11px] text-muted-foreground"><ArrowDown className="h-3 w-3 text-primary" aria-hidden="true" />System diagram based on repository source</p>
    </figure>
  );
}
