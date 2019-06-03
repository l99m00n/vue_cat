Vue.component('my-calender', {
    model: {
        prop: 'current',
        event: 'change',
    },
    template: '<div class="my-calender">{{ current }}</div>',
    props: { current: String },
    created: function() {
        this.$emit('change', '2019-01-01')
        console.log('created')
    }
})
Vue.component('my-component', {
    template: '<div class="my-component">\
        <p>名前: {{ name }} HP: {{ hp }}</p>\
        <p>名前 <input v-model="localName"></p>\
        <p>HP <input size="5" v-model.number="localHp"></p>\
        </div>',
    props: {
        name: String,
        hp: Number,
    }
})
new Vue({
    el: "#app",
    data: {
        date: 'aaa',
        name: "スライム",
        hp: 100,
    },
    computed: {
        localName: {
            get: function() { return this.name },
            set: function(val) { this.$emit('update:name', val) }
        },
        localHp: {
            get: function() { return this.hp },
            set: function(val) { this.$emit('update:hp', val) }
        }
    }
})