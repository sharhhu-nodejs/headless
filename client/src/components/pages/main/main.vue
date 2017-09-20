<template>
    <div class="hello">
        <Button @click="setOption" type="primary">切换图表</Button>
        <div class="echart" v-if="showEchart">
            <echart-line></echart-line>
        </div>
        <Button @click="setZTree" type="primary">ztree示例</Button>
        <div class="echart" style="width: 30%;" v-if="showZTree">
            <custom-ztree
              :data="data"
              @ztree:click="ztreeClick"
              @ztree:before:click="ztreeClick"
            ></custom-ztree>
        </div>
    </div>
</template>

<script>
import EchartLine from '../../widgets/echarts/line.vue';
import CustomZtree from '../../widgets/common/custom-ztree.vue';
import {data} from '../../../mock-data/menu';
export default {
  name: 'hello',
  components: {
    EchartLine,
    CustomZtree
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      urls: {
        query: 'http://172.28.10.47:8080/app-demand/admin/otherSearch/getApkInfoByApkName'
      },
      data: data.data,
      showEchart: false,
      showZTree: false,
      columns: [{
        "title": "名称",
        "key": "name",
        "fixed": "left"
      }]
    };
  },
  mounted(){
    
  },
  methods: {
    ztreeClick(znode, ztree){
      this.$Message.info('你点击了：'+znode.name);
    },
    setOption(){
        this.showEchart = !this.showEchart;
        this.showZTree = false;
    },
    setZTree(){
        this.showZTree = !this.showZTree;
        this.showEchart = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .echart{
        margin: 10px 0;
        padding: 20px;
        background: rgb(241, 241, 241);
    }
</style>
