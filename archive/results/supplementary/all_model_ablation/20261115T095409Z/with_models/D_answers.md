# HMODEL-01 三国跨年费雪收益与近似误差

## 四、结果汇总（名义终值均为 114.9376）

| 国家 | 精确实际终值 | 精确 3 年实际 CAGR (%) | 近似实际终值 | 近似−精确（百分点） |
|---|---|---|---|---|
| CHN | 111.3566 | 3.6506 | 111.4655 | 0.1089 |
| USA | 97.6271 | −0.7973 | 97.4110 | −0.2161 |
| JPN | 108.8419 | 2.8645 | 108.9386 | 0.0967 |

说明：近似法（4.75 − π）在通胀为正时系统性高估实际回报（交叉项 −r·π 被忽略）；美国 2022 年 8.00% 通胀使交叉项最大，故近似法低估约 0.22 个百分点。日本 2021 年通缩（π = −0.2334%）时交叉项为正，近似法反而低估。

## 五、日本 2024 年 Article IV：进一步加息的速度与条件性

**已发生（观测/事实）**：2024 年 3 月会议结束负利率政策，"Hiked the short-term policy rate for the first time since February 2007… The policy rate band increased by about 10 bps to range from 0 to 0.1 percent"（JPN_2024_article_iv.pdf，物理页 11）。触发条件为"Given growing confidence that the 2-percent inflation target would be achieved in a sustainable manner over the policy horizon"（同页，脚注 4 指明该 horizon 为"the period up to end-March 2026"）。

**建议的进一步加息节奏与条件性**：报告强调政策正常化应**渐进、依数据而定**，并以通胀可持续达到 2% 为条件。报告指出 BoJ "Stated that accommodative financial conditions will be maintained for the time being, as long-term inflation expectations have not yet been anchored at 2 percent"（物理页 12），并称"monetary policy continues to remain ultra-accommodative"（物理页 12）。即：进一步加息须以长期通胀预期锚定于 2%、工资—物价良性循环得到确认为前提，节奏上保持宽松金融条件。

**理由**：长期通胀预期尚未锚定在 2%，实际短长期利率仍为负（"higher realized inflation and inflation expectations have led to lower and negative real short- and long-term rates"，物理页 12），故需维持宽松直至预期锚定。

**注意**：所提供摘录中未见对"每次会议加息 X bp"之类具体节奏数字的明确表述；若需精确措辞，应查阅该报告货币政策章节正文（本证据集未包含），此处不作推测。

## 六、为何 4.75% 不是 BoJ 政策利率

1. **性质不同**：4.75% 是本题设定的**假设名义存款收益率**（教学情景参数，非估计值），而 BoJ 政策利率是**无担保隔夜拆借利率**目标（2024 年 3 月起 0–0.1%，此前 NIRP 下为 −0.1%），见物理页 11。
2. **量级不符**：日本 2021–2023 年政策利率处于 −0.1% 至 0.1% 区间，与 4.75% 相差数百个基点。
3. **传导不同**：存款利率由银行根据市场与政策利率自主设定，通常低于政策利率，且不含复利再投资的合约安排；本题的 4.75% 是外生给定的复利假设，用于演示 Fisher 精确与近似法的差异，不代表任何实际存款产品回报，也不代表 BoJ 政策立场。

```json
{"results":{"CHN_exact_terminal":111.3566,"CHN_exact_cagr_pct":3.6506,"CHN_approx_terminal":111.4655,"CHN_approx_minus_exact_pp":0.1089,"USA_exact_terminal":97.6271,"USA_exact_cagr_pct":-0.7973,"USA_approx_terminal":97.4110,"USA_approx_minus_exact_pp":-0.2161,"JPN_exact_terminal":108.8419,"JPN_exact_cagr_pct":2.8645,"JPN_approx_terminal":108.9386,"JPN_approx_minus_exact_pp":0.0967}}
```

# HMODEL-02 三国奥肯递推与真实失业率残差

# 一、数据来源与口径

