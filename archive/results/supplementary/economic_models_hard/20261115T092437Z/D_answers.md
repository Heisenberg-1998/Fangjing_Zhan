# HMODEL-01 三国跨年费雪收益与近似误差

# 一、数据来源与口径（观测值，非预测）

**指标**：FP.CPI.TOTL.ZG（年平均值 CPI 通胀，单位：年 %；非 12 月同比、非 PCE）。
**来源**：项目冻结的 WDI 快照 `macroeconomic_indicators_2019_2023.csv`，SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`；原始 API：`https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/FP.CPI.TOTL.ZG?date=2019:2023&format=json&per_page=1000`。

| 国家 | 2021（CSV 行） | 2022（CSV 行） | 2023（CSV 行） |
|---|---|---|---|
| CHN | 0.981015135544881（行4） | 1.9735755573905（行5） | 0.23483682889305（行6） |
| JPN | −0.233352779398263（行19） | 2.49770278172254（行20） | 3.26813365933163（行21） |
| USA | 4.69785886363742（行34） | 8.00279982052121（行35） | 4.11633838374487（行36） |

**假设（教学情景，非估计系数、非实际存款利率）**：期初（2020 年末）名义财富 100；每年名义收益 4.75%，复利再投资，至 2023 年末共 3 期。名义终值 = 100×(1.0475)³ = 114.93759218750003（累计 +14.937592187500037%）。

# 二、计算方法

- 精确 Fisher 年实际收益率：r_t = (1+i)/(1+π_t) − 1，i = 4.75%，π_t 为当年 WDI 年平均 CPI 通胀。
- 精确实际终值：W_exact = 100 × Π(1+r_t) = 100 × (1.0475)³ / Π(1+π_t)。
- 精确 3 年实际 CAGR：g = [Π(1+r_t)]^(1/3) − 1。
- 近似法：年实际率 ≈ 4.75 − π_t，W_approx = 100 × Π(1 + (4.75−π_t)/100)。
- 近似减精确累计实际回报（百分点）= 近似累计实际回报% − 精确累计实际回报%。

# 三、逐年精确 Fisher 实际收益率（%）

| 国家 | 2021 | 2022 | 2023 |
|---|---|---|---|
| CHN | 3.73236975227087 | 2.7226900963641665 | 4.504584747132001 |
| JPN | 4.9950087711970514 | 2.1974123879380247 | 1.4349696156578773 |
| USA | 0.04980153073663729 | −3.011773607653412 | 0.6086092020635814 |

# 四、结果（最终值四舍五入至 4 位小数）

**中国（CHN）**
- 精确实际终值 = 100 × 1.0475³ / (1.00981015135448881 × 1.019735755573905 × 1.0023483682889305) = **111.3566**
- 精确 3 年实际 CAGR = **3.6506%**
- 近似实际终值 = 100 × 1.03768984864455119 × 1.027764244426094997 × 1.0451516317110695 = **111.4655**
- 近似 − 精确累计实际回报 = 11.465476208582736 − 11.356616696563403 = **0.1089 个百分点**

**日本（JPN）**
- 精确实际终值 = **108.8419**
- 精确 3 年实际 CAGR = **2.8645%**
- 近似实际终值 = **108.9386**
- 近似 − 精确 = 8.938642161751975 − 8.841935810734181 = **0.0967 个百分点**

**美国（USA）**
- 精确实际终值 = **97.6271**（实际购买力低于期初 100）
- 精确 3 年实际 CAGR = **−0.7973%**
- 近似实际终值 = **97.4110**
- 近似 − 精确 = −2.5889852074398756 − (−2.3728987474211816) = **−0.2161 个百分点**

说明：近似法误差符号取决于通胀水平——低通胀时近似偏高（中国、日本），高通胀（美国 2022 年 8.0%）时近似明显偏低，因为忽略了交叉项 −i·π。

# 五、日本 2024 年 Article IV 关于进一步加息的速度与条件性

**文件**：IMF, *Japan: 2024 Article IV Consultation—Staff Report*, Country Report No. 24/156（PR24/156），2024 年 5 月 13 日发布。

1. **已采取的行动（观测/事实）**：2024 年 3 月会议结束负利率政策（NIRP），"Hiked the short-term policy rate for the first time since February 2007… The policy rate band increased by about 10 bps to range from 0 to 0.1 percent (from -0.1 to 0 percent previously under the NIRP)."（物理 PDF 第 11 页）
2. **条件性（前提条件）**："Given growing confidence that the 2-percent inflation target would be achieved in a sustainable manner over the policy horizon"（物理 PDF 第 11 页；脚注 4 说明该政策视野为"the period up to end-March 2026"）。
3. **维持宽松的条件**："Stated that accommodative financial conditions will be maintained for the time being, as long-term inflation expectations have not yet been anchored at 2 percent."（物理 PDF 第 12 页）
4. **当前仍极度宽松**："monetary policy continues to remain ultra-accommodative… higher realized inflation and inflation expectations have led to lower and negative real short- and long-term rates."（物理 PDF 第 12 页）

**关于"进一步加息的速度"**：所提供的检索证据中，**没有**包含 IMF 对后续加息具体节奏（如"gradual/data-dependent pace"）的明确表述段落。因此我不对"推荐的速度"作具体断言——该事实在给定证据中缺失，需查阅报告正文（货币政策章节）原文核实，我不予编造。可确证的是：加息的条件是"对 2% 目标可持续实现信心增强"，且因长期通胀预期尚未锚定于 2%，需暂时维持宽松金融条件。

# 六、为何 4.75% 不是 BoJ 政策利率

- 4.75% 是本题**假设的名义存款收益率**（教学情景参数），用于构造购买力比较，并非任何国家的观测政策利率。
- BoJ 的政策目标是**无担保隔夜拆借利率**（uncollateralized overnight call rate），2024 年 3 月后区间为 0–0.1%（此前 NIRP 下为 −0.1% 至 0%）（物理 PDF 第 11 页）。这与 4.75% 相差数百个基点。
- 此外，本练习用**年平均 CPI** 作平减，而非 12 月同比或实际存款合同条款；因此结果不代表任何真实存款产品的实际回报。

# 七、假设 / 观测 / 预测的区分

- **观测**：上表 WDI CPI 值（冻结快照，含 CSV 行号与 SHA256）。
- **假设**：名义收益率 4.75%、期初财富 100、复利再投资、年平均 CPI 作平减。
- **预测**：无。IMF 报告中的增长/通胀预测未被用于任何计算。

```json
{"results":{"CHN_exact_terminal":111.3566,"CHN_exact_cagr_pct":3.6506,"CHN_approx_terminal":111.4655,"CHN_approx_minus_exact_pp":0.1089,"JPN_exact_terminal":108.8419,"JPN_exact_cagr_pct":2.8645,"JPN_approx_terminal":108.9386,"JPN_approx_minus_exact_pp":0.0967,"USA_exact_terminal":97.6271,"USA_exact_cagr_pct":-0.7973,"USA_approx_terminal":97.4110,"USA_approx_minus_exact_pp":-0.2161}}
```

# HMODEL-02 三国奥肯递推与真实失业率残差

# 一、数据来源与口径

**观测值（World Bank WDI 冻结快照，SHA256 94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21，文件 macroeconomic_indicators_2019_2023.csv）**

- 实际GDP增长率：指标 NY.GDP.MKTP.KD.ZG，单位：年百分比（年度实际GDP增长，非GDP水平）
- 失业率：指标 SL.UEM.TOTL.ZS，单位：占劳动力百分比（ILO 建模估计）

| 国家 | 2019 GDP | 2020 GDP | 2021 GDP | 2022 GDP | 2023 GDP | 2019 U | 2023 U |
|---|---|---|---|---|---|---|---|
| CHN | 6.06737806333672 | 2.33950385203023 | 8.57038414981781 | 3.13385438394069 | 5.41600334492955 | 4.56 | 4.67 |
| USA | 2.58382533052225 | -2.081375977796 | 6.15202247867526 | 2.52421385073222 | 2.93436322440155 | 3.669 | 3.638 |
| JPN | -0.308496921143259 | -4.28327942675573 | 3.56419531474475 | 1.33164750653741 | 0.720785304749811 | 2.351 | 2.6 |

（CSV 行号：CHN 7–16；JPN 22–31；USA 37–46）

**假设（教学情景，非估计系数）**：β = 0.35；normal_growth = 各国自身 2019 年实际GDP增长率（固定基准，非潜在增长率估计）。

# 二、模型与递推

递推式：u_t = u_{t−1} − 0.35 × (g_t − g_2019)，u_2019 为观测值，逐年结转模型值（不重置为实际值）。

## 中国 CHN（normal = 6.06737806333672）

- 2020：缺口 = 2.33950385203023 − 6.06737806333672 = −3.72787421130649 → Δu = +1.30475597395727 → u = 4.56 + 1.30475597395727 = **5.86475597395727**
- 2021：缺口 = 8.57038414981781 − 6.06737806333672 = 2.50300608648109 → Δu = −0.87605213026838 → u = **4.98870384368889**
- 2022：缺口 = 3.13385438394069 − 6.06737806333672 = −2.93352367939603 → Δu = +1.02673328778861 → u = **6.01543713147750**
- 2023：缺口 = 5.41600334492955 − 6.06737806333672 = −0.65137471840717 → Δu = +0.22798115144251 → u = **6.24341828291999**
- 残差 = 6.24341828291999 − 4.67 = **+1.57341828291999 pp**

## 美国 USA（normal = 2.58382533052225）

- 2020：缺口 = −2.081375977796 − 2.58382533052225 = −4.66520130831825 → Δu = +1.63282045791139 → u = 3.669 + 1.63282045791139 = **5.30182045791139**
- 2021：缺口 = 6.15202247867526 − 2.58382533052225 = 3.56819714815301 → Δu = −1.24886900185355 → u = **4.05295145605784**
- 2022：缺口 = 2.52421385073222 − 2.58382533052225 = −0.05961147979003 → Δu = +0.02086401792651 → u = **4.07381547398435**
- 2023：缺口 = 2.93436322440155 − 2.58382533052225 = 0.35053789387930 → Δu = −0.12268826285776 → u = **3.95112721112659**
- 残差 = 3.95112721112659 − 3.638 = **+0.31312721112659 pp**

## 日本 JPN（normal = −0.308496921143259）

- 2020：缺口 = −4.28327942675573 − (−0.308496921143259) = −3.97478250561247 → Δu = +1.39117387696436 → u = 2.351 + 1.39117387696436 = **3.74217387696436**
- 2021：缺口 = 3.56419531474475 + 0.308496921143259 = 3.87269223588801 → Δu = −1.35544228256080 → u = **2.38673159440356**
- 2022：缺口 = 1.33164750653741 + 0.308496921143259 = 1.64014442768067 → Δu = −0.57405054968823 → u = **1.81268104471533**
- 2023：缺口 = 0.720785304749811 + 0.308496921143259 = 1.02928222589307 → Δu = −0.36024877906257 → u = **1.45243226565276**
- 残差 = 1.45243226565276 − 2.6 = **−1.14756773434724 pp**

# 三、美国 2023 年 Article IV 报告：需求、劳动力市场与持续通胀

**来源**：IMF, *United States: Staff Report for the 2023 Article IV Consultation*, PR23/208（2023年6月15日执董会结论）。

1. **需求与劳动力市场强劲是"双刃剑"**（物理PDF第5页，Key Messages）："Resilient demand and strong labor market outcomes are a double-edged sword that has contributed to more persistent inflation." 第38页第57段重复同一表述。第2页执董会新闻稿："The strength of demand and in labor market outcomes has contributed to a persistent inflation problem."
2. **商品通胀已缓和、住房（shelter）价格预计放缓，但名义工资上涨正传导至非住房服务价格**（第5页）："Goods inflation has moderated and shelter price growth is expected to slow in coming months. However, past nominal wage increases are now feeding into non-shelter service prices." 第2页："nominal wage increases are feeding into non-shelter services prices."
3. **因此，服务价格类别 = 非住房服务（non-shelter services）价格**。第21页第26段进一步量化："the lagged effect of wage increases in 2022 would add around 0.6 percent to non-shelter services inflation by end-2023"，并指出回到2%目标需要工资通胀降至约3–4%。
4. 报告还指出，持续去通胀"will necessitate a loosening of labor market conditions that, so far, has not been evident in the data"（第5页、第38页第58段）。

# 四、为何 β、normal growth 与残差不能确立因果，也不构成预测

- **β = 0.35 是人为设定的教学参数**，不是从美国/中国/日本数据估计的奥肯系数；真实奥肯关系随国家、时期、冲击类型变化，且可能不对称。
- **normal growth 取 2019 年单年实际增长率**只是固定情景基准，不是潜在增长率估计；2019 年本身受当年冲击影响（如日本 2019 年为负增长，导致其"正常增长"为负，机械地使后续年份几乎都产生失业下降）。
- **递推式是恒等式式会计分解**：给定 g 与 β，u 的路径被完全决定，因此"模型值"不含任何独立信息；残差只度量模型路径与实际 ILO 估计的偏离，不能识别 GDP 对失业的因果效应，也不能检验模型正确性。
- **数据本身的性质**：失业率为 ILO *建模* 估计（SL.UEM.TOTL.ZS），GDP 为年度实际增长率；两者均含测量与修订误差，且年度频率掩盖季度动态。
- **残差不是预测误差**：它是样本内回溯拟合的偏差；由于参数外生给定、未做样本外检验、未纳入置信区间，不能据此声称该模型可预测未来失业。残差符号（中国 +1.57pp、美国 +0.31pp、日本 −1.15pp）只说明该机械规则与各国实际劳动力市场调整方式的差异。

# 五、说明

- 所有数值观测均来自题给 WDI 冻结快照记录（CSV 行号与 SHA256 已注明），未使用 IMF 估计或预测替代 WDI 观测。
- 美国 Article IV 报告引文均标注物理 PDF 页码；未使用任何未提供的工具或数据。

```json
{"results":{"CHN_normal_growth_pct":6.0674,"CHN_u_2020_pct":5.8648,"CHN_u_2021_pct":4.9887,"CHN_u_2022_pct":6.0154,"CHN_u_2023_pct":6.2434,"CHN_actual_u_2023_pct":4.67,"CHN_pred_minus_actual_pp":1.5734,"USA_normal_growth_pct":2.5838,"USA_u_2020_pct":5.3018,"USA_u_2021_pct":4.0530,"USA_u_2022_pct":4.0738,"USA_u_2023_pct":3.9511,"USA_actual_u_2023_pct":3.638,"USA_pred_minus_actual_pp":0.3131,"JPN_normal_growth_pct":-0.3085,"JPN_u_2020_pct":3.7422,"JPN_u_2021_pct":2.3867,"JPN_u_2022_pct":1.8127,"JPN_u_2023_pct":1.4524,"JPN_actual_u_2023_pct":2.6,"JPN_pred_minus_actual_pp":-1.1476}}
```

# HMODEL-03 索洛30年路径、历史增长基准与政策边界

# 一、历史观测：2019–2023 年累计实际 GDP 增长（WDI 冻结快照）

**指标定义与来源**：NY.GDP.MKTP.KD.ZG，年度实际 GDP 增长率（年 %，非 GDP 水平）。来源：World Bank WDI 冻结快照 `macroeconomic_indicators_2019_2023.csv`，SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`；API 记录 `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023`。以下为**观测值**（非预测）。

