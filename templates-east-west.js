// ============ 東西接道テンプレート ============
// 玄関が東または西側にあるテンプレート (approach: "E" or "W")
// 東玄関のテンプレートは左右反転(ミラー)で西玄関版が自動生成される
// 詳細は docs/template-workflow.md を参照

window.TEMPLATES_EAST_WEST = [
  // -------- T07: 32坪東玄関標準型 (8x8) --------
  // 西玄関版は index.html 内の mirrorTemplate() で自動生成される
  {
    id: "T07", name: "東玄関32坪 標準型",
    landGridW: 8, landGridH: 8,
    landRangeM: { minW: 7.0, maxW: 12.0, minH: 7.0, maxH: 12.0 },
    approach: "E",
    rooms: [
      { type: "LDK",  floor: 1, x: 0, y: 0, w: 4, h: 8, tatami: 16 },
      { type: "洗面", floor: 1, x: 4, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 1, x: 4, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 1, x: 4, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 4, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 6, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "風呂", floor: 1, x: 6, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "SC",   floor: 1, x: 6, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "玄関", floor: 1, x: 6, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "寝室", floor: 2, x: 0, y: 0, w: 4, h: 4, tatami: 8, role: "main" },
      { type: "子供部屋", floor: 2, x: 0, y: 4, w: 4, h: 4, tatami: 8 },
      { type: "トイレ", floor: 2, x: 4, y: 0, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 2, x: 4, y: 2, w: 2, h: 2, tatami: 2 },
      { type: "WIC",  floor: 2, x: 4, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 2, x: 4, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "子供部屋", floor: 2, x: 6, y: 0, w: 2, h: 4, tatami: 4 },
      { type: "WIC",  floor: 2, x: 6, y: 4, w: 2, h: 4, tatami: 4 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [14, 16, 18] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- E01: 横玄関35坪 1Fリビング 2F4部屋 --------
  {
    id: "E01", name: "横玄関35坪 1Fリビング 2F4部屋",
    landGridW: 7, landGridH: 10,
    landRangeM: { minW: 7.28, maxW: 10.92, minH: 7.28, maxH: 10.92 },
    approach: "E",
    rooms: [
      { type: "風呂", floor: 1, x: 0, y: 8, w: 2, h: 2, tatami: 2 },
      { type: "LDK", floor: 1, x: 0, y: 0, w: 7, h: 4, tatami: 14 },
      { type: "玄関", floor: 1, x: 4.25, y: 4, w: 2.75, h: 2, tatami: 2.75 },
      { type: "階段", floor: 2, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 1, x: 0, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 1, x: 2, y: 8, w: 1, h: 2, tatami: 1 },
      { type: "WIC", floor: 2, x: 4, y: 4, w: 3, h: 2, tatami: 3 },
      { type: "寝室", floor: 2, x: 3, y: 0, w: 4, h: 4, tatami: 8 },
      { type: "子供部屋", floor: 2, x: 4, y: 6, w: 3, h: 4, tatami: 6 },
      { type: "子供部屋", floor: 2, x: 0, y: 0, w: 3, h: 4, tatami: 6 },
      { type: "和室", floor: 1, x: 3, y: 6, w: 4, h: 3, tatami: 6 },
      { type: "物入", floor: 1, x: 3, y: 9, w: 4, h: 1, tatami: 2 },
      { type: "洗面LD", floor: 1, x: 0, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "廊下", floor: 1, x: 2, y: 6, w: 1, h: 2, tatami: 1 },
      { type: "ホール", floor: 1, x: 2, y: 4, w: 2.25, h: 2, tatami: 2.25 },
      { type: "子供部屋", floor: 2, x: 0, y: 7, w: 4, h: 3, tatami: 6 },
      { type: "トイレ", floor: 2, x: 0, y: 6, w: 2, h: 1, tatami: 1 },
      { type: "廊下", floor: 2, x: 2, y: 4, w: 2, h: 3, tatami: 3 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [14, 16, 18] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- E02: 横玄関31坪 2階水回り --------
  {
    id: "E02", name: "横玄関31坪 2階水回り",
    landGridW: 10.5, landGridH: 6,
    landRangeM: { minW: 7.28, maxW: 10.92, minH: 7.28, maxH: 10.92 },
    approach: "E",
    rooms: [
      { type: "LDK", floor: 1, x: 0, y: 0, w: 10.5, h: 4, tatami: 21 },
      { type: "階段", floor: 2, x: 2.75, y: 4, w: 2.25, h: 2, tatami: 2.25 },
      { type: "階段", floor: 1, x: 2.75, y: 4, w: 2.25, h: 2, tatami: 2.25 },
      { type: "トイレ", floor: 1, x: 6.25, y: 4, w: 1, h: 2, tatami: 1 },
      { type: "洗面", floor: 1, x: 5, y: 4, w: 1.25, h: 2, tatami: 1.25 },
      { type: "子供部屋", floor: 2, x: 0, y: 2, w: 2.75, h: 4, tatami: 5.5 },
      { type: "玄関", floor: 1, x: 8.5, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 7.25, y: 4, w: 1.25, h: 2, tatami: 1.25 },
      { type: "WS", floor: 1, x: 0, y: 4, w: 2.75, h: 2, tatami: 2.75 },
      { type: "WIC", floor: 2, x: 0, y: 0, w: 2.75, h: 2, tatami: 2.75 },
      { type: "子供部屋", floor: 2, x: 2.75, y: 0, w: 3.25, h: 3, tatami: 4.875 },
      { type: "寝室", floor: 2, x: 7.25, y: 0, w: 3.25, h: 4, tatami: 6.5 },
      { type: "物入", floor: 2, x: 6, y: 0, w: 1.25, h: 3, tatami: 1.875 },
      { type: "風呂", floor: 2, x: 8.25, y: 4, w: 2.25, h: 2, tatami: 2.25 },
      { type: "洗面LD", floor: 2, x: 6, y: 4, w: 2.25, h: 2, tatami: 2.25 },
      { type: "トイレ", floor: 2, x: 5, y: 4, w: 1, h: 2, tatami: 1 },
      { type: "廊下", floor: 2, x: 2.75, y: 3, w: 4.5, h: 1, tatami: 2.25 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [16, 18, 20] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  },
  // -------- E03: 横玄関39坪 和室付き 子供部屋連結 --------
  {
    id: "E03", name: "横玄関39坪 和室付き 子供部屋連結",
    landGridW: 11, landGridH: 8,
    landRangeM: { minW: 7.28, maxW: 10.92, minH: 7.28, maxH: 10.92 },
    approach: "E",
    rooms: [
      { type: "風呂", floor: 1, x: 0, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "LDK", floor: 1, x: 0, y: 0, w: 7, h: 5, tatami: 17.5 },
      { type: "玄関", floor: 1, x: 8.75, y: 4, w: 1.25, h: 2, tatami: 1.25 },
      { type: "トイレ", floor: 1, x: 5, y: 7, w: 2, h: 1, tatami: 1 },
      { type: "洗面LD", floor: 1, x: 2, y: 6, w: 2, h: 2, tatami: 2 },
      { type: "子供部屋", floor: 2, x: 0, y: 5, w: 4, h: 3, tatami: 6 },
      { type: "子供部屋", floor: 2, x: 0, y: 0, w: 3, h: 5, tatami: 7.5 },
      { type: "和室", floor: 1, x: 7, y: 0, w: 4, h: 3, tatami: 6 },
      { type: "子供部屋", floor: 2, x: 4, y: 0, w: 3, h: 4, tatami: 6 },
      { type: "子供部屋", floor: 2, x: 3, y: 0, w: 1, h: 3, tatami: 1.5 },
      { type: "廊下", floor: 2, x: 3, y: 3, w: 1, h: 2, tatami: 1 },
      { type: "階段", floor: 2, x: 5, y: 5, w: 2, h: 2, tatami: 2 },
      { type: "階段", floor: 1, x: 5, y: 5, w: 2, h: 2, tatami: 2 },
      { type: "トイレ", floor: 2, x: 5, y: 7, w: 2, h: 1, tatami: 1 },
      { type: "廊下", floor: 2, x: 4, y: 5, w: 1, h: 3, tatami: 1.5 },
      { type: "廊下", floor: 2, x: 4, y: 4, w: 3, h: 1, tatami: 1.5 },
      { type: "寝室", floor: 2, x: 7, y: 0, w: 4, h: 4, tatami: 8, role: "main" },
      { type: "WS", floor: 2, x: 7, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "WIC", floor: 2, x: 9, y: 4, w: 2, h: 2, tatami: 2 },
      { type: "ホール", floor: 1, x: 7, y: 4, w: 1.75, h: 2, tatami: 1.75 },
      { type: "物入", floor: 1, x: 7, y: 3, w: 2, h: 1, tatami: 1 },
      { type: "物入", floor: 1, x: 9, y: 3, w: 2, h: 1, tatami: 1 },
      { type: "廊下", floor: 1, x: 4, y: 5, w: 1, h: 3, tatami: 1.5 },
      { type: "物入", floor: 1, x: 0, y: 5, w: 4, h: 1, tatami: 2 }
    ],
    variableRooms: [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [16, 18, 20] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8] }
    ]
  }
];
