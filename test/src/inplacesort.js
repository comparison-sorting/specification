// eslint-disable-next-line ava/use-test
import ava from 'ava';
import * as spec from '../../src/index.js';

spec.test(ava, [['mock', spec.mock]]);

spec.test(ava, [['mock', spec.mock]], {length: 100, array: Array});
spec.test(ava, [['mock', spec.mock]], {length: [24, 1000], array: [Int8Array]});
