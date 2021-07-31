import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Popover } from "antd";
import { signOutUser } from "appRedux/actions/auth";

import moment from "moment"

import { useHistory, Link } from 'react-router-dom';
import profile from "assets/img/profile.jpg"
const UserInfo = ({ width }) => {
  const { user, authUser } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = async () => {


    dispatch(signOutUser())
    // history.replace({ pathname: '/login', })
  }
  const userMenuOptions = (
    <div>
      <div className="gx-popover-header gx-mb-2 gx-flex-column">
        <h3 className="gx-mb-0">{user.fullname}</h3>
        <small>({user.email})</small>
        <small>Tel:{user.telephone}</small>
      </div>
      <ul className="gx-user-popover">
        <li>  <Link to="/profile"> Edit Profile</Link> </li>
        <li>  <Link to="/chg"> Change Password</Link> </li>
        <li onClick={handleLogout}>Logout </li>
      </ul>
    </div>
  )


  return (
    <div className="gx-flex-row gx-align-items-center  gx-avatar-row">
      <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar src={user.profile ? user.profile : profile}
          className={width ? `gx-size-40 gx-pointer gx-mr-3` : `gx-size-30 gx-pointer gx-mr-3`} alt={user.fullname} />
        {
          width ?
            <span className="gx-avatar-name"> {user.fullname} <i
              className="icon icon-chevron-down gx-fs-xxs gx-ml-2" /></span>
            : <span className="">  </span>
        }
      </Popover>
    </div>
  )
};

export default UserInfo;
