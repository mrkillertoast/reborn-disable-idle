import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

const PLUGIN_NAME = 'reborn-disable-idle';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
  alt.log(`~lg~CORE ==> ${PLUGIN_NAME} Loaded.`);
});
