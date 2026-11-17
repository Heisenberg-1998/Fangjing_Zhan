# v2：40道题

## TEST-01 三国跨年费雪收益与近似误差

中、美、日各有期初100的账户，2021–2023每年名义收益率均为4.75%，全部再投资。检索三国三年CPI，逐年按精确费雪关系计算期末实际财富及实际CAGR；再按每年“名义利率减通胀”近似复利，比较累计收益误差。最后依据日本2024年Article IV解释加息节奏和理由，说明假设账户收益率不等于央行政策利率。

英文执行题面：

Using WDI, For China (CHN), the United States (USA), and Japan (JPN), retrieve CPI inflation for 2021-2023 from WDI. Each account starts with nominal wealth 100 at end-2020 and earns a hypothetical nominal 4.75% each year, reinvested, through end-2023. Use annual-average CPI changes as the explicitly stipulated price-index deflator for this annual-average purchasing-power exercise, not an actual end-December deposit return. For each country compute exact Fisher compounded terminal real wealth, exact 3-year real CAGR percent, approximate terminal wealth obtained by compounding (4.75 minus each annual CPI) percent, and approximate minus exact cumulative real return in percentage points. Keys C_exact_terminal,C_exact_cagr_pct,C_approx_terminal,C_approx_minus_exact_pp. Then, according to Japan 2024 Article IV report, explain the recommended pace and conditionality of further short-term rate hikes and its stated reason. Explain why the assumed deposit return is not the BoJ policy rate.
Use the project's frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

## TEST-02 三国奥肯递推与真实失业率残差

检索三国2019–2023年GDP增速及2019、2023年失业率，以各国2019年GDP增速作为固定正常增速，β=0.35，从2019年实际失业率逐年递推2020–2023情景失业率，报告每年路径及2023年预测减实际残差。结合美国2023年报告解释需求、劳动力市场和工资对通胀的描述，说明残差不能识别因果。

英文执行题面：

Using WDI, For China (CHN), the United States (USA), and Japan (JPN), retrieve real GDP growth 2019-2023 and ILO unemployment 2019 and 2023 from WDI. Set each country normal growth equal to its own observed 2019 real GDP growth (a fixed scenario benchmark, not an estimated potential growth rate). Starting at observed 2019 unemployment, recursively apply delta_u[t]=-0.35*(GDP_growth[t]-normal_growth) for 2020,2021,2022,2023; carry the previous modeled unemployment forward, do not reset it to actual each year. Give all four modeled unemployment rates and 2023 modeled-minus-actual residual. Keys C_normal_growth_pct,C_u_2020_pct,C_u_2021_pct,C_u_2022_pct,C_u_2023_pct,C_actual_u_2023_pct,C_pred_minus_actual_pp. Then, according to United States 2023 Article IV report, explain how demand and labor-market strength relate to persistent inflation, and identify which service-price category nominal wage increases feed into. Explain why the assumed beta, normal growth and residual do not establish causality or validate this as a forecast.
Use the project's frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

## TEST-03 索洛30年路径、历史增长基准与政策边界

先复利计算三国2019–2023年实际GDP累计增长，作为三个历史数值基准。再用共同假设α=0.35、n=0.005、g=0.015、δ=0.06、k0=1，对s=0.23/0.28分别进行30步年度欧拉迭代，报告资本、有效劳动人均产出、增长率、稳态及高储蓄方案增益，比较是否超过三国历史基准。结合2024年中国报告解释为何不能据此直接建议提高家庭储蓄。

英文执行题面：

