# Ticket Governance Workflow Demo

> **11-field standardization → 3-dimension analysis (duration/type/method) → 4 KPIs → P0/P1/P2 matrix → PDCA loop**. Simulated 30 tickets (Aug 2026, SLA 24h, 7.5 per person, 33.3% overdue). Replace with real data.

[Live Dashboard](https://scottchen123.github.io/ticket-governance-demo/dashboard/) · [Excel Template](template/工单治理模板.xlsx) · [Download Windows exe](https://github.com/scottchen123/ticket-governance-demo/releases)

## Quick Start

1. **Open the dashboard**: visit the [live dashboard](https://scottchen123.github.io/ticket-governance-demo/dashboard/).
2. **Prepare data**: use `data/sample_30.xlsx` as a sample, or fill in `template/工单治理模板.xlsx` with real tickets.
3. **Import Excel**: drop an Excel file onto the dashboard or use the upload area. Data is read and processed in your browser.
4. **Review results**: filter by month, product, and handler, then review KPIs, duration, type, method, and priority views.

The web dashboard and desktop app load ECharts and XLSX from CDN, so an internet connection is required. Fully offline use requires bundling those two dependencies locally.

## Local Run

Double-click `dashboard/index.html`, or start a static server from the repository root:

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/dashboard/`.

## Windows exe

Download the Windows installer from [GitHub Releases](https://github.com/scottchen123/ticket-governance-demo/releases). It opens the same dashboard as the web version.

Build locally:

```bash
cd electron
npm install
npm start
npm run pack:win
```

Keep the Electron version and Git tag aligned, for example:

```bash
git tag v0.1.0
git push origin v0.1.0
```

Pushing a `v*` tag triggers the Windows build and publishes the exe to GitHub Releases.

## GitHub Pages

GitHub Actions publishes the dashboard, sample data, and Excel template at:

`https://scottchen123.github.io/ticket-governance-demo/dashboard/`

For a first-time setup, open repository Settings → Pages and select **GitHub Actions** as the source.
