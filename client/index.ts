import * as alt from 'alt-client';
import * as natives from 'natives';

alt.setInterval(() => {
  natives.invalidateIdleCam();
}, 29500);
