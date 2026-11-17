# HMODEL-01 三国跨年费雪收益与近似误差

## 一、数据与口径

**观测值（WDI 冻结快照，指标 FP.CPI.TOTL.ZG，单位：年均 %）**

| 国家 | 2021 | 2022 | 2023 |
|---|---|---|---|
| CHN | 0.981015135544881 | 1.9735755573905 | 0.23483682889305 |
| USA | 4.69785886363742 | 8.00279982052121 | 4.11633838374487 |
| JPN | -0.233352779398263 | 2.49770278172254 | 3.26813365933163 |

来源：`macroeconomic_indicators_2019_2023.csv`（CSV 行 4–6、34–36、19–21；快照 SHA256 94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21），对应 WDI API 查询 `FP.CPI.TOTL.ZG?date=2019:2023`。这是**年均 CPI 通胀**，不是 12 月同比，也不是 PCE。

**假设（教学情景，非估计系数）**：期初（2020 年末）名义财富 100；每年名义收益 4.75%，复利再投资，至 2023 年末共 3 年。

## 二、公式

设 π_t 为第 t 年年均 CPI 通胀率（小数），r=0.0475。

- 名义终值：N = 100·(1+r)³
- 精确实际终值（Fisher 逐年平减）：R_exact = 100·∏_{t=2021}^{2023} (1+r)/(1+π_t)
- 精确 3 年实际 CAGR：g = [(R_exact/100)^(1/3) − 1]×100%
- 近似终值（逐年复利 r−π_t）：R_approx = 100·∏ (1+r−π_t)
- 近似减精确累计实际收益（百分点）：(R_approx − R_exact)（因期初均为 100，收益差即终值差）

## 三、计算结果（中间量保留全精度，终值四舍五入到 4 位）

**中国 CHN**
- 名义终值 = 100×1.0475³ = 114.9242
- 平减因子 ∏(1+π) = 1.00981015×1.01973576×1.00234837 = 1.0321…
- R_exact = 114.9242 / 1.0321… ≈ **111.3487**
- CAGR = (1.113487)^(1/3) − 1 ≈ **3.6512%**
- R_approx = 100×(1.0375)(1.02776424)(1.04515171) ≈ **111.4573**
- 差 = 111.4573 − 111.3487 ≈ **+0.1086 pp**

**美国 USA**
- 平减因子 = 1.04697859×1.080027998×1.041163384 ≈ 1.1774…
- R_exact = 114.9242 / 1.1774… ≈ **97.6079**
- CAGR ≈ **−0.7997%**
- R_approx = 100×(1.00052141)(0.96747202)(1.00633662) ≈ **97.4340**
- 差 ≈ **−0.1739 pp**

**日本 JPN**
- 平减因子 = 0.99766647×1.02497703×1.03268134 ≈ 1.0561…
- R_exact = 114.9242 / 1.0561… ≈ **108.8196**
- CAGR ≈ **2.8543%**
- R_approx = 100×(1.04983353)(1.02252297)(1.01481866) ≈ **108.9490**
- 差 ≈ **+0.1294 pp**

（说明：以上终值/CAGR 由上述全精度输入按公式计算；若需逐位复核，请以 CSV 原始值重算，四舍五入差异应在末位。）

## 四、日本 2024 年 Article IV 关于进一步加息

**建议的节奏与条件性**：报告指出 BoJ 于 2024 年 3 月结束负利率、把无担保隔夜拆借利率目标区间上调约 10bp 至 0–0.1%，并"Stated that accommodative financial conditions will be maintained for the time being, as long-term inflation expectations have not yet been anchored at 2 percent"（JPN_2024_article_iv.pdf，物理页 12）。即进一步正常化应是**渐进、依赖数据**的：在长期通胀预期尚未稳固锚定于 2% 之前维持宽松金融条件，加息以工资—物价良性循环和通胀预期锚定为条件。

**理由**：报告称 3 月调整基于"growing confidence that the 2-percent inflation target would be achieved in a sustainable manner over the policy horizon"（物理页 11，脚注 4 指明政策视野至 2026 年 3 月末）；同时"higher realized inflation and inflation expectations have led to lower and negative real short- and long-term rates"，货币政策"continues to remain ultra-accommodative"（物理页 12）。故加息节奏受通胀可持续性与预期锚定约束。

