---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
defaults:
  foo: true
transition: slide-left
title: Welcome to Slidev
mdc: true
colorSchema: 'light'
canvasWidth: 830
---

---
layout: cover
background: 'lesson1/cover.jpg'
---
# 数据整合及可视化之美
### The beauty of data integration and visualization
未来技术学院（海峡联合研究院）

黄育敏


---
transition: fade-out
---



# 数据整合及可视化之美


<br>

<v-clicks>

## 课程简介

<br>


 - 本课程旨在培养学生<font color=red>对数据整合和可视化的理解与应用能力</font>。通过学习R语言的基本数据处理操作、数据整合方法、图表类型以及颜色选取原则，学生将能够运用所学知识有效地处理和呈现数据，提高数据分析和可视化的实际能力。



</v-clicks>

---


## 课程目标

<br>

<v-clicks>

 - 0.  理解数据整合及可视化的作用和意义。
 - 1.  熟练掌握R语言的基本数据处理操作和常见数据类型。
 - 2.  了解并掌握数据整合的基本方法，能够进行多表合并和数据重塑。
 - 3.  能够创建和定制各种基本图表类型，如散点图、折线图、柱状图等。
 - 4.  掌握高级图表类型的绘制，包括热图、箱线图、雷达图等。
 - 5.  熟悉常用的R包和软件，能够灵活运用于实际数据分析与可视化。
 - 6.  了解颜色选取的原则，能够合理运用颜色进行图表渲染。
 - 7.  具备通过R语言进行数据整合和可视化的实际能力。

</v-clicks>

---






<v-clicks>

### 学分/学时：
 - <font color=red>16</font>

### 学时分配:
 - 第<font color=red>2-7</font>周（跳过清明假期），每周<font color=red>3</font>学时
 - 第<font color=red>8</font>周，<font color=red>1</font>学时，<font color=red>实践报告</font>

### 课程考核：
 - 平时25%
 - 课堂15%
 - 期末60%

### 上课要求：
 - <font color=red>请带上电脑，随堂操作</font>

</v-clicks>



---

# 数据整合及可视化之美


### 期末实践报告：

<v-clicks>

 - 30人，分5组，每组6人（组长一人）
 - 收集感兴趣的话题相关的数据（<font color=red>积极、正面、有意义，内容尽量不要重复</font>）
 - 运用所学知识进行数据整合及可视化展示
 - 组内成员分工进行
 - 完成一个<font color=red>小型数据可视化项目</font>，包括选题、数据收集、处理，并最终进行展示
 - 根据数据选题、运用的技术手段、临场发挥以及最终效果进行打分
 - <font color=red>可以尽早准备</font>

</v-clicks>

---
layout: two-cols
---

<v-clicks>

#### 《R语言实战（第3版）》
 - 作者：[美]罗伯特 · I. 卡巴科弗
 - 出版社：人民邮电出版社

![public目录下的1.png文件](/lesson1/1.png)

</v-clicks>

::right::

<v-clicks>

#### 《ggplot2：数据分析与图形艺术》
 - 作者: [美]哈德利•威克姆
 - 出版社: 西安交通大学出版社

![public目录下的1.png文件](/lesson1/3.jpg)

</v-clicks>

---
layout: two-cols
---

<v-clicks>

