
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { 
    CreateAbout, ChangeAbout, RemoveAbout, getAboutFromApi,
    CreateLinkGroup, ChangeLinkGroup, RemoveLinkGroup, getLinkGroupFromApi,
    CreateUsefulLinks, ChangeUsefulLinks, RemoveUsefulLinks, getUsefulLinksFromApi,
    CreatePublication, ChangePublication, RemovePublication, getPublicationFromApi,
    CreateMember, ChangeMember, RemoveMember, getMemberFromApi,
    CreateSimpleChange, ChangeSimpleChange, RemoveSimpleChange, getSimpleChangeFromApi,
 } from "../api/webpage"
import { 
    successSaveAbout, successDeleteAbout, successUpdateAbout, successGetAbout,
    successSaveLinkGroup, successDeleteLinkGroup, successUpdateLinkGroup, successGetLinkGroup,
    successSaveUsefulLinks, successDeleteUsefulLinks, successUpdateUsefulLinks, successGetUsefulLinks,
    successSavePublication, successDeletePublication, successUpdatePublication, successGetPublication,
    successSaveMember, successDeleteMember, successUpdateMember, successGetMember,
    successSaveSimpleChange, successDeleteSimpleChange, successUpdateSimpleChange, successGetSimpleChange,
 } from "../actions/webpage"
import { hideAuthLoader, hideModal } from "../actions/common"

import {
     REQUEST_GET_ABOUT, REQUEST_SAVE_ABOUT, REQUEST_DELETE_ABOUT, REQUEST_UPDATE_ABOUT,
     REQUEST_GET_LINKGROUP, REQUEST_SAVE_LINKGROUP, REQUEST_DELETE_LINKGROUP, REQUEST_UPDATE_LINKGROUP,
     REQUEST_GET_USEFULLINKS, REQUEST_SAVE_USEFULLINKS, REQUEST_DELETE_USEFULLINKS, REQUEST_UPDATE_USEFULLINKS,
     REQUEST_GET_PUBLICATION, REQUEST_SAVE_PUBLICATION, REQUEST_DELETE_PUBLICATION, REQUEST_UPDATE_PUBLICATION,
     REQUEST_GET_MEMBER, REQUEST_SAVE_MEMBER, REQUEST_DELETE_MEMBER, REQUEST_UPDATE_MEMBER,
     REQUEST_GET_SIMPLECHANGE, REQUEST_SAVE_SIMPLECHANGE, REQUEST_DELETE_SIMPLECHANGE, REQUEST_UPDATE_SIMPLECHANGE,
 } from '../actions/constants';

import openNotificationWithIcon from 'components/Alert/notification';

