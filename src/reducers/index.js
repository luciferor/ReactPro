const initValue = {
    status:false
}
exports.reducer = (state=initValue,action)=>{
    console.log(action,'Reduser')
    switch (action.type) {
        case 'send_menu_status':
            return {
                status : !state.status,
            };
            break;
        default:
            return state;
            break;
    }
}