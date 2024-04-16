﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater],
    ZName: [oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDuckyTubeZombie1],
    PicArr: function() {
        var a = oSeaShroom.prototype,
        b = a.PicArr;
        return ["images/interface/background5.jpg", "images/interface/Dave.gif", "images/interface/Dave2.gif", "images/interface/Dave3.gif", b[a.CardGif], b[a.NormalGif]]
    } (),
    SunNum: 500,
    LF: [0, 2, 2, 2, 2, 2],
    backgroundImage: "images/interface/background5.jpg",
    CanSelectCard: 1,
    LevelName: "关卡 5-1",
    LvlEName: 21,
    AudioArr: ["crazydaveshort2", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
    LargeWaveFlag: {
    },
    InitLawnMower: function() {
        CustomSpecial(oPoolCleaner, 1, -1)
        CustomSpecial(oPoolCleaner, 2, -1)
        CustomSpecial(oPoolCleaner, 3, -1)
        CustomSpecial(oPoolCleaner, 4, -1)
        CustomSpecial(oPoolCleaner, 5, -1)
    },
    UserDefinedFlagFunc: function(a) {
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(8, 9, 1, [oWarshipsZombie])
    },
    StartGameMusic: "jiaxing",
    LoadAccess: function(a) {
        NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
        NewEle("DivTeach", "div", 0, 0, EDAll); (function(d) {
            var b = arguments.callee,
            c = $("DivTeach");
            switch (d) {
            case 0:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [1])
                    }
                },
                []);
                innerText(c, "我们总算逃出了龙宫，这里是著名的鱼米之乡：嘉兴");
                break;
            case 1:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [2])
                    }
                },
                []);
                innerText(c, "的一个小镇，新塍。(点击继续)");
                break;
            case 2:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [3])
                    }
                },
                []);
                innerText(c, "看那里美丽的小桥流水和美食(点击继续)");
                break;
            case 3:
                PlayAudio("crazydaveshort2");
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(1,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [4])
                    }
                },
                []);
                innerText(c, "不过，作者僵尸似乎也带兵驻扎在这儿(点击继续)");
                break;
            case 4:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [5])
                    }
                },
                []);
                innerText(c, "祝你好运～我去吃黎民生煎包去了(点击继续)");
                break;
            case 5:
                $("dDave").src = "images/interface/Dave2.gif";
                ClearChild($("DivTeach"));
                oSym.addTask(5,
                function() {
                    ClearChild($("dDave"));
                    a(0)
                },
                [])
            }
        })(0)
    }
},
{
    AZ: [[oDuckyTubeZombie2, 1, 5], [oDuckyTubeZombie3, 1, 7], [oDuckyTubeZombie1, 6, 1], [oDuckyTubeZombie4, 1, 9]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [3, 5, 9, 10, 13, 15, 19],
        a2: [1, 2, 3, 10, 4, 5, 6, 15]
    },
    FlagToMonitor: {
    },
    FlagToEnd: function() {
        NewImg("imgSF", "images/Card/Plants/SeaShroom.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oSeaShroom, 42)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll)
    }
});