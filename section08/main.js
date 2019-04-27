var app = new Vue({
    el: '#app',
    data: {
        // オブジェクトデータ
        message: {
            value: 'Vue.js',
        },
        // 配列データ
        list: ['りんご', 'ばなな', 'いちご'],
        // 動的に使用するデータ
        num: 1,
    },
})