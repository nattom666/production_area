// e-Stat の統計表から build-data.py が生成。手で編集しない。
const DATA = {
 "year": {
  "label": "令和6年産",
  "seireki": 2024
 },
 "sources": {
  "veg": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511",
  "vegNational": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389426",
  "fruitTop": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248"
 },
 "items": [
  {
   "stat": "みかん",
   "name": "みかん",
   "kana": "みかん",
   "emoji": "🍊",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 559600.0,
   "prefCount": 20,
   "top": [
    {
     "pref": "和歌山",
     "kana": "わかやま",
     "t": 141700.0
    },
    {
     "pref": "静岡",
     "kana": "しずおか",
     "t": 88500.0
    },
    {
     "pref": "愛媛",
     "kana": "えひめ",
     "t": 76100.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387931"
  },
  {
   "stat": "りんご",
   "name": "りんご",
   "kana": "りんご",
   "emoji": "🍎",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 609200.0,
   "prefCount": 14,
   "top": [
    {
     "pref": "青森",
     "kana": "あおもり",
     "t": 370500.0
    },
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 106400.0
    },
    {
     "pref": "岩手",
     "kana": "いわて",
     "t": 36700.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387936"
  },
  {
   "stat": "日本なし",
   "name": "なし",
   "kana": "にほんなし",
   "emoji": "🍐",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 172700.0,
   "prefCount": 30,
   "top": [
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 21400.0
    },
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 17100.0
    },
    {
     "pref": "福島",
     "kana": "ふくしま",
     "t": 14800.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387937"
  },
  {
   "stat": "西洋なし",
   "name": "ラ・フランス",
   "kana": "せいようなし",
   "emoji": "🍐",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 25400.0,
   "prefCount": 5,
   "top": [
    {
     "pref": "山形",
     "kana": "やまがた",
     "t": 17800.0
    },
    {
     "pref": "青森",
     "kana": "あおもり",
     "t": 1790.0
    },
    {
     "pref": "新潟",
     "kana": "にいがた",
     "t": 1620.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387938"
  },
  {
   "stat": "かき",
   "name": "かき",
   "kana": "かき",
   "emoji": "🍑",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 167300.0,
   "prefCount": 24,
   "top": [
    {
     "pref": "和歌山",
     "kana": "わかやま",
     "t": 32100.0
    },
    {
     "pref": "奈良",
     "kana": "なら",
     "t": 24700.0
    },
    {
     "pref": "福岡",
     "kana": "ふくおか",
     "t": 13000.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387939"
  },
  {
   "stat": "びわ",
   "name": "びわ",
   "kana": "びわ",
   "emoji": "🍑",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 2180.0,
   "prefCount": 8,
   "top": [
    {
     "pref": "長崎",
     "kana": "ながさき",
     "t": 697.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 417.0
    },
    {
     "pref": "鹿児島",
     "kana": "かごしま",
     "t": 159.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387940"
  },
  {
   "stat": "もも",
   "name": "もも",
   "kana": "もも",
   "emoji": "🍑",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 109700.0,
   "prefCount": 11,
   "top": [
    {
     "pref": "山梨",
     "kana": "やまなし",
     "t": 31500.0
    },
    {
     "pref": "福島",
     "kana": "ふくしま",
     "t": 29100.0
    },
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 11400.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387941"
  },
  {
   "stat": "すもも",
   "name": "すもも",
   "kana": "すもも",
   "emoji": "🍑",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 16400.0,
   "prefCount": 9,
   "top": [
    {
     "pref": "山梨",
     "kana": "やまなし",
     "t": 5090.0
    },
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 2850.0
    },
    {
     "pref": "山形",
     "kana": "やまがた",
     "t": 2180.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387942"
  },
  {
   "stat": "おうとう",
   "name": "さくらんぼ",
   "kana": "おうとう",
   "emoji": "🍒",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 11500.0,
   "prefCount": 4,
   "top": [
    {
     "pref": "山形",
     "kana": "やまがた",
     "t": 8590.0
    },
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 1160.0
    },
    {
     "pref": "山梨",
     "kana": "やまなし",
     "t": 468.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387943"
  },
  {
   "stat": "うめ",
   "name": "うめ",
   "kana": "うめ",
   "emoji": "🟢",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 51600.0,
   "prefCount": 21,
   "top": [
    {
     "pref": "和歌山",
     "kana": "わかやま",
     "t": 29700.0
    },
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 4150.0
    },
    {
     "pref": "山梨",
     "kana": "やまなし",
     "t": 1210.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387944"
  },
  {
   "stat": "ぶどう",
   "name": "ぶどう",
   "kana": "ぶどう",
   "emoji": "🍇",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 164600.0,
   "prefCount": 25,
   "top": [
    {
     "pref": "山梨",
     "kana": "やまなし",
     "t": 43600.0
    },
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 32100.0
    },
    {
     "pref": "岡山",
     "kana": "おかやま",
     "t": 14300.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387945"
  },
  {
   "stat": "くり",
   "name": "くり",
   "kana": "くり",
   "emoji": "🌰",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 14000.0,
   "prefCount": 22,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 3780.0
    },
    {
     "pref": "熊本",
     "kana": "くまもと",
     "t": 1640.0
    },
    {
     "pref": "愛媛",
     "kana": "えひめ",
     "t": 1350.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387946"
  },
  {
   "stat": "パインアップル",
   "name": "パイナップル",
   "kana": "ぱいなっぷる",
   "emoji": "🍍",
   "group": "fruit",
   "statGroup": "fruit",
   "national": null,
   "prefCount": 1,
   "top": [
    {
     "pref": "沖縄",
     "kana": "おきなわ",
     "t": 7100.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387947"
  },
  {
   "stat": "キウイフルーツ",
   "name": "キウイフルーツ",
   "kana": "きういふるーつ",
   "emoji": "🥝",
   "group": "fruit",
   "statGroup": "fruit",
   "national": 20600.0,
   "prefCount": 18,
   "top": [
    {
     "pref": "愛媛",
     "kana": "えひめ",
     "t": 4140.0
    },
    {
     "pref": "和歌山",
     "kana": "わかやま",
     "t": 3260.0
    },
    {
     "pref": "福岡",
     "kana": "ふくおか",
     "t": 2960.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473248&stat_infid=000040387948"
  },
  {
   "stat": "だいこん",
   "name": "だいこん",
   "kana": "だいこん",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 1082000.0,
   "prefCount": 37,
   "top": [
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 135800.0
    },
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 127000.0
    },
    {
     "pref": "青森",
     "kana": "あおもり",
     "t": 110000.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "かぶ",
   "name": "かぶ",
   "kana": "かぶ",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 94300.0,
   "prefCount": 20,
   "top": [
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 25400.0
    },
    {
     "pref": "埼玉",
     "kana": "さいたま",
     "t": 14600.0
    },
    {
     "pref": "青森",
     "kana": "あおもり",
     "t": 5650.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "にんじん",
   "name": "にんじん",
   "kana": "にんじん",
   "emoji": "🥕",
   "group": "veg",
   "statGroup": "veg",
   "national": 530900.0,
   "prefCount": 28,
   "top": [
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 176400.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 83000.0
    },
    {
     "pref": "徳島",
     "kana": "とくしま",
     "t": 43300.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "ごぼう",
   "name": "ごぼう",
   "kana": "ごぼう",
   "emoji": "🥢",
   "group": "veg",
   "statGroup": "veg",
   "national": 117100.0,
   "prefCount": 8,
   "top": [
    {
     "pref": "青森",
     "kana": "あおもり",
     "t": 46700.0
    },
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 12900.0
    },
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 9970.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "れんこん",
   "name": "れんこん",
   "kana": "れんこん",
   "emoji": "🕳️",
   "group": "veg",
   "statGroup": "veg",
   "national": 51900.0,
   "prefCount": 8,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 26200.0
    },
    {
     "pref": "佐賀",
     "kana": "さが",
     "t": 5890.0
    },
    {
     "pref": "徳島",
     "kana": "とくしま",
     "t": 4450.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "ばれいしょ",
   "name": "じゃがいも",
   "kana": "ばれいしょ",
   "emoji": "🥔",
   "group": "veg",
   "statGroup": "veg",
   "national": 2295000.0,
   "prefCount": 16,
   "top": [
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 1870000.0
    },
    {
     "pref": "鹿児島",
     "kana": "かごしま",
     "t": 81700.0
    },
    {
     "pref": "長崎",
     "kana": "ながさき",
     "t": 73600.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "さといも",
   "name": "さといも",
   "kana": "さといも",
   "emoji": "🥔",
   "group": "veg",
   "statGroup": "veg",
   "national": 118900.0,
   "prefCount": 26,
   "top": [
    {
     "pref": "埼玉",
     "kana": "さいたま",
     "t": 17600.0
    },
    {
     "pref": "宮崎",
     "kana": "みやざき",
     "t": 11800.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 9680.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "やまのいも",
   "name": "やまのいも",
   "kana": "やまのいも",
   "emoji": "🥔",
   "group": "veg",
   "statGroup": "veg",
   "national": 148400.0,
   "prefCount": 10,
   "top": [
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 70900.0
    },
    {
     "pref": "青森",
     "kana": "あおもり",
     "t": 44700.0
    },
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 6430.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "はくさい",
   "name": "はくさい",
   "kana": "はくさい",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 827000.0,
   "prefCount": 31,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 248000.0
    },
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 225900.0
    },
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 25900.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "こまつな",
   "name": "こまつな",
   "kana": "こまつな",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 118200.0,
   "prefCount": 24,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 29100.0
    },
    {
     "pref": "埼玉",
     "kana": "さいたま",
     "t": 12600.0
    },
    {
     "pref": "福岡",
     "kana": "ふくおか",
     "t": 11600.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "キャベツ",
   "name": "キャベツ",
   "kana": "きゃべつ",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 1294000.0,
   "prefCount": 36,
   "top": [
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 271700.0
    },
    {
     "pref": "愛知",
     "kana": "あいち",
     "t": 221500.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 101800.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "ちんげんさい",
   "name": "チンゲンサイ",
   "kana": "ちんげんさい",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 38700.0,
   "prefCount": 17,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 10900.0
    },
    {
     "pref": "静岡",
     "kana": "しずおか",
     "t": 6840.0
    },
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 2400.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "ほうれんそう",
   "name": "ほうれんそう",
   "kana": "ほうれんそう",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 189900.0,
   "prefCount": 33,
   "top": [
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 22600.0
    },
    {
     "pref": "埼玉",
     "kana": "さいたま",
     "t": 19600.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 18600.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "ふき",
   "name": "ふき",
   "kana": "ふき",
   "emoji": "🌿",
   "group": "veg",
   "statGroup": "veg",
   "national": 6280.0,
   "prefCount": 16,
   "top": [
    {
     "pref": "愛知",
     "kana": "あいち",
     "t": 2430.0
    },
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 775.0
    },
    {
     "pref": "大阪",
     "kana": "おおさか",
     "t": 752.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "みつば",
   "name": "みつば",
   "kana": "みつば",
   "emoji": "🌿",
   "group": "veg",
   "statGroup": "veg",
   "national": 12900.0,
   "prefCount": 10,
   "top": [
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 2900.0
    },
    {
     "pref": "愛知",
     "kana": "あいち",
     "t": 1710.0
    },
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 1570.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "しゅんぎく",
   "name": "しゅんぎく",
   "kana": "しゅんぎく",
   "emoji": "🌿",
   "group": "veg",
   "statGroup": "veg",
   "national": 23200.0,
   "prefCount": 24,
   "top": [
    {
     "pref": "大阪",
     "kana": "おおさか",
     "t": 2990.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 2190.0
    },
    {
     "pref": "福岡",
     "kana": "ふくおか",
     "t": 2140.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "みずな",
   "name": "みずな",
   "kana": "みずな",
   "emoji": "🌿",
   "group": "veg",
   "statGroup": "veg",
   "national": 34100.0,
   "prefCount": 11,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 16400.0
    },
    {
     "pref": "福岡",
     "kana": "ふくおか",
     "t": 3380.0
    },
    {
     "pref": "京都",
     "kana": "きょうと",
     "t": 2070.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "セルリー",
   "name": "セロリ",
   "kana": "せるりー",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 28900.0,
   "prefCount": 7,
   "top": [
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 12000.0
    },
    {
     "pref": "静岡",
     "kana": "しずおか",
     "t": 5520.0
    },
    {
     "pref": "福岡",
     "kana": "ふくおか",
     "t": 3510.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "アスパラガス",
   "name": "アスパラガス",
   "kana": "あすぱらがす",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 22300.0,
   "prefCount": 18,
   "top": [
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 2760.0
    },
    {
     "pref": "佐賀",
     "kana": "さが",
     "t": 1990.0
    },
    {
     "pref": "熊本",
     "kana": "くまもと",
     "t": 1900.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "カリフラワー",
   "name": "カリフラワー",
   "kana": "かりふらわー",
   "emoji": "🥦",
   "group": "veg",
   "statGroup": "veg",
   "national": 19400.0,
   "prefCount": 18,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 2430.0
    },
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 2190.0
    },
    {
     "pref": "熊本",
     "kana": "くまもと",
     "t": 2040.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "ブロッコリー",
   "name": "ブロッコリー",
   "kana": "ぶろっこりー",
   "emoji": "🥦",
   "group": "veg",
   "statGroup": "veg",
   "national": 160500.0,
   "prefCount": 35,
   "top": [
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 29700.0
    },
    {
     "pref": "埼玉",
     "kana": "さいたま",
     "t": 14500.0
    },
    {
     "pref": "香川",
     "kana": "かがわ",
     "t": 13100.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "レタス",
   "name": "レタス",
   "kana": "れたす",
   "emoji": "🥬",
   "group": "veg",
   "statGroup": "veg",
   "national": 534300.0,
   "prefCount": 24,
   "top": [
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 178000.0
    },
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 87300.0
    },
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 58700.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "ねぎ",
   "name": "ねぎ",
   "kana": "ねぎ",
   "emoji": "🌿",
   "group": "veg",
   "statGroup": "veg",
   "national": 399200.0,
   "prefCount": 39,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 50200.0
    },
    {
     "pref": "埼玉",
     "kana": "さいたま",
     "t": 46400.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 43400.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "にら",
   "name": "にら",
   "kana": "にら",
   "emoji": "🌿",
   "group": "veg",
   "statGroup": "veg",
   "national": 55200.0,
   "prefCount": 13,
   "top": [
    {
     "pref": "高知",
     "kana": "こうち",
     "t": 16100.0
    },
    {
     "pref": "栃木",
     "kana": "とちぎ",
     "t": 8060.0
    },
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 7200.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "たまねぎ",
   "name": "たまねぎ",
   "kana": "たまねぎ",
   "emoji": "🧅",
   "group": "veg",
   "statGroup": "veg",
   "national": 1126000.0,
   "prefCount": 25,
   "top": [
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 752600.0
    },
    {
     "pref": "佐賀",
     "kana": "さが",
     "t": 82000.0
    },
    {
     "pref": "兵庫",
     "kana": "ひょうご",
     "t": 77600.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "にんにく",
   "name": "にんにく",
   "kana": "にんにく",
   "emoji": "🧄",
   "group": "veg",
   "statGroup": "veg",
   "national": 17600.0,
   "prefCount": 11,
   "top": [
    {
     "pref": "青森",
     "kana": "あおもり",
     "t": 11700.0
    },
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 1000.0
    },
    {
     "pref": "香川",
     "kana": "かがわ",
     "t": 509.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "きゅうり",
   "name": "きゅうり",
   "kana": "きゅうり",
   "emoji": "🥒",
   "group": "veg",
   "statGroup": "veg",
   "national": 502900.0,
   "prefCount": 43,
   "top": [
    {
     "pref": "宮崎",
     "kana": "みやざき",
     "t": 58700.0
    },
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 50800.0
    },
    {
     "pref": "埼玉",
     "kana": "さいたま",
     "t": 40400.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "かぼちゃ",
   "name": "かぼちゃ",
   "kana": "かぼちゃ",
   "emoji": "🎃",
   "group": "veg",
   "statGroup": "veg",
   "national": 164400.0,
   "prefCount": 24,
   "top": [
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 84000.0
    },
    {
     "pref": "長野",
     "kana": "ながの",
     "t": 6400.0
    },
    {
     "pref": "鹿児島",
     "kana": "かごしま",
     "t": 6040.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "なす",
   "name": "なす",
   "kana": "なす",
   "emoji": "🍆",
   "group": "veg",
   "statGroup": "veg",
   "national": 280200.0,
   "prefCount": 38,
   "top": [
    {
     "pref": "高知",
     "kana": "こうち",
     "t": 38500.0
    },
    {
     "pref": "熊本",
     "kana": "くまもと",
     "t": 33600.0
    },
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 28100.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "トマト",
   "name": "トマト",
   "kana": "とまと",
   "emoji": "🍅",
   "group": "veg",
   "statGroup": "veg",
   "national": 663600.0,
   "prefCount": 45,
   "top": [
    {
     "pref": "熊本",
     "kana": "くまもと",
     "t": 129400.0
    },
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 59200.0
    },
    {
     "pref": "愛知",
     "kana": "あいち",
     "t": 44700.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "ピーマン",
   "name": "ピーマン",
   "kana": "ぴーまん",
   "emoji": "🫑",
   "group": "veg",
   "statGroup": "veg",
   "national": 143000.0,
   "prefCount": 27,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 33500.0
    },
    {
     "pref": "宮崎",
     "kana": "みやざき",
     "t": 24300.0
    },
    {
     "pref": "高知",
     "kana": "こうち",
     "t": 13000.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "スイートコーン",
   "name": "とうもろこし",
   "kana": "すいーとこーん",
   "emoji": "🌽",
   "group": "veg",
   "statGroup": "veg",
   "national": 211900.0,
   "prefCount": 20,
   "top": [
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 80300.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 16900.0
    },
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 15900.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "さやいんげん",
   "name": "さやいんげん",
   "kana": "さやいんげん",
   "emoji": "🫛",
   "group": "veg",
   "statGroup": "veg",
   "national": 29700.0,
   "prefCount": 25,
   "top": [
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 4720.0
    },
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 2840.0
    },
    {
     "pref": "福島",
     "kana": "ふくしま",
     "t": 2510.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "さやえんどう",
   "name": "さやえんどう",
   "kana": "さやえんどう",
   "emoji": "🫛",
   "group": "veg",
   "statGroup": "veg",
   "national": 18300.0,
   "prefCount": 24,
   "top": [
    {
     "pref": "鹿児島",
     "kana": "かごしま",
     "t": 5100.0
    },
    {
     "pref": "愛知",
     "kana": "あいち",
     "t": 1460.0
    },
    {
     "pref": "福島",
     "kana": "ふくしま",
     "t": 990.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "グリーンピース",
   "name": "グリーンピース",
   "kana": "ぐりーんぴーす",
   "emoji": "🫛",
   "group": "veg",
   "statGroup": "veg",
   "national": 4110.0,
   "prefCount": 13,
   "top": [
    {
     "pref": "和歌山",
     "kana": "わかやま",
     "t": 1700.0
    },
    {
     "pref": "鹿児島",
     "kana": "かごしま",
     "t": 479.0
    },
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 363.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "そらまめ",
   "name": "そらまめ",
   "kana": "そらまめ",
   "emoji": "🫛",
   "group": "veg",
   "statGroup": "veg",
   "national": 11500.0,
   "prefCount": 17,
   "top": [
    {
     "pref": "鹿児島",
     "kana": "かごしま",
     "t": 2460.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 2210.0
    },
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 1120.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "えだまめ",
   "name": "えだまめ",
   "kana": "えだまめ",
   "emoji": "🫛",
   "group": "veg",
   "statGroup": "veg",
   "national": 58200.0,
   "prefCount": 19,
   "top": [
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 7290.0
    },
    {
     "pref": "群馬",
     "kana": "ぐんま",
     "t": 6340.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 5670.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "しょうが",
   "name": "しょうが",
   "kana": "しょうが",
   "emoji": "🫚",
   "group": "veg",
   "statGroup": "veg",
   "national": 40900.0,
   "prefCount": 11,
   "top": [
    {
     "pref": "高知",
     "kana": "こうち",
     "t": 18000.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 4630.0
    },
    {
     "pref": "熊本",
     "kana": "くまもと",
     "t": 4030.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "いちご",
   "name": "いちご",
   "kana": "いちご",
   "emoji": "🍓",
   "group": "fruit",
   "statGroup": "veg",
   "national": 156600.0,
   "prefCount": 24,
   "top": [
    {
     "pref": "栃木",
     "kana": "とちぎ",
     "t": 25700.0
    },
    {
     "pref": "福岡",
     "kana": "ふくおか",
     "t": 14400.0
    },
    {
     "pref": "熊本",
     "kana": "くまもと",
     "t": 11100.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "メロン",
   "name": "メロン",
   "kana": "めろん",
   "emoji": "🍈",
   "group": "fruit",
   "statGroup": "veg",
   "national": 137500.0,
   "prefCount": 13,
   "top": [
    {
     "pref": "茨城",
     "kana": "いばらき",
     "t": 36900.0
    },
    {
     "pref": "熊本",
     "kana": "くまもと",
     "t": 20900.0
    },
    {
     "pref": "北海道",
     "kana": "ほっかいどう",
     "t": 19100.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  },
  {
   "stat": "すいか",
   "name": "すいか",
   "kana": "すいか",
   "emoji": "🍉",
   "group": "fruit",
   "statGroup": "veg",
   "national": 299000.0,
   "prefCount": 25,
   "top": [
    {
     "pref": "熊本",
     "kana": "くまもと",
     "t": 42100.0
    },
    {
     "pref": "千葉",
     "kana": "ちば",
     "t": 37100.0
    },
    {
     "pref": "山形",
     "kana": "やまがた",
     "t": 29600.0
    }
   ],
   "source": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&lid=000001473711&stat_infid=000040389511"
  }
 ]
};
