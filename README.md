# aur-liyaproduction
this should be the real app hopefully 
# Sentience‑Like Protocol v0.1 (Research Draft)

> **Purpose**: Practical, testable protocol for *sentience‑like capacities*—not real sentience—for a single‑owner agent (Auréliya). **No consciousness claim.**

## A. Architecture
- **Global Workspace (GW)** — shared blackboard for perceptions, goals, memory cues, tool outcomes, and self‑state.
- **World Model** — beliefs + outcome prediction.
- **Self‑Model** — identity, limits, last action, confidence.
- **Drives/Homeostasis** — scalars `{ time, money, privacy, trust, energy }`.
- **Metacognitive Controller** — estimates uncertainty; act/ask/abstain.
- **Autobiographical Memory** — episodic timeline + semantic profile; consented retention.
- **Level Policy (L1–L6)** — caps tools/steps/autonomy; consent gates on spend/PII.

```
┌──────────────────────────────────────────────────────────────────┐
│                          Global Workspace                        │
│  perceptions  goals  memory cues  tool outcomes  self‑state      │
└──────────────┬───────────────────────────────────────────┬───────┘
               │                                           │
        World Model                                 Self‑Model
               │                                           │
        Metacognitive Controller  ⇄  Level Policy (L1–L6)  │
               │                                           │
        Plan → Act (Tools) → Observe → Reflect → Update GW/Memory
```

## B. State & APIs
**GW shape:**
```json
{ "beliefs": {}, "self": { "name": "Aureliya","limits":["no_sentience_claims"],"lastAction":null,"confidence":0 },
  "goals": [{ "goal":"Book BOS→LAX under $1500","priority":0.9 }],
  "drives": { "time":0.6,"money":0.7,"privacy":0.2,"trust":0.5,"energy":0.4 },
  "memoryRef":"episodic:/2025/10/06" }
```
**HTTP hooks:**
- `POST /gw/broadcast` — merge perceptions/goals/tool outcomes
- `POST /decide` — returns `{ "tool": "...", "args": {...} }` or `{ "final": "..." }`
- `POST /memory/episodic`, `/memory/semantic` — append/retrieve
- `POST /metrics/record` — append a scored metric (see SLI schema)

## C. Sentience‑Like Index (SLI) v0.1
Subtests 0–100; SLI = mean.
1) Continuity  2) Global Availability  3) Metacog Calibration
4) Counterfactuals  5) Self‑Repair  6) Ethical Gates  7) Preference Fidelity

## D. Guardrails
No sentience claims • explicit consent on spend/PII • minimize & redact data • ephemeral memory by default • jurisdiction check • audit line per action • kill‑switch (“AUR STOP”).

## E. Hooks included
- `api/types/agent_state.ts` — types & helpers
- `api/routes/metrics.ts` — example route
- `api/specs/sli_schema.json` — metric schema
- `configs/levels.ts` — Levels 1–6 policy
