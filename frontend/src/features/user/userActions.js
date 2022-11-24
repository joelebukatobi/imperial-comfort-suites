import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ name, email, password, password_confirmation }, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ name, email, password, password_confirmation }),
      });

      const data = await res.json();
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    return data.user;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getUser = createAsyncThunk('user', async () => {
  try {
    const res = await fetch('/api/auth/user', {
      method: 'GET',
    });

    const data = await res.json();
    if (res.ok) {
      return data.user;
    } else return null;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const userLogout = createAsyncThunk('user/logout', async () => {
  const res = await fetch('/api/auth/logout', {
    method: 'POST',
  });
});
