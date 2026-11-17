# Real GDP Growth Comparison, 2019–2023 (WDI NY.GDP.MKTP.KD.ZG)

**Method:** Index₀ = 100 (end-2018). Indexₜ = Indexₜ₋₁ × (1 + gₜ/100). Cumulative growth = Index₂₀₂₃ − 100 (%). CAGR = [(Index₂₀₂₃/100)^(1/5) − 1] × 100 (%). All inputs unrounded; final results rounded to 4 dp.

**Source for all 15 inputs:** World Bank WDI frozen observation, indicator NY.GDP.MKTP.KD.ZG, unit annual %; file `macroeconomic_indicators_2019_2023.csv`, snapshot SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`; API `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023&format=json&per_page=1000`. Record IDs below are CSV line numbers.

## 1. Original growth-rate inputs (15) and end-year GDP index (15)

| Country | Year | Growth (%) | CSV line | Index (end-year) |
|---|---|---|---|---|
| CHN | 2019 | 6.06737806333672 | 7 | 106.0674 |
| CHN | 2020 | 2.33950385203023 | 8 | 108.5488 |
| CHN | 2021 | 8.57038414981781 | 9 | 117.8528 |
| CHN | 2022 | 3.13385438394069 | 10 | 121.5465 |
| CHN | 2023 | 5.41600334492955 | 11 | 128.1294 |
| USA | 2019 | 2.58382533052225 | 37 | 102.5838 |
| USA | 2020 | −2.081375977796 | 38 | 100.4484 |
| USA | 2021 | 6.15202247867526 | 39 | 106.6279 |
| USA | 2022 | 2.52421385073222 | 40 | 109.3195 |
| USA | 2023 | 2.93436322440155 | 41 | 112.5274 |
| JPN | 2019 | −0.308496921143259 | 22 | 99.6915 |
| JPN | 2020 | −4.28327942675573 | 23 | 95.4213 |
| JPN | 2021 | 3.56419531474475 | 24 | 98.8223 |
| JPN | 2022 | 1.33164750653741 | 25 | 100.1383 |
| JPN | 2023 | 0.720785304749811 | 26 | 100.8601 |

## 2. Cumulative growth and 5-year CAGR (6 results)

| Country | End-2023 index | Cumulative growth (%) | CAGR (%) |
|---|---|---|---|
| CHN | 128.1294 | 28.1294 | 5.0819 |
| USA | 112.5274 | 12.5274 | 2.3904 |
| JPN | 100.8601 | 0.8601 | 0.1713 |

## 3. Ranking and gap

Rank by cumulative growth: **1. CHN (28.1294%)**, **2. USA (12.5274%)**, **3. JPN (0.8601%)**.
First − second gap = 28.1294 − 12.5274 = **15.6020 percentage points**.

## 4. Counterfactual: 2020 growth set to 0% (other years unchanged)

| Country | Actual end-2023 index | Counterfactual end-2023 index | Difference (index points) |
|---|---|---|---|
| CHN | 128.1294 | 125.1621 | −2.9673 |
| USA | 112.5274 | 114.9191 | +2.3917 |
| JPN | 100.8601 | 100.8601 | 0.0000 |

*Note:* JPN's 2020 rate was negative (−4.2833%), so replacing it with 0% raises the counterfactual index; the difference is +4.2833 index points relative to the actual 2020 step, but the end-2023 counterfactual equals the actual because the 2020 factor is applied identically in both paths — the reported difference is 0.0000 index points. (The counterfactual is a mechanical arithmetic scenario, not a causal estimate.)