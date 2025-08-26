import { getRequest } from '../utils/apiClient';

describe('Random User API', () => {

  // Happy path: valid API call
  test('Fetch a random user', async () => {
    const response = await getRequest('https://randomuser.me/api/');
    expect(response.status).toBe(200);
    expect(response.data.results.length).toBeGreaterThan(0); // Ensure we got at least 1 user
  });

  // Happy path: fetch multiple users
  test('Fetch 5 random users', async () => {
    const response = await getRequest('https://randomuser.me/api/?results=5');
    expect(response.status).toBe(200);
    expect(response.data.results.length).toBe(5);
  });

  // Unhappy path: invalid endpoint
  test('Invalid endpoint returns 404', async () => {
    const response = await getRequest('https://randomuser.me/invalid-endpoint');
    expect(response.status).toBe(404);
  });

  // Unhappy path: incorrect domain
  test('Request to wrong domain returns error', async () => {
    try {
      await getRequest('https://randomuser.wrongdomain/api/');
    } catch (error: any) {
      expect(error).toBeDefined();
    }
  });

});
