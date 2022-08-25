const BANNER_LINK = `https://api.vuahanghieu.com/banner?filters=type=product-top-banner,status=active&service_token=tuPdWKrMRY`;
const CATOLOGE_LINK = `https://api.vuahanghieu.com/category?filters=type=category,parent_id=0&service_token=tuPdWKrMRY&page_size=-1&fields=id,title,slug,image_url,depth,type,description,meta_title,meta_description,meta_keywords,rating_count,rating_value`
import axios from "axios";

const FetchBanner = async function () {
    try {
        let data = await axios.get(BANNER_LINK)
        return data.data;
    } catch (e) {
        console.log(e, "Fetch Banner");
    }
}

const FetchCatologe = async function(){
    try{
        let data = await axios.get(CATOLOGE_LINK);
        return data.data;
    }catch(e){
        console.log(e,"Fetch Catologe");
    }
}

// const MainFuncFetch = async function(CallBack, SetStateFunc){
//     return 
// }


export { FetchBanner,FetchCatologe };