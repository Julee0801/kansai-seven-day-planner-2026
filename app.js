const state = {
  pace: 'balanced',
  interests: ['history', 'food'],
  stay: 'balanced',
  budget: 'mid',
  sights: [],
  customizedSights: false,
  hiddenStops: {},
  manualOrders: {},
  day: 0
};

const dates = [
  ['12/20','周日'],['12/21','周一'],['12/22','周二'],['12/23','周三'],['12/24','周四'],['12/25','周五'],['12/26','周六']
];

const interestNames = {history:'古寺历史',food:'美食市集',view:'城市夜景',nature:'自然慢游',shop:'购物',photo:'拍照'};

const attractions = {
  osaka: [
    {id:'osaka-castle',name:'大阪城天守阁',meta:'城郭历史 · 约 90 分钟',wiki:'Osaka_Castle'},
    {id:'kuromon',name:'黑门市场',meta:'海鲜小吃 · 午餐',wiki:'Kuromon_Ichiba_Market',commons:'Kuromon Ichiba'},
    {id:'namba-yasaka',name:'难波八阪神社',meta:'狮子殿 · 拍照',wiki:'Namba_Yasaka_Shrine',commons:'Namba Yasaka Shrine lion head'},
    {id:'dotonbori',name:'道顿堀与法善寺',meta:'霓虹夜景 · 晚餐',wiki:'Dōtonbori'},
    {id:'umeda',name:'梅田蓝天大厦',meta:'日落夜景 · 需门票',wiki:'Umeda_Sky_Building'},
    {id:'shinsaibashi',name:'心斋桥与美国村',meta:'购物街区 · 灵活安排',wiki:'Shinsaibashi'},
    {id:'tsutenkaku',name:'通天阁与新世界',meta:'大阪老街 · 约 2 小时',wiki:'Tsūtenkaku'},
    {id:'abeno',name:'阿倍野 HARUKAS 300',meta:'高空夜景 · 天王寺',wiki:'Abeno_Harukas'},
    {id:'kaiyukan',name:'大阪海游馆',meta:'亲子雨天 · 约 3 小时',wiki:'Osaka_Aquarium_Kaiyukan'},
    {id:'sumiyoshi',name:'住吉大社',meta:'古社建筑 · 约 90 分钟',wiki:'Sumiyoshi-taisha'},
    {id:'teamlab',name:'teamLab 大阪长居植物园',meta:'户外夜展 · 约 2 小时',wiki:'Nagai_Botanical_Garden',commons:'Nagai Botanical Garden Osaka'},
    {id:'usj',name:'日本环球影城 USJ',meta:'全日项目 · 必须预约',wiki:'Universal_Studios_Japan'},
    {id:'nakazakicho',name:'中崎町老屋咖啡街',meta:'本地生活 · 町屋与古着店',wiki:'Nakazakichō_Station',commons:'Nakazakicho Osaka',local:true,baike:'中崎町'},
    {id:'tenjinbashi',name:'天神桥筋商店街与天满',meta:'本地生活 · 市场与居酒屋',wiki:'Tenjinbashisuji_Sixth_Street_Station',commons:'Tenjinbashisuji Shopping Street',local:true,baike:'天神桥筋商店街'},
    {id:'karahori',name:'空堀商店街',meta:'本地生活 · 老店与町屋巷弄',wiki:'Karahori_Shopping_Street',commons:'Karahori Shopping Street Osaka',local:true,baike:'空堀商店街'},
    {id:'kizu-market',name:'大阪木津卸卖市场',meta:'本地早餐 · 建议上午前往',wiki:'Kizu_Wholesale_Market',commons:'Osaka Kizu Wholesale Market',local:true,baike:'大阪木津卸卖市场'}
  ],
  kyoto: [
    {id:'fushimi-inari',name:'伏见稻荷大社',meta:'千本鸟居 · 90–120 分钟',wiki:'Fushimi_Inari-taisha'},
    {id:'kiyomizu',name:'清水寺与二年坂',meta:'东山经典 · 半日',wiki:'Kiyomizu-dera'},
    {id:'gion',name:'祇园与八坂神社',meta:'黄昏散步 · 拍照',wiki:'Gion'},
    {id:'arashiyama-bamboo',name:'岚山竹林',meta:'建议 08:30 前抵达',wiki:'Bamboo_Forest_(Kyoto)'},
    {id:'tenryuji',name:'天龙寺与渡月桥',meta:'庭园山水 · 约 2 小时',wiki:'Tenryū-ji'},
    {id:'kinkakuji',name:'金阁寺',meta:'京都西北 · 约 60 分钟',wiki:'Kinkaku-ji'},
    {id:'nishiki',name:'锦市场与四条',meta:'小吃购物 · 17:00 前',wiki:'Nishiki_Market'},
    {id:'nijo',name:'二条城',meta:'将军府邸 · 约 2 小时',wiki:'Nijō_Castle'},
    {id:'imperial-palace',name:'京都御所',meta:'皇家园林 · 约 90 分钟',wiki:'Kyoto_Imperial_Palace'},
    {id:'ginkakuji',name:'银阁寺与哲学之道',meta:'东山北部 · 约 2 小时',wiki:'Ginkaku-ji'},
    {id:'nanzenji',name:'南禅寺与水路阁',meta:'红砖水道 · 约 90 分钟',wiki:'Nanzen-ji'},
    {id:'sanjusangendo',name:'三十三间堂',meta:'千尊观音 · 约 60 分钟',wiki:'Sanjūsangen-dō'},
    {id:'ryoanji',name:'龙安寺',meta:'枯山水 · 金阁寺附近',wiki:'Ryōan-ji'},
    {id:'uji',name:'宇治平等院与抹茶街',meta:'京都近郊 · 半日',wiki:'Byōdō-in'},
    {id:'kamogawa-delta',name:'鸭川三角洲与出町柳',meta:'本地散步 · 河岸跳乌龟石',wiki:'Kamo_River',commons:'Kamogawa Delta Kyoto',local:true,baike:'鸭川三角洲'},
    {id:'sanjo-kai',name:'京都三条会商店街',meta:'本地生活 · 800 米雨棚街',wiki:'Nijō_Station_(Kyoto)',commons:'Kyoto Sanjo-kai Shopping Street',local:true,baike:'京都三条会商店街'},
    {id:'daitokuji-street',name:'大德寺街与新大宫商店街',meta:'本地生活 · 老铺与咖啡店',wiki:'Daitoku-ji',commons:'Shin Omiya Shopping Street Kyoto',local:true,baike:'大德寺 京都'},
    {id:'ebisugawa',name:'夷川家具街',meta:'本地生活 · 家具老铺与独立店',wiki:'Kyoto_Imperial_Palace',commons:'Ebisugawa Street Kyoto',local:true,baike:'夷川通'}
  ],
  nara: [
    {id:'nara-park',name:'奈良公园与兴福寺',meta:'鹿群与古寺 · 免费区域',wiki:'Nara_Park'},
    {id:'todaiji',name:'东大寺与二月堂',meta:'大佛殿 · 必看',wiki:'Tōdai-ji'},
    {id:'kasuga',name:'春日大社',meta:'林间灯笼参道',wiki:'Kasuga-taisha'},
    {id:'naramachi',name:'奈良町',meta:'町家咖啡 · 慢游',wiki:'Naramachi'},
    {id:'isuien',name:'依水园',meta:'借景庭园 · 约 60 分钟',wiki:'Isui-en'},
    {id:'yakushiji',name:'药师寺与唐招提寺',meta:'西之京 · 半日',wiki:'Yakushi-ji'},
    {id:'horyuji',name:'法隆寺',meta:'世界最古木构 · 半日',wiki:'Hōryū-ji'},
    {id:'nara-museum',name:'奈良国立博物馆',meta:'佛教艺术 · 雨天',wiki:'Nara_National_Museum'},
    {id:'kyudaijoin',name:'名胜旧大乘院庭园',meta:'本地静赏 · 免费庭园景观',wiki:'Daijō-in',commons:'Former Daijoin Temple Garden Nara',local:true,baike:'旧大乘院庭园'},
    {id:'hokkedo',name:'东大寺法华堂（三月堂）',meta:'本地深度 · 奈良时代佛像',wiki:'Hokke-dō',commons:'Hokkedo Todaiji Nara',local:true,baike:'东大寺法华堂'},
    {id:'imaicho',name:'今井町古民居街区',meta:'本地深度 · 江户商家町',wiki:'Imaichō',commons:'Imaicho Kashihara Nara',local:true,baike:'今井町'},
    {id:'nakanishi',name:'中西与三郎町家茶房',meta:'本地甜点 · 和果子与抹茶',wiki:'Naramachi',commons:'Naramachi traditional house',local:true,baike:'奈良町'}
  ],
  kobe: [
    {id:'nunobiki',name:'布引香草园',meta:'缆车山景 · 看天气',wiki:'Kobe_Nunobiki_Herb_Gardens'},
    {id:'kitano',name:'北野异人馆街',meta:'洋馆建筑 · 下坡路线',wiki:'Kitano-chō'},
    {id:'kobe-beef',name:'神户牛午餐',meta:'建议预约',wiki:'Kobe_beef'},
    {id:'nankinmachi',name:'南京町与旧居留地',meta:'小吃与街拍',wiki:'Nankin-machi'},
    {id:'kobe-harbor',name:'美利坚公园与港湾',meta:'蓝调时刻 · 夜景',wiki:'Meriken_Park'},
    {id:'rokko',name:'六甲山与摩耶山夜景',meta:'山顶景观 · 看天气',wiki:'Mount_Rokkō'},
    {id:'arima',name:'有马温泉',meta:'金泉银泉 · 半日至一日',wiki:'Arima_Onsen'},
    {id:'animal-kingdom',name:'神户动物王国',meta:'亲子互动 · 约 3 小时',wiki:'Kobe_Animal_Kingdom'},
    {id:'akashi-bridge',name:'明石海峡大桥与舞子',meta:'海峡夕阳 · 神户西部',wiki:'Akashi_Kaikyo_Bridge'},
    {id:'himeji',name:'姬路城',meta:'神户周边 · 至少半日',wiki:'Himeji_Castle'},
    {id:'nada-sake',name:'滩五乡清酒街',meta:'酒藏参观 · 东神户',wiki:'Nada-gogō'},
    {id:'suma-seaside',name:'须磨海滨与须磨浦',meta:'本地散步 · 海岸与山海电车',wiki:'Suma-ku,_Kobe',commons:'Suma Beach Kobe',local:true,baike:'须磨海滨公园'},
    {id:'nagata',name:'长田铁人28号与商店街',meta:'本地生活 · 复古街与炒面饭',wiki:'Tetsujin_28-go',commons:'Tetsujin 28 go Kobe Nagata',local:true,baike:'铁人28号'},
    {id:'higashiyama-market',name:'东山商店街与湊川市场',meta:'本地市场 · 熟食与日常采购',wiki:'Minatogawa_Station',commons:'Higashiyama Shopping Street Kobe',local:true,baike:'湊川市场'},
    {id:'suma-rikyu',name:'须磨离宫公园',meta:'本地休闲 · 园林与大阪湾景色',wiki:'Suma_Rikyu_Park',commons:'Suma Rikyu Park',local:true,baike:'须磨离宫公园'}
  ]
};
const allSightIds = Object.values(attractions).flat().map(x=>x.id);
const defaultSightIds = ['osaka-castle','kuromon','namba-yasaka','dotonbori','umeda','shinsaibashi','fushimi-inari','kiyomizu','gion','arashiyama-bamboo','tenryuji','kinkakuji','nishiki','nara-park','todaiji','kasuga','naramachi','nunobiki','kitano','kobe-beef','nankinmachi','kobe-harbor'];
state.sights = [...defaultSightIds];

