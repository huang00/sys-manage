export default {
    methods: {
        getHash() {
            if(!this.$route.hash.substring(1)) 
                return null;
            return this.$route.hash.substring(1);
        } 
    }
    
};