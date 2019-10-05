import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import i18n from '@/plugins/i18n';

describe('HelloWorld.vue', () => {
  it('renders Welcome msg', () => {
    const msg = 'Welcome to Vuetify';
    const wrapper = shallowMount(HelloWorld, { i18n });
    expect(wrapper.text()).to.include(msg);
  });
});
