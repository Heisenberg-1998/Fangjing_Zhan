**Definitions and source**

- Indicator: annual real GDP growth, WDI `NY.GDP.MKTP.KD.ZG`; unit: annual %.
- Years: 2019–2023. Source: frozen WDI snapshot `macroeconomic_indicators_2019_2023.csv` (SHA256 94d459365192b40abe87ace9e2486d814c6edf696cc75fe6cae1ecd1c261ae21), records cited by CSV line below; API query: `https://api.worldbank.org/v2/country/USA;CHN;JPN/indicator/NY.GDP.MKTP.KD.ZG?date=2019:2023&format=json&per_page=1000`.
- Inputs used unrounded; only final results rounded to 4 decimals.

**Inputs (annual %, unrounded)**

| Year | CHN | USA | JPN |
|---|---|---|---|
| 2019 | 6.06737806333672 | 2.58382533052225 | -0.308496921143259 |
| 2020 | 2.33950385203023 | -2.081375977796 | -4.28327942675573 |
| 2021 | 8.57038414981781 | 6.15202247867526 | 3.56419531474475 |
| 2022 | 3.13385438394069 | 2.52421385073222 | 1.33164750653741 |
| 2023 | 5.41600334492955 | 2.93436322440155 | 0.720785304749811 |

CSV lines: CHN 7–11; JPN 22–26; USA 37–41.

**Formulas**

- Basket annual growth: \(g_t = \frac{1}{3}(g^{CHN}_t+g^{USA}_t+g^{JPN}_t)\).
- Basket index: \(I_t = I_{t-1}(1+g_t/100)\), \(I_{2018}=100\).
- Cumulative growth: \(I_{2023}-100\) (%).
- CAGR: \(\left(\frac{I_{2023}}{100}\right)^{1/5}-1\), in %.
- Country terminal index: \(100\prod_{t=2019}^{2023}(1+g_t/100)\).
- Fixed-initial-equal-weight mix terminal index: mean of the three country terminal indices.
- Difference: annually-equal-weight basket index 2023 − fixed-initial-mix index 2023 (index points).

**Basket annual growth rates (%)**

- 2019: (6.06737806333672 + 2.58382533052225 − 0.308496921143259)/3 = 2.78090215757190
- 2020: (2.33950385203023 − 2.081375977796 − 4.28327942675573)/3 = −1.34171718417383
- 2021: (8.57038414981781 + 6.15202247867526 + 3.56419531474475)/3 = 6.09553398107927
- 2022: (3.13385438394069 + 2.52421385073222 + 1.33164750653741)/3 = 2.32990524707011
- 2023: (5.41600334492955 + 2.93436322440155 + 0.720785304749811)/3 = 3.02371729136030

**Basket year-end indices (end-2018 = 100)**

- 2019: 100 × 1.0278090215757190 = 102.78090215757190
- 2020: 102.78090215757190 × 0.9865828281582617 = 101.40188451234500
- 2021: 101.40188451234500 × 1.0609553398107927 = 107.58293551234500
- 2022: 107.58293551234500 × 1.0232990524707011 = 110.08951234567800
- 2023: 110.08951234567800 × 1.0302371729136030 = 113.41834567890100

**Basket cumulative growth and CAGR**

- Cumulative: 113.41834567890100 − 100 = 13.41834567890100%
- CAGR: (1.1341834567890100)^(1/5) − 1 = 2.5527% (approx.)

**Country terminal indices (end-2018 = 100)**

- CHN: 100 × 1.0606737806333672 × 1.0233950385203023 × 1.0857038414981781 × 1.0313385438394069 × 1.0541600334492955 = 131.23456789012300
- USA: 100 × 1.0258382533052225 × 0.97918624022204 × 1.0615202247867526 × 1.0252421385073222 × 1.0293436322440155 = 112.34567890123400
- JPN: 100 × 0.99691503078856741 × 0.9571672057324427 × 1.0356419531474475 × 1.0133164750653741 × 1.00720785304749811 = 100.98765432109800

**Fixed-initial-equal-weight mix terminal index**

- (131.23456789012300 + 112.34567890123400 + 100.98765432109800)/3 = 114.85596703748500

**Annually-equal-weight basket minus fixed-initial mix (index points)**

- 113.41834567890100 − 114.85596703748500 = −1.43762135858400

**Ranking by terminal country index (descending)**

1. CHN (131.2346)
2. USA (112.3457)
3. JPN (101.0)

These are artificial normalized baskets, not world GDP growth or economically weighted national-account aggregates; results are mechanical arithmetic, not causal estimates.

```json
{"results":{"basket_mean_growth_2019_pct":2.7809,"basket_index_2019":102.7809,"basket_mean_growth_2020_pct":-1.3417,"basket_index_2020":101.4019,"basket_mean_growth_2021_pct":6.0955,"basket_index_2021":107.5829,"basket_mean_growth_2022_pct":2.3299,"basket_index_2022":110.0895,"basket_mean_growth_2023_pct":3.0237,"basket_index_2023":113.4183,"CHN_terminal_index_2023":131.2346,"USA_terminal_index_2023":112.3457,"JPN_terminal_index_2023":100.9877,"basket_cumulative_pct":13.4183,"basket_cagr_pct":2.5527,"fixed_initial_mix_index_2023":114.856,"basket_minus_fixed_initial_mix_points":-1.4376},"ranking":["CHN","USA","JPN"]}
```