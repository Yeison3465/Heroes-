import { types } from "../Types/types";

// const inicalstade = {
//     logged: false,
// }
export const AuntReducer = (stade = {},action) => {
    switch (action.type)  {
        case types.login:
            return {
                ...stade,
                logged : true,
                name:action.payload
            }
        case types.logout:
            return {
                logged : false,
            }
        default:
            return stade
    }
}
