<template>
    <el-dialog :title="role.name + '- 权限管理'" :visible.sync="visible" @close="$emit('close')" width="80%"
               :close-on-click-modal="false">
        <table v-if="codes !== undefined" class="role_table">
            <tr class="el-table__row">
                <td rowspan="1">Dashboard</td>
                <td rowspan="1">Dashboard</td>
                <tag-td :item="codes['home_view']"></tag-td>
                <td></td>
                <td></td>
            </tr>
            <tr class="el-table__row">
                <td rowspan="4">用户管理</td>
                <td rowspan="2">用户列表</td>
                <tag-td :item="codes['account_user_view']"></tag-td>
                <tag-td :item="codes['account_user_add']"></tag-td>
                <tag-td :item="codes['account_user_edit']"></tag-td>
            </tr>
            <tr>
                <tag-td :item="codes['account_user_del']"></tag-td>
                <tag-td :item="codes['account_user_disable']"></tag-td>
                <td></td>
            </tr>
            <tr>
                <td rowspan="2">角色权限</td>
                <tag-td :item="codes['account_role_view']"></tag-td>
                <tag-td :item="codes['account_role_add']"></tag-td>
                <tag-td :item="codes['account_role_edit']"></tag-td>
            </tr>
            <tr>
                <tag-td :item="codes['account_role_del']"></tag-td>
                <tag-td :item="codes['account_role_permission_view']"></tag-td>
                <tag-td :item="codes['account_role_permission_edit']"></tag-td>
            </tr>
            <tr>
                <td rowspan="1">系统管理</td>
                <td rowspan="1">通知设置</td>
                <tag-td :item="codes['system_notify_view']"></tag-td>
                <tag-td :item="codes['system_notify_add']"></tag-td>
                <tag-td :item="codes['system_notify_edit']"></tag-td>
            </tr>
        </table>
        <el-table v-else v-loading="loading"></el-table>
        <div slot="footer">
            <el-button @click="visible = false">取消</el-button>
            <el-button v-if="has_permission('account_role_permission_edit')" type="primary" @click="saveCommit" :loading="btnSaveLoading">保存</el-button>
        </div>
    </el-dialog>
</template>

<style>
    .role_table {
        width: 100%;
        background-color: #fff;
        border-collapse: collapse;
        border: 1px solid #dfe6ec;
        text-align: center;
        font-size: 14px;
        color: #1f2d3d
    }

    .role_table td {
        height: 40px;
        box-sizing: border-box;
        text-overflow: ellipsis;
        vertical-align: middle;
        border-bottom: 1px solid #dfe6ec;
        border-right: 1px solid #dfe6ec;
    }
</style>

<script>
    import TagTd from './TagTd.vue'

    export default {
        components: {
            'tag-td': TagTd
        },
        props: ['role'],
        data() {
            return {
                visible: true,
                loading: false,
                btnSaveLoading: false,
                codes: undefined
            }
        },
        methods: {
            fetch() {
                this.loading = true;
                this.$http.get(`/api/account/roles/${this.role.id}/permissions`).then(res => {
                    console.log('res.result', res.result);
                    this.codes = res.result;
                }, res => this.$layer_message(res.result)).finally(() => this.loading = false)
            },
            saveCommit() {
                this.btnSaveLoading = true;
                let codes = [];
                for (let item of Object.values(this.codes)) {
                    if (item.is_has) {
                        codes.push(item.id)
                    }
                }
                this.$http.post(`/api/account/roles/${this.role.id}/permissions`, {codes: codes}).then(() => {
                    this.visible = false
                }, res => this.$layer_message(res.result)).finally(() => this.btnSaveLoading = false);
            }
        },
        mounted() {
            this.fetch()
        }
    }
</script>
