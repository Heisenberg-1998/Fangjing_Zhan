# 检索证据召回检查

这是上下文召回检查，不是模型答题成绩。自动引文匹配是保守结果，等价表述请在 adjudication.csv 人工确认后重算。

来源：results\openjiuwen\B\20261114T193322Z_462617e2.jsonl；题数：40。

|题号|WDI 命中/必需|报告引文命中/必需|全部命中|
|---|---:|---:|---|
|TEST-01|1/1|N/A|是|
|TEST-02|1/1|N/A|是|
|TEST-03|1/1|N/A|是|
|TEST-04|1/1|N/A|是|
|TEST-05|1/1|N/A|是|
|TEST-06|1/1|N/A|是|
|TEST-07|2/2|N/A|是|
|TEST-08|2/2|N/A|是|
|TEST-09|2/2|N/A|是|
|TEST-10|5/5|N/A|是|
|TEST-11|2/2|N/A|是|
|TEST-12|2/2|N/A|是|
|TEST-13|2/2|N/A|是|
|TEST-14|3/3|N/A|是|
|TEST-15|5/5|N/A|是|
|TEST-16|6/6|N/A|是|
|TEST-17|3/3|N/A|是|
|TEST-18|6/6|N/A|是|
|TEST-19|8/8|N/A|是|
|TEST-20|6/6|N/A|是|
|TEST-21|2/2|N/A|是|
|TEST-22|2/2|N/A|是|
|TEST-23|3/3|N/A|是|
|TEST-24|2/2|N/A|是|
|TEST-25|2/2|N/A|是|
|TEST-26|3/3|N/A|是|
|TEST-27|5/5|N/A|是|
|TEST-28|4/4|N/A|是|
|TEST-29|6/6|N/A|是|
|TEST-30|8/8|N/A|是|
|TEST-31|N/A|0/1|未自动全命中|
|TEST-32|N/A|1/1|是|
|TEST-33|N/A|2/2|是|
|TEST-34|N/A|1/1|是|
|TEST-35|N/A|0/4|未自动全命中|
|TEST-36|1/1|1/1|是|
|TEST-37|1/1|2/2|是|
|TEST-38|1/1|1/1|是|
|TEST-39|2/2|1/3|未自动全命中|
|TEST-40|5/5|2/4|未自动全命中|

汇总：
```json
{
  "wdi": {
    "hit": 107,
    "required": 107,
    "micro_recall": 1.0,
    "macro_recall": 1.0,
    "questions": 35,
    "fully_covered_questions": 35
  },
  "imf": {
    "hit": 11,
    "required": 20,
    "micro_recall": 0.55,
    "macro_recall": 0.6833333333333333,
    "questions": 10,
    "fully_covered_questions": 6
  },
  "all": {
    "hit": 118,
    "required": 127,
    "micro_recall": 0.9291338582677166,
    "macro_recall": 0.9344444444444445,
    "questions": 40,
    "fully_covered_questions": 36
  }
}
```