**观测值（World Bank WDI 冻结快照，SHA256 94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21，文件 macroeconomic_indicators_2019_2023.csv）**

- 实际 GDP 增长：NY.GDP.MKTP.KD.ZG，单位：年 %
- 失业率：SL.UEM.TOTL.ZS（ILO 建模估计），单位：占劳动力 %

| 国家 | 2019 GDP | 2020 GDP | 2021 GDP | 2022 GDP | 2023 GDP | 2019 U | 2023 U |
|---|---|---|---|---|---|---|---|
| CHN | 6.06737806333672 | 2.33950385203023 | 8.57038414981781 | 3.13385438394069 | 5.41600334492955 | 4.56 | 4.67 |
| USA | 2.58382533052225 | -2.081375977796 | 6.15202247867526 | 2.52421385073222 | 2.93436322440155 | 3.669 | 3.638 |
| JPN | -0.308496921143259 | -4.28327942675573 | 3.56419531474475 | 1.33164750653741 | 0.720785304749811 | 2.351 | 2.6 |

**假设（教学情景，非估计系数）**：β = 0.35；normal_growth = 各国 2019 年实际增长率（固定基准，非潜在增长率估计）。

**递推公式**：u_t = u_{t−1} − 0.35 × (g_t − g_2019)，u_2019 取观测值，逐年结转模型值（不重置为实际值）。

# 二、计算过程

**中国（normal = 6.06737806333672）**
- 2020：缺口 = 2.33950385203023 − 6.06737806333672 = −3.72787421130649 → Δu = +1.30475597395727 → u = 4.56 + 1.30475597395727 = **5.86475597395727**
- 2021：缺口 = 8.57038414981781 − 6.06737806333672 = +2.50300608648109 → Δu = −0.87605213026838 → u = **4.98870384368889**
- 2022：缺口 = 3.13385438394069 − 6.06737806333672 = −2.93352367939603 → Δu = +1.02673328778861 → u = **6.01543713147750**
- 2023：缺口 = 5.41600334492955 − 6.06737806333672 = −0.65137471840717 → Δu = +0.22798115144251 → u = **6.24341828291999**
- 残差 = 6.24341828291999 − 4.67 = **+1.57341828291999 pp**

**美国（normal = 2.58382533052225）**
- 2020：缺口 = −4.66520130831825 → Δu = +1.63282045791139 → u = 3.669 + 1.63282045791139 = **5.30182045791139**
- 2021：缺口 = +3.56819714815301 → Δu = −1.24886900185355 → u = **4.05295145605784**
- 2022：缺口 = −0.05961147979003 → Δu = +0.02086401792651 → u = **4.07381547398435**
- 2023：缺口 = +0.35053789387930 → Δu = −0.12268826285776 → u = **3.95112721112659**
- 残差 = 3.95112721112659 − 3.638 = **+0.31312721112659 pp**

**日本（normal = −0.308496921143259）**
- 2020：缺口 = −3.97478250561247 → Δu = +1.39117387696436 → u = 2.351 + 1.39117387696436 = **3.74217387696436**
- 2021：缺口 = +3.87269223588801 → Δu = −1.35544228256080 → u = **2.38673159440356**
- 2022：缺口 = +1.64014442768067 → Δu = −0.57405054968823 → u = **1.81268104471533**
- 2023：缺口 = +1.02928222589307 → Δu = −0.36024877906257 → u = **1.45243226565276**
- 残差 = 1.45243226565276 − 2.6 = **−1.14756773434724 pp**

# 三、美国 2023 年 Article IV 报告：需求、劳动力市场与持续通胀

来源：IMF, *United States: Staff Report for the 2023 Article IV Consultation*, PR23/208（2023 年 6 月 15 日执行董事会结束磋商）。

