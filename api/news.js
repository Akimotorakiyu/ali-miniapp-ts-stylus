"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wefetch_1 = require("wefetch");
function getNews() {
    return wefetch_1.default.get("http://govapi.pinza.com.cn/newsList");
}
exports.getNews = getNews;
getNews.desc = "新闻列表";
