# 🚨 LANEZY

## SIF Precursor Intelligence for Industrial HSE

> **Turning unstructured safety reports into explainable, actionable safety intelligence.**

**Smart India Hackathon 2026 · SIH26165 · Team Dethon**

🌐 **Live Prototype:**
https://ganeshsharma247.github.io/lanezy-sif-precursor-intelligence/

💻 **Source Code:**
https://github.com/ganeshsharma247/lanezy-sif-precursor-intelligence

---

## 🧭 At a Glance

|                          |                                                                                |
| ------------------------ | ------------------------------------------------------------------------------ |
| 🎯 **Problem**           | Detect Serious Injury & Fatality (SIF) precursors hidden inside safety reports |
| 🧠 **Approach**          | Explainable NLP-style safety signal analysis                                   |
| 🛡️ **Focus**            | Unsafe Acts · Unsafe Conditions · Near-Miss Reports                            |
| 📊 **Intelligence**      | Risk · Evidence · Life-Saving Rules · Barriers · Patterns                      |
| 👨‍💼 **Decision Model** | Human-in-the-loop HSE review                                                   |
| 🚀 **Deployment**        | GitHub Pages                                                                   |

---

# 🔥 From Safety Reports to Safety Intelligence

Industrial HSE teams generate large volumes of unsafe-act, unsafe-condition and near-miss reports.

The challenge is not simply collecting these reports.

The challenge is **finding the safety-critical information hidden inside them.**

Lanezy transforms narrative safety observations into structured, explainable safety intelligence that can help HSE professionals identify:

* Safety-critical signals
* Supporting evidence
* Potential SIF precursor indicators
* Relevant Life-Saving Rules
* Weak or failed safety barriers
* Recurring safety patterns
* Reports requiring further review

### The Lanezy Intelligence Pipeline

```text
┌─────────────────────────┐
│      SAFETY REPORT      │
│  Unsafe / Near-Miss     │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│    TEXT PROCESSING      │
│   Safety Signal Layer   │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│   EVIDENCE EXTRACTION   │
│   Why does it matter?   │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  RISK PRIORITISATION    │
│  What needs attention?  │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│   LIFE-SAVING RULE      │
│   What rule applies?    │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│   BARRIER ANALYSIS      │
│   What control failed?  │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│   PATTERNS & ANALYTICS  │
│   Where is it recurring?│
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│       HSE REVIEW        │
│    Human-in-the-Loop    │
└─────────────────────────┘
```

> **Lanezy does not replace the HSE professional. It makes critical safety information easier to discover, understand and review.**

---

# 🎯 Problem Statement

### SIH26165

**AI/NLP Engine to Detect Serious Injury & Fatality (SIF) Precursors in OIL's Unsafe-Act/Unsafe-Condition and Near-Miss Reports**

Safety reports often contain early warning signals that may indicate exposure to serious hazards.

These signals can appear as ordinary narrative text, for example:

* Incomplete isolation
* Residual pressure
* Missing or inadequate PPE
* Unsafe lifting conditions
* Bypassed safety controls
* Procedural deviations
* Repeated exposure to hazardous activities
* Weak or failed safety barriers

When report volumes become large, manually identifying these signals and connecting them across reports becomes difficult.

### Lanezy addresses this gap by converting narrative safety observations into structured and explainable safety intelligence.

---

# 💡 What Lanezy Does

Lanezy analyses safety reports through multiple intelligence layers.

### 🔎 01 — Safety Signal Detection

Identifies safety-critical concepts and signals within narrative reports.

### 📝 02 — Evidence Extraction

Highlights the phrases in the original report that support the identified signal.

### ⚠️ 03 — Risk Prioritisation

Generates a prototype prioritisation score and risk classification to help organise HSE review.

### 🛡️ 04 — Life-Saving Rule Mapping

Connects identified safety signals with relevant Life-Saving Rules.

### 🚧 05 — Barrier Intelligence

Analyses potential weaknesses or failures in safety controls and barriers.

### 🔗 06 — Pattern Detection

Connects reports across sites, activities, rules and recurring safety signals.

### 👨‍💼 07 — HSE Review

Provides a human-in-the-loop workflow where the HSE professional retains the final decision.

---

# 🧠 Explainability First

A core design principle of Lanezy is:

> **Don't just show the result. Show the evidence behind the result.**

For example, a report may contain:

```text
"The equipment was not fully isolated
and residual pressure was observed."
```

Lanezy can surface the relevant evidence:

```text
"not fully isolated"
        ↓
Safety Signal
        ↓
Potential Barrier Concern
        ↓
Risk Prioritisation
        ↓
HSE Review
```

This creates a traceable relationship between:

**Original Report → Evidence → Signal → Analysis → HSE Review**

Instead of presenting an unexplained output, Lanezy keeps the reasoning connected to the source observation.

---

# ⚠️ Risk Prioritisation

Lanezy provides a prototype risk-prioritisation mechanism using identified safety signals and contextual factors.

Reports can be organised into risk categories such as:

* Critical
* High
* Medium
* Low

