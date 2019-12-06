import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Track from '@/components/Track.vue';

describe('Track.vue', () => {
  it('renders track data', () => {
    const trackMock = {
      title: 'Amazing Song',
      artist: 'Casandra Lee',
      lyrics: [
        { isEndVerse: false, sentence: 'Eu sei, tudo pode acontecer' },
        { isEndVerse: false, sentence: 'Eu sei, nosso amor não vai morrer' },
        { isEndVerse: false, sentence: 'Vou pedir aos céus, você aqui comigo' },
        {
          isEndVerse: true,
          sentence: 'Vou jogar, no mar, flores pra te encontrar'
        }
      ]
    };

    const wrapper = shallowMount(Track, { propsData: { ...trackMock } });

    expect(wrapper.props().title).to.equal('Amazing Song');
    expect(wrapper.props().artist).to.equal('Casandra Lee');
    expect(wrapper.props().lyrics.length).to.equal(4);
  });
});