function* GetAboutHandler({ payload }) {
    const res = yield call(getAboutFromApi, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    if (res.status === 200) {
        yield put(successGetAbout({ aboutLists: res.data.result }))
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* SaveAboutHandler({ payload }) {
    const res = yield call(CreateAbout, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successSaveAbout(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Saved Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* UpdateAboutHandler({ payload }) {
    const res = yield call(ChangeAbout, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successUpdateAbout(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Updated Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}

function* DeleteAboutHandler({ payload }) {
    const res = yield call(RemoveAbout, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successDeleteAbout(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Deleted Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* GetLinkGroupHandler({ payload }) {
    const res = yield call(getLinkGroupFromApi, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    if (res.status === 200) {
        yield put(successGetLinkGroup({ linkGroupLists: res.data.result }))
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* SaveLinkGroupHandler({ payload }) {
    const res = yield call(CreateLinkGroup, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successSaveLinkGroup(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Saved Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* UpdateLinkGroupHandler({ payload }) {
    const res = yield call(ChangeLinkGroup, sessionStorage.getItem('token'), payload)
    console.log(res)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successUpdateLinkGroup(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Updated Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}

function* DeleteLinkGroupHandler({ payload }) {
    const res = yield call(RemoveLinkGroup, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successDeleteLinkGroup(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Deleted Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* GetUsefulLinksHandler({ payload }) {
    const res = yield call(getUsefulLinksFromApi, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    if (res.status === 200) {
        yield put(successGetUsefulLinks({ usefulLinkLists: res.data.result }))
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* SaveUsefulLinksHandler({ payload }) {
    const res = yield call(CreateUsefulLinks, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successSaveUsefulLinks(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Saved Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* UpdateUsefulLinksHandler({ payload }) {
    const res = yield call(ChangeUsefulLinks, sessionStorage.getItem('token'), payload)
    console.log(res)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successUpdateUsefulLinks(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Updated Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}

function* DeleteUsefulLinksHandler({ payload }) {
    const res = yield call(RemoveUsefulLinks, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successDeleteUsefulLinks(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Deleted Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}



function* GetPublicationHandler({ payload }) {
    const res = yield call(getPublicationFromApi, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    if (res.status === 200) {
        yield put(successGetPublication({ publicationLists: res.data.result }))
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* SavePublicationHandler({ payload }) {
    const res = yield call(CreatePublication, sessionStorage.getItem('token'), payload)
    console.log(res)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successSavePublication(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Saved Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* UpdatePublicationHandler({ payload }) {
    const res = yield call(ChangePublication, sessionStorage.getItem('token'), payload)
    console.log(res)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successUpdatePublication(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Updated Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}

function* DeletePublicationHandler({ payload }) {
    const res = yield call(RemovePublication, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successDeletePublication(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Deleted Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* GetMemberHandler({ payload }) {
    const res = yield call(getMemberFromApi, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    if (res.status === 200) {
        yield put(successGetMember({ memberLists: res.data.result }))
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* SaveMemberHandler({ payload }) {
    const res = yield call(CreateMember, sessionStorage.getItem('token'), payload)
    console.log(res)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successSaveMember(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Saved Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* UpdateMemberHandler({ payload }) {
    const res = yield call(ChangeMember, sessionStorage.getItem('token'), payload)
    console.log(res)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successUpdateMember(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Updated Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}

function* DeleteMemberHandler({ payload }) {
    const res = yield call(RemoveMember, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successDeleteMember(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Deleted Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* GetSimpleChangeHandler({ payload }) {
    const res = yield call(getSimpleChangeFromApi, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    if (res.status === 200) {
        yield put(successGetSimpleChange({ simplechangeLists: res.data.result }))
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* SaveSimpleChangeHandler({ payload }) {
    const res = yield call(CreateSimpleChange, sessionStorage.getItem('token'), payload)
    console.log(res)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successSaveSimpleChange(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Saved Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}


function* UpdateSimpleChangeHandler({ payload }) {
    const res = yield call(ChangeSimpleChange, sessionStorage.getItem('token'), payload)
    console.log(res)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successUpdateSimpleChange(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Updated Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}

function* DeleteSimpleChangeHandler({ payload }) {
    const res = yield call(RemoveSimpleChange, sessionStorage.getItem('token'), payload)
    yield put(hideAuthLoader())
    yield put(hideModal())
    if (res.status === 201) {
        yield put(successDeleteSimpleChange(res.data.result))
        openNotificationWithIcon("success", 'Success', 'Record Deleted Successfully')
    }
    else {
        openNotificationWithIcon('error', 'Error', res.error)
    }
}




export function* ActionWatchers() {
    yield takeEvery(REQUEST_GET_ABOUT, GetAboutHandler)
    yield takeEvery(REQUEST_SAVE_ABOUT, SaveAboutHandler)
    yield takeEvery(REQUEST_DELETE_ABOUT, DeleteAboutHandler)
    yield takeEvery(REQUEST_UPDATE_ABOUT, UpdateAboutHandler)

     yield takeEvery(REQUEST_GET_LINKGROUP, GetLinkGroupHandler)
    yield takeEvery(REQUEST_SAVE_LINKGROUP, SaveLinkGroupHandler)
    yield takeEvery(REQUEST_DELETE_LINKGROUP, DeleteLinkGroupHandler)
    yield takeEvery(REQUEST_UPDATE_LINKGROUP, UpdateLinkGroupHandler)
    
     yield takeEvery(REQUEST_GET_USEFULLINKS, GetUsefulLinksHandler)
    yield takeEvery(REQUEST_SAVE_USEFULLINKS, SaveUsefulLinksHandler)
    yield takeEvery(REQUEST_DELETE_USEFULLINKS, DeleteUsefulLinksHandler)
    yield takeEvery(REQUEST_UPDATE_USEFULLINKS, UpdateUsefulLinksHandler)
    
     yield takeEvery(REQUEST_GET_PUBLICATION, GetPublicationHandler)
    yield takeEvery(REQUEST_SAVE_PUBLICATION, SavePublicationHandler)
    yield takeEvery(REQUEST_DELETE_PUBLICATION, DeletePublicationHandler)
    yield takeEvery(REQUEST_UPDATE_PUBLICATION, UpdatePublicationHandler)
    
     yield takeEvery(REQUEST_GET_MEMBER, GetMemberHandler)
    yield takeEvery(REQUEST_SAVE_MEMBER, SaveMemberHandler)
    yield takeEvery(REQUEST_DELETE_MEMBER, DeleteMemberHandler)
    yield takeEvery(REQUEST_UPDATE_MEMBER, UpdateMemberHandler)

     yield takeEvery(REQUEST_GET_SIMPLECHANGE, GetSimpleChangeHandler)
    yield takeEvery(REQUEST_SAVE_SIMPLECHANGE, SaveSimpleChangeHandler)
    yield takeEvery(REQUEST_DELETE_SIMPLECHANGE, DeleteSimpleChangeHandler)
    yield takeEvery(REQUEST_UPDATE_SIMPLECHANGE, UpdateSimpleChangeHandler)
    
}

export default function* rootSaga() {
    yield all([
        //  fork(LoadWatchers),
        fork(ActionWatchers),
    ]);
}