Using WDI, For China (CHN), the United States (USA), and Japan (JPN), calculate cumulative real GDP growth over 2019-2023 by compounding all five annual WDI GDP growth rates from an end-2018 index of 100. Separately run a common hypothetical continuous-time Solow model y=k^alpha with alpha=0.35,n=0.005,g=0.015,delta=0.06,k0=1. Compare s=0.23 and s=0.28, using exactly 30 annual Euler steps k[t+1]=k[t]+s*k[t]^alpha-(n+g+delta)*k[t]. For each scenario give k30,y30,percent growth of effective-worker y from y0=1, analytical k_star,y_star, plus high-versus-low y30 gain percent and long-run output-per-worker growth percent. Compare each modeled y growth number against each of the three historical GDP cumulative-growth numbers as numerical benchmarks only; these are different horizons and concepts, not empirical model fit or country forecasts. Keys C_historical_cumulative_pct,low_k_30,low_y_30,low_y_growth_pct,low_k_star,low_y_star,high_k_30,high_y_30,high_y_growth_pct,high_k_star,high_y_star,high_vs_low_y30_pct,long_run_worker_growth_pct. Then, according to China 2024 Article IV report, describe the recommended budget-neutral expenditure reorientation and the social-safety-net/precautionary-saving mechanism. Explain why a higher aggregate investment-saving parameter in this toy model does not justify recommending higher Chinese household precautionary saving, or permanently faster per-worker growth.
Use the project's frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

## TEST-04 反求五年保值增值收益率与近似偏差

检索三国2019–2023年CPI，期初100、五年后实际财富目标110，反求各国每年相同且再投资的名义收益率。比较“算术平均通胀+目标实际CAGR”的朴素近似误差，并计算固定4.75%名义收益率的实际期末财富。根据日本2023年报告区分进口商品价格、日元贬值的滞后影响与通胀预期。

英文执行题面：

Using WDI, For China (CHN), the United States (USA), and Japan (JPN), retrieve annual-average CPI inflation 2019-2023. Use these as stipulated annual-average price-index deflators, not literal end-December deposit inflation. An account starts at 100 at end-2018. Solve for the constant annual nominal reinvested return i which makes terminal real wealth exactly 110 after all five inflation years: (1+i/100)^5 / product(1+pi_t/100) = 1.10. Also compute a naive nominal rate = arithmetic mean of the five inflation rates + 100*(1.10^(1/5)-1), the naive-minus-exact rate difference in percentage points, and terminal real wealth if nominal return is instead 4.75% in all five years. Keys C_required_nominal_pct,C_naive_nominal_pct,C_naive_minus_required_pp,C_fixed475_terminal_real. Then, according to Japan 2023 Article IV report, identify the two external factors and their lagged effects behind elevated headline inflation. Explain why realized annual-average CPI is not an observed expected-inflation series and these required returns are hindsight break-even scenarios, not investable promises or ex-ante interest estimates.
Use the project's frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

## TEST-05 中日联合压力情景与货币政策证据

检索中日2019–2023年GDP增速、2023年CPI和失业率。以五年平均GDP增速为正常增速，β=0.4，分别计算基准及GDP增长再降1.25个百分点的下一年失业率。假设下一年预期通胀等于2023年CPI、名义收益率4.75%，压力情景通胀再升1.5个百分点，计算精确费雪实际收益及两情景差异。根据两国2024年报告比较中国宽松与日本渐进加息建议及各自理由。

英文执行题面：

