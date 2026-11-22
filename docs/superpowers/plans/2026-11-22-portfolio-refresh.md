# Portfolio Refresh Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve recruiter assessment through clear positioning, visual projects, contribution summaries, and evidence.

**Architecture:** Keep the existing Next.js/Tailwind theme and section components. Put typed project data in its own module; use native disclosures and locally bundled project visuals.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion.

**Spec:** The user's approval of all five review recommendations. Page order: Hero → Projects → Research → Experience → About → Skills → Education → Achievements → Contact. Static student/applied-ML headline; four featured visual cards and six projects total; newest-first experience; concise copy and RISC-V correction.

## Global Constraints

- Preserve unrelated files, including the untracked root thesis PDF.
- No invented ownership, deployment links, users, accuracy, or performance results.
- User confirms AgroSphere, Tracewatch, and GlamNet are team projects; Traffic Accident Detection is solo work.
- User's contribution: GlamNet backend; AgroSphere and Tracewatch AI integration.
- Label interface captures and architecture diagrams accurately.
- Tracewatch's 258-line run is documented in artifacts/verification.json, not an independent benchmark.
- Distinguish preprints and thesis work from accepted publications.
- No new runtime dependencies.

## Review Focus

- At 390px, 768px, and desktop widths, avoid horizontal overflow.
- Case studies must open by keyboard and work independently when all projects are shown.
- Images must load locally and have meaningful alt text.
- Page order, navigation, metadata, and the hero's next-section link must agree.
- Code/evidence links must point to relevant repository resources.

## Tasks

- [x] 1. Update page/nav order, positioning, About/experience/achievement copy, current internship dates, and spelling.
- [x] 2. Add typed project case studies and visuals. Baseline: zero 'Read case study' controls. Verify disclosures, six cards, ownership, and evidence links afterward.
- [x] 3. Run TypeScript, production build, responsive/keyboard checks, and independent code review; fix material findings.
- [ ] 4. Commit, check remote state, push the authorized main branch, monitor Vercel, and verify the public domain.

## Evidence

- AgroSphere README and docs/agrodoctor-multicrop.md; original local AgroDoctor UI captures.
- Tracewatch static frontend and artifacts/verification.json.
- Traffic Video_pipeline.py; GlamNet backend source and README.
- CineSuggest and object detection repository READMEs inspected during curation.

## Progress

- Planning complete. Feature branch in the existing checkout preserves unrelated local files.
- Baseline verified: no case-study disclosure controls exist on the live site.

- Validation: initial production build passed; TypeScript passed; 390/768/1440px layouts have no horizontal overflow; Enter/Space disclosure controls, six-project expansion, mobile navigation, light/dark themes, and local images passed browser checks. No browser console errors observed.
- Independent review: no Critical or Important issues; adopted its sr-only full-name improvement. All six repository evidence links were checked.
- Final validation: production build exited 0 after the accessible-name fix; CV and thesis PDF routes returned HTTP 200. The only build notice was an outdated Browserslist dataset.
