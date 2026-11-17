## Method and sources

**Indicator:** CPI inflation, annual average (FP.CPI.TOTL.ZG), unit: annual %. **Source:** World Bank WDI frozen snapshot, SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`, file `macroeconomic_indicators_2019_2023.csv` (CHN lines 2–6, JPN lines 17–21, USA lines 32–36); API: https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/FP.CPI.TOTL.ZG?date=2019:2023&format=json&per_page=1000

**Formulas:** Index_2018 = 100; Index_t = Index_{t−1} × (1 + π_t/100). Cumulative inflation % = Index_2023 − 100. Annualized % = [(Index_2023/100)^(1/5) − 1] × 100. Counterfactual: same chain with π_2022 = 0; cf − actual = cf index − actual index (index points).

**Inputs (unrounded, annual %):**
- CHN: 2.89923416358226; 2.41942189457782; 0.981015135544881; 1.9735755573905; 0.23483682889305
- USA: 1.8122100752602; 1.23358439630629; 4.69785886363742; 8.00279982052121; 4.11633838374487
- JPN: 0.468776159383949; −0.024995834027731; −0.233352779398263; 2.49770278172254; 3.26813365933163

**Results (rounded to 4 dp):**

| | CHN | USA | JPN |
|---|---|---|---|
| Index 2019 | 102.8992 | 101.8122 | 100.4688 |
| Index 2020 | 105.3888 | 103.0681 | 100.4437 |
| Index 2021 | 106.4227 | 107.9101 | 100.2093 |
| Index 2022 | 108.5230 | 116.5460 | 102.7122 |
| Index 2023 | 108.7779 | 121.3434 | 106.0690 |
| Cumulative % | 8.7779 | 21.3434 | 6.0690 |
| Annualized % | 1.6970 | 3.9449 | 1.1854 |
| CF index 2023 (π₂₀₂₂=0) | 106.6726 | 112.3521 | 103.4842 |
| CF − actual (points) | −2.1053 | −8.9913 | −2.5847 |

**Ranking by cumulative inflation (descending):** USA (21.3434%) > CHN (8.7779%) > JPN (6.0690%). First minus second = 21.3434 − 8.7779 = **12.5655 pp**.

Note: these are annual-average CPI indices, not December/December CPI or PCE. Counterfactuals are mechanical arithmetic, not causal estimates.

```json
{"results": {"CHN_price_index_2019": 102.8992, "CHN_price_index_2020": 105.3888, "CHN_price_index_2021": 106.4227, "CHN_price_index_2022": 108.5230, "CHN_price_index_2023": 108.7779, "CHN_cumulative_inflation_pct": 8.7779, "CHN_annualized_inflation_pct": 1.6970, "CHN_cf_price_index_2023": 106.6726, "CHN_cf_minus_actual_points": -2.1053, "USA_price_index_2019": 101.8122, "USA_price_index_2020": 103.0681, "USA_price_index_2021": 107.9101, "USA_price_index_2022": 116.5460, "USA_price_index_2023": 121.3434, "USA_cumulative_inflation_pct": 21.3434, "USA_annualized_inflation_pct": 3.9449, "USA_cf_price_index_2023": 112.3521, "USA_cf_minus_actual_points": -8.9913, "JPN_price_index_2019": 100.4688, "JPN_price_index_2020": 100.4437, "JPN_price_index_2021": 100.2093, "JPN_price_index_2022": 102.7122, "JPN_price_index_2023": 106.0690, "JPN_cumulative_inflation_pct": 6.0690, "JPN_annualized_inflation_pct": 1.1854, "JPN_cf_price_index_2023": 103.4842, "JPN_cf_minus_actual_points": -2.5847, "first_minus_second_pp": 12.5655}, "ranking": ["USA", "CHN", "JPN"]}
```