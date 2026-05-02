;(function(){
  function px(g,c,x,y,w,h){ g.fillStyle(c); g.fillRect(x,y,w||2,h||2); }
  function mkTextures(scene){
    (function(){
      const g=scene.add.graphics();
      px(g,0x0b1b18,2,42,90,34);
      px(g,0x1be5d8,6,44,82,28);
      px(g,0x17cfc1,12,47,70,22);
      px(g,0x0abcb0,18,50,58,16);
      px(g,0x0b1b18,58,26,30,20);
      px(g,0x1be5d8,60,28,26,16);
      px(g,0x0accc0,66,30,16,12);
      px(g,0x0b1b18,6,24,48,20);
      px(g,0x1be5d8,8,26,44,16);
      px(g,0xf02b8a,8,54,44,20);
      px(g,0xc91d74,10,56,40,16);
      px(g,0x0b1b18,22,56,4,6);
      px(g,0xeedb9d,22,58,4,4);
      px(g,0x0b1b18,60,34,10,4);
      px(g,0x157c77,62,35,6,2);
      px(g,0x0b1b18,62,22,20,10);
      px(g,0x1be5d8,64,24,16,6);
      px(g,0xd7ff55,66,26,4,2);
      px(g,0xd7ff55,74,26,4,2);
      px(g,0xff3333,68,26,2,2);
      px(g,0xff3333,76,26,2,2);
      px(g,0x0b1b18,44,70,6,10);
      px(g,0x1be5d8,45,72,4,8);
      px(g,0x0b1b18,56,70,6,10);
      px(g,0x1be5d8,57,72,4,8);
      px(g,0x0b1b18,40,78,14,4);
      px(g,0x0b1b18,52,78,14,4);
      px(g,0x8f1bc4,66,18,8,6);
      px(g,0xcc67ff,68,20,4,2);
      g.generateTexture('boss1',96,84); g.destroy();
    })();
    (function(){
      const g=scene.add.graphics();
      g.fillStyle(0x3a3530); g.fillRect(10,20,60,60); g.fillStyle(0x4a4540); g.fillRect(12,22,56,56);
      g.fillStyle(0x2a2520); g.fillRect(14,26,20,18); g.fillRect(46,26,20,18);
      g.fillStyle(0x3a3530); g.fillRect(18,0,44,24); g.fillStyle(0x4a4540); g.fillRect(20,2,40,20);
      g.fillStyle(0xff6600); g.fillRect(24,8,12,8); g.fillRect(44,8,12,8);
      g.fillStyle(0xffaa00); g.fillRect(26,10,8,4); g.fillRect(46,10,8,4);
      g.fillStyle(0xffffff); g.fillRect(28,11,3,2); g.fillRect(48,11,3,2);
      g.fillStyle(0x111008); g.fillRect(26,18,28,4);
      g.fillStyle(0x3a3530); g.fillRect(0,28,12,32); g.fillRect(68,28,12,32);
      g.fillStyle(0x4a4540); g.fillRect(2,30,8,28); g.fillRect(70,30,8,28);
      g.lineStyle(2,0x1a1510,1); g.lineBetween(20,30,40,60); g.lineBetween(50,25,60,55);
      g.generateTexture('boss2',80,82); g.destroy();
    })();
    (function(){
      const g=scene.add.graphics();
      g.fillStyle(0x1a0a2a); g.fillEllipse(28,32,54,62);
      g.fillStyle(0x2a1044); g.fillEllipse(26,28,38,46);
      g.fillStyle(0x3a1a55); g.fillEllipse(24,22,24,28);
      g.fillStyle(0xcc00ff); g.fillRect(14,16,10,8); g.fillRect(30,16,10,8);
      g.fillStyle(0xff88ff); g.fillRect(16,18,6,4); g.fillRect(32,18,6,4);
      g.fillStyle(0xffffff); g.fillRect(18,19,3,2); g.fillRect(34,19,3,2);
      g.fillStyle(0x0d0520); g.fillTriangle(0,60,56,60,28,20);
      g.fillStyle(0x6600aa); g.fillRect(24,40,8,2); g.fillRect(27,36,2,10);
      g.generateTexture('boss3',56,64); g.destroy();
    })();
    (function(){
      const g=scene.add.graphics();
      g.fillStyle(0x1a0000,0.5); g.fillCircle(44,50,44);
      g.fillStyle(0x0a0000); g.fillTriangle(4,88,84,88,44,20);
      g.fillStyle(0x150000); g.fillTriangle(8,88,80,88,44,24);
      g.fillStyle(0x0d0000); g.fillEllipse(44,38,52,58); g.fillStyle(0x1a0000); g.fillEllipse(42,34,38,44);
      g.fillStyle(0x110000); g.fillEllipse(44,22,34,30); g.fillStyle(0x220000); g.fillEllipse(43,20,26,24);
      g.fillStyle(0xff0000); g.fillRect(30,14,14,10); g.fillRect(48,14,14,10);
      g.fillStyle(0xff4444); g.fillRect(32,16,10,6); g.fillRect(50,16,10,6);
      g.fillStyle(0xffffff); g.fillRect(36,18,3,2); g.fillRect(54,18,3,2);
      g.fillStyle(0x000000); g.fillRect(34,24,20,4);
      g.fillStyle(0xdd0000); for(let i=0;i<5;i++) g.fillRect(35+i*4,24,2,4);
      g.fillStyle(0x880000); for(let i=0;i<5;i++) g.fillRect(28+i*8,0,6,12);
      g.fillStyle(0xcc0000); for(let i=0;i<5;i++) g.fillRect(30+i*8,2,4,8);
      g.fillStyle(0x0d0000); g.fillRect(0,30,16,40); g.fillRect(72,30,16,40);
      g.fillStyle(0x330000); g.fillRect(2,32,12,36); g.fillRect(74,32,12,36);
      g.fillStyle(0xcc0000); for(let i=0;i<4;i++){ g.fillRect(i*4,68,3,8); g.fillRect(72+i*4,68,3,8); }
      g.generateTexture('boss4',88,90); g.destroy();
    })();
    (function(){
      const g=scene.add.graphics();
      g.fillStyle(0x3f1764); g.fillCircle(8,8,8);
      g.fillStyle(0x7a32c2); g.fillCircle(8,8,5);
      g.fillStyle(0xd8b5ff); g.fillCircle(8,8,2);
      g.generateTexture('bossProj',16,16); g.destroy();
    })();
  }
  function info(){
    return [
      {tex:'boss1',name:'GOBLIN WARLORD', hp:160, spd:58, dmg:1, color:0x00ff44, shootRate:2500, bullets:3, chargeRate:4200, summonRate:6200, scale:0.9, dualPhase:false},
      {tex:'boss2',name:'DREAD SENTINEL', hp:260,spd:38, dmg:2, color:0xff8800, shootRate:1850, bullets:5, chargeRate:3000, scale:1.1, dualPhase:false},
      {tex:'boss3',name:'MIRROR BEAST',   hp:300,spd:72, dmg:1, color:0xcc00ff, shootRate:1600, bullets:4, chargeRate:2700, scale:1.0, dualPhase:false, canSplit:true},
      {tex:'boss4',name:'HELL STORM', hp:240,hp2:260,spd:64,dmg:2,color:0xff0000, shootRate:1200, bullets:6, chargeRate:2400, teleRate:3600, dodgeChance:0.3, pulseRate:3000, scale:1.2, dualPhase:true}
    ];
  }
  window.BossKit={mkTextures:mkTextures,info:info};
})(); 