#### R语言 cookbook
 - [http://www.cookbook-r.com/Graphs/](http://www.cookbook-r.com/Graphs/)

![public目录下的1.png文件](/lesson1/r.png)

</v-clicks>

::right::

<v-clicks>

#### ggplot2官方文档
 - [https://ggplot2.tidyverse.org/reference/index.html](https://ggplot2.tidyverse.org/reference/index.html)

![public目录下的1.png文件](/lesson1/ggplot2.png)

</v-clicks>

---
layout: center
---

# 第一章：导论

---

# 全球数据爆发

<v-clicks>

随着物联网、边缘计算等智能终端设备不断普及，受到来自物联网设备信号、元数据、娱乐相关数据、云计算和边缘计算的数据增长的驱动，全球数据量呈现加速增长。根据IDC分布的《数据时代2025》预测，全球数据量将从2018年的<font color=red>33ZB</font>增至2025年的<font color=red>175ZB</font>，增长超过5倍；中国平均增速快于全球3%，预计到2025年将增至<font color=red>48.6ZB</font>，占全球数据圈的比例由23.4%提升至27.8%。


<img src="/lesson1/shujubaofa.png" class="m-0 h-60 rounded shadow" />

</v-clicks>

---

# 数据单位

<v-clicks>

 - 1KB (Kilobyte 千字节)=1024B,
 - 1MB (Megabyte 兆字节 简称“兆”)=1024KB，
 - 1GB (Gigabyte 吉字节 又称“千兆”)=1024MB,
 - 1TB (Trillionbyte 万亿字节 太字节)=1024GB,
 - 1PB (Petabyte 千万亿字节 拍字节)=1024TB,
 - 1EB (Exabyte 百亿亿字节 艾字节)=1024PB,
 - 1ZB (Zettabyte 十万亿亿字节 泽字节)= 1024 EB,
 - 1YB (Yottabyte 一亿亿亿字节 尧字节)= 1024 ZB,
 - 1BB (Brontobyte 一千亿亿亿字节)= 1024 YB.

</v-clicks>

---

# 实际情况

<v-clicks>

数据量及接入设备的猛增将带来全球数据总量的飞速增长，据IDC预计，2020年全球数据总量将达到44ZB，2035年将达到19267ZB，CAGR=50%。


![public目录下的1.png文件](/lesson1/shujubaofa2.png)

</v-clicks>

---

# 农业大数据

<v-clicks>

农业大数据是农业领域全要素、全时、全域、全样本的数据集合，并应用大数据理念、技术和方法来处理这些数据集

![public目录下的1.png文件](/lesson1/nydsj.png)

</v-clicks>

---

# 农业大数据的发展

<v-clicks>

 - 英国政府2013年正式启动<font color=red>“农业技术战略”</font>,提出充分利用大数据等技术,一方面实现精准种植和精细养殖,另一方面大力提升农产品的生产和消费市场的对接能力。
 - 美国提出公共部门与私人部门共同投入的模式来建设规模较大的<font color=red>农业数据中心</font>,促进农业数据的使用,提高农业管理水平。
 - 法国利用已建立的<font color=red>农业数据库</font>,通过互联网络等信息发布渠道,定期发布信息来服务农业生产,管控农产品销售环节的市场秩序。
 - 德国将<font color=red>云端的天气、土壤、降水、温度、地理位置</font>等数据及其分析处理结果发送到大型农业智能机械上,实现精准作业,发展更高水平的数字农业
 - 近年来,我国农业大数据发展较快。农业物联网区域试验 工程和天空地数字农业规划促进了农业数据采集技术体系的形成,<font color=red>互联网+农业</font>的理念促进了各类农业信息平台和数字化管理系统的发展,数字技术的应用正向着产前、产中、产后的整个农业生产过程延伸。

</v-clicks>

---

# 国家农业科学数据中心

[https://www.agridata.cn/#/home](https://www.agridata.cn/#/home)

<img src="/lesson1/nysjkxzx.png" class="m-10 h-70" />

---

# 生物大数据

<v-clicks>

生物大数据指的是在生物学研究中<font color=red>产生、收集和分析的大量数据</font>。这些数据涵盖了从<font color=red>分子层面到生态系统</font>层面的各种生物学信息


<img src="/lesson1/swdsj.jpg" class="m-10 h-70" />

</v-clicks>

---

# 生物数据获取成本的下降

<v-clicks>

自2008年以来，摩尔定律不再是DNA测序成本的准确预测因子，因为它们在大规模并行测序技术（https://www.genome.gov/sequencingcosts/）到后来<font color=red>下降了几个数量级</font>。

<img src="/lesson1/cost.png" class="m-10 h-70" />

</v-clicks>

---

# 生物大数据的爆发

<v-clicks>

这导致公共数据库（如GenBank和WGS ）中的序列<font color=red>呈指数增长</font>（如下图所示），引发了人们对大数据问题的进一步关注。事实上，科学界现在已经产生了<font color=red>超过exabyte（10的18次方）的数据</font>。

<img src="/lesson1/ncbi.png" class="m-10 h-50" />

</v-clicks>

---

# 利用率极低

<v-clicks>

虽然公共数据资源如此丰富，但目前国内研究者并不能高效的对这些公共数据进行有效整合利用，生物大数据未来发展如何？早在2016年，Nature reviews genetics便报道称，目前已发表的高通量测序数据利用率不足<font color=red>20%</font>，很多有价值的信息被研究者所忽略。

<img src="/lesson1/ncbi2.png" class="m-10 h-50" />

</v-clicks>


---

# 如何解决？

<img src="/lesson1/chg.jpeg" class="m-10 h-80" />

---

# 数据整合和可视化

<br>

<v-clicks>

在大数据时代，信息过载成为日常生活中的常见问题。如何<font color=red>有效抓取数据中的关键信息并直观呈现，以支持决策和洞见，这成为数据可视化的重要使命</font>。

</v-clicks>

---

# 什么是数据整合？

<v-clicks>

  - 是把在不同数据源的数据收集、整理、清洗，转换后加载到一个新的数据源，为数据消费者提供统一数据视图的方式<font color=red>（像“理线”的过程）</font>。

  <img src="/lesson1/sjql.png" class="m-10 h-60" />

</v-clicks>

---

# 数据整合的优点

<v-clicks>

  - <font color=red>提高数据质量</font>：通过数据整合，可以消除不一致性、重复性和错误性等问题，从而提高数据的质量和准确性。
  - <font color=red>增强数据分析能力</font>：数据整合可以将不同来源的数据整合在一起，从而获得更全面、更完整的数据，为数据分析提供更多的资源和支持。
  - <font color=red>减少工作量和时间</font>：在进行数据分析前，通常需要整合数据。如果数据整合自动化，可以减少人工处理的时间和工作量。
  - <font color=red>支持实时数据分析</font>：数据整合可以将实时数据与历史数据整合在一起，以支持实时数据分析，从而更快地做出决策。
  - <font color=red>支持决策制定</font>：数据整合可以提供更全面、更准确的数据，帮助决策者更好地制定决策。

</v-clicks>

---
layout: two-cols
---

# 常见数据整合工具

<v-clicks>

## Excel
Excel作为入门级的工具，是最基础也是最主要的数据分析工具。Excel具备多种强大功能，比如<font color=red>创建表单，数据透视表，VBA等</font>，Excel的系统如此庞大，以至于几乎没有任何一项分析工具可以超越它，确保了大家可以根据自己的需求分析数据。它能够满足绝大部分数据分析工作的需求，同时也提供相当友好的操作界面，对于具备基本统计学理论的用户来说是<font color=red>十分容易上手的</font>，<font color=red>但处理的数据量较小</font>。

</v-clicks>

::right::

<v-clicks>

<img src="/lesson1/excel.jpeg" class="m-10 h-60" />

</v-clicks>

---
layout: two-cols
---

<v-clicks>

## SPSS

SPSS是世界上<font color=red>最早采用图形菜单驱动界面的统计软件</font>，它最突出的特点就是操作界面极为友好，输出结果美观漂亮。用户只要掌握一定的Windows操作技能，精通统计分析原理，就可以使用该软件为特定的科研工作服务。SPSS采用类似EXCEL表格的方式输入与管理数据，数据接口较为通用，能方便的从其他数据库中读入数据。其统计过程包括了常用的、较为成熟的统计过程，完全可以满足非统计专业人士的工作需要。

</v-clicks>

::right::

<v-clicks>

<img src="/lesson1/spss.jpg" class="m-10 h-60" />

</v-clicks>

---

<v-clicks>

## R 和 Python
随着大数据重要性的大幅增长，数据科学在软件行业中的两种语言已成为最受开发人员欢迎的语言——<font color=red>R 和 Python</font> 已成为数据科学家和数据分析师最喜欢的两种语言。

<img src="/lesson1/rpython.png" class="m-10 h-60" />

</v-clicks>

---

## R 和 Python 的主要差异

<v-clicks>

<div class="parent" style="width:600px;height:480px;text-align:center;">
<video controls autoplay name="media">
  <source src="/lesson1/R vs Python.mp4" type="video/mp4">
</video>
</div>

</v-clicks>
---

## R 和 Python 的主要差异

  <img src="/lesson1/diff.jpg" class="m-10 h-60" />

---
layout: two-cols
---

<v-clicks>

## BI工具
BI工具即<font color=red>商业智能（Business Intelligence）</font>分析工具的英文缩写。它是一套完整的解决方案，用来将企业中现有的数据进行有效的整合，快速准确的提供报表并提出决策依据，帮助企业做出明智的业务经营决策。商业智能的概念最早在1996年提出。当时将商业智能定义为一类由数据仓库（或数据集市）、查询报表、数据分析、数据挖掘、数据备份和恢复等部分组成的、以帮助企业决策为目的技术及其应用。

 - 塔谱软件 (Tableau Software)
 - FineBI （帆软）

</v-clicks>

::right::

<v-clicks>

<video controls autoplay name="media" style="margin: 15px; line-height: 1.5; text-align: center">
  <source src="/lesson1/2022bi6.mp4" type="video/mp4">
</video>

</v-clicks>

---

# ETL (Extract, Transform, Load) 

<v-clicks>

 - <font color=red>ETL</font>，全称 <font color=red>Extract-Transform-Load</font>，它是将大量的原始数据经过<font color=red><u>提取（extract）</u>、<u>转换（transform）</u>、<u>加载（load）</u></font>到目标存储数据仓库的过程。ETL 虽然大部分应用在大数据领域，对小数据也可以经过这个过程的处理。

<img src="/lesson1/etl-process.jpg" class="m-10 h-50" />
  
</v-clicks>

---

## 提取 extract

<br>

<v-clicks>

在提取阶段，解决的是数据来源问题。数据的格式和形式一般有以下几种：


 - 关系型数据库 SQL，RDBMS
 - 文件型数据库 NoSQL
 - 日志文件
 - XML/Html
 - JSON
 - CSV/TSV（flat files）
 - 等等
  
</v-clicks>

---

## 转换 transform

<br>

<v-clicks>

弄清楚了数据来源，前边做了数据的整合，对文件格式进行了一些处理。本步骤，我们用一些规则、方法进行数据处理。一般常见的转换操作有：

<div style="font-size:14px; "> 

 - **筛选**：筛选部分数据，或者部分字段，提取一部分有用的数据
 - **清理**：缺失值填充、默认值设定、枚举映射等，如将一些编码转为可识别的符号，比如省份代码 sh 转为「上海」
 - **合并**：将多个属性合并在一起
 - **格式转换**：如原数据是一下个时间戳（timestamp），我们为了方便后续分析转换为时间格式，指定时区
 - **拆分**：将单个属性值拆分为多个属性值，如原为一个邮编，拆分解析成省份、城市等多个字段
 - **排序**：按期望的数据顺序进行排列
 - **计算**：如原数据为年龄，用当前年份减去年龄同，取得出生年份

</div>

</v-clicks>

<br>

---

## 转换 transform

<br>

<v-clicks>

### 原则：

<br>

 - 建数仓时尽量保留原始数据，支持多样需求
 - 为特定报表时尽量取所需要的数据

</v-clicks>

---

## 加载 load

<br>

<v-clicks>

数据的加载方式一般有以下两种重要类型：

 - **全量加载（Full load / Bulk load）**

 全量一般是第一次进行数据加载，这个过程比较长，也有种情况是业务数据存在历史全量数据不停更新的情况，这种情况无论何时都需要全量加载。还有一种情况会追溯一定的时间周期内的数据进行加载，如此业务30天之前的数据不会有再任何变化。

 - **增量加载（Incremental load / Refresh load）**

 增加加载最为常见，一般一日加载一次，加载上一日数据，也有一周或者一月加载一次的。

</v-clicks>

<br>

---

## 加载 load

<br>



除了增加新增加数据，加载同时伴随着对已加载数据的修改。选择何种加载类型，以及加载周期、加载内容，要看具体业务，产品经理和分析师分析需求最终确定一个最优的方案。

---

## 数据整合的未来

<br>

<v-clicks>

回顾国内外大数据技术在管理、处理、分析与治理四个方面近十年的发展，可以看出：

 - 数据规模<font color=red>高速增长</font>，现有处理计算能力已经成为<font color=red>瓶颈</font>；
 - 数据成为生产要素，但<font color=red>数据价值释放不充分</font>；
 - 从产业生态重点的变迁看，呈现出<font color=red>“应用先于理论技术，市场先于标准法规”</font>的现象，虽然大数据已经在一些应用领域（特别是互联网领域）取得了较好的成效，但是大数据基础理论和应用技术<font color=red>不成熟，大数据治理体系远未建立</font>。

总体上，大数据发展仍然处于<font color=red>初级阶段</font>。面向未来，在大数据应用需求驱动下，计算技术体系有必要进行重构，以数据为中心的新型大数据系统技术成为重要方向，信息技术体系将从<font color=red>“计算为中心”向“数据为中心”转型</font>，新的基础理论和核心技术问题仍有待探索和突破。

</v-clicks>

---
layout: two-cols
---

# 数据整合之后？

<v-clicks>

股票首页界面：

<img src="/lesson1/27.jpg" class="m-10 h-60" />
  
</v-clicks>

::right::

<br>

<v-clicks>

k线：

<img src="/lesson1/27-2.png" class="m-10 h-60" />
  
</v-clicks>

---
layout: two-cols
---

## 什么是可视化


<br>

 - 将信息转换为可视化上下文（例如地图或图形）的实践，<font color=red>以使人脑更容易理解数据并从中获取见解</font>。

<br>


## 数据可视化的主要目标

<br>

 - 更容易识别大型数据集中的<font color=red>模式、趋势和异常值</font>。该术语通常与其他术语互换使用，包括信息图形、信息可视化和统计图形。

<br>


::right::

<img src="/lesson1/28.jpg" class="m-5 h-90" />

---
layout: two-cols
---

# 可视化的分类

<v-clicks>


数据可视化技术在应用过程中，多数非技术驱动，而是目标驱动：


 - <font color=red>对比</font>：比较不同元素或不同时刻之间的值
 - <font color=red>组成</font>：查看数据静态或动态组成
 - <font color=red>趋势</font>：查看数据如何随着时间变化而变化。
 - <font color=red>分布</font>：查看数据分布特征，是数据可视化最为常用的场景之一
 - <font color=red>关系</font>：查看变量之间的相关性，常用于判断多个因素之间的影响关系

</v-clicks>

::right::

<v-clicks>

<img src="/lesson1/30.png" class="m-5 h-90" />

</v-clicks>

---
layout: two-cols
---

## 对比



<v-clicks>

<br>

展示事物的排列顺序是差不多，还是一个比另一个更多或更少呢？<font color=red>“大于”、“小于”或者“大致相当”</font>都是比较相对关系中的关键词，这时候会首选<font color=red>条形图</font>。

</v-clicks>

::right::

<v-clicks>

<img src="/lesson1/31.png" class="m-5 h-90" />

</v-clicks>

---

## 组成

<v-clicks>

<br>

当对某一组数据中各个数值的占比进行分析时，饼图是最佳选择。
如果你想表达的信息包括：<font color=red>“份额”、“百分比”以及“预计将达到百分之多少”</font>，这时候可以用到<font color=red>饼图</font>。


<img src="/lesson1/pie.png"/>


</v-clicks>

---

## 趋势

<br>

<v-clicks>

关心数据如何随着时间变化而变化，<font color=red>每周、每月、每年的变化趋势是增长、减少、上下波动或基本不变</font>，这时候使用<font color=red>折线图</font>更好地表现指标随时间呈现的趋势 。

<img src="/lesson1/season.png" class="m-5 h-60">

</v-clicks>

---

## 分布

<br>

<v-clicks>

关心各数值范围内各包含了多少项目，典型的信息会包含：<font color=red>“集中”、“频率”与“分布”等</font>，这时候使用<font color=red>柱状图</font>

<img src="/lesson1/bar.png"/>

</v-clicks>

---
layout: two-cols
---

## 关系

<br>

<v-clicks>

主要查看两个变量之间是否表达出我们预期所要证明的模式关系。这时候可以用<font color=red>散点图</font>来展示，用于表达<font color=red>“与……有关”、“随……而增长”、“随……而不同”变量间的关系</font>。

</v-clicks>

::right::

<v-clicks>

<img src="/lesson1/sc.png" class="m-5 h-90" />

</v-clicks>

---

# 数据可视化未来展望

<br>

<v-clicks>

 - 随着技术的不断进步和应用领域的不断拓展，数据可视化将在未来发挥更为重要的作用。

 - 随着大数据、人工智能等新技术的不断发展，数据可视化将能够处理和分析更为<font color=red>复杂和大规模的数据</font>，提供<font color=red>更为精准的决策支持</font>。
 - 随着物联网、区块链等技术的应用，数据可视化将能够实现更为<font color=red>广泛的数据连接和共享</font>，提高数据的<font color=red>综合利用效率</font>。

</v-clicks>
---