(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{476:function(t,o,v){"use strict";v.r(o);var _=v(21),e=Object(_.a)({},(function(){var t=this,o=t.$createElement,v=t._self._c||o;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"mongodb体系结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mongodb体系结构"}},[t._v("#")]),t._v(" MongoDB体系结构")]),t._v(" "),v("p",[t._v("MongoDB的体系结构如下所示：磁盘文件经过加载之后后形成 MongoDB 实例，一个 MongoDB 实例中可以存放多个数据库（图中的MongoDB 数据库1、MongoDB 数据库2、MongoDB 数据库3），数据库中存放的是一个个 Collection （集合，对应关系型数据库的 table），集合中又存放 Document （文档，对应关系型的记录），Document 中存放 Field（字段，对应关系型数据库列）。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/06/085c7b0b25f65.png",alt:"体系结构"}})]),t._v(" "),v("p",[t._v("和传统数据库进行对比")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("RDBMS")]),t._v(" "),v("th",[t._v("MongoDB")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("database（数据库）")]),t._v(" "),v("td",[t._v("database（数据库）")])]),t._v(" "),v("tr",[v("td",[t._v("table （表）")]),t._v(" "),v("td",[t._v("collection（ 集合）")])]),t._v(" "),v("tr",[v("td",[t._v("row（ 行）")]),t._v(" "),v("td",[t._v("document（ BSON 文档）")])]),t._v(" "),v("tr",[v("td",[t._v("column （列）")]),t._v(" "),v("td",[t._v("field （字段）")])]),t._v(" "),v("tr",[v("td",[t._v("index（唯一索引、主键索引）")]),t._v(" "),v("td",[t._v("index （支持地理位置索引、全文索引 、哈希索引）")])]),t._v(" "),v("tr",[v("td",[t._v("join （主外键关联）")]),t._v(" "),v("td",[t._v("embedded Document （嵌套文档）")])]),t._v(" "),v("tr",[v("td",[t._v("primary key(指定1至N个列做主键）")]),t._v(" "),v("td",[t._v("primary key (指定_id field做为主键）")])])])]),t._v(" "),v("h3",{attrs:{id:"bson"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bson"}},[t._v("#")]),t._v(" BSON")]),t._v(" "),v("p",[t._v("BSON（Binary JSON）是一种二进制存储 JSON 的格式，支持内嵌文档对象和数组对象，BSON 有 JSON 没有的一些数据类型，如 Date 和 Binary Data 类型。BSON 是一种 schema-less（格式自由）的存储形式，可以用作网络数据交换，它的优点是灵活性高，它的缺点是空间利用率低。例如："),v("code",[t._v("{key:value，key2:value2}")]),t._v(" ，其中 key 是字符串类型，后面的 value 值。BSON 有三个特点：轻量性、可遍历性、高效性。")]),t._v(" "),v("p",[t._v("MongoDB可以存储的数据类型有下面这几种")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/06/715c21791e80e.png",alt:"document类型"}})]),t._v(" "),v("h2",{attrs:{id:"mongodb架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mongodb架构"}},[t._v("#")]),t._v(" MongoDB架构")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/06/b51680aaede8a.png",alt:"框架"}})]),t._v(" "),v("p",[t._v("MongoDB 与 MySQL 中的架构相差不多，底层都使用了可插拔的存储引擎以满足用户的不同需要。用户可以根据程序的数据特征选择不同的存储引擎,在最新版本的 MongoDB 中使用了 WiredTiger 作为默认的存储引擎，WiredTiger 提供了不同粒度的并发控制和压缩机制，能够为不同种类的应用提供了最好的性能和存储率；在存储引擎上层的就是 MongoDB 的数据模型和前面提到的查询语言了，由于 MongoDB 对数据的存储与 RDBMS 有较大的差异，所以它创建了一套不同的数据模型和查询语言；")]),t._v(" "),v("h3",{attrs:{id:"数据模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),v("p",[t._v("MongoDB中数据表示方式有内嵌和引用两种，这两个其实就是不同的表示方式")]),t._v(" "),v("p",[t._v("“引用”我们比较好理解，是指将不同实体的数据分散不到不同的集合中，而在"),v("a",{attrs:{href:"https://cloud.tencent.com/product/cdb-overview?from=10680",target:"_blank",rel:"noopener noreferrer"}},[t._v("关系型数据库"),v("OutboundLink")],1),t._v("设计中就是将实体分别建立相应的模型表。如常见的“老师-学生”，“产品-标签”关系，只要实体间存在关系，就可以使用“引用”思想。")]),t._v(" "),v("p",[t._v("“内嵌”是一种反范式化的设计，指的是将每个文档所需的数据都嵌入到文档内部，我想举一个“用户-账户”的关系。我们知道在领域驱动设计中，“用户”是一个聚合根，每个用户对应一个账户，所以是“1对1”的一种关系，在关系型数据库设计中，大部分时候都会将这两者严格区分开来。但是在MongoDB中，却不然，我们可以直接选择将“用户”需要的“账户”数据内嵌到用户文档中，便于我们的增删改查。这是一种反范式化的设计。")]),t._v(" "),v("p",[t._v("内嵌和引用的效果")]),t._v(" "),v("ul",[v("li",[t._v("数据对象之间有包含关系 ,一般是数据对象之间有一对多或者一对一的关系；")]),t._v(" "),v("li",[t._v("需要经常一起读取的数据；")]),t._v(" "),v("li",[t._v("有 map-reduce/aggregation 需求的数据放在一起，这些操作都只能操作单个 collection；")])]),t._v(" "),v("p",[t._v("引用：")]),t._v(" "),v("ul",[v("li",[t._v("当内嵌数据会导致很多数据的重复，并且读性能的优势又不足于覆盖数据重复的弊端；")]),t._v(" "),v("li",[t._v("需要表达比较复杂的多对多关系的时候；")]),t._v(" "),v("li",[t._v("大型层次结果数据集嵌套不要太深；")])]),t._v(" "),v("p",[t._v("存储引擎会在存储引擎那个章节单独说明")])])}),[],!1,null,null,null);o.default=e.exports}}]);