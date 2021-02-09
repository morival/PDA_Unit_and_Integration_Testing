import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 1
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })
})
describe('App.vue', () => {
  it('enterNum subtracts one from another', () => {
  const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract(4);
    expect(wrapper.vm.runningTotal).to.equal(3);
  })
})

describe('App.vue', () => {
  it('enterNum multiply numbers', () => {
  const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 5;
    wrapper.vm.multiply(3);
    expect(wrapper.vm.runningTotal).to.equal(15);
  })
})

describe('App.vue', () => {
  it('enterNum divides one by another', () => {
  const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide(7);
    expect(wrapper.vm.runningTotal).to.equal(3);
  })
})

describe('numberClick', () => {
  it('enterNum concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
      wrapper.vm.numberClick(1)
      wrapper.vm.numberClick(2)
      wrapper.vm.numberClick(3)
      wrapper.vm.numberClick(4)
      wrapper.vm.numberClick(5)
      wrapper.vm.numberClick(6)
      wrapper.vm.numberClick(7)
      wrapper.vm.numberClick(8)
      wrapper.vm.numberClick(9)
      wrapper.vm.numberClick(0)
      expect(wrapper.vm.runningTotal).to.equal(1234567890)
  })
})

describe('operatorClick', () => {
  it('enterNum chain multiple operations together', () => {
    const wrapper = shallowMount(App)
      wrapper.vm.numberClick(10)
      wrapper.vm.operatorClick('+')
      wrapper.vm.numberClick(40)
      wrapper.vm.operatorClick('/')
      wrapper.vm.numberClick(2)
      wrapper.vm.operatorClick('*')
      wrapper.vm.numberClick(4)
      wrapper.vm.operatorClick('=')  
      expect(wrapper.vm.runningTotal).to.equal(100)
  }) 
})

describe('clearClick', () => {
  it('clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
      wrapper.vm.numberClick(5)
      wrapper.vm.operatorClick('+')
      wrapper.vm.numberClick(15)
      wrapper.vm.operatorClick('+')
      wrapper.vm.numberClick(1)
      wrapper.vm.clearClick()
      expect(wrapper.vm.runningTotal).to.equal(0)
      expect(wrapper.vm.previousTotal).to.equal(20)
  })
})