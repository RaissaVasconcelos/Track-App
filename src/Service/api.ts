import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BsYXRhZm9ybWEuYXBpYnJhc2lsLmNvbS5ici9zb2NpYWwvZ2l0aHViL2NhbGxiYWNrIiwiaWF0IjoxNjgyNTE0MjI4LCJleHAiOjE3MTQwNTAyMjgsIm5iZiI6MTY4MjUxNDIyOCwianRpIjoiRjJnRExKbmswVk5vcTNWTyIsInN1YiI6IjI0ODIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.gGjqogSxVVDa1N8G55nazFl6AcGjkCOCXa9t8gq-tDY';
const secretKey = '23f1c789-62ab-4650-af53-0612cc667088';
const publicToken = '8IAZn7HKq7QJWbh37N3GOOeRVY';
const deviceToken = 'de86b427-2f7e-43d0-b03c-37beca8b12d1'


export const api = axios.create({
  baseURL: "https://cluster.apigratis.com/api/v1/correios",
  headers: {
    'Content-Type': 'application/json',
    'PublicToken': `${publicToken}`,
    'Authorization': `Bearer ${token}`,
    'SecretKey': `${secretKey}`,
    'DeviceToken': `${deviceToken}`
  }
})