**方法**：以 2018 年末指数 = 100，逐年复利：Index_t = Index_{t−1} × (1 + g_t/100)，累计增长 % = Index_2023 − 100。

| 国家 | 2019 | 2020 | 2021 | 2022 | 2023 | 2023 指数 | 累计增长 % |
|---|---|---|---|---|---|---|---|
| CHN | 6.06737806333672 | 2.33950385203023 | 8.57038414981781 | 3.13385438394069 | 5.41600334492955 | 128.1280777160828 | **28.1281** |
| USA | 2.58382533052225 | −2.081375977796 | 6.15202247867526 | 2.52421385073222 | 2.93436322440155 | 112.5276618267484 | **12.5277** |
| JPN | −0.308496921143259 | −4.28327942675573 | 3.56419531474475 | 1.33164750653741 | 0.720785304749811 | 100.8601933958735 | **0.8602** |

（对应年化 CAGR 分别为 5.0821%、2.3887%、0.1714%，仅作参考。）

# 二、假设性 Solow 教学情景（非估计、非预测）

**模型**：y = k^α，α = 0.35，n = 0.005，g = 0.015，δ = 0.06，k0 = 1，y0 = 1；30 步年度 Euler 迭代
k_{t+1} = k_t + s·k_t^α − (n+g+δ)·k_t，其中 n+g+δ = 0.08。
解析稳态：k* = [s/(n+g+δ)]^{1/(1−α)}，y* = (k*)^α。
所有参数均为**假设**，不是国别估计系数。

