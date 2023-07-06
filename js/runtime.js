
setInterval(() => {
    let create_time = Math.round(new Date('2019-04-17 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = new Date().getTime();
    let time = new Array();

    now = new Date(timestamp)
    time[0] = now.getFullYear()

    time[1] = now.getMonth()
  
    time[2] = now.getDate()
   
    time[3] = now.getHours()

    time[4] = now.getMinutes()
   
    time[5] = now.getSeconds()
    
    var nol = function(h){
      return h>9?h:'0'+h;
    }

    for(let i in time){
      time[i] = nol(time[i])
    }

    
    // if (second >= 365 * 24 * 3600) {
    //   time[0] = parseInt(second / (365 * 24 * 3600));
    //   second %= 365 * 24 * 3600;
    // }
    // if (second >= 24 * 3600) {
    //   time[1] = parseInt(second / (24 * 3600));
    //   second %= 24 * 3600;
    // }
    // if (second >= 3600) {
    //   time[2] = nol(parseInt(second / 3600));
    //   second %= 3600;
    // }
    // if (second >= 60) {
    //   time[3] = nol(parseInt(second / 60));
    //   second %= 60;
    // }
    // if (second > 0) {
    //   time[4] = nol(second);
    // }

    if ((Number(time[3])<22) && (Number(time[3])>7)){
      add = "<a class='github-badge' target='_blank' href='https://vincentvannf.github.io/' style='margin-inline:5px' data-title='作者VincentVan' title=''><img src='https://img.shields.io/badge/VincenVan-6adea8?style=social&logo=cakephp' data-lazy-src='https://img.shields.io/badge/VincenVan-6adea8?style=social&logo=cakephp' alt='' data-ll-status='loaded' class='entered loaded'></a>"
      currentTimeHtml = add + "<div id='runtime'>" + time[0]  + '-'  + time[1] + '-' +  time[2] + "-----"  + time[3] + ' : ' + time[4] + ' : ' + time[5] + '</div>';
      // currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/VincenVan-6adea8?style=social&logo=cakephp' href='https://vincentvannf.github.io/' data-title='作者VincentVan'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    else{
      add = "<a class='github-badge' target='_blank' href='https://vincentvannf.github.io/' style='margin-inline:5px' data-title='这个点了应该去睡觉啦，熬夜对身体不好哦' title=''><img src='https://img.shields.io/badge/VincenVan-6adea8?style=social&logo=cakephp' data-lazy-src='https://img.shields.io/badge/VincenVan-6adea8?style=social&logo=cakephp' alt='' data-ll-status='loaded' class='entered loaded'></a>"
      currentTimeHtml = add + "<div id='runtime'>" + time[0]  + '-'  + time[1] + '-' +  time[2] + "&ensp;&ensp;&ensp;&ensp;"  + time[3] + ' : ' + time[4] + ' : ' + time[5] + '</div>';
    }
    document.getElementById("workboard").innerHTML = currentTimeHtml;
  }, 1000);