Using WDI, For China (CHN) and Japan (JPN), retrieve GDP growth 2019-2023 plus 2023 CPI inflation and ILO unemployment from WDI. Set normal growth to each country arithmetic mean GDP growth 2019-2023; beta=0.4. Both next-year scenarios start at the same observed 2023 unemployment. Baseline next-year GDP growth equals observed 2023 growth; stress growth equals that minus 1.25 percentage points. Apply Okun once for each; report baseline/stress unemployment and stress-minus-base difference. Separately, ASSUME baseline expected inflation for that next annual horizon equals observed 2023 annual-average CPI and stress expected inflation equals that plus 1.50 percentage points. The nominal account return is 4.75% in both. Compute exact Fisher baseline/stress real returns and stress-minus-base difference. Keys C_normal_growth_pct,C_base_u_pct,C_stress_u_pct,C_stress_minus_base_u_pp,C_base_real_pct,C_stress_real_pct,C_stress_minus_base_real_pp. Then, according to China 2024 Article IV report and Japan 2024 Article IV report, compare the additional interest-rate easing recommendation for China against gradual data-dependent hikes for Japan; state the reported energy/food reason for falling Chinese inflation and Japan risk/data reason. Explain why these toy stress calculations cannot identify an optimal policy rate or turn historical CPI into observed expectations.
Use the project's frozen World Bank WDI snapshot for observations; do not replace it with remembered or IMF numbers. GDP means annual real GDP growth NY.GDP.MKTP.KD.ZG; CPI means annual-average inflation FP.CPI.TOTL.ZG; unemployment means ILO modeled SL.UEM.TOTL.ZS. All assumed parameters below are teaching scenarios, not estimated country coefficients. Preserve full source precision in intermediate calculations; round final numbers to 4 decimals, use percentage points for rate differences. Show equations, source inputs, units, and distinguish assumptions, observations and forecasts. Cite WDI indicator/year and IMF document with physical PDF page; give short supporting quotations for report claims. If a source is unavailable, disclose that rather than invent it. Answer in Chinese. End with a JSON object {"results":{...}} whose flat named numeric keys follow the instructions; replace C in key patterns by each requested ISO country code. Missing numbers may be null. Do not claim to have used unavailable tools.

## TEST-06 

中国2022年的ILO模型估计失业率是多少？不要替换为城镇调查失业率。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

What was China's modeled ILO unemployment rate in 2022? Do not substitute the surveyed urban unemployment rate.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-07 

分别报告中国2021年的实际GDP年增长率和全年平均CPI通胀率，并对应各自的指标代码。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Report China's annual real GDP growth and annual-average CPI inflation in 2021, with the indicator code for each.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-08 

分别报告日本2020年的实际GDP年增长率和ILO模型估计失业率，并解释两项百分比各表示什么。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Report Japan's annual real GDP growth and modeled ILO unemployment rate in 2020. Explain what each percentage measures.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-09 

分别报告美国2023年的实际GDP年增长率和ILO模型估计失业率，明确各自单位。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Report annual real GDP growth and modeled ILO unemployment in the United States in 2023, identifying each unit.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-10 

按年份列出中国2019—2023年全年平均CPI通胀率，形成五行表格。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Provide a five-row table of China's annual-average CPI inflation for 2019–2023, ordered by year.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-11 

美国和日本2022年哪个国家的ILO模型估计失业率更高？报告两国数值。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Which had higher modeled ILO unemployment in 2022, the United States or Japan? Report both values.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-12 

中国2019年和2022年哪一年的实际GDP年增长率更高？报告两年数值。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Was China's annual real GDP growth higher in 2019 or 2022? Report both values.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-13 

2020年美国和中国哪个国家的全年平均CPI通胀率更高？报告两国数值。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Which had higher annual-average CPI inflation in 2020, the United States or China? Report both values.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-14 

按2021年全年平均CPI通胀率，将美国、中国、日本从高到低排序，并保留负值的符号。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Rank the United States, China and Japan by annual-average CPI inflation in 2021, highest to lowest. Preserve negative signs.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-15 

列出美国2019—2023年的实际GDP年增长率，找出最高和最低的年份与数值；不要把增长率最高说成GDP总量最高。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

List annual real GDP growth in the United States for 2019–2023 and identify the years and values of the maximum and minimum. Do not equate the highest growth rate with the largest GDP level.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-16 

逐年比较2021、2022、2023年美国和中国的ILO模型估计失业率。报告六个数值，并说明三年中哪国更高的结论是否改变。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Compare modeled ILO unemployment in the United States and China separately for 2021, 2022 and 2023. Report all six values and state whether the country with the higher rate changes.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-17 

按2020年实际GDP年增长率将美国、中国、日本从高到低排序，并分别判断增长或收缩。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Rank the United States, China and Japan by annual real GDP growth in 2020, highest to lowest, and classify each as expansion or contraction.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-18 

