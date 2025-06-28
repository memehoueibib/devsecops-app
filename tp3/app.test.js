const request = require('supertest');
const app = require('./app');

describe('TP3 App Tests', () => {
  test('GET / should return Hello DevSecOps TP3', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.body.message).toBe('Hello DevSecOps TP3!');
    expect(response.body.timestamp).toBeDefined();
  });

  test('GET /feature should return feature info', async () => {
    const response = await request(app)
      .get('/feature')
      .expect(200);
    
    expect(response.body.version).toMatch(/^[AB]$/);
    expect(response.body.message).toContain('Version');
  });

  test('GET /error should return 500', async () => {
    const response = await request(app)
      .get('/error')
      .expect(500);
    
    expect(response.body.error).toBe('Erreur interne du serveur');
  });

  test('GET /health should return OK', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);
    
    expect(response.body.status).toBe('OK');
  });
});
