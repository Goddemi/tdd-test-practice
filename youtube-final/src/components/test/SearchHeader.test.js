import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import SearchHeader from "../SearchHeader";

describe("SearchHeader", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SearchHeader />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
