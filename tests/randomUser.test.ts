import axios from 'axios';

describe("Random User API", () => {
  jest.setTimeout(10000); // 10s timeout for CI

  test("Fetch a random user", async () => {
    const res = await axios.get("https://randomuser.me/api/");
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("results");
  });

  test("Fetch 5 random users", async () => {
    const res = await axios.get("https://randomuser.me/api/?results=5");
    expect(res.status).toBe(200);
    expect(res.data.results.length).toBe(5);
  });

  test("Invalid endpoint returns 404", async () => {
    try {
      await axios.get("https://randomuser.me/invalid-endpoint");
    } catch (err: any) {
      expect(err.response.status).toBe(404);
    }
  });

  test("Request to wrong domain returns error", async () => {
    await expect(
      axios.get("https://nonexistent.randomuser.me/")
    ).rejects.toThrow();
  });
});
