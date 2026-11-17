# Real GDP Growth, 2019–2023: China, United States, Japan

## Source and definitions

- **Indicator:** GDP growth (annual %), code **NY.GDP.MKTP.KD.ZG** — annual real GDP growth (constant prices), not GDP level.
- **Unit:** annual percent (%).
- **Years:** 2019–2023 (five annual observations; base = end-2018, terminal = end-2023).
- **Source:** World Bank WDI frozen snapshot, file `macroeconomic_indicators_2019_2023.csv`, snapshot SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`; API query `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023&format=json&per_page=1000`. Record lines: CHN 7–11, JPN 22–26, USA 37–41. No IMF estimates or forecasts used.

**Inputs (unrounded):**

| Year | CHN | USA | JPN |
|---|---|---|---|
| 2019 | 6.06737806333672 | 2.58382533052225 | −0.308496921143259 |
| 2020 | 2.33950385203023 | −2.081375977796 | −4.28327942675573 |
| 2021 | 8.57038414981781 | 6.15202247867526 | 3.56419531474475 |
| 2022 | 3.13385438394069 | 2.52421385073222 | 1.33164750653741 |
| 2023 | 5.41600334492955 | 2.93436322440155 | 0.720785304749811 |

## Formulas

- Arithmetic mean: (1/5)·Σ gₜ
- Naive sum: Σ gₜ
- Compounded index: I₀ = 100; Iₜ = Iₜ₋₁·(1 + gₜ/100)
- Cumulative growth: (I₅/I₀ − 1)·100 = [Π(1 + gₜ/100) − 1]·100
- CAGR: [(I₅/I₀)^(1/5) − 1]·100
- Sum − cumulative = Σ gₜ − cumulative (percentage points)
- Mean − CAGR (percentage points)

## Results (rounded to 4 dp)

**China (CHN)**
- Arithmetic mean = 25.527124794055 / 5 = **5.1054%**
- Naive sum = **25.5271%**
- Compounded index path: 106.0674 → 108.5488 → 117.8519 → 121.5452 → 128.1281
- Cumulative growth = **28.1281%**
- CAGR = 1.281280777^(1/5) − 1 = **5.0821%**
- Sum − cumulative = 25.5271 − 28.1281 = **−2.6010 pp**
- Mean − CAGR = **0.0233 pp**

**United States (USA)**
- Arithmetic mean = 12.11304990653528 / 5 = **2.4226%**
- Naive sum = **12.1130%**
- Compounded index path: 102.5838 → 100.4487 → 106.6283 → 109.3198 → 112.5277
- Cumulative growth = **12.5277%**
- CAGR = **2.3887%**
- Sum − cumulative = **−0.4146 pp**
- Mean − CAGR = **0.0339 pp**

**Japan (JPN)**
- Arithmetic mean = 1.024851778134 / 5 = **0.2050%**
- Naive sum = **1.0249%**
- Compounded index path: 99.6915 → 95.4214 → 98.8224 → 100.1384 → 100.8602
- Cumulative growth = **0.8602%**
- CAGR = **0.1714%**
- Sum − cumulative = **0.1647 pp**
- Mean − CAGR = **0.0335 pp**

## Ranking by CAGR (descending)

1. **CHN** — 5.0821%
2. **USA** — 2.3887%
3. **JPN** — 0.1714%

## Why arithmetic mean ≠ CAGR, and why rates cannot be added

Growth compounds multiplicatively: each year's rate applies to the *previous year's* level, so the five-year factor is Π(1 + gₜ/100), not 1 + Σgₜ/100. The arithmetic mean is the simple average of the annual rates; the CAGR is the single constant rate that would take the same start level to the same end level over five years, i.e. the geometric mean of the growth factors minus one. Because the geometric mean of positive factors is at most their arithmetic mean (AM–GM inequality), the arithmetic mean exceeds the CAGR whenever the rates vary — the gap widens with dispersion. Here dispersion is largest for China (rates span 2.34% to 8.57%), giving the largest mean−CAGR gap (0.0233 pp); the US and Japan gaps are similar (0.0339 and 0.0335 pp) despite very different levels.

Adding annual rates is also invalid because each rate is measured against a different base. The naive sum ignores the cross-product (interaction) terms: Π(1 + gₜ/100) − 1 = Σgₜ/100 + Σ_{t<s} gₜgₛ/10000 + … . When all rates are positive (China), the interaction terms are positive, so the naive sum *understates* cumulative growth (sum − cumulative = −2.6010 pp). When some rates are negative (USA, Japan), the interaction terms are negative, so the naive sum *overstates* cumulative growth (USA −0.4146 pp; Japan +0.1647 pp). Note Japan's naive sum (1.0249%) exceeds its actual cumulative growth (0.8602%) even though the sum is positive — a direct demonstration that summation is not a valid aggregation of growth rates.

*Note: these are mechanical arithmetic transformations of the WDI growth series; they are not causal estimates.*

```json
{"results":{"CHN_arithmetic_mean_pct":5.1054,"CHN_cagr_pct":5.0821,"CHN_cumulative_pct":28.1281,"CHN_naive_sum_pct":25.5271,"CHN_sum_minus_compound_pp":-2.6010,"CHN_mean_minus_cagr_pp":0.0233,"USA_arithmetic_mean_pct":2.4226,"USA_cagr_pct":2.3887,"USA_cumulative_pct":12.5277,"USA_naive_sum_pct":12.1130,"USA_sum_minus_compound_pp":-0.4146,"USA_mean_minus_cagr_pp":0.0339,"JPN_arithmetic_mean_pct":0.2050,"JPN_cagr_pct":0.1714,"JPN_cumulative_pct":0.8602,"JPN_naive_sum_pct":1.0249,"JPN_sum_minus_compound_pp":0.1647,"JPN_mean_minus_cagr_pp":0.0335},"ranking":["CHN","USA","JPN"]}
```