| 量 | s = 0.23（低） | s = 0.28（高） |
|---|---|---|
| k30 | 4.07465773594212 → **4.0747** | 5.387201705142641 → **5.3872** |
| y30 | 1.635053234579369 → **1.6351** | 1.8029228077554094 → **1.8029** |
| y 从 y0=1 的增长 % | **63.5053** | **80.2923** |
| k* | 5.076877574478583 → **5.0769** | 6.871123595217299 → **6.8711** |
| y* | 1.7658704606882027 → **1.7659** | 1.9631781700620854 → **1.9632** |
| 长期人均产出增长率 % | **1.5**（= g） | **1.5**（= g） |

**高 vs 低 y30 增益**：1.8029228077554094 − 1.635053234579369 = 0.16786957317604045；相对低情景 = 0.16786957317604045 / 1.635053234579369 = 10.2670%。即高储蓄情景 30 年后有效工人产出水平约高 **10.2670%**（水平效应，非永久增长率效应）。

# 三、与历史数字的数值对照（仅作基准，非拟合、非预测）

- 模型 y 增长 63.5053%（低）/ 80.2923%（高）vs 历史累计：CHN 28.1281%、USA 12.5277%、JPN 0.8602%。
- 两者**概念与期限不同**：模型是有效工人产出、30 年、无人口/技术折算的假设路径；历史是 5 年实际 GDP 总量增长。数值差异不构成模型拟合优度或国别预测的证据。

