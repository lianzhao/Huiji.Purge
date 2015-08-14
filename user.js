// ==UserScript==
// @name         Huiji.Purge
// @namespace    Huiji
// @version      0.0.1
// @description  为灰机添加purge按钮
// @author       lianzhao
// @match        http://*.huiji.wiki/*
// @grant        none
// ==/UserScript==

$(function(){
    var current = window.location.href;
	var index = current.indexOf('/wiki/');
	console.log('index=' + index);
	var title;
	if (index > 0){
		// normal page
		title = current.substr(index + '/wiki/'.length);
	}
	else{
		// not a normal page
		var index1 = current.indexOf('title=');
		var index2 = current.indexOf('&');
		title = current.substr(index1 + 'title='.length, index2 - index1 - 'title='.length);
		console.log('title=' + title);
	}
	var url = '/index.php?title=' + title + '&action=purge';
	$('.nav-pills').append('<li><a href="' + url + '"><i class="fa fa-refresh"> purge</i></li>');
});