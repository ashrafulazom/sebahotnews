function stripHtmlTags(e,r){return e.replace(/<.*?>/gi,"").split(/\s+/).slice(0,r-1).join(" ")}function getSummaryLikeWP(e){return document.getElementById(e).innerHTML.split(/<!--\s*more\s*-->/)[0]}function getSummaryImproved(e,r){var t=/<.*?>/gi,i=/<br.*?>/gi,a=/(<\/{1}p>)|(<\/{1}div>)/gi,n=/(<style.*?\/{1}style>)|(<script.*?\/{1}script>)|(<table.*?\/{1}table>)|(<form.*?\/{1}form>)|(<code.*?\/{1}code>)|(<pre.*?\/{1}pre>)/gi;e=e.replace(n,""),e=e.replace(a,"<br /> ").split(i);for(var s=0;s<e.length;s++)e[s]=e[s].replace(t,"");var l=new Array;for(var s in e)/[a-zA-Z0-9]/.test(e[s])&&l.push(e[s]);for(var m="",c="",s=0;indent>s;s++)c+=" ";if(l.join("<br/>").split(" ").length<r-1)m=l.join(c+" <br/>");else for(var s=0;m.split(" ").length<r;)m+=c+" "+l[s]+"<br/>",s++;return m}function createSummaryAndThumb(e,r,t,i,a){var n=t,r=r,s=document.getElementById(e),l=s.innerHTML;if(/<!--\s*more\s*-->/.test(l))s.innerHTML=getSummaryLikeWP(e),s.style.display="inline-block";else{var m="",c=s.getElementsByTagName("img");c.length>=1&&(m='<a href="'+n+'"><img src="'+c[0].src+'" align="left"></a>');var o='<div class="news_loop"><h2><a href="'+n+'">'+r+"</a></h2>"+m+" "+stripHtmlTags(l,summary)+'...<a href="'+n+'">আরও পড়ুন</a><div class="clear"></div></div>';s.innerHTML=o,s.style.display="inline-block"}}var classicMode=!1,summary=70,indent=3;