function spotIdFor(title){
  const rules = [
    ['osaka-castle','大阪城'],['kuromon','黑门市场'],['namba-yasaka','难波八阪'],['dotonbori','道顿堀'],['umeda','梅田蓝天'],['shinsaibashi','心斋桥'],
    ['fushimi-inari','伏见稻荷'],['kiyomizu','清水寺'],['gion','八坂神社'],['arashiyama-bamboo','竹林小径'],['tenryuji','天龙寺'],['kinkakuji','金阁寺'],['nishiki','锦市场'],
    ['nara-park','兴福寺'],['todaiji','东大寺'],['kasuga','春日大社'],['naramachi','奈良町'],
    ['nunobiki','布引香草园'],['kitano','北野异人馆'],['kobe-beef','神户牛'],['nankinmachi','南京町'],['kobe-harbor','美利坚公园']
  ];
  return rules.find(([,needle])=>title.includes(needle))?.[0] || '';
}

const extraPlans = {
  'tsutenkaku':{day:1,time:'15:15',title:'通天阁 → 新世界',desc:'登塔后逛复古商店街，把串炸安排在这里。',transit:'地铁堺筋线｜约 20 分 · 约 4 km',tag:'food'},
  'abeno':{day:1,time:'17:20',title:'阿倍野 HARUKAS 300',desc:'从天王寺最高层俯瞰大阪，适合日落前抵达。',transit:'地铁御堂筋线｜约 15 分 · 约 4 km',tag:'view'},
  'kaiyukan':{day:1,time:'13:00',title:'大阪海游馆',desc:'围绕太平洋水槽单向游览，雨天尤其合适。',transit:'地铁中央线至大阪港｜约 35 分 · 约 10 km',tag:'nature'},
  'sumiyoshi':{day:1,time:'08:45',title:'住吉大社',desc:'看住吉造本殿与太鼓桥，清晨氛围安静。',transit:'南海本线 / 阪堺电车｜约 20 分 · 约 8 km',tag:'history'},
  'teamlab':{day:1,time:'19:30',title:'teamLab 大阪长居植物园',desc:'夜间户外数字艺术展，需提前购买指定日期门票。',transit:'地铁御堂筋线至长居｜约 30 分 · 约 9 km',tag:'view'},
  'nakazakicho':{day:1,time:'15:10',title:'中崎町老屋咖啡街',desc:'钻进梅田东侧的旧民居巷弄，逛独立咖啡馆、古着店与杂货铺。',transit:'地铁谷町线至中崎町｜约 20 分 · 约 6 km',tag:'food'},
  'tenjinbashi':{day:1,time:'17:10',title:'天神桥筋商店街 → 天满',desc:'从居民日常商店一路逛到天满市场与站前居酒屋，晚餐选择密集。',transit:'JR 环状线 / 地铁堺筋线｜约 20 分 · 约 5 km',tag:'food'},
  'karahori':{day:1,time:'13:35',title:'空堀商店街',desc:'在保留战前巷弄肌理的街区找老铺、町屋改造店和小型工房。',transit:'地铁长堀鹤见绿地线至松屋町｜约 15 分 · 约 3 km',tag:'shop'},
  'kizu-market':{day:1,time:'08:15',title:'大阪木津卸卖市场',desc:'跟着本地采购节奏吃海鲜早餐；多数店铺中午前后结束营业。',transit:'难波步行约 15 分 / 地铁大国町站约 5 分',tag:'food'},
  'nijo':{day:3,time:'13:20',title:'二条城',desc:'参观二之丸御殿与庭园，留意冬季闭馆时间。',transit:'地铁东西线至二条城前｜约 35 分',tag:'history'},
  'imperial-palace':{day:2,time:'14:10',title:'京都御所',desc:'御苑宽阔，适合在寺社密集行程中放慢脚步。',transit:'地铁乌丸线至今出川｜约 25 分',tag:'history'},
  'ginkakuji':{day:2,time:'14:30',title:'银阁寺 → 哲学之道',desc:'从银阁寺沿水渠南行，冬季更清静。',transit:'京阪＋巴士 / 出租车｜约 35 分',tag:'nature'},
  'nanzenji':{day:2,time:'16:00',title:'南禅寺 · 水路阁',desc:'红砖拱桥与禅寺空间适合傍晚拍照。',transit:'哲学之道南端步行约 25 分',tag:'photo'},
  'sanjusangendo':{day:2,time:'11:35',title:'三十三间堂',desc:'在长殿中观看千尊观音像，室内参观约一小时。',transit:'京阪七条站步行约 7 分',tag:'history'},
  'ryoanji':{day:3,time:'15:00',title:'龙安寺',desc:'与金阁寺同区安排，观看著名枯山水庭园。',transit:'金阁寺前巴士 / 出租车｜约 15 分 · 约 2 km',tag:'history'},
  'uji':{day:2,time:'08:20',title:'宇治平等院与抹茶街',desc:'凤凰堂、宇治川和表参道组成半日近郊路线。',transit:'JR 奈良线京都→宇治｜约 20 分 · 约 17 km',tag:'history'},
  'kamogawa-delta':{day:2,time:'15:10',title:'鸭川三角洲 → 出町柳',desc:'坐在两河交汇处看本地人散步骑车，再穿过跳石去出町桝形商店街。',transit:'京阪出町柳站步行约 5 分',tag:'nature'},
  'sanjo-kai':{day:3,time:'16:10',title:'京都三条会商店街',desc:'在 800 米有盖商店街里找熟食、咖啡与居民日常小店。',transit:'二条城步行约 12 分 · 约 1 km',tag:'food'},
  'daitokuji-street':{day:3,time:'15:25',title:'大德寺街 → 新大宫商店街',desc:'老式家庭商铺与年轻咖啡店并存，是北京都很松弛的生活街区。',transit:'金阁寺前巴士 / 出租车｜约 15 分 · 约 3 km',tag:'shop'},
  'ebisugawa':{day:2,time:'16:40',title:'夷川家具街',desc:'沿京都御苑南侧看家具老铺、工艺店和新开的生活方式小店。',transit:'地铁丸太町站步行约 8 分',tag:'shop'},
  'isuien':{day:4,time:'09:45',title:'依水园',desc:'以若草山为借景的回游庭园，东大寺前顺路加入。',transit:'兴福寺步行约 10 分 · 约 700 m',tag:'nature'},
  'yakushiji':{day:4,time:'14:30',title:'药师寺 → 唐招提寺',desc:'两座世界遗产相距不远，适合半日深度游。',transit:'近铁奈良→西之京｜约 20 分 · 约 6 km',tag:'history'},
  'horyuji':{day:4,time:'13:30',title:'法隆寺',desc:'世界现存最古老木构建筑群，至少预留半天。',transit:'JR 奈良→法隆寺＋巴士｜约 40 分 · 约 14 km',tag:'history'},
  'nara-museum':{day:4,time:'13:20',title:'奈良国立博物馆',desc:'佛教造像与奈良文化收藏，适合雨天或历史爱好者。',transit:'奈良公园内步行约 10 分',tag:'history'},
  'kyudaijoin':{day:4,time:'15:45',title:'名胜旧大乘院庭园',desc:'在奈良町边缘安静看池泉庭园，适合避开公园主路人潮。',transit:'奈良町步行约 10 分 · 约 800 m',tag:'nature'},
  'hokkedo':{day:4,time:'11:45',title:'东大寺法华堂（三月堂）',desc:'从二月堂继续步行，近距离看保存完整的奈良时代佛像群。',transit:'东大寺大佛殿步行约 12 分 · 约 800 m',tag:'history'},
  'imaicho':{day:4,time:'14:10',title:'今井町古民居街区',desc:'在保存完整的江户商家町散步，找町家、酿造店和小型展馆。',transit:'近铁奈良→大和八木，步行至今井町｜约 45 分 · 约 27 km',tag:'history'},
  'nakanishi':{day:4,time:'16:20',title:'中西与三郎町家茶房',desc:'在奈良町老铺吃季节和果子与抹茶，作为步行日的缓冲休息。',transit:'奈良町内步行约 5–10 分',tag:'food'},
  'rokko':{day:5,time:'15:30',title:'六甲山 · 摩耶山夜景',desc:'天气晴朗时再上山，夜间注意缆车末班时间。',transit:'三宫→六甲站＋巴士缆车｜约 60 分 · 约 18 km',tag:'view'},
  'arima':{day:5,time:'13:00',title:'有马温泉',desc:'泡金泉或银泉、逛温泉老街，建议至少预留半天。',transit:'三宫直达巴士约 35–45 分 · 约 24 km',tag:'nature'},
  'animal-kingdom':{day:5,time:'13:30',title:'神户动物王国',desc:'室内外动物互动丰富，家庭游客可替代北野街区。',transit:'三宫乘 Port Liner｜约 20 分 · 约 8 km',tag:'nature'},
  'akashi-bridge':{day:5,time:'16:10',title:'明石海峡大桥 · 舞子公园',desc:'在海峡边看大桥与日落，蓝调时刻最漂亮。',transit:'JR 三宫→舞子｜约 25 分 · 约 18 km',tag:'view'},
  'himeji':{day:5,time:'08:40',title:'姬路城',desc:'从神户继续向西的半日项目，城内阶梯较陡。',transit:'JR 新快速三宫→姬路｜约 40 分 · 约 55 km',tag:'history'},
  'nada-sake':{day:5,time:'14:20',title:'滩五乡清酒街',desc:'参观酒藏与资料馆，可与神户港或六甲山搭配。',transit:'阪神本线至鱼崎 / 住吉｜约 20 分 · 约 9 km',tag:'food'}
  ,'suma-seaside':{day:5,time:'15:40',title:'须磨海滨 → 须磨浦',desc:'沿海岸看当地人遛狗与慢跑，晴天可把山海电车和夕阳一起拍下。',transit:'JR 三宫→须磨 / 须磨海滨公园｜约 15 分 · 约 9 km',tag:'nature'},
  'nagata':{day:5,time:'14:10',title:'长田铁人28号 → 商店街',desc:'看铁人纪念像，再到复古商店街尝长田名物炒面饭与牛筋烧。',transit:'JR 三宫→新长田｜约 10 分 · 约 7 km',tag:'food'},
  'higashiyama-market':{day:5,time:'14:30',title:'东山商店街与湊川市场',desc:'逛神户厨房般的在地市场，适合买熟食、水果和便当。',transit:'地铁三宫→湊川公园｜约 10 分 · 约 4 km',tag:'food'},
  'suma-rikyu':{day:5,time:'13:40',title:'须磨离宫公园',desc:'本地家庭常去的园林公园，可眺望大阪湾，冬日散步节奏舒适。',transit:'山阳电铁月见山站步行约 10 分 · 约 10 km',tag:'nature'}
};