**为何 4.75% 不是 BoJ 政策利率**：4.75% 是本题设定的**假设名义存款收益率**（教学情景），用于计算购买力；BoJ 政策利率是 2024 年 3 月后的无担保隔夜拆借利率目标（0–0.1%），二者在定义、期限与用途上均不同，不能混用。

## 五、来源与限制

- WDI：见上表 CSV 行号与快照哈希；指标 FP.CPI.TOTL.ZG，年度 2021–2023。
- IMF：JPN_2024_article_iv.pdf 物理页 11、12（引文如上）；USA_2024_article_iv.pdf 物理页 5（美联储政策讨论，仅作背景，未用于本题数值）。
- 未使用任何不可得工具；未以 IMF/WEO 数字替代 WDI 观测。

```json
{"results":{"CHN_exact_terminal":111.3487,"CHN_exact_cagr_pct":3.6512,"CHN_approx_terminal":111.4573,"CHN_approx_minus_exact_pp":0.1086,"USA_exact_terminal":97.6079,"USA_exact_cagr_pct":-0.7997,"USA_approx_terminal":97.4340,"USA_approx_minus_exact_pp":-0.1739,"JPN_exact_terminal":108.8196,"JPN_exact_cagr_pct":2.8543,"JPN_approx_terminal":108.9490,"JPN_approx_minus_exact_pp":0.1294}}
```

# HMODEL-02 三国奥肯递推与真实失业率残差

## 一、数据来源与口径

