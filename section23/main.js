Vue.component('comp-child', {
    // テンプレートでvalを使う
    template: '<p>{{ val }}</p>',
    // 受け取る属性を指定
    props: ['val'],
})
new Vue({
    el: "#app",
    data: {
        message: "Hello",
    }
})