The interface also provides a prototype score that helps organise reports for review.

### Important

The score is intended for **prototype prioritisation and demonstration purposes**.

It should not be interpreted as:

* A calibrated accident probability
* A certified safety prediction
* A guarantee of incident prevention

---

# 🛡️ Life-Saving Rule Intelligence

Lanezy connects identified safety signals with relevant **Life-Saving Rules**.

This creates an additional layer of context for HSE professionals.

The mapping can help identify:

* Hazardous activities
* Critical safety requirements
* Rule-related observations
* Recurring Life-Saving Rule signals
* Sites or activities with repeated rule-related reports

---

# 🚧 Barrier & Control Analysis

A serious safety event is often connected not only to an unsafe act or condition, but also to a weakness in one or more safety barriers.

Lanezy therefore analyses potential barrier and control concerns.

Examples include:

* Inadequate isolation
* Missing protective controls
* Failure to verify controls
* Unsafe work practices
* Procedural non-compliance
* Weak or failed barriers

This helps move the investigation from:

> **"What happened?"**

towards:

> **"Which control or barrier may have been weak?"**

---

# 📊 HSE Intelligence Dashboard

Lanezy provides an integrated workspace for reviewing safety intelligence.

## Report Queue

The Report Queue allows HSE reviewers to search, filter and sort reports using:

* Report ID
* Date
* Site
* Activity
* Life-Saving Rule
* Risk Level
* Risk Score
* Review Status

---

## 🔍 Report Detail Drawer

Selecting a report opens a detailed analysis panel containing:

* Original report narrative
* Risk classification
* Prototype score
* Safety signals
* Supporting evidence
* Life-Saving Rule
* Barrier analysis
* Risk factors
* Related reports
* HSE review actions

This allows the reviewer to investigate a report without leaving the main dashboard.

---

# 📈 Intelligence Analytics

Lanezy provides multiple analytical views to move beyond individual reports.

## 📉 Precursor Trend

Shows how identified precursor signals appear across the available report timeline.

## 🗺️ Site × Life-Saving Rule Heatmap

Shows relationships between sites and Life-Saving Rules to help identify recurring concentrations of observations.

## 🚧 Barrier Signal Analysis

Highlights recurring safety-control and barrier signals.

## 🔗 Risk Patterns

Lanezy connects:

```text
SITE
  ↕
ACTIVITY
  ↕
LIFE-SAVING RULE
  ↕
REPORT
  ↕
SAFETY SIGNAL
  ↕
BARRIER
```

This shifts the analysis from **individual reports** toward **recurring safety patterns**.

---

# 👨‍💼 Human-in-the-Loop HSE Review

Lanezy follows a human-in-the-loop decision-support model.

```text
             Lanezy Analysis
                   │
                   ↓
        ┌─────────────────────┐
        │ HSE Professional    │
        │       Review        │
        └──────────┬──────────┘
                   │
        ┌──────────┼──────────┐
        ↓          ↓          ↓
    CONFIRM     OVERRIDE   REQUEST INFO
```

### Available review states

🟡 **Pending Review**
Report requires HSE evaluation.

🟢 **Confirmed**
HSE reviewer confirms the analysis.

🔵 **Information Requested**
Additional information is required.

🔴 **Overridden**
HSE reviewer overrides the system recommendation.

> **The system provides intelligence and evidence. The HSE professional retains the final decision.**

---

# 📤 CSV Export

The current filtered report dataset can be exported as CSV.

### Exported fields

```text
Report ID
Date
Site
Activity
Life-Saving Rule
Classification
Risk
Score
Review Status
```

This enables further reporting, analysis and review outside the prototype.

---

# 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      HSE REPORT      │
                    │  Unsafe / Near-Miss  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   TEXT PROCESSING    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │  SAFETY SIGNALS      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │  EVIDENCE LAYER      │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
       ┌─────────────┐ ┌──────────────┐ ┌──────────────┐
       │     RISK    │ │ LIFE-SAVING  │ │   BARRIER    │
       │ PRIORITY    │ │    RULE      │ │   ANALYSIS   │
       └──────┬──────┘ └──────┬───────┘ └──────┬───────┘
              └────────────────┼────────────────┘
                               ▼
                    ┌──────────────────────┐
                    │ PATTERN & ANALYTICS  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   HSE ACTION CENTER  │
                    │   Human-in-the-Loop  │
                    └──────────────────────┘
```

---

# 🧩 Project Structure

```text
lanezy/
│
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── data/
│   └── mock-data.js
│
└── assets/
    └── logo/
