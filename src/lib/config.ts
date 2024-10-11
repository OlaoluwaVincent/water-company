import PocketBase from 'pocketbase'

const url = import.meta.env.ENVIRONMENT == 'DEVELOPMENT' ?
    import.meta.env.VITE_LOCALPOCKET_URL :
    import.meta.env.VITE_POCKETHOTS_URL



const pb = new PocketBase(url);

export default pb;