分别按2023年全年平均CPI通胀率和ILO模型估计失业率，对美国、中国、日本从高到低排序；两个排序是否相同？报告六个数值。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Rank the United States, China and Japan from highest to lowest separately for 2023 annual-average CPI inflation and modeled ILO unemployment. Report all six values. Are the two rankings the same?
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-19 

对中国和日本分别比较2019与2023年的实际GDP年增长率及ILO模型估计失业率。列出八个数值，逐国判断是否同时满足“2023年增速更高且失业率更低”。不把该判断扩大为整体福利结论。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

For China and Japan, compare annual real GDP growth and modeled ILO unemployment in 2019 versus 2023. Report all eight values. For each country, determine whether 2023 has both higher growth and lower unemployment. Do not generalize this test into an overall welfare judgment.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-20 

分别按2020年和2023年全年平均CPI通胀率，对美国、中国、日本从高到低排序（第1名最高）。报告六个数值，指出每个国家的名次上升、下降或不变以及移动几位；名次变化不等于通胀绝对值变化。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Rank the United States, China and Japan by annual-average CPI inflation separately in 2020 and 2023 (rank 1 is highest). Report all six values and describe each country's rank change and number of places moved. Distinguish a ranking change from a change in the inflation rate itself.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-21 GDP恢复路径与去除2021年反弹

GDP恢复路径与去除2021年反弹（完整任务及输出字段见英文原题）

英文执行题面：

Use ONLY the frozen World Bank WDI snapshot for China (CHN), the United States (USA), and Japan (JPN). Use annual real GDP growth (NY.GDP.MKTP.KD.ZG) in 2020–2023. Set end-2019 index=100. For each country calculate four end-year indices, cumulative growth percent and four-year CAGR percent. Set ONLY 2021 growth to 0%; report counterfactual end-2023 index and counterfactual minus actual in index points. Rank by actual cumulative growth; report first minus second gap in percentage points.
Use unrounded original inputs throughout. Round only final numeric results to FOUR decimal places. Report formulas and locatable source/indicator/year/unit information. Counterfactuals and synthetic baskets are mechanical arithmetic, not causal estimates. End your answer with a valid JSON object with exactly two fields: "results" (an object containing ALL numeric keys listed below) and "ranking" (country codes in descending order of the requested ranking metric). Values in results must be JSON numbers, not strings. Do not repeat the JSON. Numeric keys: ["CHN_index_2020", "CHN_index_2021", "CHN_index_2022", "CHN_index_2023", "CHN_cumulative_pct", "CHN_cagr_pct", "CHN_cf_index_2023", "CHN_cf_minus_actual_points", "USA_index_2020", "USA_index_2021", "USA_index_2022", "USA_index_2023", "USA_cumulative_pct", "USA_cagr_pct", "USA_cf_index_2023", "USA_cf_minus_actual_points", "JPN_index_2020", "JPN_index_2021", "JPN_index_2022", "JPN_index_2023", "JPN_cumulative_pct", "JPN_cagr_pct", "JPN_cf_index_2023", "JPN_cf_minus_actual_points", "first_minus_second_pp"].

## TEST-22 五年价格指数与2022零通胀情景

五年价格指数与2022零通胀情景（完整任务及输出字段见英文原题）

英文执行题面：

