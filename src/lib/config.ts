import PocketBase from 'pocketbase'

const url = import.meta.env.VITE_ENVIRONMENT == 'DEVELOPMENT' ?
    import.meta.env.VITE_LOCALPOCKET_URL :
    import.meta.env.VITE_POCKETHOTS_URL



const pb = new PocketBase(url);

export default pb;


// onRecordBeforeCreateRequest((e) => {
//     // skip if admin 
//     if (e.httpContext.get("admin")) {
//         return;
//     }

//     e.record.set("verified", true)
// }, "users")
