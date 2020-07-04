import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Track from '@/components/Track.vue';

describe('Track.vue', () => {
  it('renders track data', () => {
    const trackMock = {
      title: 'Amazing Song',
      artist: 'Casandra Lee',
      lyrics: 'Eu sei, tudo pode acontecer'
    };

    const wrapper = shallowMount(Track, { propsData: { ...trackMock } });

    expect(wrapper.props().title).to.equal('Amazing Song');
    expect(wrapper.props().artist).to.equal('Casandra Lee');
    expect(typeof(wrapper.props().lyrics)).to.equal('string');
  });
});
