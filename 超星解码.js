// ==UserScript==
// @name         超星学习通作业解码器
// @version      3.6
// @namespace    http://tampermonkey.net/
// @description  超星全自动刷课，支持章节、作业、考试等多项任务点。
// @author       TMYW
// @match        *://*.chaoxing.com/*
// @run-at       document-end
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_setClipboard
// @antifeature  ads
// @license      MIT
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2/dist/jquery.min.js
// ==/UserScript==

var pz = {};
var script_info=GM_info.script;
class Layer{
    constructor(){

    }
    msg(m) {
        alert(m)
    }
}
pz.layer = new Layer()

//pz.layui.msg("hello")
new Promise(whatttf).then(function(ok){
    var $TiMu = $('.TiMu')
    pz.ttf&&$TiMu.map(a=>{$TiMu.eq(a).html(repttf($TiMu.eq(a).html()))});
}).catch((wht)=>{})

function whatttf(res,rej){
    let temp=$(":root").html().split("font-ttf;charset=utf-8;base64,");
    if(temp.length>1){
        pz.ttf=temp[1].split("')")[0];
    }
    if(pz.ttf){
        //alert(pz.ttf)
        //pz.layer.msg("正在尝试解密文字");
        GM_xmlhttpRequest({
        method: 'POST',
        url: 'http://localhost:8080/get_ttf',
        data: JSON.stringify({
            "base64":pz.ttf
        }),
        headers: {
            'Content-type': 'application/json',
            '_t': 'cx',
            'v':script_info.version,
        },
        timeout: 20000,
        onload: function (xhr) {
            let obj = $.parseJSON(xhr.responseText) || {};
            pz.ttf_sz=obj;
            //pz.layer.msg("解密成功，若还有问题请反馈给作者");
            res(1)
        },
        ontimeout: function () {
            pz.layer.msg("解密服务器超时");
            rej(0)
        }
    });
    }
}
function repttf(text){
    pz.ttf_sz[0].map(function(value,index){
        text=text.replaceAll(value,pz.ttf_sz[1][index]);
    });
    return text
}