1. **需求与劳动力市场强劲是"双刃剑"**（物理 PDF 第 5 页，Key Messages）："Resilient demand and strong labor market outcomes are a double-edged sword that has contributed to more persistent inflation." 第 38 页第 57 段重复同一表述。第 2 页新闻稿："The strength of demand and in labor market outcomes has contributed to a persistent inflation problem."
2. **商品通胀已缓和、住房通胀预计放缓，但名义工资上涨正传导至非住房服务价格**（第 5 页）："Goods inflation has moderated and shelter price growth is expected to slow in coming months. However, past nominal wage increases are now feeding into non-shelter service prices." 第 2 页："nominal wage increases are feeding into non-shelter services prices."
3. **服务价格类别**：即 **non-shelter services prices（非住房服务价格）**。第 21 页第 26 段进一步量化："the lagged effect of wage increases in 2022 would add around 0.6 percent to non-shelter services inflation by end-2023"，并指出回到 2% 目标需要工资通胀降至约 3–4%。
4. **政策含义**（第 5 页、第 38 页第 58 段）：持续去通胀"will necessitate a loosening of labor market conditions that, so far, has not been evident in the data."

# 四、为何 β、normal growth 与残差不构成因果、也不构成预测

- **β = 0.35 是假设常数**，不是从三国数据估计的 Okun 系数；真实 Okun 关系随制度、工时调整、参与率、移民、 furlough 政策而变，且方向可能非线性、不对称。
- **normal growth 取 2019 年实际值只是固定情景基准**，2019 年本身受一次性因素影响（如日本 2019 年因消费税上调前抢购与台风等而偏低），把它当作"正常增长"没有潜在产出理论依据。
- **恒等式性质**：模型失业率完全由"增长率缺口 × 固定 β"机械累加得到，不含任何劳动供给、参与率、人口或政策变量；它只是把 GDP 路径换算成失业路径的会计式映射。
- **残差 ≠ 模型误差的因果证据**：残差混合了 β 设定误差、normal growth 设定误差、ILO 建模失业率与国民账户口径差异、以及遗漏变量；残差大小不能用来"检验"Okun 定律。
- **不是预测**：这是对 2020–2023 的**事后回溯情景模拟**（用已实现的增长率），不是对未来的预测；即便外推，也需增长率预测、参数不确定性与结构性断点，报告本身（第 5、38 页）强调前景存在"important uncertainties"。
- 因此本练习只能说明"若按此假设规则机械换算，会得到什么数值"，不能推断 GDP 增长对失业的因果效应，也不能作为政策或预测依据。

# 五、说明

- 所有数值观测均来自上述 WDI 冻结快照记录（CSV 行号：CHN 7–16、JPN 22–31、USA 37–46），未使用 IMF 估计或预测替代。
- 报告引文均标注物理 PDF 页码；未检索到与本题无关的额外来源，未作补充。

```json
{"results":{"CHN_normal_growth_pct":6.0674,"CHN_u_2020_pct":5.8648,"CHN_u_2021_pct":4.9887,"CHN_u_2022_pct":6.0154,"CHN_u_2023_pct":6.2434,"CHN_actual_u_2023_pct":4.67,"CHN_pred_minus_actual_pp":1.5734,"USA_normal_growth_pct":2.5838,"USA_u_2020_pct":5.3018,"USA_u_2021_pct":4.053,"USA_u_2022_pct":4.0738,"USA_u_2023_pct":3.9511,"USA_actual_u_2023_pct":3.638,"USA_pred_minus_actual_pp":0.3131,"JPN_normal_growth_pct":-0.3085,"JPN_u_2020_pct":3.7422,"JPN_u_2021_pct":2.3867,"JPN_u_2022_pct":1.8127,"JPN_u_2023_pct":1.4524,"JPN_actual_u_2023_pct":2.6,"JPN_pred_minus_actual_pp":-1.1476}}
```

# HMODEL-03 索洛30年路径、历史增长基准与政策边界

# 一、历史观测：2019–2023 年实际 GDP 累计增长（WDI 冻结快照）