```

---

# 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Data Layer

* JavaScript-based demonstration dataset
* Structured HSE reports

### Intelligence & Visualisation

* Safety signal analysis
* Evidence highlighting
* Risk prioritisation
* Life-Saving Rule mapping
* Barrier analysis
* Related-report analysis
* Risk pattern visualisation
* Trend analysis
* Site × Rule heatmap
* HSE review workflow

### Deployment

* GitHub
* GitHub Pages

---

# 🎬 Recommended Demo Flow

For an SIH presentation or evaluation, the prototype can be demonstrated in this sequence:

```text
01 → Submit Safety Report
02 → Analyse Safety Signals
03 → Inspect Evidence
04 → Review Risk Prioritisation
05 → View Life-Saving Rule
06 → Inspect Barrier Analysis
07 → Explore Related Reports
08 → Open Risk Patterns
09 → Explore Intelligence Analytics
10 → Perform HSE Review
11 → Export Filtered Data
```

This demonstrates the complete journey from:

**Raw Report → Explainable Intelligence → HSE Action**

---

# 🔬 Prototype Transparency

Lanezy is currently a **functional demonstration prototype**.

The present implementation uses:

* Demonstration HSE data
* Deterministic prototype logic
* Rule-based safety signal processing
* Explainable analysis
* Prototype risk prioritisation
* Browser-based review state

### The current prototype does NOT claim to provide:

❌ Production-trained AI
❌ Certified HSE prediction
❌ Calibrated SIF probability
❌ Guaranteed incident prediction
❌ Live OIL production infrastructure
❌ Autonomous safety decisions
❌ Production-grade model accuracy

This distinction is intentional.

Safety intelligence for real-world deployment requires domain validation, appropriate historical data, reviewed labels, validated models and rigorous evaluation.

---

# 🔮 Production Evolution

The prototype architecture can evolve into an enterprise-grade safety-intelligence platform.

## Data Pipeline

```text
Historical HSE Reports
        ↓
Data Cleaning
        ↓
Domain Annotation
        ↓
Validated Dataset
        ↓
Model Training & Evaluation
```

## AI / NLP Layer

Potential production capabilities include:

* Domain-specific NLP
* Transformer-based classification
* Semantic embeddings
* Multi-label classification
* Named Entity Recognition
* Semantic similarity
* Precursor clustering
* Recurrence detection
* Reviewer feedback loops

## Enterprise Architecture

```text
HSE Systems
     │
     ▼
Secure Data/API Layer
     │
     ▼
NLP / ML Processing
     │
     ▼
Safety Intelligence Engine
     │
     ▼
Analytics & Dashboard
     │
     ▼
HSE Professional Review
```

Potential enterprise deployment could support secure infrastructure, role-based access, authentication, audit trails and private/on-premise environments according to organisational requirements.

---

# 🌍 Expected Impact

Lanezy is designed around a shift from:

```text
REACTIVE SAFETY

Incident
   ↓
Investigation
   ↓
Learning
```

towards:

```text
PROACTIVE SAFETY INTELLIGENCE

Observation
     ↓
Safety Signal
     ↓
Evidence
     ↓
Pattern
     ↓
HSE Review
     ↓
Action
```

The intended benefits include:

* Faster identification of safety-critical observations
* Better visibility into recurring precursor patterns
* More explainable safety analytics
* Structured prioritisation of reports
* Improved understanding of barrier weaknesses
* Support for proactive HSE management

---

# 🧭 Design Principles

| Principle               | Lanezy Approach                                   |
| ----------------------- | ------------------------------------------------- |
| 🔎 **Explainability**   | Evidence accompanies the analysis                 |
| 👨‍💼 **Human Control** | HSE professional retains final decision           |
| 🎯 **Actionability**    | Focus on signals, barriers and recurring patterns |
| 🔗 **Traceability**     | Analysis connects back to source reports          |
| 🧪 **Transparency**     | Prototype limitations are explicitly documented   |
| 📈 **Scalability**      | Architecture can evolve toward enterprise NLP/ML  |

---

# 📊 Project Status

| Capability               |  Status |
| ------------------------ | :-----: |
| Safety Report Analysis   |    ✅    |
| Safety Signal Detection  |    ✅    |
| Explainable Evidence     |    ✅    |
| Risk Prioritisation      |    ✅    |
| Life-Saving Rule Mapping |    ✅    |
| Barrier Analysis         |    ✅    |
| Related Reports          |    ✅    |
| Report Queue             |    ✅    |
| Search & Filters         |    ✅    |
| Risk Patterns            |    ✅    |
| Intelligence Analytics   |    ✅    |
| HSE Action Center        |    ✅    |
| Human-in-the-Loop Review |    ✅    |
| CSV Export               |    ✅    |
| GitHub Pages Deployment  |    ✅    |
| Live Prototype           | 🟢 Live |

---

# 👥 Team Dethon

Developed as part of:

**Smart India Hackathon 2026**

**Problem Statement:** SIH26165

**Focus:** AI/NLP-assisted detection of Serious Injury & Fatality precursors in industrial safety reports.

---

# 🏁 Final Takeaway

Lanezy is built around a simple idea:

> ### **Safety reports already contain valuable warning signals.**
>
> ### **The challenge is finding them, explaining them and connecting them.**

Lanezy transforms:

**Unstructured Safety Reports**

into

**Explainable SIF Precursor Intelligence**

and finally into

**Human-Guided HSE Action.**

---

### 🚨 LANEZY

**Identify signals. Understand evidence. Discover patterns. Support safer decisions.**

**Smart India Hackathon 2026 · Team Dethon**
