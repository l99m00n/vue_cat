// オプションの構成
var app = new VTTCue({
    // mountする要素
    el: '#app',
    // アプリケーションで使用するデータ
    data: {
        message: 'Vue.js'
    },
    // 算出プロパティ
    computed: {
        computedMessage: function() {
            return this.message + '!'
        }
    },
    // ライフサイクルフック
    // 使用できるメソッドはあらかじめ決められている
    created: function() {
        console.log('created')
    },
    // アプリケーションで使用するメソッド
    methods: {
        myMethod: function() {
            return
        }
    }

})