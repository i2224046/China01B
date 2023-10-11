const audioFiles = [
    'mp3/china_1.mp3',
    'mp3/china_2.mp3',
    'mp3/china_3.mp3',
    'mp3/china_4.mp3',
    'mp3/china_5.mp3',
    'mp3/china_6.mp3',
    'mp3/china_7.mp3',
    'mp3/china_8.mp3',
    'mp3/china_9.mp3',
    'mp3/china_10.mp3',
    'mp3/china_11.mp3',
    'mp3/china_12.mp3',
    'mp3/china_13.mp3',
    'mp3/china_14.mp3',
    'mp3/china_15.mp3',
    'mp3/china_16.mp3',
    'mp3/china_17.mp3',
    'mp3/china_18.mp3',
    'mp3/china_19.mp3',
    // 他の音声ファイルの名前を追加
  ];
  
  const playButton = document.getElementById('playButton');
  const audioPlayer = document.getElementById('audioPlayer');
  
  playButton.addEventListener('click', () => {
    // ランダムな音声ファイルを選択
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const selectedFile = audioFiles[randomIndex];
  
    // 選択された音声ファイルを再生
    audioPlayer.src = selectedFile;
    audioPlayer.play();
  });
  