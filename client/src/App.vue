
<template>
    <layout class="layout">
        <layout-header slot="header">
            <div slot="logo" class="logo">
                
            </div>
        </layout-header>
        <div class="content-wrapper" slot="content">
            <layout-content  class="full-height">
                <layout-footer slot="footer"></layout-footer>
            </layout-content>
        </div>
    </layout>
</template>
<script>
import Layout from './components/widgets/layout/layout'
import LayoutHeader from './components/widgets/layout/layout-header'
import LayoutContent from './components/widgets/layout/layout-content'
import LayoutFooter from './components/widgets/layout/layout-footer'
export default {
    name: 'app',
    data(){
        return {
            breakcrumbs: []
        }
    },
    components: {
        Layout,
        LayoutHeader,
        LayoutContent,
        LayoutFooter
    }
}
</script>