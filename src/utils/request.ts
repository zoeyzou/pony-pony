type Request = RequestInit & {
  query?: Record<string, number | File | string | undefined>
}

export async function request<T>(url: string, requestBody?: Request): Promise<T> {
  const query = requestBody?.query

  const basicRequest: RequestInit = {
    method: requestBody?.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...requestBody?.headers,
    },
    body: query ? JSON.stringify(query) : requestBody?.body,
  }
  const response = await fetch(url, basicRequest)
  return response.json()
}