const hotels = {
  osaka: {
    value: [
      {tag:'性价比',name:'相铁 FRESA INN 大阪难波站前',desc:'近南海难波与地铁，机场日最轻松。',walk:'步行约 2–5 分钟',why:'早班 / 晚班友好',url:'https://sotetsu-hotels.com/fresa-inn/namba-ekimae/'},
      {tag:'性价比',name:'Hotel Gracery Osaka Namba',desc:'位置安静，步行可到道顿堀和 OCAT。',walk:'难波站步行约 3 分钟',why:'动线均衡',url:'https://gracery.com/osaka-namba/'},
      {tag:'公寓型',name:'MIMARU Osaka Namba Station',desc:'多人同行、需要厨房或较大空间时更合适。',walk:'日本桥附近',why:'家庭 / 朋友',url:'https://mimaruhotels.com/en/hotel/namba-station/'}
    ],
    mid: [
      {tag:'首选',name:'大阪难波日和酒店',desc:'南海难波站旁，机场、奈良与大阪市区都顺手。',walk:'南海难波步行约 2 分钟',why:'综合最省心',url:'https://nambahinode.com/'},
      {tag:'交通王',name:'Swissôtel Nankai Osaka',desc:'就在南海难波站上方，拖行李几乎零负担。',walk:'车站直连',why:'机场最方便',url:'https://www.swissotel.com/hotels/osaka/'},
      {tag:'设计感',name:'Cross Hotel Osaka',desc:'道顿堀与心斋桥之间，逛吃氛围最好。',walk:'难波步行约 8 分钟',why:'夜生活便利',url:'https://cross-osaka.orixhotelsandresorts.com/'}
    ],
    premium: [
      {tag:'景观',name:'Centara Grand Hotel Osaka',desc:'难波公园旁，高楼景观与餐饮选择丰富。',walk:'南海难波步行约 4 分钟',why:'高层夜景',url:'https://www.centarahotelsresorts.com/centaragrand/cgoj'},
      {tag:'奢华',name:'W Osaka',desc:'御堂筋上的现代设计酒店，适合重视体验感。',walk:'心斋桥站步行约 3 分钟',why:'设计与社交',url:'https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/'},
      {tag:'经典',name:'The St. Regis Osaka',desc:'本町站直连，往梅田、难波与京都都方便。',walk:'本町站直连',why:'服务与安静',url:'https://www.marriott.com/en-us/hotels/osaxr-the-st-regis-osaka/overview/'}
    ]
  },
  kyoto: {
    value: [
      {tag:'性价比',name:'Via Inn Prime Kyotoeki Hachijoguchi',desc:'京都站八条口附近，次日去岚山和奈良都方便。',walk:'京都站步行约 2 分钟',why:'铁路动线好',url:'https://www.viainn.com/en/kyoto-h/'},
      {tag:'性价比',name:'Sotetsu Fresa Inn Kyoto-Hachijoguchi',desc:'房型实用，适合短住与早出发。',walk:'京都站步行约 3 分钟',why:'行李省力',url:'https://sotetsu-hotels.com/fresa-inn/kyoto-hachijoguchi/'},
      {tag:'生活感',name:'THE POCKET HOTEL 京都四条乌丸',desc:'预算优先，周边餐饮购物密集。',walk:'乌丸站步行约 1 分钟',why:'轻装旅客',url:'https://sotetsu-hotels.com/pocket-hotel/karasuma/'}
    ],
    mid: [
      {tag:'首选',name:'THE THOUSAND KYOTO',desc:'京都站旁，换城与行李移动最省心。',walk:'京都站步行约 2 分钟',why:'交通＋质感',url:'https://www.keihanhotels-resorts.co.jp/the-thousand-kyoto/en/'},
      {tag:'位置佳',name:'Hotel Resol Trinity Kyoto',desc:'靠近京都市役所，去东山、祇园与锦市场均衡。',walk:'市役所前站步行约 2 分钟',why:'城市漫步',url:'https://www.resol-hotel.jp/trinity-kyoto/en/'},
      {tag:'温泉感',name:'Onyado Nono Kyoto Shichijo',desc:'带天然温泉氛围，冬天回酒店泡汤很舒服。',walk:'京都站步行约 7 分钟',why:'冬季治愈',url:'https://dormy-hotels.com/en/dormyinn/hotels/nono_kyoto/'}
    ],
    premium: [
      {tag:'町家美学',name:'Park Hyatt Kyoto',desc:'二年坂旁，清晨与夜晚的东山体验无可替代。',walk:'清水寺区域',why:'沉浸东山',url:'https://www.hyatt.com/park-hyatt/en-US/itmph-park-hyatt-kyoto'},
      {tag:'河畔',name:'The Ritz-Carlton Kyoto',desc:'鸭川边，环境安静且服务细致。',walk:'京都市役所附近',why:'河景与服务',url:'https://www.ritzcarlton.com/en/hotels/ukyrz-the-ritz-carlton-kyoto/overview/'},
      {tag:'现代',name:'Ace Hotel Kyoto',desc:'新风馆内，设计、咖啡与购物氛围浓。',walk:'乌丸御池站直连',why:'设计生活方式',url:'https://acehotel.com/kyoto/'}
    ]
  }
};

