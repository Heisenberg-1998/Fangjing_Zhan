# 检索证据召回检查

这是上下文召回检查，不是模型答题成绩。自动引文匹配是保守结果，等价表述请在 adjudication.csv 人工确认后重算。

来源：results\test\B\20261114T182937Z_779270de.jsonl；题数：40。

|题号|WDI 命中/必需|报告引文命中/必需|全部命中|
|---|---:|---:|---|
|TEST-01|0/1|N/A|未自动全命中|
|TEST-02|0/1|N/A|未自动全命中|
|TEST-03|0/1|N/A|未自动全命中|
|TEST-04|0/1|N/A|未自动全命中|
|TEST-05|0/1|N/A|未自动全命中|
|TEST-06|0/1|N/A|未自动全命中|
|TEST-07|0/2|N/A|未自动全命中|
|TEST-08|0/2|N/A|未自动全命中|
|TEST-09|0/2|N/A|未自动全命中|
|TEST-10|0/5|N/A|未自动全命中|
|TEST-11|0/2|N/A|未自动全命中|
|TEST-12|0/2|N/A|未自动全命中|
|TEST-13|0/2|N/A|未自动全命中|
|TEST-14|0/3|N/A|未自动全命中|
|TEST-15|0/5|N/A|未自动全命中|
|TEST-16|0/6|N/A|未自动全命中|
|TEST-17|0/3|N/A|未自动全命中|
|TEST-18|0/6|N/A|未自动全命中|
|TEST-19|0/8|N/A|未自动全命中|
|TEST-20|0/6|N/A|未自动全命中|
|TEST-21|0/2|N/A|未自动全命中|
|TEST-22|0/2|N/A|未自动全命中|
|TEST-23|0/3|N/A|未自动全命中|
|TEST-24|0/2|N/A|未自动全命中|
|TEST-25|0/2|N/A|未自动全命中|
|TEST-26|0/3|N/A|未自动全命中|
|TEST-27|0/5|N/A|未自动全命中|
|TEST-28|0/4|N/A|未自动全命中|
|TEST-29|0/6|N/A|未自动全命中|
|TEST-30|0/8|N/A|未自动全命中|
|TEST-31|N/A|0/1|未自动全命中|
|TEST-32|N/A|1/1|是|
|TEST-33|N/A|0/2|未自动全命中|
|TEST-34|N/A|1/1|是|
|TEST-35|N/A|0/4|未自动全命中|
|TEST-36|0/1|0/1|未自动全命中|
|TEST-37|0/1|2/2|未自动全命中|
|TEST-38|0/1|1/1|未自动全命中|
|TEST-39|0/2|0/3|未自动全命中|
|TEST-40|0/5|2/4|未自动全命中|

汇总：
```json
{
  "wdi": {
    "hit": 0,
    "required": 107,
    "micro_recall": 0.0,
    "macro_recall": 0.0,
    "questions": 35,
    "fully_covered_questions": 0
  },
  "imf": {
    "hit": 7,
    "required": 20,
    "micro_recall": 0.35,
    "macro_recall": 0.45,
    "questions": 10,
    "fully_covered_questions": 4
  },
  "all": {
    "hit": 7,
    "required": 127,
    "micro_recall": 0.05511811023622047,
    "macro_recall": 0.08472222222222223,
    "questions": 40,
    "fully_covered_questions": 2
  }
}
```
