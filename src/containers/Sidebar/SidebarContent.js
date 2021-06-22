import React, { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
    DashboardOutlined, UserOutlined, DiffOutlined, DeploymentUnitOutlined,
    AuditOutlined, ApartmentOutlined, AppstoreAddOutlined, ContainerOutlined, BankOutlined, ShopOutlined,
    ReconciliationOutlined, TrademarkOutlined, UsergroupAddOutlined,
    SettingOutlined, LineChartOutlined, SwapOutlined, UngroupOutlined, SplitCellsOutlined, ScheduleOutlined,
    ClockCircleOutlined, WeiboSquareOutlined, GoldOutlined, BookOutlined,
    DotChartOutlined, PoundOutlined, AccountBookOutlined, BarChartOutlined, RiseOutlined, FundOutlined, FallOutlined,
} from '@ant-design/icons';

import CustomScrollbars from "utils/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import _ from "lodash"
//import AppsNavigation from "./AppsNavigation";
//import AppNotification from "components/AppNotification";
//import MailNotification from "components/MailNotification";
import { requestGetRole } from "appRedux/actions/auth"

import {
    NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
    NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    THEME_TYPE_LITE
} from "appRedux/actions/ThemeSetting";
import { FindRolePermissions, FilterMenuByType, convertToUpper } from "utils/GeneralFunctions"
const MenuItemGroup = Menu.ItemGroup;

const SubMenu = Menu.SubMenu;

