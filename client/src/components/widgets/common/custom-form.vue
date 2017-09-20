<!-- 
    属性：
    forms：Array类型，必须
    model：Object类型，必须
    span：Number类型，默认6。指定每个项的宽度，一行分成24等分
    itemStyle: Object类型，指定每个item的样式，如{'margin-left': '20px'}。默认{'margin-left': '15px'}
    labelWidth: Number类型，指定label的宽度，是针对form设置。item不存在labelwidth则使用此默认值。默认0

    事件说明：
        1、按钮点击事件：
            如果提供了按钮的api属性，并且没有提供click函数。会触发api请求：
            $emit('form:api:success', data, item)  请求成功事件，
            data：服务器返回的数据，item：按钮的定义
            $emit('form:api:success', e, item)  请求失败事件，e错误信息
        2、form属性发生变化时的事件：
            this.$emit('form:item:change', {
                name: field,
                value: this.formModel[field]
            }, this.formModel);
            第一个参数： 当前属性的名字和值。第二个参数：整个form的值。
-->
<!-- 
    forms使用说明：
    {
        propField: 必须，指定字段名。这个属性代表的是发给服务器的参数名。
        formType: 必须，指定formitem的类型，
        支持的有：“input、select、radio、checkbox、date、time、switch、button”。

        label: 指定标签名，如输入框左边的说明文字。
        labelWidth: 指定标签宽度。
        placeholder: 必须，指定placeholder说明文字。
    }
    各种formType类型说明：

    1、input类型。提供属性type，支持text、password 或 textarea
        支持属性：
        type：必须，指定上面的一种类型
        number：指定输入为number型
        size：尺寸
        rows：行数，仅textarea有效
        autosize： 自适应内容高度，仅textarea有效
        placeholder
        不支持事件。
    2、select类型
        支持属性：
        multiple: 是否支持多选
        placeholder
        options： 必须
        需要提供options属性，options属性应该是个数组，每个option应该是下面的结构
        {
            label: 必须，'北京',//页面显示的文字
            value: 必须，'123'//实际值
        }
    3、date类型。提供属性type：date、daterange、datetime、datetimerange、year、month
        支持的属性：
        type: 必须，指定上述类型的一种
        options: 根据DatePicker的options定义
        value: 设置默认值
        disabled: 是否禁用
        format: 日期格式，支持的语法：“yyyy-MM-DD HH:mm:ss:SSS A ZZ”。详细见DatePicker的说明
    4、time类型。提供type属性：time、timerange
        支持的属性，同date类型，详细参考TimePicker：
        type
        disabled
        value
        format
        placeholder
    5、radio类型。
        必须提供label和value值。
        type: 支持button，默认不填是radio类型
        label: 必须，显示的标签名
        value: 必须，选中时的值
        disabled: 是否禁用
        group属性，表示是一组radio选项。如果group为true，那必须提供radios，即一组radio。
        radios的item应该如下：
        {
            label: 标签,
            value: 值
        }
    6、checkbox类型。
        形式跟radio一样，但是checkbox不支持button属性。
        group为true是需要提供checkboxs属性，同radios属性
    7、switch类型。
        label: 必须，标签
        value: 必须，值
        slot: switch的开和关的内容，必须是对象，形式如下：
        {
            open: '开',
            close: '关'
        }
    8、button类型。
        支持的属性：
        disabled: 是否禁用
        type: 按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置
        shape: 按钮形状，可选值为circle或者不设置
        long: 开启后，按钮的长度为 100%
        size: 大小，large或small或不设置
        html-type: 设置button原生的type，可选值为button、submit、reset。默认button
        icon: icon图标，详见Icon定义
        label: 必须，显示的文字

        点击事件的操作：
        apiType：发送http请求的方法类型，如get、post等
        api: 请求后台api地址
        filterParam: 请求参数过滤函数，传入参数为form对象。此函数的返回值将用于api请求参数
        click: 自定义点击函数，如果定义了此函数将不会触发api请求，全部交给click函数处理。
        click函数参数为$event，点击事件对象。form，form表单值

        group: 按钮组属性，此属性为true时必须提供buttons属性。
        buttons: 属性的item跟单个按钮的属性一样，即需要提供上面的一些值

-->

