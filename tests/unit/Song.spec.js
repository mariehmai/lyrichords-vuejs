import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Song from '@/components/Song.vue';

describe('Song.vue', () => {
  it('renders song data', () => {
    const songMock = {
      title: 'Amazing Song',
      author: 'Casandra Lee',
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

    const wrapper = shallowMount(Song, { propsData: { ...songMock } });

    expect(wrapper.props().title).to.equal('Amazing Song');
    expect(wrapper.props().author).to.equal('Casandra Lee');
    expect(wrapper.props().lyrics.length).to.equal(4);
  });
});