function s(time,title,desc,transit='',note='',tag=''){return {time,title,desc,transit,note,tag,spot:spotIdFor(title)};}

function buildDays(){
  const twoBase = state.stay === 'balanced';
  const oneBase = state.stay === 'one';
  const kyotoLong = state.stay === 'kyoto';
  const wants = x => state.interests.includes(x);
  const osakaNight = wants('view') ? '梅田蓝天大厦 · 空中庭园' : wants('shop') ? '心斋桥 PARCO · 美国村' : '道顿堀 · 法善寺横丁';
  const osakaNightDesc = wants('view') ? '在 17:00 前后上楼，刚好看日落到亮灯。' : wants('shop') ? '把购物集中到晚上，白天留给大阪城与街区。' : '沿运河看霓虹，晚餐留给大阪烧或章鱼烧。';
  const d3Origin = oneBase ? '大阪难波出发' : '退房并前往京都';
  const d3Transit = oneBase ? '地铁御堂筋线→梅田，JR 新快速→京都｜约 60 分钟 · 约 48 km' : '地铁→大阪站，JR 新快速→京都｜约 60 分钟 · 约 48 km';
  const d4End = oneBase ? '返回大阪难波' : '京都站 / 四条晚餐';
  const d5Origin = oneBase ? '大阪难波' : '京都站';
  const d5ToNara = oneBase ? '近铁奈良线快速急行｜约 40 分钟 · 约 32 km' : '近铁京都线急行｜约 45–50 分钟 · 约 40 km';
  const d5End = kyotoLong ? '奈良町晚餐后返回京都' : '奈良町 → 大阪难波';
  const d5Back = kyotoLong ? '近铁奈良→京都｜约 45–50 分钟 · 约 40 km' : '近铁奈良线→大阪难波｜约 40 分钟 · 约 32 km';
  const d6Origin = kyotoLong ? '京都退房 → 神户三宫' : '大阪难波 → 神户三宫';
  const d6Transit = kyotoLong ? 'JR 新快速｜约 55 分钟 · 约 75 km' : '阪神难波线→尼崎→三宫｜约 45 分钟 · 约 35 km';

  let days = [
    {city:'大阪 · ARRIVAL',title:'落地不赶路，先认识难波',walk:'约 5,000 步',rail:'45–70 分',stay:'大阪 · 难波',tip:'入境、取行李常需 60–90 分钟。若 15:00 左右才出机场仍完全来得及，不要预订当天限时项目。',stops:[
      s('13:15','抵达关西国际机场 T1','入境、取行李、领取 ICOCA 或取现。','','建议先在机场解决上网与交通卡'),
      s('15:00','关西机场 → 南海难波','Rapi:t 有对号座，机场急行更灵活。','南海 Rapi:t 约 34–38 分 / 机场急行约 45 分 · 约 42 km'),
      s('16:10','难波酒店办理入住','优先住南海难波、御堂筋线难波一带。','车站步行 3–10 分'),
      s('17:30','道顿堀 → 法善寺横丁','戎桥、格力高灯牌、法善寺与晚餐连成一条线。','全程步行约 1.5 km · 25 分','别在第一家店排太久，支路通常更好吃','food'),
      s('20:00','心斋桥轻松散步','有体力再逛；没体力就回酒店泡澡。','步行约 15 分','可随时取消','shop')
    ]},
    {city:'大阪 · OSAKA',title:'城郭、市场与霓虹的一天',walk:'约 16,000 步',rail:'约 55 分',stay:'大阪 · 难波',tip:'大阪城天守阁 09:00 开门，早到能避开团队。天守阁目前通常 18:00 关闭、17:30 停止入场，年末安排请再确认。',stops:[
      s('08:30','难波 → 大阪城公园','从森之宫站进入，沿公园一路走向天守阁。','地铁千日前线→谷町线 / 中央线｜约 30 分 · 约 6 km'),
      s('09:15','大阪城天守阁','预留 90 分钟；不想进馆可只逛公园与护城河。','园内步行约 20 分','门票与开放时间临行确认','history'),
      s('11:30','黑门市场','午餐以少量多样为原则，避免一次吃太饱。','地铁谷町四丁目→日本桥｜约 20 分 · 约 4 km','','food'),
      s('13:30','难波八阪神社 → 堀江','巨型狮子殿很适合拍照，之后走向橘子街。','地铁＋步行约 25 分','','photo'),
      s('16:30',osakaNight,osakaNightDesc,'地铁约 15–25 分 · 约 4–7 km','夜景项目建议提前预约',wants('view')?'view':wants('shop')?'shop':'food'),
      s('19:30','大阪晚餐','串炸、寿喜烧或居酒屋，按体力就近安排。','返回难波约 10–25 分','','food')
    ]},
    {city:'京都 · SOUTH & EAST',title:'伏见千鸟居，走进东山暮色',walk:'约 18,000 步',rail:'约 100 分',stay:oneBase?'大阪 · 难波':'京都 · 车站/四条',tip:oneBase?'今晚返回大阪，建议 20:30 前从祇园出发；若觉得累，可在控制区切换“双基地”。':'把行李先寄存京都酒店，再轻装去伏见稻荷。东山从清水寺一路向北走，几乎不折返。',stops:[
      s('07:45',d3Origin,'今天越早出发，伏见稻荷越清净。',d3Transit),
      s('09:15','伏见稻荷大社','走到四辻往返约 90–120 分钟；松弛版走到千本鸟居即可。','JR 京都→稻荷 5 分 / 京阪亦可','全程免费、全天开放','history'),
      s('11:40','伏见稻荷 → 清水五条','避开从京都站直坐巴士，铁路更稳定。','京阪本线｜约 15 分，出站后步行约 25 分 · 2 km'),
      s('12:30','清水寺 · 三年坂 · 二年坂','先寺院后下坡逛街，路程更省力。','步行为主约 2.3 km','冬季寺院较早关闭','history'),
      s('16:00','八坂神社 → 祇园花见小路','黄昏最有古都氛围，也适合拍照。','步行约 20 分','','photo'),
      s('18:00','先斗町 / 河原町晚餐','预约一顿京都料理，或在木屋町灵活找店。',oneBase?'阪急河原町→大阪梅田，转地铁回难波｜约 60 分':'步行 / 地铁回酒店约 15–25 分','','food')
    ]},
    {city:'京都 · WEST',title:'岚山清晨与金阁寺金色午后',walk:'约 17,000 步',rail:'约 70 分',stay:oneBase?'大阪 · 难波':'京都 · 车站/四条',tip:'京都官方建议去岚山优先乘 JR 或阪急，避免从京都站一路坐拥堵的巴士。竹林 08:30 前体验明显更好。',stops:[
      s('07:30',oneBase?'大阪难波 → 岚山':'酒店 → 岚山', '把竹林放在游客团抵达前。',oneBase?'地铁→大阪站，JR 新快速＋嵯峨野线｜约 85 分 · 约 55 km':'JR 嵯峨野线｜约 17 分，车站步行 8 分'),
      s('08:40','竹林小径 → 野宫神社','清晨逆向从竹林入口进入，光线柔和。','步行约 1.5 km','','nature'),
      s('10:00','天龙寺 → 渡月桥','庭园、曹源池与桥边连在一起。','步行约 20 分','天龙寺开放时间临行确认','history'),
      s('12:00','岚山午餐','豆腐料理、鲷鱼茶泡饭或荞麦面。','步行','','food'),
      s('13:30','金阁寺','从岚山横向移动，不再绕回京都站。','岚电至北野白梅町＋巴士 / 出租车｜约 35–45 分 · 约 8 km','','history'),
      s('16:00','锦市场 → 四条河原町','锦市场边走边吃，之后留时间购物。','巴士 / 出租车约 30 分 · 约 6 km','17:00 后部分店铺开始收摊',wants('shop')?'shop':'food'),
      s('19:00',d4End,'按住宿方案返回。',oneBase?'阪急河原町→大阪梅田，转地铁难波｜约 60 分':'步行 / 地铁约 10–20 分')
    ]},
    {city:'奈良 · NARA',title:'从大佛到鹿群，沿公园单向走',walk:'约 18,000 步',rail:'约 85 分',stay:kyotoLong?'京都 · 车站/四条':'大阪 · 难波',tip:'东大寺冬季通常 08:00–17:00。春日大社本殿特别参拜在 12/20–1/7 期间可能关闭，但神社外部与参道仍可游览。',stops:[
      s('08:00',d5Origin+' → 近铁奈良','行李寄存在近铁奈良站，或提前送往下一家酒店。',d5ToNara),
      s('09:00','兴福寺 → 奈良公园','从车站向东走，依次游览，不走回头路。','步行约 10–15 分 · 1 km','','history'),
      s('10:15','东大寺 · 二月堂','大佛殿后继续上二月堂，景色开阔。','步行约 20 分 · 1.3 km','东大寺冬季 17:00 关闭','history'),
      s('12:30','若草山脚午餐','柿叶寿司、茶粥或葛物料理。','步行约 10 分','','food'),
      s('14:00','春日大社表参道','穿过林间石灯笼与鹿群，走到主殿外苑。','步行约 25 分 · 1.8 km','特别参拜区可能季节性关闭','nature'),
      s('16:00','奈良町散步','町家咖啡与老街适合作为收尾。','巴士约 15 分 / 步行约 30 分','','photo'),
      s('18:00',d5End,'取行李后回住宿城市。',d5Back)
    ]},
    {city:'神户 · KOBE',title:'山、洋馆与港湾蓝调时刻',walk:'约 15,000 步',rail:'约 100 分',stay:'大阪 · 难波',tip:'12 月山上风大，若天气不好就跳过布引香草园，改去神户市立博物馆或咖啡店。神户港最适合在日落前 45 分钟抵达。',stops:[
      s('08:30',d6Origin,'先到新神户 / 三宫，按天气决定是否上山。',d6Transit),
      s('10:00','布引香草园 · 空中缆车','缆车约 10 分钟，可俯瞰神户与大阪湾。','三宫地铁→新神户＋步行约 20 分','强风时缆车可能调整','nature'),
      s('12:30','北野异人馆街','从山脚一路向下走，不需要爬回去。','步行约 15 分 · 1 km','','history'),
      s('14:00','三宫 · 神户牛午餐','午市套餐通常比晚餐更从容，建议预约。','步行约 15 分','','food'),
      s('15:45','南京町 → 旧居留地','小吃、红砖建筑与精品街区连续步行。','JR / 步行约 20 分','','shop'),
      s('17:00','美利坚公园 → Harborland','把港塔、海洋博物馆与马赛克夜景放在蓝调时刻。','步行约 25 分 · 2 km','','view'),
      s('19:30','神户 → 大阪难波','直接回难波收拾行李，隔天去机场。','阪神本线＋难波线｜约 45 分 · 约 35 km')
    ]},
    {city:'大阪 · DEPARTURE',title:'留足机场时间，从容返程',walk:'约 3,000 步',rail:'约 45 分',stay:'返程',tip:'国际航班建议至少提前 2.5–3 小时到达机场。若退税、托运行李较多，09:30 前从难波出发更稳。',stops:[
      s('08:00','酒店早餐 · 最后整理','检查护照、充电设备与退税物品。'),
      s('09:15','退房 → 南海难波站','从酒店步行进站，预留买票与找站台时间。','步行约 3–10 分'),
      s('09:45','难波 → 关西机场','Rapi:t 有固定座位；机场急行无需预约。','南海 Rapi:t 约 34–38 分 / 机场急行约 45 分 · 约 42 km'),
      s('10:30','抵达 KIX T1','托运、安检、出境与最后购物。','车站到值机区步行约 10 分'),
      s('13:30','航班起飞','带着完整的关西记忆回家。')
    ]}
  ];

  Object.entries(extraPlans).forEach(([id,p])=>{
    if(!state.sights.includes(id))return;
    days[p.day].stops.push({...s(p.time,p.title,p.desc,p.transit,p.note||'',p.tag||''),spot:id});
  });
  if(state.sights.includes('usj')){
    days[1].stops=[
      s('07:30','难波 → 日本环球影城','建议开园前至少 45 分钟抵达。','JR 大和路线→西九条→环球城｜约 35 分 · 约 12 km'),
      {...s('08:30','日本环球影城 USJ','这是一个完整日项目；提前购买门票并研究 Express Pass。','','热门园区可能需要预约入场','view'),spot:'usj'},
      s('20:00','环球城 → 大阪难波','闭园时间随日期变化，按当日官方时间调整。','JR＋地铁｜约 35–45 分 · 约 12 km')
    ];
    days[1].tip='选择 USJ 后，大阪经典城区会让位给完整乐园日；道顿堀可保留在抵达日晚间，其余大阪景点需要取消或另加一天。';
  }

  const limit = state.pace === 'slow' ? 5 : state.pace === 'balanced' ? 6 : 8;
  days = days.map((day, idx) => {
    const visibleStops = day.stops.filter(x => !x.spot || state.sights.includes(x.spot));
    if ([0,6].includes(idx)) return {...day, stops:visibleStops};
    const essentials = visibleStops.filter(x => !x.tag || state.interests.includes(x.tag) || x.spot);
    const optional = visibleStops.filter(x => x.tag && !state.interests.includes(x.tag) && !x.spot);
    const ranked = [...essentials, ...optional].sort((a,b)=>a.time.localeCompare(b.time));
    let stops = ranked;
    if (!state.customizedSights && ranked.length > limit) stops = [...ranked.slice(0, limit - 1), ranked[ranked.length - 1]];
    stops.sort((a,b)=>a.time.localeCompare(b.time));
    return {...day, stops};
  });
  return days;
}

