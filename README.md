# Lanezy: AI/NLP SIF Precursor Detection (SIH26165)

## Overview
Front-end prototype of **Lanezy**, built by **Team Dethon** for Smart India Hackathon 2026 (Theme: Smart Automation, Category: Software). All analysis is **simulated**; all data is **sample data**.

## Problem Statement
AI/NLP Engine to Detect Serious Injury & Fatality (SIF) Precursors in OIL's Unsafe-Act/Unsafe-Condition and Near-Miss Reports. Free-text reports are reviewed manually in periodic batches, so precursors can stay unnoticed.

## Proposed Solution
Classify reports as SIF-potential or not, map them to IOGP Life-Saving Rules, discover activity/location/barrier patterns, prioritise by precursor density, and keep HSE experts in the loop.

## Key Features
- Interactive report analyser (simulated staged processing, confidence, rule tags, barrier failures, highlighted terms, similar reports, recommended step)
- HSE review actions (Confirm / Override / Request info)
- Dashboard with search, site and risk filters, KPI cards, charts, recurring patterns, table
- Workflow and architecture views, impact and risk safeguards

## System Workflow
Safety report → NLP preprocessing → SIF classification → Life-Saving Rule mapping → Pattern detection → Risk prioritisation → HSE dashboard → Human review

## Technology Stack
Prototype: HTML5, CSS3, vanilla JavaScript (no dependencies). Planned: Python, NLP/ML classifier, multi-label/semantic matching, clustering, web dashboard.

## Project Structure
```
index.html
css/style.css
js/script.js          # UI + simulated analyze() (swap for real API)
data/mock-data.js     # config, rule dictionary, sample reports
```
Edit project name, tagline, team and sample data in `data/mock-data.js`. Theme colors are CSS variables at the top of `css/style.css`.

## How to Run Locally
Open the folder in VS Code and run **Live Server** on `index.html`, or run `python -m http.server 8000` and visit http://localhost:8000.

## How to Deploy (GitHub Pages)
1. Push the project to a GitHub repository (files at the repo root).
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`, Save.
4. After a minute the site is live at `https://<username>.github.io/<repo>/`.

Optional: drag the folder into Netlify, or import the repo in Vercel.

## Future Scope
Train a supervised classifier on domain-reviewed labels; multi-label Life-Saving Rule model; clustering-based pattern discovery; reviewer feedback loop; on-premise deployment; more rule categories.

## Team
Team Dethon
- Member 1 (placeholder)
- Member 2 (placeholder)
- Member 3 (placeholder)