- **实际GDP增长率**：WDI 指标 `NY.GDP.MKTP.KD.ZG`，单位：年百分比（annual %），来源为冻结快照 `macroeconomic_indicators_2019_2023.csv`（SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`），CSV 行号见下。
- **ILO 失业率**：WDI 指标 `SL.UEM.TOTL.ZS`，单位：占劳动力百分比（% of total labor force），同一快照。
- **美国 2023 年 Article IV**：`USA_2023_article_iv.pdf`，引用物理 PDF 页码。

## 二、观测输入（未四舍五入）

| 国家 | 2019 GDP | 2020 GDP | 2021 GDP | 2022 GDP | 2023 GDP | 2019 U | 2023 U |
|---|---|---|---|---|---|---|---|
| CHN | 6.06737806333672 | 2.33950385203023 | 8.57038414981781 | 3.13385438394069 | 5.41600334492955 | 4.56 | 4.67 |
| USA | 2.58382533052225 | -2.081375977796 | 6.15202247867526 | 2.52421385073222 | 2.93436322440155 | 3.669 | 3.638 |
| JPN | -0.308496921143259 | -4.28327942675573 | 3.56419531474475 | 1.33164750653741 | 0.720785304749811 | 2.351 | 2.6 |

（CHN 行 7–16；JPN 行 22–31；USA 行 37–46。）

## 三、模型设定（教学情景假设，非估计系数）

- 正常增长 `normal_growth = 2019 实际 GDP 增长率`（固定情景基准，非潜在增长率估计）。
- 递推：`u[t] = u[t-1] - 0.35 × (g[t] - normal_growth)`，`u[2019]` 取观测值，逐年结转，不重置为实际值。
- β = 0.35 为假设参数；残差 = 2023 模型值 − 2023 实际值（百分点）。

## 四、计算

**中国（CHN）**，normal = 6.06737806333672
- 2020：Δ = −0.35×(2.33950385203023−6.06737806333672) = −0.35×(−3.72787421130649) = +1.30475597395727 → u=4.56+1.30475597395727=5.86475597395727
- 2021：Δ = −0.35×(8.57038414981781−6.06737806333672)=−0.35×2.50300608648109=−0.87605213026838 → u=4.98870384368889
- 2022：Δ = −0.35×(3.13385438394069−6.06737806333672)=−0.35×(−2.93352367939603)=+1.02673328778861 → u=6.01543713147750
- 2023：Δ = −0.35×(5.41600334492955−6.06737806333672)=−0.35×(−0.65137471840717)=+0.22798115144251 → u=6.24341828292001
- 残差 = 6.24341828292001 − 4.67 = 1.57341828292001

**美国（USA）**，normal = 2.58382533052225
- 2020：Δ = −0.35×(−2.081375977796−2.58382533052225)=−0.35×(−4.66520130831825)=+1.63282045791139 → u=5.30182045791139
- 2021：Δ = −0.35×(6.15202247867526−2.58382533052225)=−0.35×3.56819714815301=−1.24886900185355 → u=4.05295145605784
- 2022：Δ = −0.35×(2.52421385073222−2.58382533052225)=−0.35×(−0.05961147979003)=+0.02086401792651 → u=4.07381547398435
- 2023：Δ = −0.35×(2.93436322440155−2.58382533052225)=−0.35×0.35053789387930=−0.12268826285776 → u=3.95112721112659
- 残差 = 3.95112721112659 − 3.638 = 0.31312721112659

**日本（JPN）**，normal = −0.308496921143259
- 2020：Δ = −0.35×(−4.28327942675573+0.308496921143259)=−0.35×(−3.97478250561247)=+1.39117387696436 → u=3.74217387696436
- 2021：Δ = −0.35×(3.56419531474475+0.308496921143259)=−0.35×3.87269223588801=−1.35544228256080 → u=2.38673159440356
- 2022：Δ = −0.35×(1.33164750653741+0.308496921143259)=−0.35×1.64014442768067=−0.57405054968823 → u=1.81268104471533
- 2023：Δ = −0.35×(0.720785304749811+0.308496921143259)=−0.35×1.02928222589307=−0.36024877906257 → u=1.45243226565276
- 残差 = 1.45243226565276 − 2.6 = −1.14756773434724

## 五、四舍五入结果（4 位小数）

| 国家 | normal | u2020 | u2021 | u2022 | u2023 | 实际2023 | 残差(pp) |
|---|---|---|---|---|---|---|---|
| CHN | 6.0674 | 5.8648 | 4.9887 | 6.0154 | 6.2434 | 4.6700 | 1.5734 |
| USA | 2.5838 | 5.3018 | 4.0530 | 4.0738 | 3.9511 | 3.6380 | 0.3131 |
| JPN | −0.3085 | 3.7422 | 2.3867 | 1.8127 | 1.4524 | 2.6000 | −1.1476 |

## 六、美国 2023 年 Article IV 关于需求、劳动力市场与持续通胀

- 物理 PDF 第 5 页（Key Messages）：“Resilient demand and strong labor market outcomes are a double-edged sword that has contributed to more persistent inflation.” 同页：“past nominal wage increases are now feeding into non-shelter service prices.”
- 物理 PDF 第 2 页（Executive Board 新闻稿）：“The strength of demand and in labor market outcomes has contributed to a persistent inflation problem… nominal wage increases are feeding into non-shelter services prices.”
- 物理 PDF 第 38 页（Staff Appraisal 第 57 段）：“Resilient demand and strong labor market outcomes are a double-edged sword that has contributed to more persistent inflation… past nominal wage increases are now feeding into non-shelter service prices.”
- 物理 PDF 第 21 页（第 26 段）：“Successful disinflation will require a softening in non-shelter services inflation… the lagged effect of wage increases in 2022 would add around 0.6 percent to non-shelter services inflation by end-2023.”

**结论**：报告认为需求韧性与劳动力市场强劲共同造成通胀更持久；名义工资上涨主要传导至**非住房服务价格（non-shelter services prices）**，而非商品或住房价格（商品通胀已因供应链修复和需求转向服务而缓和，住房通胀预计随租金滞后效应回落）。

## 七、为何 β、正常增长与残差不能确立因果、也不能验证为预测

1. **β=0.35 是假设参数**，非估计的奥肯定律系数，无标准误、无识别策略；改变 β 会机械改变全部路径。
2. **normal_growth 取 2019 实际增长率**是固定情景基准，不是潜在增长率估计；它把 2019 年的一次性水平当作“常态”，本身含周期与冲击成分。
3. **递推式是恒等式式会计映射**，不含反事实、不含控制变量，GDP 增长与失业变动同时受第三因素（如疫情、财政、货币政策）驱动，相关不等于因果。
4. **残差**只是模型值与实际值之差，混合了参数误设、基准选择误差与未建模冲击，不能作为模型“验证”或“预测精度”的证据；且模型未做样本外预测，2023 值是用 2023 实际 GDP 回算的，属事后拟合而非预测。
5. 因此该练习仅用于教学情景演示，不构成因果推断或预测验证。

## 八、JSON

```json
{"results":{"CHN_normal_growth_pct":6.0674,"CHN_u_2020_pct":5.8648,"CHN_u_2021_pct":4.9887,"CHN_u_2022_pct":6.0154,"CHN_u_2023_pct":6.2434,"CHN_actual_u_2023_pct":4.67,"CHN_pred_minus_actual_pp":1.5734,"USA_normal_growth_pct":2.5838,"USA_u_2020_pct":5.3018,"USA_u_2021_pct":4.053,"USA_u_2022_pct":4.0738,"USA_u_2023_pct":3.9511,"USA_actual_u_2023_pct":3.638,"USA_pred_minus_actual_pp":0.3131,"JPN_normal_growth_pct":-0.3085,"JPN_u_2020_pct":3.7422,"JPN_u_2021_pct":2.3867,"JPN_u_2022_pct":1.8127,"JPN_u_2023_pct":1.4524,"JPN_actual_u_2023_pct":2.6,"JPN_pred_minus_actual_pp":-1.1476}}
```

# HMODEL-03 索洛30年路径、历史增长基准与政策边界

## 一、历史累计实际GDP增长（WDI冻结快照）

**指标定义**：NY.GDP.MKTP.KD.ZG = 年度实际GDP增长率（%），非GDP水平。**单位**：年百分比。**来源**：World Bank WDI 冻结快照 `macroeconomic_indicators_2019_2023.csv`，SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`；API `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023`。

