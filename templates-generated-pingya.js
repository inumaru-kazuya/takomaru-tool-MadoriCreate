// ============ 自動生成: 平屋テンプレ (2m刻み 15m〜30m) ============
// 既存の templates-south.js / templates-north.js / templates-east-west.js を読み込んだ後に
// このファイルを実行することで、各 window.TEMPLATES_* 配列に平屋テンプレを追加する。
//
// サイズ: 15, 17, 19, 21, 23, 25, 27, 29, 30 (m)
// 各サイズ × 接道(S/N/E) = 9 × 3 = 27件追加。西接道は index.html 側で自動ミラー生成。
//
// レイアウト方針:
//   - 建物グリッド = round((sizeM - 2) / 0.91) で土地より約2m小さい正方形
//   - 4分割の strip 構造(玄関/水回り/寝室/LDK)で大小どんなサイズにも対応
//   - LDK は北側(S接道)/南側(N接道)/西側(E接道)に寄せて採光を確保

(function() {
  const M_PER_GRID = 0.91;
  const SIZES = [15, 17, 19, 21, 23, 25, 27, 29, 30];

  function gridSize(sizeM) {
    // 建物は土地より約2m小さく(セットバック分)
    return Math.max(12, Math.round((sizeM - 2) / M_PER_GRID));
  }
  function landRange(sizeM) {
    // 各テンプレは ±1m の幅でマッチ(隣接サイズと部分重複し、近い方が選ばれる)
    return { minW: sizeM - 1, maxW: sizeM + 1, minH: sizeM - 1, maxH: sizeM + 1 };
  }
  // 平屋共通: LDK/主寝室の畳数バリエーション(大きな建物にも対応)
  function commonVR() {
    return [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [12, 14, 16, 18, 20, 24] },
      { match: { type: "寝室", floor: 1, role: "main" }, allowedTatami: [6, 7, 8, 10] }
    ];
  }

  // ---- 南接道 平屋 ----
  // 玄関を南(y=0)に、LDKを北(y=g-sn)に。
  function southPingya(sizeM) {
    const g = gridSize(sizeM);
    const s = Math.max(2, Math.floor(g / 4));      // 各帯の高さ
    const sn = g - s * 3;                          // 北帯(LDK)の高さ
    const h = Math.max(2, Math.floor(g / 4));      // 各列の幅
    const hr = g - h * 3;                          // 東端の余り幅
    const rooms = [
      // 南帯(y=0..s): 物入 / 玄関 / SC / 風呂
      { type: "物入", floor: 1, x: 0,       y: 0, w: h,  h: s, tatami: h*s/2 },
      { type: "玄関", floor: 1, x: h,       y: 0, w: h,  h: s, tatami: h*s/2 },
      { type: "SC",   floor: 1, x: h*2,     y: 0, w: h,  h: s, tatami: h*s/2 },
      { type: "風呂", floor: 1, x: h*3,     y: 0, w: hr, h: s, tatami: hr*s/2 },
      // 中央南帯(y=s..2s): WIC / 廊下 / 洗面 / トイレ
      { type: "WIC",   floor: 1, x: 0,       y: s,   w: h,  h: s, tatami: h*s/2 },
      { type: "廊下",  floor: 1, x: h,       y: s,   w: h,  h: s, tatami: h*s/2 },
      { type: "洗面",  floor: 1, x: h*2,     y: s,   w: h,  h: s, tatami: h*s/2 },
      { type: "トイレ",floor: 1, x: h*3,     y: s,   w: hr, h: s, tatami: hr*s/2 },
      // 中央北帯(y=2s..3s): 主寝室 / 子供部屋
      { type: "寝室", role: "main", floor: 1, x: 0,    y: s*2, w: h*2,    h: s, tatami: h*2*s/2 },
      { type: "子供部屋",           floor: 1, x: h*2,  y: s*2, w: h + hr, h: s, tatami: (h+hr)*s/2 },
      // 北帯(y=3s..g): LDK
      { type: "LDK",  floor: 1, x: 0, y: s*3, w: g, h: sn, tatami: g*sn/2 }
    ];
    return {
      id: `S_1F_${sizeM}M`,
      name: `南接道 平屋 ${sizeM}m前後`,
      floors: 1, approach: "S",
      landGridW: g, landGridH: g,
      landRangeM: landRange(sizeM),
      rooms, variableRooms: commonVR()
    };
  }

  // ---- 北接道 平屋 ----
  // 玄関を北(y=g-s)に、LDKを南(y=0)に。
  function northPingya(sizeM) {
    const g = gridSize(sizeM);
    const s = Math.max(2, Math.floor(g / 4));
    const sn = g - s * 3;
    const h = Math.max(2, Math.floor(g / 4));
    const hr = g - h * 3;
    const rooms = [
      // 南帯(y=0..sn): LDK
      { type: "LDK", floor: 1, x: 0, y: 0, w: g, h: sn, tatami: g*sn/2 },
      // 中央南帯(y=sn..sn+s): 主寝室 / 子供部屋
      { type: "寝室", role: "main", floor: 1, x: 0,   y: sn, w: h*2,    h: s, tatami: h*2*s/2 },
      { type: "子供部屋",           floor: 1, x: h*2, y: sn, w: h + hr, h: s, tatami: (h+hr)*s/2 },
      // 中央北帯(y=sn+s..sn+2s): WIC / 廊下 / 洗面 / トイレ
      { type: "WIC",   floor: 1, x: 0,    y: sn+s, w: h,  h: s, tatami: h*s/2 },
      { type: "廊下",  floor: 1, x: h,    y: sn+s, w: h,  h: s, tatami: h*s/2 },
      { type: "洗面",  floor: 1, x: h*2,  y: sn+s, w: h,  h: s, tatami: h*s/2 },
      { type: "トイレ",floor: 1, x: h*3,  y: sn+s, w: hr, h: s, tatami: hr*s/2 },
      // 北帯(y=sn+2s..g): 物入 / 玄関 / SC / 風呂
      { type: "物入", floor: 1, x: 0,    y: sn+s*2, w: h,  h: s, tatami: h*s/2 },
      { type: "玄関", floor: 1, x: h,    y: sn+s*2, w: h,  h: s, tatami: h*s/2 },
      { type: "SC",   floor: 1, x: h*2,  y: sn+s*2, w: h,  h: s, tatami: h*s/2 },
      { type: "風呂", floor: 1, x: h*3,  y: sn+s*2, w: hr, h: s, tatami: hr*s/2 }
    ];
    return {
      id: `N_1F_${sizeM}M`,
      name: `北接道 平屋 ${sizeM}m前後`,
      floors: 1, approach: "N",
      landGridW: g, landGridH: g,
      landRangeM: landRange(sizeM),
      rooms, variableRooms: commonVR()
    };
  }

  // ---- 東接道 平屋(西接道は自動ミラー) ----
  // 玄関を東(x=g-s)に、LDKを西(x=0)に。
  function eastPingya(sizeM) {
    const g = gridSize(sizeM);
    const s = Math.max(2, Math.floor(g / 4));      // 各列の幅
    const sw = g - s * 3;                          // 西列(LDK)の幅
    const v = Math.max(2, Math.floor(g / 4));      // 各行の高さ
    const vr = g - v * 3;                          // 南端の余り高さ
    const rooms = [
      // 西列(x=0..sw): LDK
      { type: "LDK", floor: 1, x: 0, y: 0, w: sw, h: g, tatami: sw*g/2 },
      // 中央西列(x=sw..sw+s): 主寝室 / 子供部屋(縦に並べる)
      { type: "寝室", role: "main", floor: 1, x: sw, y: 0,   w: s, h: v*2,    tatami: s*v*2/2 },
      { type: "子供部屋",           floor: 1, x: sw, y: v*2, w: s, h: v + vr, tatami: s*(v+vr)/2 },
      // 中央東列(x=sw+s..sw+2s): WIC / 廊下 / 洗面 / トイレ
      { type: "WIC",   floor: 1, x: sw+s, y: 0,     w: s, h: v,  tatami: s*v/2 },
      { type: "廊下",  floor: 1, x: sw+s, y: v,     w: s, h: v,  tatami: s*v/2 },
      { type: "洗面",  floor: 1, x: sw+s, y: v*2,   w: s, h: v,  tatami: s*v/2 },
      { type: "トイレ",floor: 1, x: sw+s, y: v*3,   w: s, h: vr, tatami: s*vr/2 },
      // 東列(x=sw+2s..g): 物入 / 玄関 / SC / 風呂
      { type: "物入", floor: 1, x: sw+s*2, y: 0,   w: s, h: v,  tatami: s*v/2 },
      { type: "玄関", floor: 1, x: sw+s*2, y: v,   w: s, h: v,  tatami: s*v/2 },
      { type: "SC",   floor: 1, x: sw+s*2, y: v*2, w: s, h: v,  tatami: s*v/2 },
      { type: "風呂", floor: 1, x: sw+s*2, y: v*3, w: s, h: vr, tatami: s*vr/2 }
    ];
    return {
      id: `E_1F_${sizeM}M`,
      name: `東接道 平屋 ${sizeM}m前後`,
      floors: 1, approach: "E",
      landGridW: g, landGridH: g,
      landRangeM: landRange(sizeM),
      rooms, variableRooms: commonVR()
    };
  }

  // 各 window.TEMPLATES_* 配列に追加
  window.TEMPLATES_SOUTH      = window.TEMPLATES_SOUTH      || [];
  window.TEMPLATES_NORTH      = window.TEMPLATES_NORTH      || [];
  window.TEMPLATES_EAST_WEST  = window.TEMPLATES_EAST_WEST  || [];
  for (const s of SIZES) {
    window.TEMPLATES_SOUTH.push(southPingya(s));
    window.TEMPLATES_NORTH.push(northPingya(s));
    window.TEMPLATES_EAST_WEST.push(eastPingya(s));
  }
})();
