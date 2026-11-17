## Method and source

**Indicator:** World Bank WDI `FP.CPI.TOTL.ZG` — annual-average CPI inflation (%), not December/December and not PCE. **Unit:** annual %. **Snapshot:** `macroeconomic_indicators_2019_2023.csv`, SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`; source URL `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/FP.CPI.TOTL.ZG?date=2019:2023&format=json&per_page=1000`. Years used: 2021–2023 (2020 = base 100).

**Formulas (unrounded inputs throughout):**
- Price index: \(I_t = I_{t-1}\times(1+\pi_t/100)\), \(I_{2020}=100\).
- Cumulative inflation: \(C = I_{2023}-100\) (%).
- Annualized: \(a = \left[(I_{2023}/100)^{1/3}-1\right]\times100\) (%).
- Benchmark: \(I^{2\%}_{2023}=100\times1.02^3=106.1208\).
- Actual − benchmark index points: \(I_{2023}-106.1208\).
- Cumulative pp gap: \(C-6.1208\).

The 2% path is an illustrative arithmetic benchmark only, not a claim about any central bank target. Annual-average CPI ≠ PCE. Counterfactuals are mechanical arithmetic, not causal estimates.

## Results (rounded to 4 dp)

**China (CHN):** π = 0.981015135544881, 1.9735755573905, 0.23483682889305
- Index: 2021 = 100.9810; 2022 = 102.9739; 2023 = 103.2157
- Cumulative = 3.2157%; annualized = 1.0611%
- Actual − benchmark points = −2.9051; cumulative pp gap = −2.9051

**United States (USA):** π = 4.69785886363742, 8.00279982052121, 4.11633838374487
- Index: 2021 = 104.6979; 2022 = 113.0777; 2023 = 117.7324
- Cumulative = 17.7324%; annualized = 5.5913%
- Actual − benchmark points = 11.6116; cumulative pp gap = 11.6116

**Japan (JPN):** π = −0.233352779398263, 2.49770278172254, 3.26813365933163
- Index: 2021 = 99.7666; 2022 = 102.2583; 2023 = 105.6002
- Cumulative = 5.6002%; annualized = 1.8312%
- Actual − benchmark points = −0.5206; cumulative pp gap = −0.5206

**Benchmark:** constant 2% → end-2023 index = 106.1208.

**Ranking (descending actual − benchmark index gap):** USA, JPN, CHN.

```json
{"results":{"CHN_price_index_2021":100.9810,"CHN_price_index_2022":102.9739,"CHN_price_index_2023":103.2157,"CHN_cumulative_inflation_pct":3.2157,"CHN_annualized_inflation_pct":1.0611,"CHN_actual_minus_target_points":-2.9051,"CHN_actual_minus_target_cumulative_pp":-2.9051,"USA_price_index_2021":104.6979,"USA_price_index_2022":113.0777,"USA_price_index_2023":117.7324,"USA_cumulative_inflation_pct":17.7324,"USA_annualized_inflation_pct":5.5913,"USA_actual_minus_target_points":11.6116,"USA_actual_minus_target_cumulative_pp":11.6116,"JPN_price_index_2021":99.7666,"JPN_price_index_2022":102.2583,"JPN_price_index_2023":105.6002,"JPN_cumulative_inflation_pct":5.6002,"JPN_annualized_inflation_pct":1.8312,"JPN_actual_minus_target_points":-0.5206,"JPN_actual_minus_target_cumulative_pp":-0.5206,"constant_2pct_price_index_2023":106.1208},"ranking":["USA","JPN","CHN"]}
```