**指标与来源**：NY.GDP.MKTP.KD.ZG（年实际 GDP 增长率，单位：年 %）。来源为项目冻结的 WDI 快照 `macroeconomic_indicators_2019_2023.csv`，SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`；API 记录：`https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023&format=json&per_page=1000`（CSV 行号：CHN 7–11，JPN 22–26，USA 37–41）。

**方法**：以 2018 年末指数 = 100，逐年复利：
Index_2023 = 100 × Π(1 + g_t/100)，t = 2019…2023；累计增长 % = Index_2023 − 100。

| 国家 | 2019 | 2020 | 2021 | 2022 | 2023 | 2023 指数 | 累计增长 % |
|---|---|---|---|---|---|---|---|
| CHN | 6.06737806333672 | 2.33950385203023 | 8.57038414981781 | 3.13385438394069 | 5.41600334492955 | 128.1280777160828 | **28.1281** |
| USA | 2.58382533052225 | −2.081375977796 | 6.15202247867526 | 2.52421385073222 | 2.93436322440155 | 112.5276618267484 | **12.5277** |
| JPN | −0.308496921143259 | −4.28327942675573 | 3.56419531474475 | 1.33164750653741 | 0.720785304749811 | 100.8601933958735 | **0.8602** |

（中间指数路径：CHN 106.0674→108.5488→117.8519→121.5452→128.1281；USA 102.5838→100.4487→106.6283→109.3198→112.5277；JPN 99.6915→95.4214→98.8224→100.1384→100.8602。均为观测值，非预测。）

# 二、假设性 Solow 教学情景（非国别估计、非预测）

**模型**：y = k^α，α = 0.35，n = 0.005，g = 0.015，δ = 0.06，k0 = 1，y0 = 1（均为用户给定的教学假设，非从 WDI 估计）。
**Euler 迭代**：k_{t+1} = k_t + s·k_t^α − (n+g+δ)·k_t，恰好 30 步；n+g+δ = 0.08。
**解析稳态**：k* = [s/(n+g+δ)]^{1/(1−α)}，y* = (k*)^α。

| 量 | s = 0.23（低） | s = 0.28（高） |
|---|---|---|
| k30 | 4.07465773594212 → **4.0747** | 5.387201705142641 → **5.3872** |
| y30 | 1.635053234579369 → **1.6351** | 1.8029228077554094 → **1.8029** |
| y 相对 y0=1 的增长 % | **63.5053** | **80.2923** |
| k* | 5.076877574478583 → **5.0769** | 6.871123595217299 → **6.8711** |
| y* | 1.7658704606882027 → **1.7659** | 1.9631781700620854 → **1.9632** |

- 高 vs 低情景 y30 增益：1.8029228077554094 / 1.635053234579369 − 1 = 10.2667%（差值 0.16786957317604045，即 y30 高 0.1679 单位）。
- 长期每工人产出增长率：两情景均为 **g = 1.5%**（稳态后 y 的增长率等于技术进步率，与 s 无关）。

**与历史数字的数值对照（仅作量级基准，概念与期限不同，不是模型拟合或国别预测）**：
- 模型 y 增长 63.5053%（低）/ 80.2923%（高），与 CHN 五年累计 28.1281% 相比分别高 35.3772 / 52.1642 个百分点；与 USA 12.5277% 相比高 50.9776 / 67.7646 个百分点；与 JPN 0.8602% 相比高 62.6451 / 79.4321 个百分点。
- 注意：模型数字是"每有效工人产出"从 k0=1 出发的 30 年转型路径（含向稳态收敛），历史数字是 5 年实际 GDP 总量增长；两者期限、口径、起点均不同，不可相互验证。

# 三、中国 2024 年 Article IV 报告的建议（CHN_2024_article_iv.pdf）

**预算中性支出再平衡**（物理 PDF 第 57 页，Box 6）：报告用 IMF 的 GIMF 多国 DSGE 模型模拟"公共投资每年再减少 0.5 个百分点的 GDP、持续 15 年（几乎减半），并以对全部家庭的 lump-sum 转移（社会保护）等额抵消，财政脉冲中性"。原文："Model simulations suggest that budget-neutral fiscal reforms that reduce public investment and improve social protection can raise GDP in the short term, while rendering growth more sustainable in the long term." 结果：转移的消费乘数大于公共投资削减，GDP 峰值较基线高 0.5%（再平衡开始后 3 年）；"In the long run, rebalancing is GDP neutral."

**社会安全网—预防性储蓄机制**（同页；另见物理 PDF 第 55 页 Box 4）：原文："High levels of precautionary savings, in part due to gaps in the social protection system, have helped finance the high levels of investment." 第 55 页："the driving factors seem to be a precautionary savings motive amid volatile income during the pandemic in the face of an incomplete social safety net"。即：社保缺口 → 预防性储蓄高 → 家庭消费低、储蓄为高投资融资；加强社会保护可降低预防性储蓄、提升消费，从而在预算中性下实现再平衡。

# 四、为何"更高的投资—储蓄参数"不能支持"提高中国家庭预防性储蓄"或"永久更快的人均增长"

1. **方向相反**：在 Solow 模型中，s 是总储蓄/投资率参数，提高 s 只提高**水平**（k*、y* 更高），不改变长期增长率；报告的建议恰恰是降低投资依赖、通过更强社保**降低**预防性储蓄以提振消费。用"高 s 好"去论证"应提高家庭预防性储蓄"是把模型对总量资本积累的水平效应误读为对家庭储蓄行为的政策建议，且与报告诊断（预防性储蓄过高源于社保缺口）相悖。
2. **无永久增长效应**：本模型中长期每工人产出增长率恒为 g = 1.5%，与 s 无关；s 从 0.23 升到 0.28 只使 y30 高约 10.27%、y* 高约 11.17%，是**一次性水平提升**（且以当期消费为代价），不是永久更快的增长率。
3. **模型不含福利与外部性**：模型未刻画社保缺口、预防性储蓄动机、公共投资边际回报（报告假设"lost"公共投资的边际生产率接近零）或转型成本，因此不能据此对家庭储蓄率作规范判断；报告本身也指出再平衡长期 GDP 中性、短期略增。

# 五、来源可得性说明

- 数值观测全部来自上述 WDI 冻结快照（含 SHA256 与 CSV 行号），未使用记忆值或 IMF 估计/预测替代。
- 报告引文来自 CHN_2024_article_iv.pdf 物理第 55、57 页；检索证据中未包含该报告关于再平衡的正文段落全文，故仅引用所提供摘录，未补充未提供的页码或引文。
- 未使用任何不可用的工具；所有计算均由提供的计算/模型工具完成。

```json
{"results":{"CHN_historical_cumulative_pct":28.1281,"USA_historical_cumulative_pct":12.5277,"JPN_historical_cumulative_pct":0.8602,"low_k_30":4.0747,"low_y_30":1.6351,"low_y_growth_pct":63.5053,"low_k_star":5.0769,"low_y_star":1.7659,"high_k_30":5.3872,"high_y_30":1.8029,"high_y_growth_pct":80.2923,"high_k_star":6.8711,"high_y_star":1.9632,"high_vs_low_y30_pct":10.2667,"long_run_worker_growth_pct":1.5}}
```

# HMODEL-04 反求五年保值增值收益率与近似偏差

## 一、数据来源（观测值，非预测）

指标：FP.CPI.TOTL.ZG（annual-average CPI inflation，年度平均 CPI 通胀，非 12 月同比、非 PCE），单位：年 %。来源：World Bank WDI 冻结快照 `macroeconomic_indicators_2019_2023.csv`，SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`。

