## Data and method

**Indicator:** FP.CPI.TOTL.ZG — inflation, consumer prices (annual %), annual-average CPI growth (not December/December, not PCE). **Unit:** annual %. **Source:** World Bank WDI frozen snapshot, SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`, file `macroeconomic_indicators_2019_2023.csv` (CHN lines 4–6, JPN lines 19–21, USA lines 34–36); API: https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/FP.CPI.TOTL.ZG?date=2019:2023&format=json&per_page=1000

**Inputs (unrounded, annual %):**

| Country | 2021 | 2022 | 2023 |
|---|---|---|---|
| CHN | 0.981015135544881 | 1.9735755573905 | 0.23483682889305 |
| USA | 4.69785886363742 | 8.00279982052121 | 4.11633838374487 |
| JPN | −0.233352779398263 | 2.49770278172254 | 3.26813365933163 |

**Formulas:** Index_2020 = 100; Index_t = Index_{t−1} × (1 + π_t/100). Cumulative inflation % = Index_2023 − 100. Annualized = [(Index_2023/100)^(1/3) − 1] × 100. Benchmark: 100 × 1.02³ = 106.1208. Gaps: actual index − 106.1208 (index points); actual cumulative % − 6.1208 (percentage points).

## Results (rounded to 4 dp)

**China:** index 100.9810 (2021), 102.9740 (2022), 103.2158 (2023); cumulative 3.2158%; annualized 1.0606%; vs benchmark −2.9050 points and −2.9050 pp.

**United States:** index 104.6979 (2021), 113.0766 (2022), 117.7312 (2023); cumulative 17.7312%; annualized 5.5919%; vs benchmark +11.6104 points and +11.6104 pp.

**Japan:** index 99.7666 (2021), 102.2585 (2022), 105.6005 (2023); cumulative 5.6005%; annualized 1.8330%; vs benchmark −0.5203 points and −0.5203 pp.

**Benchmark (constant 2%):** 102.0000, 104.0400, 106.1208; cumulative 6.1208%.

**Ranking by actual − benchmark index gap (descending):** USA (+11.6104), JPN (−0.5203), CHN (−2.9050).

## Caveats

- The 2% path is an illustrative arithmetic benchmark only; it is **not** a claim about any central bank's target. The Fed targets PCE inflation (2% longer-run), the ECB/Bank of Japan use HICP/CPI measures — none of these are the WDI annual-average CPI series used here, so gaps are not target deviations.
- Index levels are synthetic (base 2020 = 100) and chained from annual-average growth rates; they are not official CPI index levels. Counterfactual and index arithmetic are mechanical, not causal estimates.
- Because the index is a monotone transform of cumulative inflation, the index-point gap and the cumulative pp gap are numerically identical here.

```json
{"results": {"CHN_price_index_2021": 100.9810, "CHN_price_index_2022": 102.9740, "CHN_price_index_2023": 103.2158, "CHN_cumulative_inflation_pct": 3.2158, "CHN_annualized_inflation_pct": 1.0606, "CHN_actual_minus_target_points": -2.9050, "CHN_actual_minus_target_cumulative_pp": -2.9050, "USA_price_index_2021": 104.6979, "USA_price_index_2022": 113.0766, "USA_price_index_2023": 117.7312, "USA_cumulative_inflation_pct": 17.7312, "USA_annualized_inflation_pct": 5.5919, "USA_actual_minus_target_points": 11.6104, "USA_actual_minus_target_cumulative_pp": 11.6104, "JPN_price_index_2021": 99.7666, "JPN_price_index_2022": 102.2585, "JPN_price_index_2023": 105.6005, "JPN_cumulative_inflation_pct": 5.6005, "JPN_annualized_inflation_pct": 1.8330, "JPN_actual_minus_target_points": -0.5203, "JPN_actual_minus_target_cumulative_pp": -0.5203, "constant_2pct_price_index_2023": 106.1208}, "ranking": ["USA", "JPN", "CHN"]}
```