/* const FindRolePermissions = (arrayList, role_id) => {
    return arrayList && arrayList.find(item => parseInt(item.id) === parseInt(role_id))
}
const FilterMenuByType = (arrayList, parent) => {
    const result = arrayList && arrayList.filter(item => item.permission_m.perm_type === "ROUTE" && convertToUpper(item.permission_m.perm_parent) === convertToUpper(parent))
    return result
} */
const SidebarContent = () => {
    const dispatch = useDispatch()
    let { pathname } = useSelector(({ common }) => common);
    let { navStyle, themeType } = useSelector(({ settings }) => settings);

    const { user, roleLists, role_id } = useSelector(({ auth }) => auth);

    useEffect(() => {
        dispatch(requestGetRole({ company_id: user.company_id, del_flg: 0 }))
    }, [])

    const getNoHeaderClass = (navStyle) => {
        if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
            return "gx-no-header-notifications";
        }
        return "";
    };
    // console.log(roleLists)
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    /* const getNavStyleSubMenuClass = (navStyle) => {
        if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
            return "gx-no-header-submenu-popup";
        }
        return "";
    }; */
    return (
        <>
            <SidebarLogo />
            <div className="gx-sidebar-content">
                <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
                    <UserProfile />
                    {/*   <AppsNavigation /> */}
                </div>
                <CustomScrollbars className="gx-layout-sider-scrollbar">
                    <Menu
                        defaultOpenKeys={[defaultOpenKeys]}
                        selectedKeys={[selectedKeys]}
                        theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
                        mode="inline">
                        {
                                    _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "MAIN"), ["permission_m.permission"]).length > 0 ?
                            <MenuItemGroup key="main" className="gx-menu-group" title={"Main"}>
                                    {_.sortBy(FilterMenuByType(user.role_m ? FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [] : [], "MAIN"), ["permission_m.permission"]).map(item => (
                                        <Menu.Item key={item.permission_id}>
                                            <Link to={item.permission_m.description}>
                                                <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                <span>{item.permission_m.permission}</span></Link>
                                        </Menu.Item>
                                    ))}
                                </MenuItemGroup>
                                : null
                        }
                        {
                            _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "TRANSACTIONS"), ["permission_m.permission"]).length > 0 ||
                                _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PROFOMA"), ["permission_m.permission"]).length > 0
                                ?
                                <MenuItemGroup key="sales" className="gx-menu-group" title={"Transactions"}>
                                    {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "TRANSACTIONS"), ["permission_m.permission"]).map(item => (
                                        <Menu.Item key={item.permission_id}>
                                            <Link to={item.permission_m.description}>
                                                <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                <span>{item.permission_m.permission}</span></Link>
                                        </Menu.Item>
                                    ))}
                                    {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PROFOMA"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="profoma"
                                                title={<span style={{ alignItems: 'center' }}>
                                                    <ScheduleOutlined />
                                                    <span>Profoma </span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PROFOMA"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}
                                            </SubMenu>
                                            : null
                                    }
                                </MenuItemGroup>
                                : null
                        }
                        {
                            _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "WEBPAGE"), ["permission_m.permission"]).length > 0 ?
                                <MenuItemGroup key="webpage" className="gx-menu-group" title={"Webpage"}>
                                    {_.sortBy(FilterMenuByType(user.role_m ? FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [] : [], "WEBPAGE"), ["permission_m.permission"]).map(item => (
                                        <Menu.Item key={item.permission_id}>
                                            <Link to={item.permission_m.description}>
                                                <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                <span>{item.permission_m.permission}</span></Link>
                                        </Menu.Item>
                                    ))}
                                </MenuItemGroup>
                                : null
                        }
                        {
                            _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PRODUCTS"), ["permission_m.permission"]).length > 0 ||
                                _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "STOCK"), ["permission_m.permission"]).length > 0 ||
                                _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "STOCK-MOVE"), ["permission_m.permission"]).length > 0 ||
                                _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "STOCK-AUTH"), ["permission_m.permission"]).length > 0 ||
                                _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "WAREHOUSE"), ["permission_m.permission"]).length > 0 ||
                                _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PEOPLE"), ["permission_m.permission"]).length > 0
                                ?
                                <MenuItemGroup key="management" className="gx-menu-group" title={"Management"}>
                                    {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PRODUCTS"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="products"
                                                title={<span style={{ alignItems: 'center' }}>  <AppstoreAddOutlined />
                                                    <span>Products</span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PRODUCTS"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}
                                            </SubMenu>
                                            : null
                                    }
                                    {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "STOCK"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="stocks"
                                                title={<span style={{ alignItems: 'center' }}> <AuditOutlined />
                                                    <span>Stock </span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "STOCK"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}

                                            </SubMenu>
                                            : null
                                    }  {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "STOCK-MOVE"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="stocks-move"
                                                title={<span style={{ alignItems: 'center' }}> <i className="icon icon-breadcrumb" />
                                                    <span>Movement</span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "STOCK-MOVE"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}

                                            </SubMenu>
                                            : null
                                    }
                                    {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "STOCK-AUTH"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="stocks-auth"
                                                title={<span style={{ alignItems: 'center' }}><i className="icon icon-important" />
                                                    <span>Authorizations</span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "STOCK-AUTH"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}

                                            </SubMenu>
                                            : null
                                    }
                                    {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "WAREHOUSE"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="warehouses"
                                                title={<span style={{ alignItems: 'center' }}> <i className="icon icon-crm" />
                                                    <span>Warehouse</span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "WAREHOUSE"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}

                                            </SubMenu>
                                            : null
                                    }
                                    {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PEOPLE"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="people"
                                                title={<span style={{ alignItems: 'center' }}>  <UsergroupAddOutlined />
                                                    <span>People </span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PEOPLE"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}</SubMenu>

                                            : null
                                    }
                                </MenuItemGroup>
                                : null
                        }
                        {
                            _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PLREPORT"), ["permission_m.permission"]).length > 0 ||
                                _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "RECORDS"), ["permission_m.permission"]).length > 0 ||
                                _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "SALESR"), ["permission_m.permission"]).length > 0
                                ?
                                <MenuItemGroup key="reports" className="gx-menu-group" title={"Reports"}>
                                    {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "SALESR"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="reports"
                                                title={<span style={{ alignItems: 'center' }}>  <LineChartOutlined />
                                                    <span>Sales Reports </span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "SALESR"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}
                                            </SubMenu>
                                            : null
                                    }
                                    {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "RECORDS"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="records"
                                                title={<span style={{ alignItems: 'center' }}>
                                                    <i className="icon icon-data-display" />
                                                    <span>Top Records </span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "RECORDS"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}
                                            </SubMenu>
                                            : null
                                    }

                                    {
                                        _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PLREPORT"), ["permission_m.permission"]).length > 0 ?
                                            <SubMenu key="pl"
                                                title={<span style={{ alignItems: 'center' }}>
                                                    <i className="icon icon-anchor" />
                                                    <span>Income &amp; Expenses </span></span>}>
                                                {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "PLREPORT"), ["permission_m.permission"]).map(item => (
                                                    <Menu.Item key={item.permission_id}>
                                                        <Link to={item.permission_m.description}>
                                                            <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                            <span>{item.permission_m.permission}</span></Link>
                                                    </Menu.Item>
                                                ))}

                                            </SubMenu>
                                            : null
                                    }
                                </MenuItemGroup>
                                : null
                        }

                        {
                            _.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "SETUPS"), ["permission_m.permission"]).length > 0 ?
                                <MenuItemGroup key="users" className="gx-menu-group" title={"Setups"}>
                                    {_.sortBy(FilterMenuByType(FindRolePermissions(roleLists, role_id) ? FindRolePermissions(roleLists, role_id).role_permission_ms : [], "SETUPS"), ["permission_m.permission"]).map(item => (
                                        <Menu.Item key={item.permission_id}>
                                            <Link to={item.permission_m.description}>
                                                <i className={`icon icon-${item.permission_m.perm_icon}`} />
                                                <span>{item.permission_m.permission}</span></Link>
                                        </Menu.Item>
                                    ))}
                                </MenuItemGroup>
                                : null
                        }
                    </Menu>
                </CustomScrollbars>
            </div>
        </>
    );
};

SidebarContent.propTypes = {};

export default SidebarContent;