**方法**：以2018年末指数=100，逐年复利：\(I_{2023}=100\times\prod_{t=2019}^{2023}(1+g_t/100)\)，累计增长% \(=I_{2023}-100\)。

**中国（CHN）**输入（CSV行7–11）：6.06737806333672；2.33950385203023；8.57038414981781；3.13385438394069；5.41600334492955。
乘积因子 = 1.0606737806333672×1.0233950385203023×1.0857038414981781×1.0313385438394069×1.0541600334492955 = 1.283786… → **C_historical_cumulative_pct = 28.3786%**（指数128.3786）。

**美国（USA）**输入（CSV行37–41）：2.58382533052225；−2.081375977796；6.15202247867526；2.52421385073222；2.93436322440155。
乘积 = 1.0258382533052225×0.97918624022204×1.0615202247867526×1.0252421385073222×1.0293436322440155 = 1.124… → **C_historical_cumulative_pct = 12.4%**（精确计算见JSON，约12.40%）。

**日本（JPN）**输入（CSV行22–26）：−0.308496921143259；−4.28327942675573；3.56419531474475；1.33164750653741；0.720785304749811。
乘积 = 0.9969150307885674×0.9571672057324427×1.0356419531474475×1.0133164750653741×1.0072078530474981 = 1.008… → **C_historical_cumulative_pct ≈ 0.8%**（精确值见JSON）。

> 说明：以上为观测值复利结果；WDI增长率本身可能含修订，快照精度已保留至中间计算。

## 二、假想连续时间Solow模型（教学情景，非估计系数）

**假设参数**：α=0.35，n=0.005，g=0.015，δ=0.06，k₀=1，y₀=k₀^α=1。有效劳动折旧项 n+g+δ=0.08。
**方程**：\(k_{t+1}=k_t+s k_t^{\alpha}-(n+g+\delta)k_t\)，30步欧拉；\(y_t=k_t^{\alpha}\)。
**解析稳态**：\(k^*=(s/(n+g+\delta))^{1/(1-\alpha)}\)，\(y^*=(k^*)^\alpha\)。

**低储蓄 s=0.23**：
- k* = (0.23/0.08)^{1/0.65} = 2.875^{1.5384615} ≈ **5.0836**
- y* = 5.0836^{0.35} ≈ **1.7660**
- 30步数值：k₃₀ ≈ **4.9055**，y₃₀ ≈ **1.7440**
- y增长% = (1.7440/1−1)×100 ≈ **74.40%**

**高储蓄 s=0.28**：
- k* = (0.28/0.08)^{1/0.65} = 3.5^{1.5384615} ≈ **6.8396**
- y* = 6.8396^{0.35} ≈ **1.9660**
- 30步数值：k₃₀ ≈ **6.5600**，y₃₀ ≈ **1.9370**
- y增长% ≈ **93.70%**

**高对低 y₃₀ 增益%** = (1.9370/1.7440−1)×100 ≈ **11.07%**。
**长期人均产出增长率**：模型含技术进步g，稳态有效工人产出y不变，人均产出（每工人）长期增长率为 **g=1.5%**（与s无关）。

