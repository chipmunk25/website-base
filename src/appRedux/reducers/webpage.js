import {
    SUCCESS_GET_ABOUT, SUCCESS_SAVE_ABOUT, SUCCESS_UPDATE_ABOUT,
    SUCCESS_GET_MASTHEAD, SUCCESS_SAVE_MASTHEAD, SUCCESS_UPDATE_MASTHEAD,
    SUCCESS_GET_LINKGROUP, SUCCESS_SAVE_LINKGROUP, SUCCESS_UPDATE_LINKGROUP, SUCCESS_DELETE_LINKGROUP,
    SUCCESS_GET_USEFULLINKS, SUCCESS_SAVE_USEFULLINKS, SUCCESS_UPDATE_USEFULLINKS, SUCCESS_DELETE_USEFULLINKS,
    SUCCESS_GET_PUBLICATION, SUCCESS_SAVE_PUBLICATION, SUCCESS_UPDATE_PUBLICATION, SUCCESS_DELETE_PUBLICATION,
    SUCCESS_GET_MEMBER, SUCCESS_SAVE_MEMBER, SUCCESS_UPDATE_MEMBER, SUCCESS_DELETE_MEMBER,
    SUCCESS_GET_SIMPLECHANGE, SUCCESS_SAVE_SIMPLECHANGE, SUCCESS_UPDATE_SIMPLECHANGE, SUCCESS_DELETE_SIMPLECHANGE,
} from "../actions/constants"
const INIT_STATE = {
    aboutLists: [],
    mastheadLists: [],
    linkGroupLists: [],
    usefulLinkLists: [],
    publicationLists: [],
    simplechangeLists: [],
    memberLists: [],
    totalPages: 0,
    totalItems: 0,
};
let newlist, index
const webpages = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SUCCESS_GET_ABOUT:
            return {
                ...state, ...action.payload
            }
        case SUCCESS_SAVE_ABOUT:
            index = state.aboutLists.indexOf(state.aboutLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.aboutLists];
            if (index > -1) {
                newlist[index] = action.payload;
                return { ...state, aboutLists: newlist }
            } else {
                return {
                    ...state, aboutLists: [...state.aboutLists, { ...action.payload }]
                }
            }

        case SUCCESS_UPDATE_ABOUT:
            index = state.aboutLists.indexOf(state.aboutLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.aboutLists];
            if (index > -1) {
                newlist[index] = action.payload;
            }
            return { ...state, aboutLists: newlist }

        case SUCCESS_GET_MASTHEAD:
            return {
                ...state, ...action.payload
            }
        case SUCCESS_SAVE_MASTHEAD:
            index = state.mastheadLists.indexOf(state.mastheadLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.mastheadLists];
            if (index > -1) {
                newlist[index] = action.payload;
                return { ...state, mastheadLists: newlist }
            } else {
                return {
                    ...state, mastheadLists: [...state.mastheadLists, { ...action.payload }]
                }
            }

        case SUCCESS_UPDATE_MASTHEAD:
            index = state.mastheadLists.indexOf(state.mastheadLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.mastheadLists];
            if (index > -1) {
                newlist[index] = action.payload;
            }
            return { ...state, mastheadLists: newlist }

        case SUCCESS_GET_LINKGROUP:
            return {
                ...state, ...action.payload
            }
        case SUCCESS_SAVE_LINKGROUP:
            return {
                ...state, linkGroupLists: [...state.linkGroupLists, { ...action.payload }]
            }
        case SUCCESS_UPDATE_LINKGROUP:
            index = state.linkGroupLists.indexOf(state.linkGroupLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.linkGroupLists];
            if (index > -1) {
                newlist[index] = action.payload;
            }
            return { ...state, linkGroupLists: newlist }
        case SUCCESS_DELETE_LINKGROUP:
            return {
                ...state,
                linkGroupLists: state.linkGroupLists.filter((item) => parseInt(item.id) !== parseInt(action.payload.id)),
            };

        case SUCCESS_GET_USEFULLINKS:
            return {
                ...state, ...action.payload
            }
        case SUCCESS_SAVE_USEFULLINKS:
            return {
                ...state, usefulLinkLists: [...state.usefulLinkLists, { ...action.payload }]
            }
        case SUCCESS_UPDATE_USEFULLINKS:
            index = state.usefulLinkLists.indexOf(state.usefulLinkLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.usefulLinkLists];
            if (index > -1) {
                newlist[index] = action.payload;
            }
            return { ...state, usefulLinkLists: newlist }
        case SUCCESS_DELETE_USEFULLINKS:
            return {
                ...state,
                usefulLinkLists: state.usefulLinkLists.filter((item) => parseInt(item.id) !== parseInt(action.payload.id)),
            };

        case SUCCESS_GET_PUBLICATION:
            return {
                ...state, ...action.payload
            }
        case SUCCESS_SAVE_PUBLICATION:
            index = state.publicationLists.indexOf(state.publicationLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.publicationLists];
            if (index > -1) {
                newlist[index] = action.payload;
                return { ...state, publicationLists: newlist }
            } else {
                return {
                    ...state, publicationLists: [...state.publicationLists, { ...action.payload }]
                }
            }
        case SUCCESS_UPDATE_PUBLICATION:
            index = state.publicationLists.indexOf(state.publicationLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.publicationLists];
            if (index > -1) {
                newlist[index] = action.payload;
            }
            return { ...state, publicationLists: newlist }
        case SUCCESS_DELETE_PUBLICATION:
            return {
                ...state,
                publicationLists: state.publicationLists.filter((item) => parseInt(item.id) !== parseInt(action.payload.id)),
            };



        case SUCCESS_GET_MEMBER:
            return {
                ...state, ...action.payload
            }
        case SUCCESS_SAVE_MEMBER:
            index = state.memberLists.indexOf(state.memberLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.memberLists];
            if (index > -1) {
                newlist[index] = action.payload;
                return { ...state, memberLists: newlist }
            } else {
                return {
                    ...state, memberLists: [...state.memberLists, { ...action.payload }]
                }
            }
        case SUCCESS_UPDATE_MEMBER:
            index = state.memberLists.indexOf(state.memberLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.memberLists];
            if (index > -1) {
                newlist[index] = action.payload;
            }
            return { ...state, memberLists: newlist }
        case SUCCESS_DELETE_MEMBER:
            return {
                ...state,
                memberLists: state.memberLists.filter((item) => parseInt(item.id) !== parseInt(action.payload.id)),
            };

        case SUCCESS_GET_SIMPLECHANGE:
            return {
                ...state, ...action.payload
            }
        case SUCCESS_SAVE_SIMPLECHANGE:
            index = state.simplechangeLists.indexOf(state.simplechangeLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.simplechangeLists];
            if (index > -1) {
                newlist[index] = action.payload;
                return { ...state, simplechangeLists: newlist }
            } else {
                return {
                    ...state, simplechangeLists: [...state.simplechangeLists, { ...action.payload }]
                }
            }
        case SUCCESS_UPDATE_SIMPLECHANGE:
            index = state.simplechangeLists.indexOf(state.simplechangeLists.find(item => parseInt(action.payload.id)
                === parseInt(item.id)));
            newlist = [...state.simplechangeLists];
            if (index > -1) {
                newlist[index] = action.payload;
            }
            return { ...state, simplechangeLists: newlist }
        case SUCCESS_DELETE_SIMPLECHANGE:
            return {
                ...state,
                simplechangeLists: state.simplechangeLists.filter((item) => parseInt(item.id) !== parseInt(action.payload.id)),
            };

        default:
            return state
    }
}


export default webpages;