<!-- 
    数据示例：
    [
        {
            propField: 'apkName',
            label:'应用名称',
            formType: 'input',
            placeholder:'请输入应用名称',
            type:'text'
        },{
            propField: 'devicemodel',
            label:'机型',
            formType: 'select',
            options: [{
                label: 'M1',
                value: '1'
            },{
                label: 'C1',
                value: '2'
            }],
            placeholder:'请选择机型'
        },{
            propField: 'userName',
            label:'序列号/录入人员',
            formType: 'input',
            placeholder:'请输入序列号/录入人员',
            type:'text'
        },
        {
            propField: 'appType',
            label:'抓包状态',
            formType: 'select',
            options: this.appType,
            placeholder:'请选择抓包状态'
        },{
            propField: 'sourceType',
            label:'来源',
            formType: 'select',
            options: this.sourceType,
            placeholder:'请选择来源'
        },{
            propField: 'startDate',
            label:'起始时间',
            formType: 'date',
            type: 'date',
            placeholder:'请选择起始时间'
        },{
            propField: 'endDate',
            label:'-',
            formType: 'date',
            type: 'date',
            placeholder:'请选择结束时间'
        },{
            propField: 'button',
            label:'刷选',
            formType: 'button',
            apiType: 'post',
            api: '/summaryReq/getList',
            filterParam: this.filterParam
        }
    ]

-->
}

<template>
    <Form ref="form" :class="{loading: loading}" :label-width="labelWidth">
        <Row  >
            <Col 
            v-for="(col, index) in formRows" 
            :span="col.span || span" 

            :key="index">
            <Form-item 
                :label-width="col.labelWidth"
                :style="formItemStyle"
                :label="col.labelWidth ? col.label : ''"
                :label-postion="'top'"
                :prop="col.propField" 
            >
                <template v-if="col.formType==='input'">
                    <Input 
                    :type="col.type" 
                    :disabled="col.disabled"
                    v-model="model[col.propField]" 
                    :number="col.number"
                    :size="col.size"
                    :rows="col.rows"
                    :autosize="col.autosize"
                    @on-change="onChange(model[col.propField], col.propField)"
                    :placeholder="col.placeholder" />
                </template>
                <template v-else-if="col.formType==='select'">
                    <Select 
                    :multiple="col.multiple || false"
                    :disabled="col.disabled"
                    v-model="model[col.propField]" 
                    @on-change="onChange(model[col.propField], col.propField)"
                    clearable 
                    :placeholder="col.placeholder">
                        <Option 
                        :value="option[col.value || 'code']" 
                        v-for="(option,indexOption) in col.options" 
                        :disabled="option.disabled || false"
                        :key="indexOption">{{option[col.label || 'name']}}</Option>
                    </Select>
                </template>
                <template v-else-if="col.formType==='date'">
                    <Date-picker 
                    :type="col.type" 
                    :options="col.options"
                    :value="col.value"
                    :disabled="col.disabled"
                    :format="col.format"
                    @on-change="onChange($event, col.propField)"
                    :placeholder="col.placeholder" 
                    v-model="model[col.propField]"></Date-picker>
                </template>
                <template v-else-if="col.formType==='time'">
                    <Time-picker 
                    :type="col.type" 
                    :disabled="col.disabled"
                    :value="col.value || null"
                    :format="col.format"
                    @on-change="onChange($event, col.propField)"
                    :placeholder="col.placeholder" 
                    v-model="model[col.propField]"></Time-picker>
                </template>
                <template v-else-if="col.formType==='radio'">
                    <template v-if="col.group">
                        <Radio-group 
                        :type="col.type || null"
                        @on-change="onChange(model[col.propField], col.propField)"
                        v-model="model[col.propField]">
                            <Radio 
                            v-for="(radio, indexRadio) in col.radios" 
                            :label="radio.label"
                            :disabled="radio.disabled"
                            :key="indexRadio"></Radio>
                        </Radio-group>
                    </template>
                    <template v-else>
                        <Radio 
                        @on-change="onChange(model[col.propField], col.propField, 'radio', col.value)"
                        :disabled="col.disabled"
                        v-model="model[col.propField]" >{{col.label}}</Radio>
                    </template>
                </template>
                <template v-else-if="col.formType==='checkbox'">
                    <template v-if="col.group">
                        <Checkbox-group 
                        @on-change="onChange(model[col.propField], col.propField)"
                        v-model="model[col.propField]">
                            <Checkbox 
                            :label="radio.value" 
                            :disabled="radio.disabled"
                            v-for="(radio, indexCheck) in col.checkboxs" 
                            :key="indexCheck">{{radio.label}}</Checkbox>
                        </Checkbox-group>
                    </template>
                    <template v-else>
                        <Checkbox 
                        @on-change="onChange(model[col.propField], col.propField, 'checkbox', col.value)"
                        :disabled="col.disabled"
                        v-model="model[col.propField]" 
                        >{{col.label}}</Checkbox>
                    </template>
                </template>
                <template v-else-if="col.formType==='switch'">
                    <span>{{col.label}}</span>
                    <i-switch 
                    @on-change="onChange(model[col.propField], col.propField, 'switch', col.value)"
                    :disabled="col.disabled"
                    v-model="model[col.propField]">
                        <template v-if="col.slot">
                            <span slot="open">{{col.slot.open}}</span>
                            <span slot="close">{{col.slot.close}}</span>
                        </template>
                    </i-switch>
                </template>
                <template v-else-if="col.formType==='button'">
                    <template v-if="col.group">
                        <Button-group style="width: 100%;display: block;float: left;">
                            <Button 
                            v-for="(btn, indexBtn) in col.buttons" 
                            :key="indexBtn" 
                            :disabled="btn.disabled"
                            @click="onClick($event, btn, col)"
                            :type="btn.type || 'primary'" 
                            :shape="btn.shape || null" 
                            :size="btn.size"
                            :long="btn.long"
                            :html-type="btn.htmlType"
                            :icon="btn.icon || null">{{btn.label}}</Button>
                        </Button-group>
                    </template>
                    <template v-else>
                        <Button 
                        :disabled="col.disabled"
                        :type="col.type || 'primary'" 
                        :shape="col.shape" 
                        :icon="col.icon" 
                        :size="col.size"
                        :long="col.long"
                        :html-type="col.htmlType"
                        @click="onClick($event, col)">{{col.label}}</Button>
                    </template>
                </template>
            </Form-item>
            </Col>
        </Row>
        <div class="loading-spin" v-if="loading"></div>
    </Form>
