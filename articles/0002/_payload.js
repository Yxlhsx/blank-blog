export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:{"content-query-T2v4tKkAha":{_path:"\u002Farticles\u002F0002",_dir:"articles",_draft:s,_partial:s,_locale:h,_empty:s,title:"Centos7 安装Nginx",description:"在linux centos7 系统中安装nginx",tags:["Linux"],keywords:"linux centos",createTime:"2020-09-07",body:{type:"root",children:[{type:a,tag:"h1",props:{id:t},children:[{type:b,value:t}]},{type:a,tag:m,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:d,props:{code:"yum install gcc-c++\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:h},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"yum install gcc-c++"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:p},{type:a,tag:n,props:{alt:o,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200905000501405.png?x-oss-process=image\u002Fwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU0MDcyMg==,size_16,color_FFFFFF,t_70#pic_center"},children:[]}]},{type:a,tag:m,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:d,props:{code:"yum install -y pcre pcre-devel\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:h},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"yum install -y pcre pcre-devel"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:p},{type:a,tag:n,props:{alt:o,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200905000713407.png#pic_left"},children:[]}]},{type:a,tag:m,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:d,props:{code:"yum install -y zlib zlib-devel\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:h},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"yum install -y zlib zlib-devel"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:p},{type:a,tag:n,props:{alt:o,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200905001018686.png#pic_left"},children:[]}]},{type:a,tag:m,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:d,props:{code:"yum install -y openssl openssl-devel\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:h},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"yum install -y openssl openssl-devel"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:p},{type:a,tag:n,props:{alt:o,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F2020090500115673.png?x-oss-process=image\u002Fwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU0MDcyMg==,size_16,color_FFFFFF,t_70#pic_left"},children:[]}]},{type:a,tag:m,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:g,props:{},children:[{type:b,value:"进入官网下载 nginx。\r\n"},{type:a,tag:"a",props:{href:"http:\u002F\u002Fnginx.org\u002Fen\u002Fdownload.html",rel:["nofollow"]},children:[{type:b,value:"点这里进入官网下载界面"}]},{type:b,value:"\r\n可以看到很多版本，我们这里选择较新的稳定版。\r\n"},{type:a,tag:n,props:{alt:o,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200905001412999.png?x-oss-process=image\u002Fwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU0MDcyMg==,size_16,color_FFFFFF,t_70#pic_left"},children:[]},{type:b,value:"\r\n下载完成后，将下载好的压缩包移动到 "},{type:a,tag:"strong",props:{},children:[{type:b,value:"\u002Fusr\u002Flocal"}]},{type:b,value:"下，然后解压。"}]},{type:a,tag:d,props:{code:"tar -zxvf nginx-1.18.0.tar.gz\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:h},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"tar -zxvf nginx-"}]},{type:a,tag:c,props:{class:q},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:q},children:[{type:b,value:"0."}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"tar.gz"}]}]}]}]}]},{type:a,tag:m,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:g,props:{},children:[{type:b,value:"解压后切换到安装目录下。"}]},{type:a,tag:d,props:{code:"cd \u002Fusr\u002Flocal\u002Fnginx\u002Fnginx-1.18.0\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:h},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"cd \u002Fusr\u002Flocal\u002Fnginx\u002Fnginx-"}]},{type:a,tag:c,props:{class:q},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:q},children:[{type:b,value:"0"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:"然后执行安装："}]},{type:a,tag:d,props:{code:".\u002Fconfigure --prefix=\u002Fusr\u002Flocal\u002Fnginx   #配置安装目录\r\n\r\nmake\r\n\r\nmake install\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:h},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:".\u002Fconfigure --prefix=\u002Fusr\u002Flocal\u002Fnginx   "}]},{type:a,tag:c,props:{class:I},children:[{type:b,value:"#配置安装目录"}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"make"}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"make install"}]}]}]}]}]},{type:a,tag:m,props:{id:r},children:[{type:b,value:r}]},{type:a,tag:g,props:{},children:[{type:b,value:"进入到上面配置的安装目录"}]},{type:a,tag:d,props:{code:"cd \u002Fusr\u002Floca\u002Fnginx\u002Fsbin\r\n\r\n.\u002Fnginx -t\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:h},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"cd \u002Fusr\u002Floca\u002Fnginx\u002Fsbin"}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:".\u002Fnginx -t"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:"若输出下图，则安装成功：\r\n"},{type:a,tag:n,props:{alt:o,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200907145542285.png#pic_left"},children:[]}]},{type:a,tag:m,props:{id:J},children:[{type:b,value:K}]},{type:a,tag:g,props:{},children:[{type:b,value:"在上一步的目录下"}]},{type:a,tag:d,props:{code:".\u002Fnginx #启动nginx\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:h},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:".\u002Fnginx "}]},{type:a,tag:c,props:{class:I},children:[{type:b,value:"#启动nginx"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:"访问 ip 地址："}]},{type:a,tag:g,props:{},children:[{type:a,tag:n,props:{alt:o,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200907145849432.png?x-oss-process=image\u002Fwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU0MDcyMg==,size_16,color_FFFFFF,t_70#pic_left"},children:[]}]},{type:a,tag:"style",children:[{type:b,value:".ct-b14344{color:#6A9955}\n.ct-1c2308{color:#B5CEA8}\n.ct-95d235{color:#D4D4D4}"}]}],toc:{title:h,searchDepth:i,depth:i,links:[{id:u,depth:i,text:v},{id:w,depth:i,text:x},{id:y,depth:i,text:z},{id:A,depth:i,text:B},{id:C,depth:i,text:D},{id:G,depth:i,text:H},{id:r,depth:i,text:r},{id:J,depth:i,text:K}]}},_type:"markdown",_id:"content:articles:0002.md",_source:"content",_file:"articles\u002F0002.md",_extension:"md"}},prerenderedAt:1679409553589}}("element","text","span","code","line","ct-95d235","p","",2,"powershell",null,"pre","h2","img","在这里插入图片描述","安装成功的界面：\r\n","ct-1c2308","检测是否安装成功",false,"准备所需环境","安装-gcc","安装 gcc","安装-pcre","安装 pcre","安装-zlib","安装 zlib","最后安装-openssl","最后安装 openssl","下载-nginx","下载 nginx","1.18",".","安装-nginx","安装 nginx","ct-b14344","启动-nginx","启动 nginx"))