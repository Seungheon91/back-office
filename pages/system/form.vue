<script setup lang="ts">
const value1 = ref("");
const value2 = ref("");
const radio = ref(3);
</script>

<template>
  <div>
    <div class="flex justify-end">
      <el-button type="danger" size="large">신규등록</el-button>
    </div>
    <div class="flex flex-col bg-white px-8 py-4 mt-4 rounded-md">
      <div class="grid grid-cols-3 gap-2">
        <div class="flex gap-2">
          <el-select
            class="w-full"
            placeholder="대분류"
            size="large"
          ></el-select>
          <el-select
            class="w-full"
            placeholder="중분류"
            size="large"
          ></el-select>
        </div>
        <div class="col-span-2"><el-input size="large"></el-input></div>
      </div>

      <!-- 기간 선택, 버튼 영역 -->
      <div class="grid grid-cols-3 gap-2 mt-3">
        <div>
          <el-radio-group v-model="radio">
            <el-radio :label="3">전체</el-radio>
            <el-radio :label="6">일주일</el-radio>
            <el-radio :label="9">1개월</el-radio>
            <el-radio :label="9">3개월</el-radio>
            <el-radio :label="9">기간설정</el-radio>
          </el-radio-group>
        </div>
        <div class="col-span-2 flex justify-between items-center">
          <div>
            <el-date-picker
              v-model="value1"
              type="date"
              size="large"
              :default-value="new Date(2010, 9, 1)"
            />
            ~
            <el-date-picker
              v-model="value2"
              type="date"
              size="large"
              :default-value="new Date(2010, 9, 1)"
            />
          </div>
          <div>
            <el-button class="w-48" size="large" type="info">검색</el-button>
            <el-button size="large">초기화</el-button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center gap-6 mt-4 bg-white rounded-md p-4"
    >
      <el-table style="width: 100%" table-layout="auto">
        <el-table-column
          width="88"
          prop="formNum"
          header-align="center"
          align="center"
          label="문서ID"
        />
        <el-table-column
          width="100"
          header-align="center"
          align="center"
          label="대분류"
          prop="mainCategory"
        />
        <el-table-column
          width="144"
          prop="subCategory"
          header-align="center"
          align="center"
          label="중분류"
        />

        <el-table-column
          width="*"
          prop="formName"
          header-align="center"
          align="left"
          label="소분류명"
        >
          <template #default="scope">
            <button class="textType-btn">
              {{ scope.row.formName }}
            </button>
          </template>
        </el-table-column>
        <el-table-column
          prop="formType"
          header-align="center"
          align="center"
          label="문서권한"
        />
        <el-table-column
          prop="useYn"
          header-align="center"
          align="center"
          label="사용여부"
        />
        <el-table-column
          prop="externalLink"
          header-align="center"
          align="center"
          label="대외연동"
        />

        <el-table-column
          prop="createdBy"
          header-align="center"
          align="center"
          label="등록자"
        />
        <el-table-column
          prop="createdAt"
          header-align="center"
          align="center"
          label="등록일"
        />
      </el-table>

      <Pagination :total="20" :page-count="3" />
    </div>
  </div>
</template>
