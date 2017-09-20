/**
 * 公式插件
 */
UM.plugins['bbkformula'] = function() {
    var me = this;
    var isToolBarFormula = false;
    var cacheMathIframeList = [];
    // /statics/bbklib/js/formula/v1/
    var iframeUrl = 'http://editor.lewen.com/v1/umeditor/dialogs/formula/formula.html?version=2.3';
    if(process.env.NODE_ENV !== 'production'){
        iframeUrl = me.getOpt('FORMULA_URL') || (me.getOpt('UMEDITOR_HOME_URL') + 'dialogs/bbkformula/formula.html?version=2.3');
    }else if(window.location && window.location.port == 8190){
        var iframeUrl = 'http://editor.lewen.com:8197/v1/umeditor/dialogs/formula/formula.html';
    }

    //初始化此处需要
    var time = new Date()
    console.log(time.getHours() + ': '+ time.getMinutes()+":"+time.getSeconds());

    var $mathRole = $('#forHiddenFormula');
    //由于其他样式影响，此处，选用其他方式，注释原先的
    if(!$mathRole.length){
        var div = document.createElement('div');
        $(div).css({
            display: 'block',
            position: 'absolute',
            top: '-99999px'
        });
        $(div).attr({
            id: 'forHiddenFormula',
            'math-role': 'bbk_math'
        });
        document.body.appendChild(div);
        $mathRole = $(div);
    }

    function getActiveIframe() {
        return me.$body.find('iframe.bbk-edui-formula-active')[0] || null;
    }

    function blurActiveIframe() {
        var iframe = getActiveIframe();

        //通过postMessage来通信。
        iframe && UM.utils.postMessage({
            type:'blur',
            id: iframe.id
        }, iframe);
    }

    function loadIframe() {
        var $iframe;
        var iframeId = cacheMathIframeList.shift(0);

        $iframe = $('#' + iframeId)

        if ($iframe && $iframe.length) {
            $iframe.attr('src', iframeUrl);
            $iframe.on('load', function() {
                $iframe.off('load');
                loadIframe();
            })
        }
    }

    function doCheck2(arr, doc){
        for (var i = 0; i < arr.length; i++) {
            var child = arr[i];

            if(child.children && child.children.length < 2){
                if(child.children.length < 1){//0个，不存在子元素
                    for (var i = 0; i < 2; i++) {
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                        child.appendChild(mo);
                    };
                }else if(child.children.length == 1){//只有一个节点时
                    var first = child.children[0];
                    if(first.type !== 'element'){//不是元素节点
                        var text = ' ';
                        if(first.type === 'text'){//是文本节点
                            text = first.data;
                        }

                        child.removeChild(first);
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(text);
                        var mo1 = doc.createElement('mo');
                        var text1 = doc.createTextNode(' ');
                        mo.appendChild(text);
                        mo1.appendChild(text1);
                        child.appendChild(mo);
                        child.appendChild(mo1);
                    }else{
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                        child.appendChild(mo);
                    }

                }
            }else if(child.children && child.children.length === 2){//正好2个，需要判断是否为文本节点
                var first = child.children[0];
                var second = child.children[1];
                if(first.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(first.type == 'text'){
                        var text = doc.createTextNode(first.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, first);
                }
                if(second.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(second.type == 'text'){
                        var text = doc.createTextNode(second.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, second);
                }
            }else if(child.children && child.children.length > 2){//多于2个
                var first = child.children[child.children.length - 1];
                if(first.type !== 'element'){
                    var text = ' ';
                    if(first.type === 'text'){
                        text = first.data;
                    }

                    var mo = doc.createElement('mo');
                    var textNode = doc.createTextNode(text);
                    mo.appendChild(textNode);
                    child.replaceChild(mo, first);
                    first = child.children[child.children.length - 1];
                }
                var mrow = doc.createElement('mrow');
                for (var i = 0; i < child.children.length - 1;) {
                    var item = child.children[i];
                    if(item.type !== 'element'){
                        var txt = ' ';
                        if(item.type === 'text'){
                            txt = item.data;
                        }
                        var mo = doc.createElement('mo');
                        var textNode = doc.createTextNode(txt);
                        mo.appendChild(textNode);
                        child.replaceChild(mo, child.children[i]);
                    }
                    mrow.appendChild(child.children[i]);
                };
                child.insertBefore(mrow, first);
            }
        };
    }

    function doCheck3(arr, doc){
        for (var i = 0; i < arr.length; i++) {
            var child = arr[i];
            if(child.children && child.children.length < 3){
                if(child.children.length < 1){//0个，不存在子元素
                    for (var i = 0; i < 3; i++) {
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                        child.appendChild(mo);
                    };
                }else if(child.children.length == 1){//只有一个节点时
                    var first = child.children[0];
                    if(first.type !== 'element'){//不是元素节点
                        var text = ' ';
                        if(first.type === 'text'){//是文本节点
                            text = first.data;
                        }

                        child.removeChild(first);
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(text);
                        var mo1 = doc.createElement('mo');
                        var text1 = doc.createTextNode(' ');
                        var mo2 = doc.createElement('mo');
                        var text2 = doc.createTextNode(' ');
                        mo.appendChild(text);
                        mo1.appendChild(text1);
                        mo2.appendChild(text2);
                        child.appendChild(mo);
                        child.appendChild(mo1);
                        child.appendChild(mo2);
                    }else{
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(' ');
                        var mo2 = doc.createElement('mo');
                        var text2 = doc.createTextNode(' ');
                        mo.appendChild(text);
                        child.appendChild(mo);
                        mo2.appendChild(text2);
                        child.appendChild(mo2);
                    }

                }else if(child.children.length == 2){
                    var first = child.children[0];
                    var second = child.children[1];
                    if(first.type !== 'element'){
                        var mo = doc.createElement('mo');
                        if(first.type == 'text'){
                            var text = doc.createTextNode(first.data);
                            mo.appendChild(text);
                            
                        }else{
                            var text = doc.createTextNode(' ');
                            mo.appendChild(text);
                        }
                        child.replaceChild(mo, first);
                    }
                    if(second.type !== 'element'){
                        var mo = doc.createElement('mo');
                        if(second.type == 'text'){
                            var text = doc.createTextNode(second.data);
                            mo.appendChild(text);
                            
                        }else{
                            var text = doc.createTextNode(' ');
                            mo.appendChild(text);
                        }
                        child.replaceChild(mo, second);
                    }

                    var mo = doc.createElement('mo');
                    var text = doc.createTextNode(' ');
                    mo.appendChild(text);
                    child.appendChild(mo);
                }
            }else if(child.children && child.children.length === 3){//正好2个，需要判断是否为文本节点
                var first = child.children[0];
                var second = child.children[1];
                var third = child.children[2];
                if(first.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(first.type == 'text'){
                        var text = doc.createTextNode(first.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, first);
                }
                if(second.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(second.type == 'text'){
                        var text = doc.createTextNode(second.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, second);
                }

                if(third.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(third.type == 'text'){
                        var text = doc.createTextNode(third.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, third);
                }

            }else if(child.children && child.children.length > 3){//多于2个
                var first = child.children[0];
                var second = child.children[1];
                if(first.type !== 'element'){
                    var text = ' ';
                    if(first.type == 'text'){
                        text = first.data;
                    }

                    var mo = doc.createElement('mo');
                    var textNode = doc.createTextNode(text);
                    mo.appendChild(textNode);
                    child.replaceChild(mo, first);
                }
                if(second.type !== 'element'){
                    var text = ' ';
                    if(second.type === 'text'){
                        text = second.data;
                    }

                    var mo = doc.createElement('mo');
                    var textNode = doc.createTextNode(text);
                    mo.appendChild(textNode);
                    child.replaceChild(mo, second);
                }
                var mrow = doc.createElement('mrow');
                for (var i = 2; i < child.children.length;i++) {
                    var item = child.children[i];
                    if(item.type !== 'element'){
                        var txt = ' ';
                        if(item.type === 'text'){
                            txt = item.data;
                        }
                        var mo = doc.createElement('mo');
                        var textNode = doc.createTextNode(txt);
                        mo.appendChild(textNode);
                        child.replaceChild(mo, item);
                        item = child.children[i];
                    }

                    mrow.appendChild($.extend({}, item));
                };
                child.children.splice(2);
                child.appendChild(mrow);
            }
        };
    }

    function InitEditorMath() {
        var $iframe, $frame_attrs;
        $frame_attrs = cacheMathIframeList.shift(0);
        var iframeId = $frame_attrs && $frame_attrs.id;
        var mml = $frame_attrs && $frame_attrs.mml;

        $iframe = $('#' + iframeId)
        if($iframe && $iframe.length && mml && iframeId){
            var _mml = $(mml);
            $iframe[0].parentNode.replaceChild(_mml[0] , $iframe[0]);
            // 
            if($iframe.is(':hidden')){
                me.window.mathRender.renderMathHtml3Bar(_mml[0], iframeId, mml, iframeUrl, $mathRole[0]);
                //下面是备份
                // me.window.mathRender.renderMathHtml3(_mml[0], iframeId, mml, iframeUrl, $mathRole[0]);
            }else{

                me.window.mathRender.renderMathHtml3Bar(_mml[0], iframeId, mml, iframeUrl, $mathRole[0]);
                //下面是原始备份
                // me.window.mathRender.renderMathHtml3(_mml[0], iframeId, mml, iframeUrl);
            }
        }
        if(cacheMathIframeList.length){
            InitEditorMath()
        }
    }

    //10进制转16进制
    function demecialToHex(num){
        num = Number(num);
        if(isNaN(num)){
            console.log('错误的数字格式');
            return 'FFFD'
        }
        
        var array = [];
        do{
            var _hex = num%16;
            if(_hex >= 10){
                switch(_hex){
                    case 10:
                        _hex = 'A';
                        break;
                    case 11:
                        _hex = 'B';
                        break;
                    case 12:
                        _hex = 'C';
                        break;
                    case 13:
                        _hex = 'D';
                        break;
                    case 14:
                        _hex = 'E';
                        break;
                    case 15:
                        _hex = 'F';
                        break;
                }
            }
            array.unshift(_hex);
            num = Math.floor(num / 16);
        }while(num);

        for (var i = array.length; i < 4; i++) {
            array.unshift('0');
        };

        return array.join('');

    }


    me.formulaRenderedNum = 0;

    me.addInputRule(function(root) {
        
        $.each(root.getNodesByTagName('a'), function(i, node) {
            if (node.hasAttr('href')) {
               node.setAttr('href', 'javascript:void(0);');
            }
        });

        $.each(root.getNodesByTagName('span'), function(i, node) {
            if (node.hasAttr('render-error')) {
               node.parentNode && node.parentNode.removeChild(node);
            }else if(node.hasAttr('style')){
                var _style = node.getAttr('style');
               _style = _style.replace(/background-(?:.|$)/gi, function(reg, s1){
                        if(/background-[ihacoprs]/.test(reg)){
                            return reg;
                        }
                        return 'background-color: rgb(8,8,8);'+reg.replace('background-','');
                    });
                _style = _style.replace(/(color|background): rgb\(60, 179, 113\);/gi, function(reg, s1){
                    return s1+': rgb(8, 8, 8);'
                })
                .replace(/font-size:0px/gim, '')
                .replace(/rgb\(60, 179, 113\);/gi, 'rgb(8,8,8);')
                .replace(/rgb\(0, 204, 102\)/gi, 'rgb(8,8,8)')
                node.setAttr('style', _style);
            }
        });

        // //下面的math标签都是需要，且只能有2个子元素
        var mfracs = root.getNodesByTagName('mfrac');
        var mroots = root.getNodesByTagName('mroot');
        var munders = root.getNodesByTagName('munder');
        var msups = root.getNodesByTagName('msup');
        var msubs = root.getNodesByTagName('msub');
        var movers = root.getNodesByTagName('mover');
        var msubsups = root.getNodesByTagName('msubsup');
        var munderovers = root.getNodesByTagName('munderover');
        doCheck2(mfracs, UM.uNode);
        doCheck2(mroots, UM.uNode);
        doCheck2(munders, UM.uNode);
        doCheck2(msups, UM.uNode);
        doCheck2(msubs, UM.uNode);
        doCheck2(movers, UM.uNode);
        doCheck3(msubsups, UM.uNode);
        doCheck3(munderovers, UM.uNode);

        $.each(root.getNodesByTagName('mtext'), function(i, node) {
            var _html = node.innerHTML();

            _html = _html.replace(/&#x26;|&amp;#x26;/gim, '&');
            // var list = _html.match(/&amp;#x[A-Za-z0-9]{4}/gim);
            var list = _html.match(/(&amp;|&)#x([a-zA-Z0-9]+);/gi);
            var gbkCodes = [];
            var bufferCodes;

            var result = '';

            if (!list || !list.length) {
                return;
            }

            if (list.length === 1 && (list[0].substr(3, 2) < "A1" || list[0].substr(3, 2) > "FE")) {
                return;
            }

            // 如果是空格的话。
            var isWhitespace = list.every(function(element, index, array) {
                return element === "&#x00A0;";
            });

            if (isWhitespace) {
                return;
            }

            list.forEach(function(item, index) {
                var byte1 = item.substr(7, 2);
                var byte2 = item.substr(9, 2);
                gbkCodes.push(byte1);
                gbkCodes.push(byte2)
            });
            var gbk = window.gbk;
            var getBufferCodes = function() {
                var byte1 = gbkCodes.splice(0, 1)[0];
                var byte2;

                if (byte1 === '00') {
                    byte1 = gbkCodes.splice(0, 1)[0];
                    gbkCodes.splice(0, 1);
                    byte2 = gbkCodes.splice(0, 1)[0];
                } else {
                    byte2 = gbkCodes.splice(0, 1)[0];
                }

                return [byte1,byte2];
            };

            var decodeCodes = function() {
                var codes = getBufferCodes().join('');
                var oc = gbk[parseInt(codes, 16)];
                if(oc){
                    var _str = String.fromCharCode(oc);
                    result += _str;
                }else{
                    result += '&#x'+codes+';';
                }

                if (gbkCodes.length) decodeCodes();
            };
            decodeCodes();
            if(!result){
                return;
            }
            node.innerHTML(result);

        });

        $.each(root.getNodesByTagName('math'), function(i, node) {
            var mathml = '';
            var isInsert = false;
            for(var i in node.attrs){
                if(i !== 'xmlns'){
                    delete node.attrs[i];
                }
            }

            //移除包含math标签
            var maths = node.getNodesByTagName('math');
            for (var i = 0; i < maths.length; i++) {
                var mathi = maths[i];

                if(mathi.children && mathi.children.length){
                    var mrow = UM.uNode.createElement('mrow');
                    mrow.children = mathi.children.splice(0);
                    mathi.parentNode.replaceChild(mrow, mathi);
                }else{
                    mathi.parentNode.removeChild(mathi);
                }
            };
            // 获取文本的mathml
            mathml = node.toHtml();
            // mathml = mathml.replace(/<mspace linebreak="newline">/gi, '<mspace linebreak="newline"/>').replace(/<\/mspace>/,'');

            var _testMathml = mathml.replace(/<\/?[^>]*>/gi,'');
            if (mathml !== '<math xmlns="http://www.w3.org/1998/Math/MathML"></math>' && _testMathml == '') return;
            if (mathml == '<math xmlns="http://www.w3.org/1998/Math/MathML"></math>') isInsert = true;

            // node.tagName = 'iframe';

            // var id = UM.utils.guid('math_iframe');
            // node.setAttr({
            //     'id': id,
            //     'frameborder': '0',
            //     'data-mathml': utils.unhtml(mathml),
            //     'class': 'edui-math-editor',
            //     'style': 'width: 0px; height: 0px; overflow: hidden'
            // });
            // 
            node.tagName = 'math';
            var id = UM.utils.guid('math_span');
            cacheMathIframeList.push({id: id, mml: mathml});
            node.setAttr({
                'id': id
            });

            if (isInsert) node.setAttr({'data-insert': 'true'});


            me.formulaRenderedNum += 1;
        });

        // $.each(root.getNodesByTagName('p'), function(i, node) {
        //     var start = UM.uNode.createElement('span');
        //     start.innerHTML('&nbsp;');
        //     var end = UM.uNode.createElement('span');
        //     end.innerHTML('&nbsp;');
        //     node.insertBefore(start, node.firstChild());
        //     node.insertAfter(end, node.lastChild());
        // });

        setTimeout(function() {
            // loadIframe();
            InitEditorMath()
        }, 300);
    });

    me.addOutputRule(function(root) {
        var mydiv = document.createElement('div');
        $.each(root.getNodesByTagName('iframe'), function(i, node) {
            if (node.hasClass('edui-math-editor')) {
                var math = utils.html(unescape(node.getAttr('data-mathml')));
                //移除空白的mathml标签
                var _testMathml = math.replace(/<\/?[^>]*>/gi,'');
                if (_testMathml == '' && math == '<math xmlns="http://www.w3.org/1998/Math/MathML"></math>' || math == '<math xmlns="http://www.w3.org/1998/Math/MathML"/>'){
                    node.parentNode.removeChild(node);
                    return;
                }
                mydiv.innerHTML = math;
                
                var mathml = UM.htmlparser(mydiv.innerHTML);
                node.parentNode.replaceChild(mathml, node);
            }
        });

        $.each(root.getNodesByTagName('span'), function(i, node) {
            if (node.hasAttr('editor-math-model')) {
                // var id = node.getAttr('id');
                var mmathml = unescape(node.getAttr('data-math'));

                if(mmathml && mmathml != ''){
                    var mmathmlNode = UM.htmlparser(mmathml);
                    node.parentNode.replaceChild(mmathmlNode, node);
                }
                // if(id && node.nextSibling() && node.nextSibling().getAttr('id') == id){
                //     var html = $('script[id='+id+']')[0].innerHTML;
                //     node.parentNode.removeChild(node.nextSibling());
                //     var mathml = UM.htmlparser(html);
                //     node.parentNode.replaceChild(mathml, node);
                // }

                else if(node.hasAttr('style')){
                    var _style = node.getAttr('style');
                    _style = _style.replace(/color: rgb\(60, 179, 113\);/gi, 'color: rgb(8, 8, 8);')
                                    .replace(/rgb\(0, 204, 102\)/gi, 'rgb(8, 8, 8)');
                    node.setAttr('style', _style);
                }
            }else if(node.hasAttr('render-error')){
                node.parentNode && node.parentNode.removeChild(node);
            }else if(node.hasAttr('style')){
                var _style = node.getAttr('style');
                _style = _style.replace(/color: rgb\(60, 179, 113\);/gi, 'color: rgb(8, 8, 8);')
                                .replace(/rgb\(0, 204, 102\)/gi, 'rgb(8, 8, 8)');
                node.setAttr('style', _style);
            }else if(node.hasAttr('editor-math-mark')){
                if(!node.children || !node.children.length || node.innerHTML() === '\u200D'){
                    node.parentNode.removeChild(node);
                }
            }
        });


        $.each(root.getNodesByTagName('math'), function(i, node) {
            var mathml = '';
            var isInsert = false;
            for(var i in node.attrs){
                if(i !== 'xmlns'){
                    delete node.attrs[i];
                }
            }
        });
        $.each(root.getNodesByTagName('script'), function(i, node) {

            // if(node.hasAttr('math-model-origin')){
            //     var id = node.getAttr('id');
            //     if(id){
            //         var html = $('script[id='+id+']')[0].innerHTML;
            //         var mathml = UM.htmlparser(html);
            //         node.parentNode.replaceChild(mathml, node);
            //     }
            // }else
            node.parentNode && node.parentNode.removeChild(node);
        });
        //移除script标签，以免造成
        // me.$body.find('script[math-model-origin="true"]').remove();
    });

    me.addListener('click', function(){
        blurActiveIframe();
    });

    me.addListener('afterexeccommand', function(type, cmd, arg){
        if (cmd != 'formula') {
            blurActiveIframe();
        }
        // else{
        //     //如果输入公式，输入后隐藏公式栏
        //     if(!isToolBarFormula){
        //         UM.fullFormulaAction.hide();
        //     }
        // }
    });


    // 由于搜索的需要，需要重写一个获取公式html的接口。
    me.getFormulaHtml = function() {
        var content;
        var html;

        var root = UM.htmlparser(me.body.innerHTML);
        $.each(root.getNodesByTagName('iframe'), function(i, node) {
            if (node.hasClass('edui-math-editor')) {
                var id = node.getAttr('id');
                var html = $('#' + id).contents().find('.wrs_container')[0].outerHTML;
                var mathml = UM.htmlparser(html);
                node.parentNode.replaceChild(mathml, node);
            }
        });

        content = root.toHtml();

        if (!me.options.wrap) {
            content = content.replace('<p>', '').replace('<\/p>', '');
        }

        content = content.replace(/title="双击编辑公式"/gim,'');

        return content;
    };

    //给自定义模块使用
    me.getFormulaHtmlModal = function() {
        var content;
        var html;
        var mml;

        var root = UM.htmlparser(me.body.innerHTML);
        $.each(root.getNodesByTagName('iframe'), function(i, node) {
            if (node.hasClass('edui-math-editor')) {
                var id = node.getAttr('id');
                var containerWindow = $('#' + id)[0].contentWindow;
                var container = $('#' + id).contents().find('.wrs_container').clone()[0];
                if(container.firstChild && container.firstChild.getAttribute('class') == 'formulaTemp1'){
                    container.removeChild(container.firstChild);
                }
                mml = containerWindow.formula.getMathML();
                container.removeChild(container.lastChild);
                container.removeChild(container.lastChild);
                var a = document.createElement('span');
                // a.style.width = container.style.width;
                a.style.height = container.style.height;
                a.style.verticalAlign = container.style.verticalAlign;
                a.style.position = 'relative';
                a.style.display = 'inline-block';
                a.style.margin = "5px 2px 0 2px";
                a.innerHTML = mml;
                a.setAttribute('data-math', escape(mml));
                a.setAttribute('modal-model', true);
                var mathml = UM.htmlparser(a.outerHTML);
                node.parentNode.replaceChild(mathml, node);
            }
        });
        $.each(root.getNodesByTagName('span'), function(i, node) {
            if (node.hasClass('baidu_bookmart_start')) {
                
                node.parentNode.removeChild(node);
            }else if(node.hasAttr('editor-math-model')){
                var id = node.getAttr('id');
                var mmmathml = unescape(node.getAttr('data-math'));
                if(mmmathml && mmmathml != '' && id){

                }else if(node.hasAttr('style')){
                    var _style = node.getAttr('style');
                    _style = _style.replace(/color: rgb\(60, 179, 113\);/gi, 'color: rgb(8, 8, 8);')
                                    .replace(/rgb\(51, 204, 102\)/gi, 'rgb(8, 8, 8)')
                                    .replace(/rgb\(51, 153, 102\)/gi, 'rgb(8, 8, 8)');
                                    
                    node.setAttr('style', _style);
                }
            }

        });

        content = root.toHtml();

        content = content.replace('<p>', '').replace('<\/p>', '');
        
        content = content.replace(/title="双击编辑公式"/gim,'').replace(/math-modal/gim, '');

        return content;
    }

    me.commands['bbkformula'] = {
        execCommand: function(cmd, mml, action, special) {
            var iframe = getActiveIframe();
            console.log(cmd, mml, action, special);
            if (iframe) {
                var _action;
                // 如果已经存在公式的，直接action。
                if (special) {
                    _action = action;
                } else if (action) {
                    _action = mml || action;
                } else {
                    _action = null;
                }
                isToolBarFormula = false;
                if (_action) {
                    UM.utils.postMessage({
                        type: 'action',
                        data: _action,
                        id: iframe.id
                    }, iframe)
                }else if (mml){
                    UM.utils.postMessage({
                        type: 'insertMathML',
                        data: mml,
                        id: iframe.id
                    }, iframe)
                }else {
                    if(UM.fullFormulaEditOpenState){
                        UM.fullFormulaAction.hide();
                        return;
                    }
                    isToolBarFormula = true;
                    var rect = iframe.getBoundingClientRect();
                    UM.fullFormulaAction.show(rect.top, rect.left, iframe.clientWidth);
                }
            } else {
                var _action;
                if (special) {
                    _action = action;
                } else if (action) {
                    _action = mml || action;
                } else {
                    _action = null;
                }
                var id = 'math_iframe_'+Date.now();
                var _src = iframeUrl;

                mml = mml ? escape(mml) : escape('<math xmlns="http://www.w3.org/1998/Math/MathML" id="new"></math>');
                var insertTempl = '<iframe id="'+id+'" src="'+_src+'" data-mathml="'+ mml +'" class="bbk-edui-math-editor bbk-edui-formula-active" style="width: 0px; height: 0px; overflow: hidden;" frameborder="0" '+(_action ? 'data-action="'+_action+'"':'')+'></iframe>';
                me.execCommand('inserthtml', insertTempl);
                me.focus(true);

                //注释掉以前的方式                
                // if (mml) {
                //     me.execCommand('inserthtml', mml);
                //     me.focus(true);
                // } else if (action) {
                //     var html;

                //     html = '<span data-math-action="' + action + '" class="edui-math-editor"></span>';
                //     me.execCommand('inserthtml', html);

                //     browser.ie && browser.ie9below && setTimeout(function(){
                //         var rng = me.selection.getRange(),
                //             startContainer = rng.startContainer;
                //         if(startContainer.nodeType == 1 && !startContainer.childNodes[rng.startOffset]){
                //             rng.insertNode(me.document.createTextNode(' '));
                //             rng.setCursor()
                //         }
                //     },100);
                // } else {
                //     var _src = 'http://teacher.lewen.com/editor/v1/umeditor/dialogs/formula/formula.html';
                //     if(window.location && window.location.port == 4005){
                //         _src = '/v1/umeditor/dialogs/formula/formula.html';
                //     }
                //     // var insertTempl = '<iframe src="http://teacher.lewen.com/editor/v1/umeditor/dialogs/formula/formula.html?<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;></math>" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;></math>" class="edui-math-editor edui-formula-active" style="width: 0px; height: 0px; overflow: hidden;" frameborder="0"></iframe>';
                //     var insertTempl = '<iframe src="'+_src+'?<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;></math>" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;></math>" class="edui-math-editor edui-formula-active" style="width: 0px; height: 0px; overflow: hidden;" frameborder="0"></iframe>';
                //     me.execCommand('inserthtml', insertTempl);
                //     me.focus(true);
                // }
            }

            // 自动滚动到最后的点。
            if (!me.options.wrap) {
                var range = me.selection.getRange();

                var wordElement = me.$body.find('p');

                if (!iframe && !mml) {
                    // setTimeout(function() {
                        wordElement.scrollLeft(wordElement.scrollLeft() + 20);
                    // }, 3000);
                } else {
                    wordElement.scrollLeft(wordElement.scrollLeft() + 20);
                }
            }

            setTimeout(function() {
                UM.setFullFormulaOpenState(true);
            }, 800);
        },
        queryCommandValue: function (cmdName) {
        },
        queryCommandState: function (cmdName) {
            return 0;
        }
    };

};