<template>
  <div class="aline">
    <div v-for="(item, index) in ListData" :key="index">
      <!-- {{ item.label }}<br />{{ item.code }} -->
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item :label="item.label" align="left">
          <el-input v-model="item.code"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "top",
      ListData: [
        {
          label: "/**身份证规则校验**/",
          code: "const regCard = /(^d{15}$)|(^d{18}$)|(^d{17}(d|X|x)$)/;",
        },
        {
          label: "/**校验汉字**/",
          // 防止\备当作转义字符使用需在前面再加一个\
          code: "const regChineseCharacters = /^[\\u2E80-\\u9FFF]+$/;",
        },
        {
          label: "/**统一社会信用代码规则校验**/",
          code: "const regSocialCreditRules = /[0-9A-HJ-NPQRTUWXY]{2}d{6}[0-9A-HJ-NPQRTUWXY]{10}/;",
        },
        {
          label: "/**校验数字+字母**/",
          code: "const regNumAndAbc = /^[A-Za-z0-9]+$/;",
        },
        {
          label: "/**校验数字+小数**/",
          code: "const regNumAndDecimal = /^d+(.d+)?$/;",
        },
        {
          label: "/**校验正整数**/",
          code: "const regPositiveInteger = /(^[1-9]d*$)/;",
        },
        {
          label: "/**校验经度**/",
          code: "const regLong = /^(-|+)?(((d|[1-9]d|1[0-7]d|0{1,3}).d{0,6})|(d|[1-9]d|1[0-7]d|0{1,3})|180.0{0,6}|180)$/;",
        },
        {
          label: "/**校验纬度**/",
          code: "const regLat = /^(-|+)?([0-8]?d{1}.d{0,6}|90.0{0,6}|[0-8]?d{1}|90)$/;",
        },
        {
          label: "/**校验电话号码**/",
          code: "const regPhone = /^1[3|4|5|7|8][0-9]{9}$/;",
        },
        {
          label: "/**校验座机电话号码**/",
          code: "const regAreaPhone = /^0d{2,3}-d{7,8}|(?0d{2,3}[)-]?d{7,8}|(?0d{2,3}[)-]*d{7,8}$/;",
        },
        {
          label: "/**校验数字**/",
          code: "const regNum = /^[0-9]+$/;",
        },
        {
          label: "/** 校验包含中文**/",
          code: "const regHasChineseCharacters = /[\\u2E80-\\u9FFF]/;",
        },
        {
          label: "/** 校验8位密码，英文+数字+特殊字符**/",
          code: "const regStrongPassword = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,32}/;",
        },
        {
          label: "/** 校验邮箱**/",
          code: "const regEmail = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+.)+[A-Za-z]{2,6}$/;",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
