export const API_URL = 'https://dogsapi.origamid.dev/json';
export const API_LARAVEL_URL = 'http://localhost:8000/api';

export function TOKEN_POST(body) {
  return {
    url: API_LARAVEL_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// export function TOKEN_VALIDATE_POST(token) {
//   return {
//     url: API_LARAVEL_URL + '/login',
//     options: {
//       method: 'POST',
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     },
//   };
// }

export function USER_GET(token) {
  return {
    url: API_LARAVEL_URL + '/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}


// export function USER_GET2(token) {
//   return {
//     url: API_LARAVEL_URL + '/user',
//     options: {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     },
//   };
// }


export function USER_POST(body) {
  return {
    url: API_LARAVEL_URL + '/userCreate',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: API_LARAVEL_URL + '/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET(token) {
  return {
    url: API_LARAVEL_URL + '/photo',
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}


export function COMMENT_POST(id, body) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  };
}


export function PHOTO_DELETE(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}



export function PASSWORD_LOST(body) {
  return {
    url: API_URL + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}


export function PASSWORD_RESET(body) {
  return {
    url: API_URL + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function STATS_GET() {
  return {
    url: API_URL + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}


export function EVENT_POST(body) {
  return {
    url: API_LARAVEL_URL + '/event',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  };
}

export function EVENT_GET(token) {
  return {
    url: API_LARAVEL_URL + '/event',
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function EVENT_LIST(id) {
  return {
    url: API_LARAVEL_URL + '/event/' + id,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}

export function EVENT_UPDATE(id, body) {
  return {
    url: `${API_LARAVEL_URL}/event/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  };
}