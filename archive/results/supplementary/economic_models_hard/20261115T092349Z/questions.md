# 新增五题：知识库与经济模型综合测试

预先固定题目、独立参考答案和评分规则；原40题不变。所有经济模型参数均为题设假设。
A/B/C/D统一预算：6144输出token/轮、40轮、900秒/题、temperature=0；B/D使用BM25、每国k=5。
数值四位小数，绝对容差0.00005。另查解释、口径、来源引用，严格整题通过需全部满足。
参考答案和evidence gold仅由离线评分读取，不传给agent。

## HMODEL-01 三国跨年费雪收益与近似误差

中、美、日各有期初100的账户，2021–2023每年名义收益率均为4.75%，全部再投资。检索三国三年CPI，逐年按精确费雪关系计算期末实际财富及实际CAGR；再按每年“名义利率减通胀”近似复利，比较累计收益误差。最后依据日本2024年Article IV解释加息节奏和理由，说明假设账户收益率不等于央行政策利率。

英文执行题目（所有组一致）：

For China (CHN), the United States (USA), and Japan (JPN), retrieve CPI inflation for 2021-2023 from WDI. Each account starts with nominal wealth 100 at end-2020 and earns a hypothetical nominal 4.75% each year, reinvested, through end-2023. Use annual-average CPI changes as the explicitly stipulated price-index deflator for this annual-average purchasing-power exercise, not an actual end-December deposit return. For each country compute exact Fisher compounded terminal real wealth, exact 3-year real CAGR percent, approximate terminal wealth obtained by compounding (4.75 minus each annual CPI) percent, and approximate minus exact cumulative real return in percentage points. Keys C_exact_terminal,C_exact_cagr_pct,C_approx_terminal,C_approx_minus_exact_pp. Then, according to Japan 2024 Article IV report, explain the recommended pace and conditionality of further short-term rate hikes and its stated reason. Explain why the assumed deposit return is not the BoJ policy rate. Use only the project frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

解释与证据检查：

- 正确逐年复利；CPI为约定年度平均价格指数口径，不称为实际年末存款回报。
- 日本进一步加息应渐进、依赖数据；理由为通胀风险平衡、近期信号混合；引用可定位。
- 假设名义收益率与央行政策利率不同。

## HMODEL-02 三国奥肯递推与真实失业率残差

检索三国2019–2023年GDP增速及2019、2023年失业率，以各国2019年GDP增速作为固定正常增速，β=0.35，从2019年实际失业率逐年递推2020–2023情景失业率，报告每年路径及2023年预测减实际残差。结合美国2023年报告解释需求、劳动力市场和工资对通胀的描述，说明残差不能识别因果。

英文执行题目（所有组一致）：

For China (CHN), the United States (USA), and Japan (JPN), retrieve real GDP growth 2019-2023 and ILO unemployment 2019 and 2023 from WDI. Set each country normal growth equal to its own observed 2019 real GDP growth (a fixed scenario benchmark, not an estimated potential growth rate). Starting at observed 2019 unemployment, recursively apply delta_u[t]=-0.35*(GDP_growth[t]-normal_growth) for 2020,2021,2022,2023; carry the previous modeled unemployment forward, do not reset it to actual each year. Give all four modeled unemployment rates and 2023 modeled-minus-actual residual. Keys C_normal_growth_pct,C_u_2020_pct,C_u_2021_pct,C_u_2022_pct,C_u_2023_pct,C_actual_u_2023_pct,C_pred_minus_actual_pp. Then, according to United States 2023 Article IV report, explain how demand and labor-market strength relate to persistent inflation, and identify which service-price category nominal wage increases feed into. Explain why the assumed beta, normal growth and residual do not establish causality or validate this as a forecast. Use only the project frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

解释与证据检查：

- 从2019实际值起步逐年递推，不重置；正常增速是假设基准。
- 美国2023报告：需求和劳动力市场强劲关联持续通胀；工资进入非住房服务价格，引用可定位。
- 残差不是因果效应；β非估计值，不宣称预测有效性。

## HMODEL-03 索洛30年路径、历史增长基准与政策边界

先复利计算三国2019–2023年实际GDP累计增长，作为三个历史数值基准。再用共同假设α=0.35、n=0.005、g=0.015、δ=0.06、k0=1，对s=0.23/0.28分别进行30步年度欧拉迭代，报告资本、有效劳动人均产出、增长率、稳态及高储蓄方案增益，比较是否超过三国历史基准。结合2024年中国报告解释为何不能据此直接建议提高家庭储蓄。

英文执行题目（所有组一致）：

