new Vue({
    el: "#app",
    data: {
        list: [
            1,
        ],
    },
    watch: {
        list: function() {
            // 通常であれば更新後のul要素の高さは取得できない
            console.log('通常: ', this.$refs.list.offsetHeight)
            // nextTickを使うことで更新後のDOMにアクセスできる
            this.$nextTick(function () {
                console.log('nextTick: ', this.$refs.list.offsetHeight)
            })
        }
    }
})