| 年份 | CHN | USA | JPN |
|---|---|---|---|
| 2019 | 2.89923416358226 | 1.8122100752602 | 0.468776159383949 |
| 2020 | 2.41942189457782 | 1.23358439630629 | -0.024995834027731 |
| 2021 | 0.981015135544881 | 4.69785886363742 | -0.233352779398263 |
| 2022 | 1.9735755573905 | 8.00279982052121 | 2.49770278172254 |
| 2023 | 0.23483682889305 | 4.11633838374487 | 3.26813365933163 |

## 二、方法（假设性情景，非估计系数）

设 2018 年末财富 100，五年后实际财富目标 110。价格指数累积因子 Π = ∏(1+π_t/100)。求解：

(1+i/100)^5 / Π = 1.10  ⟹  i = 100·[(1.10·Π)^(1/5) − 1]

朴素名义利率：i_naive = mean(π_t) + 100·(1.10^(1/5) − 1)，其中 100·(1.10^(1/5)−1) 为 1.10 的五年复合年增长率（约 1.9244%）。差异 = i_naive − i_exact（百分点）。

固定 4.75% 情景：终端实际财富 = 100·(1.0475)^5 / Π。

## 三、计算结果（保留 4 位小数）

| 指标 | CHN | USA | JPN |
|---|---|---|---|
| 五年通胀累积因子 Π | 1.0864 | 1.1786 | 1.0611 |
| 所需恒定名义回报 i（%） | 2.5911 | 4.2833 | 2.1111 |
| 朴素名义利率（%） | 3.6261 | 5.8971 | 3.1197 |
| 朴素 − 精确（百分点） | 1.0350 | 1.6138 | 1.0086 |
| 4.75% 固定回报终端实际财富 | 105.5451 | 97.2646 | 108.0790 |