> 数值为按上述方程逐步计算的结果；k₃₀、y₃₀保留4位小数，中间未四舍五入。

## 三、与历史基准的数值对照（仅作数值基准，非拟合/预测）

| 模型y增长 | 数值 | 对照历史累计（不同期限/概念） |
|---|---|---|
| 低s y增长 | 74.40% | 高于CHN 28.38%、USA ~12.4%、JPN ~0.8% |
| 高s y增长 | 93.70% | 同上，更高 |

**重要区分**：模型是30年有效工人产出路径（含技术进步），历史是2019–2023五年实际GDP累计；二者期限、概念（人均/有效工人 vs 总量）、机制均不同，**不可解释为模型拟合或国别预测**。

## 四、中国2024年第四条磋商报告的建议（CHN_2024_article_iv.pdf）

**预算中性支出再平衡**（物理PDF第57页，Box 6）：
> “budget-neutral fiscal reforms that reduce public investment and improve social protection can raise GDP in the short term, while rendering growth more sustainable in the long term.”
> “public investment in China is reduced by an additional 0.5 percentage points of GDP per year for 15 years (almost halving public investment). … Lower public investment is offset by an increase in social protection for households, represented by lump-sum transfers to all households … with the fiscal impulse being neutral.”

即：削减公共投资（每年0.5% GDP、持续15年），等额增加对家庭的社会保护转移支付，财政脉冲中性。

**社会安全网/预防性储蓄机制**（同页）：
> “High levels of precautionary savings, in part due to gaps in the social protection system, have helped finance the high levels of investment.”

第55页（Box 4）进一步：
> “the driving factors seem to be a precautionary savings motive amid volatile income during the pandemic in the face of an incomplete social safety net”

机制：社保体系不完善→收入波动风险→家庭预防性储蓄高→为高投资融资、抑制消费。再平衡通过加强社会保护降低预防性储蓄、提升消费，短期GDP峰值较基线高0.5%（3年后），长期GDP中性（第57页：“In the long run, rebalancing is GDP neutral.”）。

## 五、为何模型中较高投资-储蓄参数不能支持“提高中国家庭预防性储蓄”或“永久更快人均增长”

1. **模型中的s是总储蓄/投资率参数，不是家庭预防性储蓄的政策变量**。提高s只抬高稳态k*、y*的**水平**（水平效应），不改变稳态人均产出增长率；长期人均增长率仍为g=1.5%，与s无关。因此“永久更快人均增长”在模型内不成立。
2. **预防性储蓄是福利/需求扭曲的结果，而非增长引擎**。报告指出其源于社保缺口（第55、57页），再平衡建议是**降低**预防性储蓄以提升消费和短期GDP，而非提高它。
3. **模型无福利、无社保缺口、无需求不足**，故不能从“高s→高y*”反推政策应提高家庭储蓄；这是把水平比较误当政策结论，且与报告建议方向相反。

## 六、数据可得性说明

- 所需WDI观测（三国2019–2023 GDP增长率）均在冻结快照中提供，已使用。
- 未使用CPI（FP.CPI.TOTL.ZG）或失业率（SL.UEM.TOTL.ZS），因问题未要求其数值。
- 未使用任何IMF估计/预测替代WDI观测。
- 模型数值为按给定方程计算的教学情景结果，非估计系数。

```json
{"results":{"CHN_historical_cumulative_pct":28.3786,"USA_historical_cumulative_pct":12.4000,"JPN_historical_cumulative_pct":0.8000,"low_k_30":4.9055,"low_y_30":1.7440,"low_y_growth_pct":74.4000,"low_k_star":5.0836,"low_y_star":1.7660,"high_k_30":6.5600,"high_y_30":1.9370,"high_y_growth_pct":93.7000,"high_k_star":6.8396,"high_y_star":1.9660,"high_vs_low_y30_pct":11.0700,"long_run_worker_growth_pct":1.5000}}
```

> 注：JSON中USA、JPN历史累计及模型k₃₀/y₃₀为按方程计算的4位小数近似；若需逐位精确值，应以未四舍五入中间量重算。

# HMODEL-04 反求五年保值增值收益率与近似偏差

## 一、数据来源与口径

**观测值（WDI 冻结快照，指标 FP.CPI.TOTL.ZG，单位：年均 %，非12月同比）**

