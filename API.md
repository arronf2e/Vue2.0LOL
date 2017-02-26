本项目所使用api


    英雄列表页： heroList
    api: http://lolapi.games-cube.com/champion
    res: [{
      "id": 1,
      "ename": "Annie",
      "title": "黑暗之女",
      "cname": "安妮",
      "pic": "annie_square_0.png"
    }...]

    英雄详情页：heroDetail
    api: http://lolapi.games-cube.com/GetChampionDetail?champion_id={champion_id}
    champion_id:英雄ID

    res: [{
      id：英雄ID
      image：英雄头像
      info：攻击、防御、难度、魔法系数
      name：中文名称
      passive：被动
      skins：皮肤信息
      spells：技能说明
      trait：技能加点
    }]

    本周限免：  weekFree
    api: http://lolapi.games-cube.com/Free
    res: [{
      id:英文名称
      key:英雄ID，可通过接口GetChampionImage，GetChampionCNName，GetChampionENName 获取相关信息
      name:中文名
      title:别名
      tags:战士,法师等
      info:攻击,防御,魔法,难度
      image:暂无，可通key过接口GetChampionImage，GetChampionCNName，GetChampionENName 获取相关信息
    }]

    查询个人信息： 输入名字，获取所有大区中该用户的信息，
    api: http://lolapi.games-cube.com/UserArea?keyword={keyword}
    keyword:游戏用户名，如果游戏用户名为中文或是特殊字符需要进行URL编码后再传递
    res: [{
      "area_id": 4,
      "qquin": "U0000000000000000000",
      "icon_id": 22,
      "name": "xxxxxxxxxxx",
      "level": 1,
      "tier": 255,
      "queue": 255,
      "win_point": 0
    }]

    个人详情页： 点击进入个人详情页
    api: http://lolapi.games-cube.com/UserExtInfo?qquin={qquin}&vaid={vaid}
    qquin:英雄联盟用户唯一标识，获取方式从API UserArea中进行获取
    vaid:大区唯一标识
    res: http://api.games-cube.com/combat/UserExtInfo.aspx

    个人比赛列表：
    api: http://lolapi.games-cube.com/CombatList?qquin={qquin}&vaid={vaid}&p={p}
    qquin:英雄联盟用户唯一标识，获取方式从API UserArea中进行获取
    vaid:区服ID
    p:分页信息
    res: [{
      "game_id": 1759823959
      "battle_time": "2016-05-31 21:13:03"
      "battle_map": 11
      "game_type": 3
      "game_mode": 1
      "champion_id": 104
      "win": 1
      "flag": 0
      "ext_flag": 256
    }]

    单场比赛详细信息
    api: http://lolapi.games-cube.com/GameDetail?qquin={qquin}&vaid={vaid}&gameid={gameid}
    qquin:英雄联盟用户唯一标识，获取方式从API UserArea中进行获取
    vaid:大区ID
    gameid:英雄联盟游戏唯一标识
    res: {
    "data": [
        {
            "result": 0,
            "battle": {
                "game_id": 0000000004,
                "start_time": "2016-03-29 00:56:13",
                "stop_time": "2016-03-29 01:15:58",
                "duration": 1185,
                "battle_map": 11,
                "gamer_num": 10,
                "game_type": 3,
                "game_mode": 1,
                "gamer_records": [
                    {
                        "qquin": "U00000000000000000000",
                        "name": "DAIWAN",
                        "champion_id": 78,
                        "championcnname": "波比",
                        "championenname": "Poppy",
                        "championimg": "cdn.tgp.qq.com/pallas/images/champions/Poppy.png",
                        "isme": "",
                        "team": 100,
                        "level": 12,
                        "exp": 9291,
                        "win": 1,
                        "winclass": "active",
                        "item0": 2033,
                        "item1": 1029,
                        "item2": 3078,
                        "item3": 3111,
                        "item4": 3751,
                        "item5": 1029,
                        "gold_earned": 7968,
                        "gold_spent": 7100,
                        "champions_killed": 3,
                        "num_deaths": 4,
                        "assists": 4,
                        "battle_tag_num": 1,
                        "battle_tag_list": [
                            {
                                "tag_id": 10,
                                "name": ""
                            }
                        ],
                        "minions_killed": 100,
                        "turrets_killed": 4,
                        "total_damage_dealt": 64235,
                        "total_damage_dealt_to_champions": 8071,
                        "physical_damage_dealt_to_champions": 6875,
                        "magic_damage_dealt_to_champions": 986,
                        "largest_killing_spree": 0,
                        "largest_multi_kill": 1,
                        "barracks_killed": 0,
                        "total_damage_taken": 10698,
                        "total_health": 400,
                        "summon_spell1_id": "0014",
                        "summon_spell2_id": "0012",
                        "game_score": 630,
                        "item6": 3340,
                        "ward_killed": 0,
                        "ward_placed": 2,
                        "neutral_minions_killed": 0,
                        "super_monster_killed": 0,
                        "id": 100,
                        "skin_id": 78000,
                        "flag": 0,
                        "ext_flag": 256
                    }
                ],
                "item_num": 0,
                "items": [],
                "team100_killed_dragon_num": 0,
                "team100_killed_baron_num": 0,
                "team200_killed_dragon_num": 0,
                "team200_killed_baron_num": 0,
                "ext1_num": 10,
                "ext1_list": [
                    {
                        "attack": 129,
                        "armor": 105,
                        "magic": 10,
                        "magic_resist": 81,
                        "attack_speed": 0,
                        "crit": 20,
                        "move_speed": 423,
                        "cd_ratio": -9,
                        "death_category_num": 2,
                        "death_category": [
                            {
                                "sum_id": 107,
                                "death_num": 1
                            },
                            {
                                "sum_id": 108,
                                "death_num": 3
                            }
                        ],
                        "tier": 255,
                        "queue": 255,
                        "win_point": 0,
                        "champion_used_exp": 10806
                    }
                ]
            }
        }
    ]

    最新视频：GetNewstVideos
    api: http://infoapi.games-cube.com/GetNewstVideos?p={p}
    p: 页数,从1开始

    视频搜索：FindVideos
    http://infoapi.games-cube.com/FindVideos?keyword={keyword}&p={p}
    keyword:文章标题关键字
    p:页数,从1开始

}