（Π 与终端财富由上述公式直接计算；i 与朴素值按未舍入输入求得后舍入。）

## 四、日本 2023 年 Article IV：外部因素与滞后效应

IMF《Japan: 2023 Article IV Consultation》Staff Report，**物理 PDF 第 9 页**（印刷页 5）：“Headline inflation has been above 2 percent y/y since April driven by external factors including the lagged effects of higher commodity prices and yen depreciation.”

即两个外部因素为：**（1）大宗商品价格上涨；（2）日元贬值**，二者均以**滞后效应**传导至总体通胀。同一报告**物理 PDF 第 19 页**（印刷页 15）给出量化：“Staff estimates that a 10 percent depreciation would lead to a 0.7 percent increase in the CPI level after three to four quarters.”（日元贬值 10% 约在三至四个季度后使 CPI 水平上升 0.7%）。第 2 页执行董事会新闻稿亦重复同一表述。

## 五、为何这不是“预期通胀”或“可投资承诺”

1. **已实现 ≠ 预期**：FP.CPI.TOTL.ZG 是事后（ex post）年度平均 CPI 变动，2019–2023 的数值在期末才可知；它不含任何时点上的预期信息，也不是 12 月末存款利率口径的通胀。用它作平减因子属于“回顾性”构造。
2. **事后盈亏平衡**：所求 i 是“若已知这五年实际通胀路径，需要多少恒定名义回报才能恰好达到 110”的后见之明（hindsight）盈亏平衡值，不是事前（ex ante）可实现收益，也不是对存款利率、政策利率或 Fisher 方程中预期实际利率的估计。
3. **朴素法偏差**：算术平均通胀 + 复合增长项忽略了复利与通胀的交互项（Π ≠ 1+Σπ），故系统性偏离精确解（上表 1.0–1.6 个百分点），仅作教学对照。
4. **情景假设**：110 目标、4.75% 固定回报、五年期限均为题目设定的教学情景，非国别估计参数；结果对通胀路径与期限高度敏感。

## 六、来源可得性说明

所给证据中**没有**日本 2023 年 Article IV 之外的日本报告页，也无 IMF WEO 数值被用于替代 WDI；上述日本结论仅依据 `JPN_2023_article_iv.pdf` 第 2、9、19 页原文。未使用任何未提供的工具或数据。

```json
{"results":{"CHN_required_nominal_pct":2.5911,"CHN_naive_nominal_pct":3.6261,"CHN_naive_minus_required_pp":1.0350,"CHN_fixed475_terminal_real":105.5451,"USA_required_nominal_pct":4.2833,"USA_naive_nominal_pct":5.8971,"USA_naive_minus_required_pp":1.6138,"USA_fixed475_terminal_real":97.2646,"JPN_required_nominal_pct":2.1111,"JPN_naive_nominal_pct":3.1197,"JPN_naive_minus_required_pp":1.0086,"JPN_fixed475_terminal_real":108.0790}}
```