let currentDays = buildDays();
let pickerCity = 'osaka';
let localOnly = false;
let draftSights = [...state.sights];
const sightImageCache = {};

function stopKey(stop){return stop.title;}
function mapsSearch(title){return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title+' 日本')}`;}
function mapsRoute(stops){
  if(stops.length<2)return mapsSearch(stops[0]?.title||'关西');
  const parts=stops.map(x=>x.title+' 日本');
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(parts[0])}&destination=${encodeURIComponent(parts.at(-1))}&waypoints=${encodeURIComponent(parts.slice(1,-1).join('|'))}&travelmode=transit`;
}
function applyManualEdits(days){
  return days.map((day,dayIndex)=>{
    const hidden=state.hiddenStops?.[dayIndex]||[];
    let stops=day.stops.filter(stop=>!hidden.includes(stopKey(stop)));
    const order=state.manualOrders?.[dayIndex]||[];
    if(order.length){
      const rank=new Map(order.map((key,index)=>[key,index]));
      stops=[...stops].sort((a,b)=>(rank.get(stopKey(a))??999)-(rank.get(stopKey(b))??999));
    }
    return {...day,stops};
  });
}

function renderTabs(){
  document.querySelector('#dayTabs').innerHTML = dates.map((d,i)=>`<button class="day-tab ${i===state.day?'active':''}" role="tab" aria-selected="${i===state.day}" data-day="${i}"><span>${d[1]}</span><b>${d[0]}</b></button>`).join('');
}

