const app=Vue.createApp({
    // template:`
    // <h1>HOLA MUNDO DESDE VUE</h1>
    // <p>{{'1'+'1'}}</p>
    // `
    data(){
        return{
            mesaje:'Hola mundo'
        }
    },
    methods:{
        cambiar(){
            console.log('hola mundo de nuevo');
            this.mesaje='David Costet';
            this.mayus();
        },
        mayus(){
            this.mesaje=this.mesaje.toUpperCase()
        }
    }

});

app.mount('#myapp')