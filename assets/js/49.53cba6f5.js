(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{463:function(s,a,t){"use strict";t.r(a);var e=t(21),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"不知道从哪里抄的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不知道从哪里抄的"}},[s._v("#")]),s._v(" 不知道从哪里抄的")]),s._v(" "),t("h3",{attrs:{id:"如何查看表格定义的所有索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何查看表格定义的所有索引"}},[s._v("#")]),s._v(" 如何查看表格定义的所有索引")]),s._v(" "),t("p",[t("code",[s._v("SHOW INDEX FROM <tablename>;")])]),s._v(" "),t("h3",{attrs:{id:"like-声明中的-和-是什么意思"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#like-声明中的-和-是什么意思"}},[s._v("#")]),s._v(" LIKE 声明中的％和 _ 是什么意思？")]),s._v(" "),t("p",[s._v("％对应于 0 个或更多字符，_只是 LIKE 语句中的一个字符。")]),s._v(" "),t("h3",{attrs:{id:"如何在-unix-和-mysql-时间戳之间进行转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何在-unix-和-mysql-时间戳之间进行转换"}},[s._v("#")]),s._v(" 如何在 Unix 和 MySQL 时间戳之间进行转换？")]),s._v(" "),t("p",[s._v("UNIX_TIMESTAMP 是从 MySQL 时间戳转换为 Unix 时间戳的命令")]),s._v(" "),t("p",[s._v("FROM_UNIXTIME 是从 Unix 时间戳转换为 MySQL 时间戳的命令")]),s._v(" "),t("h3",{attrs:{id:"列对比运算符是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列对比运算符是什么"}},[s._v("#")]),s._v(" 列对比运算符是什么？")]),s._v(" "),t("p",[s._v("在 SELECT 语句的列比较中使用=，<>，<=，<，> =，>，<<，>>，<=>，AND， OR 或 LIKE 运算符。")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("<>、!=")]),s._v(" 不等于")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("<<")]),s._v("  位运算（左移）")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("<=>")]),s._v(" 安全比较运算符，用来做 NULL 值的关系运算。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v(":=")]),s._v("   和= 差不多，= 只有在 set 和update时才是和 := 一样，"),t("strong",[s._v("赋值")]),s._v("的作用，其它都是关系运算符 "),t("strong",[s._v("等于")]),s._v(" 的作用，:= 不只在 set 和 update 时赋值的作用，在 select 也是赋值的作用。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("@")]),s._v(" 用户变量")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"big_cat"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'big_cat'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@name")]),s._v(" :"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'big_cat'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("@@")]),s._v(" 系统变量")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SELECT @@global.sort_buffer_size;\nSHOW GLOBAL VARIABLES LIKE 'sort_buffer_size';\nSET @@global.sort_buffer_size = 2 * 1024 * 1024;\nSET SESSION sort_buffer_size = 2 * 1024 * 1024;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])]),s._v(" "),t("p",[s._v("更多运算符参考：")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.runoob.com/mysql/mysql-operator.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 运算符 | 菜鸟教程 (runoob.com)"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://my.oschina.net/sallency/blog/1812158",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql 运算符 <=>，:=，@，@@的含义 - big_cat - OSCHINA - 中文开源技术交流社区"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"blob-和-text-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blob-和-text-有什么区别"}},[s._v("#")]),s._v(" BLOB 和 TEXT 有什么区别？")]),s._v(" "),t("p",[s._v("BLOB 是一个二进制对象，可以容纳可变数量的数据。TEXT 是一个不区分大小写 的 BLOB。 BLOB 和 TEXT 类型之间的唯一区别在于对 BLOB 值进行排序和比较时区分大小 写，对 TEXT 值不区分大小写。")]),s._v(" "),t("h3",{attrs:{id:"非标准字符串类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非标准字符串类型"}},[s._v("#")]),s._v(" 非标准字符串类型？")]),s._v(" "),t("p",[s._v("1、TINYTEXT 2、TEXT 3、MEDIUMTEXT 4、LONGTEXT")]),s._v(" "),t("h3",{attrs:{id:"通用-sql-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通用-sql-函数"}},[s._v("#")]),s._v(" 通用 SQL 函数？")]),s._v(" "),t("ol",[t("li",[s._v("CONCAT(A, B) – 连接两个字符串值以创建单个字符串输出。通常用于将两个 或多个字段合并为一个字段。")]),s._v(" "),t("li",[s._v("FORMAT(X, D)- 格式化数字 X 到 D 有效数字。")]),s._v(" "),t("li",[s._v("CURRDATE(), CURRTIME()- 返回当前日期或时间。")]),s._v(" "),t("li",[s._v("NOW（） – 将当前日期和时间作为一个值返回。")]),s._v(" "),t("li",[s._v("MONTH（），DAY（），YEAR（），WEEK（），WEEKDAY（） – 从日期 值中提取给定数据。")]),s._v(" "),t("li",[s._v("HOUR（），MINUTE（），SECOND（） – 从时间值中提取给定数据。")]),s._v(" "),t("li",[s._v("DATEDIFF（A，B） – 确定两个日期之间的差异，通常用于计算年龄")]),s._v(" "),t("li",[s._v("SUBTIMES（A，B） – 确定两次之间的差异。")]),s._v(" "),t("li",[s._v("FROMDAYS（INT） – 将整数天数转换为日期值。")])]),s._v(" "),t("h3",{attrs:{id:"锁的优化策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁的优化策略"}},[s._v("#")]),s._v(" 锁的优化策略")]),s._v(" "),t("p",[s._v("1、读写分离 2、分段加锁 3、减少锁持有的时间 4.多个线程尽量以相同的顺序去获取资源")]),s._v(" "),t("p",[s._v("不能将锁的粒度过于细化，不然可能会出现线程的加锁和释放次数过多，反而效 率不如一次加一把大锁。")]),s._v(" "),t("h3",{attrs:{id:"完整性约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整性约束"}},[s._v("#")]),s._v(" 完整性约束")]),s._v(" "),t("p",[s._v("数据完整性(Data Integrity)是指数据的精确(Accuracy)和可靠性(Reliability)。")]),s._v(" "),t("p",[s._v("分为以下四类：")]),s._v(" "),t("ol",[t("li",[s._v("实体完整性：规定表的每一行在表中是惟一的实体。")]),s._v(" "),t("li",[s._v("域完整性：是指表中的列必须满足某种特定的数据类型约束，其中约束又包括 取值范围、精度等规定。")]),s._v(" "),t("li",[s._v("参照完整性：是指两个表的主关键字和外关键字的数据应一致，保证了表之间 的数据的一致性，防止了数据丢失或无意义的数据在数据库中扩散。")]),s._v(" "),t("li",[s._v("用户定义的完整性：不同的关系数据库系统根据其应用环境的不同，往往还需 要一些特殊的约束条件。用户定义的完整性即是针对某个特定关系数据库的约束 条件，它反映某一具体应用必须满足的语义要求。")])]),s._v(" "),t("p",[s._v("与表有关的约束：包括列约束(NOT NULL（非空约束）)和表约束(PRIMARY KEY、 foreign key、check、UNIQUE) 。")]),s._v(" "),t("h2",{attrs:{id:"牛客上总结的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#牛客上总结的"}},[s._v("#")]),s._v(" 牛客上总结的")]),s._v(" "),t("h3",{attrs:{id:"sql语句执行慢的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql语句执行慢的原因"}},[s._v("#")]),s._v(" SQL语句执行慢的原因")]),s._v(" "),t("p",[s._v("1、SQL偶尔执行慢，可能是因为网络抖动、InnoDB的脏页刷新机制、操作等待锁资源导致的；")]),s._v(" "),t("p",[s._v("2、SQL一直执行慢，可能是因为SQL执行没有索引或者没有走上索引，以及单表数据量过大导致的。")]),s._v(" "),t("p",[s._v("后续继续补充。。。")]),s._v(" "),t("p",[s._v("参考：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/kubidemanong/p/10734045.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("腾讯面试：一条SQL语句执行得很慢的原因有哪些？---不看后悔系列 - 帅地 - 博客园 (cnblogs.com)"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/wtopps/article/details/103434390",target:"_blank",rel:"noopener noreferrer"}},[s._v("SQL执行慢的原因分析_wtopps的专栏-CSDN博客_慢sql的原因"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"_100万条数据索引树会有多高"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_100万条数据索引树会有多高"}},[s._v("#")]),s._v(" 100万条数据索引树会有多高")]),s._v(" "),t("p",[s._v("可见90万条记录以下，树的高度为2。100万条为 3 层。")]),s._v(" "),t("p",[s._v("分析可以看这篇文章  "),t("a",{attrs:{href:"https://www.bo56.com/%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96-mysql-innodb-%E7%9A%84-btree-%E7%9A%84%E9%AB%98%E5%BA%A6/",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何获取 MySQL innodb 的 B+tree 的高度 - 博学无忧 (bo56.com)"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"innodb-一棵-b-树可以存放多少行数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-一棵-b-树可以存放多少行数据"}},[s._v("#")]),s._v(" InnoDB 一棵 B+ 树可以存放多少行数据")]),s._v(" "),t("p",[s._v("一般是2-3层，不会太高，所以大概可以存储2千万的数据。")]),s._v(" "),t("p",[s._v("非叶子节点能存放多少指针？")]),s._v(" "),t("p",[s._v("其实这也很好算，我们假设主键 ID 为 bigint 类型，长度为 8 字节，而指针大小在 InnoDB 源码中设置为 6 字节，这样一共 14 字节，我们一个页中能存放多少这样的单元，其实就代表有多少指针，即 16384/14=1170。")]),s._v(" "),t("p",[s._v("那么可以算出一棵高度为 2 的 B+ 树，能存放 1170*16=18720 条这样的数据记录。")]),s._v(" "),t("p",[s._v("根据同样的原理我们可以算出一个高度为 3 的 B+ 树可以存放： 1170"),t("em",[s._v("1170")]),s._v("16=21902400 条这样的记录。")]),s._v(" "),t("p",[t("strong",[s._v("所以在 InnoDB 中 B+ 树高度一般为 1-3 层，它就能满足千万级的数据存储")]),s._v("。")]),s._v(" "),t("p",[s._v("在查找数据时一次页的查找代表一次 IO，所以通过主键索引查询通常只需要 1-3 次 IO 操作即可查找到数据。")]),s._v(" "),t("h3",{attrs:{id:"where和having的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where和having的区别"}},[s._v("#")]),s._v(" where和having的区别")]),s._v(" "),t("p",[s._v("“Where” 是一个约束声明，使用Where来约束来之"),t("a",{attrs:{href:"http://lib.csdn.net/base/mysql",target:"_blank",rel:"noopener noreferrer"}},[s._v("数据库"),t("OutboundLink")],1),s._v("的数据，Where是在结果返回之前起作用的，且Where中不能使用聚合函数。")]),s._v(" "),t("p",[s._v("“Having”是一个过滤声明，是在查询返回结果集以后对查询结果进行的过滤操作，在Having中可以使用聚合函数。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/liuweiyuxiang/article/details/52705127",target:"_blank",rel:"noopener noreferrer"}},[s._v("SQL中where和having的区别_Lavi的专栏-CSDN博客_having where 区别"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"mysql关键词执行的顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql关键词执行的顺序"}},[s._v("#")]),s._v(" MySQL关键词执行的顺序")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("having")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("语法顺序如下")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v("（如"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v("）  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("having")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/diyo/p/11410466.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("SQL关键字的执行顺序 - DiYong - 博客园 (cnblogs.com)"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"mysql表设计的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql表设计的注意事项"}},[s._v("#")]),s._v(" MySQL表设计的注意事项")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/110543466",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 数据表设计规范 - 知乎 (zhihu.com)"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);