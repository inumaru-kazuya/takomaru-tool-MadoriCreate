// ============ 北接道テンプレート ============
// 玄関が北側にあるテンプレート (approach: "N")
// 北玄関は1Fの北側に玄関、南側にLDKを配置するパターンが多い
// 詳細は docs/template-workflow.md を参照

window.TEMPLATES_NORTH = [
  // -------- T06: 30坪標準 (8x8) --------
  {
    id: "T06", name: "北玄関30坪 標準型",
    landGridW: 8, landGridH: 8,
    landRangeM: { minW: 7.0, maxW: 12.0, minH: 7.0, maxH: 12.0 },
    approach: "N",
    rooms: [
      { type: "LDK",  floor: 1, x: 0, y: 0, w: 8, h: 4, tatami: 16 },
      { type: "階段", floor: 1, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 1, x: 2, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 4, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 6, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 0, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "玄関", floor: 1, x: 2, y: 6, w: 3, h: 2, tatami: 3 },
      { type: "トイレ", floor: 1, x: 5, y: 6, w: 1, h: 2, tatami: 1 },
      { type: "物入", floor: 1, x: 6, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "寝室", floor: 2, x: 0, y: 0, w: 4, h: 4, tatami: 8, role: "main" },
      { type: "子供部屋", floor: 2, x: 4, y: 0, w: 4, h: 4, tatami: 8 },
      { type: "階段", floor: 2, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 2, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 4, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 6, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "子供部屋", floor: 2, x: 0, y: 6, w: 8, h: 2, tatami: 8 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [14, 16, 18] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- N_2F_02: 北接道35坪 標準(LDK南面・洗面LD) --------
  {
    id: "N_2F_02", name: "北玄関35坪 LDK南面・洗面LD",
    floors: 2,
    landGridW: 9, landGridH: 8,
    landRangeM: { minW: 8.0, maxW: 13.0, minH: 7.0, maxH: 12.0 },
    approach: "N",
    rooms: [
      // 1F: 北側に玄関、南側にLDK
      { type: "LDK",  floor: 1, x: 0, y: 0, w: 9, h: 4, tatami: 18 },
      { type: "階段", floor: 1, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 1, x: 2, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "洗面LD", floor: 1, x: 4, y: 4, w: 3, h: 2, tatami: 3 },
      { type: "風呂", floor: 1, x: 7, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 0, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "玄関", floor: 1, x: 2, y: 6, w: 3, h: 2, tatami: 3 },
      { type: "トイレ", floor: 1, x: 5, y: 6, w: 1, h: 2, tatami: 1 },
      { type: "物入", floor: 1, x: 6, y: 6, w: 3, h: 2, tatami: 3 },
      // 2F
      { type: "寝室", floor: 2, x: 0, y: 0, w: 5, h: 4, tatami: 10, role: "main" },
      { type: "子供部屋", floor: 2, x: 5, y: 0, w: 4, h: 4, tatami: 8 },
      { type: "階段", floor: 2, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 2, y: 4, w: 1, h: 2, tatami: 1 },
      { type: "洗面", floor: 2, x: 3, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 5, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 7, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "子供部屋", floor: 2, x: 0, y: 6, w: 9, h: 2, tatami: 9 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [16, 18, 20] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [7, 8, 10] }
    ]
  },
  // -------- N_1F_01: 平屋 / 北接道 / 10x8 --------
  {
    id: "N_1F_01", name: "北接道 平屋(LDK南面+北側玄関)",
    floors: 1,
    landGridW: 10, landGridH: 8,
    landRangeM: { minW: 9.0, maxW: 16.0, minH: 7.0, maxH: 14.0 },
    approach: "N",
    rooms: [
      // 北側 (y=6-7): 玄関ゾーン
      { type: "SC",   floor: 1, x: 0, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "玄関", floor: 1, x: 2, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 4, y: 6, w: 1, h: 2, tatami: 1 },
      { type: "風呂", floor: 1, x: 5, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 7, y: 6, w: 3, h: 2, tatami: 3 },
      // 中央 (y=4-5)
      { type: "物入", floor: 1, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 2, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 1, x: 4, y: 4, w: 3, h: 2, tatami: 3 },
      { type: "物入", floor: 1, x: 7, y: 4, w: 3, h: 2, tatami: 3 },
      // 南側 (y=0-3): LDK と 寝室
      { type: "LDK",  floor: 1, x: 0, y: 0, w: 6, h: 4, tatami: 12 },
      { type: "寝室", floor: 1, x: 6, y: 0, w: 4, h: 4, tatami: 8, role: "main" }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [12, 14, 16] },
      { match: { type: "寝室", floor: 1, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- N_3F_01: 3階建て / 北接道 / 8x8 --------
  {
    id: "N_3F_01", name: "北接道 3階建(LDK中階)",
    floors: 3,
    landGridW: 8, landGridH: 8,
    landRangeM: { minW: 7.0, maxW: 11.0, minH: 7.0, maxH: 11.0 },
    approach: "N",
    rooms: [
      // 1F: 北側に玄関、南に和室+水回り
      { type: "和室", floor: 1, x: 0, y: 0, w: 4, h: 4, tatami: 8 },
      { type: "土間", floor: 1, x: 4, y: 0, w: 4, h: 4, tatami: 8 },
      { type: "階段", floor: 1, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 2, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "洗面", floor: 1, x: 4, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 1, x: 6, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 0, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "玄関", floor: 1, x: 2, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 4, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 6, y: 6, w: 2, h: 2, tatami: 2 },
      // 2F: LDK 中心階
      { type: "LDK",  floor: 2, x: 0, y: 0, w: 8, h: 4, tatami: 16 },
      { type: "階段", floor: 2, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 2, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 4, y: 4, w: 1, h: 2, tatami: 1 },
      { type: "洗面", floor: 2, x: 5, y: 4, w: 3, h: 2, tatami: 3 },
      { type: "WS",   floor: 2, x: 0, y: 6, w: 4, h: 2, tatami: 4 },
      { type: "物入", floor: 2, x: 4, y: 6, w: 4, h: 2, tatami: 4 },
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
  }
];
