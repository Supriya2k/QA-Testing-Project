import { test, expect } from '@playwright/test';

test('get users API', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  expect(response.status()).toBe(200);
});
