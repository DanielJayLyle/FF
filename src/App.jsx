import React, { useState, useEffect } from 'react';

const allFlashcards = [
  { japanese: '行く', pronunciation: 'iku', translation: 'go' },
  { japanese: '見る', pronunciation: 'miru', translation: 'see, look at' },
  { japanese: '多い', pronunciation: 'ooi', translation: 'a lot of, many' },
  { japanese: '家', pronunciation: 'ie', translation: 'home, household' },
  { japanese: 'これ', pronunciation: 'kore', translation: 'this, this one' },
  { japanese: 'それ', pronunciation: 'sore', translation: 'that, that one' },
  { japanese: '私', pronunciation: 'watashi', translation: 'I' },
  { japanese: '仕事', pronunciation: 'shigoto', translation: 'work, job' },
  { japanese: 'いつ', pronunciation: 'itsu', translation: 'when' },
  { japanese: 'する', pronunciation: 'suru', translation: 'do, make' },
  { japanese: '出る', pronunciation: 'deru', translation: 'go out, leave' },
  { japanese: '使う', pronunciation: 'tsukau', translation: 'use, make use of' },
  { japanese: '所', pronunciation: 'tokoro', translation: 'place' },
  { japanese: '作る', pronunciation: 'tsukuru', translation: 'make, create' },
  { japanese: '思う', pronunciation: 'omou', translation: 'think' },
  { japanese: '持つ', pronunciation: 'motsu', translation: 'have, possess' },
  { japanese: '買う', pronunciation: 'kau', translation: 'buy' },
  { japanese: '時間', pronunciation: 'jikan', translation: 'time, hour' },
  { japanese: '知る', pronunciation: 'shiru', translation: 'know' },
  { japanese: '同じ', pronunciation: 'onaji', translation: 'same, identical' },
  { japanese: '今', pronunciation: 'ima', translation: 'now' },
  { japanese: '新しい', pronunciation: 'atarashii', translation: 'new' }, 
  { japanese: 'なる', pronunciation: 'naru', translation: 'become' },
  { japanese: 'まだ', pronunciation: 'mada', translation: '(not) yet, still' },
  { japanese: 'あと', pronunciation: 'ato', translation: 'after' },
  { japanese: '聞く', pronunciation: 'kiku', translation: 'hear, ask' },
  { japanese: '言う', pronunciation: 'iu', translation: 'say, tell' },
  { japanese: '少ない', pronunciation: 'sukunai', translation: 'few, little' },
  { japanese: '高い', pronunciation: 'takai', translation: 'high, tall' },
  { japanese: '子供', pronunciation: 'kodomo', translation: 'child' },
  { japanese: 'そう', pronunciation: 'sou', translation: 'so, that way' },
  { japanese: 'もう', pronunciation: 'mou', translation: 'already, yet' },
  { japanese: '学生', pronunciation: 'gakusei', translation: 'student' },
  { japanese: '熱い', pronunciation: 'atsui', translation: 'hot (to touch)' },
  { japanese: 'どうぞ', pronunciation: 'douzo', translation: 'please' },
  { japanese: '午後', pronunciation: 'gogo', translation: 'afternoon, p.m.' },
  { japanese: '長い', pronunciation: 'nagai', translation: 'long' },
  { japanese: '本', pronunciation: 'hon', translation: 'book, volume' },
  { japanese: '今年', pronunciation: 'kotoshi', translation: 'this year (colloquial)' },
  { japanese: 'よく', pronunciation: 'yoku', translation: 'often, well' },
  { japanese: '彼女', pronunciation: 'kanojo', translation: 'she, ones girlfriend' },
  { japanese: 'どう', pronunciation: 'dou', translation: 'how, what' },
  { japanese: '言葉', pronunciation: 'kotoba', translation: 'word, language' },
  { japanese: '顔', pronunciation: 'kao', translation: 'face' },
  { japanese: '終わる', pronunciation: 'owaru', translation: 'finish, end' },
  { japanese: '一つ', pronunciation: 'hitotsu', translation: 'one (thing)' },
  { japanese: 'あげる', pronunciation: 'ageru', translation: 'give, offer (colloquial)' },
  { japanese: 'こう', pronunciation: 'kou', translation: 'like this, such' },
  { japanese: '学校', pronunciation: 'gakkou', translation: 'school' },
  { japanese: 'くれる', pronunciation: 'kureru', translation: 'be given' },
  { japanese: '始める', pronunciation: 'hajimeru', translation: 'start (something)' },
  { japanese: '起きる', pronunciation: 'okiru', translation: 'get up, get out of bed' },
  { japanese: '春', pronunciation: 'haru', translation: 'spring' },
  { japanese: '午前', pronunciation: 'gozen', translation: 'morning, a.m.' },
  { japanese: '別', pronunciation: 'betsu', translation: 'another, different' },
  { japanese: 'どこ', pronunciation: 'doko', translation: 'where' },
  { japanese: '部屋', pronunciation: 'heya', translation: 'room' },
  { japanese: '若い', pronunciation: 'wakai', translation: 'young' },
  { japanese: '車', pronunciation: 'kuruma', translation: 'car, automobile' },
  { japanese: '置く', pronunciation: 'oku', translation: 'put, place' },
  { japanese: '住む', pronunciation: 'sumu', translation: 'live, reside' },
  { japanese: '働く', pronunciation: 'hataraku', translation: 'work' },
  { japanese: '難しい', pronunciation: 'muzukashii', translation: 'difficult' },
  { japanese: '先生', pronunciation: 'sensei', translation: 'teacher' },
  { japanese: '立つ', pronunciation: 'tatsu', translation: 'stand, rise' },
  { japanese: '呼ぶ', pronunciation: 'yobu', translation: 'call, name' },
  { japanese: '大学', pronunciation: 'daigaku', translation: 'university, college' },
  { japanese: '安い', pronunciation: 'yasui', translation: 'cheap, inexpensive' },
  { japanese: 'もっと', pronunciation: 'motto', translation: 'more' },
  { japanese: '帰る', pronunciation: 'kaeru', translation: 'go back home' },
  { japanese: '分かる', pronunciation: 'wakaru', translation: 'understand' },
  { japanese: '広い', pronunciation: 'hiroi', translation: 'wide, big' },
  { japanese: '数', pronunciation: 'suu', translation: 'number' },
  { japanese: '近い', pronunciation: 'chikai', translation: 'near, close' },
  { japanese: 'そこ', pronunciation: 'soko', translation: 'there' },
  { japanese: '走る', pronunciation: 'hashiru', translation: 'run' },
  { japanese: '入れる', pronunciation: 'ireru', translation: 'put in' },
  { japanese: '教える', pronunciation: 'oshieru', translation: 'teach, tell' },
  { japanese: '歩く', pronunciation: 'aruku', translation: 'walk, go on foot' },
  { japanese: '会う', pronunciation: 'au', translation: 'meet' },
  { japanese: '書く', pronunciation: 'kaku', translation: 'write' },
  { japanese: '頭', pronunciation: 'atama', translation: 'head' },
  { japanese: '売る', pronunciation: 'uru', translation: 'sell' },
  { japanese: '大好き', pronunciation: 'daisuki', translation: 'like (something) a lot' },
  { japanese: '体', pronunciation: 'karada', translation: 'body, physique' },
  { japanese: '直ぐ', pronunciation: 'sugu', translation: 'at once, soon' },
  { japanese: '飛ぶ', pronunciation: 'tobu', translation: 'fly' },
  { japanese: 'とても', pronunciation: 'totemo', translation: 'very (colloquial)' },
  { japanese: '誰', pronunciation: 'dare', translation: 'who' },
  { japanese: '好き', pronunciation: 'suki', translation: 'favorite, liked' },
  { japanese: '読む', pronunciation: 'yomu', translation: 'read' },
  { japanese: '次', pronunciation: 'tsugi', translation: 'next' },
  { japanese: 'あなた', pronunciation: 'anata', translation: 'you' },
  { japanese: '飲む', pronunciation: 'nomu', translation: 'drink' },
  { japanese: '古い', pronunciation: 'furui', translation: 'old' },
  { japanese: '質問', pronunciation: 'shitsumon', translation: 'question' },
  { japanese: '今日', pronunciation: 'kyou', translation: 'today (colloquial)' },
  { japanese: '友達', pronunciation: 'tomodachi', translation: 'friend, companion (colloquial)' },
  { japanese: '早い', pronunciation: 'hayai', translation: 'early' },
  { japanese: 'どれ', pronunciation: 'dore', translation: 'what, which' },
  { japanese: '美しい', pronunciation: 'utsukushii', translation: 'beautiful' },
  { japanese: 'いつも', pronunciation: 'itsumo', translation: 'always (colloquial)' },
  { japanese: '足', pronunciation: 'ashi', translation: 'leg, foot' },
  { japanese: '起こす', pronunciation: 'okosu', translation: 'wake (someone) up' },
  { japanese: '見せる', pronunciation: 'miseru', translation: 'show' },
  { japanese: '娘', pronunciation: 'musume', translation: 'daughter, girl' },
  { japanese: '楽しむ', pronunciation: 'tanoshimu', translation: 'enjoy' },
  { japanese: '色', pronunciation: 'iro', translation: 'color' },
  { japanese: 'みんな', pronunciation: 'minna', translation: 'everybody (colloquial)' },
  { japanese: '取る', pronunciation: 'toru', translation: 'take, get' },
  { japanese: '勉強', pronunciation: 'benkyou', translation: 'study' },
  { japanese: 'できる', pronunciation: 'dekiru', translation: 'can do, be good at' },
  { japanese: '短い', pronunciation: 'mijikai', translation: 'short, brief' },
  { japanese: '落ちる', pronunciation: 'ochiru', translation: 'fall, come down' },
  { japanese: '息子', pronunciation: 'musuko', translation: 'son' },
  { japanese: '白い', pronunciation: 'shiroi', translation: 'white, blank' },
  { japanese: '飛行機', pronunciation: 'hikouki', translation: 'airplane' },
  { japanese: '病気', pronunciation: 'byouki', translation: 'illness' },
  { japanese: '冬', pronunciation: 'fuyu', translation: 'winter' },
  { japanese: '年', pronunciation: 'toshi', translation: 'year, age' },
  { japanese: '重い', pronunciation: 'omoi', translation: 'heavy' },
  { japanese: '胸', pronunciation: 'mune', translation: 'chest, breast' },
  { japanese: '払う', pronunciation: 'harau', translation: 'pay (money, respect, attention, etc.)' },
  { japanese: '軽い', pronunciation: 'karui', translation: 'light (of weight)' },
  { japanese: '見つける', pronunciation: 'mitsukeru', translation: 'find' },
  { japanese: '忘れる', pronunciation: 'wasureru', translation: 'forget, leave behind' },
  { japanese: '酒', pronunciation: 'sake', translation: 'alcohol, rice wine' },
  { japanese: 'どちら', pronunciation: 'dochira', translation: 'which (polite)' },
  { japanese: '姉', pronunciation: 'ane', translation: '(ones own) older sister' },
  { japanese: '覚える', pronunciation: 'oboeru', translation: 'memorize, learn' },
  { japanese: '狭い', pronunciation: 'semai', translation: 'narrow, small' },
  { japanese: '赤い', pronunciation: 'akai', translation: 'red' },
  { japanese: '着る', pronunciation: 'kiru', translation: 'wear, put on' },
  { japanese: '笑う', pronunciation: 'warau', translation: 'laugh, smile' },
  { japanese: '一番', pronunciation: 'ichiban', translation: 'most, best' },
  { japanese: '授業', pronunciation: 'jugyou', translation: 'class session, lecture' },
  { japanese: '週', pronunciation: 'shuu', translation: 'week' },
  { japanese: '漢字', pronunciation: 'kanji', translation: 'Chinese character' },
  { japanese: '自転車', pronunciation: 'jitensha', translation: 'bicycle' },
  { japanese: '電車', pronunciation: 'densha', translation: 'train' },
  { japanese: '探す', pronunciation: 'sagasu', translation: 'search for, look for' },
  { japanese: '紙', pronunciation: 'kami', translation: 'paper' },
  { japanese: '歌う', pronunciation: 'utau', translation: 'sing' },
  { japanese: '遅い', pronunciation: 'osoi', translation: 'slow, late' },
  { japanese: '首', pronunciation: 'kubi', translation: 'neck' },
  { japanese: '速い', pronunciation: 'hayai', translation: 'fast' },
  { japanese: '一緒に', pronunciation: 'issho ni', translation: 'together, at the same time' },
  { japanese: '今月', pronunciation: 'kongetsu', translation: 'this month' },
  { japanese: '遊ぶ', pronunciation: 'asobu', translation: 'play' },
  { japanese: '遠い', pronunciation: 'tooi', translation: 'far, distant' },
  { japanese: '弱い', pronunciation: 'yowai', translation: 'weak' },
  { japanese: '耳', pronunciation: 'mimi', translation: 'ear' },
  { japanese: '座る', pronunciation: 'suwaru', translation: 'sit, sit down' },
  { japanese: '右', pronunciation: 'migi', translation: 'right' },
  { japanese: '浴びる', pronunciation: 'abiru', translation: 'take (a shower)' },
  { japanese: '肩', pronunciation: 'kata', translation: 'shoulder' },
  { japanese: '寝る', pronunciation: 'neru', translation: 'lie down and sleep, go to sleep' },
  { japanese: '消す', pronunciation: 'kesu', translation: 'switch off, turn off' },
  { japanese: '元気', pronunciation: 'genki', translation: 'healthy, energetic' },
  { japanese: '全部', pronunciation: 'zenbu', translation: 'all, whole' },
  { japanese: '去年', pronunciation: 'kyonen', translation: 'last year (colloquial)' },
  { japanese: '引く', pronunciation: 'hiku', translation: 'draw, pull' },
  { japanese: '図書館', pronunciation: 'toshokan', translation: 'library' },
  { japanese: '上げる', pronunciation: 'ageru', translation: 'raise, lift' },
  { japanese: '緑', pronunciation: 'midori', translation: 'green' },
  { japanese: '腕', pronunciation: 'ude', translation: 'arm' },
  { japanese: 'ドア', pronunciation: 'doa', translation: 'door (loan word)' },
  { japanese: '女の子', pronunciation: 'onna no ko', translation: 'little girl' },
  { japanese: '男の子', pronunciation: 'otoko no ko', translation: 'boy' },
  { japanese: '私たち', pronunciation: 'watashitachi', translation: 'we (colloquial)' },
  { japanese: '近く', pronunciation: 'chikaku', translation: 'near, close to' },
  { japanese: 'やる', pronunciation: 'yaru', translation: 'do, give' },
  { japanese: 'かなり', pronunciation: 'kanari', translation: 'fairly, rather' },
  { japanese: '国', pronunciation: 'kuni', translation: 'country' },
  { japanese: '起こる', pronunciation: 'okoru', translation: 'happen' },
  { japanese: '秋', pronunciation: 'aki', translation: 'autumn, fall' },
  { japanese: '送る', pronunciation: 'okuru', translation: 'send' },
  { japanese: '死ぬ', pronunciation: 'shinu', translation: 'die' },
  { japanese: '気持ち', pronunciation: 'kimochi', translation: 'feeling, sensation' },
  { japanese: '乗る', pronunciation: 'noru', translation: 'ride, take' },
  { japanese: 'いる', pronunciation: 'iru', translation: 'be present, stay' },
  { japanese: '木', pronunciation: 'ki', translation: 'tree, wood' },
  { japanese: '開ける', pronunciation: 'akeru', translation: 'open, unlock (doors, windows, etc.)' },
  { japanese: '閉める', pronunciation: 'shimeru', translation: 'shut, close (doors, windows, etc.)' },
  { japanese: '続く', pronunciation: 'tsuzuku', translation: 'continue, follow' },
  { japanese: 'お医者さん', pronunciation: 'oishasan', translation: 'doctor (polite)' },
  { japanese: '円', pronunciation: 'en', translation: 'Japanese yen' },
  { japanese: 'ここ', pronunciation: 'koko', translation: 'here' },
  { japanese: '待つ', pronunciation: 'matsu', translation: 'wait, wait for' },
  { japanese: '低い', pronunciation: 'hikui', translation: 'low, short' },
  { japanese: 'もらう', pronunciation: 'morau', translation: 'receive' },
  { japanese: '食べる', pronunciation: 'taberu', translation: 'eat' },
  { japanese: '兄', pronunciation: 'ani', translation: '(one\'s own) older brother' },
  { japanese: '名前', pronunciation: 'namae', translation: 'name' },
  { japanese: '夫', pronunciation: 'otto', translation: 'husband' },
  { japanese: '一', pronunciation: 'ichi', translation: 'one' },
  { japanese: '結婚', pronunciation: 'kekkon', translation: 'marriage' },
  { japanese: '親', pronunciation: 'oya', translation: 'parent' },
  { japanese: '話す', pronunciation: 'hanasu', translation: 'speak, talk' },
  { japanese: '少し', pronunciation: 'sukoshi', translation: 'a bit, a little while' },
  { japanese: '閉じる', pronunciation: 'tojiru', translation: 'shut, close (books, eyes, etc.)' },
  { japanese: '時', pronunciation: 'toki', translation: 'time, moment' },
  { japanese: '米', pronunciation: 'kome', translation: 'rice (grain)' },
  { japanese: '切る', pronunciation: 'kiru', translation: 'cut' },
  { japanese: '楽しい', pronunciation: 'tanoshii', translation: 'fun, enjoyable' },
  { japanese: '服', pronunciation: 'fuku', translation: 'clothes (colloquial)' },
  { japanese: '後ろ', pronunciation: 'ushiro', translation: 'back, behind' },
  { japanese: '嬉しい', pronunciation: 'ureshii', translation: 'happy, glad' },
  { japanese: '腰', pronunciation: 'koshi', translation: 'waist, lower back' },
  { japanese: '日曜日', pronunciation: 'nichiyoubi', translation: 'Sunday' },
  { japanese: '昼', pronunciation: 'hiru', translation: 'daytime, midday' },
  { japanese: 'お母さん', pronunciation: 'okaasan', translation: 'mother (colloquial)' },
  { japanese: '大学生', pronunciation: 'daigakusei', translation: 'university student' },
  { japanese: '終わり', pronunciation: 'owari', translation: 'end, conclusion' },
  { japanese: '背', pronunciation: 'se', translation: 'height, stature' },
  { japanese: '手伝う', pronunciation: 'tetsudau', translation: 'help, assist' },
  { japanese: '鼻', pronunciation: 'hana', translation: 'nose' },
  { japanese: '起きる', pronunciation: 'okiru', translation: 'occur, happen, wake up, get up' },
  { japanese: '載せる', pronunciation: 'noseru', translation: 'place, put on' },
  { japanese: '悲しい', pronunciation: 'kanashii', translation: 'sad' },
  { japanese: 'しゃべる', pronunciation: 'shaberu', translation: 'chat, talk' },
  { japanese: '近く', pronunciation: 'chikaku', translation: 'in the near future, before long' },
  { japanese: '甘い', pronunciation: 'amai', translation: 'sweet' },
  { japanese: 'テーブル', pronunciation: 'te-buru', translation: 'table' },
  { japanese: '食べ物', pronunciation: 'tabemono', translation: 'food (colloquial)' },
  { japanese: '始まる', pronunciation: 'hajimaru', translation: 'begin' },
  { japanese: 'ゲーム', pronunciation: 'ge-mu', translation: 'game' },
  { japanese: '十', pronunciation: 'juu', translation: 'ten' },
  { japanese: '天気', pronunciation: 'tenki', translation: 'weather' },
  { japanese: '暑い', pronunciation: 'atsui', translation: 'hot (of weather)' },
  { japanese: '太い', pronunciation: 'futoi', translation: 'thick, fat' },
  { japanese: '晩', pronunciation: 'ban', translation: 'evening, night (from sunset to bedtime)' },
  { japanese: '土曜日', pronunciation: 'doyoubi', translation: 'Saturday' },
  { japanese: '痛い', pronunciation: 'itai', translation: 'sore, painful' },
  { japanese: 'お父さん', pronunciation: 'otousan', translation: 'father, dad (colloquial)' },
  { japanese: '多分', pronunciation: 'tabun', translation: 'probably, perhaps' },
  { japanese: '時計', pronunciation: 'tokei', translation: 'clock, watch' },
  { japanese: '泊まる', pronunciation: 'tomaru', translation: 'stay overnight' },
  { japanese: 'どうして', pronunciation: 'doushite', translation: 'how come' },
  { japanese: '掛ける', pronunciation: 'kakeru', translation: 'hang, put on' },
  { japanese: '曲がる', pronunciation: 'magaru', translation: 'make a turn, turn' },
  { japanese: 'お腹', pronunciation: 'onaka', translation: 'stomach, belly' },
  { japanese: 'ミーティング', pronunciation: 'mi-tingu', translation: 'meeting' },
  { japanese: '嫌い', pronunciation: 'kirai', translation: 'dislike (habitual)' },
  { japanese: '金曜日', pronunciation: 'kinyoubi', translation: 'Friday' },
  { japanese: '要る', pronunciation: 'iru', translation: 'need, require' },
  { japanese: '無い', pronunciation: 'nai', translation: 'to not be' },
  { japanese: '風邪', pronunciation: 'kaze', translation: 'cold (illness)' },
  { japanese: '黄色い', pronunciation: 'kiiroi', translation: 'yellow' },
  { japanese: '優しい', pronunciation: 'yasashii', translation: 'gentle, kind' },
  { japanese: '晴れる', pronunciation: 'hareru', translation: 'be sunny, clear up' },
  { japanese: '汚い', pronunciation: 'kitanai', translation: 'dirty' },
  { japanese: '茶色', pronunciation: 'chairo', translation: 'brown' },
  { japanese: '空く', pronunciation: 'suku', translation: 'be empty, become less crowded' },
  { japanese: '上る', pronunciation: 'noboru', translation: 'go up, climb' },
  { japanese: 'ご飯', pronunciation: 'gohan', translation: 'meal, cooked rice' },
  { japanese: '日', pronunciation: 'nichi', translation: 'counter for days' },
  { japanese: '髪の毛', pronunciation: 'kaminoke', translation: 'hair, each single hair' },
  { japanese: 'つける', pronunciation: 'tsukeru', translation: 'switch on, turn on' },
  { japanese: '月曜日', pronunciation: 'getsuyoubi', translation: 'Monday' },
  { japanese: '入る', pronunciation: 'hairu', translation: 'enter' },
  { japanese: 'カタカナ', pronunciation: 'katakana', translation: 'katakana' },
  { japanese: '今週', pronunciation: 'konshuu', translation: 'this week' },
  { japanese: '開く', pronunciation: 'hiraku', translation: 'open (books, eyes, etc.)' },
  { japanese: '水', pronunciation: 'mizu', translation: 'water' },
  { japanese: 'あれ', pronunciation: 'are', translation: 'that (over there)' },
  { japanese: '二', pronunciation: 'ni', translation: 'two' },
  { japanese: '締める', pronunciation: 'shimeru', translation: 'tighten, fasten' },
  { japanese: 'まずい', pronunciation: 'mazui', translation: 'bad (taste), distasteful' },
  { japanese: '平仮名', pronunciation: 'hiragana', translation: 'hiragana' },
  { japanese: '曇る', pronunciation: 'kumoru', translation: 'become cloudy' },
  { japanese: '触る', pronunciation: 'sawaru', translation: 'touch, feel' },
  { japanese: '駄目', pronunciation: 'dame', translation: 'no good' },
  { japanese: '飲み物', pronunciation: 'nomimono', translation: 'beverage, drink' },
  { japanese: '木曜日', pronunciation: 'mokuyoubi', translation: 'Thursday' },
  { japanese: '曜日', pronunciation: 'youbi', translation: 'day of the week' },
  { japanese: 'そば', pronunciation: 'soba', translation: 'side, vicinity' },
  { japanese: 'こっち', pronunciation: 'kocchi', translation: 'here, this way (casual)' },
  { japanese: '火曜日', pronunciation: 'kayoubi', translation: 'Tuesday' },
  { japanese: '渇く', pronunciation: 'kawaku', translation: 'be thirsty' },
  { japanese: '三', pronunciation: 'san', translation: 'three' },
  { japanese: '水曜日', pronunciation: 'suiyoubi', translation: 'Wednesday' },
  { japanese: '二つ', pronunciation: 'futatsu', translation: 'two (things)' },
  { japanese: '今晩', pronunciation: 'konban', translation: 'this evening, tonight' },
  { japanese: '千', pronunciation: 'sen', translation: 'thousand' },
  { japanese: '六日', pronunciation: 'muika', translation: 'six days, sixth of the month' },
  { japanese: 'お姉さん', pronunciation: 'onesan', translation: 'older sister' },
  { japanese: '直る', pronunciation: 'naoru', translation: 'be repaired, get fixed' },
  { japanese: 'ちょっと', pronunciation: 'chotto', translation: 'just a moment, just a little' },
  { japanese: '四', pronunciation: 'yon', translation: 'four (Japanese origin)' },
  { japanese: 'これから', pronunciation: 'korekara', translation: 'from now on, after this' },
  { japanese: '考える', pronunciation: 'kangaeru', translation: 'think, consider' },
  { japanese: '戻る', pronunciation: 'modoru', translation: 'return to a point of departure' },
  { japanese: '変える', pronunciation: 'kaeru', translation: 'change (something), alter' },
  { japanese: '朝', pronunciation: 'asa', translation: 'morning' },
  { japanese: '歯', pronunciation: 'ha', translation: 'tooth' },
  { japanese: '頑張る', pronunciation: 'ganbaru', translation: 'work hard, do one\'s best' },
  { japanese: '携帯電話', pronunciation: 'keitaidenwa', translation: 'cellular phone' },
  { japanese: '雨', pronunciation: 'ame', translation: 'rain' },
  { japanese: '金', pronunciation: 'kane', translation: 'money (colloquial)' },
  { japanese: '易しい', pronunciation: 'yasashii', translation: 'easy, simple (colloquial)' },
  { japanese: 'お兄さん', pronunciation: 'oniisan', translation: 'older brother' },
  { japanese: '大きい', pronunciation: 'ooki', translation: 'big' },
  { japanese: '小さい', pronunciation: 'chiisai', translation: 'small' },
  { japanese: '辛い', pronunciation: 'karai', translation: 'spicy, hot' },
  { japanese: '八', pronunciation: 'hachi', translation: 'eight' },
  { japanese: 'あそこ', pronunciation: 'asoko', translation: 'over there' },
  { japanese: '来る', pronunciation: 'kuru', translation: 'come' },
  { japanese: '前', pronunciation: 'mae', translation: 'front, before' },
  { japanese: '五日', pronunciation: 'itsuka', translation: 'five days, fifth of the month' },
  { japanese: 'いっぱい', pronunciation: 'ippai', translation: 'full' },
  { japanese: '酸っぱい', pronunciation: 'suppai', translation: 'sour' },
  { japanese: '違う', pronunciation: 'chigau', translation: 'differ, be wrong' },
  { japanese: '細い', pronunciation: 'hosoi', translation: 'thin, slender' },
  { japanese: '三つ', pronunciation: 'mittsu', translation: 'three (things)' },
  { japanese: '八日', pronunciation: 'youka', translation: 'eight days, eighth of the month' },
  { japanese: '高校生', pronunciation: 'koukousei', translation: 'high school student' },
  { japanese: '上手', pronunciation: 'jouzu', translation: 'good, skilled' },
  { japanese: '強い', pronunciation: 'tsuyoi', translation: 'strong' },
  { japanese: '七', pronunciation: 'nana', translation: 'seven (Japanese origin)' },
  { japanese: '二十日', pronunciation: 'hatsuka', translation: '20 days, 20th of the month' },
  { japanese: '左', pronunciation: 'hidari', translation: 'left' },
  { japanese: '二日', pronunciation: 'futsuka', translation: 'two days, second of the month' },
  { japanese: '四つ', pronunciation: 'yottsu', translation: 'four (things)' },
  { japanese: '暖かい', pronunciation: 'atatakai', translation: 'warm' },
  { japanese: 'ある', pronunciation: 'aru', translation: 'exist, there is' },
  { japanese: 'いい', pronunciation: 'ii', translation: 'good (informal/spoken form)' },
  { japanese: '上', pronunciation: 'ue', translation: 'up, above' },
  { japanese: '駅', pronunciation: 'eki', translation: 'train station' },
  { japanese: '美味しい', pronunciation: 'oishii', translation: 'tasty' },
  { japanese: '昨日', pronunciation: 'kinou', translation: 'yesterday (colloquial)' },
  { japanese: '綺麗', pronunciation: 'kirei', translation: 'pretty, clean' },
  { japanese: '五', pronunciation: 'go', translation: 'five' },
  { japanese: '九つ', pronunciation: 'kokonotsu', translation: 'nine (things)' },
  { japanese: 'お願い', pronunciation: 'onegai', translation: 'favor' },
  { japanese: '答える', pronunciation: 'kotaeru', translation: 'give an answer' },
  { japanese: '先', pronunciation: 'saki', translation: 'ahead, first' },
  { japanese: '寒い', pronunciation: 'samui', translation: 'cold (temperature of the air)' },
  { japanese: '四', pronunciation: 'shi', translation: 'four (Chinese origin)' },
  { japanese: '三日', pronunciation: 'mikka', translation: 'three days, third of the month' },
  { japanese: '下', pronunciation: 'shita', translation: 'under, below' },
  { japanese: '大丈夫', pronunciation: 'daijoubu', translation: 'all right, OK' },
  { japanese: '大人', pronunciation: 'otona', translation: 'adult' },
  { japanese: '出す', pronunciation: 'dasu', translation: 'take out' },
  { japanese: '父', pronunciation: 'chichi', translation: '(speaker\'s) father' },
  { japanese: '母', pronunciation: 'haha', translation: '(speaker\'s) mother' },
  { japanese: '月', pronunciation: 'tsuki', translation: 'moon' },
  { japanese: '妹', pronunciation: 'imouto', translation: 'younger sister' },
  { japanese: '冷たい', pronunciation: 'tsumetai', translation: 'cold (to touch)' },
  { japanese: '弟', pronunciation: 'otouto', translation: 'younger brother' },
  { japanese: '手', pronunciation: 'te', translation: 'hand' },
  { japanese: '十日', pronunciation: 'tooka', translation: 'ten days, tenth of the month' },
  { japanese: '口', pronunciation: 'kuchi', translation: 'mouth' },
  { japanese: '夏', pronunciation: 'natsu', translation: 'summer' },
  { japanese: '七つ', pronunciation: 'nanatsu', translation: 'seven (things)' },
  { japanese: '時々', pronunciation: 'tokidoki', translation: 'sometimes' },
  { japanese: '何', pronunciation: 'nani', translation: 'what' },
  { japanese: '人', pronunciation: 'hito', translation: 'person' },
  { japanese: '一人', pronunciation: 'hitori', translation: 'one person' },
  { japanese: '一日', pronunciation: 'tsuitachi', translation: 'first of the month' },
  { japanese: '九日', pronunciation: 'kokonoka', translation: 'nine days, ninth of the month' },
  { japanese: '方', pronunciation: 'hou', translation: 'direction, side' },
  { japanese: '他', pronunciation: 'hoka', translation: 'other (Japanese origin)' },
  { japanese: '僕', pronunciation: 'boku', translation: 'I, me (usually used by young males)' },
  { japanese: '欲しい', pronunciation: 'hoshii', translation: 'want, desire (of the speaker)' },
  { japanese: '万', pronunciation: 'man', translation: 'ten thousand' },
  { japanese: '見える', pronunciation: 'mieru', translation: 'be visible, can see' },
  { japanese: '道', pronunciation: 'michi', translation: 'street, way' },
  { japanese: '五つ', pronunciation: 'itsutsu', translation: 'five (things)' },
  { japanese: '目', pronunciation: 'me', translation: 'eye' },
  { japanese: '八つ', pronunciation: 'yattsu', translation: 'eight (things)' },
  { japanese: '止める', pronunciation: 'tomeru', translation: 'stop (a car…). 止める (yameru) give up' },
  { japanese: '四日', pronunciation: 'yokka', translation: 'four days, fourth of the month' },
  { japanese: '夜', pronunciation: 'yoru', translation: 'night (from sunset to sunrise)' },
  { japanese: '来年', pronunciation: 'rainen', translation: 'next year' },
  { japanese: '六', pronunciation: 'roku', translation: 'six' },
  { japanese: '悪い', pronunciation: 'warui', translation: 'bad' },
  { japanese: 'お手洗い', pronunciation: 'otearai', translation: 'toilet, bathroom' },
  { japanese: 'ご主人', pronunciation: 'goshujin', translation: '(someone else\'s) husband' },
  { japanese: '本当に', pronunciation: 'hontouni', translation: 'really, truly' },
  { japanese: '自分', pronunciation: 'jibun', translation: 'self, oneself' },
  { japanese: 'ため', pronunciation: 'tame', translation: 'sake, purpose' },
  { japanese: '見つかる', pronunciation: 'mitsukaru', translation: 'be found, be caught' },
  { japanese: '休む', pronunciation: 'yasumu', translation: 'take a rest, take a break' },
  { japanese: 'ゆっくり', pronunciation: 'yukkuri', translation: 'slowly' },
  { japanese: '六つ', pronunciation: 'muttsu', translation: 'six (things)' },
  { japanese: '花', pronunciation: 'hana', translation: 'flower' },
  { japanese: '動く', pronunciation: 'ugoku', translation: 'move' },
  { japanese: '線', pronunciation: 'sen', translation: 'line' },
  { japanese: '七日', pronunciation: 'nanoka', translation: 'seven days, seventh of the month' },
  { japanese: '以外', pronunciation: 'igai', translation: 'except for' },
  { japanese: '男', pronunciation: 'otoko', translation: 'man, male' },
  { japanese: '彼', pronunciation: 'kare', translation: 'he, one\'s boyfriend' },
  { japanese: '女', pronunciation: 'onna', translation: 'woman' },
  { japanese: '妻', pronunciation: 'tsuma', translation: 'woman' },
  { japanese: '百', pronunciation: 'hyaku', translation: 'hundred' },
  { japanese: '辺', pronunciation: 'atari', translation: 'vicinity' },
  { japanese: '店', pronunciation: 'mise', translation: 'shop, store' },
  { japanese: '閉まる', pronunciation: 'shimaru', translation: 'be shut, be closed' },
  { japanese: '問題', pronunciation: 'mondai', translation: 'problem, question' },
  { japanese: '必要', pronunciation: 'hitsuyou', translation: 'need, necessary' },
  { japanese: 'もつ', pronunciation: 'motsu', translation: 'last long, be durable' },
  { japanese: '開く', pronunciation: 'hiraku', translation: 'open' },
  { japanese: '昨年', pronunciation: 'sakunen', translation: 'last year (formal, often used in writing)' },
  { japanese: '治る', pronunciation: 'naoru', translation: 'be cured, get well' },
  { japanese: 'ドル', pronunciation: 'doru', translation: 'dollar' },
  { japanese: 'システム', pronunciation: 'shisutemu', translation: 'system (loan word)' },
  { japanese: '以上', pronunciation: 'ijou', translation: 'more than, not less than' },
  { japanese: '最近', pronunciation: 'saikin', translation: 'recent, latest' },
  { japanese: '世界', pronunciation: 'sekai', translation: 'world' },
  { japanese: 'コンピューター', pronunciation: 'konpyu-ta-', translation: 'computer' },
  { japanese: 'やる', pronunciation: 'yaru', translation: 'give (to an inferior)' },
  { japanese: '意味', pronunciation: 'imi', translation: 'meaning, sense' },
  { japanese: '増える', pronunciation: 'fueru', translation: 'increase, accrue' },
  { japanese: '選ぶ', pronunciation: 'erabu', translation: 'choose, elect' },
  { japanese: '生活', pronunciation: 'seikatsu', translation: 'life, living' },
  { japanese: '進める', pronunciation: 'susumeru', translation: 'go ahead, proceed' },
  { japanese: '続ける', pronunciation: 'tsuzukeru', translation: 'continue, keep up' },
  { japanese: 'ほとんど', pronunciation: 'hotondo', translation: 'almost, hardly' },
  { japanese: '会社', pronunciation: 'kaisha', translation: 'company, corporation' },
  { japanese: '家', pronunciation: 'ie', translation: 'house, dwelling' },
  { japanese: '多く', pronunciation: 'ooku', translation: 'much, largely' },
  { japanese: '話', pronunciation: 'hanashi', translation: 'talk, story' },
  { japanese: '上がる', pronunciation: 'agaru', translation: 'go up, rise (physical movement)' },
  { japanese: 'もう', pronunciation: 'mou', translation: 'another, again' },
  { japanese: '集める', pronunciation: 'atsumeru', translation: 'collect, gather' },
  { japanese: '声', pronunciation: 'koe', translation: 'voice, sound' },
  { japanese: '初めて', pronunciation: 'hajimete', translation: 'for the first time' },
  { japanese: '変わる', pronunciation: 'kawaru', translation: 'change, turn into' },
  { japanese: 'まず', pronunciation: 'mazu', translation: 'first of all, to begin with' },
  { japanese: '社会', pronunciation: 'shakai', translation: 'society' },
  { japanese: 'プログラム', pronunciation: 'puroguramu', translation: 'program booklet' },
  { japanese: '力', pronunciation: 'chikara', translation: 'strength, power' },
  { japanese: '今回', pronunciation: 'konkai', translation: 'this time' },
  { japanese: '予定', pronunciation: 'yotei', translation: 'schedule, plan' },
  { japanese: 'まま', pronunciation: 'mama', translation: 'as is, still (in the current state)' },
  { japanese: 'テレビ', pronunciation: 'terebi', translation: 'television' },
  { japanese: '減る', pronunciation: 'heru', translation: 'decrease, diminish' },
  { japanese: '消える', pronunciation: 'kieru', translation: 'be extinguished, disappear' },
  { japanese: '家族', pronunciation: 'kazoku', translation: 'family, household' },
  { japanese: '比べる', pronunciation: 'kuraberu', translation: 'compare, contrast' },
  { japanese: '生まれる', pronunciation: 'umareru', translation: 'be born, come into existence' },
  { japanese: 'ただ', pronunciation: 'tada', translation: 'free' },
  { japanese: 'これら', pronunciation: 'korera', translation: 'these' },
  { japanese: '調べる', pronunciation: 'shiraberu', translation: 'investigate, check' },
  { japanese: '事故', pronunciation: 'jiko', translation: 'accident, trouble' },
  { japanese: '電話', pronunciation: 'denwa', translation: 'telephone, phone call' },
  { japanese: '外国', pronunciation: 'gaikoku', translation: 'foreign country' },
  { japanese: '銀行', pronunciation: 'ginkou', translation: 'bank' },
  { japanese: '十分', pronunciation: 'juubun', translation: 'enough, plentiful' },
  { japanese: 'あまり', pronunciation: 'amari', translation: '(not) much' },
  { japanese: '写真', pronunciation: 'shashin', translation: 'photograph' },
  { japanese: '繰り返す', pronunciation: 'kurikaesu', translation: 'repeat' },
  { japanese: '種類', pronunciation: 'shurui', translation: 'kind, type' },
  { japanese: '意見', pronunciation: 'iken', translation: 'opinion' },
  { japanese: '新聞', pronunciation: 'shinbun', translation: 'newspaper' },
  { japanese: '文章', pronunciation: 'bunshou', translation: 'sentence, writing' },
  { japanese: '目立つ', pronunciation: 'medatsu', translation: 'stand out, be conspicuous' },
  { japanese: '相手', pronunciation: 'aite', translation: 'opponent, the other party' },
  { japanese: '病院', pronunciation: 'byouin', translation: 'hospital' },
  { japanese: '厚い', pronunciation: 'atsui', translation: 'thick, bulky' },
  { japanese: '忙しい', pronunciation: 'isogashii', translation: 'busy, occupied' },
  { japanese: '薄い', pronunciation: 'usui', translation: 'thin, weak' },
  { japanese: '川', pronunciation: 'kawa', translation: 'river, stream' },
  { japanese: '暗い', pronunciation: 'kurai', translation: 'dark, gloomy' },
  { japanese: 'クラス', pronunciation: 'kurasu', translation: 'class (in school)' },
  { japanese: '黒い', pronunciation: 'kuroi', translation: 'black, dark' },
  { japanese: 'バス', pronunciation: 'basu', translation: 'bus' },
  { japanese: '青い', pronunciation: 'aoi', translation: 'blue' },
  { japanese: '買い物', pronunciation: 'kaimono', translation: 'shopping, purchase' },
  { japanese: '薬', pronunciation: 'kusuri', translation: 'drug, medicine' },
  { japanese: '砂糖', pronunciation: 'satou', translation: 'sugar' },
  { japanese: '休み', pronunciation: 'yasumi', translation: 'holiday, break' },
  { japanese: '郵便局', pronunciation: 'yuubinkyoku', translation: 'post office' },
  { japanese: '住所', pronunciation: 'juusho', translation: 'address' },
  { japanese: 'こちら', pronunciation: 'kochira', translation: 'here, this way (polite)' },
  { japanese: '財布', pronunciation: 'saifu', translation: 'purse, wallet' },
  { japanese: 'パスポート', pronunciation: 'pasupo-to', translation: 'passport' },
  { japanese: '椅子', pronunciation: 'isu', translation: 'chair' },
  { japanese: '可愛い', pronunciation: 'kawaii', translation: 'cute, sweet' },
  { japanese: 'お祖父さん', pronunciation: 'ojiisan', translation: 'grandfather (colloquial)' },
  { japanese: '切手', pronunciation: 'kitte', translation: 'postage stamp' },
  { japanese: '涼しい', pronunciation: 'suzushii', translation: 'cool (of temperature)' },
  { japanese: 'いくつ', pronunciation: 'ikutsu', translation: 'how many, how old' },
  { japanese: 'メニュー', pronunciation: 'menyu-', translation: 'menu' },
  { japanese: '電気', pronunciation: 'denki', translation: 'electricity, electric light' },
  { japanese: '勝つ', pronunciation: 'katsu', translation: 'win' },
  { japanese: '負ける', pronunciation: 'makeru', translation: 'lose' },
  { japanese: '建てる', pronunciation: 'tateru', translation: 'build, erect' },
  { japanese: '日記', pronunciation: 'nikki', translation: 'diary' },
  { japanese: '売り切れ', pronunciation: 'urikire', translation: 'sell out' },
  { japanese: 'お巡りさん', pronunciation: 'omawarisan', translation: 'police officer (colloquial)' },
  { japanese: '目覚まし時計', pronunciation: 'mezamashitokei', translation: 'alarm clock' },
  { japanese: 'レシート', pronunciation: 'reshi-to', translation: 'receipt (loan word)' },
  { japanese: 'ティッシュ', pronunciation: 'tisshu', translation: 'tissue' },
  { japanese: '歯ブラシ', pronunciation: 'haburashi', translation: 'toothbrush' },
  { japanese: '下りる', pronunciation: 'oriru', translation: 'go down, come down' },
  { japanese: '洗う', pronunciation: 'arau', translation: 'wash' },
  { japanese: 'パート', pronunciation: 'pa-to', translation: 'part-time' },
  { japanese: '氏名', pronunciation: 'shimei', translation: 'full name' },
  { japanese: '今夜', pronunciation: 'konya', translation: 'tonight, this evening' },
  { japanese: '夜中', pronunciation: 'yonaka', translation: 'midnight' },
  { japanese: '来週', pronunciation: 'raishuu', translation: 'next week' },
  { japanese: '誰か', pronunciation: 'dareka', translation: 'someone' },
  { japanese: '何', pronunciation: 'nan', translation: 'what. それはなんですか. What is that?' },
  { japanese: '今朝', pronunciation: 'kesa', translation: 'this morning' },
  { japanese: '寿司', pronunciation: 'sushi', translation: 'sushi' },
  { japanese: '履く', pronunciation: 'haku', translation: 'put on (shoes), wear (pants, skirt)' },
  { japanese: 'おじさん', pronunciation: 'ojisan', translation: 'uncle' },
  { japanese: 'おばさん', pronunciation: 'obasan', translation: 'aunt' },
  { japanese: 'お祖母さん', pronunciation: 'obaasan', translation: 'grandmother (colloquial)' },
  { japanese: 'いとこ', pronunciation: 'itoko', translation: 'cousin' },
  { japanese: '辞書', pronunciation: 'jisho', translation: 'dictionary (category)' },
  { japanese: '朝ご飯', pronunciation: 'asagohan', translation: 'breakfast' },
  { japanese: '白', pronunciation: 'shiro', translation: 'white' },
  { japanese: 'どっち', pronunciation: 'docchi', translation: 'which (casual)' },
  { japanese: 'そっち', pronunciation: 'socchi', translation: 'there (casual)' },
  { japanese: '明日', pronunciation: 'ashita', translation: 'tomorrow (colloquial)' },
  { japanese: '明後日', pronunciation: 'myougonichi/asatte', translation: 'day after tomorrow (colloquial)' },
  { japanese: '一昨日', pronunciation: 'ototoi', translation: 'the day before yesterday (colloquial)' },
  { japanese: '庭', pronunciation: 'niwa', translation: 'garden, yard' },
  { japanese: '左側', pronunciation: 'hidarigawa', translation: 'left side' },
  { japanese: '右側', pronunciation: 'migigawa', translation: 'right side' },
  { japanese: '指', pronunciation: 'yubi', translation: 'finger, toe' },
  { japanese: '眼鏡', pronunciation: 'megane', translation: 'glasses' },
  { japanese: '鞄', pronunciation: 'kaban', translation: 'bag, handbag' },
  { japanese: 'あっち', pronunciation: 'acchi', translation: 'other side, over there (casual)' },
  { japanese: '大人しい', pronunciation: 'otonashii', translation: 'gentle, quiet' },
  { japanese: '下手', pronunciation: 'heta', translation: 'not good at' },
  { japanese: '厳しい', pronunciation: 'kibishii', translation: 'strict, severe' },
  { japanese: '一人で', pronunciation: 'hitoride', translation: 'by oneself, alone' },
  { japanese: '答え', pronunciation: 'kotae', translation: 'answer, solution' },
  { japanese: 'この頃', pronunciation: 'konogoro', translation: 'these days, recently' },
  { japanese: '残念', pronunciation: 'zannen', translation: 'regretful, disappointing' },
  { japanese: '仕舞う', pronunciation: 'shimau', translation: 'put away, put in' },
  { japanese: '心配', pronunciation: 'shinpai', translation: 'anxiety, worry' },
  { japanese: '外', pronunciation: 'soto', translation: 'outside, open air' },
  { japanese: '大切', pronunciation: 'taisetsu', translation: 'important, valuable' },
  { japanese: 'ちょうど', pronunciation: 'choudo', translation: 'just, exactly' },
  { japanese: '助ける', pronunciation: 'tasukeru', translation: 'help, save' },
  { japanese: '勤める', pronunciation: 'tsutomeru', translation: 'serve, hold a job' },
  { japanese: '連れていく', pronunciation: 'tsureteiku', translation: 'take along, bring along (a person)' },
  { japanese: '丈夫', pronunciation: 'joubu', translation: 'healthy, sturdy' },
  { japanese: '賑やか', pronunciation: 'nigiyaka', translation: 'lively, exciting' },
  { japanese: '眠い', pronunciation: 'nemui', translation: 'sleepy' },
  { japanese: '山', pronunciation: 'yama', translation: 'mountain' },
  { japanese: '橋', pronunciation: 'hashi', translation: 'bridge' },
  { japanese: '止まる', pronunciation: 'tomaru', translation: 'come to a stop, cease' },
  { japanese: '降る', pronunciation: 'furu', translation: 'fall, come down (rain, snow, etc.)' },
  { japanese: '本当', pronunciation: 'hontou', translation: 'reality, genuine' },
  { japanese: '町', pronunciation: 'machi', translation: 'town, city' },
  { japanese: 'お菓子', pronunciation: 'okashi', translation: 'sweets, snacks' },
  { japanese: '緩い', pronunciation: 'yurui', translation: 'slack, loose' },
  { japanese: '良い', pronunciation: 'yoi', translation: 'good (formal/written form)' },
  { japanese: 'ようこそ', pronunciation: 'youkoso', translation: 'welcome (greeting)' },
  { japanese: 'お土産', pronunciation: 'omiyage', translation: 'souvenir (polite)' },
  { japanese: '両親', pronunciation: 'ryoushin', translation: 'parents' },
  { japanese: 'ウェーター', pronunciation: 'we-ta-', translation: 'waiter' },
  { japanese: 'ウェートレス', pronunciation: 'we-toresu', translation: 'waitress' },
  { japanese: '絶対に', pronunciation: 'zettaini', translation: 'absolutely, definitely' },
  { japanese: 'ごちそう', pronunciation: 'gochisou', translation: 'feast, treat' },
  { japanese: 'フォーク', pronunciation: 'fo-ku', translation: 'fork' },
  { japanese: 'スプーン', pronunciation: 'supu-n', translation: 'spoon' },
  { japanese: '瓶', pronunciation: 'bin', translation: 'bottle' },
  { japanese: 'つく', pronunciation: 'tsuku', translation: 'be on, be switched on' },
  { japanese: '醤油', pronunciation: 'shouyu', translation: 'soy sauce' },
  { japanese: '茶碗', pronunciation: 'chawan', translation: 'rice bowl' },
  { japanese: '決める', pronunciation: 'kimeru', translation: 'decide, agree upon' },
  { japanese: '感じる', pronunciation: 'kanjiru', translation: 'feel, sense' },
  { japanese: '生きる', pronunciation: 'ikiru', translation: 'live (one\'s life)' },
  { japanese: '動かす', pronunciation: 'ugokasu', translation: 'move (something)' },
  { japanese: '壊れる', pronunciation: 'kowareru', translation: 'break, break down' },
  { japanese: '復習', pronunciation: 'fukushuu', translation: 'review' },
  { japanese: '眉', pronunciation: 'mayu', translation: 'eyebrow' },
  { japanese: '客', pronunciation: 'kyaku', translation: 'visitor, customer' },
  { japanese: '机', pronunciation: 'tsukue', translation: 'desk' },
  { japanese: '風呂', pronunciation: 'furo', translation: 'bath' },
  { japanese: '湯', pronunciation: 'yu', translation: 'hot water' },
  { japanese: 'ぬるい', pronunciation: 'nurui', translation: 'tepid, lukewarm' },
  { japanese: '風邪薬', pronunciation: 'kazegusuri', translation: 'cold medicine' },
  { japanese: '靴下', pronunciation: 'kutsushita', translation: 'socks' },
  { japanese: 'タバコ', pronunciation: 'tabako', translation: 'tobacco, cigarette' },
  { japanese: 'アイスコーヒー', pronunciation: 'aisuko-hi-', translation: 'iced coffee' },
  { japanese: '天ぷら', pronunciation: 'tempura', translation: 'Japanese deep-fried food' },
  { japanese: '肉', pronunciation: 'niku', translation: 'flesh, meat' },
  { japanese: '昨夜', pronunciation: 'sakuya', translation: 'last night, last evening (colloquial)' },
  { japanese: '流行る', pronunciation: 'hayaru', translation: 'be in fashion, be popular' },
  { japanese: '連れて来る', pronunciation: 'tsuretekuru', translation: 'bring (a person)' },
  { japanese: '方', pronunciation: 'kata', translation: 'person (polite form)' },
  { japanese: '零', pronunciation: 'rei', translation: 'zero' },
  { japanese: '雲', pronunciation: 'kumo', translation: 'cloud' },
  { japanese: '空', pronunciation: 'sora', translation: 'sky' },
  { japanese: '人気', pronunciation: 'ninki', translation: 'popularity' },
  // ... (other flashcards)
];

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    width: '100%',
    maxWidth: '400px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#4f46e5',
  },
  iconButton: {
    fontSize: '1.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '0.5rem',
  },
  select: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #d1d5db',
  },
  flashcard: {
    backgroundColor: '#e0e7ff',
    border: '2px solid #a5b4fc',
    borderRadius: '8px',
    padding: '2rem',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '1.5rem',
    transition: 'transform 0.3s',
  },
  japaneseText: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: '0.5rem',
  },
  pronunciationText: {
    fontSize: '1.25rem',
    color: '#6366f1',
  },
  translationText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#4338ca',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  incorrectButton: {
    backgroundColor: '#ef4444',
    color: 'white',
  },
  correctButton: {
    backgroundColor: '#10b981',
    color: 'white',
  },
  flipButton: {
    backgroundColor: '#d1d5db',
    color: '#4b5563',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '100%',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  closeButton: {
    backgroundColor: '#4f46e5',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentSet, setCurrentSet] = useState([]);
  const [setNumber, setSetNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [dailyScores, setDailyScores] = useState({});
  const [showStats, setShowStats] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cardOrder, setCardOrder] = useState('random');
  const [difficulty, setDifficulty] = useState('all');

  const totalSets = Math.ceil(allFlashcards.length / 20);

  useEffect(() => {
    loadSet(1);
    loadDailyScores();
  }, []);

  const loadDailyScores = () => {
    const storedScores = localStorage.getItem('dailyScores');
    if (storedScores) {
      setDailyScores(JSON.parse(storedScores));
    }
  };

  const saveDailyScore = () => {
    const today = new Date().toISOString().split('T')[0];
    const newDailyScores = { ...dailyScores };
    if (!newDailyScores[today]) {
      newDailyScores[today] = {};
    }
    if (!newDailyScores[today][setNumber] || score > newDailyScores[today][setNumber]) {
      newDailyScores[today][setNumber] = score;
    }
    setDailyScores(newDailyScores);
    localStorage.setItem('dailyScores', JSON.stringify(newDailyScores));
  };

  const loadSet = (setNum) => {
    if (attempted > 0) {
      saveDailyScore();
    }

    const startIndex = (setNum - 1) * 20;
    const endIndex = Math.min(startIndex + 20, allFlashcards.length);
    let newSet = allFlashcards.slice(startIndex, endIndex);

    if (cardOrder === 'random') {
      newSet = newSet.sort(() => Math.random() - 0.5);
    }

    if (difficulty !== 'all') {
      // This is a placeholder for difficulty filtering
      // You would need to implement a way to track card difficulty
      newSet = newSet.filter(card => card.difficulty === difficulty);
    }

    setCurrentSet(newSet);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setSetNumber(setNum);
    setScore(0);
    setAttempted(0);
  };

  const nextCard = () => {
    if (currentCardIndex < currentSet.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      saveDailyScore();
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswer = (correct) => {
    if (correct) {
      setScore(score + 1);
    }
    setAttempted(attempted + 1);
    nextCard();
  };

  const currentCard = currentSet[currentCardIndex];

  const renderStats = () => (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2 style={styles.modalTitle}>Your Progress</h2>
        <div>
          <h3 style={{...styles.modalTitle, fontSize: '1.25rem'}}>Daily Scores</h3>
          {Object.entries(dailyScores).map(([date, sets]) => (
            <div key={date} style={{marginBottom: '1rem'}}>
              <p style={{fontWeight: 'bold'}}>{date}</p>
              {Object.entries(sets).map(([set, score]) => (
                <p key={set}>Set {set}: {score}/20</p>
              ))}
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowStats(false)}
          style={styles.closeButton}
        >
          Close
        </button>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2 style={styles.modalTitle}>Settings</h2>
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem'}}>Card Order</label>
          <select
            value={cardOrder}
            onChange={(e) => setCardOrder(e.target.value)}
            style={styles.select}
          >
            <option value="random">Random</option>
            <option value="sequential">Sequential</option>
          </select>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem'}}>Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={styles.select}
          >
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
          onClick={() => setShowSettings(false)}
          style={styles.closeButton}
        >
          Save and Close
        </button>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Japanese Flashcards</h1>
          <div>
            <button onClick={() => setShowStats(true)} style={styles.iconButton}>
              📊
            </button>
            <button onClick={() => setShowSettings(true)} style={styles.iconButton}>
              ⚙️
            </button>
          </div>
        </div>
        <div style={{textAlign: 'center', marginBottom: '1rem'}}>
          <p>Set {setNumber} of {totalSets} - Card {currentCardIndex + 1} of {currentSet.length}</p>
          <p style={{fontSize: '1.25rem', fontWeight: 'bold'}}>Score: {score}/{attempted}</p>
        </div>
        <select 
          value={setNumber} 
          onChange={(e) => loadSet(Number(e.target.value))}
          style={styles.select}
        >
          {[...Array(totalSets)].map((_, i) => {
            const setNum = i + 1;
            const today = new Date().toISOString().split('T')[0];
            const todayScore = dailyScores[today]?.[setNum] || 'No attempts';
            return (
              <option key={setNum} value={setNum}>
                Set {setNum} - Today's Best: {todayScore}/20
              </option>
            );
          })}
        </select>
        <div 
          onClick={flipCard}
          style={styles.flashcard}
        >
          {isFlipped ? (
            <p style={styles.translationText}>{currentCard?.translation}</p>
          ) : (
            <>
              <p style={styles.japaneseText}>{currentCard?.japanese}</p>
              <p style={styles.pronunciationText}>{currentCard?.pronunciation}</p>
            </>
          )}
        </div>
        <div style={styles.buttonContainer}>
          <button 
            onClick={() => handleAnswer(false)} 
            style={{...styles.button, ...styles.incorrectButton}}
          >
            Incorrect
          </button>
          <button
            onClick={flipCard}
            style={{...styles.button, ...styles.flipButton}}
          >
            👁️
          </button>
          <button 
            onClick={() => handleAnswer(true)} 
            style={{...styles.button, ...styles.correctButton}}
          >
            Correct
          </button>
        </div>
      </div>
      {showStats && renderStats()}
      {showSettings && renderSettings()}
    </div>
  );
}

export default App;