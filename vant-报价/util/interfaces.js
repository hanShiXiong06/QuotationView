const domain = "https://www.hsxbk.top";
const interfaces = {
	// 首页一级菜单数据
	getMailList : domain +"/api/index/typecategory.php",
	// 分类机型数据
	getSeeoffer : domain + "/api/profiles/seeoffer.php",
	// 数据列表
	getBanners:domain +"/api/index/banner.php",
	// 商品详情
	getGoodInfo : domain + "/api/profiles/goods"
}
module.exports = interfaces;