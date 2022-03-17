
const app = new Vue(
    {
        el:"#app",
        data: {
            
        activeImage : 0,
            
        landscape : [
            {
                nome : "Acadia National park",
                descrizione : "vera e propria perla del New England, incastonato nella bellissima Mount Desert Island.",
                image : "acadia-national-park.jpg",
            },
        
            {
                nome : "Bar Harbor",
                descrizione : "Bar Harbor è una città degli Stati Uniti d'America, situata nella contea di Hancock, nel Maine.",
                image : "bar-harbor.jpg",
            },
        
            {
                nome : "Costa oceano pacifico",
                descrizione : "vera e propria perla dell'oceano pacifico.",
                image : "coast.jpg",
            },
        
            {
                nome : "Biedesheim",
                descrizione : "Biedesheim è un comune di 634 abitanti della Renania-Palatinato, in Germania.",
                image : "germany-biedesheim.jpg",
            },
        
            {
                nome : "Scozia",
                descrizione : "tipico paesaggio scozzese.",
                image : "scotland.jpg",
            },
        
            {
                nome : "Yellow stone National park",
                descrizione : "non so se è davvero lo yellowstone.",
                image : "yellowstone.jpg",
            }],
    },
    
    methods:{
        previous(){
            if(this.activeImage == 0){
                this.activeImage = this.landscape.length - 1;
            }else{
                this.activeImage--;
            }
        },

        next(){
            if(this.activeImage == this.landscape.length - 1){
                this.activeImage = 0;
            }else{
                this.activeImage++;
            }
        }
    },
});








