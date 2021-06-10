import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import chipLogo from "images/finallogo.png"
//import chipLogo from "images/finallogo-d.png"
import { onNavStyleChange, toggleCollapsedSideNav } from "appRedux/actions/Setting";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import {
    NAV_STYLE_DRAWER,
    NAV_STYLE_FIXED,
    NAV_STYLE_MINI_SIDEBAR,
    NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    TAB_SIZE,
    THEME_TYPE_LITE
} from "appRedux/actions/ThemeSetting";
import FindActiveAssets from "ActiveAssets/assets.js"
const SidebarLogo = () => {
    const dispatch = useDispatch();
    const { width, themeType } = useSelector(({ settings }) => settings);
    const { navCollapsed } = useSelector(({ common }) => common);
    let navStyle = useSelector(({ settings }) => settings.navStyle);
    if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
        navStyle = NAV_STYLE_DRAWER;
    }
    return (
        <div className="gx-layout-sider-header">
            {(navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) ? <div className="gx-linebar">
                {React.createElement(navStyle === NAV_STYLE_MINI_SIDEBAR ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'menu-trigger',
                    onClick: () => {
                        if (navStyle === NAV_STYLE_DRAWER) {
                            dispatch(toggleCollapsedSideNav(!navCollapsed));
                        } else if (navStyle === NAV_STYLE_FIXED) {
                            dispatch(onNavStyleChange(NAV_STYLE_MINI_SIDEBAR))
                        } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
                            dispatch(toggleCollapsedSideNav(!navCollapsed));
                        } else {
                            dispatch(onNavStyleChange(NAV_STYLE_FIXED))
                        }
                    },
                })}
            </div> : null}

            <Link to="/" className="gx-site-logo">
                {navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && width >= TAB_SIZE ?
                    <img alt="lo" src={FindActiveAssets().sidebar_logo} /> :
                    themeType === THEME_TYPE_LITE ?
                        <img alt="logo1" src={FindActiveAssets().sidebar_logo} /> :
                        <img alt="logo2" src={FindActiveAssets().sidebar_logo} />}
            </Link>
        </div>
    );
};

export default SidebarLogo;