Use ONLY the frozen World Bank WDI snapshot for China (CHN), the United States (USA), and Japan (JPN). Use annual-average CPI inflation (FP.CPI.TOTL.ZG) in 2019–2023. Set the 2018 annual-average price index=100 and chain the annual inflation rates multiplicatively. Calculate all five annual price indices, cumulative inflation percent, and annualized inflation percent for each country. Replace ONLY 2022 inflation with 0%; calculate counterfactual 2023 price index and counterfactual minus actual in index points. Rank by cumulative inflation and report first minus second percentage-point gap. These annual-average indices are not December/December CPI or PCE.
Use unrounded original inputs throughout. Round only final numeric results to FOUR decimal places. Report formulas and locatable source/indicator/year/unit information. Counterfactuals and synthetic baskets are mechanical arithmetic, not causal estimates. End your answer with a valid JSON object with exactly two fields: "results" (an object containing ALL numeric keys listed below) and "ranking" (country codes in descending order of the requested ranking metric). Values in results must be JSON numbers, not strings. Do not repeat the JSON. Numeric keys: ["CHN_price_index_2019", "CHN_price_index_2020", "CHN_price_index_2021", "CHN_price_index_2022", "CHN_price_index_2023", "CHN_cumulative_inflation_pct", "CHN_annualized_inflation_pct", "CHN_cf_price_index_2023", "CHN_cf_minus_actual_points", "USA_price_index_2019", "USA_price_index_2020", "USA_price_index_2021", "USA_price_index_2022", "USA_price_index_2023", "USA_cumulative_inflation_pct", "USA_annualized_inflation_pct", "USA_cf_price_index_2023", "USA_cf_minus_actual_points", "JPN_price_index_2019", "JPN_price_index_2020", "JPN_price_index_2021", "JPN_price_index_2022", "JPN_price_index_2023", "JPN_cumulative_inflation_pct", "JPN_annualized_inflation_pct", "JPN_cf_price_index_2023", "JPN_cf_minus_actual_points", "first_minus_second_pp"].

## TEST-23 实际通胀与每年2%的机械基准

实际通胀与每年2%的机械基准（完整任务及输出字段见英文原题）

英文执行题面：

Use ONLY the frozen World Bank WDI snapshot for China (CHN), the United States (USA), and Japan (JPN). Use annual-average CPI inflation (FP.CPI.TOTL.ZG) in 2021–2023. Set 2020 annual-average price index=100. Compute three annual price indices, cumulative inflation and annualized inflation for each country. Independently chain a hypothetical constant 2% inflation per year over the same three years; give its end-2023 index. For each country report actual minus benchmark end-2023 index points and cumulative-inflation percentage-point gap. Rank by actual minus benchmark index gap. The 2% path is an illustrative arithmetic benchmark, NOT a claim about any central bank CPI target; distinguish annual-average CPI from PCE.
Use unrounded original inputs throughout. Round only final numeric results to FOUR decimal places. Report formulas and locatable source/indicator/year/unit information. Counterfactuals and synthetic baskets are mechanical arithmetic, not causal estimates. End your answer with a valid JSON object with exactly two fields: "results" (an object containing ALL numeric keys listed below) and "ranking" (country codes in descending order of the requested ranking metric). Values in results must be JSON numbers, not strings. Do not repeat the JSON. Numeric keys: ["CHN_price_index_2021", "CHN_price_index_2022", "CHN_price_index_2023", "CHN_cumulative_inflation_pct", "CHN_annualized_inflation_pct", "CHN_actual_minus_target_points", "CHN_actual_minus_target_cumulative_pp", "USA_price_index_2021", "USA_price_index_2022", "USA_price_index_2023", "USA_cumulative_inflation_pct", "USA_annualized_inflation_pct", "USA_actual_minus_target_points", "USA_actual_minus_target_cumulative_pp", "JPN_price_index_2021", "JPN_price_index_2022", "JPN_price_index_2023", "JPN_cumulative_inflation_pct", "JPN_annualized_inflation_pct", "JPN_actual_minus_target_points", "JPN_actual_minus_target_cumulative_pp", "constant_2pct_price_index_2023"].

## TEST-24 算术均值、CAGR与相加近似误差

算术均值、CAGR与相加近似误差（完整任务及输出字段见英文原题）

英文执行题面：

