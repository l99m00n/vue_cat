new Vue({
    el: "#app",
    data: {
        message: "Hello",
        val: [],
        preview: '',
    },
    methods: {
        handleChange: function(event) {
            var file = event.target.files[0]
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
        }
    }
})