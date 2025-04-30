'use server';

import { cookies } from 'next/headers';

export default async function login(formdata: FormData) {

  const response = await fetch(
    'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    {
      method: 'POST',
      body: formdata,
    },
  );
  const data = await response.json();
  (await cookies()).set('token', data.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
  });
 
}
