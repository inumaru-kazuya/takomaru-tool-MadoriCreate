// ============ 自動生成: 2階建てテンプレ (2m刻み 15m〜20m) ============
// 既存テンプレが手薄な「北接道大型」「東/西接道大型」を中心に補完。
// 各サイズ × 接道(S/N/E) = 4 × 3 = 12件追加。西接道は index.html 側で自動ミラー。
//
// サイズ: 15, 17, 19, 20 (m)
// レイアウト方針:
//   - 建物グリッド = round((sizeM - 4) / 0.91) で土地より約4m小さい正方形(2F分の余裕)
//   - 1F: 3-strip 構造(玄関ゾーン / 水回り+階段 / LDK)
//   - 2F: 3-strip 構造(子供部屋 / 水回り+階段 / 主寝室+子供部屋)
//   - LDK は北側(S接道)/南側(N接道)/西側(E接道)で南面採光

(function() {
  const M_PER_GRID = 0.91;
  const SIZES = [15, 17, 19, 20];

  function gridSize(sizeM) {
    // 2F は1Fよりさらに余裕を取る(建蔽率を意識)
    return Math.max(10, Math.round((sizeM - 4) / M_PER_GRID));
  }
  function landRange(sizeM) {
    return { minW: sizeM - 1, maxW: sizeM + 1, minH: sizeM - 1, maxH: sizeM + 1 };
  }
  function commonVR() {
    return [
      { match: { type: "LDK", floor: 1 }, allowedTatami: [12, 14, 16, 18, 20, 24] },
      { match: { type: "寝室", floor: 2, role: "main" }, allowedTatami: [6, 7, 8, 10] }
    ];
  }

  // ---- 南接道 2階建て ----
  function south2F(sizeM) {
    const g = gridSize(sizeM);
    const s1 = Math.max(2, Math.floor(g / 4));   // 南帯
    const s2 = Math.max(2, Math.floor(g / 4));   // 中央帯
    const sn = g - s1 - s2;                      // 北帯(LDK / 主寝室)
    const h  = Math.max(2, Math.floor(g / 4));
    const hr = g - h * 3;
    const rooms = [
      // ---- 1F ----
      // 南帯: 物入 / 玄関 / SC / 風呂
      { type: "物入", floor: 1, x: 0,   y: 0, w: h,  h: s1, tatami: h*s1/2 },
      { type: "玄関", floor: 1, x: h,   y: 0, w: h,  h: s1, tatami: h*s1/2 },
      { type: "SC",   floor: 1, x: h*2, y: 0, w: h,  h: s1, tatami: h*s1/2 },
      { type: "風呂", floor: 1, x: h*3, y: 0, w: hr, h: s1, tatami: hr*s1/2 },
      // 中央帯: 階段 / 廊下 / 洗面 / トイレ
      { type: "階段",  floor: 1, x: 0,   y: s1, w: h,  h: s2, tatami: h*s2/2 },
      { type: "廊下",  floor: 1, x: h,   y: s1, w: h,  h: s2, tatami: h*s2/2 },
      { type: "洗面",  floor: 1, x: h*2, y: s1, w: h,  h: s2, tatami: h*s2/2 },
      { type: "トイレ",floor: 1, x: h*3, y: s1, w: hr, h: s2, tatami: hr*s2/2 },
      // 北帯: LDK
      { type: "LDK", floor: 1, x: 0, y: s1+s2, w: g, h: sn, tatami: g*sn/2 },

      // ---- 2F ----
      // 南帯: 子供部屋(2列幅) / WIC / 物入
      { type: "子供部屋", floor: 2, x: 0,   y: 0, w: h*2, h: s1, tatami: h*2*s1/2 },
      { type: "WIC",      floor: 2, x: h*2, y: 0, w: h,   h: s1, tatami: h*s1/2 },
      { type: "物入",     floor: 2, x: h*3, y: 0, w: hr,  h: s1, tatami: hr*s1/2 },
      // 中央帯: 階段 / 廊下 / トイレ / 洗面
      { type: "階段",  floor: 2, x: 0,   y: s1, w: h,  h: s2, tatami: h*s2/2 },
      { type: "廊下",  floor: 2, x: h,   y: s1, w: h,  h: s2, tatami: h*s2/2 },
      { type: "トイレ",floor: 2, x: h*2, y: s1, w: h,  h: s2, tatami: h*s2/2 },
      { type: "洗面",  floor: 2, x: h*3, y: s1, w: hr, h: s2, tatami: hr*s2/2 },
      // 北帯: 主寝室(2列幅) + 子供部屋
      { type: "寝室", role: "main", floor: 2, x: 0,   y: s1+s2, w: h*2,    h: sn, tatami: h*2*sn/2 },
      { type: "子供部屋",           floor: 2, x: h*2, y: s1+s2, w: h + hr, h: sn, tatami: (h+hr)*sn/2 }
    ];
    return {
      id: `S_2F_${sizeM}M`,
      name: `南接道 2階建 ${sizeM}m前後`,
      floors: 2, approach: "S",
      landGridW: g, landGridH: g,
      landRangeM: landRange(sizeM),
      rooms, variableRooms: commonVR()
    };
  }

  // ---- 北接道 2階建て ----
  function north2F(sizeM) {
    const g = gridSize(sizeM);
    const s1 = Math.max(2, Math.floor(g / 4));   // 北帯(玄関ゾーン)
    const s2 = Math.max(2, Math.floor(g / 4));   // 中央帯
    const sn = g - s1 - s2;                      // 南帯(LDK / 主寝室)
    const h  = Math.max(2, Math.floor(g / 4));
    const hr = g - h * 3;
    const rooms = [
      // ---- 1F ----
      // 南帯: LDK
      { type: "LDK", floor: 1, x: 0, y: 0, w: g, h: sn, tatami: g*sn/2 },
      // 中央帯: 階段 / 廊下 / 洗面 / トイレ
      { type: "階段",  floor: 1, x: 0,   y: sn, w: h,  h: s2, tatami: h*s2/2 },
      { type: "廊下",  floor: 1, x: h,   y: sn, w: h,  h: s2, tatami: h*s2/2 },
      { type: "洗面",  floor: 1, x: h*2, y: sn, w: h,  h: s2, tatami: h*s2/2 },
      { type: "トイレ",floor: 1, x: h*3, y: sn, w: hr, h: s2, tatami: hr*s2/2 },
      // 北帯: 物入 / 玄関 / SC / 風呂
      { type: "物入", floor: 1, x: 0,   y: sn+s2, w: h,  h: s1, tatami: h*s1/2 },
      { type: "玄関", floor: 1, x: h,   y: sn+s2, w: h,  h: s1, tatami: h*s1/2 },
      { type: "SC",   floor: 1, x: h*2, y: sn+s2, w: h,  h: s1, tatami: h*s1/2 },
      { type: "風呂", floor: 1, x: h*3, y: sn+s2, w: hr, h: s1, tatami: hr*s1/2 },

      // ---- 2F ----
      // 南帯: 主寝室(2列幅) + 子供部屋
      { type: "寝室", role: "main", floor: 2, x: 0,   y: 0, w: h*2,    h: sn, tatami: h*2*sn/2 },
      { type: "子供部屋",           floor: 2, x: h*2, y: 0, w: h + hr, h: sn, tatami: (h+hr)*sn/2 },
      // 中央帯: 階段 / 廊下 / トイレ / 洗面
      { type: "階段",  floor: 2, x: 0,   y: sn, w: h,  h: s2, tatami: h*s2/2 },
      { type: "廊下",  floor: 2, x: h,   y: sn, w: h,  h: s2, tatami: h*s2/2 },
      { type: "トイレ",floor: 2, x: h*2, y: sn, w: h,  h: s2, tatami: h*s2/2 },
      { type: "洗面",  floor: 2, x: h*3, y: sn, w: hr, h: s2, tatami: hr*s2/2 },
      // 北帯: 子供部屋(2列幅) / WIC / 物入
      { type: "子供部屋", floor: 2, x: 0,   y: sn+s2, w: h*2, h: s1, tatami: h*2*s1/2 },
      { type: "WIC",      floor: 2, x: h*2, y: sn+s2, w: h,   h: s1, tatami: h*s1/2 },
      { type: "物入",     floor: 2, x: h*3, y: sn+s2, w: hr,  h: s1, tatami: hr*s1/2 }
    ];
    return {
      id: `N_2F_${sizeM}M`,
      name: `北接道 2階建 ${sizeM}m前後`,
      floors: 2, approach: "N",
      landGridW: g, landGridH: g,
      landRangeM: landRange(sizeM),
      rooms, variableRooms: commonVR()
    };
  }

  // ---- 東接道 2階建て(西接道は自動ミラー) ----
  function east2F(sizeM) {
    const g = gridSize(sizeM);
    const s1 = Math.max(2, Math.floor(g / 4));   // 東列(玄関ゾーン)幅
    const s2 = Math.max(2, Math.floor(g / 4));   // 中央列幅
    const sw = g - s1 - s2;                      // 西列(LDK)幅
    const v  = Math.max(2, Math.floor(g / 4));
    const vr = g - v * 3;
    const rooms = [
      // ---- 1F ----
      // 西列: LDK
      { type: "LDK", floor: 1, x: 0, y: 0, w: sw, h: g, tatami: sw*g/2 },
      // 中央列: 階段 / 廊下 / 洗面 / トイレ
      { type: "階段",  floor: 1, x: sw, y: 0,    w: s2, h: v,  tatami: s2*v/2 },
      { type: "廊下",  floor: 1, x: sw, y: v,    w: s2, h: v,  tatami: s2*v/2 },
      { type: "洗面",  floor: 1, x: sw, y: v*2,  w: s2, h: v,  tatami: s2*v/2 },
      { type: "トイレ",floor: 1, x: sw, y: v*3,  w: s2, h: vr, tatami: s2*vr/2 },
      // 東列: 物入 / 玄関 / SC / 風呂
      { type: "物入", floor: 1, x: sw+s2, y: 0,    w: s1, h: v,  tatami: s1*v/2 },
      { type: "玄関", floor: 1, x: sw+s2, y: v,    w: s1, h: v,  tatami: s1*v/2 },
      { type: "SC",   floor: 1, x: sw+s2, y: v*2,  w: s1, h: v,  tatami: s1*v/2 },
      { type: "風呂", floor: 1, x: sw+s2, y: v*3,  w: s1, h: vr, tatami: s1*vr/2 },

      // ---- 2F ----
      // 西列: 主寝室(2行高) + 子供部屋
      { type: "寝室", role: "main", floor: 2, x: 0, y: 0,   w: sw, h: v*2,    tatami: sw*v*2/2 },
      { type: "子供部屋",           floor: 2, x: 0, y: v*2, w: sw, h: v + vr, tatami: sw*(v+vr)/2 },
      // 中央列: 階段 / 廊下 / トイレ / 洗面
      { type: "階段",  floor: 2, x: sw, y: 0,    w: s2, h: v,  tatami: s2*v/2 },
      { type: "廊下",  floor: 2, x: sw, y: v,    w: s2, h: v,  tatami: s2*v/2 },
      { type: "トイレ",floor: 2, x: sw, y: v*2,  w: s2, h: v,  tatami: s2*v/2 },
      { type: "洗面",  floor: 2, x: sw, y: v*3,  w: s2, h: vr, tatami: s2*vr/2 },
      // 東列: 子供部屋(2行高) / WIC / 物入
      { type: "子供部屋", floor: 2, x: sw+s2, y: 0,    w: s1, h: v*2,    tatami: s1*v*2/2 },
      { type: "WIC",      floor: 2, x: sw+s2, y: v*2,  w: s1, h: v,      tatami: s1*v/2 },
      { type: "物入",     floor: 2, x: sw+s2, y: v*3,  w: s1, h: vr,     tatami: s1*vr/2 }
    ];
    return {
      id: `E_2F_${sizeM}M`,
      name: `東接道 2階建 ${sizeM}m前後`,
      floors: 2, approach: "E",
      landGridW: g, landGridH: g,
      landRangeM: landRange(sizeM),
      rooms, variableRooms: commonVR()
    };
  }

  // 各 window.TEMPLATES_* 配列に追加
  window.TEMPLATES_SOUTH     = window.TEMPLATES_SOUTH     || [];
  window.TEMPLATES_NORTH     = window.TEMPLATES_NORTH     || [];
  window.TEMPLATES_EAST_WEST = window.TEMPLATES_EAST_WEST || [];
  for (const s of SIZES) {
    window.TEMPLATES_SOUTH.push(south2F(s));
    window.TEMPLATES_NORTH.push(north2F(s));
    window.TEMPLATES_EAST_WEST.push(east2F(s));
  }
})();
