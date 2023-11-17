<script setup lang="ts">
import type { FormProps, FormRules, FormInstance } from "element-plus";

definePageMeta({
  layout: "empty",
});

interface UserInfo {
  memberId: string;
  memberName?: string;
  profilePath?: string;
  email?: string;
  password: string;
}

const authStore = useAuthStore();
const router = useRouter();

const userInfo = ref<UserInfo>({ memberId: "", password: "" });

const labelPosition = ref<FormProps["labelPosition"]>("top");
const ruleFormRef = ref<FormInstance>();
const sumitActionFlag = ref<boolean>(false);

const rules = reactive<FormRules>({
  memberId: [
    { required: true, message: "아이디를 입력해주세요.", trigger: "change" },
  ],
  password: [
    { required: true, message: "비밀번호를 입력해주세요.", trigger: "change" },
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  sumitActionFlag.value = true;

  if (!formEl) return;

  formEl.validate(async (valid: boolean) => {
    if (valid) {
      await authStore.signIn(userInfo.value.memberId, userInfo.value.password);
      router.push("/");
    } else {
      console.log("fail");
      return false;
    }
  });
};
</script>

<template>
  <div
    class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5"
  >
    <div
      class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-auto sm:w-[500px] overflow-hidden"
    >
      <div class="w-full">
        <div class="w-full py-10 px-5">
          <div class="flex justify-center mb-10">
            <img src="@/assets/images/Logo_basic.svg" alt="이지스원 로고" />
          </div>
          <div class="flex justify-center items-center">
            <el-form
              ref="ruleFormRef"
              :label-position="labelPosition"
              label-width="100px"
              :model="userInfo"
              :rules="rules"
              size="large"
              class="w-[320px]"
            >
              <el-form-item label="아이디" prop="memberId">
                <el-input
                  v-model="userInfo.memberId"
                  placeholder="아이디를 입력해주세요"
                  clearable
                  :validate-event="sumitActionFlag"
                  @keydown.enter="submitForm(ruleFormRef)"
                />
              </el-form-item>
              <el-form-item label="패스워드" prop="password">
                <el-input
                  v-model="userInfo.password"
                  placeholder="********"
                  clearable
                  type="password"
                  :validate-event="sumitActionFlag"
                  @keydown.enter="submitForm(ruleFormRef)"
                />
              </el-form-item>
              <el-form-item class="py-4">
                <el-button
                  class="w-[320px]"
                  color="#626aef"
                  @click.prevent="submitForm(ruleFormRef)"
                >
                  로그인
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
