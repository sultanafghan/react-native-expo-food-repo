import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 2NAPgCYp6JWy11LAY5uLdel1rS6OYGFYpUSRQeoBxnRbyNoTUaWrbBstGZntYeX47VM2U6I_zSn8oabD8XLrsMERj1ndlWyzFS6-lH-vvdtmNl1PNI_384Gpews9X3Yx'
    }
})