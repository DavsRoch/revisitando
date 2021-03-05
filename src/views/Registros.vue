<template>
  <div>
  <el-menu :default-active="activeIndex" class="el-menu-demo navbar-custom" mode="horizontal" @select="handleSelect">
    <div class="itens-menu">
      <span class="logo"><img class="icon-menu" src="../assets/icons/outline_date_range_black_18dp.png" >Revisitando</span>
      <span class="line"></span>
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2" v-on:click="$router.push({name: 'Registros'})">Registros</el-menu-item>
      <el-menu-item index="2"> Hoje</el-menu-item>
    </div>
  </el-menu>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="Data ligação"
      prop="data_ligacao">
    </el-table-column>
    <el-table-column
      label="Retornar"
      prop="data_retorno">
    </el-table-column>
    <el-table-column
      label="Nome"
      prop="nome">
    </el-table-column>
    <el-table-column
      label="Pergunta"
      prop="pergunta">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [{
          data_ligacao: '05-01-2021',
          nome: 'Tom',
          pergunta: 'gfdhd',
          data_retorno: '12-01-2021'
        }, {
          data_ligacao: '05-01-2021',
          nome: 'Moana',
          pergunta: 'No. 189, Grove St, Los Angeles',
          data_retorno: '12-01-2021'
        }, {
          data_ligacao: '2016-05-04',
          nome: 'Ana',
          pergunta: 'No. 189, Grove St, Los Angeles',
          data_retorno: '12-01-2021'
        }, {
          data_ligacao: '2016-05-01',
          nome: 'Caio',
          pergunta: 'No. 189, Grove St, Los Angeles',
          data_retorno: '12-01-2021'
        }],
        search: '',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>
