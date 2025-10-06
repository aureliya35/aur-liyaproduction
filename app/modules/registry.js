import m01 from './01-trustos.js';
import mod01 from './01-trustos.js';
export const _all = { [mod01.id]: mod01 };
export const get = (id) => _all[id];
export const list = () => Object.values(_all);
import m02 from './02-sovereignwealth.js';
import m03 from './03-mirrorme.js';
import m04 from './04-boardroomaccess.js';
import m05 from './05-aureliyaair.js';
import m06 from './06-quantumincomerouter.js';
import m07 from './07-legaladvisor.js';
import 05_aureliyaair from './05-aureliyaair.js';
import 06_quantumincomerouter from './06-quantumincomerouter.js';
import 07_legaladvisor from './07-legaladvisor.js';
import 08_module08 from './08-module08.js';
import 09_module09 from './09-module09.js';
import 10_module10 from './10-module10.js';
import 11_module11 from './11-module11.js';
import 12_module12 from './12-module12.js';
import 13_module13 from './13-module13.js';
import 14_module14 from './14-module14.js';
import 15_module15 from './15-module15.js';
import 16_module16 from './16-module16.js';
import 17_module17 from './17-module17.js';
import 18_module18 from './18-module18.js';
import 19_module19 from './19-module19.js';
import 20_module20 from './20-module20.js';
import 21_module21 from './21-module21.js';
import 22_module22 from './22-module22.js';
import 23_module23 from './23-module23.js';
import 24_module24 from './24-module24.js';
import 25_module25 from './25-module25.js';
import 26_module26 from './26-module26.js';
import 27_module27 from './27-module27.js';
import 28_module28 from './28-module28.js';
import 29_module29 from './29-module29.js';
import 30_module30 from './30-module30.js';
import 31_module31 from './31-module31.js';
import 32_module32 from './32-module32.js';
import 33_module33 from './33-module33.js';
import 34_module34 from './34-module34.js';
import 35_module35 from './35-module35.js';
import 36_module36 from './36-module36.js';
import 37_module37 from './37-module37.js';
import 38_module38 from './38-module38.js';
import 39_module39 from './39-module39.js';
import 40_module40 from './40-module40.js';
import 41_module41 from './41-module41.js';
import 42_module42 from './42-module42.js';
import 43_module43 from './43-module43.js';
import 44_module44 from './44-module44.js';
import 45_module45 from './45-module45.js';
import 46_module46 from './46-module46.js';
import 47_module47 from './47-module47.js';
import 48_module48 from './48-module48.js';
import 49_module49 from './49-module49.js';
import 50_module50 from './50-module50.js';
import 51_module51 from './51-module51.js';
import 52_module52 from './52-module52.js';
import 53_module53 from './53-module53.js';
import 54_module54 from './54-module54.js';
import 55_module55 from './55-module55.js';
import 56_module56 from './56-module56.js';

export const Registry = {
  _all: {
    "01-trustos": m01,
    "02-sovereignwealth": m02,
    "03-mirrorme": m03,
    "04-boardroomaccess": m04,
    "05-aureliyaair": m05,
    "06-quantumincomerouter": m06,
    "07-legaladvisor": m07,
    "05-aureliyaair": 05_aureliyaair,
    "06-quantumincomerouter": 06_quantumincomerouter,
    "07-legaladvisor": 07_legaladvisor,
    "08-module08": 08_module08,
    "09-module09": 09_module09,
    "10-module10": 10_module10,
    "11-module11": 11_module11,
    "12-module12": 12_module12,
    "13-module13": 13_module13,
    "14-module14": 14_module14,
    "15-module15": 15_module15,
    "16-module16": 16_module16,
    "17-module17": 17_module17,
    "18-module18": 18_module18,
    "19-module19": 19_module19,
    "20-module20": 20_module20,
    "21-module21": 21_module21,
    "22-module22": 22_module22,
    "23-module23": 23_module23,
    "24-module24": 24_module24,
    "25-module25": 25_module25,
    "26-module26": 26_module26,
    "27-module27": 27_module27,
    "28-module28": 28_module28,
    "29-module29": 29_module29,
    "30-module30": 30_module30,
    "31-module31": 31_module31,
    "32-module32": 32_module32,
    "33-module33": 33_module33,
    "34-module34": 34_module34,
    "35-module35": 35_module35,
    "36-module36": 36_module36,
    "37-module37": 37_module37,
    "38-module38": 38_module38,
    "39-module39": 39_module39,
    "40-module40": 40_module40,
    "41-module41": 41_module41,
    "42-module42": 42_module42,
    "43-module43": 43_module43,
    "44-module44": 44_module44,
    "45-module45": 45_module45,
    "46-module46": 46_module46,
    "47-module47": 47_module47,
    "48-module48": 48_module48,
    "49-module49": 49_module49,
    "50-module50": 50_module50,
    "51-module51": 51_module51,
    "52-module52": 52_module52,
    "53-module53": 53_module53,
    "54-module54": 54_module54,
    "55-module55": 55_module55,
    "56-module56": 56_module56
  },
  get(id){ return this._all[id]; },
  list(){ return Object.values(this._all); }
};
import mod01 from './modules/01-trustos.js';
import mod03 from './modules/03-mirrorme.js';
// …import the rest as you build them

export const MODULES = [
  mod01,
  // add 02 when you build it
  mod03
  // …
];
