## Method

**Indicator:** NY.GDP.MKTP.KD.ZG — annual real GDP growth (annual %), not GDP level.
**Years:** 2020–2023. **Base:** end-2019 index = 100.
**Source:** World Bank WDI frozen snapshot, file `macroeconomic_indicators_2019_2023.csv`, SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`; records at CSV lines 8–11 (CHN), 38–41 (USA), 23–26 (JPN). API: `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023&format=json&per_page=1000`.

**Formulas:**
- Index_t = 100 × Π_{s=2020..t} (1 + g_s/100)
- Cumulative % = Index_2023 − 100
- CAGR % = [(Index_2023/100)^(1/4) − 1] × 100
- Counterfactual: same chain with g_2021 set to 0; CF − actual = CF_index_2023 − actual_index_2023 (index points)

**Inputs (unrounded, annual %):**

| Year | CHN | USA | JPN |
|---|---|---|---|
| 2020 | 2.33950385203023 | −2.081375977796 | −4.28327942675573 |
| 2021 | 8.57038414981781 | 6.15202247867526 | 3.56419531474475 |
| 2022 | 3.13385438394069 | 2.52421385073222 | 1.33164750653741 |
| 2023 | 5.41600334492955 | 2.93436322440155 | 0.720785304749811 |

## Results (rounded to 4 dp)

**China:** indices 102.3395, 111.1104, 114.5924, 120.7988; cumulative 20.7988%; CAGR 4.8372%. Counterfactual (2021=0): 111.2631; CF − actual = −9.5357 points.

**United States:** indices 97.9186, 103.9426, 106.5663, 109.6934; cumulative 9.6934%; CAGR 2.3399%. Counterfactual: 103.3361; CF − actual = −6.3573 points.

**Japan:** indices 95.7167, 99.1283, 100.4483, 101.1723; cumulative 1.1723%; CAGR 0.2918%. Counterfactual: 97.6904; CF − actual = −3.4819 points.

**Ranking by actual cumulative growth:** CHN (20.7988%) > USA (9.6934%) > JPN (1.1723%). First minus second gap = 20.7988 − 9.6934 = **11.1054 pp**.

*Note: counterfactuals are mechanical arithmetic, not causal estimates.*

```json
{"results":{"CHN_index_2020":102.3395,"CHN_index_2021":111.1104,"CHN_index_2022":114.5924,"CHN_index_2023":120.7988,"CHN_cumulative_pct":20.7988,"CHN_cagr_pct":4.8372,"CHN_cf_index_2023":111.2631,"CHN_cf_minus_actual_points":-9.5357,"USA_index_2020":97.9186,"USA_index_2021":103.9426,"USA_index_2022":106.5663,"USA_index_2023":109.6934,"USA_cumulative_pct":9.6934,"USA_cagr_pct":2.3399,"USA_cf_index_2023":103.3361,"USA_cf_minus_actual_points":-6.3573,"JPN_index_2020":95.7167,"JPN_index_2021":99.1283,"JPN_index_2022":100.4483,"JPN_index_2023":101.1723,"JPN_cumulative_pct":1.1723,"JPN_cagr_pct":0.2918,"JPN_cf_index_2023":97.6904,"JPN_cf_minus_actual_points":-3.4819,"first_minus_second_pp":11.1054},"ranking":["CHN","USA","JPN"]}
```