# 四、中国 2024 年 Article IV 报告的政策建议与机制

来源：IMF《People's Republic of China: 2024 Article IV Consultation》，Box 6，**物理 PDF 第 57 页**（印刷页 53）。

1. **预算中性（budget-neutral）的支出再定向**：报告模拟"public investment in China is reduced by an additional 0.5 percentage points of GDP per year for 15 years (almost halving public investment)"，并以"an increase in social protection for households, represented by lump-sum transfers to all households"对冲，"with the fiscal impulse being neutral"。即：削减公共投资、增加社会保护转移支付，财政总量中性。
2. **社会安全网—预防性储蓄机制**：报告指出"High levels of precautionary savings, in part due to gaps in the social protection system, have helped finance the high levels of investment."；Box 4（物理 PDF 第 55 页）亦称家庭储蓄上升的驱动因素是"a precautionary savings motive amid volatile income during the pandemic in the face of an incomplete social safety net"。机制是：社会保护缺口 → 预防性储蓄高 → 消费偏低、储蓄为高投资融资。因此**补强社会安全网可降低预防性储蓄、提升消费**，模拟中"the boost in consumption from higher transfers is larger than the decline in public investment"，GDP 峰值较基线高 0.5%（3 年后），长期"rebalancing is GDP neutral"。