Use ONLY the frozen World Bank WDI snapshot for China (CHN), the United States (USA), and Japan (JPN). Use annual real GDP growth (NY.GDP.MKTP.KD.ZG) in 2019–2023. For each country calculate arithmetic mean annual growth, five-year CAGR, compounded cumulative growth from end-2018 to end-2023, naive sum of the five annual rates, sum minus actual compounded cumulative growth (percentage points), and arithmetic mean minus CAGR (percentage points). Explain why arithmetic mean is not CAGR and why annual growth rates cannot simply be added to obtain cumulative growth. Rank by CAGR.
Use unrounded original inputs throughout. Round only final numeric results to FOUR decimal places. Report formulas and locatable source/indicator/year/unit information. Counterfactuals and synthetic baskets are mechanical arithmetic, not causal estimates. End your answer with a valid JSON object with exactly two fields: "results" (an object containing ALL numeric keys listed below) and "ranking" (country codes in descending order of the requested ranking metric). Values in results must be JSON numbers, not strings. Do not repeat the JSON. Numeric keys: ["CHN_arithmetic_mean_pct", "CHN_cagr_pct", "CHN_cumulative_pct", "CHN_naive_sum_pct", "CHN_sum_minus_compound_pp", "CHN_mean_minus_cagr_pp", "USA_arithmetic_mean_pct", "USA_cagr_pct", "USA_cumulative_pct", "USA_naive_sum_pct", "USA_sum_minus_compound_pp", "USA_mean_minus_cagr_pp", "JPN_arithmetic_mean_pct", "JPN_cagr_pct", "JPN_cumulative_pct", "JPN_naive_sum_pct", "JPN_sum_minus_compound_pp", "JPN_mean_minus_cagr_pp"].

## TEST-25 逐年等权增长篮子与固定初始权重路径

逐年等权增长篮子与固定初始权重路径（完整任务及输出字段见英文原题）

英文执行题面：

Use ONLY the frozen World Bank WDI snapshot for China (CHN), the United States (USA), and Japan (JPN). Use annual real GDP growth (NY.GDP.MKTP.KD.ZG) in 2019–2023. Construct a SYNTHETIC annually equal-weighted basket: each year its growth rate is the simple mean of the three countries annual growth rates. Set end-2018 basket index=100. Calculate five annual basket growth rates, five basket year-end indices, cumulative growth and CAGR. Separately start each country index at 100 at end-2018, compound its own growth rates, and report the three terminal country indices. The fixed-initial-equal-weight mix terminal index is the mean of these three terminal indices; calculate it and annually-equal-weight basket minus fixed-initial-mix in index points. Rank countries by terminal country index. These artificial normalized baskets are NOT world GDP growth or economically weighted national-account aggregates.
Use unrounded original inputs throughout. Round only final numeric results to FOUR decimal places. Report formulas and locatable source/indicator/year/unit information. Counterfactuals and synthetic baskets are mechanical arithmetic, not causal estimates. End your answer with a valid JSON object with exactly two fields: "results" (an object containing ALL numeric keys listed below) and "ranking" (country codes in descending order of the requested ranking metric). Values in results must be JSON numbers, not strings. Do not repeat the JSON. Numeric keys: ["basket_mean_growth_2019_pct", "basket_index_2019", "basket_mean_growth_2020_pct", "basket_index_2020", "basket_mean_growth_2021_pct", "basket_index_2021", "basket_mean_growth_2022_pct", "basket_index_2022", "basket_mean_growth_2023_pct", "basket_index_2023", "CHN_terminal_index_2023", "USA_terminal_index_2023", "JPN_terminal_index_2023", "basket_cumulative_pct", "basket_cagr_pct", "fixed_initial_mix_index_2023", "basket_minus_fixed_initial_mix_points"].

## TEST-26 

计算美国2021—2023年ILO模型估计失业率的简单平均值，再计算2023年失业率减该均值的百分点差，说明2023年高于还是低于均值。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Calculate the simple mean of modeled ILO unemployment in the United States for 2021–2023. Then calculate the 2023 rate minus that mean in percentage points and say whether 2023 is above or below it.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-27 

列出中国2019—2023年ILO模型估计失业率，识别最高和最低年份，并计算最高值减最低值的极差（百分点）。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

