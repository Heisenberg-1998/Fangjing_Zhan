# 新增经济模型5题：四组结果

A/B/D本轮补跑，C沿用20261114T222801Z相同题目和配置结果。每组每题一次，AI初审。以下主表为指定数值任务通过，不等同于全部文字无错误。

|组别|执行完成|数值任务全对|指定数值正确|工具调用|Evidence recall|
|---|---:|---:|---:|---:|---|
|A|5/5|5/5|23/23|0|N/A（无需外部证据）|
|B|5/5|4/5|21/23|0|N/A（无需外部证据）|
|C|5/5|5/5|23/23|11|N/A（无需外部证据）|
|D|5/5|5/5|23/23|11|N/A（无需外部证据）|

## 解读

- B第2题Solow过渡计算错误：第5期k=1.5131、y=1.2301，参考为1.6150、1.2708。
- A/B的工具不可用，题面统一的use model tools要求不作为内容错误；工具是否实际调用按日志单列。
- C第4题数值全对，但附加误差推导先错后纠正，需复核；因此不把数值5/5称为全部解释都通过。其他额外表述仍需独立审核。
- 所有题目参数已给定，未要求查报告或WDI，所需外部证据分母为0；故recall=N/A，不是0%或100%。本题集不能衡量RAG增益，也不能用一次B失误推断RAG有害。
- 这一轮没有替换或合并到原40题，旧A/B/C/D成绩保持原样。

## 题目

### MODEL-01 索洛：提高储蓄率与长期增长

Use the continuous-time Solow model y=k^alpha. alpha=0.5, n=0.01, g=0.02, delta=0.05, k0=1. Compare savings s=0.20 and s=0.30. Report both analytical steady-state k and y per effective worker, percentage increase in steady-state y, and long-run output per worker growth percent in each scenario. Explain whether higher savings permanently raises that growth rate. Return JSON results with keys k_low,y_low,k_high,y_high,y_increase_pct,growth_low_pct,growth_high_pct. All parameters are hypothetical user assumptions; do not retrieve WDI or invent country estimates. Use the model tools. Answer in Chinese, show formulas and units, round final results to 4 decimals. End with {"results":{...}} using the named keys.

### MODEL-02 索洛：资本过渡路径与数值口径

Use the continuous-time Solow model y=k^alpha with alpha=0.5, s=0.20, n=0.01, g=0.02, delta=0.05 and k0=1. Calculate the annual Euler transition k[t+1]=k[t]+s*k[t]^alpha-(n+g+delta)*k[t] for 5 steps. Report k and y at years 1 and 5, plus analytical k_star,y_star. Distinguish per effective worker from per worker, explain why this is an approximation rather than a calibrated country forecast. Return JSON results with keys k_1,y_1,k_5,y_5,k_star,y_star. All parameters are hypothetical user assumptions; do not retrieve WDI or invent country estimates. Use the model tools. Answer in Chinese, show formulas and units, round final results to 4 decimals. End with {"results":{...}} using the named keys.

### MODEL-03 奥肯：衰退及复苏情景

Use the conditional Okun relationship delta u=-beta*(growth-normal growth). Starting unemployment=4%, normal GDP growth=2%, beta=0.4. Compute unemployment change in percentage points and new unemployment for scenario A growth=-1%, and separately scenario B growth=3.5%, both from the same initial 4%. Explain this is a user-parameter scenario, not a fitted coefficient or identified causal effect. Return JSON results with keys delta_a_pp,u_a_pct,delta_b_pp,u_b_pct. All parameters are hypothetical user assumptions; do not retrieve WDI or invent country estimates. Use the model tools. Answer in Chinese, show formulas and units, round final results to 4 decimals. End with {"results":{...}} using the named keys.

### MODEL-04 费雪：精确值与近似误差

An annual nominal interest rate is 5% and expected annual inflation is 3%. Use exact Fisher relation, give ex-ante real rate, i-minus-inflation approximation, and approximation minus exact in percentage points. Explain why annual-average historical CPI is not automatically this expected inflation. Return JSON results with keys exact_pct,approx_pct,error_pp. All parameters are hypothetical user assumptions; do not retrieve WDI or invent country estimates. Use the model tools. Answer in Chinese, show formulas and units, round final results to 4 decimals. End with {"results":{...}} using the named keys.

### MODEL-05 费雪：事前与事后实际利率

An annual contract has nominal interest rate 5%; expected inflation was 3%, while realized inflation over the same horizon is 6%. Calculate exact ex-ante and ex-post real interest rates, and ex-post minus ex-ante in percentage points. State whether actual real purchasing-power return is negative; distinguish expected from realized inflation without replacing one with the other. Return JSON results with keys ex_ante_pct,ex_post_pct,difference_pp. All parameters are hypothetical user assumptions; do not retrieve WDI or invent country estimates. Use the model tools. Answer in Chinese, show formulas and units, round final results to 4 decimals. End with {"results":{...}} using the named keys.