# 五、为何"更高投资—储蓄参数"不能为下述主张背书

1. **参数是假设，不是政策证据**：s = 0.23/0.28 是教学取值，不是中国估计值；模型不能反推"应提高中国家庭预防性储蓄"。
2. **方向相反**：模型里 s 上升提高的是 k*、y* 的**水平**；而报告的建议是通过补强社保**降低**预防性储蓄以提振消费。用模型的高 s 结果去支持"提高预防性储蓄"是把水平效应误读为福利/政策结论，且与报告机制相悖。
3. **无永久增长率效应**：模型长期人均产出增长率为 g = 1.5%，与 s 无关；s 只改变水平（此处 y30 高约 10.2670%），不改变长期增长率。故不能据此主张"永久更快的 per-worker 增长"。
4. **模型不含福利、外部性、投资效率**：报告假设"the marginal productivity of 'lost' public investment would have been close to zero"，并强调消费的进口密集度较低等，这些都不在 Solow 玩具模型中。

# 六、来源可得性说明

- WDI 数值均取自上述冻结快照记录（CSV 行 7–11、22–26、37–41），未使用记忆值或 IMF 数字替代。
- 中国 Article IV 引文均来自提供的 CHN_2024_article_iv.pdf 摘录（物理页 55、57）。未检索到的具体页码/原文未作补充，未虚构引用。

```json
{"results":{"CHN_historical_cumulative_pct":28.1281,"USA_historical_cumulative_pct":12.5277,"JPN_historical_cumulative_pct":0.8602,"low_k_30":4.0747,"low_y_30":1.6351,"low_y_growth_pct":63.5053,"low_k_star":5.0769,"low_y_star":1.7659,"high_k_30":5.3872,"high_y_30":1.8029,"high_y_growth_pct":80.2923,"high_k_star":6.8711,"high_y_star":1.9632,"high_vs_low_y30_pct":10.2670,"long_run_worker_growth_pct":1.5}}
```

# HMODEL-04 反求五年保值增值收益率与近似偏差

# 一、数据来源（观测值，非估计）