For China (CHN), the United States (USA), and Japan (JPN), calculate cumulative real GDP growth over 2019-2023 by compounding all five annual WDI GDP growth rates from an end-2018 index of 100. Separately run a common hypothetical continuous-time Solow model y=k^alpha with alpha=0.35,n=0.005,g=0.015,delta=0.06,k0=1. Compare s=0.23 and s=0.28, using exactly 30 annual Euler steps k[t+1]=k[t]+s*k[t]^alpha-(n+g+delta)*k[t]. For each scenario give k30,y30,percent growth of effective-worker y from y0=1, analytical k_star,y_star, plus high-versus-low y30 gain percent and long-run output-per-worker growth percent. Compare each modeled y growth number against each of the three historical GDP cumulative-growth numbers as numerical benchmarks only; these are different horizons and concepts, not empirical model fit or country forecasts. Keys C_historical_cumulative_pct,low_k_30,low_y_30,low_y_growth_pct,low_k_star,low_y_star,high_k_30,high_y_30,high_y_growth_pct,high_k_star,high_y_star,high_vs_low_y30_pct,long_run_worker_growth_pct. Then, according to China 2024 Article IV report, describe the recommended budget-neutral expenditure reorientation and the social-safety-net/precautionary-saving mechanism. Explain why a higher aggregate investment-saving parameter in this toy model does not justify recommending higher Chinese household precautionary saving, or permanently faster per-worker growth. Use only the project frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

解释与证据检查：

- 30步欧拉，非直接用稳态替代；累计GDP需复利。
- 逐一比较三国基准，说明30年有效劳动人均产出与5年总GDP不可视为拟合。
- 提高s影响水平，不永久提高劳动人均增长率；不可把s等同家庭预防性储蓄。
- 中国2024报告：预算中性转向家庭支出以支持消费，社保降低预防性储蓄；引用可定位。

## HMODEL-04 反求五年保值增值收益率与近似偏差

检索三国2019–2023年CPI，期初100、五年后实际财富目标110，反求各国每年相同且再投资的名义收益率。比较“算术平均通胀+目标实际CAGR”的朴素近似误差，并计算固定4.75%名义收益率的实际期末财富。根据日本2023年报告区分进口商品价格、日元贬值的滞后影响与通胀预期。

英文执行题目（所有组一致）：

For China (CHN), the United States (USA), and Japan (JPN), retrieve annual-average CPI inflation 2019-2023. Use these as stipulated annual-average price-index deflators, not literal end-December deposit inflation. An account starts at 100 at end-2018. Solve for the constant annual nominal reinvested return i which makes terminal real wealth exactly 110 after all five inflation years: (1+i/100)^5 / product(1+pi_t/100) = 1.10. Also compute a naive nominal rate = arithmetic mean of the five inflation rates + 100*(1.10^(1/5)-1), the naive-minus-exact rate difference in percentage points, and terminal real wealth if nominal return is instead 4.75% in all five years. Keys C_required_nominal_pct,C_naive_nominal_pct,C_naive_minus_required_pp,C_fixed475_terminal_real. Then, according to Japan 2023 Article IV report, identify the two external factors and their lagged effects behind elevated headline inflation. Explain why realized annual-average CPI is not an observed expected-inflation series and these required returns are hindsight break-even scenarios, not investable promises or ex-ante interest estimates. Use only the project frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

解释与证据检查：

- 反求五次方根、复利，不能把均值直接当精确通胀。
- 日本2023报告：商品价格上涨、日元贬值及滞后效应，引用可定位。
- 历史CPI不是预期通胀；为事后情景，不是投资承诺或已观测的事前实际利率。

## HMODEL-05 中日联合压力情景与货币政策证据

检索中日2019–2023年GDP增速、2023年CPI和失业率。以五年平均GDP增速为正常增速，β=0.4，分别计算基准及GDP增长再降1.25个百分点的下一年失业率。假设下一年预期通胀等于2023年CPI、名义收益率4.75%，压力情景通胀再升1.5个百分点，计算精确费雪实际收益及两情景差异。根据两国2024年报告比较中国宽松与日本渐进加息建议及各自理由。

英文执行题目（所有组一致）：

For China (CHN) and Japan (JPN), retrieve GDP growth 2019-2023 plus 2023 CPI inflation and ILO unemployment from WDI. Set normal growth to each country arithmetic mean GDP growth 2019-2023; beta=0.4. Both next-year scenarios start at the same observed 2023 unemployment. Baseline next-year GDP growth equals observed 2023 growth; stress growth equals that minus 1.25 percentage points. Apply Okun once for each; report baseline/stress unemployment and stress-minus-base difference. Separately, ASSUME baseline expected inflation for that next annual horizon equals observed 2023 annual-average CPI and stress expected inflation equals that plus 1.50 percentage points. The nominal account return is 4.75% in both. Compute exact Fisher baseline/stress real returns and stress-minus-base difference. Keys C_normal_growth_pct,C_base_u_pct,C_stress_u_pct,C_stress_minus_base_u_pp,C_base_real_pct,C_stress_real_pct,C_stress_minus_base_real_pp. Then, according to China 2024 Article IV report and Japan 2024 Article IV report, compare the additional interest-rate easing recommendation for China against gradual data-dependent hikes for Japan; state the reported energy/food reason for falling Chinese inflation and Japan risk/data reason. Explain why these toy stress calculations cannot identify an optimal policy rate or turn historical CPI into observed expectations. Use only the project frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

解释与证据检查：

- 基准和压力场景从同一2023年失业率出发，不能相继递推。
- 预期通胀映射是明确假设；历史CPI非实际预期；不推断最优政策利率。
- 中国2024：能源食品价格下降压低通胀、通过利率进一步宽松；日本2024：渐进且依赖数据，风险平衡、信号混合；引用可定位。
