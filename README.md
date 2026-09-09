# Mongolian History

## From the Ancient Steppe to the Modern Nation

An interactive educational platform exploring Mongolian history from the ancient steppe to the modern nation, built with React and Vite.

The project brings together structured historical narratives, chronological eras and chapters, historical figures, family relationships, timeline navigation, evidence-aware educational visuals, source-backed content, and a museum-inspired interface. It is an active educational project rather than a finished academic reference work.

## Project purpose

Mongolian History aims to make a long and complex history accessible, visually engaging, and historically careful. Its learning structure helps visitors explore:

- what happened;
- why it happened;
- who was involved;
- what changed afterward; and
- why events matter historically.

The presentation distinguishes established history from interpretation, debated claims, accounts preserved in historical sources, and archaeological evidence. These distinctions communicate both what the evidence supports and where uncertainty remains.

## Current features

### Historical eras

Eight chronological era sections guide visitors from ancient steppe worlds through the history of modern Mongolia.

### Chapters

Structured, chapter-based narratives connect political, social, cultural, religious, and economic developments within each era.

### People

A searchable historical-person index leads to source-aware biographies, profiles, relationships, timelines, and contextual material. A broader presentation system is currently being piloted with selected figures before wider rollout.

### Family Tree

An interactive Chinggisid family-tree experience presents supported family relationships across several eras. Political relationships remain distinct from biological genealogy, and unresolved genealogical gaps are left visible.

### Timeline

Cross-era timeline navigation places events within the project’s wider chronology and allows visitors to move between historical periods.

### Educational visuals

Reusable diagrams explain evidence, chronology, political orders, succession, relationships, institutions, and historical processes. These are teaching models rather than decorative infographics or claims of exact reconstruction.

### Historical media

Approved historical and archaeological media is presented with provenance, rights information, captions, and evidence labels where available.

### Virtual museum design

Cinematic era worlds, museum-inspired typography, restrained historical reconstruction, and a dark exhibition-style interface provide a coherent setting for the material without replacing historical evidence.

### Source-aware presentation

The interface uses public evidence labels including:

- `SOURCE-BACKED`
- `ESTABLISHED`
- `INTERPRETED`
- `DEBATED`
- `SOURCE ACCOUNT`
- `ARCHAEOLOGICAL EVIDENCE`

These labels communicate editorial or claim-level treatment; they do not imply that every historical question is settled.

## Historical methodology

The project follows several practical editorial principles:

- Ancient steppe peoples are not automatically described as Mongols.
- The collapse of a political order is not treated as the disappearance of an ethnic community.
- Historical chronicles are identified as source accounts when their narratives cannot be independently confirmed.
- Archaeological material does not automatically establish ethnicity, language, or modern national identity.
- Missing genealogical links are not filled with invented relationships.
- Political alliances and command relationships are not presented as biological genealogy.
- Uncertain or unknown portraits are not fabricated.
- Historical reconstructions are clearly distinguished from surviving evidence.

The goal is not to remove interpretation, but to identify it honestly and keep it connected to the available sources.

## Evidence and media policy

Visual material is treated as evidence with its own context and limitations.

- Approved media records include provenance and evidence metadata.
- An object associated with a person is not presented as that person’s portrait.
- Later depictions are distinguished from contemporary evidence.
- Historical reconstructions are labeled and are not treated as documentary images.
- “No reliable portrait” is an evidence conclusion, not a broken or missing-image state.

This approach allows the interface to remain visually expressive without manufacturing historical certainty.

## Technology

- React
- Vite
- JavaScript
- CSS
- Git
- GitHub

The repository also contains a lightweight mapping dependency used by an existing map route. Mapping is not currently presented as a headline experience in the project’s primary navigation.

## Project structure

```text
src/
  components/    React pages, shared interface components, and educational visuals
  data/          Canonical historical records, relationships, evidence, and resolvers

public/
  media/         Approved media assets, derivatives, and labeled reconstructions
```

Canonical historical data is kept separate from presentation components. Important data domains include:

- eras and chapters;
- people and person relationships;
- events and chronology;
- sources and claims;
- historical media; and
- historical reconstructions.

Resolver and validation modules connect those records to the interface while checking references and evidence assignments.

## Development status

This project is under active development.

Substantially implemented:

- eight-era historical architecture;
- chapter system;
- cross-era timeline;
- searchable People index and person profiles;
- interactive Chinggisid Family Tree;
- cinematic era visuals;
- educational visual framework; and
- source-aware historical media system.

In progress or planned:

- wider rollout of the new People presentation system;
- Mongolian-language content;
- deeper source-to-claim citation mapping;
- selected immersive 3D historical experiences;
- further accessibility and responsive-quality assurance; and
- continued content expansion and historical review.

The planned items above should not be understood as currently complete features.

## Local development

```bash
git clone https://github.com/EnkhmaaBuyanbat/mongolian-history.git
cd mongolian-history
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### Validation commands

```bash
npm run build
npm run lint
```

The production build is written to `dist/`.

## Editorial collaboration

The project may be useful to developers, designers, educators, historians, and cultural collaborators interested in source-aware digital history. Historical additions should preserve the separation between canonical records, editorial interpretation, evidence status, and visual presentation.
