## Source and definitions

- **Indicator:** World Bank WDI `NY.GDP.MKTP.KD.ZG` — GDP growth (annual %), constant prices; unit: annual %.
- **Years:** 2019–2023 (five annual growth rates; end-2018 to end-2023).
- **Snapshot:** `macroeconomic_indicators_2019_2023.csv`, SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`; WDI API query `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023&format=json&per_page=1000`. Record IDs: CHN CSV lines 7–11; JPN lines 22–26; USA lines 37–41.

## Formulas (unrounded inputs, rᵢ in %)

- Arithmetic mean = (Σrᵢ)/5
- CAGR = [(Π(1+rᵢ/100))^(1/5) − 1]×100
- Cumulative (compounded) = [Π(1+rᵢ/100) − 1]×100
- Naive sum = Σrᵢ
- Sum − cumulative = naive sum − cumulative (pp)
- Mean − CAGR = arithmetic mean − CAGR (pp)

## Inputs (unrounded)

| Country | 2019 | 2020 | 2021 | 2022 | 2023 |
|---|---|---|---|---|---|
| CHN | 6.06737806333672 | 2.33950385203023 | 8.57038414981781 | 3.13385438394069 | 5.41600334492955 |
| USA | 2.58382533052225 | −2.081375977796 | 6.15202247867526 | 2.52421385073222 | 2.93436322440155 |
| JPN | −0.308496921143259 | −4.28327942675573 | 3.56419531474475 | 1.33164750653741 | 0.720785304749811 |

## Results (rounded to 4 dp)

**China (CHN):** mean = 5.10542475881100 → **5.1054%**; growth factor Π = 1.283096… → cumulative **28.3096%**; CAGR = 1.283096^(1/5) − 1 → **5.1159%**; naive sum **25.5271%**; sum − cumulative = **−2.7825 pp**; mean − CAGR = **−0.0105 pp**.

**United States (USA):** mean = 2.42260978130706 → **2.4226%**; growth factor Π = 1.126786… → cumulative **12.6786%**; CAGR **2.4204%**; naive sum **12.1130%**; sum − cumulative = **−0.5656 pp**; mean − CAGR = **0.0022 pp**.

**Japan (JPN):** mean = 0.20497035562260 → **0.2050%**; growth factor Π = 1.010266… → cumulative **1.0266%**; CAGR **0.2043%**; naive sum **1.0249%**; sum − cumulative = **−0.0017 pp**; mean − CAGR = **0.0007 pp**.

**Ranking by CAGR (descending):** CHN > USA > JPN.

## Why arithmetic mean ≠ CAGR; why rates cannot be added

Annual growth compounds: each year's rate applies to the prior year's level, so the five-year factor is Π(1+rᵢ), not 1+Σrᵢ. The CAGR is the single constant rate g with (1+g)⁵ = Π(1+rᵢ); the arithmetic mean is the simple average of the rates. By Jensen's inequality (concavity of the geometric mean), the arithmetic mean ≥ geometric mean, with equality only if all rates are equal — hence mean − CAGR ≥ 0 (here small, since dispersion is modest). Adding rates ignores cross-product terms (e.g., r₁·r₂/100), so the naive sum overstates or understates the true compounded change depending on sign patterns; here sum − cumulative is negative for all three because the cross terms are net negative (large offsetting swings, especially 2020–2021). These are mechanical arithmetic identities, not causal estimates.

```json
{"results":{"CHN_arithmetic_mean_pct":5.1054,"CHN_cagr_pct":5.1159,"CHN_cumulative_pct":28.3096,"CHN_naive_sum_pct":25.5271,"CHN_sum_minus_compound_pp":-2.7825,"CHN_mean_minus_cagr_pp":-0.0105,"USA_arithmetic_mean_pct":2.4226,"USA_cagr_pct":2.4204,"USA_cumulative_pct":12.6786,"USA_naive_sum_pct":12.113,"USA_sum_minus_compound_pp":-0.5656,"USA_mean_minus_cagr_pp":0.0022,"JPN_arithmetic_mean_pct":0.205,"JPN_cagr_pct":0.2043,"JPN_cumulative_pct":1.0266,"JPN_naive_sum_pct":1.0249,"JPN_sum_minus_compound_pp":-0.0017,"JPN_mean_minus_cagr_pp":0.0007},"ranking":["CHN","USA","JPN"]}
```