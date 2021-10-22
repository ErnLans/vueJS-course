const h = Vue.h
const app = Vue.createApp({
    data() {
        return {
            title: 'Это из свойства template'
        }
    },
    methods: {
        changeTitle(){
            console.log(this.title)
            this.title = 'Изменили!'
        }
    },
    /*template:`
    <div class="card center">
    <h1>{{ title }}</h1>
    <button class="btn" @click="title = 'Изменили!'">Изменить</button>
    `*/
    render() {
        return h('div', {
            class: 'card center'
        }, [
            h('h', {}, this.title),
            h('button', {
                class: 'btn',
                onclick: this.changeTitle
            }, 'Изменить')
        ])
    }
})

app.mount('#app')