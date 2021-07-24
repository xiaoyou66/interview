(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{458:function(a,t,s){"use strict";s.r(t);var e=s(21),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),s("p",[a._v("索引是一种特殊的文件(InnoDB数据表上的索引是表空间的一个组成部分)，它们包含着对数据表里所有记录的引用指针。")]),a._v(" "),s("p",[a._v("索引是一种数据结构。数据库索引，是数据库管理系统中一个排序的数据结构，以协助快速查询、更新数据库表中数据。索引的实现通常使用B树及其变种B+树。")]),a._v(" "),s("h3",{attrs:{id:"索引是如何遍历的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引是如何遍历的"}},[a._v("#")]),a._v(" 索引是如何遍历的")]),a._v(" "),s("p",[a._v("innoDB存储引擎的主键索引采用聚簇索引，辅助索引采用非聚簇；拥有一个数据定义文件和一个索引文件（索引+其+其它字段合并）\n执行数据查询时索引树的遍历流程为：\n主键索引： 确定定位条件, 找到根节点Page No, 根节点读到内存, 逐层向下查找, 读取叶子节点Page,通过 二分查找找到记录或未命中。\n辅助索引：通过二级索引查出对应主键，拿主键回表查主键索引得到数据， 二级索引可筛选掉大量无效记录，提高效率（ 回表就是通过辅助索引拿到主键id之后，要再去遍历聚集索引的B+树，这个过程就叫做回表。回表的操作更多的是随机io,随机io在性能上还是比较低）")]),a._v(" "),s("p",[a._v("全表扫描：直接读取叶节点头结点， 顺序扫描， 返回符合条件记录， 到最终节点结束")]),a._v(" "),s("h2",{attrs:{id:"索引实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引实现原理"}},[a._v("#")]),a._v(" 索引实现原理")]),a._v(" "),s("p",[a._v("InnoDB的索引使用的是B+树实现")]),a._v(" "),s("h3",{attrs:{id:"索引的底层原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引的底层原理"}},[a._v("#")]),a._v(" 索引的底层原理")]),a._v(" "),s("p",[a._v("先说一下发展过程吧，当我们的数据库数据很多时，为了加快查询速度，我们引入了二叉排序树的概念，通过二叉排序树，我们可以快速的找到数据，但是有些情况下，我们的二叉排序树可能会变成一条直线，为了解决这个问题，我们引入了平衡二叉树，比如B树和B+树，目前现在普遍采用B+树来作为索引，为了方便大家直观了解这两个树的区别，我们这里贴两张示意图。")]),a._v(" "),s("p",[a._v("B树示意图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/23/e63152c76e6a4.jpg",alt:"img"}})]),a._v(" "),s("p",[a._v("B+树示意图如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/23/6a6af2960a71e.jpg",alt:"img"}})]),a._v(" "),s("p",[a._v("这里就可以明显的看出，B+树所有的数据都在叶子节点上，中间节点不存储数据（存储的是叶子节点的索引）")]),a._v(" "),s("p",[a._v("第二个就是我们的每个叶子节点都有一个指向相邻叶子节点的指针，这样可以提高区间的访问性能。")]),a._v(" "),s("p",[s("strong",[a._v("MyISAM索引和InnoDB索引的区别")])]),a._v(" "),s("p",[a._v("MyISAM是非聚簇索引，索引和数据没有放在一起，典型的效果图如下所示：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/23/ce31b65f88d8e.jpg",alt:"img"}})]),a._v(" "),s("p",[a._v("而Innodb的索引就是聚簇索引，InnoDB的数据文件本身就是索引文件。从上文知道，MyISAM索引文件和数据文件是分离的，索引文件仅保存数据记录的地址。而在InnoDB中，表数据文件本身就是按B+Tree组织的一个索引结构，这棵树的叶节点data域保存了完整的数据记录。这个索引的key是数据表的主键，因此InnoDB表数据文件本身就是主索引。典型的效果如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/23/9a44a4ea7e8e5.jpg",alt:"img"}})]),a._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/77383599",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解MySQL索引底层实现原理丨技术干货 - 知乎 (zhihu.com)"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"索引的执行步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引的执行步骤"}},[a._v("#")]),a._v(" 索引的执行步骤")]),a._v(" "),s("ol",[s("li",[a._v("把创建了索引的列的内容进行排序")]),a._v(" "),s("li",[a._v("对排序结果生成倒排表")]),a._v(" "),s("li",[a._v("在倒排表内容上拼上数据地址链")]),a._v(" "),s("li",[a._v("在查询的时候，先拿到倒排表内容，再取出数据地址链，从而拿到具体数据")])]),a._v(" "),s("h3",{attrs:{id:"为什么使用b-树-而不是其他的什么树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用b-树-而不是其他的什么树"}},[a._v("#")]),a._v(" 为什么使用B+树，而不是其他的什么树？")]),a._v(" "),s("p",[a._v("一般来说，索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储在磁盘上。这样的话，索引查找过程中就要产生磁盘I/O消耗，相对于内存存取，I/O存取的消耗要高几个数量级，所以评价一个数据结构作为索引的优劣最重要的指标就是在查找过程中磁盘I/O操作次数的渐进复杂度。换句话说，索引的结构组织要尽量减少查找过程中磁盘I/O的存取次数。")]),a._v(" "),s("ul",[s("li",[a._v("IO次数少：B+树的中间结点只存放索引，数据都存在叶结点中，因此中间结点可以存更多的数据，让索引树更加矮胖；（ "),s("strong",[a._v("注意不要答节省空间。并没有节省空间，要答我们的树更加矮胖，可以减少IO次数")]),a._v(" ）")]),a._v(" "),s("li",[a._v("范围查询效率更高：B树需要中序遍历整个树，只B+树需要遍历叶结点中的链表；")]),a._v(" "),s("li",[a._v("查询效率更加稳定：每次查询都需要从根结点到叶结点，路径长度相同，所以每次查询的效率都差不多")])]),a._v(" "),s("h3",{attrs:{id:"为什么不用哈希索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么不用哈希索引"}},[a._v("#")]),a._v(" 为什么不用哈希索引？")]),a._v(" "),s("p",[a._v("哈希索引能以 O(1) 时间进行查找，但是只支持精确查找，无法用于部分查找和范围查找，无法用于排序与分组；B树索引支持大于小于等于查找，范围查找。哈希索引遇到大量哈希值相等的情况后查找效率会降低。哈希索引不支持数据的排序。")]),a._v(" "),s("h3",{attrs:{id:"索引时怎么建立起来的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引时怎么建立起来的"}},[a._v("#")]),a._v(" 索引时怎么建立起来的")]),a._v(" "),s("p",[a._v("没找到呜呜呜")]),a._v(" "),s("h2",{attrs:{id:"优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[a._v("#")]),a._v(" 优缺点")]),a._v(" "),s("p",[s("strong",[a._v("优点")])]),a._v(" "),s("ul",[s("li",[a._v("大大加快了数据的"),s("strong",[a._v("检索速度")]),a._v("；")]),a._v(" "),s("li",[a._v("可以显著减少查询中"),s("strong",[a._v("分组和排序")]),a._v("的时间；")]),a._v(" "),s("li",[a._v("通过创建唯一性索引，可以"),s("strong",[a._v("保证")]),a._v("数据库表中每一行数据的"),s("strong",[a._v("唯一性")]),a._v("；")]),a._v(" "),s("li",[a._v("将随机 I/O 变为"),s("strong",[a._v("顺序 I/O")]),a._v("（B+Tree 索引是有序的，会将相邻的数据都存储在一起）")])]),a._v(" "),s("p",[s("strong",[a._v("缺点")])]),a._v(" "),s("ul",[s("li",[a._v("建立和维护索引耗费时间空间，更新索引很慢。")])]),a._v(" "),s("h2",{attrs:{id:"什么情况下索引会失效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下索引会失效"}},[a._v("#")]),a._v(" 什么情况下索引会失效")]),a._v(" "),s("ul",[s("li",[a._v("以“%(表示任意0个或多个字符)”开头的LIKE语句；")]),a._v(" "),s("li",[a._v("OR语句前后没有同时使用索引；")]),a._v(" "),s("li",[a._v("数据类型出现隐式转化（如varchar不加单引号的话可能会自动转换为int型）；")]),a._v(" "),s("li",[a._v("对于多列索引，必须满足 "),s("strong",[a._v("最左匹配原则")]),a._v("/最左前缀原则 (最左优先，eg：多列索引col1、col2和col3，则 索引生效的情形包括 col1或col1，col2或col1，col2，col3)；")]),a._v(" "),s("li",[a._v("如果MySQL估计全表扫描比索引快，则不使用索引（比如非常小的表）")])]),a._v(" "),s("h2",{attrs:{id:"索引分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引分类"}},[a._v("#")]),a._v(" 索引分类")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/21/10b776c2ad7ae.jpg",alt:"preview"}})]),a._v(" "),s("p",[a._v("详细参考："),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/115746492",target:"_blank",rel:"noopener noreferrer"}},[a._v("MySQL索引分类，90%的开发都不知道 - 知乎 (zhihu.com)"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"什么地方适合创建索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么地方适合创建索引"}},[a._v("#")]),a._v(" 什么地方适合创建索引")]),a._v(" "),s("ul",[s("li",[a._v("某列经常作为最大最小值；")]),a._v(" "),s("li",[a._v("经常被查询的字段；")]),a._v(" "),s("li",[a._v("经常用作表连接的字段；")]),a._v(" "),s("li",[a._v("经常出现在ORDER BY/GROUP BY/DISDINCT后面的字段")])]),a._v(" "),s("h2",{attrs:{id:"创建索引注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建索引注意事项"}},[a._v("#")]),a._v(" 创建索引注意事项")]),a._v(" "),s("ol",[s("li",[a._v("最左前缀匹配原则，组合索引非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配，比如a = 1 and b = 2 and c > 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。")]),a._v(" "),s("li",[a._v("较频繁作为查询条件的字段才去创建索引")]),a._v(" "),s("li",[a._v("更新频繁字段不适合创建索引")]),a._v(" "),s("li",[a._v("若是不能有效区分数据的列不适合做索引列(如性别，男女未知，最多也就三种，区分度实在太低)")]),a._v(" "),s("li",[a._v("尽量的扩展索引，不要新建索引。比如表中已经有a的索引，现在要加(a,b)的索引，那么只需要修改原来的索引即可。")]),a._v(" "),s("li",[a._v("定义有外键的数据列一定要建立索引。")]),a._v(" "),s("li",[a._v("对于那些查询中很少涉及的列，重复值比较多的列不要建立索引。")]),a._v(" "),s("li",[a._v("对于定义为text、image和bit的数据类型的列不要建立索引。")])]),a._v(" "),s("h2",{attrs:{id:"什么是索引覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是索引覆盖"}},[a._v("#")]),a._v(" 什么是索引覆盖")]),a._v(" "),s("p",[a._v("覆盖索引（covering index）指一个查询语句的执行只用从索引中就能够取得，不必从数据表中读取。也可以称之为实现了索引覆盖。")]),a._v(" "),s("p",[a._v("当索引包含了（或覆盖了）满足查询语句中字段与条件的数据就叫做覆盖索引")]),a._v(" "),s("h2",{attrs:{id:"索引算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引算法"}},[a._v("#")]),a._v(" 索引算法")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("BTree算法:")]),a._v(" 最常用的mysql数据库索引算法，也是mysql默认的算法。因为它不仅可以被用在=,>,>=,<,<=和between这些比较操作符上，而且还可以用于like操作符，只要它的查询条件是一个不以通配符开头的常量比如："),s("code",[a._v("select * from user where name like 'jack%'")])]),a._v(" "),s("li",[s("strong",[a._v("Hash算法：")]),a._v(" Hash索引只能用于对等比较，例如=,<=>（相当于=）操作符。由于是一次定位数据，不像BTree索引需要从根节点到枝节点，最后才能访问到页节点这样多次IO访问，所以检索效率远高于BTree索引")])]),a._v(" "),s("h2",{attrs:{id:"创建和删除索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建和删除索引"}},[a._v("#")]),a._v(" 创建和删除索引")]),a._v(" "),s("h3",{attrs:{id:"在插入语句中加入key字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在插入语句中加入key字段"}},[a._v("#")]),a._v(" 在插入语句中加入KEY字段")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" user_index2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n\tid "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("auto_increment")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\tfirst_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VARCHAR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\tlast_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VARCHAR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\tid_card "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VARCHAR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\tinformation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("first_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" last_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\tFULLTEXT "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("information"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UNIQUE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id_card"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 比如这里")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h3",{attrs:{id:"使用alter-table命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用alter-table命令"}},[a._v("#")]),a._v(" 使用ALTER TABLE命令")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INDEX")]),a._v(" index_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("column_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("ALTER TABLE用来创建普通索引、UNIQUE索引或PRIMARY KEY索引。")]),a._v(" "),s("p",[a._v("其中table_name是要增加索引的表名，column_list指出对哪些列进行索引，多列时各列之间用逗号分隔。索引名index_name可自己命名，缺省时，MySQL将根据第一个索引列赋一个名称。另外，ALTER TABLE允许在单个语句中更改多个表，因此可以在同时创建多个索引。")]),a._v(" "),s("h3",{attrs:{id:"使用create-index命令创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用create-index命令创建"}},[a._v("#")]),a._v(" 使用CREATE INDEX命令创建")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INDEX")]),a._v(" index_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("column_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//CREATE INDEX可对表增加普通索引或UNIQUE索引。（但是，不能创建PRIMARY KEY索引）")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"删除索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除索引"}},[a._v("#")]),a._v(" 删除索引")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" user_index "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("drop")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("可以删除普通索引、唯一索引、全文索引：alter table 表名 drop KEY 索引名")]),a._v(" "),s("p",[s("strong",[a._v("删除主键索引：")]),s("code",[a._v("alter table 表名 drop primary key")]),a._v("（因为主键只有一个）。这里值得注意的是，如果主键自增长，那么不能直接执行此操作（自增长依赖于主键索引），如果真的需要删除的话那么就需要取消自增长，再删除")]),a._v(" "),s("h3",{attrs:{id:"强制使用索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强制使用索引"}},[a._v("#")]),a._v(" 强制使用索引")]),a._v(" "),s("p",[a._v("force index(强制要走的那个索引)")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("force")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("PRI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("limit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("强制使用主键"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/richard_rufeng/article/details/8835775",target:"_blank",rel:"noopener noreferrer"}},[a._v("MYSQL强制使用索引和禁止使用索引_richard_如风的专栏-CSDN博客_mysql禁用索引语句"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"索引一定能提高查询效率吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引一定能提高查询效率吗"}},[a._v("#")]),a._v(" 索引一定能提高查询效率吗")]),a._v(" "),s("p",[a._v("通常通过索引查询数据比全表扫描要快，但是索引需要空间来存储，也需要定期维护，而且每次更新数据时需要同步更新索引，因此不必要的索引反而会使查询反应时间变慢")]),a._v(" "),s("h2",{attrs:{id:"如何删除百万级别的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何删除百万级别的数据"}},[a._v("#")]),a._v(" 如何删除百万级别的数据")]),a._v(" "),s("p",[a._v("不能直接删除，因为直接删除同样会更新索引，这样会消耗额外的IO，一般情况下我们这样操作：")]),a._v(" "),s("ol",[s("li",[a._v("先删除索引")]),a._v(" "),s("li",[a._v("然后删除无用的数据")]),a._v(" "),s("li",[a._v("重新创建索引")])]),a._v(" "),s("p",[a._v("与之前的直接删除绝对是要快速很多，而且万一删除中断,一切删除会回滚，所消耗的时间更多！")]),a._v(" "),s("h2",{attrs:{id:"前缀索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引"}},[a._v("#")]),a._v(" 前缀索引")]),a._v(" "),s("p",[a._v("就是使用字段的前几位来创建索引")]),a._v(" "),s("p",[s("strong",[a._v("语法")]),a._v("：index("),s("strong",[a._v("field(10)")]),a._v(")，使用"),s("strong",[a._v("字段值的前10个字符建立索引")]),a._v("，默认是使用字段的全部内容建立索引。")]),a._v(" "),s("h2",{attrs:{id:"最左前缀原则-最左匹配原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最左前缀原则-最左匹配原则"}},[a._v("#")]),a._v(" 最左前缀原则？最左匹配原则？")]),a._v(" "),s("p",[s("strong",[a._v("最左前缀匹配原则：")]),a._v(" 在MySQL建立联合索引时会遵守最左前缀匹配原则，即最左优先，在检索数据时从联合索引的最左边开始匹配。主要包括以下两点")]),a._v(" "),s("ol",[s("li",[a._v("按照文档, 更准确的说法应该是最左前缀原则, 即如果你创建一个"),s("strong",[a._v("联合索引, 那 这个索引的任何前缀都会用于查询,")]),a._v(" (col1, col2, col3)这个联合索引的所有前缀 就是(col1), (col1, col2), (col1, col2, col3), 包含这些列的查询都会启用索 引查询.")]),a._v(" "),s("li",[a._v("其他所有"),s("strong",[a._v("不在最左前缀里的列都不会启用索引, 即使包含了联合索引里的部分列 也不行")]),a._v(". 即上述中的(col2), (col3), (col2, col3) 都不会启用索引去查询.")]),a._v(" "),s("li",[s("strong",[a._v("注意, (col1, col3)会启用(col1)的索引查询")])])]),a._v(" "),s("p",[a._v("参考："),s("a",{attrs:{href:"https://juejin.cn/post/6844903966690508814",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档解释MySQL最左匹配(最左前缀)原则 (juejin.cn)"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("。。。。我突然发现我记错了，下面有几个要补充的")]),a._v(" "),s("p",[s("strong",[a._v("首先是a,c这两个字段的问题")])]),a._v(" "),s("p",[a._v("索引abc_index:(a,b,c)，只会在where条件中带有(a)、(a,b)、(a,b,c)的三种类型的查询中使用。其实这里说的有一点歧义，其实当where条件只有(a,c)时也会走，但是只走a字段索引，不会走c字段。")]),a._v(" "),s("p",[s("strong",[a._v("还有一个优化的问题")])]),a._v(" "),s("p",[a._v("如果建的索引顺序是 (a, b)。而查询的语句是 where b = 1 AND a = ‘陈哈哈’; 为什么还能利用到索引？")]),a._v(" "),s("p",[a._v("理论上索引对顺序是敏感的，但是由于 MySQL 的查询优化器会自动调整 where 子句的条件顺序以使用适合的索引，所以 MySQL 不存在 where 子句的顺序问题而造成索引失效")]),a._v(" "),s("p",[s("strong",[a._v("索引顺序问题")])]),a._v(" "),s("p",[a._v("下面这种类型的SQL， a 与 b 会走索引，c不会走。")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" LOL "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("and")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("and")]),a._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'JJJ疾风剑豪'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("对于上面这种类型的sql语句；mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配（包括"),s("code",[a._v("like '陈%'")]),a._v("这种）。在a、b走完索引后，c已经是无序了，所以c就没法走索引，优化器会认为还不如全表扫描c字段来的快。所以只使用了(a,b)两个索引，影响了执行效率。")]),a._v(" "),s("p",[a._v("其实，这种场景可以通过"),s("code",[a._v("修改索引顺序为 abc_index:(a,c,b)")]),a._v("，就可以使三个索引字段都用到索引，建议小伙伴们不要有问题就想着新增索引哦，浪费资源还增加服务器压力。")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/qq_39390545/article/details/108540362",target:"_blank",rel:"noopener noreferrer"}},[a._v(" MySQL最左匹配原则，道儿上兄弟都得知道的原则_陈哈哈的菜园子-CSDN博客_最左匹配原则"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"聚簇索引和非聚簇索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引和非聚簇索引"}},[a._v("#")]),a._v(" 聚簇索引和非聚簇索引")]),a._v(" "),s("p",[a._v("聚集索引和非聚集索引两个概念其实是一样的")]),a._v(" "),s("ul",[s("li",[a._v("聚簇索引：将数据存储与索引放到了一块，找到索引也就找到了数据")]),a._v(" "),s("li",[a._v("非聚簇索引：将数据存储于索引分开结构，索引结构的叶子节点指向了数据的对应行，myisam通过key_buffer把索引先缓存到内存中，当需要访问数据时（通过索引访问数据），在内存中直接搜索索引，然后通过索引找到磁盘相应数据，这也就是为什么索引不在key buffer命中时，速度慢的原因")])]),a._v(" "),s("p",[a._v("深入参考"),s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1541265",target:"_blank",rel:"noopener noreferrer"}},[a._v("聚簇索引与非聚簇索引（也叫二级索引）--最清楚的一篇讲解 - 云+社区 - 腾讯云 (tencent.com)"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"联合索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联合索引"}},[a._v("#")]),a._v(" 联合索引")]),a._v(" "),s("p",[a._v("使用多个字段同时建立一个索引，叫做联合索引。在联合索引中，如果想要命中索引，需要按照建立索引时的字段顺序挨个使用，否则无法命中索引。当你只用到了联合索引中的一个字段来查询时，MySQL就会按照最左匹配原则来进行匹配。")])])}),[],!1,null,null,null);t.default=r.exports}}]);