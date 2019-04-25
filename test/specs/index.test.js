/*eslint-disable*/
import { expect } from 'chai';
import json2formdata from '../../src/index';

describe('json2formdata tests', () => {

    it('#_normaltest', () => {
        const data = json2formdata({
            'a': 'a',
            'b': 'b',
        });
        expect(data.get('a')).to.equal('a');
        expect(data.get('b')).to.equal('b');
    });
    it('#_jsonstring test', () => {
        const data = json2formdata('{"a":"a"}');
        expect(data.get('a')).to.equal('a');
    });
    it('#_json array string test', () => {
        const data = json2formdata('{"a":["a","b","c"]}');
        expect(data.get('a[1]')).to.equal('b');
    });
    it('#_json arrdy object string test', () => {
        const data = json2formdata('{"a":[{"a":"a"},{"b":"b"}]}');
        expect(data.get('a[0][a]')).to.equal('a');
    });

});

