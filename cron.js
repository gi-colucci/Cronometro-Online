"use strict"

var hr = 0;
var mm = 0;
var ss = 0;

var tempo = 50; // quantos milésimos valem 1 seg
var cron;

function start()
{
    cron = setInterval(() => { timer(); }, tempo);
}

function pause()
{
    clearInterval(cron);

}

function clean()
{
    clearInterval(cron);
    hr = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function timer()
{
    ss++;

    if(ss == 60)
    {
        ss = 0;
        mm++;
    }

    if(mm == 60)
    {
        mm = 0;
        hr++;
    }
    

    var format = (hr < 10 ? '0' + hr : hr) + ':' + (mm < 10 ? '0' + mm : mm ) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;
}