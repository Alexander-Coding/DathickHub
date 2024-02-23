import * as ymaps3 from 'ymaps3';

const {YMap, YMapDefaultSchemeLayer} = ymaps3;

const map = new YMap(
  document.getElementById('app'),
  {
      location: {
          center: [37.588144, 55.733842],
          zoom: 10
      }
  }
);

map.addChild(new YMapDefaultSchemeLayer());
