<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex flex-col">
      <div class="flex justify-between items-center pb-4 w-full">
        <h3 class="text-lg font-semibold">분류코드</h3>
        <el-button type="primary" size="large">신규 등록</el-button>
      </div>
      <div class="bg-white w-full overflow-auto">
        <el-table style="width: 100%" table-layout="auto" highlight-current-row>
          <el-table-column prop="codeType" label="분류코드" align="center" />
          <el-table-column prop="codeTypeName" label="분류명" align="center" />
          <el-table-column label="사용자 정의" align="center">
            <el-table-column prop="flexField1" label="정의명1" align="center" />
            <el-table-column prop="flexField2" label="정의명2" align="center" />
            <el-table-column prop="flexField3" label="정의명3" align="center" />
            <el-table-column prop="flexField4" label="정의명4" align="center" />
            <el-table-column prop="flexField5" label="정의명5" align="center" />
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between items-center pb-4 w-full">
        <h3 class="text-lg font-semibold">상세코드</h3>
        <el-button type="primary" size="large">신규 등록</el-button>
      </div>
      <div class="bg-white w-full overflow-auto">
        <el-table class="textType-btn" style="width: 100%" table-layout="auto">
          <el-table-column prop="code" label="상세코드" align="center" />
          <el-table-column prop="codeName" label="상세명" align="center" />
          <el-table-column prop="seqNo" label="순서" align="center" />
          <el-table-column prop="useYn" label="사용여부" align="center" />
          <el-table-column label="사용자 정의" align="center">
            <el-table-column prop="flexField1" label="정의명1" align="center" />
            <el-table-column prop="flexField2" label="정의명2" align="center" />
            <el-table-column prop="flexField3" label="정의명3" align="center" />
            <el-table-column prop="flexField4" label="정의명4" align="center" />
            <el-table-column prop="flexField5" label="정의명5" align="center" />
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