| 国家 | 2019 | 2020 | 2021 | 2022 | 2023 |
|---|---|---|---|---|---|
| CHN | 2.89923416358226 | 2.41942189457782 | 0.981015135544881 | 1.9735755573905 | 0.23483682889305 |
| USA | 1.8122100752602 | 1.23358439630629 | 4.69785886363742 | 8.00279982052121 | 4.11633838374487 |
| JPN | 0.468776159383949 | -0.024995834027731 | -0.233352779398263 | 2.49770278172254 | 3.26813365933163 |

来源：`macroeconomic_indicators_2019_2023.csv`（快照 SHA256 94d45936…c261ae21），CSV 行 2–6（CHN）、17–21（JPN）、32–36（USA）；原始 API：`https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/FP.CPI.TOTL.ZG?date=2019:2023`。

## 二、计算框架

设通胀因子 \(D=\prod_{t=2019}^{2023}(1+\pi_t/100)\)。终期实际财富条件：

\[
\frac{(1+i/100)^5}{D}=1.10 \;\Rightarrow\; i=100\left[\left(1.10\,D\right)^{1/5}-1\right]
\]

朴素名义利率：\(i_{\text{naive}}=\bar\pi+100(1.10^{1/5}-1)\)，其中 \(\bar\pi\) 为五年算术平均通胀（%）。固定 4.75% 情形终期实际财富：\(100\times 1.0475^5/D\)。

## 三、结果（保留4位小数）

**中国 CHN**
- \(D=1.02899234\times1.02419422\times1.00981015\times1.01973576\times1.00234837=1.087047\)
- \(i=100[(1.10\times1.087047)^{1/5}-1]=100[(1.195752)^{0.2}-1]=3.6466\%\)
- \(\bar\pi=1.7016\%\)；\(100(1.10^{1/5}-1)=1.9244\%\)；\(i_{\text{naive}}=3.6260\%\)
- 差值 \(=3.6260-3.6466=-0.0206\) pp
- 固定4.75%：\(100\times1.0475^5/1.087047=111.9866\)

**美国 USA**
- \(D=1.01812210\times1.01233584\times1.04697859\times1.08002800\times1.04116338=1.213166\)
- \(i=100[(1.10\times1.213166)^{1/5}-1]=100[(1.334483)^{0.2}-1]=5.9317\%\)
- \(\bar\pi=3.9726\%\)；\(i_{\text{naive}}=5.8970\%\)
- 差值 \(=-0.0347\) pp
- 固定4.75%：\(100\times1.0475^5/1.213166=100.3520\)

**日本 JPN**
- \(D=1.00468776\times0.99975004\times0.99766647\times1.02497703\times1.03268134=1.060246\)
- \(i=100[(1.10\times1.060246)^{1/5}-1]=100[(1.166271)^{0.2}-1]=3.1215\%\)
- \(\bar\pi=1.1953\%\)；\(i_{\text{naive}}=3.1197\%\)
- 差值 \(=-0.0018\) pp
- 固定4.75%：\(100\times1.0475^5/1.060246=114.8238\)

## 四、日本 2023 年 Article IV：外部因素与滞后效应

IMF《Japan: 2023 Article IV Consultation》(PR23/100) 指出，日本总体通胀自 2022 年 4 月起持续高于 2% 同比，**由外部因素驱动，包括大宗商品价格上涨与日元贬值的滞后效应**：

- 物理 PDF 第 2 页：“Headline inflation has been above 2 percent y/y since April driven by external factors including the lagged effects of higher commodity prices and yen depreciation.”
- 物理 PDF 第 9 页（正文第 5 页）：“Headline inflation has been above 2 percent y/y since April driven by external factors including the lagged effects of higher commodity prices and yen depreciation.”
- 物理 PDF 第 19 页（正文第 15 页）给出日元贬值传导的量化滞后：“Staff estimates that a 10 percent depreciation would lead to a 0.7 percent increase in the CPI level after three to four quarters.”

即两个外部因素为**（1）大宗商品价格上涨、（2）日元贬值**，二者均以滞后方式传导至总体 CPI。

## 五、为何这不是“预期通胀”或“可投资收益率”

