import {
  all,
  call,
  fork,
  put,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";

import {
  SIGNIN_USER,
  SIGNOUT_USER,
  REQUEST_UPDATEPASSWORD,
  REQUEST_UPDATEUSER,
  REQUEST_GET_BRANCH,
  REQUEST_DELETE_USER,
  REQUEST_GET_USERS,
  REQUEST_RESETPASSWORD,
  REQUEST_DELETE_BRANCH,
  REQUEST_UPDATE_BRANCH,
  REQUEST_SAVE_BRANCH,
  REQUEST_GET_ROLE,
  REQUEST_SAVE_USER,
  REQUEST_UPDATEUSERS,
  REQUEST_SMSBAL,
  REQUEST_GET_PERMISSION,
  REQUEST_SAVE_ROLE,
  REQUEST_UPDATE_ROLE,
  REQUEST_DELETE_ROLE,
  REQUEST_SAVE_PERMISSION,
  REQUEST_UPDATE_PERMISSION,
  REQUEST_DELETE_PERMISSION,
  GHOST_TO,
} from "../actions/constants";
import {
  signInUserSuccess,
  signOutUserSuccess,
  successGetBranch,
  successUpdatePassword,
  successUpdateUser,
  successUpdateUsers,
  successGetUsers,
  successResetPassword,
  successDeleteBranch,
  successUpdateBranch,
  successSaveBranch,
  successGetRole,
  successSaveUser,
  successDeleteUser,
  CheckSMSBalSuccess,
  successSaveRole,
  successUpdateRole,
  successDeleteRole,
  successGetPermission,
  successSavePermission,
  successUpdatePermission,
  successDeletePermission,
  ghostToSuccess,
} from "../actions/auth";
import { hideAuthLoader, hideModal } from "../actions/common";
import {
  Login,
  Logout,
  UpdatePassword,
  UpdateUser,
  getBranchesFromApi,
  getUsersFromApi,
  ResetPswd,
  CreateBranch,
  ChangeBranch,
  RemoveBranch,
  getRoleFromApi,
  CreateUser,
  RemoveUser,
  getSMSBalFromApi,
  CreateRole,
  RemoveRole,
  ChangeRole,
  getPermissionFromApi,
  ChangePermission,
  RemovePermission,
  CreatePermission,
} from "../api/users";
import jwtDecode from "jwt-decode";
import AlertMessage from "components/Alert/message";
import openNotificationWithIcon from "components/Alert/notification";
function* LoginUser(data) {
  return yield Login(data);
}
function* SignInUserHandler({ payload }) {
  try {
    const signInUser = yield call(LoginUser, payload);

    if (signInUser) {
      if (signInUser.status === 200) {
        yield put(hideAuthLoader());
        const token = signInUser.data.token;
        const decode = jwtDecode(token);
        const user = { ...decode };
        const authUser = yield user.id;
        yield sessionStorage.setItem("role_id", user.role_id);
        yield sessionStorage.setItem("user_id", authUser);
        yield sessionStorage.setItem("token", token);
        yield sessionStorage.setItem("user_info", JSON.stringify(user));
        yield put(signInUserSuccess({ authUser, user, role_id: user.role_id }));
      } else {
        yield put(hideAuthLoader());
        openNotificationWithIcon("error", "Error", signInUser.data.message);
      }
    } else {
      yield put(hideAuthLoader());
      openNotificationWithIcon(
        "error",
        "Internet Error",
        "Check your Internet, Cannot Load Information Due to No Internet"
      );
    }
  } catch (error) {
    // yield put(showAuthMessage(error));
    openNotificationWithIcon(
      "error",
      "Internet Error",
      "Check your Internet, Cannot Load Information Due to No Internet"
    );
  }
}

function* ghostToBranchHandler({ payload }) {
  const user = payload;
  yield sessionStorage.setItem("user_info", JSON.stringify(user));
  yield put(ghostToSuccess({ user }));
}

function* signOut({ payload }) {
  try {
    yield put(signOutUserSuccess(undefined));
    yield put(hideAuthLoader());
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("user_info");
    sessionStorage.removeItem("role_id");
    const user = yield call(Logout, sessionStorage.getItem("token"), payload);
    sessionStorage.removeItem("token");
    //   console.log(user)
    if (user.status === 200) {
      yield AlertMessage("success", user.data.message, "success", 2);
    }
  } catch (error) {
    //  yield put(showAuthMessage(error));
  }
}

function* chgPwd(data) {
  return yield UpdatePassword(sessionStorage.getItem("token"), data.id, data);
}

function* ChangePasswordHandler({ payload }) {
  const res = yield call(chgPwd, payload);
  yield put(hideAuthLoader());
  if (res.status === 201) {
    yield put(successUpdatePassword(res.data.result));
    openNotificationWithIcon("success", "Success", "Record Saved Successfully");
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

function* ResetPwdHandler({ payload }) {
  const res = yield call(
    ResetPswd,
    sessionStorage.getItem("token"),
    payload.email,
    payload
  );
  yield put(hideAuthLoader());
  if (res.status === 201) {
    yield put(successResetPassword(res.data.result));
    openNotificationWithIcon(
      "success",
      "Success",
      "Check your Email for New Password"
    );
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

function* UpdateExistUser(data) {
  return yield UpdateUser(sessionStorage.getItem("token"), data.id, data);
}

function* UpdateUserInfoHandler({ payload }) {
  const res = yield call(UpdateExistUser, payload);
  //   console.log(res)
  yield put(hideAuthLoader());
  if (res.status === 201) {
    if (
      parseInt(res.data.user.id) === parseInt(sessionStorage.getItem("user_id"))
    ) {
      yield sessionStorage.setItem("user_info", JSON.stringify(res.data.user));
      yield put(successUpdateUser(res.data.user));
    }
    yield put(successUpdateUsers(res.data.user));
    openNotificationWithIcon("success", "Success", "Record Saved Successfully");
    yield put(hideModal());
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

function* UpdateUsersInfoHandler({ payload }) {
  const res = yield call(UpdateExistUser, payload);
  // console.log(res)
  yield put(hideAuthLoader());
  if (res.status === 201) {
    yield put(successUpdateUsers(res.data.user));
    openNotificationWithIcon("success", "Success", "Record Saved Successfully");
    yield put(hideModal());
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

function* SMSBalHandler() {
  let res = yield call(getSMSBalFromApi, sessionStorage.getItem("token"));
  if (res) {
    if (res.status === 200) {
      yield put(CheckSMSBalSuccess({ smsbal: res.data.balance }));
      yield put(hideAuthLoader());
    } else {
      openNotificationWithIcon("error", "Error", res.error);
    }
  } else {
    openNotificationWithIcon(
      "error",
      "Internet Error",
      "Check your Internet, Cannot Load Information Due to No Internet"
    );
  }
}
function* GetUsersHandler({ payload }) {
  let res = yield call(
    getUsersFromApi,
    sessionStorage.getItem("token"),
    payload
  );

  if (res) {
    if (res.status === 200) {
      yield put(
        successGetUsers({
          userLists: res.data.result,
        })
      );
      yield put(hideAuthLoader());
    } else {
      openNotificationWithIcon("error", "Error", res.error);
    }
  } else {
    openNotificationWithIcon(
      "error",
      "Internet Error",
      "Check your Internet, Cannot Load Information Due to No Internet"
    );
  }
}

function* GetRolesHandler({ payload }) {
  let res = yield call(
    getRoleFromApi,
    sessionStorage.getItem("token"),
    payload
  );
  // console.log(res)
  if (res) {
    if (res.status === 200) {
      yield put(
        successGetRole({
          roleLists: res.data.result,
        })
      );
      yield put(hideAuthLoader());
    } else {
      openNotificationWithIcon("error", "Error", res.error);
    }
  } else {
    openNotificationWithIcon(
      "error",
      "Internet Error",
      "Check your Internet, Cannot Load Information Due to No Internet"
    );
  }
}

function* GetBranchHandler({ payload }) {
  let res = yield call(
    getBranchesFromApi,
    sessionStorage.getItem("token"),
    payload
  );
  // console.log(res)
  if (res) {
    if (res.status === 200) {
      yield put(
        successGetBranch({
          branchLists: res.data.branch,
        })
      );
      yield put(hideAuthLoader());
    } else {
      openNotificationWithIcon("error", "Error", res.error);
    }
  } else {
    openNotificationWithIcon(
      "error",
      "Internet Error",
      "Check your Internet, Cannot Load Information Due to No Internet"
    );
  }
}

function* SaveBranchHandler({ payload }) {
  const branch = yield call(
    CreateBranch,
    sessionStorage.getItem("token"),
    payload
  );
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (branch.status === 201) {
    yield put(successSaveBranch(branch.data.branch));
    openNotificationWithIcon("success", "Success", "Record Saved Successfully");
  } else if (branch.status === 422) {
    openNotificationWithIcon("error", "Error", branch.data.message);
  } else {
    openNotificationWithIcon("error", "Error", branch.error);
  }
}

function* UpdateBranchHandler({ payload }) {
  const branch = yield call(
    ChangeBranch,
    sessionStorage.getItem("token"),
    payload
  );
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (branch.status === 201) {
    yield put(successUpdateBranch(branch.data.branch));
    openNotificationWithIcon(
      "success",
      "Success",
      "Record Updated Successfully"
    );
  } else {
    openNotificationWithIcon("error", "Error", branch.error);
  }
}

function* DeleteBranchHandler({ payload }) {
  const branch = yield call(
    RemoveBranch,
    sessionStorage.getItem("token"),
    payload
  );
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (branch.status === 201) {
    yield put(successDeleteBranch(branch.data.branch));
    openNotificationWithIcon(
      "success",
      "Success",
      "Record Deleted Successfully"
    );
  } else {
    openNotificationWithIcon("error", "Error", branch.error);
  }
}

function* SaveUserHandler({ payload }) {
  const branch = yield call(
    CreateUser,
    sessionStorage.getItem("token"),
    payload
  );
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (branch.status === 201) {
    yield put(successSaveUser(branch.data.result));
    openNotificationWithIcon("success", "Success", "Record Saved Successfully");
  } else if (branch.status === 422) {
    openNotificationWithIcon("error", "Error", branch.data.message);
  } else {
    openNotificationWithIcon("error", "Error", branch.error);
  }
}

function* DeleteUserHandler({ payload }) {
  const branch = yield call(
    RemoveUser,
    sessionStorage.getItem("token"),
    payload
  );
  //   console.log(branch, payload);
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (branch.status === 201) {
    yield put(successDeleteUser(branch.data.user));
    openNotificationWithIcon(
      "success",
      "Success",
      "Record Deleted Successfully"
    );
  } else {
    openNotificationWithIcon("error", "Error", branch.error);
  }
}

function* GetRoleHandler({ payload }) {
  let res = yield call(
    getRoleFromApi,
    sessionStorage.getItem("token"),
    payload
  );

  if (res) {
    if (res.status === 200) {
      yield put(
        successGetRole({
          roleLists: res.data.result,
        })
      );
      yield put(hideAuthLoader());
    } else {
      openNotificationWithIcon("error", "Error", res.error);
    }
  } else {
    openNotificationWithIcon(
      "error",
      "Internet Error",
      "Check your Internet, Cannot Load Information Due to No Internet"
    );
  }
}

function* SaveRoleHandler({ payload }) {
  // console.log(payload)
  const res = yield call(CreateRole, sessionStorage.getItem("token"), payload);
  // console.log(res)
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (res.status === 201) {
    yield put(successSaveRole(res.data.result));
    openNotificationWithIcon("success", "Success", "Record Saved Successfully");
  } else if (res.status === 422) {
    openNotificationWithIcon("error", "Error", res.data.message);
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

function* UpdateRoleHandler({ payload }) {
  const res = yield call(ChangeRole, sessionStorage.getItem("token"), payload);
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (res.status === 201) {
    yield put(successUpdateRole(res.data.result));
    openNotificationWithIcon(
      "success",
      "Success",
      "Record Updated Successfully"
    );
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

function* DeleteRoleHandler({ payload }) {
  const res = yield call(RemoveRole, sessionStorage.getItem("token"), payload);
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (res.status === 201) {
    yield put(successDeleteRole(res.data.result));
    openNotificationWithIcon(
      "success",
      "Success",
      "Record Deleted Successfully"
    );
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

function* GetPermissionHandler({ payload }) {
  let res = yield call(
    getPermissionFromApi,
    sessionStorage.getItem("token"),
    payload
  );
  //  console.log(res)
  if (res) {
    if (res.status === 200) {
      yield put(
        successGetPermission({
          permissionLists: res.data.result,
        })
      );
      yield put(hideAuthLoader());
    } else {
      openNotificationWithIcon("error", "Error", res.error);
    }
  } else {
    openNotificationWithIcon(
      "error",
      "Internet Error",
      "Check your Internet, Cannot Load Information Due to No Internet"
    );
  }
}

function* SavePermissionHandler({ payload }) {
  const res = yield call(
    CreatePermission,
    sessionStorage.getItem("token"),
    payload
  );

  yield put(hideAuthLoader());
  yield put(hideModal());
  if (res.status === 201) {
    yield put(successSavePermission(res.data.result));
    openNotificationWithIcon("success", "Success", "Record Saved Successfully");
  } else if (res.status === 422) {
    openNotificationWithIcon("error", "Error", res.data.message);
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

function* UpdatePermissionHandler({ payload }) {
  const res = yield call(
    ChangePermission,
    sessionStorage.getItem("token"),
    payload
  );
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (res.status === 201) {
    yield put(successUpdatePermission(res.data.result));
    openNotificationWithIcon(
      "success",
      "Success",
      "Record Updated Successfully"
    );
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

function* DeletePermissionHandler({ payload }) {
  const res = yield call(
    RemovePermission,
    sessionStorage.getItem("token"),
    payload
  );
  yield put(hideAuthLoader());
  yield put(hideModal());
  if (res.status === 201) {
    yield put(successDeletePermission(res.data.result));
    openNotificationWithIcon(
      "success",
      "Success",
      "Record Deleted Successfully"
    );
  } else {
    openNotificationWithIcon("error", "Error", res.error);
  }
}

export function* signInUser() {
  yield takeLatest(SIGNIN_USER, SignInUserHandler);
}

export function* signOutUser() {
  yield takeLatest(SIGNOUT_USER, signOut);
}

export function* UsersWatcher() {
  yield takeEvery(REQUEST_UPDATEPASSWORD, ChangePasswordHandler);
  yield takeEvery(REQUEST_RESETPASSWORD, ResetPwdHandler);
  yield takeEvery(REQUEST_UPDATEUSER, UpdateUserInfoHandler);
  yield takeEvery(REQUEST_UPDATEUSERS, UpdateUsersInfoHandler);
  yield takeEvery(REQUEST_GET_USERS, GetUsersHandler);
  yield takeEvery(REQUEST_SMSBAL, SMSBalHandler);
  yield takeEvery(REQUEST_GET_BRANCH, GetBranchHandler);
  yield takeEvery(REQUEST_GET_ROLE, GetRolesHandler);
  yield takeEvery(REQUEST_SAVE_BRANCH, SaveBranchHandler);
  yield takeEvery(REQUEST_SAVE_USER, SaveUserHandler);
  yield takeEvery(REQUEST_UPDATE_BRANCH, UpdateBranchHandler);
  yield takeEvery(REQUEST_DELETE_BRANCH, DeleteBranchHandler);
  yield takeEvery(REQUEST_DELETE_USER, DeleteUserHandler);
}

function* LoadWatchers() {
  yield takeEvery(REQUEST_GET_ROLE, GetRoleHandler);
  yield takeEvery(REQUEST_GET_PERMISSION, GetPermissionHandler);
}

export function* ActionWatchers() {
  yield takeEvery(REQUEST_SAVE_ROLE, SaveRoleHandler);
  yield takeEvery(REQUEST_UPDATE_ROLE, UpdateRoleHandler);
  yield takeEvery(REQUEST_DELETE_ROLE, DeleteRoleHandler);

  yield takeEvery(REQUEST_SAVE_PERMISSION, SavePermissionHandler);
  yield takeEvery(REQUEST_UPDATE_PERMISSION, UpdatePermissionHandler);
  yield takeEvery(REQUEST_DELETE_PERMISSION, DeletePermissionHandler);
  yield takeLatest(GHOST_TO, ghostToBranchHandler);
}
export default function* rootSaga() {
  yield all([
    fork(signInUser),
    fork(signOutUser),
    fork(UsersWatcher),
    fork(LoadWatchers),
    fork(ActionWatchers),
  ]);
}
