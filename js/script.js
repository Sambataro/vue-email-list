// Esercizio: Generare 10 email e stamparle a schermo,
// utilizzando Vue, Axios e l'endpoint relativo
// nelle slide che sto per aggiungere su Drive.


var app = new Vue (
  {
    el: "#app",
    data: {
      email: [],

    },

    mounted: function() {
     const self = this;
     for(var i = 0; i < 10; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
          this.email.push(response.data.response);
          }
        );
      }

    }
  },

);
