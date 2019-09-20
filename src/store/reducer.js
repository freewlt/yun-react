import * as constants from './constants';

const initialState={
    menuName:'首页',
    menuSubName:'',
    menuThiName:'',
    number:5,
    subTitle:'156',
    current: 1,
    visible:false,
    currentLocale: 'zh-CN',
    initDone:false,
    cycleCurrent:71
};


export default(state = initialState, action)=> {
    //console.log(action,'action')
    switch (action.type) {
        case constants.CHOOSE_MENU:
            return {
                ...state,
                menuName:action.menuName
            };
        case constants.CHOOSE_LF_MENU:
            return {
                ...state,
                menuSubName:action.menuSubName
            };
        case constants.CHOOSE_LF_SUB_MENU:
            return {
                ...state,
                menuThiName:action.menuThiName
            };
        case constants.IS_SHOW:
            return {
                ...state,
                visible:action.visible,
            };
        case constants.CHOOSE_LANGUAGE:
            return {
                ...state,
                currentLocale:action.currentLocale
            };
        case constants.CHOOSE_CYCLE:
            return {
                ...state,
                cycleCurrent:action.cycleCurrent
            }
        default:
            return state;
    }

}