List China's modeled ILO unemployment rates for 2019–2023, identify the maximum and minimum years, and calculate the range as maximum minus minimum in percentage points.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-28 

分别计算美国和日本全年平均CPI通胀率从2019到2023年的变化（末年减首年），再计算“美国变化减日本变化”。报告三个百分点结果并说明哪国增幅更大；不要把变化之差解释为政策因果效应。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Calculate the 2019-to-2023 change in annual-average CPI inflation for the United States and Japan (last minus first), then subtract Japan's change from the U.S. change. Report all three percentage-point results and identify the larger increase. Do not interpret the difference in changes as a causal policy effect.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-29 

分别计算美国和日本2020—2022年实际GDP年增长率的简单平均值，再计算美国均值减日本均值，判断哪国平均增速更高。列出六个输入及三个计算结果。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Compute the simple mean of annual real GDP growth over 2020–2022 separately for the United States and Japan. Subtract Japan's mean from the U.S. mean and identify the higher mean growth rate. Show six inputs and three calculated results.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-30 

分别计算中国和日本2019—2021年ILO模型估计失业率的简单均值，求中国均值减日本均值；另求2023年中国失业率减日本失业率。比较这两个差距谁更大，列出八个原值及四个计算结果，不必再求差距之差。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。

英文执行题面：

Calculate mean modeled ILO unemployment for China and Japan separately over 2019–2021 and subtract Japan's mean from China's. Also calculate China's 2023 rate minus Japan's 2023 rate. Compare the two gaps. Show eight inputs and four calculated results; a difference between the gaps is not required.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.

## TEST-31 

根据日本2024年Article IV报告，IMF建议后续短期政策利率上调采取什么节奏？指出报告给出的一个理由。无需数值。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

According to Japan's 2024 Article IV report, what pace does the IMF recommend for further increases in the short-term policy rate? Give one stated reason. No numerical values are required.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.

## TEST-32 

根据美国2023年Article IV报告，在政策收紧背景下，什么因素先后支撑消费需求？分别说明“最初”和“更近期”的因素，不将其换成2024年报告的通胀回落解释。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

According to the 2023 United States Article IV report, what supported consumer demand despite policy tightening? Distinguish the factor operating initially from the more recent factor, rather than substituting the 2024 report's disinflation explanation.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.

## TEST-33 

根据2023年出版的中国2022年Article IV报告，IMF对房地产金融压力提出哪两项相互配合的近期处理方向？再指出其对房地产部门中期规模的建议。无需数值。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

According to China's 2022 Article IV report published in 2023, identify two complementary near-term directions for addressing property-sector financial stress, and state the recommendation about the sector's medium-term size. No numerical values are required.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.

## TEST-34 

根据日本2023年Article IV报告，报告将2022年总体通胀上升主要联系到哪两个外部因素？说明其中涉及的滞后影响，不把这些因素当作2024年报告中的需求因素。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

According to Japan's 2023 Article IV report, which two external factors were associated with the rise in headline inflation in 2022? Explain the lagged effects mentioned, without substituting demand factors from the 2024 report.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.

## TEST-35 

比较2024年出版的中国Article IV报告与美国2024年Article IV报告对财政政策的建议：中国如何调整支出结构并减少家庭预防性储蓄？美国为何需要财政调整，且应如何照顾贫困群体？分别给出两国证据，避免把预算中性重配与总量紧缩混同。无需数值。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

Compare fiscal recommendations in China's Article IV report published in 2024 and the 2024 United States Article IV report. How should China reorient spending and reduce household precautionary saving? Why does the United States need fiscal adjustment, and how should poor households be supported? Cite each report and distinguish budget-neutral reallocation from aggregate consolidation. No numerical values are required.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.

## TEST-36 

先报告中国2022年WDI实际GDP年增长率；再依据2023年出版的中国2022年Article IV报告，列出当时压制增长的两个因素。报告中的当时估计不得替代WDI数值，定性因素不构成对该增速的定量分解。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

