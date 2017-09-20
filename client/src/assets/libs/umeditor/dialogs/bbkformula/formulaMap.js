
(function (UM) {
    // body...
    var formulaMap = [{
        action: 'plus',
        content: '+',
        title: '加号'
        }, {
            action: 'minus',
            content: '-',
            title: '减号'
        }, {
            action: 'times',
            content: '×',
            title: '乘号'
        }, {
            action: 'div',
            content: '÷',
            title: '除号'
        }, {
            action: 'middot3',
            content: '·',
            title: '中间点'
        }, {
            action: 'fraction',
            title: '分数'
        }, {
            action: 'square',
            title: '平方'
        }, {
            action: 'cube',
            title: '立方'
        }, {
            action: 'verticalBar',
            title: '绝对值'
        }, {
            action: 'numberPi',
            content: 'π',
            special: true,
            title: '圆周率'
        }, {
            action: 'smallcircle3',
            content: '∘',
            title: '环运算符'
        }, {
            action: 'approx3',
            content: '≈',
            title: '几乎等于'
        }, {
            action: 'ne3',
            content: '≠',
            title: '不等于号'
        }, {
            action: 'less3',
            content: '<',
            title: '小于号'
        }, {
            action: 'leqslant3',
            content: '≦',
            title: '大于等于号'
        }, {
            action: 'geqslant3',
            content: '≧',
            title: '大于等于号'
        }, {
            action: 'plusminus',
            content: '±',
            title: '加减号'
        }, {
            action: 'squareRoot',
            title: '平方根'
        }, {
            action: 'threeRoot',
            title: '立方根'
        }, {
            action: 'superscript',
            title: '上标'
        }, {
            action: 'subscript',
            title: '下标'
        }, {
            action: 'because',
            content: '∵',
            title: '因为'
        }, {
            action: 'therefore',
            content: '∴',
            title: '所以'
        }, {
            action: 'ang3',
            content: '∠',
            title: '角'
        }, {
            action: 'parallel3',
            content: '∥',
            title: '平行于'
        }, {
            action: 'bottom3',
            content: '⊥',
            title: '垂直'
        }, {
            action: 'tildeFullEqual3',
            content: '≅',
            title: '约等于'
        }, {
            action: 'greater3',
            content: '>',
            title: '大于号'
        }, {
            action: 'sim3',
            content: '∼',
            title: '波浪号运算符'
        }, {
            action: 'bigtriangleup3',
            content: '△',
            title: '三角形'
        }, {
            action: 'parallelogram',
            content: '▱',
            title: '平行四边形'
        }, {
            action: 'odot',
            content: '⊙',
            title: '圈点'
        }, {
            action: 'lCurlyColumn',
            title: '二列方程组'
        }, {
            action: 'CubicEquations',
            title: '三列方程组'
        }, {
            action: 'hatAccent',
            title: '弧度'
        }, {
            action: 'isin',
            content: '∈',
            title: '属于'
        }, {
            action: 'notin3',
            content: '∉',
            title: '不属于'
        }, {
            action: 'subsetEqual3',
            content: '⊆',
            title: '子集或等于'
        }, {
            action: 'supersetEqual3',
            content: '⊇',
            title: '超集或等于'
        }, {
            action: 'nlog',
            title: 'Log'
        }, {
            action: 'infinity',
            content: '∞',
            title: '无穷大'
        }, {
            action: 'cup3',
            content: '∪',
            title: '并集'
        }, {
            action: 'cap3',
            content: '∩',
            title: '交集'
        }, {
            action: 'integralSubsuperscript',
            title: '定积分'
        }, {
            action: 'vectorAccent',
            title: '矢量着重符'
        }, {
            action: 'sumUnderover',
            title: '求和符号'
        }, {
            action: 'varphi',
            content: 'ϕ',
            title: 'Phi'
        }, {
            action: 'alpha',
            content: 'α',
            title: 'Alpha'
        }, {
            action: 'beta',
            content: 'β',
            title: 'Beta'
        }, {
            action: 'gamma',
            content: 'γ',
            title: 'Gamma'
        }, {
            action: 'rho',
            content: 'ρ',
            title: 'Rho'
        }, {
            action: 'Omega',
            content: 'Ω',
            title: 'Omega'
        }, {
            action: 'theta',
            content: 'θ',
            title: 'Theta'
        }, {
            action: 'exists3',
            content: '∃',
            title: '存在'
        }, {
            action: 'eta',
            content: 'η',
            title: 'Eta'
        }, {
            action: 'lambda',
            content: 'λ',
            title: 'Lambda'
        }, {
            action: 'omega',
            content: 'ω',
            title: 'Omega'
        }, {
            action: 'mu',
            content: 'μ',
            title: 'Mu'
        }, {
            action: 'psi',
            content: 'ψ',
            title: 'Psi'
        }, {
            action: 'ctdot',
            content: '⋯',
            title: '中线省略号'
        }, {
            action: 'backspace',
            title: '回删'
        }
    ];

    UM.utils.each(formulaMap, function(formula, index) {
        var actionName = formula.action,
            actionTitle = formula.title,
            actionUseFrame = formula.useFrame,
            actionCont = formula.content,
            actionSpecial = formula.special;

        if (actionCont) {
            if (actionUseFrame) {
                UM.registerFormula(actionName, function(name) {
                    var me = this;

                    var $btn = $.eduibutton({
                        icon: actionName,
                        click: function() {
                            me.execCommand('formula', null, actionCont, actionSpecial);
                        },
                        title: actionTitle
                    });

                    return $btn;
                });
            } else {
                UM.registerFormula(actionName, function(name) {
                    var me = this;

                    var $btn = $.eduibutton({
                        icon: name,
                        click: function() {
                            me.execCommand('formula', actionCont, actionName, actionSpecial);
                        },
                        title: actionTitle
                    });

                    return $btn;
                });
            }

        } else {
            UM.registerFormula(actionName, function(name) {
                var me = this;

                if (actionName === 'backspace') {
                    var _btn = $.eduibutton({
                        icon: actionName,
                        click: function() {
                            var range = me.selection.getRange();
                            if (!window.formula.isFocus && (me.isFocus() || range.hasBookmark(me))) {
                                range.backspace();
                            } else {
                                me.execCommand('formula', null, actionName, actionSpecial);
                            }
                        },
                        title: actionTitle
                    });

                    return _btn;
                }

                var $btn = $.eduibutton({
                    icon: actionName,
                    click: function() {
                        me.execCommand('formula', null, actionName, actionSpecial);
                    },
                    title: actionTitle
                });

                return $btn;
            });
        }
    });



    (function() {

        var fullFormulaMap = {
            preset: [{
                title: '二次公式',
                mml: '<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi><mo>±</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math>'
            }, {
                title: '二项式定理',
                mml: '<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mfenced><mrow><mi>x</mi><mo>+</mo><mi>a</mi></mrow></mfenced><mn>2</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mfenced><mtable><mtr><mtd><mi>n</mi></mtd></mtr><mtr><mtd><mi>k</mi></mtd></mtr></mtable></mfenced><msup><mi>x</mi><mi>k</mi></msup><msup><mi>a</mi><mrow><mi>n</mi><mo>-</mo><mi>k</mi></mrow></msup></math>'
            }, {
                title: '勾股定理',
                mml: '<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></math>'
            }],
            tab: [{
                title: '常规',
                name: 'general',
                childs: [{
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'fraction',
                        title: '分数'
                    }, {
                        action: 'bevelledFraction',
                        title: '斜角分数'
                    }, {
                        action: 'squareRoot',
                        title: '平方根'
                    }, {
                        action: 'nRoot',
                        title: '求根'
                    }]
                }, {
                    size: 33,
                    row: 1,
                    list: [{
                        action: 'superscript',
                        title: '上标'
                    }, {
                        action: 'subscript',
                        title: '下标'
                    }]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'parenthesis',
                        title: '括号'
                    }, {
                        action: 'verticalBar',
                        title: '绝对值'
                    }, {
                        action: 'squareBracket',
                        title: '中括号'
                    }, {
                        action: 'curlyBracket',
                        title: '大括号'
                    }]
                }, {
                    size: 33,
                    row: 1,
                    list: [{
                        action: 'encloseLongDivision',
                        title: '长除法'
                    }, {
                        action: 'encloseLongDivision2',
                        title: '带商长除法'
                    }]
                }, {
                    size: 22,
                    row: 1,
                    list: [{
                        action: 'hatAccent',
                        title: '弧度'
                    }, {
                        action: 'vectorAccent',
                        title: '矢量'
                    }, {
                        action: 'rightArrowAccent',
                        title: '箭头'
                    }]
                }, {
                    size: 22,
                    row: 4,
                    list: [{
                        action: 'geq',
                        content: '≥',
                        title: '大于等于'
                    }, {
                        action: 'leq',
                        content: '≤',
                        title: '小于等于'
                    }, {
                        action: 'isin',
                        content: '∈',
                        title: '属于'
                    }, {
                        action: 'notin3',
                        content: '∉',
                        title: '不属于'
                    }, {
                        action: 'subsetEqual',
                        content: '⊆',
                        title: '子集或等于'
                    }, {
                        action: 'subset',
                        content: '⊂',
                        title: '子集'
                    }, {
                        action: 'cup',
                        content: '∪',
                        title: '并集'
                    }, {
                        action: 'cap',
                        content: '∩',
                        title: '交集'
                    }, {
                        action: 'comp',
                        content: '∁',
                        title: '补集'
                    }, {
                        action: 'trueIn',
                        content: '⊊',
                        title: '真包含'
                    }, {
                        action: 'noIn',
                        content: '⊈',
                        title: '不包含'
                    }, {
                        action: 'noIn3',
                        content: '⊄',
                        title: '不包含'
                    }]
                }, {
                    size: 22,
                    row: 2,
                    list: [{
                        action: 'ang3',
                        content: '∠',
                        title: '角'
                    }, {
                        action: 'parallel3',
                        content: '∥',
                        title: '平行于'
                    }, {
                        action: 'bottom3',
                        content: '⊥',
                        title: '垂直'
                    }, {
                        action: 'parallelogram',
                        content: '▱',
                        title: '平行四边形'
                    }, {
                        action: 'because',
                        content: '∵',
                        title: '因为'
                    }, {
                        action: 'therefore',
                        content: '∴',
                        title: '所以'
                    }]
                }, {
                    size: 22,
                    row: 1,
                    list: [{
                        action: 'emptyset',
                        content: '∅',
                        title: '空集'
                    }, {
                        action: 'infinity',
                        content: '∞',
                        title: '无穷大'
                    }, {
                        action: 'numberPi',
                        content: 'π',
                        special: true,
                        title: '圆周率'
                    }]
                }, {
                    size: 22,
                    row: 2,
                    list: [{
                        action: 'plus',
                        content: '+',
                        title: '加号'
                    }, {
                        action: 'times',
                        content: '×',
                        title: '乘号'
                    }, {
                        action: 'minus',
                        content: '-',
                        title: '减号'
                    }, {
                        action: 'slash',
                        content: '/',
                        title: '斜号'
                    }, {
                        action: 'plusminus',
                        content: '±',
                        title: '加减号'
                    }, {
                        action: 'div',
                        content: '÷',
                        title: '除号'
                    }]
                }]
            }, {
                title: '符号',
                name: 'symbols',
                childs: [{
                    size: 22,
                    row: 1,
                    list: [{
                        action: 'negateOperator',
                        title: '求反运算符'
                    }]
                }, {
                    size: 22,
                    row: 4,
                    list: [{
                        action: 'plus',
                        content: '+',
                        title: '加号'
                    }, {
                        action: 'minus',
                        content: '-',
                        title: '减号'
                    }, {
                        action: 'plusminus',
                        content: '±',
                        title: '加减号'
                    }, {
                        action: 'times',
                        content: '×',
                        title: '乘号'
                    }, {
                        action: 'div',
                        content: '÷',
                        title: '除号'
                    }, {
                        action: 'asterisk',
                        content: '*',
                        title: '星号'
                    }, {
                        action: 'middot',
                        content: '·',
                        title: '中间点'
                    }, {
                        action: 'slash',
                        content: '/',
                        title: '斜杠'
                    }, {
                        action: 'smallcircle',
                        content: '∘',
                        title: '环运算符'
                    }, {
                        action: 'backslash',
                        content: '\\',
                        title: '反斜杠'
                    }, {
                        action: 'setminus',
                        content: '∖',
                        title: '集合减号'
                    }, {
                        action: 'minusplus',
                        content: '∓',
                        title: '正负号'
                    }]
                }, {
                    size: 22,
                    row: 4,
                    list: [{
                        action: 'numberPi',
                        content: '',
                        title: '圆周率'
                    }, {
                        action: 'infinity',
                        content: '∞',
                        title: '无穷大'
                    }, {
                        action: 'emptyset',
                        content: '∅',
                        title: '空集'
                    }, {
                        action: 'partial',
                        content: '∂',
                        title: '偏微分'
                    }, {
                        action: 'increment3',
                        content: '∆',
                        title: '增量'
                    }, {
                        action: 'nabla3',
                        content: '∇',
                        title: '倒三角'
                    }, {
                        action: 'degree3',
                        content: '°',
                        title: '度'
                    }, {
                        action: 'apos3',
                        title: '分'
                    }, {
                        action: 'aposApos',
                        title: '秒'
                    }, {
                        action: 'backprime',
                        content: '‵',
                        title: ''
                    }]
                }, {
                    size: 22,
                    row: 3,
                    list: [{
                        action: 'equal3',
                        content: '=',
                        title: '等号'
                    }, {
                        action: 'sim3',
                        content: '∼',
                        title: '破浪号'
                    }, {
                        action: 'simeq3',
                        content: '≃',
                        title: '渐进等于'
                    }, {
                        action: 'congruent3',
                        content: '≡',
                        title: '全等于'
                    }, {
                        action: 'approx3',
                        content: '≈',
                        title: '几乎等于'
                    }, {
                        action: 'tildeFullEqual3',
                        content: '≅',
                        title: '越等于'
                    }, {
                        action: 'ne3',
                        content: '≠',
                        title: '不等于'
                    }, {
                        action: 'notCongruent3',
                        content: '≢',
                        title: '不全等于'
                    }, {
                        action: 'notTilde3',
                        content: '≁',
                        title: '非波浪号'
                    }]
                }, {
                    size: 22,
                    row: 5,
                    list: [{
                        action: 'greater3',
                        content: '>',
                        title: '大于号'
                    }, {
                        action: 'geq3',
                        content: '≥',
                        title: '大于或等于'
                    }, {
                        action: 'geqslant3',
                        content: '⩾',
                        title: '大于或等于'
                    }, {
                        action: 'less3',
                        content: '<',
                        title: '小于号'
                    }, {
                        action: 'leq3',
                        content: '≤',
                        title: '小于或等于'
                    }, {
                        action: 'leqslant3',
                        content: '⩽',
                        title: '小于或等于'
                    }, {
                        action: 'lne3',
                        content: '⪇',
                        title: '小于且不等于'
                    }, {
                        action: 'gneq3',
                        content: '⪈',
                        title: '大于且不等于'
                    }, {
                        action: 'mlt3',
                        content: '≪',
                        title: '远小于'
                    }, {
                        action: 'mgt3',
                        content: '≫',
                        title: '远大于'
                    }, {
                        action: 'propto3',
                        content: '∝',
                        title: '成比例'
                    }, {
                        action: 'precedes',
                        content: '≺',
                        title: ''
                    }, {
                        action: 'follows',
                        content: '≻',
                        title: ''
                    }, {
                        action: 'leftSubGroup',
                        content: '⊲',
                        title: ''
                    }, {
                        action: 'rghtSubGroup',
                        content: '⊳',
                        title: ''
                    }]
                }, {
                    size: 22,
                    row: 8,
                    list: [{
                        action: 'in3',
                        content: '∈',
                        title: '属于'
                    }, {
                        action: 'ni3',
                        content: '∋',
                        title: '子集'
                    }, {
                        action: 'cup3',
                        content: '∪',
                        title: '并集'
                    }, {
                        action: 'cap3',
                        content: '∩',
                        title: '交集'
                    }, {
                        action: 'subset3',
                        content: '⊂',
                        title: '子集'
                    }, {
                        action: 'supset3',
                        content: '⊃',
                        title: '超集'
                    }, {
                        action: 'comp',
                        content: '∁',
                        title: '补集'
                    }, {
                        action: 'trueIn',
                        content: '⊊',
                        title: '真包含'
                    }, {
                        action: 'trueIn2',
                        content: '⊋',
                        title: '真包含（反）'
                    }, {
                        action: 'noIn',
                        content: '⊈',
                        title: '不包含'
                    }, {
                        action: 'noIn2',
                        content: '⊉',
                        title: '不包含（反）'
                    }, {
                        action: 'noIn3',
                        content: '⊄',
                        title: '不包含'
                    }, {
                        action: 'noIn4',
                        content: '⊅',
                        title: '不包含（反）'
                    }, {
                        action: 'notin3',
                        content: '∉',
                        title: '不属于'
                    }, {
                        action: 'notni3',
                        content: '∌',
                        title: '非子集'
                    }, {
                        action: 'subsetEqual',
                        content: '⊆',
                        title: '子集或等于'
                    }, {
                        action: 'supersetEqual3',
                        content: '⊇',
                        title: '超集或等于'
                    }, {
                        action: 'sqsub3',
                        content: '⊏',
                        title: '方形子集'
                    }, {
                        action: 'sqsupset3',
                        content: '⊐',
                        title: '方形超集'
                    }, {
                        action: 'sqsubseteq3',
                        content: '⊑',
                        title: '方形子集或等于'
                    }, {
                        action: 'squareSupersetEqual3',
                        content: '⊒',
                        title: '方形超集或等于'
                    }, {
                        action: 'sqcap3',
                        content: '⊓',
                        title: '求交运算符'
                    }, {
                        action: 'squareUnion3',
                        content: '⊔',
                        title: '求并运算符'
                    }]
                }, {
                    size: 22,
                    row: 3,
                    list: [{
                        action: 'and3',
                        content: '∧',
                        title: '逻辑与'
                    }, {
                        action: 'or3',
                        content: '∨',
                        title: '逻辑或'
                    }, {
                        action: 'not3',
                        content: '¬',
                        title: '“非”符号'
                    }, {
                        action: 'forall3',
                        content: '∀',
                        title: '适合于全部'
                    }, {
                        action: 'exists3',
                        content: '∃',
                        title: '存在'
                    }, {
                        action: 'notExists3',
                        content: '∄',
                        title: '不存在'
                    }, {
                        action: 'therefore',
                        content: '∴',
                        title: '所以'
                    }, {
                        action: 'because',
                        content: '∵',
                        title: '因为'
                    }]
                }, {
                    size: 22,
                    row: 3,
                    list: [{
                        action: 'ang3',
                        content: '∠',
                        title: '角'
                    }, {
                        action: 'parallel3',
                        content: '∥',
                        title: '平行于'
                    }, {
                        action: 'bottom3',
                        content: '⊥',
                        title: '垂直'
                    }, {
                        action: 'nparallel3',
                        content: '∦',
                        title: '不平行于'
                    }, {
                        action: 'measuredangle3',
                        content: '∡',
                        title: '实测角'
                    }, {
                        action: 'angsph3',
                        content: '∢',
                        title: '球面角'
                    }, {
                        action: 'diamond',
                        content: '⋄',
                        title: 'Diamond'
                    }]
                }, {
                    size: 22,
                    row: 2,
                    list: [{
                        action: 'square3',
                        content: '□',
                        title: '方形'
                    }, {
                        action: 'bigtriangleup3',
                        content: '△',
                        title: '三角形'
                    }, {
                        action: 'cir3',
                        content: '○',
                        title: '圆'
                    }, {
                        action: 'parallelogram',
                        content: '▱',
                        title: '平行四边形'
                    }]
                }, {
                    size: 22,
                    row: 3,
                    list: [{
                        action: 'oplus3',
                        content: '⊕',
                        title: '循环加号'
                    }, {
                        action: 'otimes3',
                        content: '⊗',
                        title: '循环乘号'
                    }, {
                        action: 'odot',
                        content: '⊙',
                        title: '循环点号'
                    }, {
                        action: 'ominus',
                        content: '⊝',
                        title: 'circled dash'
                    }, {
                        action: 'ostar',
                        content: '⊛',
                        title: 'circled asterisk'
                    }, {
                        action: 'odivide',
                        content: '⨸',
                        title: 'circled division'
                    }, {
                        action: 'bullet',
                        content: '∙',
                        title: 'Bullet'
                    }]
                }]
            }, {
                title: '箭头',
                name: 'arrows',
                childs: [{
                    size: 22,
                    row: 9,
                    list: [{
                        action: 'leftarrow',
                        content: '←',
                        title: '向左箭头'
                    }, {
                        action: 'rightarrow',
                        content: '→',
                        title: '向右箭头'
                    }, {
                        action: 'leftrightarrow',
                        content: '↔',
                        title: '左右箭头'
                    }, {
                        action: 'DoubleLeftArrow',
                        content: '⇐',
                        title: '向左双箭头'
                    }, {
                        action: 'DoubleRightArrow',
                        content: '⇒',
                        title: '向右双箭头'
                    }, {
                        action: 'DoubleLeftRightArrow',
                        content: '⇔',
                        title: '左右双箭头'
                    }, {
                        action: 'leftTeeArrow',
                        content: '↤',
                        title: '条形向左箭头'
                    }, {
                        action: 'map',
                        content: '↦',
                        title: '条形向右箭头'
                    }, {
                        action: 'rlhar',
                        content: '⇌',
                        title: '双鱼叉符号'
                    }, {
                        action: 'nearr',
                        content: '↗',
                        title: '东北箭头'
                    }, {
                        action: 'searr',
                        content: '↘',
                        title: '东南箭头'
                    }, {
                        action: 'larrhk',
                        content: '↩',
                        title: '带钩向左箭头'
                    }, {
                        action: 'hookrightarrow',
                        content: '↪',
                        title: '带钩向右箭头'
                    }, {
                        action: 'nwarr',
                        content: '↖',
                        title: '西北箭头'
                    }, {
                        action: 'swarrow',
                        content: '↙',
                        title: '西南箭头'
                    }, {
                        action: 'lharu',
                        content: '↼',
                        title: '向左鱼叉符号'
                    }, {
                        action: 'rharu',
                        content: '⇀',
                        title: '向右鱼叉符号'
                    }, {
                        action: 'uparrow',
                        content: '↑',
                        title: '向上箭头'
                    }, {
                        action: 'downArrow',
                        content: '↓',
                        title: '向下箭头'
                    }, {
                        action: 'upDownArrow',
                        content: '↕',
                        title: '上下箭头'
                    }, {
                        action: 'doubleUpArrow',
                        content: '⇑',
                        title: '向上双箭头'
                    }, {
                        action: 'doubleDownArrow',
                        content: '⇓',
                        title: '向下双箭头'
                    }, {
                        action: 'doubleUpDownArrow',
                        content: '⇕',
                        title: '上下双箭头'
                    }, {
                        action: 'rghtEquilib',
                        content: '⥭',
                        title: ''
                    }, {
                        action: 'lftEquilib',
                        content: '⥪',
                        title: ''
                    }, {
                        action: 'CR',
                        content: '↵',
                        title: 'enter符号'
                    }]
                }, {
                    size: 22,
                    row: 2,
                    list: [{
                        action: 'vellip',
                        content: '⋮',
                        title: '垂直省略号'
                    }, {
                        action: 'hellip',
                        content: '…',
                        title: '水平省略号'
                    }, {
                        action: 'ctdot',
                        content: '⋯',
                        title: '中线省略号'
                    }, {
                        action: 'utdot',
                        content: '⋰',
                        title: '上斜省略号'
                    }, {
                        action: 'dtdot',
                        content: '⋱',
                        title: '下斜省略号'
                    }]
                }, {
                    size: 33,
                    row: 3,
                    list: [{
                        action: 'rightArrowWithOverScript',
                        title: '上有标签的右箭头'
                    }, {
                        action: 'leftArrowWithOverScript',
                        title: '上有标签的左箭头'
                    }, {
                        action: 'rightArrowWithUnderScript',
                        title: '下有标签的右箭头'
                    }, {
                        action: 'leftArrowWithUnderScript',
                        title: '下有标签的左箭头'
                    }, {
                        action: 'rightArrowWithUnderAndOverScript',
                        title: '上下有标签的右箭头'
                    }, {
                        action: 'leftArrowWithUnderAndOverScript',
                        title: '上下有标签的左箭头'
                    }]
                }]
                // , {
                //     size: 33,
                //     row: 2,
                //     list: [{
                //         action: 'vectorAccent2',
                //         title: '矢量着重符'
                //     }, {
                //         action: 'rightArrowAccent2',
                //         title: '箭头着重符'
                //     }, {
                //         action: 'rightLeftArrowAccent2',
                //         title: '左右箭头着重符'
                //     }, {
                //         action: 'barAccent2',
                //         title: '横线着重符'
                //     }]
                // }]
            }, {
                title: '希腊字母',
                name: 'greek',
                childs: [{
                    size: 22,
                    row: 10,
                    list: [{
                        action: 'alpha',
                        content: 'α',
                        title: 'Alpha'
                    }, {
                        action: 'beta',
                        content: 'β',
                        title: 'Beta'
                    }, {
                        action: 'gamma',
                        content: 'γ',
                        title: 'Gamma'
                    }, {
                        action: 'delta',
                        content: 'δ',
                        title: 'Delta'
                    }, {
                        action: 'epsilon',
                        content: 'ε',
                        title: 'Epsilon'
                    }, {
                        action: 'zeta',
                        content: 'ζ',
                        title: 'Zeta'
                    }, {
                        action: 'eta',
                        content: 'η',
                        title: 'Eta'
                    }, {
                        action: 'theta',
                        content: 'θ',
                        title: 'Theta'
                    }, {
                        action: 'vartheta',
                        content: 'ϑ',
                        title: 'Vartheta'
                    }, {
                        action: 'iota',
                        content: 'ι',
                        title: 'Iota'
                    }, {
                        action: 'kappa',
                        content: 'κ',
                        title: 'Kappa'
                    }, {
                        action: 'lambda',
                        content: 'λ',
                        title: 'Lambda'
                    }, {
                        action: 'mu',
                        content: 'μ',
                        title: 'Mu'
                    }, {
                        action: 'nu',
                        content: 'ν',
                        title: 'Nu'
                    }, {
                        action: 'xi',
                        content: 'ξ',
                        title: 'Xi'
                    }, {
                        action: 'omicron',
                        content: 'ο',
                        title: 'Omicron'
                    }, {
                        action: 'pi',
                        content: 'π',
                        title: 'Pi'
                    }, {
                        action: 'varPiOld',
                        content: 'ϖ',
                        title: 'VarPiOld'
                    }, {
                        action: 'rho',
                        content: 'ρ',
                        title: 'Rho'
                    }, {
                        action: 'sigmav',
                        content: 'ς',
                        title: 'Sigmav'
                    }, {
                        action: 'sigma',
                        content: 'σ',
                        title: 'Sigma'
                    }, {
                        action: 'tau',
                        content: 'τ',
                        title: 'Tau'
                    }, {
                        action: 'upsilon',
                        content: 'υ',
                        title: 'Upsilon'
                    }, {
                        action: 'phi',
                        content: 'φ',
                        title: 'Phi'
                    }, {
                        action: 'varphi',
                        content: 'ϕ',
                        title: 'Varphi'
                    }, {
                        action: 'chi',
                        content: 'χ',
                        title: 'Chi'
                    }, {
                        action: 'psi',
                        content: 'ψ',
                        title: 'Psi'
                    }, {
                        action: 'omega',
                        content: 'ω',
                        title: 'Omega'
                    }]
                }, {
                    size: 22,
                    row: 10,
                    list: [{
                        action: 'Alpha',
                        content: 'Α',
                        title: 'Alpha'
                    }, {
                        action: 'Beta',
                        content: 'Β',
                        title: 'Beta'
                    }, {
                        action: 'Gamma',
                        content: 'Γ',
                        title: 'Gamma'
                    }, {
                        action: 'Delta',
                        content: 'Δ',
                        title: 'Delta'
                    }, {
                        action: 'Epsilon',
                        content: 'Ε',
                        title: 'Epsilon'
                    }, {
                        action: 'Zeta',
                        content: 'Ζ',
                        title: 'Zeta'
                    }, {
                        action: 'Eta',
                        content: 'Η',
                        title: 'Eta'
                    }, {
                        action: 'Theta',
                        content: 'Θ',
                        title: 'Theta'
                    }, {
                        action: 'Iota',
                        content: 'Ι',
                        title: 'Iota'
                    }, {
                        action: 'Kappa',
                        content: 'Κ',
                        title: 'Kappa'
                    }, {
                        action: 'Lambda',
                        content: 'Λ',
                        title: 'Lambda'
                    }, {
                        action: 'Mu',
                        content: 'Μ',
                        title: 'Mu'
                    }, {
                        action: 'Nu',
                        content: 'Ν',
                        title: 'Nu'
                    }, {
                        action: 'Xi',
                        content: 'Ξ',
                        title: 'Xi'
                    }, {
                        action: 'Omicron',
                        content: 'Ο',
                        title: 'Omicron'
                    }, {
                        action: 'Pi',
                        content: 'Π',
                        title: 'Pi'
                    }, {
                        action: 'Rho',
                        content: 'Ρ',
                        title: 'Rho'
                    }, {
                        action: 'Sigma',
                        content: 'Σ',
                        title: 'Sigma'
                    }, {
                        action: 'Tau',
                        content: 'Τ',
                        title: 'Tau'
                    }, {
                        action: 'Upsilon',
                        content: 'Υ',
                        title: 'Upsilon'
                    }, {
                        action: 'Phi',
                        content: 'Φ',
                        title: 'Phi'
                    }, {
                        action: 'Chi',
                        content: 'Χ',
                        title: 'Chi'
                    }, {
                        action: 'Psi',
                        content: 'Ψ',
                        title: 'Psi'
                    }, {
                        action: 'Omega',
                        content: 'Ω',
                        title: 'Omega'
                    }]
                }]
            }, {
                title: '矩阵',
                name: 'matrices',
                childs: [{
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'table',
                        matrice: 'true',
                        title: '表格'
                    }, {
                        action: 'squareTable',
                        mml: '<mfenced open="[" close="]">{matrice}</mfenced>',
                        matrice: 'true',
                        title: '带方括号的表格'
                    }, {
                        action: 'verticalLineTable',
                        mml: '<mfenced open="|" close="|">{matrice}</mfenced>',
                        matrice: 'true',
                        title: '带竖线的表格'
                    }, {
                        action: 'parenthesisTable',
                        mml: '<mfenced>{matrice}</mfenced>',
                        matrice: 'true',
                        title: '带括号的表格'
                    }]
                }, {
                    size: 33,
                    row: 3,
                    list: [{
                        action: 'column',
                        title: '3行列'
                    }, {
                        action: 'row',
                        title: '3列行'
                    }, {
                        action: 'squareColumn',
                        title: '带方括号的行列'
                    }, {
                        action: 'squareRow',
                        title: '带括号的列行'
                    }, {
                        action: 'parenthesisColumn',
                        title: '带括号的行列'
                    }, {
                        action: 'parenthesisRow',
                        title: '带括号的列行'
                    }]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'lCurlyColumn',
                        title: '带左花括号的3行列'
                    }, {
                        action: 'rCurlyColumn',
                        title: '带右花括号的3行列'
                    }, {
                        action: 'piecewiseFunction',
                        title: 'Piecewise function'
                    }, {
                        action: 'equationAlign',
                        title: 'Aligned equations'
                    }]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                            action: 'vellip2',
                            content: '⋮',
                            title: '垂直省略号'
                        }, {
                            action: 'ctdot2',
                            content: '⋯',
                            title: '中线省略号'
                        }, {
                            action: 'utdot2',
                            content: '⋰',
                            title: '上斜省略号'
                        }, {
                            action: 'dtdot2',
                            content: '⋱',
                            title: '下斜省略号'
                        }

                    ]
                }]
            }, {
                title: '标签和布局',
                name: 'scriptsAndLayout',
                childs: [{
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'fraction',
                        title: '分数'
                    }, {
                        action: 'bevelledFraction',
                        title: '斜角分数'
                    }, {
                        action: 'smallFraction',
                        title: '小分数'
                    }, {
                        action: 'smallBevelledFraction',
                        title: '斜角小分数'
                    }]
                }, {
                    size: 33,
                    row: 1,
                    list: [{
                        action: 'squareRoot',
                        title: '平方根'
                    }, {
                        action: 'nRoot',
                        title: '求根符号'
                    }]
                }, {
                    size: 33,
                    row: 3,
                    list: [{
                        action: 'superscript',
                        title: '上标'
                    }, {
                        action: 'subsuperscript',
                        title: '上下标'
                    }, {
                        action: 'subscript',
                        title: '小标'
                    }, {
                        action: 'leftSuperscript',
                        title: '左上标'
                    }, {
                        action: 'leftSubscriptAndSuperscript',
                        title: '左小标和上标'
                    }, {
                        action: 'leftSubscript',
                        title: '左下标'
                    }]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'over',
                        title: '元素上方'
                    }, {
                        action: 'under',
                        title: '元素下方'
                    }, {
                        action: 'underover',
                        title: '元素上下方'
                    }]
                }, {
                    size: 33,
                    row: 1,
                    list: [{
                        action: 'underScriptWithBrace',
                        disabled: 'true',
                        title: '带括号的下标签'
                    }, {
                        action: 'overScriptWithBrace',
                        disabled: 'true',
                        title: '带括号的下标签'
                    }]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'bigOpUnderover',
                        title: '上下都有标签的大运算符'
                    }, {
                        action: 'bigOpUnder',
                        title: '下方有标签的大运算符'
                    }, {
                        action: 'bigOpSubsuperscript',
                        title: '带有上标和下标的大运算符'
                    }, {
                        action: 'bigOpSubscript',
                        title: '带有下标的大运算符'
                    }]
                }]
                // , {
                //     size: 33,
                //     row: 2,
                //     list: [{
                //         action: 'digitSpace',
                //         title: '数字空格'
                //     }, {
                //         action: 'backSpace',
                //         title: '退格'
                //     }, {
                //         action: 'thinnerSpace',
                //         title: '较窄的空格'
                //     }]
                // }]
            }, {
                title: '修饰符',
                name: 'bracketsAndAccents',
                childs: [{
                    size: 33,
                    row: 3,
                    list: [{
                        action: 'parenthesis',
                        title: '括号'
                    }, {
                        action: 'squareBracket',
                        title: '方括号'
                    }, {
                        action: 'verticalBar',
                        title: '竖线'
                    }, {
                        action: 'doubleVerticalBar',
                        title: '双竖线'
                    },
                    // {
                    //     action: 'angleBrackets',
                    //     disabled: 'true',
                    //     title: '尖括号'
                    // },
                    {
                        action: 'curlyBracket',
                        title: '花括号'
                    },
                    // {
                    //     action: 'floor',
                    //     title: '向下取整'
                    // }, {
                    //     action: 'ceiling',
                    //     title: '向上取整'
                    // },
                    // {
                    //     action: 'angleBracketsWithBar',
                    //     title: 'Angle brackets with bar'
                    // }
                    ]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'upCurlyBracket',
                        title: '上花括号'
                    }, {
                        action: 'downCurlyBracket',
                        title: '下花括号'
                    }, {
                        action: 'upParenthesis',
                        title: '上括号'
                    }, {
                        action: 'downParenthesis',
                        title: '下括号'
                    }]
                }, {
                    size: 22,
                    row: 3,
                    list: [{
                        action: 'vectorAccent',
                        title: '矢量着重符'
                    }, {
                        action: 'rightArrowAccent',
                        title: '箭头着重符'
                    }, {
                        action: 'rightLeftArrowAccent',
                        title: '左右箭头着重符'
                    }, {
                        action: 'barAccent',
                        title: '横线着重符'
                    }, {
                        action: 'hatAccent',
                        title: '弧度'
                    }, {
                        action: 'tilde',
                        title: '波浪号'
                    }, {
                        action: 'diaeresis',
                        title: '分音符'
                    }, {
                        action: 'dotAccent',
                        title: '点着重符'
                    }]
                }, {
                    size: 33,
                    row: 4,
                    list: [{
                        action: 'encloseTop',
                        title: '上包围'
                    }, {
                        action: 'encloseBottom',
                        title: '下包围'
                    }, {
                        action: 'encloseLeft',
                        title: '左包围'
                    }, {
                        action: 'encloseRight',
                        title: '右包围'
                    }, {
                        action: 'encloseBox',
                        title: '方框包围'
                    },
                     {
                        action: 'encloseCircle',
                        title: '圆圈包围'
                    },
                     {
                        action: 'encloseActuarial',
                        title: '右上包围'
                    }, {
                        action: 'encloseRoundedBox',
                        title: '圆角边框包围'
                    }]
                }, {
                    size: 33,
                    row: 4,
                    list: [{
                        action: 'upDiagonalStrike',
                        title: '上斜划线'
                    }, {
                        action: 'downDiagonalStrike',
                        title: '下斜划线'
                    }, {
                        action: 'horizontalStrike',
                        title: '水平划线'
                    }, {
                        action: 'upAndDownDiagonalStrike',
                        title: '交叉划线'
                    }, {
                        action: 'verticalStrike',
                        title: '垂直划线'
                    }, {
                        action: 'horizontalAndVerticalStrike',
                        title: '十字划线'
                    }, {
                        action: 'encloseLongDivision',
                        title: '长除法'
                    }, {
                        action: 'encloseLongDivision2',
                        title: '带商长除法'
                    }]
                }]
            }, {
                title: '大运算',
                name: 'bigOps',
                childs: [{
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'sumUnderover',
                        title: '上下都有标签的求和符号'
                    }, {
                        action: 'sumUnder',
                        title: '下方有标签的求和符号'
                    }, {
                        action: 'sumSubsuperscript',
                        title: '带下标和上标的求和符号'
                    }, {
                        action: 'sumSubscript',
                        title: '带小标的求和符号'
                    }]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'productUnderover',
                        title: '上下都有标签的求积符号'
                    }, {
                        action: 'productUnder',
                        title: '下方有标签的求积符号'
                    }, {
                        action: 'productSubsuperscript',
                        title: '带下标和上标的求积符号'
                    }, {
                        action: 'productSubscript',
                        title: '带小标的求积符号'
                    }]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'bigOpUnderover',
                        title: '上下都有标签的大运算符'
                    }, {
                        action: 'bigOpUnder',
                        title: '下方有标签的大运算符'
                    }, {
                        action: 'bigOpSubsuperscript',
                        title: '带下标和上标的大运算符'
                    }, {
                        action: 'bigOpSubscript',
                        title: '带小标的大运算符'
                    }]
                }, {
                    size: 33,
                    row: 4,
                    list: [{
                        action: 'bigCap',
                        title: '大交集'
                    }, {
                        action: 'bigCup',
                        title: '大并集'
                    }, {
                        action: 'bigSqCap',
                        title: '大求交运算符'
                    }, {
                        action: 'bigSqCup',
                        title: '大求并运算符'
                    }, {
                        action: 'bigProd',
                        title: '求积符号'
                    }, {
                        action: 'bigCoProd',
                        title: 'Coproduct'
                    }, {
                        action: 'bigSum',
                        title: '求和符号'
                    }]
                }]
            }, {
                title: '计算',
                name: 'calculus',
                childs: [{
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'integralSubsuperscript',
                        disabled: 'true',
                        title: '定积分'
                    }, {
                        action: 'integralSubscript',
                        disabled: 'true',
                        title: '带下标的定积分'
                    }, {
                        action: 'integralSubsuperscriptD',
                        disabled: 'true',
                        title: '带微分的定积分'
                    }, {
                        action: 'integralSubscriptD',
                        disabled: 'true',
                        title: '带下标和微分的定积分'
                    }]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'differentialD',
                        disabled: 'true',
                        title: '微分'
                    }, {
                        action: 'partial2',
                        disabled: 'true',
                        content: '∂',
                        title: '偏微分'
                    }, {
                        action: 'fracDiff',
                        disabled: 'true',
                        title: '导数'
                    }, {
                        action: 'fracPartial',
                        disabled: 'true',
                        title: '偏导数'
                    }]
                }, {
                    size: 33,
                    row: 1,
                    list: [{
                        action: 'limitToInfinity',
                        title: '无穷大'
                    }, {
                        action: 'limitUnder',
                        title: '下方有标签的极限'
                    }]
                }, {
                    size: 33,
                    row: 2,
                    list: [{
                        action: 'curl',
                        disabled: 'true',
                        title: '旋度'
                    }, {
                        action: 'divergence',
                        disabled: 'true',
                        title: '散度'
                    }, {
                        action: 'gradient',
                        disabled: 'true',
                        title: '梯度'
                    }, {
                        action: 'laplacian',
                        disabled: 'true',
                        title: '拉普拉斯算子'
                    }]
                }, {
                    size: 33,
                    row: 3,
                    list: [{
                        action: 'integral',
                        content: '∫',
                        mml: '<mo style=\"font-size:24px\">∫</mo>',
                        disabled: 'true',
                        title: '积分'
                    }, {
                        action: 'integralContour',
                        content: '∮',
                        mml: '<mo style=\"font-size:24px\">∮</mo>',
                        disabled: 'true',
                        title: '围道积分'
                    }, {
                        action: 'integralDouble',
                        content: '∬',
                        mml: '<mo style=\"font-size:24px\">∬</mo>',
                        disabled: 'true',
                        title: '二重积分'
                    }, {
                        action: 'integralDoubleContour',
                        content: '∯',
                        mml: '<mo style=\"font-size:24px\">∯</mo>',
                        disabled: 'true',
                        title: '面积积分'
                    }, {
                        action: 'iiint',
                        content: '∭',
                        mml: '<mo style=\"font-size:24px\">∭</mo>',
                        disabled: 'true',
                        title: '三重积分'
                    }, {
                        action: 'cconint',
                        content: '∰',
                        mml: '<mo style=\"font-size:24px\">∰</mo>',
                        disabled: 'true',
                        title: '体积积分'
                    }]
                }, {
                    size: 33,
                    row: 6,
                    list: [{
                        action: 'sinus',
                        title: '正弦',
                    }, {
                        action: 'cosinus',
                        title: '余弦',
                    }, {
                        action: 'tangent',
                        title: '正切',
                    }, {
                        action: 'log',
                        title: 'Log',
                    }, {
                        action: 'nlog',
                        title: 'N-Log',
                    }, {
                        action: 'naturalLog',
                        title: 'In',
                    }, {
                        action: 'cosecant',
                        title: '余割',
                    }, {
                        action: 'secant',
                        title: '正割',
                    }, {
                        action: 'cotangent',
                        title: '余切',
                    }, {
                        action: 'arcsinus',
                        title: '反正弦',
                    }, {
                        action: 'arccosinus',
                        title: '反余弦',
                    }, {
                        action: 'arctangent',
                        title: '反正切',
                    }]
                }]
            }, {
                title: '扩展',
                name: 'contextual',
                enabled: false,
                childs: [{
                    size: 22,
                    row: 1,
                    list: [{
                        action: 'alignLeft',
                        title: '左对齐'
                    }, {
                        action: 'alignCenter',
                        title: '居中'
                    }, {
                        action: 'alignRight',
                        title: '右对齐'
                    }]
                }, {
                    size: 22,
                    row: 3,
                    list: [{
                        action: 'appendRow',
                        title: '在下方插入行'
                    }, {
                        action: 'prependRow',
                        title: '在上方插入行'
                    }, {
                        action: 'appendColumn',
                        title: '在右方插入列'
                    }, {
                        action: 'prependColumn',
                        title: '在左方插入列'
                    }, {
                        action: 'removeRow',
                        title: '删除行'
                    }, {
                        action: 'removeColumn',
                        title: '删除列'
                    }]
                }, {
                    size: 22,
                    row: 3,
                    list: [{
                        action: 'addFrame',
                        title: '添加frame'
                    }, {
                        action: 'removeFrame',
                        title: '产出frame'
                    }, {
                        action: 'matrixSolidLine',
                        title: '激活实线'
                    }, {
                        action: 'addLineBelow',
                        title: '在下方插入横线'
                    }, {
                        action: 'addLineRight',
                        title: '在右侧插入横线'
                    }, {
                        action: 'matrixDashLine',
                        title: '激活虚线'
                    }, {
                        action: 'removeLineBelow',
                        title: '删除下方的线'
                    }, {
                        action: 'removeLineRight',
                        title: '删除右侧的线'
                    }]
                }, {
                    size: 22,
                    row: 1,
                    list: [{
                        action: 'equalRowHeight',
                        title: '强制等高'
                    }, {
                        action: 'equalColWidth',
                        title: '强制等宽'
                    }]
                }]
            }
            ,{
                title: '自定义',
                name: 'define',
                enabled: false,
                childs:[{
                        size: 55,
                        row: 1,
                        list: []
                }]
            }
            ],
            offen: {
                title: '常用',
                list: [{
                    action: 'fraction',
                    title: '分数'
                },{
                    action: 'squareRoot',
                    title: '平方根'
                },{
                    action: 'superscript',
                    title: '上标'
                }, {
                    action: 'subscript',
                    title: '下标'
                },
                {
                    action: 'verticalBar',
                    title: '绝对值'
                },
                {
                    name: 'shortDiv',
                    mml: '<mtable><mtr><mtd/><mtd columnalign="right"><mrow/><menclose notation="bottom"><menclose notation="left"><mrow/></menclose></menclose></mtd></mtr><mtr><mtd><mspace/></mtd><mtd columnalign="left"><mrow/></mtd></mtr></mtable>',
                    title: '短除法'
                },
                {
                    name: 'shortDiv1',
                    mml: '<mrow><mfenced open=" " close=" "><mrow/></mfenced><mo>&nbsp;</mo><menclose notation="bottom"><menclose notation="left"><mrow/></menclose></menclose></mrow>',
                    title: '短除法1'
                }]
            },
            recent: {
                title: '最近',
                list: []
            }
        };
        var formula_cookies;
        if(document.cookie && /recent_formula/gi.test(document.cookie)){
            var recent_formula = [];
            var cookie = document.cookie.split(';');
            for(var i = 0; i < cookie.length; i++){
                var c = cookie[i].split('=');
                if(c[0] === ' recent_formula' || c[0] === 'recent_formula'){
                    formula_cookies=cookie[i];
                    try{
                        recent_formula = JSON.parse(c[1]);
                    }catch(e){
                        recent_formula = [];
                    }
                    break;
                }
            }

            fullFormulaMap.recent.list = recent_formula;
            if(fullFormulaMap.recent.list.length > 14) fullFormulaMap.recent.list.length = 14;
        }

        var my_defined_formula_num = 0;
        if(window.localStorage){
            var storage = window.localStorage;
            var myDefine = fullFormulaMap.tab.pop();
            for(var i in storage){
                if(/udf_/gi.test(i)){
                    my_defined_formula_num++;

                    try{
                        myDefine.childs[0].list.push(JSON.parse(storage[i]));
                    }catch(e){
                        myDefine.childs[0].list = [];
                        break;
                    }
                    //最多20个
                    if(my_defined_formula_num > 10){
                        break;
                    }
                }
            }
            fullFormulaMap.tab.push(myDefine);
        }

        var KEYCODES = {"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,"L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,"W":87,"X":88,"Y":89,"Z":90,"F1":112,"F2":113,"F3":114,"F4":115,"F5":116,"F6":117,"F7":118,"F8":119,"F9":120,"F10":121,"F11":122,"F12":123,"N0":96,"N1":97,"N2":98,"N3":99,"N4":100,"N5":101,"N6":102,"N7":103,"N8":104,"N9":105,"N*":106,"N+":107,"NEnter":108,"N-":109,"N.":110,"N/":111,"LA":37,"UA":38,"RA":39,"DA":40,"~":192};

        //<button class="edui-btn-hide" title="点击收起">></button>
        var fullformulaTpl = '<div class="edui-fullformula" id="edui-fullformula">' +
            '<div class="edui-fullformula-header">点击此区域以拖动<button class="edui-btn-close" title="点击关闭">X</button></div>'+
            //预设
            '<div class="edui-fullformula-btn edui-btn-yushe"><div class="edui-fullformula-icon"></div>' +
            '<div class="edui-fullformula-label">预设<br><div class="edui-fullformula-btn-sign"></div></div>' +
            '<div class="edui-fullformula-btn-mount-point">' +
            '<% for (var i=0, len=preset.length; i<len; i++) { %>' +
            '<h3 class="edui-fullformula-title"><%- preset[i].title %></h3>' +
            '<a href="javascript:void(0);" class="edui-fullformula-preset-btn edui-fullformula-preset-item<%= i %>" data-preset-mml="<%- preset[i].mml %>"></a>' +
            '<% } %>' +
            '</div></div>' +
            // 预设结束
            '<div class="edui-fullformula-main">' +
            '<div class="edui-fullformula-tab">' +
            '<% for (var m=0, len5=tab.length; m<len5; m++) { %>' +
            '<% var currentTab2 = tab[m] %>' +
            '<a href="javascript:void(0);" class="edui-fullformula-tab-item edui-fullformula-tab-<%= currentTab2.name %> <% if (m==0) {%>current<%}%>" data-index="<%= m %>"><span class="tab-icon<%= currentTab2.name == "define" ? " tab-define":"" %>"></span></a>' +
            '<% } %>' +
            //自定义tab
            '</div>' +
            '<div class="edui-fullformula-content">' +
            '<% for (var j=0, len2=tab.length; j<len2; j++) { %>' +
            '<% var currentTab = tab[j] %>' +
            '<div class="edui-btn-tab-item edui-btn-<%= currentTab.name %> <% if (j==0) { %>current<% } %>">' +
            '<% for (var k=0, len3=currentTab.childs.length; k<len3; k++) {%>' +
            '<% var currentGroup = currentTab.childs[k] %>' +
            '<% var currentGroupWidth = currentGroup.size * currentGroup.row %>' +
            '<div class="edui-fullformula-group <% if (k==len3-1) { %>edui-fullformula-group-last<% } %>" style="width: <%= currentTab.name === "define" ? "490px" : currentGroupWidth+"px" %>">' +
            '<% if(currentTab.name == "define") { %>'+
            //add button
            '<a href="javascript:void(0);" style="width: <%= currentGroup.size %>px; height: <%= currentGroup.size %>px; <% if (currentFormula.disabled == "true") {%>display: none;<%}%>" class="edui-action-add" title="添加公式" data-action="addFormula">+</a>' +
            //user add formula
            '<% for (var l=0, len4=currentGroup.list.length; l<len4; l++) { %>' +
            '<% var currentFormula = currentGroup.list[l] %>' +
            '<span class="edui-user-define" title="<%= currentFormula.title %>" id="<%= currentFormula.name %>"><%= currentFormula.html %></span>'+
            '<% } %>' +
            '<% } else { %>'+
            '<% for (var l=0, len4=currentGroup.list.length; l<len4; l++) { %>' +
            '<% var currentFormula = currentGroup.list[l] %>' +
            '<a href="javascript:void(0);" style="width: <%= currentGroup.size %>px; height: <%= currentGroup.size %>px; <% if (currentFormula.disabled == "true") {%>display: none;<%}%>" class="edui-fullformula-group-item edui-action-<%= currentFormula.action %>" title="<%= currentFormula.title %>" data-action="<%= currentFormula.action %>" <% if (currentFormula.content) { %>data-content="<%- currentFormula.content %>"<% } %> <% if (currentFormula.mml) { %>data-mml="<%- currentFormula.mml %>"<% } %> <% if (currentFormula.matrice) { %>data-matrice="<%- currentFormula.matrice %>"<% } %>></a>' +
            '<% } %>' +
            '<% } %>'+
            '</div>' +
            '<% } %>' +
            '</div>' +
            '<% } %>' +
            '</div>' +
            '<div class="edui-fullformula-contextPanel"><div class="edui-fullformula-matrixButtonPanel"><table><tbody><tr><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td></tr><tr><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td></tr><tr><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td></tr><tr><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td></tr><tr><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td></tr><tr><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td><td><div class="edui-fullformula-matrixButton"></div></td></tr></tbody></table><table><tbody><tr><td>行: </td><td class="edui-fullformula-inputCell"><input type="number" title="行"></td></tr><tr><td>列: </td><td class="edui-fullformula-inputCell"><input type="number" title="列"></td></tr></tbody></table></div></div>' +
            '</div>' +
            '<div class="edui-fullformula-offen">'+
            '<div class="edui-fullformula-offen-title"><%= offen.title %></div>'+
            '<% for (var l=0, len5=offen.list.length; l<len5; l++) { %>' +//常用公式
            '<% var currentFormula = offen.list[l] %>'+
            '<a href="javascript:void(0);" style="width: 33px; height: 33px;" class="edui-fullformula-group-item edui-action-<%= currentFormula.action || currentFormula.name %>" title="<%= currentFormula.title %>" data-action="<%= currentFormula.action %>" <% if (currentFormula.content) { %>data-content="<%- currentFormula.content %>"<% } %> <% if (currentFormula.mml) { %>data-mml="<%- currentFormula.mml %>"<% } %> <% if (currentFormula.matrice) { %>data-matrice="<%- currentFormula.matrice %>"<% } %>></a>' +
            '<% } %>' +
            '</div>'+
            '<div class="edui-fullformula-recent">'+
            '<div class="edui-fullformula-recent-title"><%= recent.title %></div>'+
            '<% for (var m=0, len6=recent.list.length; m < len6; m++) { %>'+
            '<% var currentFormula = recent.list[m] %>'+
            '<a href="javascript:void(0);" style="width: <%= currentFormula.w || 33 %>px; height: <%= currentFormula.w || 33 %>px;" class="edui-fullformula-group-item edui-action-<%= currentFormula.action %>" title="<%= currentFormula.title %>" data-action="<%= currentFormula.action %>" <% if (currentFormula.content) { %>data-content="<%- currentFormula.content %>"<% } %> <% if (currentFormula.mml) { %>data-mml="<%- currentFormula.mml %>"<% } %> <% if (currentFormula.matrice) { %>data-matrice="<%- currentFormula.matrice %>"<% } %>></a>' +
            '<% } %>' +
            '</div>'+
            '</div>';

        var _fullFormulaDom = UM.utils.template(fullformulaTpl)(fullFormulaMap);

        // 如果公式的toolbar已经存在的话，已经直接跳过；
        if (!$('#edui-fullformula').length) {
            UM.registerFullFormula(_fullFormulaDom);
            bindEvent();
        }

        function fadeInDown() {
            $('#edui-fullformula').show().addClass('fadeInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('fadeInDown animated');
            });
        }

        function fadeOutUp() {
            $('#edui-fullformula').addClass('fadeOutUp animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('fadeOutUp animated').hide();
            });
        }

        var _lastPosition = {left: null, top: null};

        UM.registerFullFormulaAction({
            show: function(top, left, frameWidth, frameHeight) {


                var $fullformula = $('#edui-fullformula');
                var fullformulaWidth = $fullformula[0].clientWidth || 520;
                var fullformulaHeight = $fullformula[0].clientHeight || 250;

                var _windowClientWidth = window.outerWidth;
                var _windowScrollHeight = window.scrollY;//当屏幕滚动时，光标的位置不在是原先的高度，需要加上滚动的距离
                // console.log('_windowScrollHeight: ', _windowScrollHeight);
                var _left = left + (frameWidth / 2) - fullformulaWidth / 2;
                var _top = top - fullformulaHeight - 20 + _windowScrollHeight;

                if(isNaN(_left)){
                    _left = _lastPosition.left == null ? ((frameWidth / 2) - fullformulaWidth / 2) : _lastPosition.left;
                }else if(_left < 0){
                    _lastPosition.left = _left = 10;
                }else if((_left + fullformulaWidth) > _windowClientWidth){
                    _left = _windowClientWidth - fullformulaWidth - 10;
                }else{
                    _lastPosition.left = _left;
                }

                if(_top < 0 || isNaN(_top)){
                    _top = top + frameHeight + 20;
                    // if(frameHeight){
                    // }else{
                    //     _lastPosition.top = _top;
                    // }
                }else if(_top > window.document.body.clientHeight){
                    _top = _lastPosition.top == null ? (245 - fullformulaHeight) : _lastPosition.top;
                }


                // var offset = $(currentActiveEditor.body).offset();
                $fullformula.css({top: _top, left: _left});

                if ($fullformula.is(':hidden')) {
                    fadeInDown();
                }

                UM.setFullFormulaOpenState(true);
            },

            hide: function() {
                var $fullformula = $('#edui-fullformula');

                if (!$fullformula.is(':hidden')) {
                    fadeOutUp();
                }

                if(document.cookie != null){
                    var _days = 300; //此 cookie 将被保存 30 天
                    var exp  = new Date();    //new Date("December 31, 9998");
                    exp.setTime(exp.getTime() + _days*24*60*60*1000);
                   document.cookie = ('recent_formula='+JSON.stringify(fullFormulaMap.recent.list)+ ";expires=" + exp.toGMTString());
                }
                UM.setFullFormulaOpenState(false);
            },

            updateToolbar: function(el){
                var $fullformula = $('#edui-fullformula');
                $fullformula.empty();
                $fullformula[0].appendChild(el)
            }

        });

        UM.setFullFormulaOpenState(false);

        function showContextPanel(top, left, mml) {
            $('.edui-fullformula-contextPanel').data('mml', mml).css({top: top, left: left}).show();
        }

        function hideContextPannel() {
            $('.edui-fullformula-contextPanel').hide();
            UM.matrices = false;
        }

        function getMerticMathml(row, col) {
            var heander = '<mtable>';
            var footer = '</mtable>';
            var mtr = '';

            for (var i=0; i<row; i++) {
                mtr += '<mtr>';
                for (var j=0; j<col; j++) {
                    mtr += '<mtd />';
                }
                mtr += '</mtr>';
            }

            return heander + mtr + footer;
        }

        function bindEvent() {
            var time1 = new Date();
            $(document)
                .off('click', '.edui-fullformula-preset-btn')
                .off('click', '.edui-fullformula-btn')
                .off('click', '.edui-fullformula-group-item')
                .off('click', '.edui-fullformula-tab-item')
                .undelegate('.edui-fullformula-tab-item', 'click')
                .off('click', '.edui-define-remove')
                .off('click', '.edui-user-define')
                .off('click', '.edui-action-add')
                .off('click', '.edui-btn-hide')
                .off('click', '.edui-btn-close')
                .off('click', '.edui-btn-yushe');

            $(document)
                .on('click', '.edui-fullformula-preset-btn', function(e) {
                    var $this = $(this);
                    var mml = $this.data('preset-mml');

                    currentActiveEditor.execCommand('formula', mml);
                })

                .on('click', '.edui-fullformula-btn', function(e) {
                    var $this = $(this);

                    if ($this.hasClass('edui-fullformula-btn-in')) {
                        $this.removeClass('edui-fullformula-btn-in');
                    } else {
                        $this.addClass('edui-fullformula-btn-in');
                    }
                })

                .delegate('.edui-fullformula-group-item', 'click', function(e) {
                    UM.fullFormulaIsFocus = true;
                    //由于jquery导致多次触发该事件，限制触发间隔为250ms
                    var time2 = new Date();
                    // console.log(time2-time1);
                    if(time2-time1 > 250){
                        time1 = time2;
                    }else{
                        return;
                    }
                    var $this = $(this);
                    var mml = $this.data('mml');
                    var action = $this.data('action');
                    var content = $this.data('content');
                    var matrice = $this.data('matrice');
                    var $recent = $('.edui-fullformula-recent');
                    var $recent_title = $('.edui-fullformula-recent-title');
                    var $recent_actions = $recent.find('.edui-fullformula-group-item');

                    var _same = false;
                    

                    if (matrice == true) {
                        var position = $this.position();
                        var height = $this.height();

                        showContextPanel(position.top + height + 2, position.left, mml ? mml : 'null');
                    } else {
                        if(mml){
                            content = mml;
                        }
                        currentActiveEditor.execCommand('formula', content, action);
                    }

                    for (var i = $recent_actions.length - 1; i >= 0; i--) {
                        if($($recent_actions[i]).data('action') === $this.data('action')){
                            _same = true;
                            $recent[0].removeChild($recent_actions[i]);
                            $recent_title.after($this.clone());
                            for(var j = 0, len = fullFormulaMap.recent.list.length; j < len; j++ ){
                                if(fullFormulaMap.recent.list[i].action === $this.data('action')){
                                    fullFormulaMap.recent.list.splice(i, 1);
                                    break;
                                }
                            }
                            // var _formula = ;
                            // if($this.data('mml')|| $this.data('content')){
                            //     _formula.mml = $this.data('mml')
                            // }
                            fullFormulaMap.recent.list.unshift({mml: $this.data('mml')||$this.data('content'),title: $this.attr('title'), action: $this.data('action'), w: $this.width(), h: $this.height()});
                            break;
                        }
                    };
                    if(!_same){
                        $recent_title.after($this.clone());
                        fullFormulaMap.recent.list.unshift({mml: $this.data('mml')||$this.data('content'),title: $this.attr('title'), action: $this.data('action'), w: $this.width(), h: $this.height()});
                    }
                    if($recent_actions.length > 14){
                        $recent[0].removeChild($recent[0].lastChild);
                        fullFormulaMap.recent.list.length = 14;
                    }

                    // currentActiveEditor.execCommand('formula', null, mml);
                    $('.edui-fullformula-btn').removeClass('edui-fullformula-btn-in');
                })

                // .on('click', '.edui-fullformula-group-item', function(e) {
                //     //由于jquery导致多次触发该事件，限制触发间隔为250ms
                //     var time2 = new Date();
                //     // console.log(time2-time1);
                //     if(time2-time1 > 250){
                //         time1 = time2;
                //     }else{
                //         return;
                //     }
                //     var $this = $(this);
                //     var mml = $this.data('mml');
                //     var action = $this.data('action');
                //     var content = $this.data('content');
                //     var matrice = $this.data('matrice');
                //     var $recent = $('.edui-fullformula-recent');
                //     var $recent_title = $('.edui-fullformula-recent-title');
                //     var $recent_actions = $recent.find('.edui-fullformula-group-item');

                //     var _same = false;
                //     for (var i = $recent_actions.length - 1; i >= 0; i--) {
                //         if($($recent_actions[i]).data('action') === $this.data('action')){
                //             _same = true;
                //             $recent[0].removeChild($recent_actions[i]);
                //             $recent_title.after($this.clone());
                //             for(var j = 0, len = fullFormulaMap.recent.list.length; j < len; j++ ){
                //                 if(fullFormulaMap.recent.list[i].action === $this.data('action')){
                //                     fullFormulaMap.recent.list.splice(i, 1);
                //                     break;
                //                 }
                //             }
                //             // var _formula = ;
                //             // if($this.data('mml')|| $this.data('content')){
                //             //     _formula.mml = $this.data('mml')
                //             // }
                //             fullFormulaMap.recent.list.unshift({mml: $this.data('mml')||$this.data('content'),title: $this.attr('title'), action: $this.data('action'), w: $this.width(), h: $this.height()});
                //             break;
                //         }
                //     };
                //     if(!_same){
                //         $recent_title.after($this.clone());
                //         fullFormulaMap.recent.list.unshift({mml: $this.data('mml')||$this.data('content'),title: $this.attr('title'), action: $this.data('action'), w: $this.width(), h: $this.height()});
                //     }
                //     if($recent_actions.length > 14){
                //         $recent[0].removeChild($recent[0].lastChild);
                //         fullFormulaMap.recent.list.length = 14;
                //     }

                //     if (matrice == true) {
                //         var position = $this.position();
                //         var height = $this.height();

                //         showContextPanel(position.top + height + 2, position.left, mml ? mml : 'null');
                //     } else {
                //         if(mml){
                //             content = mml;
                //         }
                //         currentActiveEditor.execCommand('formula', content, action);
                //     }

                //     // currentActiveEditor.execCommand('formula', null, mml);
                //     $('.edui-fullformula-btn').removeClass('edui-fullformula-btn-in');
                // })

                .on('click', '.edui-fullformula-tab-item', function(e) {
                    UM.fullFormulaIsFocus = true;
                    var $this = $(this);
                    var index = $this.data('index');
                    var $content = $('.edui-btn-tab-item').removeClass('current');
                    $('.edui-fullformula-tab-item').removeClass('current');

                    $this.addClass('current');
                    $content.eq(index).addClass('current');
                })

                .on('click', function(e) {
                    var match = $(e.target).parents('#edui-fullformula');
                    if (!match || !match.length) {
                        if(!$(e.target).hasClass('edui-fullformula-group-item')){
                            //由于点击工具栏，iframe并不会失去焦点，所以暂时不让iframe的focus状态消失
                            if(!$(e.target).hasClass('edui-btn-toolbar') && !$(e.target).parents('.edui-btn-toolbar').length){
                                $('.edui-formula-active').removeClass('edui-formula-active');
                            }
                        }
                    }else{
                        UM.fullFormulaIsFocus = true;
                        if(!$(e.target).parents('.edui-fullformula-inputCell').length){
                            UM.matricesIn = false;
                            // UM.fullFormulaIsFocus = false;
                        }else{
                            UM.matricesIn = true;
                        }
                    }

                    if(!$(e.target).parents('.edui-btn-yushe').length){
                        $('.edui-fullformula-btn-mount-point').hide();
                        
                    }

                    //矩阵不输入点击其他的时候隐藏
                    if(!$('.edui-fullformula-contextPanel').is(':hidden')){
                        if(!$(e.target).hasClass('edui-action-table') && !$(e.target).hasClass('edui-action-verticalLineTable')
                                && !$(e.target).hasClass('edui-action-squareTable') && !$(e.target).hasClass('edui-action-parenthesisTable')){
                            if(!$(e.target).parents('.edui-fullformula-contextPanel').length){
                                hideContextPannel();
                                
                            }
                        }
                    }
                    // if($(e.target) !== $('.edui-action-table') ||)

                    $('#resizer').off('mousemove');
                })

                .on('click', '.edui-btn-yushe', function(e) {
                    var $mountPoint = $('.edui-fullformula-btn-mount-point');

                    if ($mountPoint.is(':hidden')) {
                        $mountPoint.show();
                    } else {
                        $mountPoint.hide();
                    }
                })

                .on('click', '.edui-btn-close', function(e) {
                    var formula_board = $('#edui-fullformula');
                    //确保公式编辑框消失后没有被选中的公式编辑区
                    $('.edui-formula-active').length && $('.edui-formula-active').removeClass('edui-formula-active');
                    if(formula_board.length && !formula_board.is(':hidden')){

                        UM.fullFormulaAction.hide();
                        // formula_board.hide('slow/400/fast', function() {
                        //     UM.setFullFormulaOpenState(false);
                        // });
                    }
                })

                .on('click', '.edui-btn-hide', function(e) {
                    var formula_board = $('#edui-fullformula');
                    if(formula_board.length && !formula_board.is(':hidden')){
                        // formula_board.width(30);
                        formula_board.offset({left: window.innerWidth - 30});
                    }
                })

                //自定义
                .on('click', '.edui-action-add', function(e) {
                    var modal = $('#myModal');
                    if(modal && modal.length && Editor.getEditor('defineFormula')){
                        if(modal.is(':hidden')){
                            modal.show('slow/400/fast', function() {
                                
                            });
                        }else{
                            modal.hide('slow/400/fast', function() {
                                
                            });
                        }
                        return;
                    }else{
                        Editor.getEditor('defineFormula') && Editor.getEditor('defineFormula').destroy();
                        $('#defineFormula').remove();
                        modal.remove();
                    }
                    var $modal = $(document.createElement('div'));
                    $modal.attr('id', 'myModal');
                    $modal.css({
                          minWidth: '300px',
                          minHeight: '300px',
                          maxHeight: '700px',
                          display: 'block',
                          background: 'rebeccapurple',
                          position: 'absolute',
                          top: window.scrollY +30,
                          left: '35%',
                          'z-index': '999'
                    });
                    var $myEditor = $(document.createElement('div'));
                    $myEditor.attr('id', 'defineFormula');
                    $myEditor.attr('style', 'min-width:300px; min-height:240px;max-height:700px;');
                    $myEditor.appendTo($modal);
                    var inputName = $(document.createElement('input'));
                    var btnSumit = $(document.createElement('button'));
                    var btnCancle = $(document.createElement('button'));
                    var resizer = $(document.createElement('span'));
                    resizer[0].innerHTML = '<svg width="20px" height="20px">'+
                                            '<line x="20" y="20" x1="20" y1="20" style="stroke: red;"></line>'+
                                            '</svg>';
                    resizer[0].id="resizer";
                    resizer.css({
                        top: '0',
                        right: '0',
                        zIndex: '99',
                        position: 'absolute',
                        cursor: 'e-resize'
                    });
                    resizer.appendTo($modal);
                    // var accesskey = $(document.createElement('div'));
                    // accesskey[0].innerHTML = '自定义快捷键:<input type="checkbox" id="define_ctrlKey">CTRL<input type="checkbox" id="define_shiftKey">SHIFT<input type="checkbox" id="define_atlKey">ALT<input type="text" id="define_key" placeholder="输入组合键码" style="  width: 105px;margin: 5px;height: 20px;border: none;">';
                    // accesskey.css({
                    //     height: '40px',
                    //     lineHeight: '40px'
                    // });
                    inputName.attr({
                        id: 'definedName',
                        class: 'edui-define-name',
                        title: '在此输入自定义公式名',
                        placeholder: '在此输入自定义公式名(限20个字)'
                    });
                    btnCancle.click(function(event) {
                        $('#myModal').hide('slow/400/fast', function() {
                            currentActiveEditor = window.lastActiveEditor;
                        });
                    });

                    btnSumit.click(function(event) {
                        if(my_defined_formula_num >=　10){
                            if($('#hint').length){
                                $('#hint').html('最多添加10个啦~');
                                $('#hint').show('slow/400/fast', function(){
                                    setTimeout(function(){
                                        $('#hint').hide();
                                    }, 1000)
                                });
                                return;
                            }else{
                                var div = $(document.createElement('div'));
                                div.attr('id', 'hint');
                                div.attr('class', 'edui-define-add-ok');
                                div[0].innerHTML = '最多添加10个啦~';
                                div.appendTo(document.body);
                                div.click(function(event) {
                                    this.style.display = 'none';
                                });
                                setTimeout(function(){
                                    div.hide('slow/400/fast', function() {
                                        
                                    });
                                }, 1000);
                                return;
                            }
                        }
                        console.log('%c当前自定义公式个数： '+my_defined_formula_num,'color:green');
                        if($('#hint').length && !$('#hint').is(':hidden')){
                            $('#hint').html('你添加的太频繁啦，休息下再添加吧！');
                            return;
                        }
                        if(!window.modalEditor){
                            console.log('创建自定义模板输入框...');
                            $('#defineFormula').empty();
                            Editor.create($('#defineFormula'));
                        }
                        var a = document.createElement('div');
                        var formulaTemp = window.modalEditor.getFormulaHtmlModal();
                        if('<br/>' === formulaTemp || '<p><br/></p>' === formulaTemp || '' === formulaTemp){
                            alert('你还没有写入任何内容啦！');
                            return;
                        }
                        a.innerHTML = '<i class="edui-define-remove" title="点击删除">X</i>'+formulaTemp;
                        var name = $('#definedName').val().replace(/^\s*/, '').replace(/\s*$/,'');
                        var title = name;
                        if(!name){
                            title = '未命名';
                            name = UM.utils.guid('udf_');
                        }else{
                            name = 'udf_'+name;
                        }  
                        a.setAttribute('class', 'edui-user-define');
                        //由于现网的一些其他样式文件的影响，暂时加上这个来使显示正常
                        // a.setAttribute('style', 'line-height: 80%;');
                        
                        a.setAttribute('id', name);
                        a.setAttribute('title', title);
                        var maths = a.getElementsByTagName('math');
                        var $mathRole = $('#forHiddenFormula');
                        if(maths && maths.length){
                            for (var i = maths.length - 1; i >= 0; i--) {
                                window.mathRender.renderMathHtml5(maths[i], $mathRole[0]);
                            };
                        }
                        // a.setAttribute('short-cut-key', );
                        $('.edui-btn-define .edui-fullformula-group').append(a);
                        if($('#hint').length){
                            $('#hint').html('添加成功！请在添加自定义公式里面查看');
                            $('#hint').show('slow/400/fast', function() {
                                setTimeout(function(){
                                    $('#hint').hide('slow/400/fast', function() {
                                        
                                    });
                                }, 1000);
                            });
                        }else{
                            var div = $(document.createElement('div'));
                            div.attr('id', 'hint');
                            div.attr('class', 'edui-define-add-ok');
                            div[0].innerHTML = '添加成功！请在添加自定义公式里面查看';
                            div.appendTo(document.body);
                            div.click(function(event) {
                                this.style.display = 'none';
                            });
                            setTimeout(function(){
                                div.hide('slow/400/fast', function() {
                                    
                                });
                            }, 1000);
                        }

                        if(window.localStorage != null){
                            window.localStorage.setItem(name, JSON.stringify({title: title, name: name,html: a.innerHTML, w: a.clientWidth, h: a.clientHeight}));
                            my_defined_formula_num++;
                        }

                    });
                    btnSumit[0].innerHTML = '提交';
                    btnCancle[0].innerHTML = '取消';
                    btnSumit.attr('class', 'define-btn-sumit');
                    btnCancle.attr('class', 'define-btn-cancle');
                    inputName.appendTo($modal);
                    inputName.keyup(function(event) {
                        if(this.value && this.value.length > 20){
                            
                            this.value = this.value.substring(0,20);
                        }
                    });
                    // accesskey.appendTo($modal);
                    btnSumit.appendTo($modal);
                    btnCancle.appendTo($modal);
                    $modal.appendTo($(document.body));
                    window.lastActiveEditor = currentActiveEditor;
                    Editor.setOptions({
                        id: 'defineFormula',
                        toolbar:['undo', 'redo', '|', 'formula', '|', 'help'],
                        pasteFormula: true
                    })
                    $('#defineFormula').empty();
                    Editor.create($('#defineFormula'));
                    setTimeout(function(){
                        $('#myModal').Drags({handler: '.edui-toolbar', opacity: 0.9})
                        window.modalEditor = Editor.getEditor('defineFormula');
                        if(!my_defined_formula_num)
                        window.modalEditor.setContent('<p style="color: red;font-size:bolder;">自定义公式允许输入非公式的文字部分，'+
                                            '为保证你的自定义公式能在公式框里面完整呈现，<br>'+
                                            '请尽量定义一个完整的公式，而不是包含某些非公式部分，如：<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>π</mi><mi>a</mi><mi>s</mi><mi>d</mi><mi>a</mi><mi>s</mi><mi>d</mi><mi>ω</mi></math></p>'+
                                            '<p>当然，如果非要添加混合型的或者完全非公式的自定义版本，我们也是不限制的。<br>如：asdad<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>π</mi><mi>a</mi><mi>s</mi><mi>d</mi><mi>a</mi><mi>s</mi><mi>d</mi><mi>ω</mi></math></p>'+
                                            '<p>但是需要提醒你的是，在公式框里面输入自定义公式只会输入公式部分<br>如上面的混合情况，只会在激活的公式编辑区域输入<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>π</mi><mi>a</mi><mi>s</mi><mi>d</mi><mi>a</mi><mi>s</mi><mi>d</mi><mi>ω</mi></math><br>，而非公式部分会被抛弃。'+
                                            '<br>但是在编辑器里面会将你定义的内容，完整的输入进去。</p>'+
                                            '<br>'+
                                            '<p style="font-size:20px;font-weight: bolder;font-style: italic;color: rgb(0, 31, 249);">建议添加一些自己使用比较多的公式，'+
                                            '对于已经不需要的公式，建议删除掉以节省浏览器空间<br>最多可以添加20个自定义公式</p><br>'+
                                            '<br>要自定义公式，请先删除这些文字'
                                            )
                        setTimeout(function(){
                            //缩放和拖曳
                            $(document).mousemove(function(e) {
                                if (!!this.move) {
                                    var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
                                        callback = document.call_down || function() {
                                            // $(this.move_target).css({
                                            //     'top': e.pageY - posix.y,
                                            //     'left': e.pageX - posix.x
                                            // });
                                        };

                                    callback.call(this, e, posix);
                                }
                            }).mouseup(function(e) {
                                if (!!this.move) {
                                    var callback = document.call_up || function(){};
                                    callback.call(this, e);
                                    $.extend(this, {
                                        'move': false,
                                        'move_target': null,
                                        'call_down': false,
                                        'call_up': false
                                    });
                                }
                            });

                            var $box = $('#myModal').mousedown(function(e) {
                                var offset = $(this).offset();
                                
                                this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
                                $.extend(document, {'move': true, 'move_target': this});
                            }).on('mousedown', '#resizer', function(e) {
                                var posix = {
                                        'w': $box.width(), 
                                        'h': $box.height(), 
                                        'x': e.pageX, 
                                        'y': e.pageY
                                    };
                                
                                $.extend(document, {'move': true, 'call_down': function(e) {
                                    $box.css({
                                        'width': Math.max(30, e.pageX - posix.x + posix.w)
                                    });
                                }});
                                return false;
                            });
                        }, 3000);
                            
                    }, 500);
                })

                .on('click', '.edui-user-define', function(e) {
                    if(currentActiveEditor.id == 'defineFormula'){
                        
                        // return;
                    }
                    var that = $(this).clone();
                    var mathModals = $(that).find('[modal-model=true]');
                    $.each(mathModals, function(index, val) {
                        val.parentNode.replaceChild($(unescape($(val).data('math')))[0], val);
                    });

                    $(that).find('[editor-math-model]').each(function(index, val) {
                        var mmmathML = unescape($(val).data('math'));
                        val.parentNode.replaceChild($(mmmathML)[0], val);
                    });
                    that[0].removeChild($(that).find('.edui-define-remove')[0]);

                    if($('.edui-formula-active').length){
                        var math = [];
                        that.html().replace(/<math[^>]*>.*?<\/math>/gim, function(reg){
                            math.push(reg);
                        })
                        if(!math.length){
                            return;
                        }
                        
                        math.reverse();
                        math.forEach(function(item, index){
                            currentActiveEditor.execCommand('formula', item);
                        })
                    }else{
                        currentActiveEditor.execCommand('inserthtml', that.html());
                    }
                })

                .on('click', '.edui-define-remove', function(e) {
                    var definedFormula = $(this).parent('.edui-user-define');
                    var id = definedFormula.attr('id');
                    window.localStorage && window.localStorage.removeItem(id);
                    definedFormula.remove();
                    my_defined_formula_num--;
                    if($('#hint').length){
                        $('#hint').html('删除成功~');
                        $('#hint').show('slow/400/fast', function() {
                            setTimeout(function(){
                                $('#hint').hide();
                            }, 1000)
                        });;
                        
                    }
                    return false;
                })

                .on('keydown', function(e) {
                    if(e.altKey && e.keyCode === 65){
                        var $content = $('.edui-btn-tab-item').removeClass('current');
                        $('.edui-fullformula-tab-item').removeClass('current');
                        $this = $('.edui-fullformula-tab-define');
                        var index = $this.data('index');
                        $this.addClass('current');
                        $content.eq(index).addClass('current');
                    }else if(e.ctrlKey && e.keyCode === 81){
                        var $this = $('#edui-fullformula');
                        var time = $this.data('time');
                        if(!time){
                            $this.data('time', 1);
                            var width = $('#edui-fullformula').width(),height = $('#edui-fullformula').height();
                            var left = 0, top = 0;
                            if(currentActiveEditor){
                                var offset = currentActiveEditor.$body.offset();
                                left = offset.left, top = offset.top - height;
                            }
                            UM.fullFormulaAction.show(left,top,width,height);
                        }else{
                            if($this.is(':hidden')){
                                $this.show('slow/400/fast', function() {
                                    UM.setFullFormulaOpenState(true);
                                });
                            }else {
                                $this.hide('slow/400/fast', function() {
                                    UM.setFullFormulaOpenState(false);
                                });
                            }
                        }
                    }
                })
                
                .on('drag', function(e){
                    // alert('不允许拖曳！请使用复制粘贴！');
                    return false;
                })

            setTimeout(function() {

                $('.edui-btn-tab-item').each(function(index) {
                    $this = $(this);

                    var width = 0;

                    $this.find('.edui-fullformula-group').each(function(index) {
                        width += $(this).width();
                    });

                    $this.width(width + 10);
                });

                var currentRowNum = 1, currentColNum = 1;
                //定义
                $('.edui-fullformula-matrixButton')
                    .on('mouseover', function(e) {
                        $('.edui-fullformula-matrixButton').removeClass('edui-fullformula-selected');

                        var $this = $(this);
                        var $prevBrotherNodes = $this.parent().prevAll();
                        var $prevParentNodes = $this.parents().closest('tr').prevAll();

                        var buttonIndex = currentColNum = $prevBrotherNodes.length + 1;
                        currentRowNum = $prevParentNodes.length + 1;

                        $this.addClass('edui-fullformula-selected');
                        $prevBrotherNodes.find('.edui-fullformula-matrixButton').addClass('edui-fullformula-selected');
                        $prevParentNodes.each(function() {
                            $(this).find('.edui-fullformula-matrixButton').each(function(index) {
                                if (index < buttonIndex) {
                                    $(this).addClass('edui-fullformula-selected');
                                }
                            })
                        })
                    })

                    .on('mousedown', function(e) {
                        var mmlwrap = $('.edui-fullformula-contextPanel').data('mml');
                        var mml = getMerticMathml(currentRowNum, currentColNum);

                        if (mmlwrap && mmlwrap !== 'null') mml = mmlwrap.replace('{matrice}', mml);
                        currentActiveEditor.execCommand('formula', mml);
                        setTimeout(function(){
                            UM.fullFormulaIsFocus = true;
                        }, 200);
                        hideContextPannel();
                    });

                $('.edui-fullformula-inputCell').find('input').on('keydown', function(e) {
                    if (e.keyCode == 13) {
                        var mmlwrap = $('.edui-fullformula-contextPanel').data('mml');
                        var $input = $('.edui-fullformula-inputCell').find('input');
                        var mml = getMerticMathml($input.eq(0).val(), $input.eq(1).val());
                        if (mmlwrap && mmlwrap !== 'null') mml = mmlwrap.replace('{matrice}', mml);
                        currentActiveEditor.execCommand('formula', mml);
                        hideContextPannel();
                    }
                });
            }, 2000);

            setTimeout(function(){
                //为保证可拖到，对于某些情况用户网络或者其他问题，比较慢的情况下
                var interId = setInterval(function(){
                    var _toolBarIsDragable = dragFun();
                    if(_toolBarIsDragable){
                        clearInterval(interId);
                        interId = null;
                        return;
                    }
                }, 100);

                var dragFun = function(){
                    if(!$('#edui-fullformula') || !$('#edui-fullformula').length){
                        return false;
                    }
                    $('#edui-fullformula').Drags({handler: '.edui-fullformula-header'});

                    return true;
                }
            }, 1000)
        }
    })();
})();