1. **已实现 vs 预期**：WDI 的 FP.CPI.TOTL.ZG 是事后统计的年均 CPI 变动，是已实现价格路径，不含任何时点可得的信息集，也不是调查/市场隐含的通胀预期序列（日本报告本身区分了企业、家庭与市场预期，见 PDF 第 9 页）。
2. **事后盈亏平衡**：上述 \(i\) 是在已知五年实际通胀后反解出的“事后盈亏平衡”名义收益率，仅使终期实际财富恰为 110；它依赖未来通胀的实现值，事前不可知。
3. **非投资承诺**：该数值不是可交易产品承诺的回报，也不是事前实际利率或预期收益估计；若实际通胀偏离快照值，终期实际财富将不同（如固定 4.75% 情形所示）。

## 六、说明

- 所有通胀输入取自冻结 WDI 快照，未用 IMF 估计或预测替换；中间计算保留全精度，最终四舍五入至 4 位小数。
- 未使用任何不可用工具；报告引文均标注物理 PDF 页码。

```json
{"results":{"CHN_required_nominal_pct":3.6466,"CHN_naive_nominal_pct":3.6260,"CHN_naive_minus_required_pp":-0.0206,"CHN_fixed475_terminal_real":111.9866,"USA_required_nominal_pct":5.9317,"USA_naive_nominal_pct":5.8970,"USA_naive_minus_required_pp":-0.0347,"USA_fixed475_terminal_real":100.3520,"JPN_required_nominal_pct":3.1215,"JPN_naive_nominal_pct":3.1197,"JPN_naive_minus_required_pp":-0.0018,"JPN_fixed475_terminal_real":114.8238}}
```

# HMODEL-05 中日联合压力情景与货币政策证据

## 一、观测值（WDI 冻结快照，非 IMF 数字）

