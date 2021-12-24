function sebatop(json){var posts="<ul class=mbtbig>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var thumbnail=json.feed.entry[i].media$thumbnail.url;var url=json.feed.entry[i].link.pop().href;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("=s72-c","=s"+400+"");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('sebatop').innerHTML=posts;}
function leadnews(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('leadnews').innerHTML=posts;}
function national(json){var posts="<ul class=mbtbig>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var thumbnail=json.feed.entry[i].media$thumbnail.url;var url=json.feed.entry[i].link.pop().href;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("=s72-c","=s"+250+"");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('national').innerHTML=posts;}
function nationalL(json){var posts="<ul class=mbtlist>";for(var i=1;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('nationalL').innerHTML=posts;}
function bangladesh(json){var posts="<ul class=mbtlistA>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("=s72-c","=s"+250+"");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('bangladesh').innerHTML=posts;}
function corona(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('corona').innerHTML=posts;}
function world(json){var posts="<ul class=mbtlistA>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("=s72-c","=s"+250+"");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('world').innerHTML=posts;}
function politics(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('politics').innerHTML=posts;}
function sports(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('sports').innerHTML=posts;}
function economics(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('economics').innerHTML=posts;}
function religion(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('religion').innerHTML=posts;}
function entert(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('entert').innerHTML=posts;}
function edu(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('edu').innerHTML=posts;}
function tech(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('tech').innerHTML=posts;}
function agri(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('agri').innerHTML=posts;}
function editor(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('editor').innerHTML=posts;}
function lifestyle(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('lifestyle').innerHTML=posts;}
function law(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('law').innerHTML=posts;}
function election(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('election').innerHTML=posts;}
function history(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('history').innerHTML=posts;}
function tradition(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('tradition').innerHTML=posts;}
function comics(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('comics').innerHTML=posts;}
function jobnews(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('jobnews').innerHTML=posts;}
function womanandchild(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('womanandchild').innerHTML=posts;}
function environment(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('environment').innerHTML=posts;}
function readers(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('readers').innerHTML=posts;}
function feature(json){var posts="<ul class=mbtlist>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;var thumbnail=json.feed.entry[i].media$thumbnail.url;if(json.feed.entry[i].media$thumbnail){thumbnail=thumbnail.replace("/s72-c/","/s"+80+"/");}else{thumbnail="https://cdn.jsdelivr.net/gh/ashrafulazom/sebahotnews/img/seba-200.webp";}
posts+="<li><a class='mbttitle' href='"+url+"'><img src='"+thumbnail+"' loading='lazy' alt='"+title+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('feature').innerHTML=posts;}
function listlatH(json){var posts="<ul class=mbtlistlat>";for(var i=1;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;posts+="<li><a href='"+url+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('listlatH').innerHTML=posts;}
function listlatP(json){var posts="<ul class=mbtlistlat>";for(var i=0;i<json.feed.entry.length;i++){var title=json.feed.entry[i].title.$t;var url=json.feed.entry[i].link.pop().href;posts+="<li><a href='"+url+"'>"+title+"</a></li>";}
posts+='</ul>';document.getElementById('listlatP').innerHTML=posts;}
