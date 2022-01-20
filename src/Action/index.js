export const incNumber = (payload) => {
    return {
        type: "INCREMENT",
        payload: payload
    }   
}
export const decNumber = () =>{
    return{
        type: "DECREMENT"
    }
}