function renderDay(){
  const d = currentDays[state.day];
  const mapStops=d.stops.filter(x=>x.title).slice(0,8);
  document.querySelector('#dayDetail').innerHTML = `
    <div class="day-hero"><div><span class="city-label">DAY ${state.day+1} · ${d.city}</span><h3>${d.title}</h3><p>${dates[state.day][0]} · ${dates[state.day][1]} · 住宿：${d.stay}</p></div><div class="day-stats"><span>🚶 ${d.walk}</span><span>🚆 ${d.rail}</span></div></div>
    <section class="route-map-card" aria-label="当天路线地图">
      <div class="route-map-head"><div><span>ROUTE MAP</span><b>当天动线一览</b></div><a href="${mapsRoute(mapStops)}" target="_blank" rel="noreferrer">Google 地图 ↗</a></div>
      <div class="route-map-track">${mapStops.map((x,i)=>`<a href="${mapsSearch(x.title)}" target="_blank" rel="noreferrer"><i>${i+1}</i><span>${x.title.replace(/ · | → /g,'<br>')}</span></a>`).join('')}</div>
    </section>
    <div class="edit-hint"><span>拖动景点调整顺序，或使用箭头微调；不想去的项目可以暂时隐藏。</span><button data-reset-day>恢复当天默认</button></div>
    <div class="timeline" id="sortableTimeline">${d.stops.map((x,i)=>`<div class="stop" draggable="true" data-stop-index="${i}"><div class="stop-time">${x.time}</div><div class="stop-rail"><i class="stop-dot"></i></div><div class="stop-body"><div class="stop-title-row"><h4>${x.title}</h4><div class="stop-actions"><a href="${mapsSearch(x.title)}" target="_blank" rel="noreferrer" title="在地图中打开">地图</a><button data-move="up" data-index="${i}" aria-label="上移 ${x.title}">↑</button><button data-move="down" data-index="${i}" aria-label="下移 ${x.title}">↓</button><button data-hide="${i}" aria-label="隐藏 ${x.title}">×</button></div></div><p>${x.desc}</p>${x.transit?`<span class="transit"><i>↳</i>${x.transit}</span>`:''}${x.note?`<small class="stop-note">提醒：${x.note}</small>`:''}</div></div>`).join('')}</div>`;
  const sightStops=d.stops.filter(x=>x.spot).length;
  const warning=sightStops>5?`<strong>强度提醒：当天已选 ${sightStops} 个景点，建议再取消 1–2 个。 </strong>`:'';
  document.querySelector('#routeTip').innerHTML = `${warning}<b>这天的关键：</b> ${d.tip}`;
}

