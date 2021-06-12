import { shallowMount } from "@vue/test-utils";
import MTable from "@/components/Table.vue";

describe("MTable.vue", () => {
  it("renders columns when showHeader is on", () => {
    const columns = [
      { name: "ID", key: "id" },
      { name: "Name", key: "name" },
    ];
    const data = [{}];
    const wrapper = shallowMount(MTable, {
      propsData: { columns, data },
    });

    expect(wrapper.text()).toMatch(columns.map((c) => c.name).join(" "));
  });
});