Report China's 2022 annual real GDP growth from WDI. Then, using China's 2022 Article IV report published in 2023, identify two factors that were weighing on growth. Do not substitute the report's contemporaneous estimate for WDI, or treat the qualitative factors as a quantitative decomposition of the rate.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.

## TEST-37 

报告美国2022年的WDI ILO模型估计失业率；再根据美国2023年Article IV报告，解释报告如何联系强劲需求、劳动力市场表现与持续通胀，并指出名义工资上涨传导到哪类服务价格。不要把失业率与通胀的相关性写成已识别因果关系。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

Report the U.S. modeled ILO unemployment rate in 2022 from WDI. Then use the 2023 United States Article IV report to explain how it links strong demand and labor-market outcomes to persistent inflation, identifying the category of service prices affected by nominal wage increases. Do not infer identified causality from unemployment and inflation alone.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.

## TEST-38 

报告日本2022年的WDI实际GDP年增长率；根据日本2023年Article IV报告，指出带动该年复苏的主要国内需求组成和一个也出现反弹的国内需求组成。区分报告当时数值与固定WDI快照。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

Report Japan's 2022 annual real GDP growth from WDI. According to Japan's 2023 Article IV report, identify the domestic-demand component that led the recovery and another domestic-demand component that rebounded. Distinguish the report's contemporaneous numbers from the frozen WDI snapshot.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.

## TEST-39 

分别报告中国和日本2023年的WDI全年平均CPI通胀率。结合两国2024年出版的Article IV报告，说明中国2023年通胀下降的两个价格因素，并对比中国的货币政策建议与日本进一步加息的节奏及理由。分别引用证据；不能仅凭两个通胀读数推导政策建议。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

Report China's and Japan's 2023 annual-average CPI inflation from WDI. Using their Article IV reports published in 2024, identify two price factors behind China's 2023 disinflation and contrast China's monetary-policy recommendation with the pace and rationale for further rate increases in Japan. Cite evidence separately; do not derive the policy recommendations from the two inflation readings alone.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.

## TEST-40 

计算美国2021—2023年WDI全年平均CPI通胀率的简单均值，以及2023减2020年的ILO模型估计失业率变化（百分点）。再依据美国2024年Article IV报告，判断这两项统计是否足以支持“美联储应立即降息”，说明报告的降息条件，并指出报告讨论的通胀目标口径与本题年度CPI统计的区别。
数值统一采用本项目固定的世界银行 WDI 2019–2023 快照；CPI 指全年平均涨幅，GDP 指实际年增长率，失业率采用 ILO 模型估计。报告所用原值及结果至两位小数，注明单位、指标代码和来源；计算使用未舍入原值，差值使用百分点，简单平均不代表人口或 GDP 加权平均。
报告判断须注明对应文档名及 PDF 物理页码或可定位段落；接受有实际支持的等价证据。区分已观察事实、预测与政策建议，不将定性讨论写成已识别的因果效应。

英文执行题面：

Calculate the simple mean of U.S. WDI annual-average CPI inflation over 2021–2023, and the change in modeled ILO unemployment as 2023 minus 2020 in percentage points. Using the 2024 United States Article IV report, assess whether these two statistics alone justify an immediate Federal Reserve rate cut. State the report's condition for cutting rates and distinguish its inflation-target discussion from the annual CPI statistic calculated here.
Use the project's frozen World Bank WDI 2019–2023 snapshot for numerical observations. CPI means annual-average inflation; GDP growth means annual real growth; unemployment means the modeled ILO estimate. Report required inputs and results to two decimal places, with units, indicator codes and sources. Calculate using unrounded inputs; express differences in percentage points. Simple means are not population- or GDP-weighted aggregates.
For report-based claims, cite the document and physical PDF page or another locatable passage. Equivalent supporting passages are acceptable. Distinguish observations, forecasts and recommendations; do not present qualitative discussion as an identified causal effect.