import articles from "../src/articles";

describe("Test suite for array functions", () => {
  test("Should filter with cost less to fifty hundred", () => {
    const expectedValue = [
      { name: "Book", cost: 320, icon: "📕" },
      { name: "Keyboard", cost: 500, icon: "⌨️" },
    ];

    const articlesFiltered = articles.filter((article) => article.cost <= 500);

    expect(articlesFiltered.length).toBe(2);
    expect(articlesFiltered).toEqual(expectedValue);
  });

  test("Should create new array only with the articles name", () => {
    const expectedValue = [
      "Bicycle",
      "TV",
      "Book",
      "Smartphone",
      "Notebook",
      "Keyboard",
      "Headphones",
    ];
    const articlesNames = articles.map((article) => article.name);

    expect(articlesNames.length).toBe(7);
    expect(articlesNames).toEqual(expectedValue);
  });

  test("Should create new array only with the articles name", () => {
    const expectedValue = [
      "Bicycle",
      "TV",
      "Book",
      "Smartphone",
      "Notebook",
      "Keyboard",
      "Headphones",
    ];
    const articlesNames = articles.map((article) => article.name);

    expect(articlesNames.length).toBe(7);
    expect(articlesNames).toEqual(expectedValue);
  });
});