Static 

//英雄皮肤

static   "http://cdn.tgp.qq.com/pallas/images/skins/original/1-"  + skinid + ".jpg"


//tgp头像
static String headImgHost = "http://cdn.tgp.qq.com/lol/images/resources/usericon/%d.png";

//tgp装备
static String itemHost ="http://ossweb-img.qq.com/images/lol/img/item/%d.png";

//初始化装备栏
static String itemNoHost=EnvProperty.qiniu_domain+"n/6.21.1/img/item/0.png";

//英雄图标
static String championsHost="http://cdn.tgp.qq.com/pallas/images/champions_id/%d.png";

//段位图标
static String tierHost = EnvProperty.qiniu_domain+"/lol/images/resources/tier/%d.png";

static String lIconHost= EnvProperty.qiniu_domain+"/lol/images/resources/icon/%d.png";


技能

    http://ossweb-img.qq.com/images/lol/img/passive/SadMummy_CorpseExplosion.png
    http://ossweb-img.qq.com/images/lol/img/spell/AuraofDespair.png


{1:"自定义",2:"新手关",3:"匹配赛",4:"排位赛",5:"战队赛",6:"大乱斗",7:"人机",8:"统治战场",9:"大对决",11:"克隆赛",14:"无限火力",15:"镜像赛",16:"末日赛",17:"飞升赛",18:"六杀丛林",19:"魄罗乱斗",20:"互选征召",21:"佣兵战",22:"新统治",23:"枢纽攻防",24:"无限乱斗",25:"提莫人机"},GAME_MODE:{1:"匹配赛",2:"人机",3:"灵活组排",4:"排位赛",5:"灵活组排",6:"大乱斗",7:"匹配赛",8:"自定义",9:"统治战场",10:"新手指导",11:"克隆赛",12:"大对决",13:"大对决",14:"无限火力",15:"镜像赛",16:"末日赛",17:"飞升赛",18:"六杀丛林",19:"魄罗乱斗",20:"互选征召",21:"佣兵战",22:"新统治",23:"枢纽攻防",24:"无限乱斗",25:"提莫人机"}
