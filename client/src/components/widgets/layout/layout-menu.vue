<!-- 

README：
最多2层目录结构
必需传递参数：
    menus   菜单数据
    routerPush  是否含路由，设置此项请指定routerField，默认tab_url
    rootId  指定跟id

    触发事件：
    menu:select
    参数：
    menu：当前点击的menu
    menus：给定的menu数组，未经过处理，来自父组件传递的参数

可选参数：   参考props下面未标记required为true的属性


 -->
<template>
    <div class="layout-menu-left">
        <Menu 
            class="full-height no-after" 
            :active-name="activeName" 
            ref="mmenu"  
            theme="dark" 
            width="auto"  
            style="font-size: 15px;" 
            @on-select="onMenuSelect" 
            :open-names="openNames">
            <template v-for="rootMenu in rootData">
                <Submenu :data-name="menu[nameField]" :name="menu[nameField]" v-for="(menu, index) in rootMenu" :key="index">
                    <template slot="title">
                        <template v-if="menu[iconField]">
                            <Icon :type="menu[iconField]"></Icon>
                        </template>
                        {{menu[titleField]}}
                    </template>
                    <Menu-item :data-name="item[nameField]" :name="item[nameField]" v-for="(item, subIndex) in menu[childrenField]" :key="subIndex">
                        <template v-if="item[iconField]">
                            <Icon :type="item[iconField]"></Icon>
                        </template>
                        {{item[titleField]}}
                    </Menu-item>
                </Submenu>
            </template>
        </Menu>
    </div>
</template>
<script>
//引入方法mixins
import Methods from '../../../mixins/menu-methods'
export default {
    name: 'custom-menu',
    data() {
        return {
            activeName: '',
            openNames: [],
            rootData: [],
            minHeight: 768
        }
    },
    mounted() {
        this.init();
    },
    mixins: [Methods],
    methods: {
        //给外部调用的更新方法，父组件可以使用ref的形式直接调用
        updateMenu() {
            this.$nextTick(()=>{
                this.$refs.mmenu.updateOpened();
                this.$refs.mmenu.updateActiveName();
            })
        },
        init() {
            this.rootData = this.initTree(Object.assign([], this.menus, true), this.rootId);
            var activeItem = this.getActiveMenuByPath(this.$route.path);
            if(activeItem){
                this.activeName = activeItem[this.nameField];
            }
            this.getOpenMenus(this.rootData, activeItem);
            this.getSubmenus(this.rootData);
            this.updateMenu();
        },
        //获取菜单激活项，根据当前路径来。如果菜单设置的是true，但是如果匹配路由，优先路由。
        getActiveMenuByPath(path){
            for(let i of this.menus){
                if(i[this.routerField] === path){
                    return i;
                }
            }
        },
        //获取打开的菜单，作为菜单组
        //openedMenu根据url获取到的激活菜单
        getOpenMenus(data, openedMenu){
            for(var i in data){
                var item = data[i];
                //激活菜单并展开
                if(openedMenu && item[this.nameField] === openedMenu[this.pnameField]){
                    this.openNames.push(item[this.nameField]);
                }else if(item[this.childrenField] && item[this.childrenField].length){
                    if(item[this.activeField]){
                        this.openNames.push(item[this.nameField]);
                    }
                    this.getOpenMenus(item[this.childrenField], openedMenu);
                } else if (item instanceof Array) {
                    this.getOpenMenus(item, openedMenu);
                }
            }
        },
        //获取激活的菜单，根据open字段来确定
        getSubmenus(data) {
            if (this.activeName) {
                return;
            }
            for (var i in data) {
                var item = data[i];
                if (item[this.childrenField] && item[this.childrenField].length) {
                    this.getSubmenus(item[this.childrenField]);
                } else if (item instanceof Array) {
                    this.getSubmenus(item);
                } else if (item[this.activeField]) {
                    this.activeName = item[this.nameField];
                    break;
                }
            }
        },
        //根据id来获取menu项
        getMenuById(id) {
            var menu = this.menus.find((item) => {
                return item[this.nameField] === id
            })
            return menu;

        },
        //根据路由来回去menu项
        getMenuByUrl(){
            var menu = this.menus.find((item) => {
                return item[this.routerField] === this.$route.path;
            })
            return menu;
        },
        //
        onMenuSelect(id) {
            let menu = this.getMenuById(id);
            this.$emit('menu:select', menu, this.menus);
            if (menu && this.routerPush) {
                this.$router.push(menu[this.routerField]);
            }
        }
    },
    props: {
        routerPush: {//是否点击后自动触发路由前进，默认不设置
            type: Boolean,
            default: false
        },
        routerField: {//指定菜单的路由字段
            type: String,
            default: 'tab_url'
        },
        rootId: {//指定菜单的根id，这个根不会显示
            type: Number,
            default: -1,
            required: true
        },
        menus: {//指定菜单数组
            type: Array,
            required: true
        },
        activeField: {//设置菜单为打开的字段名
            type: String,
            default: 'open'
        },
        nameField: {//名称字段，唯一标示。默认是id
            type: String,
            default: 'id'
        },
        pnameField: {
            type: String,
            default: 'pId'
        },
        iconField: {//指定菜单的前面的icon字段。
            type: String,
            default: 'icon'
        },
        childrenField: {//指定菜单的子菜单字段，默认不需要指定。组件会自动进行递归计算
            type: String,
            default: 'children'
        },
        titleField: {//在页面上显示的名称
            type: String,
            default: 'name'
        }
    }
}
</script>
