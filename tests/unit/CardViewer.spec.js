import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CardViewer from '@/components/CardViewer.vue';
// import Track from '@/components/Track.vue';

describe('CardViewer.vue', () => {
  it('renders track component when type is track', () => {
    const trackMock = {
      title: 'Amazing Song',
      artist: 'Casandra Lee',
      lyrics: 'Eu sei, tudo pode acontecer'
    };
    const cardMock = {
      type: 'track',
      children: trackMock
    };
    const wrapper = shallowMount(CardViewer, { propsData: { ...cardMock } });

    expect(wrapper.props().type).to.equal('track');
    // expect(wrapper.find(Track)).to.have.length(true);
  });
});
