export const API_URL = 'https://dogsapi.origamid.dev/json';
export function TOKEN_POST(): {
  url: string;
} {
  return {
    url: API_URL + '/jwt-auth/v1/token',
  };
}
export function USER_GET(): {
  url: string;
} {
  return {
    url: API_URL + '/api/user',
  };
}
export function TOKEN_VALIDADE_POST(): {
  url: string;
} {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
  };
}
export function USER_POST(): {
  url: string;
} {
  return { url: API_URL + '/api/user' };
}
export function PHOTO_POST(): {
  url: string;
} {
  return {
    url: API_URL + '/api/photo',
  };
}

export function PHOTOS_GET({
  page,
  total,
  user,
}: {
  page: number;
  total: number;
  user: 0 | string;
}): {
  url: string;
  options: {
    method: 'GET';
    cache: string;
  };
} {
  return {
    url: API_URL + `/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
export function PHOTO_GET(id: string): {
  url: string;
} {
  return {
    url: API_URL + `/api/photo/${id}`,
  };
}

export function COMMENT_POST(id: number | string): {
  url: string;
} {
  return {
    url: API_URL + `/api/comment/${id}`,
  };
}

export function PHOTO_DELETE(id: string): {
  url: string;
} {
  return {
    url: API_URL + `/api/photo/${id}`,
  };
}

export function PASSWORD_LOST(): {
  url: string;
} {
  return {
    url: API_URL + '/api/password/lost',
  };
}

export function PASSWORD_RESET(): {
  url: string;
} {
  return {
    url: API_URL + '/api/password/reset',
  };
}
export function STATS_GET(): {
  url: string;
} {
  return {
    url: API_URL + '/api/stats',
  };
}
