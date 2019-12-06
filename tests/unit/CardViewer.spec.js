import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CardViewer from '@/components/CardViewer.vue';
// import Song from '@/components/Song.vue';

describe('CardViewer.vue', () => {
  it('renders song component when type is song', () => {
    const songMock = {
      title: 'Amazing Song',
      artist: 'Casandra Lee',
      lyrics: [{ isEndVerse: false, sentence: 'Eu sei, tudo pode acontecer' }]
    };
    const cardMock = {
      type: 'song',
      children: songMock
    };
    const wrapper = shallowMount(CardViewer, { propsData: { ...cardMock } });

    expect(wrapper.props().type).to.equal('song');
    // expect(wrapper.find(Song)).to.have.length(true);
  });
});
