let appVue = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        todos: [
            { text: 'Practice JavaScript' },
            { text: 'Learn Vue.js' },
            { text: 'Build Something Awesome' }
        ],
        seen: true,
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        toggleSeen: function() {
            this.seen = !this.seen
        }
    }
})