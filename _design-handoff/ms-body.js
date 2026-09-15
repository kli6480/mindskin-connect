// Schematic body outline with the 11 PMR muscle groups.
// props: active (index 0-10 or null), print (boolean -> black & white, larger labels)
(function () {
  var GROUPS = [
    { label: '1 Feet',      dot: [131, 396], line: [98, 396],  side: 'l' },
    { label: '2 Calves',    dot: [127, 352], line: [98, 352],  side: 'l' },
    { label: '3 Thighs',    dot: [125, 292], line: [98, 292],  side: 'l' },
    { label: '4 Buttocks',  dot: [172, 240], line: [210, 240], side: 'r' },
    { label: '5 Abdomen',   dot: [152, 205], line: [210, 205], side: 'r' },
    { label: '6 Chest',     dot: [152, 150], line: [210, 150], side: 'r' },
    { label: '7 Arms',      dot: [87, 140],  line: [72, 140],  side: 'l' },
    { label: '8 Hands',     dot: [83, 203],  line: [64, 203],  side: 'l' },
    { label: '9 Shoulders', dot: [176, 92],  line: [210, 92],  side: 'r' },
    { label: '10 Neck',     dot: [164, 70],  line: [210, 70],  side: 'r' },
    { label: '11 Face',     dot: [172, 32],  line: [210, 32],  side: 'r' }
  ];

  function MSBody(props) {
    var h = window.React.createElement;
    var print = !!props.print;
    var active = props.active === undefined || props.active === null ? null : Number(props.active);
    var stroke = print ? '#2D2D2D' : '#1B3068';
    var fill = print ? '#fff' : '#FAF8F4';
    var leader = print ? '#9A9A9A' : '#CFCADD';
    var accent = '#5B4E8C';

    var body = h('g', { key: 'b', fill: fill, stroke: stroke, strokeWidth: 2.5, strokeLinejoin: 'round', strokeLinecap: 'round' },
      h('path', { key: 'la', fill: 'none', d: 'M106 96 C90 122 84 154 83 184' }),
      h('path', { key: 'ra', fill: 'none', d: 'M194 96 C210 122 216 154 217 184' }),
      h('path', { key: 'torso', d: 'M150 74 C133 74 121 80 114 88 C106 96 104 106 105 118 L109 168 C112 196 113 222 115 246 C132 254 168 254 185 246 C187 222 188 196 191 168 L195 118 C196 106 194 96 186 88 C179 80 167 74 150 74 Z' }),
      h('path', { key: 'll', d: 'M115 248 C116 284 119 312 122 338 C125 360 125 380 123 398 C122 404 125 408 132 408 L143 408 C149 408 152 404 152 398 C151 342 149 292 147 252 C136 254 124 252 115 248 Z' }),
      h('path', { key: 'rl', d: 'M185 248 C184 284 181 312 178 338 C175 360 175 380 177 398 C178 404 175 408 168 408 L157 408 C151 408 148 404 148 398 C149 342 151 292 153 252 C164 254 176 252 185 248 Z' }),
      h('path', { key: 'neck', fill: 'none', d: 'M144 68 C144 74 141 78 136 81 M156 68 C156 74 159 78 164 81' }),
      h('ellipse', { key: 'head', cx: 150, cy: 40, rx: 25, ry: 28 }),
      h('circle', { key: 'lh', cx: 83, cy: 194, r: 9 }),
      h('circle', { key: 'rh', cx: 217, cy: 194, r: 9 })
    );

    var leaders = h('g', { key: 'ld', stroke: leader, strokeWidth: 1.25 },
      GROUPS.map(function (g, i) {
        return h('line', { key: i, x1: g.dot[0], y1: g.dot[1], x2: g.line[0], y2: g.line[1] });
      })
    );

    var marks = h('g', { key: 'mk' }, GROUPS.map(function (g, i) {
      var on = active === i;
      return h('g', { key: i },
        h('circle', {
          cx: g.dot[0], cy: g.dot[1], r: 8,
          fill: on ? accent : '#fff',
          stroke: on ? accent : stroke,
          strokeWidth: 2
        }),
        h('text', {
          x: g.side === 'l' ? g.line[0] - 6 : g.line[0] + 6,
          y: g.line[1] + 3,
          textAnchor: g.side === 'l' ? 'end' : 'start',
          fontFamily: 'Poppins, sans-serif',
          fontSize: print ? 11 : 10.5,
          fontWeight: on ? 600 : 400,
          fill: on ? accent : (print ? '#2D2D2D' : '#4A4A4A')
        }, g.label)
      );
    }));

    return h('svg', {
      viewBox: '0 0 300 430',
      role: 'img',
      'aria-label': 'Body outline with the eleven muscle groups labelled from feet to face',
      style: { width: '100%', maxWidth: print ? '290px' : '230px', height: 'auto', display: 'block' }
    }, body, leaders, marks);
  }

  window.MSBody = MSBody;
})();
