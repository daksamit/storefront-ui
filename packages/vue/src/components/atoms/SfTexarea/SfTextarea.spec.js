import { shallowMount } from "@vue/test-utils";
import SfTextarea from "./SfTextarea.vue";
describe("SfTextarea.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTextarea);
    expect(component.contains(".sf-textarea")).toBe(true);
  });
});
