var app = new Vue(
{
    el: '#root',
    data: {
        immagini: [
            'https://source.unsplash.com/random/?shoes',
            'https://source.unsplash.com/random/?fruits',
            'https://source.unsplash.com/random/?city',
            'https://source.unsplash.com/random/?girls',
          ],
        indice: 0
  },

  methods:{
    destra: function(){
        this.indice = this.indice + 1
        if (this.indice > 3){
            this.indice = 0
        }
    },
    sinistra: function(){
        this.indice = this.indice - 1
        if (this.indice < 0){
            this.indice = 3
        }
    },
    pallino: function(index) 
    {   this.indice = index
        return index
        console.log(index)
    }
  }
}

)

