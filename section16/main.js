new Vue({
    el: "#app",
    data: {
        width: 800,
        height: 600,
        // フォームの入力と紐づけるデータ
        budget: 300,
        limit: 2,
        list: [
            { id: 1, name: 'りんご', price: 100, },
            { id: 2, name: 'ばなな', price: 200, },
            { id: 3, name: 'いちご', price: 400, },
            { id: 4, name: 'おれんじ', price: 300, },
            { id: 5, name: 'めろん', price: 500, },
        ],
        order: false,
    },
    computed: {
        // 算出プロパティを定義
        halfWidth: {
            get: function() {
                this.width / 2
            },
            // setterとしてのメソッドを定義して双方向で扱う
            set: function (val) {
                this.width = val * 2
            },
        },
        halfHeight: function() {
            return this.height / 2
        },
        // 別に定義したプロパティを流用することも可能
        // 配列やオブジェクトにして返すこともできる
        halfPoint: function() {
            return {
                x: this.halfWidth,
                y: this.halfHeight,
            }
        },
        computedData: function() {
            return Math.random()
        },
        // budget以下のリストを返す算出プロパティ
        matched: function() {
            return this.list.filter(function(el) {
                return el.price <= this.budget
            }, this)
        },

        sorted: function() {
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        },
        // matchedで帰ったデータをlimit件返す算出プロパティ
        // listが変更されない限りmatchedは固定のプロパティとなる
        // limited: function() {
        //     return this.matched.slice(0, this.limit)
        // },
        // sortedで並び替えられたデータをlimit件返す
        // orderが更新されるたびにsortedも連動して更新される
        limited: function() {
            return this.sorted.slice(0, this.limit)
        },
    },
    methods: {
        methodsData: function() {
            return Math.random()
        }
    }
})