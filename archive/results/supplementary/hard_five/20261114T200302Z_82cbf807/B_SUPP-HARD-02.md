## Method and source

**Indicator:** World Bank WDI `FP.CPI.TOTL.ZG` — inflation, consumer prices (annual %), annual-average CPI inflation (not Dec/Dec CPI, not PCE). **Unit:** annual %. **Years:** 2019–2023. **Source:** frozen WDI snapshot `macroeconomic_indicators_2019_2023.csv`, SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`; API query `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/FP.CPI.TOTL.ZG?date=2019:2023&format=json&per_page=1000` (record lines: CHN 2–6, JPN 17–21, USA 32–36).

**Formulas** (unrounded inputs; 2018 index = 100):
- \(I_t = I_{t-1}\times(1+\pi_t/100)\), \(t=2019,\dots,2023\)
- Cumulative inflation % = \(I_{2023}-100\)
- Annualized % = \(\left[(I_{2023}/100)^{1/5}-1\right]\times100\)
- Counterfactual: replace only 2022 \(\pi\) with 0 → \(I^{cf}_{2023}=I_{2021}\times1\times(1+\pi_{2023}/100)\)
- \(cf\_minus\_actual = I^{cf}_{2023}-I_{2023}\) (index points)
- Ranking metric: cumulative inflation (descending); `first_minus_second_pp` = (1st cumulative − 2nd cumulative) in percentage points.

## Results (rounded to 4 dp)

| Country | 2019 | 2020 | 2021 | 2022 | 2023 | Cum. % | Annualized % | CF 2023 | CF−actual |
|---|---|---|---|---|---|---|---|---|---|
| CHN | 102.8992 | 105.3887 | 106.4228 | 108.5230 | 108.7779 | 8.7779 | 1.6981 | 106.6727 | −2.1052 |
| USA | 101.8122 | 103.0681 | 107.9100 | 116.5453 | 121.3425 | 21.3425 | 3.9477 | 112.3508 | −8.9917 |
| JPN | 100.4688 | 100.4437 | 100.2093 | 102.7124 | 106.0695 | 6.0695 | 1.1866 | 103.4845 | −2.5850 |

**Ranking by cumulative inflation:** USA (21.3425%) > CHN (8.7779%) > JPN (6.0695%). **First minus second gap:** 21.3425 − 8.7779 = **12.5646 pp**.

Counterfactuals are mechanical arithmetic, not causal estimates.

```json
{"results":{"CHN_price_index_2019":102.8992,"CHN_price_index_2020":105.3887,"CHN_price_index_2021":106.4228,"CHN_price_index_2022":108.5230,"CHN_price_index_2023":108.7779,"CHN_cumulative_inflation_pct":8.7779,"CHN_annualized_inflation_pct":1.6981,"CHN_cf_price_index_2023":106.6727,"CHN_cf_minus_actual_points":-2.1052,"USA_price_index_2019":101.8122,"USA_price_index_2020":103.0681,"USA_price_index_2021":107.9100,"USA_price_index_2022":116.5453,"USA_price_index_2023":121.3425,"USA_cumulative_inflation_pct":21.3425,"USA_annualized_inflation_pct":3.9477,"USA_cf_price_index_2023":112.3508,"USA_cf_minus_actual_points":-8.9917,"JPN_price_index_2019":100.4688,"JPN_price_index_2020":100.4437,"JPN_price_index_2021":100.2093,"JPN_price_index_2022":102.7124,"JPN_price_index_2023":106.0695,"JPN_cumulative_inflation_pct":6.0695,"JPN_annualized_inflation_pct":1.1866,"JPN_cf_price_index_2023":103.4845,"JPN_cf_minus_actual_points":-2.5850,"first_minus_second_pp":12.5646},"ranking":["USA","CHN","JPN"]}
```