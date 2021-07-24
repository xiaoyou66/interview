(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{462:function(s,t,a){"use strict";a.r(t);var e=a(21),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[s._v("#")]),s._v(" 主从复制")]),s._v(" "),a("p",[s._v("将主数据库中的DDL和DML操作通过二进制日志（BINLOG）传输到从数据库上，然后将这些日志重新执行（重做）；从而使得从数据库的数据与主数据库保持一致。")]),s._v(" "),a("h3",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),a("ol",[a("li",[s._v("主数据库出现问题，可以切换到从数据库。")]),s._v(" "),a("li",[s._v("可以进行数据库层面的读写分离。")]),s._v(" "),a("li",[s._v("可以在从数据库上进行日常备份。")])]),s._v(" "),a("h3",{attrs:{id:"解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决的问题"}},[s._v("#")]),s._v(" 解决的问题")]),s._v(" "),a("ul",[a("li",[s._v("数据分布：随意开始或停止复制，并在不同地理位置分布数据备份")]),s._v(" "),a("li",[s._v("负载均衡：降低单个服务器的压力")]),s._v(" "),a("li",[s._v("高可用和故障切换：帮助应用程序避免单点失败")]),s._v(" "),a("li",[s._v("升级测试：可以用更高版本的MySQL作为从库")])]),s._v(" "),a("h3",{attrs:{id:"工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[s._v("#")]),s._v(" 工作原理")]),s._v(" "),a("ul",[a("li",[s._v("master提交完事务后，写入binlog （Binary log：主数据库的二进制日志）")]),s._v(" "),a("li",[s._v("slave连接到master，获取binlog")]),s._v(" "),a("li",[s._v("master创建dump线程，推送binglog到slave")]),s._v(" "),a("li",[s._v("slave启动一个IO线程读取同步过来的master的binlog，记录到relay log中继日志中 （Relay log：从服务器的中继日志）")]),s._v(" "),a("li",[s._v("slave再开启一个sql线程读取relay log事件并在slave执行，完成同步")]),s._v(" "),a("li",[s._v("slave记录自己的binglog")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/30/eab9f8d3188aa.jpg",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"读写分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[s._v("#")]),s._v(" 读写分离")]),s._v(" "),a("p",[s._v("读写分离是依赖于主从复制，而主从复制又是为读写分离服务的。因为主从复制要求slave不能写只能读（如果对slave执行写操作，那么show slave status将会呈现Slave_SQL_Running=NO，此时你需要按照前面提到的手动同步一下slave）。")]),s._v(" "),a("ol",[a("li",[s._v("使用mysql-proxy代理")]),s._v(" "),a("li",[s._v("使用AbstractRoutingDataSource+aop+annotation在dao层决定数据源。")]),s._v(" "),a("li",[s._v("使用AbstractRoutingDataSource+aop+annotation在service层决定数据源")])]),s._v(" "),a("h2",{attrs:{id:"数据恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复"}},[s._v("#")]),s._v(" 数据恢复")]),s._v(" "),a("p",[s._v("MySQL的binlog日志是MySQL日志中非常重要的一种日志，记录了数据库所有的DML操作。通过binlog日志我们可以进行数据库的读写分离、数据增量备份以及服务器宕机时的数据恢复。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据位置导出 SQL 文件")]),s._v("\nmysqlbinlog "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--no-defaults --base64-output=decode-rows -v \\")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--start-position "2508132" --stop-position "2511004" \\')]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--database test_binlog  mysql-bin.000034 \\")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql_backup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test_binlog_step1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n \nmysqlbinlog "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--no-defaults --base64-output=decode-rows -v \\")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--start-position "2508813" --stop-position "2509187" \\')]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--database test_binlog  mysql-bin.000034 \\")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql_backup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test_binlog_step2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 mysql 进行恢复")]),s._v("\nmysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u cisco "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql_backup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test_binlog_step1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\nmysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u cisco "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql_backup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test_binlog_step2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/michael9/p/11923483.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 5.7 - 通过 BINLOG 恢复数据 - 来份锅包肉 - 博客园 (cnblogs.com)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);