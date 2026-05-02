// ═══════════════════════════════════════════════════════════════════════
//  THE SLAYGROUNDS — map.js  v3.0
//  Massive world (7200×7200), stone paths, colored trees, statues, ruins
//  WORLD = 7200  |  Recommended camera zoom = 0.88
//  In your main game: const WORLD = window.SlayMap.WORLD_SIZE;
//                     this.cameras.main.setZoom(window.SlayMap.ZOOM);
// ═══════════════════════════════════════════════════════════════════════

window.SlayMap = {

  WORLD_SIZE : 7200,   // expose so main game can set WORLD = SlayMap.WORLD_SIZE
  ZOOM       : 0.88,   // default camera zoom (matches reference screenshots)

  // ─────────────────────────────────────────────────────────────────────
  //  TEXTURE FACTORY  (call once from BootScene before building the map)
  // ─────────────────────────────────────────────────────────────────────
  createTextures(scene) {
    this._makeColorTree(scene, 'ctree_pink', 0x4a1f35, 0x64304a, 0x7a3e58, 0x8f526a, 145);
    this._makeColorTree(scene, 'ctree_blue', 0x14263c, 0x1b3450, 0x24456a, 0x2d557c, 142);
    this._makeColorTree(scene, 'ctree_teal', 0x143a3a, 0x1b4e4d, 0x266263, 0x2d7574, 140);
    this._makeColorTree(scene, 'ctree_green',0x1f3a28, 0x2c5136, 0x396844, 0x4a7d55, 150);
    this._makeWolfStatue(scene);
    this._makeStoneBlock(scene);
    this._makeTorch(scene);
    this._makeGravestone(scene);
  },

  _makeColorTree(scene, key, c1, c2, c3, c4, R) {
    const g = scene.add.graphics();
    const D = R * 2 + 20;
    // Shadow under tree
    g.fillStyle(0x000000, 0.35); g.fillEllipse(R + 4, D - 8, R * 1.6, R * 0.35);
    // Outer dark layer
    g.fillStyle(c1); g.fillCircle(R, R, R);
    // Mid layer
    g.fillStyle(c2); g.fillCircle(R - 8, R - 8, R * 0.82);
    // Inner bright layer
    g.fillStyle(c3); g.fillCircle(R - 18, R - 18, R * 0.60);
    // Highlight
    g.fillStyle(c4); g.fillCircle(R - 28, R - 28, R * 0.35);
    // Top gleam
    g.fillStyle(0xffffff, 0.08); g.fillCircle(R - 36, R - 36, R * 0.15);
    // Trunk
    g.fillStyle(0x1a0d06); g.fillRect(R - 8, R + R * 0.7, 16, 24);
    g.fillStyle(0x2a1a0a); g.fillRect(R - 5, R + R * 0.7, 8, 22);
    g.generateTexture(key, D, D + 10);
    g.destroy();
  },

  _makeWolfStatue(scene) {
    const g = scene.add.graphics();
    const W = 48, H = 64;
    // Pedestal base
    g.fillStyle(0x404040); g.fillRect(4, 48, 40, 14);
    g.fillStyle(0x505050); g.fillRect(6, 46, 36, 4);
    g.fillStyle(0x323232); g.fillRect(4, 60, 40, 2);
    // Body
    g.fillStyle(0x484848); g.fillRect(14, 26, 20, 22);
    g.fillStyle(0x545454); g.fillRect(16, 28, 16, 18);
    // Legs
    g.fillStyle(0x404040); g.fillRect(14, 42, 8, 8); g.fillRect(26, 42, 8, 8);
    g.fillStyle(0x383838); g.fillRect(14, 48, 8, 2); g.fillRect(26, 48, 8, 2);
    // Head
    g.fillStyle(0x4a4a4a); g.fillEllipse(24, 18, 20, 18);
    // Snout
    g.fillStyle(0x424242); g.fillRect(18, 19, 12, 8);
    g.fillStyle(0x383838); g.fillRect(20, 21, 8, 5);
    // Ears
    g.fillStyle(0x3c3c3c); g.fillTriangle(15,12, 12,4, 20,10);
    g.fillStyle(0x3c3c3c); g.fillTriangle(33,12, 36,4, 28,10);
    g.fillStyle(0x2a2a2a); g.fillTriangle(16,11, 14,5, 20,10);
    g.fillStyle(0x2a2a2a); g.fillTriangle(32,11, 34,5, 28,10);
    // Eyes glow
    g.fillStyle(0x88aacc); g.fillRect(17, 17, 4, 3); g.fillRect(27, 17, 4, 3);
    g.fillStyle(0xaaccff); g.fillRect(18, 17, 2, 2); g.fillRect(28, 17, 2, 2);
    // Neck/collar
    g.fillStyle(0x383838); g.fillRect(16, 24, 16, 4);
    g.fillStyle(0x505050); g.fillRect(17, 25, 14, 2);
    // Highlights
    g.fillStyle(0x686868, 0.6); g.fillRect(16, 28, 4, 12);
    g.generateTexture('wolf_statue', W, H);
    g.destroy();
  },

  _makeStoneBlock(scene) {
    const g = scene.add.graphics();
    const S = 44;
    // Base shadow
    g.fillStyle(0x000000, 0.4); g.fillRect(4, 4, S, S);
    // Main face
    g.fillStyle(0x585858); g.fillRect(0, 0, S, S);
    // Top face (isometric hint)
    g.fillStyle(0x6a6a6a); g.fillRect(0, 0, S, 8);
    // Left face shade
    g.fillStyle(0x484848); g.fillRect(0, 8, 8, S - 8);
    // Surface cracks
    g.lineStyle(1, 0x3a3a3a, 0.7);
    g.lineBetween(10, 12, 28, 22); g.lineBetween(14, 28, 34, 20);
    g.lineBetween(22, 8, 30, 18);
    // Highlight edges
    g.fillStyle(0x7a7a7a); g.fillRect(0, 0, S, 2); g.fillRect(0, 0, 2, S);
    g.fillStyle(0x303030); g.fillRect(0, S - 2, S, 2); g.fillRect(S - 2, 0, 2, S);
    g.generateTexture('stone_block', S, S);
    g.destroy();
  },

  _makeTorch(scene) {
    const g = scene.add.graphics();
    // Post
    g.fillStyle(0x3a2a10); g.fillRect(4, 12, 6, 22);
    g.fillStyle(0x4a3a18); g.fillRect(5, 13, 4, 20);
    // Bracket
    g.fillStyle(0x2a2218); g.fillRect(2, 20, 10, 4);
    // Bowl
    g.fillStyle(0x605030); g.fillRect(2, 8, 10, 8);
    g.fillStyle(0x806840); g.fillRect(3, 9, 8, 6);
    // Flame
    g.fillStyle(0xff6600); g.fillEllipse(7, 5, 8, 10);
    g.fillStyle(0xffaa00); g.fillEllipse(7, 4, 5, 7);
    g.fillStyle(0xffee44); g.fillEllipse(7, 3, 3, 4);
    g.generateTexture('torch', 14, 34);
    g.destroy();
  },

  _makeGravestone(scene) {
    const g = scene.add.graphics();
    // Base
    g.fillStyle(0x3a3a3a); g.fillRect(2, 28, 22, 6);
    g.fillStyle(0x484848); g.fillRect(3, 29, 20, 4);
    // Stone body
    g.fillStyle(0x424242); g.fillRect(4, 8, 18, 22);
    g.fillStyle(0x505050); g.fillRect(5, 9, 16, 20);
    // Rounded top
    g.fillStyle(0x424242); g.fillEllipse(13, 9, 18, 14);
    g.fillStyle(0x505050); g.fillEllipse(13, 8, 14, 10);
    // Cross engraving
    g.fillStyle(0x383838); g.fillRect(11, 12, 4, 10); g.fillRect(8, 16, 10, 3);
    // Moss
    g.fillStyle(0x1a3a22, 0.6); g.fillRect(5, 22, 6, 3); g.fillRect(14, 18, 5, 2);
    g.generateTexture('gravestone', 26, 34);
    g.destroy();
  },

  // ─────────────────────────────────────────────────────────────────────
  //  GROUND LAYER
  // ─────────────────────────────────────────────────────────────────────
  buildGround(scene) {
    const W = WORLD, g = scene.add.graphics().setDepth(-1);
    g.fillStyle(0x07303a, 1); g.fillRect(0, 0, W, W);

    for (let i = 0; i < 360; i++) {
      const x = Phaser.Math.Between(0, W), y = Phaser.Math.Between(0, W);
      const rx = Phaser.Math.Between(180, 780), ry = Phaser.Math.Between(110, 520);
      const c = [0x093b45, 0x0a4048, 0x083640, 0x0b4752, 0x092f38][Phaser.Math.Between(0, 4)];
      g.fillStyle(c, Phaser.Math.FloatBetween(0.025, 0.09));
      g.fillEllipse(x, y, rx, ry);
    }

    const c = W / 2;
    [1000, 1950, 3000, 4200].forEach((sz, idx) => {
      const a = [0.08, 0.055, 0.038, 0.026][idx];
      g.lineStyle(idx === 0 ? 14 : 8, 0x2aa4b0, a);
      g.strokePoints([{ x: c, y: c - sz }, { x: c + sz, y: c }, { x: c, y: c + sz }, { x: c - sz, y: c }], true);
      g.lineStyle(3, 0x1b5f67, a * 0.7);
      g.strokePoints([{ x: c, y: c - sz + 70 }, { x: c + sz - 70, y: c }, { x: c, y: c + sz - 70 }, { x: c - sz + 70, y: c }], true);
    });

    for (let i = 0; i < 700; i++) {
      const x = Phaser.Math.Between(0, W), y = Phaser.Math.Between(0, W);
      const s = Phaser.Math.Between(1, 3);
      g.fillStyle(Phaser.Math.Between(0, 10) < 8 ? 0x25a7a8 : 0x67d5d7, Phaser.Math.FloatBetween(0.01, 0.04));
      g.fillRect(x, y, s, s);
    }

    for (let i = 0; i < 140; i++) {
      const x = Phaser.Math.Between(0, W), y = Phaser.Math.Between(0, W);
      const len = Phaser.Math.Between(10, 46), ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      g.lineStyle(1, 0x0e242b, Phaser.Math.FloatBetween(0.12, 0.3));
      g.lineBetween(x, y, x + Math.cos(ang) * len, y + Math.sin(ang) * len);
    }

    for (let i = 0; i < 280; i++) {
      const x = Phaser.Math.Between(0, W), y = Phaser.Math.Between(0, W);
      g.fillStyle(0x0a2026, Phaser.Math.FloatBetween(0.18, 0.42));
      g.fillRect(x, y, Phaser.Math.Between(3, 10), Phaser.Math.Between(1, 4));
    }
  },

  // ─────────────────────────────────────────────────────────────────────
  //  SPAWN SANCTUM (center platform)
  // ─────────────────────────────────────────────────────────────────────
  buildSpawnSanctum(scene) {
    const c = WORLD / 2;
    scene.add.circle(c, c, 334, 0x1a444c, 0.06).setDepth(0.42);
    scene.add.circle(c, c, 236, 0x123238, 0.08).setDepth(0.43);
    scene.add.circle(c, c, 172, 0x0c2126, 0.34).setDepth(0.44);
    const g = scene.add.graphics().setDepth(1.14);
    const d = r => [{x:c,y:c-r},{x:c+r,y:c},{x:c,y:c+r},{x:c-r,y:c}];
    const poly = (pts, color, alpha, stroke, width, strokeAlpha) => {
      g.fillStyle(color, alpha); g.fillPoints(pts, true);
      if (stroke && width > 0) { g.lineStyle(width, stroke, strokeAlpha); g.strokePoints(pts, true); }
    };
    poly(d(132), 0x4f5861, 0.98, 0x2b3239, 5, 0.96);
    poly(d(94), 0x69717a, 0.98, 0x88919a, 3, 0.62);
    poly(d(62), 0x3c444d, 0.98, 0x232a31, 3, 0.95);
    poly(d(36), 0x272e36, 0.98, 0x171e24, 2, 0.98);
    poly(d(20), 0x1d232b, 1, 0x141a20, 1, 0.98);
    const edgeChunks = [
      [[0,-173],[20,-158],[4,-132],[-18,-148]],
      [[40,-156],[66,-138],[47,-118],[22,-134]],
      [[82,-130],[104,-111],[89,-90],[65,-108]],
      [[120,-96],[142,-74],[126,-54],[102,-74]],
      [[152,-52],[176,-32],[159,-12],[138,-28]],
      [[165,-6],[190,13],[170,33],[149,15]],
      [[154,41],[178,63],[160,84],[139,63]],
      [[129,82],[150,108],[129,126],[108,102]],
      [[92,122],[110,149],[88,164],[70,138]],
      [[50,150],[65,179],[40,189],[26,162]],
      [[8,168],[22,198],[-4,204],[-16,174]],
      [[-34,160],[-18,190],[-46,197],[-58,169]],
      [[-76,136],[-58,164],[-82,181],[-99,154]],
      [[-114,106],[-92,132],[-111,153],[-132,126]],
      [[-146,69],[-123,93],[-140,116],[-164,90]],
      [[-164,25],[-141,47],[-156,71],[-182,45]],
      [[-169,-17],[-148,3],[-166,27],[-190,5]],
      [[-156,-56],[-136,-33],[-154,-10],[-176,-31]],
      [[-133,-95],[-112,-72],[-132,-50],[-154,-73]],
      [[-100,-130],[-79,-108],[-98,-84],[-121,-106]],
      [[-61,-154],[-43,-130],[-64,-113],[-84,-135]],
      [[-16,-168],[2,-146],[-18,-124],[-38,-147]],
      [[28,-164],[45,-140],[24,-123],[6,-145]],
      [[70,-148],[88,-126],[67,-107],[48,-130]],
      [[108,-121],[129,-100],[109,-78],[87,-99]],
      [[140,-86],[162,-63],[142,-42],[121,-62]],
      [[168,-45],[193,-24],[173,-2],[151,-23]],
      [[176,4],[202,24],[181,46],[159,24]],
      [[164,50],[188,74],[168,94],[148,72]],
      [[138,93],[161,116],[141,137],[120,114]],
      [[104,127],[124,152],[102,170],[82,145]],
      [[63,154],[80,181],[56,194],[41,167]]
    ];
    edgeChunks.forEach(chunk => poly(chunk.map(([x,y]) => ({x:c + x, y:c + y})), 0x3e4650, 0.96, 0x222a31, 1, 0.8));
    const innerBreaks = [
      [[0,-132],[12,-116],[-8,-106],[-18,-121]],
      [[101,0],[118,14],[101,28],[86,12]],
      [[0,132],[16,118],[-2,104],[-15,118]],
      [[-101,0],[-86,16],[-100,32],[-117,14]],
      [[61,-62],[78,-48],[64,-30],[47,-44]],
      [[-63,62],[-47,79],[-64,94],[-81,76]],
      [[62,60],[80,77],[62,94],[45,78]],
      [[-62,-61],[-45,-44],[-62,-27],[-80,-43]]
    ];
    innerBreaks.forEach(chunk => poly(chunk.map(([x,y]) => ({x:c + x, y:c + y})), 0x1f262d, 0.92, 0x131920, 1, 0.7));
    g.lineStyle(2, 0x273038, 0.8);
    [
      [8,4,78,32],[3,-6,66,54],[-7,8,54,72],[-3,-7,42,88],[10,-4,72,12],[-9,6,30,66],
      [4,2,-54,42],[-6,4,-72,14],[6,-5,-58,-38],[-4,2,-78,-12],[-5,-7,-38,-66],[7,-4,-12,-80]
    ].forEach(([sx,sy,ex,ey]) => g.lineBetween(c + sx, c + sy, c + ex, c + ey));
    const rubble = [
      [180,-102,17,10,26],[161,-82,14,8,61],[145,-56,13,8,11],[136,-24,11,8,21],[136,14,10,8,76],[149,50,12,8,34],
      [165,88,14,9,49],[116,135,11,8,15],[78,156,12,8,84],[36,170,10,8,40],[-8,176,10,8,14],[-54,167,12,8,66],
      [-95,147,13,8,31],[-132,115,14,8,12],[-159,76,16,10,73],[-176,33,14,9,25],[-179,-10,13,8,50],[-166,-53,15,9,70],
      [-142,-93,14,8,8],[-108,-129,13,8,63],[-68,-156,12,8,24],[-24,-174,10,8,43],[20,-170,10,8,9],[63,-158,12,8,86],
      [103,-136,13,8,52],[143,-108,14,8,5],[190,-78,10,8,66],[195,18,10,8,37],[-194,24,10,8,71],[-190,-58,10,8,19]
    ];
    rubble.forEach(([ox,oy,w,h,rot]) => scene.add.rectangle(c + ox, c + oy, w, h, 0x414a53, 0.9).setDepth(1.12).setAngle(rot));
  },

  // ─────────────────────────────────────────────────────────────────────
  //  STONE PATH NETWORK  (the iconic stone-tile roads from Image 2)
  // ─────────────────────────────────────────────────────────────────────
  buildStonePaths(scene) {
    const c = WORLD / 2;
    const g = scene.add.graphics().setDepth(0.6);
    const ARM = 3100;
    const RW  = 184;
    const BW  = 136;
    const TILE = 48;

    // ── Draw a rectangular road block with stone tile pattern ──
    const drawRoad = (x, y, w, h) => {
      const cols = Math.ceil(w / TILE);
      const rows = Math.ceil(h / TILE);
      g.fillStyle(0x3e4a54); g.fillRect(x, y, w, h);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const tx = x + col * TILE;
          const ty = y + row * TILE;
          const tw = Math.min(TILE - 2, w - col * TILE - 1);
          const th = Math.min(TILE - 2, h - row * TILE - 1);
          if (tw <= 0 || th <= 0) continue;

          const base = (row + col) % 2 === 0 ? 0x75808b : 0x68737d;
          const shade = ((row * 7 + col * 5) % 15 === 0) ? 0x5c6670 : base;
          g.fillStyle(shade); g.fillRect(tx + 1, ty + 1, tw, th);
          g.fillStyle(0x8d98a2); g.fillRect(tx + 1, ty + 1, tw, 2);
          g.fillStyle(0x808b95); g.fillRect(tx + 1, ty + 3, 2, th - 2);
          g.fillStyle(0x434d57); g.fillRect(tx + 1, ty + th - 1, tw, 1);
          g.fillStyle(0x47515b); g.fillRect(tx + tw - 1, ty + 1, 1, th - 1);
          if ((row * 5 + col * 3) % 13 === 0) {
            g.fillStyle(0x3f4851, 0.7);
            g.fillRect(tx + Phaser.Math.Between(4, Math.max(5, tw - 8)), ty + Phaser.Math.Between(4, Math.max(5, th - 8)), Phaser.Math.Between(2, 4), Phaser.Math.Between(2, 4));
          }
          if ((row * 11 + col * 7) % 27 === 0) {
            g.lineStyle(1, 0x505963, 0.45);
            const cx1 = tx + Phaser.Math.Between(4, tw - 4);
            const cy1 = ty + Phaser.Math.Between(4, th - 4);
            g.lineBetween(cx1, cy1, cx1 + Phaser.Math.Between(-8, 8), cy1 + Phaser.Math.Between(-8, 8));
          }
        }
      }
    };

    // ── Secondary ring roads at ~1800px from center ──
    const RING = 1800;
    // North horizontal branch
    drawRoad(c - 2000, c - RING - BW / 2, 4000, BW);
    // South horizontal branch
    drawRoad(c - 2000, c + RING - BW / 2, 4000, BW);
    // West vertical branch
    drawRoad(c - RING - BW / 2, c - 2000, BW, 4000);
    // East vertical branch
    drawRoad(c + RING - BW / 2, c - 2000, BW, 4000);
  },

  _placeTorch(scene, x, y) {
    scene.add.image(x, y, 'torch').setDepth(2.0).setScale(0.85);
    // Glow circle under torch
    scene.add.circle(x + 7, y + 20, 22, 0xff8800, 0.06).setDepth(1.9);
  },

  // ─────────────────────────────────────────────────────────────────────
  //  LARGE COLORED CIRCLE TREES (the big pink/blue/teal spheres)
  // ─────────────────────────────────────────────────────────────────────
  buildColorTrees(scene) {
    const c = WORLD / 2;
    // Color tree placements: [angle, distance, type, scale]
    const placements = [];

    // 8 major clusters radiating outward
    for (let i = 0; i < 8; i++) {
      const baseAng = (Math.PI * 2 * i) / 8;
      const clusterTypes = ['ctree_pink', 'ctree_blue', 'ctree_teal', 'ctree_green'];

      // Primary large tree in each octant at ~1500px
      const d1 = Phaser.Math.Between(1400, 1700);
      const ang1 = baseAng + Phaser.Math.FloatBetween(-0.2, 0.2);
      placements.push({ x: c + Math.cos(ang1) * d1, y: c + Math.sin(ang1) * d1, type: clusterTypes[i % 4], sc: Phaser.Math.FloatBetween(0.9, 1.2) });

      // Secondary at ~2500px
      const d2 = Phaser.Math.Between(2300, 2800);
      const ang2 = baseAng + Phaser.Math.FloatBetween(-0.3, 0.3);
      placements.push({ x: c + Math.cos(ang2) * d2, y: c + Math.sin(ang2) * d2, type: clusterTypes[(i + 1) % 4], sc: Phaser.Math.FloatBetween(1.0, 1.35) });

      // Outer at ~3300px
      const d3 = Phaser.Math.Between(3100, 3500);
      const ang3 = baseAng + Phaser.Math.FloatBetween(-0.25, 0.25);
      placements.push({ x: c + Math.cos(ang3) * d3, y: c + Math.sin(ang3) * d3, type: clusterTypes[(i + 2) % 4], sc: Phaser.Math.FloatBetween(1.1, 1.5) });
    }

    // Extra scatter trees in between
    for (let i = 0; i < 20; i++) {
      const ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(900, 3400);
      const types = ['ctree_pink', 'ctree_blue', 'ctree_teal', 'ctree_green'];
      placements.push({
        x: c + Math.cos(ang) * dist + Phaser.Math.Between(-80, 80),
        y: c + Math.sin(ang) * dist + Phaser.Math.Between(-80, 80),
        type: types[Phaser.Math.Between(0, 3)],
        sc: Phaser.Math.FloatBetween(0.75, 1.1)
      });
    }

    // Place them (larger trees have lower depth so smaller ones appear in front)
    placements.sort((a, b) => b.sc - a.sc);
    placements.forEach(p => {
      const img = scene.add.image(p.x, p.y, p.type)
        .setScale(p.sc)
        .setDepth(2.0 + p.sc * 0.1)
        .setAlpha(Phaser.Math.FloatBetween(0.88, 1.0));
      scene.colorTreeGrp.add(img);
    });
  },

  // ─────────────────────────────────────────────────────────────────────
  //  WOLF STATUES (placed along roads and at key intersections)
  // ─────────────────────────────────────────────────────────────────────
  buildStatues(scene) {
    const c = WORLD / 2;
    // Position statues beside roads and at ring-road intersections
    const positions = [
      // Along N road
      { x: c - 280, y: c - 700 }, { x: c + 230, y: c - 1400 },
      { x: c - 280, y: c - 2100 }, { x: c + 230, y: c - 2800 },
      // Along S road
      { x: c - 280, y: c + 700 }, { x: c + 230, y: c + 1400 },
      { x: c - 280, y: c + 2200 }, { x: c + 230, y: c + 2800 },
      // Along E road
      { x: c + 700,  y: c - 280 }, { x: c + 1400, y: c + 230 },
      { x: c + 2100, y: c - 280 }, { x: c + 2800, y: c + 230 },
      // Along W road
      { x: c - 700,  y: c - 280 }, { x: c - 1400, y: c + 230 },
      { x: c - 2100, y: c - 280 }, { x: c - 2800, y: c + 230 },
      // Ring road intersections
      { x: c - 1900, y: c - 1900 }, { x: c + 1900, y: c - 1900 },
      { x: c - 1900, y: c + 1900 }, { x: c + 1900, y: c + 1900 },
    ];

    positions.forEach(pos => {
      scene.add.image(pos.x, pos.y, 'wolf_statue').setDepth(2.85).setScale(Phaser.Math.FloatBetween(0.9, 1.1));
    });
  },

  // ─────────────────────────────────────────────────────────────────────
  //  STONE BLOCK DECORATIONS (scattered cubes near roads)
  // ─────────────────────────────────────────────────────────────────────
  buildStoneBlocks(scene) {
    const c = WORLD / 2;
    const RW = 192;

    // Clusters of stone blocks beside the roads
    const roadSides = [];
    for (let d = 300; d < 3100; d += Phaser.Math.Between(180, 320)) {
      // N-S road sides
      roadSides.push({ x: c - RW / 2 - Phaser.Math.Between(20, 120), y: c - d });
      roadSides.push({ x: c + RW / 2 + Phaser.Math.Between(20, 120), y: c - d });
      roadSides.push({ x: c - RW / 2 - Phaser.Math.Between(20, 120), y: c + d });
      roadSides.push({ x: c + RW / 2 + Phaser.Math.Between(20, 120), y: c + d });
      // E-W road sides
      roadSides.push({ x: c - d, y: c - RW / 2 - Phaser.Math.Between(20, 120) });
      roadSides.push({ x: c - d, y: c + RW / 2 + Phaser.Math.Between(20, 120) });
      roadSides.push({ x: c + d, y: c - RW / 2 - Phaser.Math.Between(20, 120) });
      roadSides.push({ x: c + d, y: c + RW / 2 + Phaser.Math.Between(20, 120) });
    }

    // Random scatter blocks away from roads
    for (let i = 0; i < 80; i++) {
      const ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(400, 3400);
      roadSides.push({ x: c + Math.cos(ang) * dist, y: c + Math.sin(ang) * dist });
    }

    roadSides.forEach(pos => {
      if (Math.random() < 0.55) { // not every position gets a block
        const sc = Phaser.Math.FloatBetween(0.6, 1.1);
        const b = scene.stoneBlockGrp.create(pos.x, pos.y, 'stone_block');
        b.setScale(sc).setDepth(2.7 + sc * 0.1);
        b.refreshBody();
      }
    });
  },

  // ─────────────────────────────────────────────────────────────────────
  //  GRAVESTONES
  // ─────────────────────────────────────────────────────────────────────
  buildGravestones(scene) {
    const c = WORLD / 2;
    for (let i = 0; i < 55; i++) {
      const ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(600, 3300);
      const x = c + Math.cos(ang) * dist + Phaser.Math.Between(-60, 60);
      const y = c + Math.sin(ang) * dist + Phaser.Math.Between(-60, 60);
      scene.add.image(x, y, 'gravestone')
        .setScale(Phaser.Math.FloatBetween(0.7, 1.0))
        .setDepth(2.6)
        .setAlpha(Phaser.Math.FloatBetween(0.7, 1.0));
    }
  },

  // ─────────────────────────────────────────────────────────────────────
  //  DARK ORGANIC TREE RING (the smaller dark trees filling the forest)
  // ─────────────────────────────────────────────────────────────────────
  placeTree(scene, x, y, scale = 1) {
    const t = scene.treeGrp.create(x, y, 'tree_lg').setScale(scale).setDepth(2.8 + scale * 0.4);
    t.setCircle(20 * scale, 8 * scale, 8 * scale).refreshBody();
    return t;
  },

  buildForestRing(scene) {
    const c = WORLD / 2;
    // Inner forest ring (600–1800px from center)
    for (let i = 0; i < 55; i++) {
      const ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(600, 1800);
      const cx = c + Math.cos(ang) * dist, cy = c + Math.sin(ang) * dist;
      const count = Phaser.Math.Between(1, 3);
      for (let j = 0; j < count; j++) {
        this.placeTree(scene, cx + Phaser.Math.Between(-80, 80), cy + Phaser.Math.Between(-80, 80), Phaser.Math.FloatBetween(0.8, 1.05));
      }
    }
    // Mid ring (2000–3000px)
    for (let i = 0; i < 45; i++) {
      const ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(2000, 3000);
      const cx = c + Math.cos(ang) * dist, cy = c + Math.sin(ang) * dist;
      const count = Phaser.Math.Between(2, 4);
      for (let j = 0; j < count; j++) {
        this.placeTree(scene, cx + Phaser.Math.Between(-120, 120), cy + Phaser.Math.Between(-120, 120), Phaser.Math.FloatBetween(0.82, 1.1));
      }
    }
    // Outer wall (3200–3500px) — dense tree barrier at world edge
    for (let i = 0; i < 70; i++) {
      const ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(3100, 3500);
      this.placeTree(scene, c + Math.cos(ang) * dist, c + Math.sin(ang) * dist, Phaser.Math.FloatBetween(0.9, 1.2));
    }
  },

  // ─────────────────────────────────────────────────────────────────────
  //  BUSHES
  // ─────────────────────────────────────────────────────────────────────
  placeBush(scene, x, y, scale = 1, alpha = 1) {
    const b = scene.add.image(x, y, 'bush').setScale(scale).setAlpha(alpha).setDepth(2.45 + scale * 0.2);
    scene.bushGrp.add(b);
    return b;
  },

  buildBushes(scene) {
    const c = WORLD / 2;
    for (let i = 0; i < 28; i++) {
      const ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(400, 3000);
      const x = c + Math.cos(ang) * dist + Phaser.Math.Between(-50, 50);
      const y = c + Math.sin(ang) * dist + Phaser.Math.Between(-50, 50);
      this.placeBush(scene, x, y, Phaser.Math.FloatBetween(0.75, 1.1), Phaser.Math.FloatBetween(0.60, 0.85));
    }
  },

  // ─────────────────────────────────────────────────────────────────────
  //  RUINS & ARCHES
  // ─────────────────────────────────────────────────────────────────────
  placeRuin(scene, x, y, scale = 1) {
    const r = scene.ruinGrp.create(x, y, 'ruin_wall').setScale(scale).setDepth(2.7);
    r.refreshBody();
    return r;
  },

  placeArch(scene, x, y, scale = 1) {
    const a = scene.add.image(x, y, 'ruin_arch').setScale(scale).setDepth(2.76);
    scene.archGrp.add(a);
    return a;
  },

  buildRuins(scene) {
    const c = WORLD / 2;
    // Scripted ruin clusters
    const clusters = [
      [c - 1400, c - 1000, 6, 70, 0], [c + 1100, c - 1500, 7, 0, 70],
      [c + 1700, c + 300,  5, -70, 0], [c - 1100, c + 1600, 5, 0, -70],
      [c + 400,  c + 2100, 7, 70, 0],  [c - 2200, c - 400,  5, 0, 70],
      [c + 2400, c - 1200, 4, -60, 0], [c - 800,  c + 2700, 6, 0, -60],
    ];
    clusters.forEach(([sx, sy, count, dx, dy], idx) => {
      for (let i = 0; i < count; i++) {
        const x = sx + dx * i + Phaser.Math.Between(-8, 8);
        const y = sy + dy * i + Phaser.Math.Between(-8, 8);
        this.placeRuin(scene, x, y, Phaser.Math.FloatBetween(0.92, 1.06));
      }
      const ax = sx + dx * (count - 0.5) + (idx % 2 === 0 ? 36 : -36);
      const ay = sy + dy * (count - 0.5) + (idx % 2 === 0 ? -32 : 28);
      this.placeArch(scene, ax, ay, Phaser.Math.FloatBetween(0.86, 1.02));
    });
    // Scatter single ruined walls
    for (let i = 0; i < 22; i++) {
      const ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(800, 3200);
      const x = c + Math.cos(ang) * dist, y = c + Math.sin(ang) * dist;
      scene.add.image(x, y, 'ruin_wall')
        .setScale(Phaser.Math.FloatBetween(0.6, 0.9))
        .setAngle(Phaser.Math.Between(0, 360))
        .setAlpha(0.72).setDepth(1.25);
    }
  },

  // ─────────────────────────────────────────────────────────────────────
  //  PUDDLES
  // ─────────────────────────────────────────────────────────────────────
  buildPuddles(scene) {
    const c = WORLD / 2;
    for (let i = 0; i < 28; i++) {
      const ang = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(600, 3200);
      const p = scene.add.image(c + Math.cos(ang) * dist, c + Math.sin(ang) * dist, 'puddle')
        .setScale(Phaser.Math.FloatBetween(0.7, 1.3))
        .setAngle(Phaser.Math.Between(-20, 20))
        .setDepth(0.86).setAlpha(0.6).setVisible(false);
      scene.tweens.add({ targets: p, alpha: { from: 0.4, to: 0.74 }, duration: 1800 + Phaser.Math.Between(0, 900), yoyo: true, repeat: -1 });
      scene.puddleGrp.add(p);
    }
  },

  // ─────────────────────────────────────────────────────────────────────
  //  ATMOSPHERE LAYERS
  // ─────────────────────────────────────────────────────────────────────
  buildAtmosphereLayers(scene) {
    scene.rainDim      = scene.add.rectangle(GW / 2, GH / 2, GW, GH, 0x3b2458, 0).setScrollFactor(0).setDepth(23);
    scene.fogBase      = scene.add.rectangle(GW / 2, GH - 44, GW, 150, 0xc9d8d2, 0).setScrollFactor(0).setDepth(24);
    scene.lightningFlash = scene.add.rectangle(GW / 2, GH / 2, GW, GH, 0xffffff, 0).setScrollFactor(0).setDepth(28);
  },

  // ─────────────────────────────────────────────────────────────────────
  //  ZONE THEMING
  // ─────────────────────────────────────────────────────────────────────
  applyZoneTheme(scene) {
    const idx = Math.max(0, Math.min(3, (scene.zone || 1) - 1));
    const ZONE_COLORS = [0x07313b, 0x072e3a, 0x072d39, 0x082d38];
    if (scene.bg) scene.bg.setFillStyle(ZONE_COLORS[idx]);
    if (scene.zoneText) scene.zoneText.setText(scene.isEndless ? 'ENDLESS' : `ZONE ${scene.zone} / 4`);

    const treeTints   = [0xffffff, 0xe1f0f0, 0xd8eaef, 0xd6e4e8];
    const bushTints   = [0xffffff, 0xe3f3f3, 0xdff0f2, 0xd9eaed];
    const ruinTints   = [0xc5ced2, 0xbec8cc, 0xb7c2c7, 0xb2bcc2];
    const colorTints  = [0xffffff, 0xf1f1f1, 0xe8f0f2, 0xdee6ea];

    scene.treeGrp?.getChildren().forEach(t => t.setTint(treeTints[idx]));
    scene.ruinGrp?.getChildren().forEach(r => r.setTint(ruinTints[idx]));
    scene.bushGrp?.getChildren().forEach(b => b.setTint(bushTints[idx]));
    scene.archGrp?.getChildren().forEach(a => a.setTint(ruinTints[idx]));
    scene.colorTreeGrp?.getChildren().forEach(ct => ct.setTint(colorTints[idx]));

    const showPuddles = !scene.isEndless && scene.zone === 2;
    scene.puddleGrp?.getChildren().forEach(p => p.setVisible(showPuddles));
  },

  // ─────────────────────────────────────────────────────────────────────
  //  PER-FRAME ATMOSPHERE UPDATE
  // ─────────────────────────────────────────────────────────────────────
  updateAtmosphere(scene, time) {
    const rainActive      = !scene.isEndless && scene.zone === 2;
    const fogActive       = scene.isEndless && scene.gameTime >= 180;
    const lightningActive = !scene.isEndless && scene.zone === 4;

    scene.rainDim.setAlpha(rainActive ? 0.08 : 0);
    scene.fogBase.setAlpha(fogActive ? 0.12 : 0);

    if (time >= (scene.nextWindAt || 0)) {
      this.spawnWindLine(scene);
      scene.nextWindAt = time + Phaser.Math.Between(900, 1800);
    }
    if (scene.bossActive && time >= (scene.nextAshAt || 0)) {
      this.spawnAshFall(scene);
      scene.nextAshAt = time + Phaser.Math.Between(80, 150);
    }
    if (rainActive && time >= (scene.nextRainAt || 0)) {
      this.spawnRainBurst(scene);
      scene.nextRainAt = time + Phaser.Math.Between(45, 85);
    }
    if (fogActive && time >= (scene.nextFogAt || 0)) {
      this.spawnFogPatch(scene);
      scene.nextFogAt = time + Phaser.Math.Between(220, 420);
    }
    if (lightningActive && time >= (scene.nextLightningAt || 0)) {
      this.doLightningFlash(scene);
      scene.nextLightningAt = time + Phaser.Math.Between(8000, 12000);
    }
  },

  spawnWindLine(scene) {
    const y = Phaser.Math.Between(100, GH - 120);
    const len = Phaser.Math.Between(90, 180);
    const line = scene.add.rectangle(-len, y, len, 2, 0xd6e9f0, 0.14).setOrigin(0, 0.5).setScrollFactor(0).setDepth(25);
    scene.tweens.add({ targets: line, x: GW + len, alpha: 0, duration: 520, onComplete: () => line.destroy() });
  },

  spawnAshFall(scene) {
    for (let i = 0; i < 3; i++) {
      const p = scene.add.circle(Phaser.Math.Between(0, GW), -10, Phaser.Math.Between(1, 3), 0x1a1a1a, 0.55).setScrollFactor(0).setDepth(25);
      scene.tweens.add({ targets: p, x: p.x + Phaser.Math.Between(-35, 35), y: GH + 20, alpha: 0, duration: Phaser.Math.Between(1800, 3000), onComplete: () => p.destroy() });
    }
  },

  spawnRainBurst(scene) {
    for (let i = 0; i < 7; i++) {
      const x = Phaser.Math.Between(-20, GW + 20), y = Phaser.Math.Between(-40, GH * 0.45);
      const drop = scene.add.rectangle(x, y, 2, Phaser.Math.Between(18, 30), 0xb38dff, 0.22).setScrollFactor(0).setDepth(25);
      scene.tweens.add({ targets: drop, x: x - 8, y: y + Phaser.Math.Between(120, 200), alpha: 0, duration: 260, onComplete: () => drop.destroy() });
    }
  },

  spawnFogPatch(scene) {
    const fog = scene.add.ellipse(Phaser.Math.Between(-40, GW + 40), GH - Phaser.Math.Between(24, 78), Phaser.Math.Between(110, 190), Phaser.Math.Between(26, 42), 0xdbe8e2, 0.09).setScrollFactor(0).setDepth(24);
    scene.tweens.add({ targets: fog, x: fog.x + Phaser.Math.Between(-40, 40), alpha: 0, duration: 2200, onComplete: () => fog.destroy() });
  },

  doLightningFlash(scene) {
    scene.lightningFlash.setAlpha(0.62);
    scene.cameras.main.shake(180, 0.009);
    scene.tweens.add({ targets: scene.lightningFlash, alpha: 0, duration: 240 });
  }
};
