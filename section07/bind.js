var state = {state: 0}
var app = new Vue({
    el: '#app',
    data: {
        // messageは変化を検知できるようになる
        message: 'Hello Vue.js!',
        // 外部で指定した値でもVueに登録するとリアクティブデータに
        state: state,
        // 初期値の例
        // 後から代入される値と同じ型にする
        todoText: '',
        visitCount: 0,
        hideCompletedTodos: false,
        todos: [],
        error: null,
    },
})
// state.countはリアクティブデータになっている
state.count++