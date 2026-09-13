# 工单治理工作流 Demo · Ticket Governance Workflow

> **11字段标准化 → 三维度分析（时长/类型/办法）→ 4项KPI → P0/P1/P2优先级矩阵 → PDCA闭环**。基于 2026-08 仿真 30 单（SLA 24h，人均 7.5 单，超时率 33.3%），方法与模板可直接复用到真实工单池。

[在线看板 Demo](dashboard/index.html) · [Hugo 博文](hugo/index.md) · [Excel 模板](template/工单治理模板.xlsx)

---

## 快速开始

1. **看数据**：打开 `data/sample_30.xlsx`，含 30 单完整流水（单号/报障人/创建时间/问题描述/产品类型/问题分类/处理办法/Bug单号/完成时间/结单时间/处理人/处理时长/是否超时）。
2. **看板**：双击 `dashboard/index.html`，支持按月份/产品/处理人筛选，含 5 步跑道、KPI 环形图、三维度图表、P0/P1/P2 看板。
3. **复用**：用 `template/工单治理模板.xlsx` 替换为真实数据即可，内置公式 `处理时长=完成-完成-创建`、`是否超时=时长>24h` 与枚举下拉。

## 目录结构

```
ticket-governance-demo/
├── dashboard/index.html      # 可交互看板（ECharts 5.4.3）
├── data/sample_30.xlsx       # 30单仿真样例
├── template/工单治理模板.xlsx # 空模板（下拉+公式）
├── hugo/index.md             # Hugo PaperMod 博文（3500字，8章）
├── docs/workflow.md          # 工作流说明（同 hugo/index.md）
├── images/                   # 封面与截图占位
└── .github/workflows/pages.yml # GitHub Pages 自动发布
```

## 方法摘要

- **字段标准化（11字段）**：单号/报障人/创建时间/问题描述/产品类型/问题分类/处理办法/Bug单号/完成时间/结单时间/处理人。分类与办法用枚举，Bug 单必填。
- **总体概况（4 KPI）**：总量 30、环比 +15.4%、人均 7.5、SLA 66.7%（超时 10 单）。
- **三维度**：时长分段（≤4h/4-12h/12-24h/>24h）揪长尾；类型 TOP-N 定点爆破（性能7+登录6+网络5 占60%）；办法分层沉淀 SOP。
- **优先级**：P0 根治（性能卡顿/Bug链路）、P1 专项（登录认证）、P2 优化（配置错误）。
- **闭环**：PDCA，周会以看板为材料，下月同口径复测验收。

## Hugo 部署

将 `hugo/index.md` 复制到你 Hugo 站点的 `content/post/ticket-governance-workflow/index.md`，将 `dashboard/index.html` 复制到 `static/demo/ticket-governance/index.html`，封面放 `static/images/ticket-governance/cover.jpg`，文中已含 `iframe` 嵌入代码。

## GitHub Pages

本仓库已配置 `pages.yml`，推送到 `main` 后自动发布 `dashboard` 到 Pages。访问 `https://<username>.github.io/ticket-governance-demo/dashboard/` 即可。

## 许可

MIT License

---
*数据为仿真生成，仅用于演示方法与看板形态。*
