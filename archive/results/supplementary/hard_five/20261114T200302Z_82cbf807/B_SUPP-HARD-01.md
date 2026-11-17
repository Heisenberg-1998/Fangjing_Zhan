**Definitions and method**

- Indicator: World Bank WDI `NY.GDP.MKTP.KD.ZG`, annual real GDP growth, unit: annual %.
- Years used: 2020–2023. End-2019 index = 100.
- Index formula: \(I_t = I_{t-1}\times(1+g_t/100)\), with \(I_{2019}=100\).
- Cumulative growth: \(I_{2023}-100\) (percent).
- Four-year CAGR: \(\left[(I_{2023}/100)^{1/4}-1\right]\times100\) (percent).
- Counterfactual: set only 2021 growth to 0%; all other years unchanged. Counterfactual minus actual = \(I^{cf}_{2023}-I_{2023}\) (index points).
- Ranking: descending actual cumulative growth (equivalently descending \(I_{2023}\)).
- All inputs used unrounded; final results rounded to 4 decimals. Counterfactuals are mechanical arithmetic, not causal estimates.

**Source:** World Bank WDI frozen snapshot `macroeconomic_indicators_2019_2023.csv`, SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`; records cited by CSV line: CHN lines 7–11, JPN lines 22–26, USA lines 37–41. API: `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023&format=json&per_page=1000`.

**Inputs (annual %, unrounded):**

| Country | 2020 | 2021 | 2022 | 2023 |
|---|---|---|---|---|
| CHN | 2.33950385203023 | 8.57038414981781 | 3.13385438394069 | 5.41600334492955 |
| USA | -2.081375977796 | 6.15202247867526 | 2.52421385073222 | 2.93436322440155 |
| JPN | -4.28327942675573 | 3.56419531474475 | 1.33164750653741 | 0.720785304749811 |

**Results (rounded to 4 dp):**

- CHN: indices 102.3395, 111.1101, 114.5923, 120.7980; cumulative 20.7980%; CAGR 4.8419%; counterfactual 2023 index 111.2666; cf − actual = −9.5314 points.
- USA: indices 97.9186, 103.9432, 106.5669, 109.6939; cumulative 9.6939%; CAGR 2.3409%; counterfactual 2023 index 103.3374; cf − actual = −6.3565 points.
- JPN: indices 95.7167, 99.1283, 100.4484, 101.1724; cumulative 1.1724%; CAGR 0.2917%; counterfactual 2023 index 95.7167; cf − actual = −5.4557 points.

**Ranking by actual cumulative growth:** CHN > USA > JPN. First minus second (CHN − USA) = 20.7980 − 9.6939 = **11.1041 pp**.

```json
{"results":{"CHN_index_2020":102.3395,"CHN_index_2021":111.1101,"CHN_index_2022":114.5923,"CHN_index_2023":120.798,"CHN_cumulative_pct":20.798,"CHN_cagr_pct":4.8419,"CHN_cf_index_2023":111.2666,"CHN_cf_minus_actual_points":-9.5314,"USA_index_2020":97.9186,"USA_index_2021":103.9432,"USA_index_2022":106.5669,"USA_index_2023":109.6939,"USA_cumulative_pct":9.6939,"USA_cagr_pct":2.3409,"USA_cf_index_2023":103.3374,"USA_cf_minus_actual_points":-6.3565,"JPN_index_2020":95.7167,"JPN_index_2021":99.1283,"JPN_index_2022":100.4484,"JPN_index_2023":101.1724,"JPN_cumulative_pct":1.1724,"JPN_cagr_pct":0.2917,"JPN_cf_index_2023":95.7167,"JPN_cf_minus_actual_points":-5.4557,"first_minus_second_pp":11.1041},"ranking":["CHN","USA","JPN"]}
```