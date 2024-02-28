---
layout: center
---

# 第三章：R语言准备

---
transition: fade-out
---


# R 语言


<br>

 - R软件是一款集成了数据操作、统计和可视化功能的优秀的开源软件。
 - R软件具备高效的数据处理和存储功能，擅长数据矩阵操作，提供了大量适用于数据分析的工具，支持各种数据可视化输出。
 - R软件的一大优势是分析人员可利用简单的R程序语言描述处理过程，以构建强大的分析功能。
 - 此外，R软件具备良好可扩展性，来自世界各地开源社区的研究者为其提供了各种丰富的工具包。
 - 由于R软件能结合各种挖掘算法，有效地简化数据分析过程，适用于数据挖掘领域。


---


# R 的历史


<br>

 - R语言来自S语言，是S语言的一个变种。S语言由Rick Becker, John Chambers, Alan Wilks等人在贝尔实验室开发， 著名的C语言、Unix系统也是贝尔实验室开发的。
 - S语言第一个版本开发于1976-1980，基于Fortran； 于1980年移植到Unix, 并对外发布源代码。 1984年出版的“棕皮书” (R. A. Becker and Chambers 1984) 总结了1984年为止的版本, 并开始发布授权的源代码。 这个版本叫做旧S，与我们现在用的S语言(R语言)有较大差别， 比如， 不支持自定义函数。
 - 1984–1988对S进行了较大更新， 变成了我们现在使用的S语言，称为第二版。 1988年出版的“蓝皮书” (Richard A. Becker, Chambers, and Wilks 1988) 做了总结。
 - 1992年出版的“白皮书” (J. M. Chambers and Hastie 1992) 描述了在S语言中实现的统计建模功能， 增强了面向对象的特性。软件称为第三版，这是我们现在用的多数版本。
 - 1998年出版的“绿皮书” (John M. Chambers 1998) 描述了第四版S语言，主要是编程功能的深层次改进。 现行的S系统并没有都采用第四版，S-PLUS的第5版才采用了S语言第四版。
 - S语言商业版本为S-PLUS, 1988年发布，现在为Tibco Software拥有。 命运多舛，多次易主。现在已经基本被R语言取代。
 - R是一个自由源代码软件，GPL授权， 最初由新西兰Auckland大学的**Ross Ihaka和Robert Gentleman**于1997年发布， R实现了与S语言基本相同的功能和统计功能。 现在由R核心团队开发，但全世界的用户都可以贡献软件包。 


---


# R 语言一般特点


<br>

 - 自由软件，免费、开放源代码，支持各个主要计算机系统；
 - 完整的程序设计语言，基于函数和对象，可以自定义函数，调入C、C++、Fortran编译的代码；
 - 具有完善的数据类型，如向量、矩阵、因子、数据集、一般对象等，支持缺失值，代码像伪代码一样简洁、可读;
 - 强调交互式数据分析，支持复杂算法描述，图形功能强;
 - 实现了经典的、现代的统计方法，如参数和非参数假设检验、线性回归、广义线性回归、非线性回归、可加模型、树回归、混合模型、方差分析、判别、聚类、时间序列分析等。
 - 统计科研工作者广泛使用R进行计算和发表算法。R有上万扩展包(截止2023年4月在R扩展包主要分发网站CRAN上有一万九千多个)。


---


# R 语言和R 软件的技术特点


### S语言作者，R语言专家J. M. Chambers((J. M. Chambers 2016))指出R的本质特征：

 - R中所有的存在都是对象；
 - R中发生的动作都是函数调用。

### 详细地说R有如下技术特点：

 - 函数编程（functional programming）。R语言虽然不是严格的functional programming语言，但可以遵照其原则编程，得到可验证的可靠程序。
 - 支持对象类和类方法。基于对象的程序设计。
 - 是动态类型语言，解释执行，运行速度较慢。
 - 数据框是基本的观测数据类型，类似于数据库的表。
 - 开源软件（Open source software）。可深入探查，开发者和用户交互。
 - 可以用作C和C++、FORTRAN语言编写的算法库的接口。
 - 主要数值算法采用已广泛测试和采纳的算法实现，如排序、随机数生成、线性代数（LAPACK软件包）。


---


# R 的下载



 - 以MS Windows操作系统为例。R的主网站在[https://www.r-project.org/](https://www.r-project.org/)。 


<img src="/lesson3/1.png" class="m-0 h-60 rounded shadow" />


--

# R 的下载


 - 从CRAN的镜像网站下载软件，其中一个清华镜像如[https://mirrors.tuna.tsinghua.edu.cn/CRAN/](https://mirrors.tuna.tsinghua.edu.cn/CRAN/)。 
 - 选“Download R for Windows-base-Download R 4.2.2 for windows” (4.2.2是版本号，应下载网站上给出的最新版本）链接进行下载。 


<img src="/lesson3/2.png" class="m-0 h-60 rounded shadow" />


--

# R 的下载


 - 在“Download R for Windows”链接的页面， 选择base为R的安装程序。
 - 选择“Download R-4.3.2 for Windows”，4.3.2 为版本号。


<img src="/lesson3/3.png" class="m-0 h-60 rounded shadow" />


---

# R 的安装



 - 下载后，会发现下载的是.exe的可执行文件，双击进行安装。


<img src="/lesson3/4.png" class="m-0 h-60 rounded shadow" />


---

# R 的安装



 - 按照步骤进行安装即可，特别注意的是，有需要选择安装位置的，<font color=red>请不要在安装路径中含有非英文字符</font>。


<img src="/lesson3/5.png" class="m-0 h-60 rounded shadow" />


---

# R 的安装



 - 选择全部的内容：
 - 安装结束，即可完成R开发环境的安装。R软件的安装比较简单，根据安装流程进行安装即可。


<img src="/lesson3/6.png" class="m-0 h-60 rounded shadow" />


---

# RStudio



 - 直接在 R 中输入 R 指令并不是很方便. 需要使用文本编辑输入, 修改, 存储, 然后再送到 R 执行. 
 - RStudio 软件是 R 软件的应用界面与增强系统，可以在其中编辑、运行R的程序文件，可以跟踪运行，还可以构造文字、R结果图表融合在一起的研究报告、论文、图书、网站等。 
 - <font color=red>注意：必须先安装前面的R软件，RStudio只是集成开发软件，不自带R程序。</font>


<img src="/lesson3/7.png" class="m-0 h-60 rounded shadow" />


---

# RStudio 的下载



 - 进入官网下载
 - [https://posit.co/download/rstudio-desktop/](https://posit.co/download/rstudio-desktop/)
 - 选择DOWNLOAD RSTUDIO FOR WINDOWS下载exe的文件进行后面的安装。（这里1：install R 我们前面已经安装了，所以直接进行第2步）


<img src="/lesson3/8.png" class="m-0 h-60 rounded shadow" />


---

# RStudio 的安装



 - 1.点击软件进行安装
 - 2.修改安装目录，默认是C盘，这里选择安装在D盘。
 - 3.按步骤操作


<img src="/lesson3/9.png" class="m-0 h-60 rounded shadow" />


---

# RStudio 的界面


<img src="/lesson3/10.png" class="m-0 h-60 rounded shadow" />


---