指标：FP.CPI.TOTL.ZG（年均 CPI 通胀，年度 %，非 12 月同比、非 PCE）。来源：World Bank WDI 冻结快照 `macroeconomic_indicators_2019_2023.csv`，SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`（CSV 行号见下）。

| 国家 | 2019 | 2020 | 2021 | 2022 | 2023 |
|---|---|---|---|---|---|
| CHN（行2–6） | 2.89923416358226 | 2.41942189457782 | 0.981015135544881 | 1.9735755573905 | 0.23483682889305 |
| USA（行32–36） | 1.8122100752602 | 1.23358439630629 | 4.69785886363742 | 8.00279982052121 | 4.11633838374487 |
| JPN（行17–21） | 0.468776159383949 | −0.024995834027731 | −0.233352779398263 | 2.49770278172254 | 3.26813365933163 |

# 二、方法（假设，非估计系数）

价格指数 Π = ∏(1+π_t/100)，起点 100（2018 年末）。要求期末实际财富 = 110：

(1+i/100)^5 / Π = 1.10  ⟹  1+i/100 = [1.10·Π]^(1/5)

等价写法：i = 100·{[(1.10)^(1/5)]·(Π)^(1/5) − 1}，其中 (Π)^(1/5) − 1 即通胀的几何平均（CAGR）。

- 朴素名义利率 = 算术平均通胀 + 100·(1.10^(1/5) − 1)，其中 100·(1.10^(1/5)−1) = 1.924141…%（五年 10% 目标的年化）。
- 固定 4.75% 情形：期末实际财富 = 100·(1.0475)^5 / Π。

# 三、计算结果（中间值保留全精度，最终 4 位小数）

**中国 CHN**
- Π = 1.0877786486978773（累计 8.777864869787733%），几何平均通胀 = 1.6969916469371737%
- 1+i/100 = 1.10^(1/5)·1.0169699164693717 = 1.036209… ⟹ **i = 3.6209%**
- 算术平均通胀 = 1.7016167159977023%；朴素 = 1.7016167159977023 + 1.924141 = **3.6258%**
- 朴素 − 精确 = **0.0046 pp**
- 固定 4.75%：100×1.2611599138768561/1.0877786486978773 = **115.9381**

**美国 USA**
- Π = 1.2134340562881272（累计 21.343405628812718%），几何平均 = 3.944912008608692%
- 1+i/100 = 1.10^(1/5)×1.0394491200860869 ⟹ **i = 5.9449%**
- 算术平均 = 3.972558307893998%；朴素 = **5.8967%**
- 朴素 − 精确 = **−0.0276 pp**（算术平均高于几何平均，朴素值反而偏低）
- 固定 4.75%：100×1.2611599138768561/1.2134340562881272 = **103.9326**

**日本 JPN**
- Π = 1.0606897706345218（累计 6.0689770634521745%），几何平均 = 1.1853588194226994%
- 1+i/100 = 1.10^(1/5)×1.011853588194227 ⟹ **i = 3.1094%**
- 算术平均 = 1.195252797402425%；朴素 = **3.1194%**
- 朴素 − 精确 = **0.0099 pp**
- 固定 4.75%：100×1.2611599138768561/1.0606897706345218 = **118.8995**

# 四、日本 2023 年 Article IV：外部因素与滞后效应

IMF, *Japan: 2023 Article IV Consultation—Staff Report*（PR23/100，2023 年 3 月 30 日发布）：

- 物理 PDF 第 2 页（Executive Board 新闻稿）：“Headline inflation has been above 2 percent y/y since April driven by **external factors including the lagged effects of higher commodity prices and yen depreciation**.” → 两个外部因素：**大宗商品价格上涨**与**日元贬值**，且均以**滞后效应**传导。
- 物理 PDF 第 9 页（正文 Recent Developments）：“Headline inflation has been above 2 percent y/y since April driven by external factors including the lagged effects of higher commodity prices and yen depreciation.”
- 物理 PDF 第 19 页（正文，关于上行风险）：“Staff estimates that a **10 percent depreciation would lead to a 0.7 percent increase in the CPI level after three to four quarters**.” → 日元贬值的滞后传导期约 3–4 个季度；同页亦提及“second round effects of imported inflation”。

# 五、为何这些不是预期通胀或可投资收益率

1. **年均 CPI 是已实现的事后统计量**：FP.CPI.TOTL.ZG 是各年 12 个月同比的平均（或年度指数比），由统计机构事后编制、可能修订；它不是任何时点可观测的预期通胀序列，也不等于存款/债券的到期收益率所对应的通胀补偿。
2. **求解的 i 是“事后盈亏平衡”名义收益率**：它把 2019–2023 年**实际发生**的通胀路径代入，倒推出恰好实现 110 实际财富所需的常数名义回报。事前无人知晓该路径，故 i 不是事前（ex ante）实际利率估计，也不是任何产品的承诺收益。
3. **算术平均 + 费雪近似的“朴素”值只是教学对照**：它忽略复利与几何平均（Jensen 不等式），误差符号取决于通胀路径的波动（美国为负、中/日为正），不构成预测。
4. **4.75% 固定情形同样是情景假设**，其期末实际财富随各国实际通胀路径而不同，不代表可实现投资结果。
5. 上述所有参数（1.10 目标、4.75%、五年期）均为**教学情景假设**，非估计的国家系数；观测值仅来自 WDI 冻结快照，未使用 IMF 的估计或预测替代。

```json
{"results":{"CHN_required_nominal_pct":3.6209,"CHN_naive_nominal_pct":3.6258,"CHN_naive_minus_required_pp":0.0046,"CHN_fixed475_terminal_real":115.9381,"USA_required_nominal_pct":5.9449,"USA_naive_nominal_pct":5.8967,"USA_naive_minus_required_pp":-0.0276,"USA_fixed475_terminal_real":103.9326,"JPN_required_nominal_pct":3.1094,"JPN_naive_nominal_pct":3.1194,"JPN_naive_minus_required_pp":0.0099,"JPN_fixed475_terminal_real":118.8995}}
```

# HMODEL-05 中日联合压力情景与货币政策证据

# 一、WDI 观测值（冻结快照，SHA256 94d4593…c261ae21）

| 国家 | 指标 | 2019 | 2020 | 2021 | 2022 | 2023 |
|---|---|---|---|---|---|---|
| CHN | NY.GDP.MKTP.KD.ZG（年实际GDP增长，%） | 6.06737806333672 | 2.33950385203023 | 8.57038414981781 | 3.13385438394069 | 5.41600334492955 |
| CHN | FP.CPI.TOTL.ZG（年均CPI通胀，%） | 2.89923416358226 | 2.41942189457782 | 0.981015135544881 | 1.9735755573905 | 0.23483682889305 |
| CHN | SL.UEM.TOTL.ZS（ILO模型失业率，%） | 4.56 | 5 | 4.55 | 4.98 | 4.67 |
| JPN | NY.GDP.MKTP.KD.ZG | -0.308496921143259 | -4.28327942675573 | 3.56419531474475 | 1.33164750653741 | 0.720785304749811 |
| JPN | FP.CPI.TOTL.ZG | 0.468776159383949 | -0.024995834027731 | -0.233352779398263 | 2.49770278172254 | 3.26813365933163 |
| JPN | SL.UEM.TOTL.ZS | 2.351 | 2.809 | 2.808 | 2.614 | 2.6 |

来源：World Bank WDI 冻结观测（CSV 行 2–31），指标代码如上，单位见括号。

# 二、计算（假设参数为教学情景，非估计系数）

**正常增长率** = 2019–2023 GDP 增长算术平均：
- CHN：(6.06737806333672+2.33950385203023+8.57038414981781+3.13385438394069+5.41600334492955)/5 = **5.10542475881100%**
- JPN：(-0.308496921143259−4.28327942675573+3.56419531474475+1.33164750653741+0.720785304749811)/5 = **0.204970355626596%**

**Okun**：Δu(pp) = −β×(g − g_normal)，β=0.4，起点为 2023 观测失业率。
- CHN：基线 g=5.41600334492955 → Δu=−0.4×(5.41600334492955−5.10542475881100)=−0.124231434447pp → u_base=4.67−0.124231434447=**4.545768565553%**；压力 g=5.41600334492955−1.25=4.16600334492955 → Δu=−0.4×(4.16600334492955−5.10542475881100)=+0.375768565553pp → u_stress=4.67+0.375768565553=**5.045768565553%**；差=**0.500000000000pp**（=0.4×1.25）。
- JPN：基线 g=0.720785304749811 → Δu=−0.4×(0.720785304749811−0.204970355626596)=−0.206325979649pp → u_base=2.6−0.206325979649=**2.393674020351%**；压力 g=0.720785304749811−1.25=−0.529214695250189 → Δu=−0.4×(−0.529214695250189−0.204970355626596)=+0.293674020351pp → u_stress=2.6+0.293674020351=**2.893674020351%**；差=**0.500000000000pp**。

**Fisher（精确）**：r = ((1+i/100)/(1+π^e/100)−1)×100，i=4.75%，π^e 为假设（基线=2023 年均CPI；压力=+1.50pp）。
- CHN：π^e_base=0.23483682889305 → r_base=((1.0475)/(1.0023483682889305)−1)×100=**4.5046%**；π^e_stress=1.73483682889305 → r_stress=((1.0475)/(1.0173483682889305)−1)×100=**2.9640%**；差=**−1.5406pp**。
- JPN：π^e_base=3.26813365933163 → r_base=((1.0475)/(1.0326813365933163)−1)×100=**1.4349%**；π^e_stress=4.76813365933163 → r_stress=((1.0475)/(1.0476813365933163)−1)×100=**−0.0173%**；差=**−1.4522pp**。

（精确 Fisher 差略小于 1.50pp 的近似值，因分母含通胀。）

# 三、IMF 2024 第四条磋商报告对比

**中国（CHN_2024_article_iv.pdf，物理页 54，Box 3）**：建议进一步宽松，且以利率为主。原文：“Monetary easing, especially through lower interest rates, would be needed to cushion the negative impact on economic activity and inflation.”（若下行风险兑现，需以降低利率为主的货币宽松来缓冲对活动和通胀的负面冲击。）

**日本（JPN_2024_article_iv.pdf，物理页 21，第 24–25 段）**：肯定并支持渐进、数据依赖的政策正常化。原文：“we welcome the BoJ’s recent policy shifts … These shifts will help anchor inflation and inflation expectations at the 2 percent target.” 并指出“a historical high degree of monetary policy accommodation—with a real interest rate much lower than the estimated neutral”，即需“a smoother transition to a neutral monetary policy stance”。

**中国通胀偏低的原因（能源/食品）**：物理页 51，Box 1：“Limited passthrough of global energy and food prices and the ongoing real estate contraction have significantly contributed to lower inflation in China”；“Lower energy and food prices alone explain about 3 to 4 percentage points of the inflation differential between China and OECD countries.” 物理页 12 亦称“Declining food and energy prices shifted headline inflation into negative territory in July and October-November.”

**日本的风险/数据理由**：物理页 21 指出通胀已持续高于目标、通胀预期上升、2023 年基础工资增幅为 1995 年以来最高、劳动力短缺加剧，且实际利率远低于估计的中性利率——故应渐进、依赖数据地向中性立场过渡（物理页 54 亦提及高债务下利率上升的财政风险）。

# 四、为何这些玩具计算不能识别最优政策利率、也不能把历史CPI当作观测到的预期

1. **Okun/Fisher 均为恒等式式情景算术**：β=0.4、正常增长率、+1.25pp 冲击、+1.50pp 通胀冲击、4.75% 名义回报都是外生假设，不是估计系数，也不含反馈、滞后、汇率与金融条件渠道；无法给出福利或损失函数，因而不能求“最优”政策利率。
2. **Fisher 用的是假设的 π^e**：把 2023 年已实现的年均 CPI 当作未来一年预期通胀，混淆了 ex post 与 ex ante；真实预期不可观测，需调查或市场盈亏平衡通胀数据，历史 CPI 不能替代。
3. **单一方程、无一般均衡**：未纳入产出缺口、菲利普斯曲线、中性利率估计的不确定性（日本报告称中性利率估计区间为 1–2%），故不能据此判断政策立场是否最优。
4. **数据性质**：WDI 的失业率为 ILO 模型估计、CPI 为年均值，均非实时政策变量；报告建议是定性判断，不能被这些情景数值“验证”。

```json
{"results":{"CHN_normal_growth_pct":5.1054,"CHN_base_u_pct":4.5458,"CHN_stress_u_pct":5.0458,"CHN_stress_minus_base_u_pp":0.5000,"CHN_base_real_pct":4.5046,"CHN_stress_real_pct":2.9640,"CHN_stress_minus_base_real_pp":-1.5406,"JPN_normal_growth_pct":0.2050,"JPN_base_u_pct":2.3937,"JPN_stress_u_pct":2.8937,"JPN_stress_minus_base_u_pp":0.5000,"JPN_base_real_pct":1.4349,"JPN_stress_real_pct":-0.0173,"JPN_stress_minus_base_real_pp":-1.4522}}
```