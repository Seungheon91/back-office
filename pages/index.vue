<script setup lang="ts">
import { ElMessageBox } from "element-plus";
import { Delete } from "@element-plus/icons-vue";

const columns: string[] = ["date", "name", "address"];
const tableData: object[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
onMounted(() => {
  // ElMessageBox.alert("hello", "", {
  //   center: true,
  //   icon: markRaw(Delete),
  //   showClose: false,
  // });
});
</script>

<template>
  <div class="flex flex-col bg-white rounded-md p-4">
    <!-- 
    <div class="flex flex-col justify-center items-center gap-9">
      <Table :data="tableData" :columns="columns" align="center" />
      <Pagination :total="tableData.length" :pageCount="2" />
    </div>
     -->
    <table>
      <tr>
        <td>회원가입일시</td>
        <td colspan="4">23.01.05 13:00</td>
        <td rowspan="4">프로필</td>
      </tr>
      <tr>
        <td>아이디</td>
        <td colspan="4">leejisu</td>
      </tr>
      <tr>
        <td>이름</td>
        <td colspan="4">이지수</td>
      </tr>
      <tr>
        <td>연락처</td>
        <td colspan="4">01012341234</td>
      </tr>
      <tr>
        <td rowspan="2">소속 단지 정보</td>
        <td>단지코드</td>
        <td>단지명</td>
        <td>단체명</td>
        <td>직책명</td>
        <td>동/호수</td>
        <td>임기</td>
      </tr>
      <tr>
        <td>95001</td>
        <td>울릉도 센트럴 독도 e편한세상 13차</td>
        <td>입주대표회의</td>
        <td>입주자대표</td>
        <td>101동/101호</td>
        <td>임기중 (기한없음)</td>
      </tr>
    </table>
  </div>
</template>