function renderHotel(city='osaka'){
  const list = hotels[city][state.budget];
  document.querySelector('#hotelGrid').innerHTML = list.map(h=>`<article class="hotel-card"><span class="tag">${h.tag}</span><h3>${h.name}</h3><p>${h.desc}</p><div class="hotel-meta"><span>◎ ${h.walk}</span><span>◇ ${h.why}</span></div><a href="${h.url}" target="_blank" rel="noreferrer">查看酒店官网 <span>↗</span></a></article>`).join('');
}

function renderSightPicker(){
  const cityNames = {osaka:'大阪 · 经典城区与本地生活',kyoto:'京都 · 寺社与社区街区',nara:'奈良 · 公园寺社与古民居',kobe:'神户 · 山海、港湾与社区市场'};
  document.querySelector('#citySightHint').textContent = cityNames[pickerCity];
  document.querySelectorAll('[data-picker-city]').forEach(b=>{b.classList.toggle('active',b.dataset.pickerCity===pickerCity);b.querySelector('b').textContent=attractions[b.dataset.pickerCity].length;});
  const visibleAttractions = localOnly ? attractions[pickerCity].filter(a=>a.local) : attractions[pickerCity];
  const guideUrl = a => `https://www.baidu.com/s?wd=${encodeURIComponent(`${a.baike||a.name} 日本 景点介绍`)}`;
  document.querySelector('#toggleLocalOnly').classList.toggle('active',localOnly);
  document.querySelector('#toggleLocalOnly').textContent = localOnly ? '显示全部景点' : '只看本地人推荐';
  document.querySelector('#sightOptions').innerHTML = visibleAttractions.map(a=>`<article class="sight-option ${draftSights.includes(a.id)?'selected':''}"><a class="photo-shell" href="${guideUrl(a)}" target="_blank" rel="noreferrer" title="搜索${a.name}景点介绍"><img class="sight-photo ${sightImageCache[a.id]?'loaded':''}" src="${sightImageCache[a.id]||'assets/kansai-winter-hero.png'}" data-id="${a.id}" data-wiki="${a.wiki}" data-commons="${a.commons||a.wiki.replaceAll('_',' ')}" alt="${a.name}标志性景观" loading="lazy"><span class="photo-link">介绍 ↗</span></a><label class="sight-main"><input type="checkbox" value="${a.id}" ${draftSights.includes(a.id)?'checked':''}><span class="sight-check">✓</span><span class="sight-copy"><b>${a.name}</b>${a.local?'<em>本地人常去</em>':''}<small>${a.meta}</small><span>点击图片搜索景点介绍 ↗</span></span></label></article>`).join('');
  document.querySelector('#modalSightCount').textContent = draftSights.length;
  loadSightImages();
}

