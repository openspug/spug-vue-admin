/**
 * Created by zyupo on 2019/05/26
 * https://github.com/openspug
 */

let menu = {
    menus: [
        {
            key: '/home', desc: 'Dashboard', icon: 'fa fa-desktop', permission: 'home_view',
        },
        {
            key: '1', desc: '用户管理', icon: 'fa fa-address-card', permission: 'account_user_view|account_role_view', subs: [
                {key: '/account/user', permission: 'account_user_view', desc: '用户列表'},
                {key: '/account/role', permission: 'account_role_view', desc: '角色权限'}
            ]
        }, {
            key: '2', desc: '系统管理', icon: 'el-icon-setting',  permission: 'system_notify_view',  subs: [
                {key: '/system/notify', permission: 'system_notify_view', desc: '通知设置'},
            ]
        }
    ]
};

export default menu;