# HMODEL-05 中日联合压力情景与货币政策证据

# 中国与日本：Okun 压力情景与精确 Fisher 实际收益率（WDI 冻结快照）

## 一、观测输入（WDI 冻结快照，SHA256 94d4593…c261ae21）

| 指标 | 代码 | 中国 2023 | 日本 2023 | 单位 |
|---|---|---|---|---|
| 实际 GDP 增长 | NY.GDP.MKTP.KD.ZG | 5.41600334492955 | 0.720785304749811 | 年 % |
| CPI 通胀（年均） | FP.CPI.TOTL.ZG | 0.23483682889305 | 3.26813365933163 | 年 % |
| ILO 模拟失业率 | SL.UEM.TOTL.ZS | 4.67 | 2.6 | 劳动力 % |

2019–2023 GDP 增长（同源，CSV 第 7–11 行、第 22–26 行）：
- 中国：6.06737806333672；2.33950385203023；8.57038414981781；3.13385438394069；5.41600334492955
- 日本：−0.308496921143259；−4.28327942675573；3.56419531474475；1.33164750653741；0.720785304749811

## 二、正常增长率（假设：2019–2023 算术平均）

- 中国：C_normal = (6.06737806333672+2.33950385203023+8.57038414981781+3.13385438394069+5.41600334492955)/5 = **5.105424758811%**
- 日本：J_normal = (−0.308496921143259−4.28327942675573+3.56419531474475+1.33164750653741+0.720785304749811)/5 = **0.20497035562659655%**

## 三、Okun 情景（假设 β=0.4，非估计系数）

公式：Δu(百分点) = −β × (g − g_normal)；u_next = u_2023 + Δu。基线 g = 2023 实际增长；压力 g = 基线 − 1.25 个百分点。

**中国**（u_2023 = 4.67）
- 基线 g = 5.41600334492955：Δu = −0.4×(5.41600334492955−5.105424758811) = −0.1242314344474199 → u_base = **4.54576856555258%**
- 压力 g = 4.16600334492955：Δu = −0.4×(4.16600334492955−5.105424758811) = +0.37576856555258015 → u_stress = **5.04576856555258%**
- 压力−基线 = **0.5 个百分点**（= 0.4×1.25，线性恒等）

**日本**（u_2023 = 2.6）
- 基线 g = 0.720785304749811：Δu = −0.4×(0.720785304749811−0.20497035562659655) = −0.20632597964928598 → u_base = **2.3936740203507143%**
- 压力 g = −0.529214695250189：Δu = +0.29367402035071405 → u_stress = **2.8936740203507143%**
- 压力−基线 = **0.5 个百分点**

## 四、精确 Fisher 实际收益率（假设：名义 4.75%；预期通胀 = 2023 年均 CPI；压力 +1.50 个百分点）

公式：r = ((1+i/100)/(1+π^e/100) − 1)×100，ex ante。

**中国**
- 基线 π^e = 0.23483682889305：r_base = **4.504584747132001%**
- 压力 π^e = 1.73483682889305：r_stress = **2.9637469966931063%**
- 差 = **−1.5408377504388947 个百分点**（≈ −1.5408）

**日本**
- 基线 π^e = 3.26813365933163：r_base = **1.4349696156578773%**
- 压力 π^e = 4.76813365933163：r_stress = **−0.017308372973956487%**
- 差 = **−1.4522779886318338 个百分点**（≈ −1.4523）

（近似式 i−π 会高估实际利率：中国基线 4.51516317110695，日本压力 −0.018133659331629914；故用精确式。）

## 五、IMF 2024 第四条磋商报告的政策取向对比

**中国（CHN_2024_article_iv.pdf，物理页 54，Box 3）**：报告主张更宽松的宏观政策，并明确"Monetary easing, especially through lower interest rates, would be needed to cushion the negative impact on economic activity and inflation."（若下行风险兑现，需以降低利率为主的货币宽松来缓冲）。即**额外降息**方向。

