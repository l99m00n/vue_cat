new Vue({
    el: '#app',
    data: {
        label: '',
        list: [],
        current: '',
        topics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery'},
        ],
        price: 19800,
    },
    watch: {
        current: function(val) {
            // githubのapiからトピックのリポジトリを検索
            axios.get('https://api.github.com/search/repositories', {
                params: { q: 'topic:' + val }
            }).then(function(response) {
                this.list = response.data.items
            }.bind(this))
        },
        list: {
            handler: function() {
                this.label = '更新されたよ'
            },
        }
    },
    filters: {
        localeNum: function(val) {
            return val.toLocaleString()
        },
        // 小数点以下を第二位までに丸めるフィルタ
        round: function(val) {
            return Math.round(val * 100) / 100
        },
        degreeToRadian: function(degree) {
            return degree * Math.PI / 180
        }
    }
})