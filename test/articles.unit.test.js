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

  test("Should search an object into the articles", () => {
    const expectedValue = { name: "Notebook", cost: 20000, icon: "💻" };
    const articleFound = articles.find(
      (article) => article.name === "Notebook"
    );

    expect(articleFound).toEqual(expectedValue);
  });

  test("Should loop the articles", () => {
    const expectedValue = [
      "Bicycle",
      "TV",
      "Book",
      "Smartphone",
      "Notebook",
      "Keyboard",
      "Headphones",
    ];

    articles.forEach((article, key) => {
      expect(article.name).toEqual(expectedValue[key]);
    });
  });

  test("Should return true or false if exist some element than complete with the conditionals with a new array", () => {
    const cheapArticles = articles.some(article => article.cost <= 700);

    expect(cheapArticles).toBeTruthy();
  });
});
