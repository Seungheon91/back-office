<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

// watch(menuInfo, (menuInfo) => {
//   emit("update:modelValue", menuInfo);
// });
</script>

<template>
  <div class="flex items-center justify-center">
    <el-form
      ref="ruleFormRef"
      label-position="left"
      label-width="100px"
      size="large"
      class="w-72"
    >
      <el-form-item label="메뉴명" prop="menuName">
        <el-input placeholder="" clearable />
      </el-form-item>
      <el-form-item label="상위메뉴" prop="password">
        <el-tree-select placeholder="상위메뉴"></el-tree-select>
      </el-form-item>

      <el-form-item label="LNB">
        <el-radio-group>
          <el-radio :label="'Y'" size="large" class="basic"> 노출 </el-radio>
          <el-radio :label="'N'" size="large" class="basic"> 미노출 </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="사용여부">
        <el-radio-group>
          <el-radio :label="'Y'" size="large" class="basic"> 사용 </el-radio>
          <el-radio :label="'N'" size="large" class="basic"> 미사용 </el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>
