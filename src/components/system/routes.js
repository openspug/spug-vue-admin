/**
 * Created by zyupo on 2019/05/26
 * https://github.com/openspug
 */

import Notify from './Notify.vue';


export default [
    {
        path: 'notify',
        component: Notify,
        meta: {
            permission: 'system_notify_view'
        }
    }
]
