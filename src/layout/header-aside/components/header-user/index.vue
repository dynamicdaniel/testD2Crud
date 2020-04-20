<template>
  <div>
  <el-popover
    placement="bottom"
    width="300"
    trigger="hover"
  >
    <div class='user-overview-info'>
      <img src='./header.jpg' width='50' height="50"/>
      <p>
        <span>{{info.name || 'test'}}</span>
        <span>{{info.deptName || ''}}</span>
        <span>{{info.email || ''}}</span>
      </P>
    </div>
    <el-divider class='user-info-divider'></el-divider>
    <div style="display:flex;align-items:center; margin: 0">
      <el-button class="el-icon-unlock user-info-btn" flex-box="1" type="text">
        <!--  @click="editPwd" -->
        <span class='user-info-btn-text' @click="dialogFormVisible = true">修改密码</span>
      </el-button>
      <el-divider direction='vertical'></el-divider>
      <el-button class="el-icon-switch-button user-info-btn" flex-box="1" type="text" @click.native="logOff">
        <span class='user-info-btn-text'>退出登录</span>
      </el-button>
    </div>
    <div class="btn-text" slot="reference">
      <span class='user-name'>{{info.name ? `你好 ${info.name}，` : '未登录，'}}</span>
      <span>{{info.name ? `欢迎使用本管理系统` : '请联系管理员获取账户'}}</span>
      <i class="el-icon-s-tools ml-50"></i>
    </div>
  </el-popover>
  <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
    <el-form :model="pwdform" ref="pwdform" status-icon :rules='rules'>
      <el-form-item label="旧密码" :label-width="formLabelWidth" prop='oldPassword'>
        <el-input v-model="pwdform.oldPassword" autocomplete="off" type='password'></el-input>
      </el-form-item>
      <el-form-item label="新密码" :label-width="formLabelWidth" prop='newPassword'>
        <el-input v-model="pwdform.newPassword" autocomplete="off" type='password'></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="comfirmUpdate('pwdform')">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import require from '@/plugin/axios'
import util from '@/libs/util'
export default {
  data () {
    return {
      dialogFormVisible: false,
      pwdform: {
        oldPassword: '',
        newPassword: ''
      },
      formLabelWidth: '120px',
      rules: {
        oldPassword: [
          { required: true, trigger: 'blur', message: '必填' }
        ],
        newPassword: [
          { required: true, trigger: 'blur', message: '必填' }
        ],
      }
    }
  },
  computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
  methods: {
    ...mapActions('d2admin/account', [
      'logout'
    ]),
    /**
     * @description 登出
     */
    logOff () {
      this.logout({
        confirm: true
      })
    },
    // editPwd () {
    //   console.log('修改密码')
      
    // },
    comfirmUpdate (form) {
      console.log(form)
      this.$refs[form].validate((valid) => {
        if (valid) {
          let { newPassword, oldPassword } = this.pwdform
          let id = Number(util.cookies.get('id'))
          require({
            url: '/human/user/rePassword',
            method: 'put',
            params: {
              newPass: newPassword,
              oldPass: oldPassword,
              id
            }
          }).then(res => {
            console.log('editPwd', res)
            this.$message('修改成功！')
            this.dialogFormVisible = false
          }).catch(err => {
            console.log('editPwd err',)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  },
}
</script>
<style lang="scss" scope>
  .user-overview-info {
    box-sizing: border-box;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 80px;
      height: 80px;
    }
    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      & > :first-child {
        font-weight: bolder;
        color: dodgerblue;
        font-size: 18px;
      }
    }
  }
  .user-info-btn {
    margin: 0;
    padding: 0;
    color: #ccc;
    .user-info-btn-text {
      margin-left: 20px;
    }
  }
  .user-info-divider {
    margin: 14px 0px;
  }
  .btn-text{
    font-size: 15px;
    color: #fff;
    .user-name {
      font-weight: bolder;
    }
    & > * {
      color: #fff;
    }
  }
  .ml-50 {
    margin-left: 25px;
    font-weight: bolder;
  }
</style>
