<script setup lang="ts">
//TODO: 메뉴 테스트를 위해서 API 연동은 추후에 할 예정
//import { FormInstance, FormRules } from "element-plus";
import type { MenuInfo, MenuDetailInfo } from "~/types/menu";
import _cloneDeep from "lodash/cloneDeep";

interface MenuDetailProp {
  menuInfo?: MenuDetailInfo;
  menuOptionList?: Array<MenuInfo>;
}

const { menuInfo, menuOptionList } = defineProps<MenuDetailProp>();
const { closeModal } = useModalStore();

const localMenuInfo = ref<MenuDetailInfo>({
  menuId: 0,
  menuName: "",
  parentMenuId: 0,
  url: "",
  useYn: "Y",
  seqNo: 1,
  lnbYn: "Y",
  level: 1,
  menuIcon: "",
  depth: 1,
});
const menuSelectOptions = ref<Array<MenuInfo>>();

onMounted(async () => {
  await nextTick();
  menuSelectOptions.value = _cloneDeep(menuOptionList);
  localMenuInfo.value = Object.assign({}, localMenuInfo.value, menuInfo);
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <div>
      <el-form
        ref="ruleFormRef"
        label-position="left"
        label-width="100px"
        size="large"
        class="w-72"
      >
        <el-form-item label="메뉴명" prop="menuName">
          <el-input
            v-model="localMenuInfo.menuName"
            placeholder="MO"
            clearable
          />
        </el-form-item>
        <el-form-item label="상위메뉴" prop="parentMenuId">
          <el-tree-select
            v-model="localMenuInfo.parentMenuId"
            placeholder="상위메뉴"
            :data="menuSelectOptions"
          ></el-tree-select>
        </el-form-item>

        <el-form-item label="LNB">
          <el-radio-group>
            <el-radio :label="'Y'" size="large" class="basic"> 노출 </el-radio>
            <el-radio :label="'N'" size="large" class="basic">
              미노출
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="사용여부">
          <el-radio-group>
            <el-radio :label="'Y'" size="large" class="basic"> 사용 </el-radio>
            <el-radio :label="'N'" size="large" class="basic">
              미사용
            </el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <el-button size="large" @click="closeModal">취소</el-button>
      <el-button type="primary" size="large">등록</el-button>
    </div>
  </div>
</template>
