import fetch from 'isomorphic-fetch';

const api_host = "http://localhost:3000"

function generateFetchConfig(method, body = null) {
  
  const upCasedMethod = method.toUpperCase();
  const config = {
    method: upCasedMethod,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  if (['POST', 'PATCH'].includes(upCasedMethod)) {
    config.body = JSON.stringify(body);
  }

  return config;
}

export function createTopic(payload) {
  return fetch(`${api_host}/topics`, generateFetchConfig("POST", payload));
}

export function updateTopic(payload) {
  return fetch(`${api_host}/topics/${payload.id}`, generateFetchConfig("PATCH", payload));
}

export function deleteTopic(id) {
  return fetch(`${api_host}/topics/${id}`, generateFetchConfig("DELETE"));
}

export function fetchTopics() {
  return fetch(`${api_host}/topics`, generateFetchConfig('GET'));
}

export function createAuthor(payload) {
  return fetch(`${api_host}/authors`, generateFetchConfig("POST", payload));
}

export function updateAuthor(payload) {
  return fetch(`${api_host}/authors/${payload.id}`, generateFetchConfig("PATCH", payload));
}

export function deleteAuthor(id) {
  return fetch(`${api_host}/authors/${id}`, generateFetchConfig("DELETE"));
}

export function fetchAuthors() {
  return fetch(`${api_host}/authors`, generateFetchConfig('GET'));
}

