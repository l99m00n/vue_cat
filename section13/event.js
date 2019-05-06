new Vue({
    el: "#app",
    data: {
        count: 0,
        message: "Hello"
    },
    methods: {
        handleClick: function() {
            alert('クリックしたよ')
        },
        handleInput: function(enevt) {
            // 代入前に処理を挟むことができる
            if (event.target.value != "あいうえお") {
                this.message = event.target.value
            } else {
                this.message = "aiueo"
            }
        },
        handler: function(comment) {
            console.log(comment)
        }
    }
})