
export async function sendDataRequest(data) {
    const response = await fetch('https://dummy/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const responseData = await response.json();
  
    if (!response.ok) {
      throw new Error(response.status, 'Sending the request failed.', responseData);
    }
  
    return responseData;
  }