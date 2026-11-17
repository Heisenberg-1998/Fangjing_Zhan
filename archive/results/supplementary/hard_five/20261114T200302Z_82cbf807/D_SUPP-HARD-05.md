## Source and definitions

- **Indicator:** GDP growth (annual %) — WDI code **NY.GDP.MKTP.KD.ZG**; annual real GDP growth (constant prices), not GDP level.
- **Unit:** annual percent.
- **Years:** 2019–2023.
- **Source:** World Bank WDI frozen snapshot `macroeconomic_indicators_2019_2023.csv`, SHA256 `94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21`; records at CSV lines 7–11 (CHN), 22–26 (JPN), 37–41 (USA); API query `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023&format=json&per_page=1000`.

**Inputs (unrounded):**

| Year | CHN | USA | JPN |
|---|---|---|---|
| 2019 | 6.06737806333672 | 2.58382533052225 | −0.308496921143259 |
| 2020 | 2.33950385203023 | −2.081375977796 | −4.28327942675573 |
| 2021 | 8.57038414981781 | 6.15202247867526 | 3.56419531474475 |
| 2022 | 3.13385438394069 | 2.52421385073222 | 1.33164750653741 |
| 2023 | 5.41600334492955 | 2.93436322440155 | 0.720785304749811 |

## Formulas

- Basket annual growth: g_t = (g_CHN,t + g_USA,t + g_JPN,t)/3
- Basket index: I_t = I_{t−1} × (1 + g_t/100), I_2018 = 100
- Cumulative growth = I_2023 − 100; CAGR = [(I_2023/100)^(1/5) − 1] × 100
- Country index: I_c,t = I_c,t−1 × (1 + g_c,t/100), I_c,2018 = 100
- Fixed-initial-mix terminal index = mean of the three terminal country indices
- Difference = basket index 2023 − fixed-initial-mix index 2023 (index points)

## Basket annual growth rates (%)

- 2019: 2.7809021575719037 → **2.7809**
- 2020: −1.3417171841738333 → **−1.3417**
- 2021: 6.0955339810792735 → **6.0955**
- 2022: 2.3299052470701067 → **2.3299**
- 2023: 3.0237172913603034 → **3.0237**

## Basket year-end indices (end-2018 = 100)

- 2019: 102.7809021575719 → **102.7809**
- 2020: 101.40187313127487 → **101.4019**
- 2021: 107.58285876544262 → **107.5829**
- 2022: 110.08943743676669 → **110.0894**
- 2023: 113.41823079250348 → **113.4182**

Cumulative growth: 13.418230792503483 → **13.4182%**; CAGR: 2.55021463939884 → **2.5502%**

## Country terminal indices (2023, end-2018 = 100)

- CHN: 128.1280777160828 → **128.1281**
- USA: 112.5276618267484 → **112.5277**
- JPN: 100.8601933958735 → **100.8602**

Fixed-initial-equal-weight mix terminal index: 113.83864431290156 → **113.8386**
Basket minus fixed-initial mix: −0.42041352039808544 → **−0.4204** index points

## Ranking (terminal country index, descending)

CHN > USA > JPN

**Caveats:** These are artificial normalized arithmetic baskets, not world GDP growth or economically weighted national-account aggregates; the annually re-equal-weighted basket differs from the fixed-initial-weight mix only through rebalancing arithmetic. No causal interpretation is implied.

```json
{"results": {"basket_mean_growth_2019_pct": 2.7809, "basket_index_2019": 102.7809, "basket_mean_growth_2020_pct": -1.3417, "basket_index_2020": 101.4019, "basket_mean_growth_2021_pct": 6.0955, "basket_index_2021": 107.5829, "basket_mean_growth_2022_pct": 2.3299, "basket_index_2022": 110.0894, "basket_mean_growth_2023_pct": 3.0237, "basket_index_2023": 113.4182, "CHN_terminal_index_2023": 128.1281, "USA_terminal_index_2023": 112.5277, "JPN_terminal_index_2023": 100.8602, "basket_cumulative_pct": 13.4182, "basket_cagr_pct": 2.5502, "fixed_initial_mix_index_2023": 113.8386, "basket_minus_fixed_initial_mix_points": -0.4204}, "ranking": ["CHN", "USA", "JPN"]}
```