</template>
<script>
export default {
    name: 'custom-form',
    // functional: true,
    data() {
        return {
            formItemStyle: {
               'margin-left': '15px'
            },
            timeout: null,
            loading: false,
            formModel: null
        }
    },
    computed:{
        formRows(){
            var rows = [];
            var rowIndex = -1;
            this.forms.map((item, index)=>{
                // if(index % 4 === 0){
                //     rowIndex++;
                //     rows[rowIndex] = [];
                // }
                rows.push(item);
            })
            return rows;
        }
    },
    methods: {
        onChange(data, field, type, value){
            console.log(data, field, type, value)
            //radio、checkbox、switch不是group时值不对，重新设置
            if(type){
                this.formModel[field] = data ? value : '';
            }else{
                this.formModel[field] = data;
            }
            this.$emit('form:item:change', {
                name: field,
                value: this.formModel[field]
            }, this.formModel);
        },
        onClick(e, data, col){
            console.log(123);
            if(data.click){
                return data.click(e, this.formModel, data, col);
            }
            if(data.api){
                this.doApi(data);
            }
        },
        delay(){
            clearTimeout(this.timeout);
            this.timeout = setTimeout(()=>{
                this.loading = false;
            }, 500);
        },
        doApi(item){
            if(this.loading){
                return;
            }
            this.loading = true;
            item.apiType = item.apiType ? item.apiType.toLowerCase() : 'get';
            var params = Object.assign({}, this.formModel);
            if(item.filterParam){
                params = item.filterParam(params);
            }

            this.$axios[item.apiType](item.api, params)
            .then((data) => {
                this.$emit('form:api:success', data, item);
                this.delay();
            })
            .catch((e) => {
                console.log(e);
                this.$emit('form:api:error', e, item);
                this.delay();
            });
        }
    },
    mounted() {
        this.formModel = Object.assign({}, this.model);
        Object.assign(this.formItemStyle, this.itemStyle);
    },
    props: {
        forms: {
            type: Array,
            required: true
        },
        model: {
            required: true,
            type: Object
        },
        span: {
            type: Number,
            default: 6
        },
        itemStyle: {
            type: Object,
            default(){
                return {}
            }
        },
        labelWidth: {
            type: Number,
            default: 0
        }
    }
}
</script>
