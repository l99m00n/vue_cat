new Vue({
    el: '#app',
    data: {
        label: '',
        list: [],
        current: '',
        topics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery'},
        ]
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
    }
})