import { expect, test } from "vitest";
import { mount } from '@vue/test-utils'
import FactBoxItem from "./FactBoxItem.vue";

test("should render factbox item component", () => {
    const wrapper = mount(FactBoxItem, {
        props: {
            label: 'label',
            value: 100,
        }
    });

    expect(wrapper.text()).toContain('label')
})