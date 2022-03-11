import API from "./root";

export function* Login(data) {
  try {
    return yield API().post(`/users/login`, { ...data });
  } catch (error) {
    return yield error.response;
  }
}
export function* Logout(token, data) {
  try {
    return yield API().post(
      `/users/logout`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* UpdatePassword(token, id, data) {
  try {
    return yield API().patch(
      `/users/${id}/changepwd`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* ResetPswd(token, email, data) {
  try {
    return yield API().patch(
      `/users/${email}/resetpwd`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* UpdateUser(token, id, data) {
  try {
    return yield API().patch(
      `/users/${id}`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* getUsersFromApi(token, { company_id, del_flg }) {
  const params = new URLSearchParams();
  params.append("company_id", company_id);
  try {
    return yield API().get(`/users/${del_flg}`, {
      params,
      headers: { Authorization: "Bearer " + token },
    });
  } catch (error) {
    return yield error.response;
  }
}

export function* getSMSBalFromApi(token) {
  try {
    return yield API().get(`/companies/sms/balance`, {
      headers: { Authorization: "Bearer " + token },
    });
  } catch (error) {
    return yield error.response;
  }
}

export function* getBranchesFromApi(token, { del_flg, company_id }) {
  try {
    return yield API().get(`/companies/branch/${company_id}/${del_flg}`, {
      headers: { Authorization: "Bearer " + token },
    });
  } catch (error) {
    return yield error.response;
  }
}

export function* CreateBranch(token, data) {
  try {
    return yield API().post(
      `/companies/branch`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* ChangeBranch(token, data) {
  // console.log(data)
  try {
    return yield API().patch(
      `/companies/branch/${data.id}`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* RemoveBranch(token, data) {
  try {
    return yield API().patch(
      `/companies/branch/${data.id}/soft`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* RemoveUser(token, data) {
  try {
    return yield API().patch(
      `/users/${data.id}/hard`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* CreateUser(token, data) {
  try {
    return yield API().post(
      `/users`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* getRoleFromApi(token, { branch_id, company_id, del_flg }) {
  const params = new URLSearchParams();
  params.append("company_id", company_id);
  //    params.append('branch_id', branch_id)
  try {
    return yield API().get(`/users/${del_flg}/roles`, {
      params,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    return yield error.response;
  }
}

export function* CreateRole(token, data) {
  try {
    return yield API().post(
      `/users/role`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* ChangeRole(token, data) {
  // console.log(data)
  try {
    return yield API().patch(
      `/users/role/${data.id}`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* RemoveRole(token, data) {
  try {
    return yield API().patch(
      `/users/role/${data.id}/soft`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* getPermissionFromApi(
  token,
  { branch_id, company_id, del_flg }
) {
  const params = new URLSearchParams();
  params.append("company_id", company_id);
  params.append("branch_id", branch_id);
  try {
    return yield API().get(`/users/${del_flg}/permissions`, {
      params,
      headers: { Authorization: "Bearer " + token },
    });
  } catch (error) {
    return yield error.response;
  }
}

export function* CreatePermission(token, data) {
  try {
    return yield API().post(
      `/users/permission`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* ChangePermission(token, data) {
  // console.log(data)
  try {
    return yield API().patch(
      `/users/permission/${data.id}`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}

export function* RemovePermission(token, data) {
  try {
    return yield API().patch(
      `/users/permission/${data.id}/soft`,
      { ...data },
      { headers: { Authorization: "Bearer " + token } }
    );
  } catch (error) {
    return yield error.response;
  }
}