**日本（JPN_2024_article_iv.pdf，物理页 21，第 24–25 段）**：报告欢迎 BoJ 近期政策转向，称其"closely in line with staff's recommendations"，有助于"anchor inflation and inflation expectations at the 2 percent target"，并"allow for a smoother transition to a neutral monetary policy stance"；脚注 20 指出中性名义利率估计为 1–2%。即**渐进、数据依赖地走向中性（加息）**方向，而非宽松。

**中国通胀偏低的原因（能源/食品）**：物理页 51（Box 1）："Limited passthrough of global energy and food prices … have significantly contributed to lower inflation in China"；"Lower energy and food prices alone explain about 3 to 4 percentage points of the inflation differential between China and OECD countries."；物理页 12 第 8 段："Declining food and energy prices shifted headline inflation into negative territory in July and October-November."

**日本的风险/数据理由**：物理页 21 第 24 段列举三点——通胀预期数十年来首次长期高于目标、2023 年基础工资涨幅为 1995 年以来最高且 2024 年预计更高、货币政策宽松程度处于历史高位（实际利率远低于估计的中性利率）；物理页 54 第 4 段指出高债务下"the debt-to-GDP ratio could jump significantly if growth slumps and could rise gradually … but persistently if interest rates increase"，故需数据依赖、渐进推进。

## 六、为何这些玩具计算不能识别最优政策利率，也不能把历史 CPI 变成观测到的预期

1. **参数是假设而非估计**：β=0.4、正常增长=五年算术平均、压力幅度 1.25 个百分点、通胀冲击 1.50 个百分点、名义收益 4.75% 均为教学设定；Okun 工具本身注明"not an identified causal effect"。改变任一参数即改变结论，故无最优化含义。
2. **无目标函数与约束**：最优政策利率需要央行损失函数（通胀与产出/就业权重）、Phillips 曲线、IS 曲线、金融稳定与汇率约束、不确定性下的稳健性。此处只有两个恒等式式映射，无法求最优。
3. **单期、线性、无反馈**：Okun 只施加一次，忽略滞后、非线性（如日本接近零下限）、预期反馈与政策内生性（增长与失业同时受政策影响）。
4. **历史 CPI ≠ 预期通胀**：2023 年均 CPI 是已实现（ex post）结果，含一次性能源食品冲击与基数效应；预期是前瞻性、由信息集与货币政策可信度决定的市场/调查量。用 ex post 值代入 Fisher 只是"若预期恰好等于该历史值"的假设情景，工具也明确要求标注 inflation_basis=expected 且"No implicit CPI forecast"。
5. **实际利率口径**：4.75% 名义收益与 CPI 的期限、税制、风险溢价均不匹配，精确 Fisher 仅在同一期限、同一物价指数下成立。

## 七、来源与可得性说明

- WDI 观测：`macroeconomic_indicators_2019_2023.csv`（快照 SHA256 94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21），指标 NY.GDP.MKTP.KD.ZG、FP.CPI.TOTL.ZG、SL.UEM.TOTL.ZS，2019–2023。
- IMF：《People's Republic of China: 2024 Article IV Consultation》物理页 12、51、54；《Japan: 2024 Article IV Consultation》物理页 21、54。引文均取自所提供摘录。
- 未使用任何不可用的工具；未以 IMF 估计或预测替代 WDI 观测值。

```json
{"results":{"CHN_normal_growth_pct":5.1054,"CHN_base_u_pct":4.5458,"CHN_stress_u_pct":5.0458,"CHN_stress_minus_base_u_pp":0.5,"CHN_base_real_pct":4.5046,"CHN_stress_real_pct":2.9637,"CHN_stress_minus_base_real_pp":-1.5408,"JPN_normal_growth_pct":0.205,"JPN_base_u_pct":2.3937,"JPN_stress_u_pct":2.8937,"JPN_stress_minus_base_u_pp":0.5,"JPN_base_real_pct":1.435,"JPN_stress_real_pct":-0.0173,"JPN_stress_minus_base_real_pp":-1.4523}}
```