import fetch from 'isomorphic-fetch';

const api_host = "http://localhost:3000"

function generateFetchConfig(method, body = null) {
  console.log(method)
  const upCasedMethod = method.toUpperCase();
  const config = {
    method: upCasedMethod,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  if (['POST', 'PUT'].includes(upCasedMethod)) {
    config.body = JSON.stringify(body);
  }

  return config;
}

export function createOrUpdateTopic(payload, method = "POST") {
  return fetch(`${api_host}/topics`, generateFetchConfig(method, payload));
}

export function deleteTopic(id) {
  return fetch(`${api_host}/topics/${id}`, generateFetchConfig("DELETE"));
}


export function fetchTopics() {
  return fetch(`${api_host}/topics`, generateFetchConfig('GET'));
}

/**
* Fetch a topic from the API
* @method fetchTopic
* @param  {string}  id topic ID
* @return {Response}     Fetch Response object
*/
export function fetchTopic(id) {
  return fetch(
    `${api_host}/topics/${id}?_embed=comments&_expand=user&_embed=likes`,
    generateFetchConfig('GET')
  );
}
