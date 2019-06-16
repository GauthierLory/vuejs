<template>
    <div>
<h2>Contact Form</h2>
<!--on souhaite écouter l'event form, on utilise v-on: ou le @
pour éviter le comportement par défaut on ajout .prevent-->

<form @submit.prevent="createContact">
    <input type="text" placeholder="prénom" v-model="contact.firstName">
    <input type="text" placeholder="nom" v-model="contact.lastName">
    <input type="text" placeholder="e-mail" v-model="contact.mail">
    <input type="text" placeholder="téléphone" v-model="contact.phone">
    <button type="submit">Créer</button>
</form>
    </div>
</template>

<script>
    export default {
        // la fonction data retourne un objet
        data(){
            return{
                // qui comporte plusieurs propriétés
                contact :{
                    firstName: "",
                    lastName: "",
                    mail: "",
                    phone: ""
                }
            };
        },
        // on ajoute une prop methods, dont la valeur est un objet
        methods: {
            // qui comporte les méthodes que l'on veut
            createContact(){
                console.log(this.contact);
            }
        }
    };
</script>

// le scoped permet de limiter le style au component contact
<style scoped>

</style>