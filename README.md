# 工单治理工作流 Demo · Ticket Governance Workflow

> **11字段标准化 → 三维度分析（时长/类型/办法）→ 4项KPI → P0/P1/P2优先级矩阵 → PDCA闭环**。基于 2026-08 仿真 30 单（SLA 24h，人均 7.5 单，超时率 33.3%），方法与模板可直接复用到真实工单池。

[在线看板 Demo](https://scottchen123.github.io/ticket-governance-demo/dashboard/) · [Hugo 博文](hugo/index.md) · [Excel 模板](template/工单治理模板.xlsx) · [下载 Windows exe](https://github.com/scottchen123/ticket-governance-demo/releases)

---

## 快速开始

1. **打开在线看板**：访问 [在线地址](https://scottchen123.github.io/ticket-governance-demo/dashboard/)，等待图表加载。
2. **准备数据**：下载 `data/sample_30.xlsx` 查看示例，或下载 `template/工单治理模板.xlsx` 填入真实工单。
3. **导入 Excel**：把 Excel 文件拖入看板，或点击上传区域，页面会在浏览器本地读取并计算。
4. **查看分析**：按月份、产品、处理人筛选，查看 KPI、时长、类型、处理办法和优先级看板。

网页和桌面版需要联网加载 ECharts 与 XLSX CDN 依赖。需要离线运行时，应先将这两个依赖下载到本地并修改页面引用。

### 本地运行

直接双击 `dashboard/index.html`，或在仓库根目录启动静态服务器：

```bash
python3 -m http.server 8080
```

然后打开 `http://127.0.0.1:8080/dashboard/`。

### Windows exe

从 [GitHub Releases](https://github.com/scottchen123/ticket-governance-demo/releases) 下载 Windows 安装包。安装后打开 `ticket-governance-demo` 即可使用同一套看板。

本地构建桌面版：

```bash
cd electron
npm install
npm start
npm run pack:win
```

发布新版本时保持 Electron 版本和 Git tag 一致，例如：

```bash
git tag v0.1.0
git push origin v0.1.0
```

推送 `v*` tag 后，GitHub Actions 会在 Windows 环境构建 exe 并发布到 Releases。

## 目录结构

```
ticket-governance-demo/
├── dashboard/index.html      # 可交互看板（ECharts 5.4.3）
├── data/sample_30.xlsx       # 30单仿真样例
├── template/工单治理模板.xlsx # 空模板（下拉+公式）
├── hugo/index.md             # Hugo PaperMod 博文（3500字，8章）
├── docs/workflow.md          # 工作流说明（同 hugo/index.md）
├── images/                   # 封面与截图占位
├── electron/                 # Electron 桌面版与 Windows 打包配置
├── README.md
├── README_EN.md
└── .github/workflows/        # Pages 发布与 Release 构建
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

GitHub Actions 会发布看板、样例数据和 Excel 模板。在线地址：

`https://scottchen123.github.io/ticket-governance-demo/dashboard/`

仓库首次启用 Pages 时，请在 Settings → Pages 中将 Source 设为 **GitHub Actions**。

## 许可

MIT License

---
*数据为仿真生成，仅用于演示方法与看板形态。*
