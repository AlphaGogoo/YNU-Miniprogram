
const JUHE_DOMAIN = 'juhe.cn';

var config = {
    API_URL: {
        footballApi: `https://op.${JUHE_DOMAIN}/onebox/football/league`
    },
    API_KEY: {
        footballKey: '70ce6c71bf84b4d2373496e3cc42c932'
    },
    LEAGUE: ['中超','英超','西甲','德甲','意甲','法甲'],
    LOGO_MAP: {
        '中超':'csl',
        '英超':'premier',
        '西甲':'ligue1',
        '德甲':'bundesliga',
        '意甲':'seriea',
        '法甲':'laliga'
    },
    ICON_MAP: {
        csl: {
            '广州恒大':'hengda',
            '广州富力':'fuli',
            '辽宁宏运':'hongyuan',
            '河北华夏':'huaxia',
            '杭州绿城':'lvcheng',
            '河南建业':'jianye',
            '长春亚泰':'yatai',
            '江苏苏宁':'suning',
            '山东鲁能':'luneng',
            '重庆力帆':'lifan',
            '上海申花':'shenhua',
            '北京国安':'guoan',
            '天津泰达':'taida',
            '上海上港':'dongya',
            '延边富德':'yanbian',
            '石家庄永昌':'yongchang',
        },
        premier: {
            '阿森纳': 'asengna',
            '赫尔城': 'heercheng',
            '曼联': 'manlian',
            '沃特福德': 'watefude',
            '米德尔斯堡': 'mideersibao',
            '斯托克城': 'situokecheng',
            '水晶宫': 'shuijinggong',
            '桑德兰': 'sangdelan',
            '南安普敦': 'nananpudun',
            '西汉姆联': 'xihanmulian',
            '西布朗': 'xibuluomuweiqi',
            '利物浦': 'liwupu',
            '热刺': 'reci',
            '伯恩利': 'boenli',
            '切尔西': 'qieerxi',
            '斯旺西': 'siwangxi',
            '莱斯特': 'laiqiesite',
            '伯恩茅斯': 'boenmaosi',
            '曼城': 'mancheng',
            '埃弗顿': 'aifodun'
        },
        ligue1: {
            '西班牙人': 'xibanyaren',
            '皇家社会': 'huangjiashehui',
            '皇家贝蒂斯': 'huangjiabeidisi',
            '瓦伦西亚': 'walunxiya',
            '阿拉维斯': 'alaweisi',
            '巴塞罗那': 'basailuona',
            '毕尔巴鄂竞技': 'bierbae',
            '拉科鲁尼亚': 'lakenuniya',
            '奥萨苏纳': 'aosaisuna',
            '皇家马德里': 'huangjiamadeli',
            '比利亚雷亚尔': 'biliyaleiyaer',
            '马拉加': 'malajia',
            '莱加内斯': 'laijianeisi',
            '希洪竞技': 'xihongjingji',
            '拉斯帕尔马斯': 'lasipaermasi',
            '塞维利亚': 'saiweiliya',
            '马德里竞技': 'madelijingji',
            '维戈塞尔塔': 'saierta',
            '埃瓦尔': 'aiwaer',
            '格拉纳达': 'gelanada'
        },
        bundesliga: {
            '美因茨': 'meiyingci',
            '奥格斯堡': 'aogesenbao',
            '勒沃库森': 'lewokusen',
            '法兰克福': 'falankefu',
            '因戈尔施塔特': 'yinge',
            '拜仁慕尼黑': 'bairen',
            '莱比锡': 'laibixi',
            '汉堡': 'hanbao',
            '达姆施塔特': 'damushitate',
            '多特蒙德': 'duotemengde',
            '不来梅': 'bulaimei',
            '门兴': 'menxing',
            '沙尔克04': 'shaerke',
            '柏林赫塔': 'heta',
            '沃尔夫斯堡': 'woerfusibao',
            '霍芬海姆': 'huofenhaimu',
            '弗赖堡': 'folaibao',
            '科隆': 'kelong'
        },
        seriea: {
            '那不勒斯': 'nabulesi',
            '热那亚': 'renaya',
            '佛罗伦萨': 'foluolunsa',
            '乌迪内斯': 'wudineisi',
            '克罗托内': 'keluotuonei',
            '罗马': 'luoma',
            '国际米兰': 'guojimilan',
            '恩波利': 'enboli',
            '巴勒莫': 'balemo',
            '亚特兰大': 'yatelanda',
            '萨索洛': 'sasuoluo',
            '切沃': 'qiewo',
            '都灵': 'duling',
            '佩斯卡拉': 'peisikala',
            '桑普多利亚': 'sangpuduoliya',
            '博洛尼亚': 'boluoniya',
            '卡利亚里': 'kaliyali',
            '尤文图斯': 'youwentusi',
            '拉齐奥': 'laqiao',
            'AC米兰': 'acmilan'
        },
        laliga: {
            '波尔多': 'boerduo',
            '巴黎圣日耳曼': 'balishengrierman',
            '甘冈': 'gangang',
            '里昂': 'liang',
            '第戎': 'dirong',
            '卡昂': 'kaang',
            '里尔': 'lier',
            '昂热': 'lire',
            '摩纳哥': 'monage',
            '梅斯': 'meisi',
            '南锡': 'nanxi',
            '蒙彼利埃': 'mengbiliai',
            '图卢兹': 'tuluozi',
            '巴斯蒂亚': 'basidiya',
            '雷恩': 'leien',
            '尼斯': 'nisi',
            '圣埃蒂安': 'shengaidian',
            '洛里昂': 'luoliang',
            '南特': 'nante',
            '马赛': 'masai'
        },
    }
}

module.exports = config;