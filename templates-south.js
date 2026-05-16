// ============ 南接道テンプレート ============
// 玄関が南側にあるテンプレート (approach: "S")
// 新規追加時: ここに { id, name, landGridW, landGridH, landRangeM, approach: "S", rooms, variableRooms } 形式で追加
// 詳細は docs/template-workflow.md を参照

window.TEMPLATES_SOUTH = [
  // -------- T01: 32坪標準型 (8x8) --------
  {
    id: "T01", name: "南玄関32坪 標準型",
    landGridW: 8, landGridH: 8,
    landRangeM: { minW: 7.0, maxW: 12.0, minH: 7.0, maxH: 12.0 },
    approach: "S",
    rooms: [
      { type: "玄関", floor: 1, x: 0, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 2, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 4, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 6, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 1, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 4, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 1, x: 6, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "LDK",  floor: 1, x: 0, y: 4, w: 8, h: 4, tatami: 16 },
      { type: "子供部屋", floor: 2, x: 0, y: 0, w: 8, h: 2, tatami: 8 },
      { type: "階段", floor: 2, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 4, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 6, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "寝室", floor: 2, x: 0, y: 4, w: 4, h: 4, tatami: 8, role: "main" },
      { type: "子供部屋", floor: 2, x: 4, y: 4, w: 4, h: 4, tatami: 8 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [14, 16, 18] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- T02: 40坪 和室+土間 (10x8) --------
  {
    id: "T02", name: "南玄関40坪 和室+土間",
    landGridW: 10, landGridH: 8,
    landRangeM: { minW: 9.0, maxW: 14.0, minH: 7.0, maxH: 12.0 },
    approach: "S",
    rooms: [
      { type: "玄関", floor: 1, x: 0, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "土間", floor: 1, x: 2, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 4, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "洗面LD", floor: 1, x: 6, y: 0, w: 3, h: 2, tatami: 3 },
      { type: "トイレ", floor: 1, x: 9, y: 0, w: 1, h: 2, tatami: 1 },
      { type: "階段", floor: 1, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 2, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "廊下", floor: 1, x: 3, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "和室", floor: 1, x: 4, y: 2, w: 6, h: 2, tatami: 6 },
      { type: "LDK",  floor: 1, x: 0, y: 4, w: 8, h: 4, tatami: 16 },
      { type: "ヌック", floor: 1, x: 8, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "WS",   floor: 1, x: 8, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "子供部屋", floor: 2, x: 0, y: 0, w: 5, h: 2, tatami: 5 },
      { type: "WIC",  floor: 2, x: 5, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "WS",   floor: 2, x: 7, y: 0, w: 3, h: 2, tatami: 3 },
      { type: "階段", floor: 2, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 4, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "廊下", floor: 2, x: 5, y: 2, w: 3, h: 2, tatami: 3 },
      { type: "物入", floor: 2, x: 8, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "寝室", floor: 2, x: 0, y: 4, w: 4, h: 4, tatami: 8, role: "main" },
      { type: "子供部屋", floor: 2, x: 4, y: 4, w: 3, h: 4, tatami: 6 },
      { type: "子供部屋", floor: 2, x: 7, y: 4, w: 3, h: 4, tatami: 6 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [16, 18, 20] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 8, 10] }
    ]
  },
  // -------- T03: 25坪コンパクト (7x8) --------
  {
    id: "T03", name: "南玄関25坪 コンパクト",
    landGridW: 7, landGridH: 8,
    landRangeM: { minW: 6.5, maxW: 9.0, minH: 7.0, maxH: 10.0 },
    approach: "S",
    rooms: [
      { type: "SC",   floor: 1, x: 0, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "玄関", floor: 1, x: 2, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 4, y: 0, w: 1, h: 2, tatami: 1 },
      { type: "風呂", floor: 1, x: 5, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 1, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 2, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "洗面", floor: 1, x: 3, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 1, x: 5, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "LDK",  floor: 1, x: 0, y: 4, w: 7, h: 4, tatami: 14 },
      { type: "子供部屋", floor: 2, x: 0, y: 0, w: 4, h: 2, tatami: 4 },
      { type: "WIC",  floor: 2, x: 4, y: 0, w: 3, h: 2, tatami: 3 },
      { type: "階段", floor: 2, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 2, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "トイレ", floor: 2, x: 3, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 2, x: 5, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "寝室", floor: 2, x: 0, y: 4, w: 4, h: 4, tatami: 8, role: "main" },
      { type: "子供部屋", floor: 2, x: 4, y: 4, w: 3, h: 4, tatami: 6 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [12, 14] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- T04: 35坪標準 (9x8) --------
  {
    id: "T04", name: "南玄関35坪 標準型",
    landGridW: 9, landGridH: 8,
    landRangeM: { minW: 8.5, maxW: 13.0, minH: 7.0, maxH: 11.0 },
    approach: "S",
    rooms: [
      { type: "SC",   floor: 1, x: 0, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "玄関", floor: 1, x: 2, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 4, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 6, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 1, x: 8, y: 0, w: 1, h: 2, tatami: 1 },
      { type: "階段", floor: 1, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 4, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 1, x: 6, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 1, x: 8, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "LDK",  floor: 1, x: 0, y: 4, w: 9, h: 4, tatami: 18 },
      { type: "子供部屋", floor: 2, x: 0, y: 0, w: 5, h: 2, tatami: 5 },
      { type: "WIC",  floor: 2, x: 5, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 2, x: 7, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 2, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 4, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 6, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 2, x: 8, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "寝室", floor: 2, x: 0, y: 4, w: 4, h: 4, tatami: 8, role: "main" },
      { type: "子供部屋", floor: 2, x: 4, y: 4, w: 3, h: 4, tatami: 6 },
      { type: "子供部屋", floor: 2, x: 7, y: 4, w: 2, h: 4, tatami: 4 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [16, 18, 20] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [7, 8, 10] }
    ]
  },
  // -------- T05: 45坪広めゆとり型 (11x8) --------
  {
    id: "T05", name: "南玄関45坪 広めゆとり型",
    landGridW: 11, landGridH: 8,
    landRangeM: { minW: 10.5, maxW: 15.0, minH: 7.0, maxH: 12.0 },
    approach: "S",
    rooms: [
      { type: "玄関", floor: 1, x: 0, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 2, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 4, y: 0, w: 1, h: 2, tatami: 1 },
      { type: "風呂", floor: 1, x: 5, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "洗面LD", floor: 1, x: 7, y: 0, w: 3, h: 2, tatami: 3 },
      { type: "物入", floor: 1, x: 10, y: 0, w: 1, h: 2, tatami: 1 },
      { type: "階段", floor: 1, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 1, x: 4, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "和室", floor: 1, x: 5, y: 2, w: 6, h: 2, tatami: 6 },
      { type: "LDK",  floor: 1, x: 0, y: 4, w: 9, h: 4, tatami: 18 },
      { type: "ヌック", floor: 1, x: 9, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "WS",   floor: 1, x: 9, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "子供部屋", floor: 2, x: 0, y: 0, w: 5, h: 2, tatami: 5 },
      { type: "WIC",  floor: 2, x: 5, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 2, x: 7, y: 0, w: 4, h: 2, tatami: 4 },
      { type: "階段", floor: 2, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 4, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "廊下", floor: 2, x: 5, y: 2, w: 3, h: 2, tatami: 3 },
      { type: "物入", floor: 2, x: 8, y: 2, w: 3, h: 2, tatami: 3 },
      { type: "寝室", floor: 2, x: 0, y: 4, w: 5, h: 4, tatami: 10, role: "main" },
      { type: "子供部屋", floor: 2, x: 5, y: 4, w: 3, h: 4, tatami: 6 },
      { type: "子供部屋", floor: 2, x: 8, y: 4, w: 3, h: 4, tatami: 6 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [16, 18, 20, 24] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [8, 10] }
    ]
  },
  // -------- T08: 横長46坪 1階主寝室・吹抜 (madree.jp 3703 のコンセプトをベースに) --------
  // 特徴: 1階主寝室 / 横長 / LDK南面 / アイランドキッチン想定 / 大土間収納 / ファミリークローゼット / 2階吹抜
  // 想定家族: 共働き夫婦+子2人(将来子3人可能)、1階主寝室で将来も使いやすい設計
  {
    id: "T08", name: "横長南玄関46坪 1階主寝室・吹抜",
    landGridW: 14, landGridH: 8,
    landRangeM: { minW: 13.0, maxW: 25.0, minH: 7.0, maxH: 16.0 },
    approach: "S",
    rooms: [
      { type: "LDK",  floor: 1, x: 0, y: 0, w: 9, h: 4, tatami: 18 },
      { type: "WS",   floor: 1, x: 9, y: 0, w: 2, h: 4, tatami: 4 },
      { type: "和室", floor: 1, x: 11, y: 0, w: 3, h: 4, tatami: 6 },
      { type: "寝室", floor: 1, x: 0, y: 4, w: 4, h: 4, tatami: 8, role: "main" },
      { type: "廊下", floor: 1, x: 4, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 1, x: 6, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 8, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 10, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "LD",   floor: 1, x: 12, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "玄関", floor: 1, x: 4, y: 6, w: 3, h: 2, tatami: 3 },
      { type: "SC",   floor: 1, x: 7, y: 6, w: 3, h: 2, tatami: 3 },
      { type: "トイレ", floor: 1, x: 10, y: 6, w: 1, h: 2, tatami: 1 },
      { type: "WIC",  floor: 1, x: 11, y: 6, w: 3, h: 2, tatami: 3 },
      { type: "吹抜", floor: 2, x: 0, y: 0, w: 9, h: 4, tatami: 0 },
      { type: "ホール", floor: 2, x: 9, y: 0, w: 5, h: 4, tatami: 10 },
      { type: "子供部屋", floor: 2, x: 0, y: 4, w: 4, h: 4, tatami: 8 },
      { type: "物入", floor: 2, x: 4, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 2, x: 6, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 8, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 10, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 12, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 2, x: 4, y: 6, w: 6, h: 2, tatami: 6 },
      { type: "子供部屋", floor: 2, x: 10, y: 6, w: 4, h: 2, tatami: 4 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [16, 18, 20, 24] },
      { match: { type: "寝室", floor: 1, role: "main" }, allowedTatami: [6, 7, 8, 10] }
    ]
  },
  // -------- T09: 南玄関44坪　LDK南向き　和室　ワークスペースあり --------
  {
    id: "T09", name: "南玄関44坪　LDK南向き　和室　ワークスペースあり",
    landGridW: 12.5, landGridH: 8.5,
    landRangeM: { minW: 12.5, maxW: 16.5, minH: 8.5, maxH: 12.5 },
    approach: "S",
    rooms: [
      { type: "玄関", floor: 1, x: 0, y: 0, w: 2, h: 2.5, tatami: 2.5 },
      { type: "SC", floor: 1, x: 2, y: 0, w: 1.5, h: 2.5, tatami: 1.875 },
      { type: "ホール", floor: 1, x: 0, y: 2.5, w: 2, h: 2.25, tatami: 2.25 },
      { type: "洗面", floor: 1, x: 2, y: 2.5, w: 1.5, h: 1.25, tatami: 0.9375 },
      { type: "トイレ", floor: 1, x: 0, y: 4.75, w: 2, h: 1.25, tatami: 1.25 },
      { type: "WS", floor: 1, x: 0, y: 6, w: 3.5, h: 2.5, tatami: 4.375 },
      { type: "廊下", floor: 1, x: 2, y: 3.75, w: 1.5, h: 2.25, tatami: 1.6875 },
      { type: "和室", floor: 1, x: 3.5, y: 4.75, w: 3, h: 3.75, tatami: 5.625 },
      { type: "階段", floor: 1, x: 6.5, y: 6, w: 2, h: 2.5, tatami: 2.5 },
      { type: "階段", floor: 2, x: 6.5, y: 6, w: 2, h: 2.5, tatami: 2.5 },
      { type: "風呂", floor: 1, x: 8.5, y: 6, w: 2, h: 2.5, tatami: 2.5 },
      { type: "洗面LD", floor: 1, x: 10.5, y: 4.75, w: 2, h: 3.75, tatami: 3.75 },
      { type: "物入", floor: 1, x: 6.5, y: 4.75, w: 1, h: 1.25, tatami: 0.625 },
      { type: "廊下", floor: 1, x: 7.5, y: 4.75, w: 3, h: 1.25, tatami: 1.875 },
      { type: "LDK", floor: 1, x: 3.5, y: 0, w: 9, h: 4.75, tatami: 21.375 },
      { type: "WS", floor: 2, x: 0, y: 4.75, w: 2.25, h: 3.75, tatami: 4.21875 },
      { type: "WIC", floor: 2, x: 2.25, y: 4.75, w: 2, h: 3.75, tatami: 3.75 },
      { type: "寝室", floor: 2, x: 0, y: 0, w: 4.25, h: 4.75, tatami: 10.09375, role: "main" },
      { type: "子供部屋", floor: 2, x: 9.5, y: 3.75, w: 3, h: 4.75, tatami: 7.125 },
      { type: "子供部屋", floor: 2, x: 8.25, y: 0, w: 4.25, h: 3.75, tatami: 7.96875 },
      { type: "WS", floor: 2, x: 4.25, y: 5.5, w: 2.25, h: 3, tatami: 3.375 },
      { type: "トイレ", floor: 2, x: 8.5, y: 5.5, w: 1, h: 3, tatami: 1.5 },
      { type: "廊下", floor: 2, x: 4.25, y: 3.75, w: 5.25, h: 1.75, tatami: 4.59375 },
      { type: "廊下", floor: 2, x: 4.25, y: 0, w: 4, h: 3.75, tatami: 7.5 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [16, 18, 20, 24] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8, 10] }
    ]
  },
  // -------- S_1F_01: 平屋 / 南接道 / 10x8 (約40坪、LDK+主寝室+収納) --------
  {
    id: "S_1F_01", name: "南接道 平屋(LDK南面+北側主寝室)",
    floors: 1,
    landGridW: 10, landGridH: 8,
    landRangeM: { minW: 9.0, maxW: 16.0, minH: 7.0, maxH: 14.0 },
    approach: "S",
    rooms: [
      // 南側(y=0-1): 玄関・水回り
      { type: "物入", floor: 1, x: 0, y: 0, w: 3, h: 2, tatami: 3 },
      { type: "玄関", floor: 1, x: 3, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 5, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 7, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 9, y: 0, w: 1, h: 2, tatami: 1 },
      // 中央(y=2-3): 洗面・WIC・廊下
      { type: "WIC",  floor: 1, x: 0, y: 2, w: 3, h: 2, tatami: 3 },
      { type: "ホール", floor: 1, x: 3, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 5, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 1, x: 7, y: 2, w: 3, h: 2, tatami: 3 },
      // 北側(y=4-7): LDK と 主寝室
      { type: "LDK",  floor: 1, x: 0, y: 4, w: 6, h: 4, tatami: 12 },
      { type: "寝室", floor: 1, x: 6, y: 4, w: 4, h: 4, tatami: 8, role: "main" }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [12, 14, 16] },
      { match: { type: "寝室", floor: 1, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- S_3F_01: 3階建て / 南接道 / 8x8 (狭小地3F) --------
  {
    id: "S_3F_01", name: "南接道 3階建(狭小地・縦動線)",
    floors: 3,
    landGridW: 8, landGridH: 8,
    landRangeM: { minW: 7.0, maxW: 11.0, minH: 7.0, maxH: 11.0 },
    approach: "S",
    rooms: [
      // 1F: 玄関+SC+水回り+階段+ガレージ的な土間
      { type: "玄関", floor: 1, x: 0, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 2, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 4, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 6, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 1, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 4, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 1, x: 6, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "和室", floor: 1, x: 0, y: 4, w: 4, h: 4, tatami: 8 },
      { type: "土間", floor: 1, x: 4, y: 4, w: 4, h: 4, tatami: 8 },
      // 2F: LDK 中心階
      { type: "LDK",  floor: 2, x: 0, y: 0, w: 8, h: 4, tatami: 16 },
      { type: "階段", floor: 2, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 2, y: 4, w: 1, h: 2, tatami: 1 },
      { type: "洗面", floor: 2, x: 3, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 5, y: 4, w: 3, h: 2, tatami: 3 },
      { type: "廊下", floor: 2, x: 0, y: 6, w: 4, h: 2, tatami: 4 },
      { type: "WS",   floor: 2, x: 4, y: 6, w: 4, h: 2, tatami: 4 },
      // 3F: 寝室階
      { type: "寝室", floor: 3, x: 0, y: 0, w: 4, h: 4, tatami: 8, role: "main" },
      { type: "子供部屋", floor: 3, x: 4, y: 0, w: 4, h: 4, tatami: 8 },
      { type: "階段", floor: 3, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 3, x: 2, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 3, x: 4, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 3, x: 6, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "子供部屋", floor: 3, x: 0, y: 6, w: 8, h: 2, tatami: 8 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 2 }, allowedTatami: [14, 16, 18] },
      { match: { type: "寝室", floor: 3, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- S_CY_01: 中庭付き / 南接道 / 2F (北東に中庭で採光) --------
  {
    id: "S_CY_01", name: "南接道 中庭付き2F(L字風)",
    floors: 2,
    landGridW: 10, landGridH: 8,
    landRangeM: { minW: 9.0, maxW: 14.0, minH: 7.0, maxH: 12.0 },
    approach: "S",
    rooms: [
      // 1F: 玄関南、中庭北東
      { type: "玄関", floor: 1, x: 0, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 2, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 4, y: 0, w: 1, h: 2, tatami: 1 },
      { type: "風呂", floor: 1, x: 5, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 7, y: 0, w: 3, h: 2, tatami: 3 },
      { type: "階段", floor: 1, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "和室", floor: 1, x: 4, y: 2, w: 3, h: 2, tatami: 3 },
      { type: "廊下", floor: 1, x: 7, y: 2, w: 3, h: 2, tatami: 3 },
      { type: "LDK",  floor: 1, x: 0, y: 4, w: 7, h: 4, tatami: 14 },
      // 中庭(1Fの北東隅) — 建物がL字に見える
      { type: "中庭", floor: 1, x: 7, y: 4, w: 3, h: 4 },
      // 2F: 中庭の上は吹き抜けにせず室内(典型的なL字屋根)
      { type: "子供部屋", floor: 2, x: 0, y: 0, w: 4, h: 2, tatami: 4 },
      { type: "WIC",  floor: 2, x: 4, y: 0, w: 3, h: 2, tatami: 3 },
      { type: "物入", floor: 2, x: 7, y: 0, w: 3, h: 2, tatami: 3 },
      { type: "階段", floor: 2, x: 0, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 2, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 4, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "洗面", floor: 2, x: 5, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 7, y: 2, w: 3, h: 2, tatami: 3 },
      { type: "寝室", floor: 2, x: 0, y: 4, w: 4, h: 4, tatami: 8, role: "main" },
      // 中庭は2F側を吹き抜けにせず室内(子供部屋)で覆う
      { type: "子供部屋", floor: 2, x: 4, y: 4, w: 3, h: 4, tatami: 6 },
      { type: "子供部屋", floor: 2, x: 7, y: 4, w: 3, h: 4, tatami: 6 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [12, 14, 16] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- S_PK_01: 駐車場付き / 南接道 / 2F --------
  {
    id: "S_PK_01", name: "南接道 2F(玄関横に駐車場)",
    floors: 2,
    landGridW: 10, landGridH: 8,
    landRangeM: { minW: 9.0, maxW: 15.0, minH: 7.0, maxH: 12.0 },
    approach: "S",
    rooms: [
      // 1F南端に駐車場(玄関の隣)
      { type: "駐車場", floor: 1, x: 0, y: 0, w: 3, h: 6 },
      // 玄関を駐車場の東隣
      { type: "玄関", floor: 1, x: 3, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 5, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 7, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 9, y: 0, w: 1, h: 2, tatami: 1 },
      { type: "階段", floor: 1, x: 3, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 5, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 7, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 1, x: 9, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "LDK",  floor: 1, x: 3, y: 4, w: 7, h: 4, tatami: 14 },
      { type: "WIC",  floor: 1, x: 0, y: 6, w: 3, h: 2, tatami: 3 },
      // 2F: 寝室階
      { type: "子供部屋", floor: 2, x: 0, y: 0, w: 5, h: 2, tatami: 5 },
      { type: "WIC",  floor: 2, x: 5, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 2, x: 7, y: 0, w: 3, h: 2, tatami: 3 },
      { type: "階段", floor: 2, x: 3, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 0, y: 2, w: 3, h: 2, tatami: 3 },
      { type: "トイレ", floor: 2, x: 5, y: 2, w: 1, h: 2, tatami: 1 },
      { type: "洗面", floor: 2, x: 6, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "物入", floor: 2, x: 8, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "寝室", floor: 2, x: 0, y: 4, w: 5, h: 4, tatami: 10, role: "main" },
      { type: "子供部屋", floor: 2, x: 5, y: 4, w: 5, h: 4, tatami: 10 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [12, 14, 16] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [8, 10] }
    ]
  }
];
