// 操作类型列表
var operateTypeList = [
	{ id: "pay", title: "支付", tip: "网购, 消费, 发红包, 提现等", arithmetic: -1, },
	{ id: "income", title: "收益", tip: "收益, 工资, 收红包, 存款等", arithmetic: 1, },
	{ id: "transferIn", title: "转入", tip: "自己账号间的资金转移", arithmetic: 1, },
	{ id: "transferOut", title: "转出", tip: "自己账号间的资金转移", arithmetic: -1, },
	{ id: "lend", title: "我借出", tip: "针对 我借出(别人欠我)", arithmetic: -1, },
	{ id: "recover", title: "我追讨", tip: "针对 我借出(别人欠我)", arithmetic: 1, },
	{ id: "borrow", title: "我借入", tip: "针对 我借入(我欠别人)", arithmetic: 1, },
	{ id: "repay", title: "我偿还", tip: "针对 我借入(我欠别人)", arithmetic: -1, },
	{ id: "clickFarmPay", title: "刷单支付", arithmetic: -1, },
	{ id: "clickFarmIncome", title: "刷单收益", arithmetic: 1, },
	{ id: "other", title: "其它", tip: "统计, 正常", arithmetic: 0, }
];