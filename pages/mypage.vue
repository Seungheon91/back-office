<script setup lang="ts">
import { CameraFilled } from "@element-plus/icons-vue";
</script>

<template>
  <div class="flex justify-center items-center h-[750px]">
    <div class="grid grid-cols-3 gap-4 w-[700px] h-[400px]">
      <div
        class="flex flex-col justify-between items-center bg-white px-6 py-8 rounded-md"
      >
        <div class="flex flex-col justify-center items-center">
          <el-image>
            <template #error>
              <div
                class="bg-slate-100 w-32 h-32 rounded-full inline-block"
              ></div>
            </template>
          </el-image>
          <h2 class="text-xl font-semibold my-4">테스트</h2>
          <el-button :icon="CameraFilled">사진등록</el-button>
        </div>

        <p class="text-xs my-2 items-end">
          10MB 이하의 jpg, jpeg, gif, <br />
          png 파일만 등록할 수 있습니다.
        </p>
      </div>

      <div class="flex flex-col bg-white col-span-2 rounded-md px-10 py-8">
        <div class="flex text-sm py-3">
          <p class="w-16">이름</p>
          <p class="ml-7">gg</p>
        </div>
        <div class="flex text-sm py-3">
          <p class="w-16">생년월일</p>
          <p class="ml-7">gg</p>
        </div>
        <div class="flex text-sm py-3">
          <p class="w-16">전화번호</p>
          <p class="ml-7">gg</p>
        </div>
        <div class="flex text-sm py-3">
          <p class="w-16">소속단지</p>
          <p class="ml-7">gg</p>
        </div>
        <div class="flex text-sm py-3">
          <p class="w-16">단지코드</p>
          <p class="ml-7">gg</p>
        </div>
        <div class="flex text-sm py-3">
          <p class="w-16">직책</p>
          <p class="ml-7">gg</p>
        </div>
      </div>
    </div>
  </div>
</template>