async function loadSightImages(){
  const images=[...document.querySelectorAll('.sight-photo[data-wiki]')];
  let cursor=0;
  async function worker(){
    while(cursor<images.length){
      const img=images[cursor++];const id=img.dataset.id;
      if(sightImageCache[id]){img.src=sightImageCache[id];continue;}
      try{
        let source='';
        const res=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(img.dataset.wiki)}`);
        if(res.ok){const data=await res.json();source=data.thumbnail?.source||data.originalimage?.source||'';}
        if(!source){
          const search=await fetch(`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(img.dataset.commons)}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json&origin=*`);
          if(search.ok){const data=await search.json();source=Object.values(data.query?.pages||{})[0]?.imageinfo?.[0]?.thumburl||'';}
        }
        if(source){sightImageCache[id]=source;img.src=source;img.onload=()=>img.classList.add('loaded');try{sessionStorage.setItem('kansaiSightImages',JSON.stringify(sightImageCache));}catch{}}
      }catch{}
    }
  }
  await Promise.all([worker(),worker(),worker()]);
}

function updateSightCount(){
  const count = state.sights.length;
  document.querySelector('#sightCount').textContent = `已选 ${count} / ${allSightIds.length} 个景点`;
}

function openSightPicker(){
  draftSights = [...state.sights];
  renderSightPicker();
  document.querySelector('#sightModal').classList.add('open');
  document.querySelector('#sightModal').setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
}

function closeSightPicker(){
  document.querySelector('#sightModal').classList.remove('open');
  document.querySelector('#sightModal').setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
}

function updateHeader(){
  const pace = {slow:'松弛慢游版',balanced:'经典平衡版',full:'充实探索版'}[state.pace];
  const bases = state.stay === 'one' ? '1 个住宿基地' : state.stay === 'balanced' ? '2 个住宿基地' : '京都 3 晚＋大阪';
  const picks = state.interests.map(x=>interestNames[x]).slice(0,3).join('、') || '经典必去';
  document.querySelector('#routeTitle').textContent = `冬日关西 · ${pace}`;
  document.querySelector('#routeSummary').textContent = `${bases} · ${state.sights.length} 个景点 · 偏爱 ${picks} · 动线已优化`;
}

function renderAll(resetDay=false){
  if(resetDay) state.day = 0;
  currentDays = applyManualEdits(buildDays());
  renderTabs(); renderDay(); updateHeader(); updateSightCount();
  const activeCity = document.querySelector('#hotelTabs .active')?.dataset.city || 'osaka';
  renderHotel(activeCity);
  localStorage.setItem('kansaiPlannerPrefs', JSON.stringify(state));
}

function toast(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1800)}

document.addEventListener('click',e=>{
  const scroll = e.target.closest('[data-scroll]'); if(scroll){document.querySelector(scroll.dataset.scroll).scrollIntoView({behavior:'smooth'});}
  const tab=e.target.closest('[data-day]'); if(tab){state.day=+tab.dataset.day;renderTabs();renderDay();}
  const seg=e.target.closest('.segmented button'); if(seg){const parent=seg.closest('.segmented');parent.querySelectorAll('button').forEach(b=>b.classList.remove('active'));seg.classList.add('active');state[parent.dataset.control]=seg.dataset.value;if(parent.dataset.control==='budget')renderHotel(document.querySelector('#hotelTabs .active').dataset.city);}
  const chip=e.target.closest('.chips button'); if(chip){chip.classList.toggle('active');const val=chip.dataset.value;state.interests=chip.classList.contains('active')?[...new Set([...state.interests,val])]:state.interests.filter(x=>x!==val);}
  const htab=e.target.closest('#hotelTabs button'); if(htab){document.querySelectorAll('#hotelTabs button').forEach(b=>b.classList.remove('active'));htab.classList.add('active');renderHotel(htab.dataset.city);}
  const pickerTab=e.target.closest('[data-picker-city]'); if(pickerTab){pickerCity=pickerTab.dataset.pickerCity;renderSightPicker();}
  const move=e.target.closest('[data-move]'); if(move){moveStop(+move.dataset.index,move.dataset.move==='up'?-1:1);}
  const hide=e.target.closest('[data-hide]'); if(hide){hideStop(+hide.dataset.hide);}
  if(e.target.closest('[data-reset-day]')){resetDayEdits();}
});

function saveDayOrder(dayIndex){
  state.manualOrders[dayIndex]=currentDays[dayIndex].stops.map(stopKey);
  localStorage.setItem('kansaiPlannerPrefs',JSON.stringify(state));
}
function moveStop(index,delta){
  const stops=currentDays[state.day].stops;const target=index+delta;
  if(target<0||target>=stops.length)return;
  const slots=stops.map(x=>x.time).sort();[stops[index],stops[target]]=[stops[target],stops[index]];stops.forEach((stop,i)=>stop.time=slots[i]);saveDayOrder(state.day);renderDay();toast('已调整当天顺序与时间');
}
function hideStop(index){
  const stop=currentDays[state.day].stops[index];if(!stop)return;
  state.hiddenStops[state.day]=[...new Set([...(state.hiddenStops[state.day]||[]),stopKey(stop)])];
  currentDays[state.day].stops.splice(index,1);saveDayOrder(state.day);renderDay();toast(`已隐藏：${stop.title}`);
}
function resetDayEdits(){delete state.hiddenStops[state.day];delete state.manualOrders[state.day];currentDays=applyManualEdits(buildDays());renderDay();localStorage.setItem('kansaiPlannerPrefs',JSON.stringify(state));toast('已恢复当天默认路线');}
let dragFrom=-1;
document.addEventListener('dragstart',e=>{const row=e.target.closest('.stop[draggable]');if(!row)return;dragFrom=+row.dataset.stopIndex;row.classList.add('dragging');});
document.addEventListener('dragend',e=>{e.target.closest('.stop')?.classList.remove('dragging');dragFrom=-1;});
document.addEventListener('dragover',e=>{if(e.target.closest('.stop[draggable]'))e.preventDefault();});
document.addEventListener('drop',e=>{const row=e.target.closest('.stop[draggable]');if(!row||dragFrom<0)return;e.preventDefault();const to=+row.dataset.stopIndex;if(to===dragFrom)return;const stops=currentDays[state.day].stops;const slots=stops.map(x=>x.time).sort();const [item]=stops.splice(dragFrom,1);stops.splice(to,0,item);stops.forEach((stop,i)=>stop.time=slots[i]);saveDayOrder(state.day);renderDay();toast('路线顺序与时间已保存');});

function renderTravelMode(){
  const d=currentDays[state.day];
  document.querySelector('#travelModeTitle').textContent=`${dates[state.day][0]} · ${d.city.split(' · ')[0]}`;
  document.querySelector('#travelContent').innerHTML=`<div class="travel-summary"><b>${d.title}</b><span>${d.walk} · 交通 ${d.rail}</span></div><div class="travel-list">${d.stops.map((x,i)=>`<article><i>${i+1}</i><div><time>${x.time}</time><h3>${x.title}</h3><p>${x.transit||x.desc}</p></div><a href="${mapsSearch(x.title)}" target="_blank" rel="noreferrer">导航 ↗</a></article>`).join('')}</div>`;
}
function openTravelMode(){renderTravelMode();document.querySelector('#travelMode').classList.add('open');document.querySelector('#travelMode').setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');}
function closeTravelMode(){document.querySelector('#travelMode').classList.remove('open');document.querySelector('#travelMode').setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll');}
document.querySelector('#travelModeBtn').addEventListener('click',openTravelMode);
document.querySelector('#closeTravelMode').addEventListener('click',closeTravelMode);
document.querySelector('#closeTravelBackdrop').addEventListener('click',closeTravelMode);

document.querySelector('#openSightPicker').addEventListener('click',openSightPicker);
document.querySelector('#closeSightPicker').addEventListener('click',closeSightPicker);
document.querySelector('#closeSightBackdrop').addEventListener('click',closeSightPicker);
document.querySelector('#sightOptions').addEventListener('change',e=>{
  const input=e.target.closest('input[type="checkbox"]'); if(!input)return;
  draftSights=input.checked?[...new Set([...draftSights,input.value])]:draftSights.filter(x=>x!==input.value);
  renderSightPicker();
});
document.querySelector('#selectCityAll').addEventListener('click',()=>{draftSights=[...new Set([...draftSights,...attractions[pickerCity].map(x=>x.id)])];renderSightPicker();});
document.querySelector('#clearCityAll').addEventListener('click',()=>{const cityIds=attractions[pickerCity].map(x=>x.id);draftSights=draftSights.filter(x=>!cityIds.includes(x));renderSightPicker();});
document.querySelector('#toggleLocalOnly').addEventListener('click',()=>{localOnly=!localOnly;renderSightPicker();});
document.querySelector('#applySights').addEventListener('click',()=>{
  state.sights=[...draftSights];state.customizedSights=true;closeSightPicker();renderAll(true);toast(`已按 ${state.sights.length} 个景点生成路线`);document.querySelector('.itinerary-panel').scrollIntoView({behavior:'smooth',block:'start'});
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.querySelector('#sightModal').classList.contains('open'))closeSightPicker();});

document.querySelectorAll('input[name="stay"]').forEach(r=>r.addEventListener('change',()=>{state.stay=r.value;document.querySelectorAll('.radio-row').forEach(x=>x.classList.toggle('active',x.contains(r)));}));
document.querySelector('#generateBtn').addEventListener('click',()=>{renderAll(true);toast('已按你的偏好重新生成');document.querySelector('.itinerary-panel').scrollIntoView({behavior:'smooth',block:'start'});});
document.querySelector('#printBtn').addEventListener('click',()=>window.print());
document.querySelector('#copyBtn').addEventListener('click',async()=>{
  const text=currentDays.map((d,i)=>`Day ${i+1}｜${dates[i][0]} ${d.title}\n住宿：${d.stay}\n${d.stops.map(x=>`${x.time} ${x.title}${x.transit?`（${x.transit}）`:''}`).join('\n')}`).join('\n\n');
  try{await navigator.clipboard.writeText(text);toast('行程已复制到剪贴板');}catch{toast('复制失败，请使用打印功能');}
});

try{
  Object.assign(sightImageCache,JSON.parse(sessionStorage.getItem('kansaiSightImages')||'{}'));
  const saved=JSON.parse(localStorage.getItem('kansaiPlannerPrefs'));
  if(saved){Object.assign(state,saved,{day:0});state.hiddenStops=state.hiddenStops||{};state.manualOrders=state.manualOrders||{};if(!Array.isArray(state.sights))state.sights=[...allSightIds];document.querySelectorAll('.segmented').forEach(group=>group.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.value===state[group.dataset.control])));document.querySelectorAll('.chips button').forEach(b=>b.classList.toggle('active',state.interests.includes(b.dataset.value)));const radio=document.querySelector(`input[name="stay"][value="${state.stay}"]`);if(radio){radio.checked=true;document.querySelectorAll('.radio-row').forEach(x=>x.classList.toggle('active',x.contains(radio)));}}
}catch{}

renderAll();
