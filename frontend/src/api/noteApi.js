import axios from "axios"

import { BASE_URL } from "../constants";

export const fetchMyNotes = async (userId, token) => {
  const res = await axios.get(`${BASE_URL}/notes/mine/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchSharedNotes = async (userId, token) => {
  const res = await axios.get(`${BASE_URL}/notes/shared/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createNote = async (noteData, token) => {
  const res = await axios.post(
    `${BASE_URL}/notes`,
    noteData,
    {
      headers: {
        Authorization: `Bearer ${token}`, 

        "Content-Type": "application/json"
      }
    }
  );
  return res.data;
};



export const shareNote = async (noteId, userIdToShare, token) => {
  const res = await axios.post(
    `${BASE_URL}/notes/${noteId}/share`,
    { userIdToShare },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};
