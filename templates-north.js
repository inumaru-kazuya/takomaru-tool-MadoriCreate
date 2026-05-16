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
  }
];
