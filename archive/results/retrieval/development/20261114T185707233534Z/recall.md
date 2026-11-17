# 检索证据召回检查

这是上下文召回检查，不是模型答题成绩。自动引文匹配是保守结果，等价表述请在 adjudication.csv 人工确认后重算。

来源：离线检索 v2；题数：12。

|题号|WDI 命中/必需|报告引文命中/必需|全部命中|
|---|---:|---:|---|
|DEV-01|1/1|N/A|是|
|DEV-02|1/1|N/A|是|
|DEV-03|1/1|N/A|是|
|DEV-04|3/3|N/A|是|
|DEV-05|2/2|N/A|是|
|DEV-06|2/2|N/A|是|
|DEV-07|2/2|N/A|是|
|DEV-08|3/3|N/A|是|
|DEV-09|2/2|N/A|是|
|DEV-10|N/A|2/2|是|
|DEV-11|N/A|2/2|是|
|DEV-12|2/2|1/1|是|

汇总：
```json
{
  "wdi": {
    "hit": 19,
    "required": 19,
    "micro_recall": 1.0,
    "macro_recall": 1.0,
    "questions": 10,
    "fully_covered_questions": 10
  },
  "imf": {
    "hit": 5,
    "required": 5,
    "micro_recall": 1.0,
    "macro_recall": 1.0,
    "questions": 3,
    "fully_covered_questions": 3
  },
  "all": {
    "hit": 24,
    "required": 24,
    "micro_recall": 1.0,
    "macro_recall": 1.0,
    "questions": 12,
    "fully_covered_questions": 12
  }
}
```
