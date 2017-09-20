<!-- 
可选值：
tableSet: {
	stripe	是否显示间隔斑马纹	Boolean	false
	border	是否显示纵向边框	Boolean	false
	show-header	是否显示表头	Boolean	true
	width	表格宽度，单位 px	Number | String	自动
	height	表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头	Number | String	-
	highlight-row	是否支持高亮选中的行，即单选	Boolean	false
	size	表格尺寸，可选值为 large、small、default 或者不填	String	-
	context	设置单元格内渲染自定义组件时的上下文。比如父级是 $parent，根组件是 $root，
			当 Table 作为一个 slot 封装在其它组件里时，会很有用	Object	Table 所在的上下文
	no-data-text	数据为空时显示的提示内容	String	暂无数据
	no-filtered-data-text	筛选数据为空时显示的提示内容	String	暂无筛选结果
	export	是否包含导出按钮
}
必须：
columns:{
	title	列头显示文字	String	#
	key	对应列内容的字段名	String	-
	width	列宽	Number	-
	align	对齐方式，可选值为 left 左对齐、right 右对齐和 center 居中对齐	String	left
	className	列的样式名称	String	-
	fixed	列是否固定在左侧或者右侧，可选值为 left 左侧和 right 右侧	String	-
	ellipsis	开启后，文本将不换行，超出部分显示为省略号	Boolean	false
	render	自定义渲染列，传入三个参数 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例	Function	-
	renderHeader	自定义列头显示内容，传入参数有两个，column 和 index，分别为当前列数据和当前列索引，不支持渲染自定义组件	Function	-
	sortable	对应列是否可以排序，如果设置为 custom，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件	Boolean	false
	sortMethod	自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 sortable: true 时有效。type 值为 asc 和 desc	Function	-
	filters	过滤数据的选项，格式为数组，数组中每项包含 label 和 value 属性，使用过滤，必须同时配置 filterMethod	Array	-
	filterMethod	数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示	Function	-
	filterMultiple	数据过滤的选项是否多选	Boolean	true
	filteredValue	在初始化时使用过滤，数组，值为需要过滤的 value 集合	Array	-
	filterRemote	使用远程过滤	Function	-
}
可选值：
page:{
	showPage	是否显示翻页，默认true
	page-size	每页条数	Number，默认10
	page-size-opts	每页条数切换的配置	Array	，默认[10, 20, 30, 40]
	size	可选值为small（迷你版）或不填（默认）	String	-
	show-total	显示总数	Boolean	，默认true
	show-elevator	显示电梯，可以快速切换到某一页	Boolean	，默认true
	show-sizer	显示分页，用来改变page-size	Boolean	，默认true
}
必须值
urls: {
	query:	请求接口地址
}

示例:

page: {
	showPage: true,
	showTotal: true,
	showSizer: true,
	showTotal: true,
	showElevator: true
},
tableSet: {
	stripe:true,
	border: true,
	showHeader: true,
	height: 800,
	highlightRow: true
},
urls: {
	query: 'http://www.baidu.com'
}


方法：
//导出数据，name是导出后保存的文件名
function exportData(name){}

//更新数据，data是表单数据，totalCount是总数
function updateData(data, totalCount){}

//获取列表，params是请求参数，默认get请求，type指定请求参数
function getList(params, type){}
 -->
}
<template>
    <Row style="padding: 10px 5px;">
        <Col>
            <Table 
                style="margin: 10px 0;"
                ref="table" 
                stripe  
                :data="tableData" 
                :border="tableSet.border" 
                :show-header="tableSet.showHeader" 
                :height="tableSet.height" 
                :highlight-row="tableSet.highlightRow" 
                :size="tableSet.size" 
                :context="tableSet.context || $parent" 
                :columns="columns" 
                :no-data-text="tableSet.noDataText" 
                :no-filtered-data-text="tableSet.noFilteredDataText">
            </Table>
        </Col>
        <Col>
            <slot></slot>
        </Col>
        <Col>
            <div style="margin: 10px">
                <div style="float: right;" v-if="page.showPage">
                    <Page 
                        :total="total"
                        :current="pageIndex" 
                        :page-size="pageSize" 
                        :show-sizer="page.showSizer" 
                        :show-total="page.showTotal" 
                        :show-elevator="page.showElevator"
                        @on-page-size-change="pageSizeChange" 
                        @on-change="pageChange">
                    </Page>
                </div>
            </div>
        </Col>
        <Spin v-show="loading" fix class="table-loading">
            <Icon type="load-c" size=40 class="rotate"></Icon>
            <div>加载中...</div>
        </Spin>
    </Row>
</template>
<script>
export default {
    name: 'custom-table',
    data() {
        return {
            pageIndex: 1, //pageIndex
            pageSize: 10, //pageSize
            total: 0,
            loading: false,
            tableData: []
        }
    },
    mounted() {
        this.getList();
    },
    computed: {
        params(){
            var parameter = Object.assign({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }, this.queryParams);
            this.getList(parameter);
            return parameter;
        }
    },
    methods: {
        exportData(name) {
            this.$refs.table.exportCsv({
                filename: name || '原始数据'
            });
        },
        updateData(data, totalCount){
            if(this.loading){
                return;
            }
            this.loading = true;
            this.tableData = data;
            this.total = totalCount;
            setTimeout(() => {
                this.loading = false;
            }, 100);
        },
        getList(params, type) {
            if(this.loading){
                return;
            }
            type = type ? type.toLowerCase() : 'get';
            this.loading = true;
            this.$axios[type](this.urls.query, params || this.params)
            .then((data)=>{
            	this.tableData = data.list;
            	this.total = data.totalCount;
                this.loading = false;
            })
            .catch((e)=>{
                console.log(e);
                this.tableData = [];
                this.total = 0;
                this.loading = false;
            });
        },
        pageChange(page) {
            if (page === this.pageIndex) {
                return;
            }
            this.pageIndex = page;
            this.getList();
        },
        pageSizeChange(pageSize) {
            if (pageSize === this.pageSize) {
                return;
            }
            this.pageSize = pageSize;
            this.getList();
        }
    },
    props: {
        urls: {
            required: true,
            type: Object
        },
        queryParams: {
            type: Object,
            default(){
                return {};
            }
        },
        tableSet: {
            type: Object,
            default(){
                return {
                    stripe: true,
                    border: true,
                    showHeader: true,
                    height: 768,
                    highlightRow: true,
                    noDataText: '暂无数据...',
                    noFilteredDataText: '暂无筛选结果...'
                }
            }
        },
        page: {
            type: Object,
            default(){
                return{
                    showPage:true,
                    showSizer:true,
                    showTotal:true,
                    showElevator: true
                }
            }
        },
        columns: {
            type: Array,
            required: true
        }
    }
}
</script>