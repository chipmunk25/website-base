import API from './root';

export function* getAboutFromApi(token, { company_id, del_flg }) {
    const params = new URLSearchParams();
    params.append('company_id', company_id)

    try {
        return yield API().get(`/about/${del_flg}`, { params, headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* CreateAbout(token, data) {
    try {
        let withOrWithoutImage
        if (data.aboutImage === null || data.aboutImage === "null") {
            withOrWithoutImage = yield API().post(`/about`, {
                ...data
            }, { headers: { Authorization: "Bearer " + token } })
        } else {
            var form_data = new FormData();
            if (data.id) {
                form_data.append("id", data.id.toString() )
                //form_data.append("id", data.id ? data.id.toString() : 0)

            }
            form_data.append("title", data.title)
           // form_data.append("id", data.id ? data.id.toString() : 0)
            form_data.append("description", data.description)
            form_data.append("filepath", data.filepath)
            form_data.append("subtitle", data.subtitle)
            form_data.append("group_name", data.group_name)
            form_data.append("company_id", data.company_id.toString())
            form_data.append("del_flg", data.del_flg.toString())
            form_data.append("created_user", data.created_user.toString())
            form_data.append('avatar', data.aboutImage.fileList[0].originFileObj);
            withOrWithoutImage = yield API().post(`/about`, form_data,
                { headers: { Authorization: "Bearer " + token } })
        }
        return withOrWithoutImage
    } catch (error) {
        return yield error.response
    }
}


export function* ChangeAbout(token, data) {
    try {
        return yield API().patch(`/about/${data.id}`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* RemoveAbout(token, data) {
    try {
        return yield API().patch(`/about/${data.id}/soft`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* getMastheadFromApi(token, { company_id, del_flg }) {
    const params = new URLSearchParams();
    params.append('company_id', company_id)

    try {
        return yield API().get(`/masthead/${del_flg}`, { params, headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* CreateMasthead(token, data) {
    try {
        let withOrWithoutImage
        if (data.aboutImage === null || data.aboutImage === "null") {
            withOrWithoutImage = yield API().post(`/masthead`, {
                ...data
            }, { headers: { Authorization: "Bearer " + token } })
        } else {
            var form_data = new FormData();
            if (data.id) {
                form_data.append("id", data.id.toString() )
                //form_data.append("id", data.id ? data.id.toString() : 0)

            }
            form_data.append("title", data.title)
           // form_data.append("id", data.id ? data.id.toString() : 0)
            form_data.append("description", data.description)
            form_data.append("filepath", data.filepath)
            form_data.append("subtitle", data.subtitle)
            form_data.append("group_name", data.group_name)
            form_data.append("company_id", data.company_id.toString())
            form_data.append("del_flg", data.del_flg.toString())
            form_data.append("created_user", data.created_user.toString())
            form_data.append('avatar', data.aboutImage.fileList[0].originFileObj);
            withOrWithoutImage = yield API().post(`/masthead`, form_data,
                { headers: { Authorization: "Bearer " + token } })
        }
        return withOrWithoutImage
    } catch (error) {
        return yield error.response
    }
}


export function* ChangeMasthead(token, data) {
    try {
        return yield API().patch(`/masthead/${data.id}`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* RemoveMasthead(token, data) {
    try {
        return yield API().patch(`/masthead/${data.id}/soft`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* getLinkGroupFromApi(token, { company_id, del_flg }) {
    const params = new URLSearchParams();
    params.append('company_id', company_id)

    try {
        return yield API().get(`/linkgroup/${del_flg}`, { params, headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* CreateLinkGroup(token, data) {
    try {
        return yield API().post(`/linkgroup`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* ChangeLinkGroup(token, data) {
    try {
        return yield API().patch(`/linkgroup/${data.id}`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* RemoveLinkGroup(token, data) {
    try {
        return yield API().patch(`/linkgroup/${data.id}/soft`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* getUsefulLinksFromApi(token, { company_id, del_flg }) {
    const params = new URLSearchParams();
    params.append('company_id', company_id)

    try {
        return yield API().get(`/usefulLinks/${del_flg}`, { params, headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* CreateUsefulLinks(token, data) {
    try {
        return yield API().post(`/usefulLinks`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* ChangeUsefulLinks(token, data) {
    try {
        return yield API().patch(`/usefulLinks/${data.id}`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* RemoveUsefulLinks(token, data) {
    try {
        return yield API().patch(`/usefulLinks/${data.id}/soft`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}


export function* getPublicationFromApi(token, { company_id, del_flg }) {
    const params = new URLSearchParams();
    params.append('company_id', company_id)

    try {
        return yield API().get(`/publications/${del_flg}`, { params, headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* CreatePublication(token, data) {
    //  console.log(data)
    try {
        let withOrWithoutImage
        if (data.aboutImage === null || data.aboutImage === "null") {
            withOrWithoutImage = yield API().post(`/publications`, {
                ...data
            }, { headers: { Authorization: "Bearer " + token } })
        } else {
            //console.log(data)
            var form_data = new FormData();
            if (data.id) {
                form_data.append("id", data.id.toString() )
                //form_data.append("id", data.id ? data.id.toString() : 0)

            }
            form_data.append("title", data.title)
           // form_data.append("id", data.id ? data.id.toString() : 0)
            form_data.append("group_name", data.group_name)
            form_data.append("doc_number", data.doc_number)
            form_data.append("description", data.description)
            form_data.append("access_type", data.access_type)
            form_data.append("company_id", data.company_id.toString())
            form_data.append("link_group_id", data.link_group_id.toString())
            form_data.append("del_flg", data.del_flg.toString())
            form_data.append("created_user", data.created_user.toString())/* */
            form_data.append('avatar', data.aboutImage.fileList[0].originFileObj);
            withOrWithoutImage = yield API().post(`/publications`, form_data,
                { headers: { Authorization: "Bearer " + token } })
        }
        return withOrWithoutImage
    } catch (error) {
        return yield error.response
    }
}

export function* ChangePublication(token, data) {
    try {
        return yield API().patch(`/publications/${data.id}`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* RemovePublication(token, data) {
    try {
        return yield API().patch(`/publications/${data.id}/soft`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}


export function* getMemberFromApi(token, { company_id, del_flg }) {
    const params = new URLSearchParams();
    params.append('company_id', company_id)

    try {
        return yield API().get(`/members/${del_flg}`, { params, headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* CreateMember(token, data) {
    //  console.log(data)
    try {
        let withOrWithoutImage
        if (data.aboutImage === null || data.aboutImage === "null") {
            withOrWithoutImage = yield API().post(`/members`, {
                ...data
            }, { headers: { Authorization: "Bearer " + token } })
        } else {
            //console.log(data)
            var form_data = new FormData();
            if (data.id) {
                form_data.append("id", data.id.toString() )
                //form_data.append("id", data.id ? data.id.toString() : 0)
            }
            form_data.append("title", data.title ? data.title : "")
            form_data.append("group_name", data.group_name)
            form_data.append("description", data.description ? data.description : "")
            form_data.append("url", data.url)
            form_data.append("company_id", data.company_id.toString())
            form_data.append("del_flg", data.del_flg.toString())
            form_data.append("created_user", data.created_user.toString())/* */
            form_data.append('avatar', data.aboutImage.fileList[0].originFileObj);
            withOrWithoutImage = yield API().post(`/members`, form_data,
                { headers: { Authorization: "Bearer " + token } })
        }
        return withOrWithoutImage
    } catch (error) {
        return yield error.response
    }
}

export function* ChangeMember(token, data) {
    try {
        return yield API().patch(`/publications/${data.id}`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* RemoveMember(token, data) {
    try {
        return yield API().patch(`/members/${data.id}/soft`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}


export function* getSimpleChangeFromApi(token, { company_id, del_flg }) {
    const params = new URLSearchParams();
    params.append('company_id', company_id)

    try {
        return yield API().get(`/simplechanges/${del_flg}`, { params, headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* CreateSimpleChange(token, data) {
    try {
        return yield API().post(`/simplechanges`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* ChangeSimpleChange(token, data) {
    try {
        return yield API().patch(`/simplechanges/${data.id}`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}

export function* RemoveSimpleChange(token, data) {
    try {
        return yield API().patch(`/simplechanges/${data.id}/soft`, { ...data }, { headers: { Authorization: "Bearer " + token } })
    } catch (error) {
        return yield error.response
    }
}
