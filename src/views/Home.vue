<template>
  <CardViewer type="song" :children="song" />
</template>

<script>
import CardViewer from '@/components/CardViewer';

const song = {
  title: 'Eu Sei',
  author: 'Papas da Lingua',
  lyrics: [
    { isEndVerse: false, sentence: 'Eu sei, tudo pode acontecer' },
    { isEndVerse: false, sentence: 'Eu sei, nosso amor não vai morrer' },
    { isEndVerse: false, sentence: 'Vou pedir aos céus, você aqui comigo' },
    {
      isEndVerse: true,
      sentence: 'Vou jogar, no mar, flores pra te encontrar'
    },
    { isEndVerse: false, sentence: 'Não sei por que você disse adeus' },
    { isEndVerse: false, sentence: 'Guardei o beijo que você me deu' },
    { isEndVerse: false, sentence: 'Vou pedir aos céus, você aqui comigo' },
    {
      isEndVerse: true,
      sentence: 'Vou jogar, no mar, flores pra te encontrar'
    },
    { isEndVerse: false, sentence: 'You say goodbye, and I say hello' },
    { isEndVerse: true, sentence: 'You say goodbye, and I say hello' },
    { isEndVerse: true, sentence: 'Iê, iê, iê, iê, iê, iê' },
    { isEndVerse: false, sentence: 'Não sei por que você disse adeus' },
    { isEndVerse: false, sentence: 'Guardei o beijo que você me deu' },
    { isEndVerse: false, sentence: 'Vou pedir aos céus, você aqui comigo' },
    {
      isEndVerse: false,
      sentence: 'Vou jogar, no mar, flores pra te encontrar'
    },
    { isEndVerse: true, sentence: 'Eu sei, tudo pode acontecer' },
    { isEndVerse: false, sentence: 'You say goodbye, and I say hello' },
    { isEndVerse: true, sentence: 'You say goodbye, and I say hello' },
    { isEndVerse: false, sentence: 'Iê, iê, iê, iê, iê, iê' }
  ]
};

export default {
  components: {
    CardViewer
  },
  data: function() {
    return { song };
  }
};
</script>
