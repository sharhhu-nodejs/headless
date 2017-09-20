<template>
    <div class="layout-header">
        <div class="layout-logo">
            {{name}}
            <slot name="logo">
            </slot>
            <!-- <p class="version-info">版本：v1.1.0</p> -->
        </div>
        <div class="layout-nav" :style="navStyle">
            <slot>
                <Dropdown trigger="hover" class="man-dropdown right-side">
                    <a class="avatar-wraper" href="javascript:void(0)">
                       测试
                    </a>
                </Dropdown>
            </slot>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data: () => {
        return {
            name: 'Headless Chrome 测试'
        }
    },
    methods: {
        getVersionInfo() {
            this.$axios.get('/version/info')
                .then((data) => {
                    console.log(data)
                })
        }
    },
    mounted() {
        // this.user = this.$store.state.user.user;
        // this.getVersionInfo();
    },
    name: 'layout-header',
    props: {
        navStyle: {
            type: [Object, Array],
            default () {
                return {
                    float: 'right'
                }
            }
        }
    }
}
</script>
