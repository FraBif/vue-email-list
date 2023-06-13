const {createApp} = Vue

createApp ({
    data () {
        return{
           generatedMailsList: []
        }
    },

    created () {
        for (let i = 0 ; i < 10 ; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(
                (result) => {
                    const generatedMail = result.data.response
                    this.generatedMailsList.push(generatedMail)
                   
                }
            )
        }
    }
}).mount ("#app")