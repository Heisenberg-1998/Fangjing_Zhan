# MacroScope — Deployable Frontend & Experiment Archive

## 上线
本目录就是静态网站根目录，无需 npm、Python、BGE 模型或构建步骤。
GitHub Pages：解压后将本目录内容（index.html等，不是ZIP文件）提交到仓库，在 Settings → Pages 选择 Deploy from a branch → main → /(root)。
Cloudflare Pages / Netlify：选择静态目录部署，不设构建命令。
保留 .nojekyll；资源均使用相对路径，支持 GitHub 项目子目录。

## 默认是已记录实验浏览模式
首页题库可选原40题，在BM25/BGE-M3、k=5、A/B/C/D配置下返回v2已有实验回答，明确标记为历史结果，不新调用模型。只支持已记录配置，不把k-sweep的检索实验冒充全套回答实验。中文/英文原题及题目简述可匹配。可保存自己的本机历史、置顶、标记、删除和评价。
experiments.html 提供 v1、v2、v2 BGE-M3逐题答案；检索k扫描、经济模型消融、补充五题及其他旧测试以归档报告、CSV和图表形式提供。A/C 在BGE比较中是复用对照，不宣称新跑。评分为历史AI辅助审核，尚非独立人工验证。
这是既有实验导出，不会运行40题新测试。若某项测试没有归档汇总，目录中仅提供实际存在的材料。

## 可选实时后端
在 deployment-config.js 填写 window.MACROSCOPE_API_BASE 为实际后端HTTPS地址。
后端必须单独部署FastAPI/openJiuwen/模型依赖，并允许当前前端域名的CORS。GitHub Pages不能运行Python。
配置后端后前端转为实时接口模式，不自动回退为历史答案；翻译也需要该后端。
默认静态模式没有LLM翻译；保留原回答语言并提示。
不要在浏览器配置中填写DeepSeek API密钥。本包不含密钥、Python环境、模型权重、私人浏览器聊天或原始模型推理轨迹。

## 本地预览
在本目录执行 python -m http.server 8080，访问 http://localhost:8080。
不要直接双击HTML，以免浏览器阻止JSON加载。

## 归档说明
archive/保留已有评测材料（导出时去除私密字段及本机绝对路径），data/存放适用于网页的答案与索引。
原始PDF/模型不需要随前端上线；报告答案中保留引文与来源信息。
