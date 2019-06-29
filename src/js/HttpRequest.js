var HttpRequest = {
    getDate: function (url) {
        return fetch(url)
            .then(response => response.json()) //定义返回的类型和数据格式
    }
}
module.exports = HttpRequest;