import wefetch from "wefetch";

export function getNews() {
  return wefetch.get("http://govapi.pinza.com.cn/newsList")
}
getNews.desc="新闻列表"