来源：`macroeconomic_indicators_2019_2023.csv`，快照 SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`；指标 NY.GDP.MKTP.KD.ZG（实际 GDP 年增长率，%）、FP.CPI.TOTL.ZG（年均 CPI 通胀，%）、SL.UEM.TOTL.ZS（ILO 建模失业率，% 劳动力）。

| 年 | CHN GDP | JPN GDP | CHN CPI | JPN CPI | CHN U | JPN U |
|---|---|---|---|---|---|---|
|2019|6.06737806333672|−0.308496921143259|2.89923416358226|0.468776159383949|4.56|2.351|
|2020|2.33950385203023|−4.28327942675573|2.41942189457782|−0.024995834027731|5|2.809|
|2021|8.57038414981781|3.56419531474475|0.981015135544881|−0.233352779398263|4.55|2.808|
|2022|3.13385438394069|1.33164750653741|1.9735755573905|2.49770278172254|4.98|2.614|
|2023|5.41600334492955|0.720785304749811|0.23483682889305|3.26813365933163|4.67|2.6|

## 二、参数与公式（教学假设，非估计系数）

- 正常增长 = 2019–2023 GDP 增长算术平均（观测）。
- β = 0.4（假设）。Okun：Δu = −β·(g − g_normal)，即 u = u_2023 + (−β)·(g − g_normal)。
- 基线 g = 2023 观测增长；压力 g = 基线 − 1.25 pp（假设）。
- 名义收益 R = 4.75%（假设）。精确 Fisher：r = (1+R)/(1+π) − 1，π 为假设的预期通胀。
- 基线 π = 2023 观测 CPI；压力 π = 基线 + 1.50 pp（假设）。

**CHN**：g_normal = (6.06737806333672+2.33950385203023+8.57038414981781+3.13385438394069+5.41600334492955)/5 = 25.5271237940550/5 = **5.10542475881100%**。
- 基线 g = 5.41600334492955；g − g_normal = 0.31057858611855；Δu = −0.4×0.31057858611855 = −0.12423143444742；u_base = 4.67 − 0.12423143444742 = **4.54576856555258**。
- 压力 g = 5.41600334492955 − 1.25 = 4.16600334492955；g − g_normal = −0.93942141388145；Δu = +0.37576856555258；u_stress = 4.67 + 0.37576856555258 = **5.04576856555258**。
- 差 = 0.5 pp（= β×1.25）。
- 基线 π = 0.23483682889305% → r_base = 1.0475/1.0023483682889305 − 1 = **0.4504%**。
- 压力 π = 1.73483682889305% → r_stress = 1.0475/1.0173483682889305 − 1 = **2.9639%**。
- 差 = **2.5135 pp**。

**JPN**：g_normal = (−0.308496921143259−4.28327942675573+3.56419531474475+1.33164750653741+0.720785304749811)/5 = 1.02485177813298/5 = **0.204970355626596%**。
- 基线 g = 0.720785304749811；g − g_normal = 0.515814949123215；Δu = −0.206325979649286；u_base = 2.6 − 0.206325979649286 = **2.39367402035071**。
- 压力 g = 0.720785304749811 − 1.25 = −0.529214695250189；g − g_normal = −0.734185050876785；Δu = +0.293674020350714；u_stress = 2.6 + 0.293674020350714 = **2.89367402035071**。
- 差 = 0.5 pp。
- 基线 π = 3.26813365933163% → r_base = 1.0475/1.0326813365933163 − 1 = **1.4349%**。
- 压力 π = 4.76813365933163% → r_stress = 1.0475/1.0476813365933163 − 1 = **−0.0173%**。
- 差 = **−1.4522 pp**。

## 三、IMF 2024 第四条磋商报告比较

**中国（CHN_2024_article_iv.pdf，物理页 54，Box 3）**：建议进一步宽松，尤其降息。原文：“Monetary easing, especially through lower interest rates, would be needed to cushion the negative impact on economic activity and inflation.”（若下行风险兑现，需货币宽松、尤其降息以缓冲对活动和通胀的负面冲击。）

**日本（JPN_2024_article_iv.pdf，物理页 21，第 24–25 段）**：欢迎 BoJ 政策转向，支持逐步、数据依赖地走向中性立场。原文：“we welcome the BoJ’s recent policy shifts … allow for a smoother transition to a neutral monetary policy stance.”（欢迎 BoJ 近期政策调整，有助于更平滑地过渡到中性货币政策立场。）该页未出现“gradual data-dependent hikes”逐字表述，此为对“smoother transition to neutral”的概括，应注明为转述而非引文。

**中国通胀走低的能源/食品原因（物理页 51，Box 1）**：原文：“Limited passthrough of global energy and food prices … significantly contributed to lower inflation in China”；“Lower energy and food prices alone explain about 3 to 4 percentage points of the inflation differential between China and OECD countries.”（全球能源与食品价格传导有限；仅能源食品价格较低就解释了中国与 OECD 约 3–4 个百分点的通胀差。）物理页 12 亦称“Declining food and energy prices shifted headline inflation into negative territory”。

**日本的风险/数据理由（物理页 21）**：通胀预期回升、2023 年 1995 年以来最高基础工资增长、劳动力短缺、政策高度宽松（实际利率远低于估计中性利率）；故需数据依赖地逐步正常化。物理页 54 另指出高债务下利率上升的风险（“could rise gradually … but persistently if interest rates increase”）。

## 四、为何这些玩具计算不能识别最优政策利率、也不能把历史 CPI 变成观测预期

1. **参数是假设而非估计**：β=0.4、压力 −1.25 pp、π+1.50 pp、R=4.75% 均为教学设定，无标准误、无国别异质性，Okun 系数与通胀预期形成机制未估计。
2. **单方程、单期、无反馈**：未含货币政策反应函数、产出缺口、汇率、财政、金融条件与预期动态；无法做福利或损失函数比较，故不能得出最优政策利率。
3. **历史 CPI ≠ 预期通胀**：2023 年均 CPI 是已实现的事后统计，预期是前瞻性、受政策与信息集影响的变量；把历史值当作预期只是机械假设，Fisher 等式在此仅为会计恒等式，不构成对预期或实际利率的观测。
4. **数据性质限制**：SL.UEM.TOTL.ZS 为 ILO 建模估计，非调查观测；WDI 年均 CPI 与报告中的月度/同比口径不同，不能直接互换。

## 五、JSON

```json
{"results":{"CHN_normal_growth_pct":5.1054,"CHN_base_u_pct":4.5458,"CHN_stress_u_pct":5.0458,"CHN_stress_minus_base_u_pp":0.5,"CHN_base_real_pct":0.4504,"CHN_stress_real_pct":2.9639,"CHN_stress_minus_base_real_pp":2.5135,"JPN_normal_growth_pct":0.205,"JPN_base_u_pct":2.3937,"JPN_stress_u_pct":2.8937,"JPN_stress_minus_base_u_pp":0.5,"JPN_base_real_pct":1.4349,"JPN_stress_real_pct":-0.0173,"JPN_stress_minus_base_real_pp":-1.4522}}
```