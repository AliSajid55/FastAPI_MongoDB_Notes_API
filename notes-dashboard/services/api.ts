
export interface Note {
  _id?: string;
  title: string;
  content: string;
  // Add other fields as needed
}

const API_URL = "http://127.0.0.1:8000/notes";

export async function getNotes() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createNote(note: Note) {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
}

export async function updateNote(id: string, note: Note) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
}

export async function deleteNote(id: string) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}