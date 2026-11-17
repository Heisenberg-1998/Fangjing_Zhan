# Real GDP Growth Comparison, 2019–2023 (WDI NY.GDP.MKTP.KD.ZG)

**Indicator:** GDP growth (annual %), constant 2015 US$ — annual real GDP growth rate, not GDP level.
**Source (all 15 records):** World Bank WDI, indicator NY.GDP.MKTP.KD.ZG, `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023&format=json&per_page=1000`; frozen snapshot `macroeconomic_indicators_2019_2023.csv`, SHA256 94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21 (CSV lines 7–11 CHN, 22–26 JPN, 37–41 USA).

## 1. Original growth-rate inputs (unit: annual %)

| Country | Year | Growth (%) | CSV line |
|---|---|---|---|
| CHN | 2019 | 6.06737806333672 | 7 |
| CHN | 2020 | 2.33950385203023 | 8 |
| CHN | 2021 | 8.57038414981781 | 9 |
| CHN | 2022 | 3.13385438394069 | 10 |
| CHN | 2023 | 5.41600334492955 | 11 |
| USA | 2019 | 2.58382533052225 | 37 |
| USA | 2020 | −2.081375977796 | 38 |
| USA | 2021 | 6.15202247867526 | 39 |
| USA | 2022 | 2.52421385073222 | 40 |
| USA | 2023 | 2.93436322440155 | 41 |
| JPN | 2019 | −0.308496921143259 | 22 |
| JPN | 2020 | −4.28327942675573 | 23 |
| JPN | 2021 | 3.56419531474475 | 24 |
| JPN | 2022 | 1.33164750653741 | 25 |
| JPN | 2023 | 0.720785304749811 | 26 |

**Formula:** Index_t = 100 × Π(1 + gᵢ/100), i = 2019…t (end-2018 = 100).

| Country | 2019 | 2020 | 2021 | 2022 | 2023 |
|---|---|---|---|---|---|
| CHN | 106.0674 | 108.5488 | 117.8519 | 121.5452 | 128.1281 |
| USA | 102.5838 | 100.4487 | 106.6283 | 109.3198 | 112.5277 |
| JPN | 99.6915 | 95.4214 | 98.8224 | 100.1384 | 100.8602 |

## 2. Cumulative growth and CAGR (end-2018 → end-2023)

Cumulative % = Index₂₀₂₃ − 100; CAGR % = [(Index₂₀₂₃/100)^(1/5) − 1] × 100.

| Country | Cumulative growth (%) | CAGR (%/yr) |
|---|---|---|
| CHN | 28.1281 | 5.0821 |
| USA | 12.5277 | 2.3887 |
| JPN | 0.8602 | 0.1714 |

## 3. Ranking and gap

1. China — 28.1281%
2. United States — 12.5277%
3. Japan — 0.8602%

**First − second gap = 28.1281 − 12.5277 = 15.6004 percentage points.**

## 4. Counterfactual: 2020 growth set to 0% (other four rates unchanged)

| Country | Counterfactual 2023 index | Actual 2023 index | Difference (index points) |
|---|---|---|---|
| CHN | 125.1990 | 128.1281 | −2.9290 |
| USA | 114.9196 | 112.5277 | +2.3919 |
| JPN | 105.3736 | 100.8602 | +4.5134 |

**Note:** This is a mechanical arithmetic scenario (zeroing one year's growth), not a causal estimate of the pandemic's effect. Percent changes are relative; index-point differences are absolute index units.