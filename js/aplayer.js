!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
         { name: 'Four Divertimentos: Nº 1, Andantino Grazioso', artist: 'Trinidad Huerta', url: 'https://music.163.com/song/media/outer/url?id=552983173.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover.jpg' },
         { name: '愛の悲しみ', url: 'http://music.163.com/song/media/outer/url?id=29744803.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover2.jpg' },
         { name: 'Nocturne No. 1 in B Flat Minor, Op. 9, No. 1', artisi: 'Arthur Rubinstein', url: 'https://music.163.com/song/media/outer/url?id=25961289.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover3.jpg' },
         { name: '░░_Ｓｐｒｉｎｇｔｉｍｅ  Ｓｔｒｏｌｌ_Westminster Quarters =Ⓣɪᴍᴇ ➋ Ⓜᴇᴇᴛ', artist: 'secret crates', url: 'https://music.163.com/song/media/outer/url?id=448741213.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover4.jpg' },
         { name: 'The Way We Were', artist: 'David Davidson', url: 'https://music.163.com/song/media/outer/url?id=22538946.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover5.jpg' },
         { name: 'Valse di Fantastica', artist: '下村陽子', url: 'https://music.163.com/song/media/outer/url?id=448722043.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover6.jpg' },
         { name: 'Somnus (Instrumental Version)', artist: '下村陽子', url: 'https://music.163.com/song/media/outer/url?id=443292557.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover6.jpg' },
         { name: 'The Lark', artist: 'Evgeny Kissin', url: 'https://music.163.com/song/media/outer/url?id=1340025.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover7.jpg' },
         { name: '心分け', artist: '上北健', url: 'https://music.163.com/song/media/outer/url?id=474932684.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover8.jpg' },
         { name: 'なごり雪', artist: '中西保志', url: 'https://music.163.com/song/media/outer/url?id=480751.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover9.jpg' },
         { name: '花・太阳・雨', artist: 'PYG', url: 'https://music.163.com/song/media/outer/url?id=26127075.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover10.jpg' },
         { name: '冷めたスープ', artist: '柴田淳', url: 'https://music.163.com/song/media/outer/url?id=26140679.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover11.jpg' },
         { name: '終電', artist: '柴田淳', url: 'https://music.163.com/song/media/outer/url?id=562339.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover12.jpg' },
         { name: '铃色日和', artist: '永夜蛰居', url: 'https://music.163.com/song/media/outer/url?id=1430147412.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover13.jpg' },
         { name: '春夏秋冬', artist: 'ビリー・バンバン', url: 'https://music.163.com/song/media/outer/url?id=22683759.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover14.jpg' },
         { name: '碧い瞳のエリス', artist: '玉置浩二', url: 'https://music.163.com/song/media/outer/url?id=523584.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover15.jpg' },
         { name: 'rain stops, good-bye', artist: 'セリユ', url: 'https://music.163.com/song/media/outer/url?id=859900.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover16.jpg' },
         { name: '好きだよ。~100回の後悔', artist: 'Che Nelle', url: 'https://music.163.com/song/media/outer/url?id=28613731.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover17.jpg' },
         { name: 'SillyError happens ╥﹏╥', artist: '家入レオ', url: 'http://music.163.com/song/media/outer/url?id=29744742.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover18.jpg' },
         { name: '常夜灯', artist: '玉置浩二', url: 'http://music.163.com/song/media/outer/url?id=523504.mp3', cover: 'https://www-1259766423.cos.ap-beijing-fsi.myqcloud.com/PicGo/cover19.jpg' }
        ]
      });
    }
  })();