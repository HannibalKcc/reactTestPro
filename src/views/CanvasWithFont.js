import {useEffect} from 'react';

function CanvasWithFont() {
  useEffect(() => {
    const f1 = new FontFace(
      'myFont',
      `url(${require('../assets/font/FZCCHJW.TTF').default})`,
    );

    const f2 = new FontFace(
      'myFont2',
      `url(${require('../assets/font/Beauty_in_the_Stardust.ttf').default})`,
    );

    Promise.all([f1.load(), f2.load()]).then((fonts) => {
      fonts.forEach((font) => {
        document.fonts.add(font);
      });
    }).then(() => {
      var ctx = document.getElementById('canvas').getContext('2d');
      ctx.font = '48px serif';
      ctx.fillText('Hello world', 10, 50);
      ctx.font = '48px myFont';
      ctx.fillText('Hello world', 10, 100);
      ctx.font = '48px myFont2';
      ctx.fillText('Hello world', 10, 150);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello world 中文</h1>
      <h1 style={{fontFamily: 'myFont'}}>Hello world 中文</h1>
      <h1 style={{fontFamily: 'myFont2'}}>Hello world 中文</h1>

      <canvas id="canvas"/>
    </div>
  );
}

export default CanvasWithFont;
