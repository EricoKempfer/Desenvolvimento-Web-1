const USER_KEY = "mini-social-user";
const AUTH_KEY = "mini-social-auth";
const COMMENTS_KEY = "mini-social-comments";

const defaultUser = {
  username: "aluno123",
  email: "aluno@email.com",
  password: "123456",
  photo: "https://placehold.co/120x120",
  bio: "Oi, eu sou estudante e gosto de tecnologia.",
  interests: "React, games, filmes",
  color: "azul",
};

const defaultComments = [
  {
    id: 1,
    author: "aluno123",
    text: "Primeiro post no meu feed!",
    createdAt: "Hoje",
  },
];

function safeRead(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeWrite(key, value) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function getUser() {
  return safeRead(USER_KEY, defaultUser);
}

export function saveUser(user) {
  safeWrite(USER_KEY, user);
}

export function getAuth() {
  return safeRead(AUTH_KEY, { logged: false });
}

export function setAuth(auth) {
  safeWrite(AUTH_KEY, auth);
}

export function logout() {
  safeWrite(AUTH_KEY, { logged: false });
}

export function getComments() {
  return safeRead(COMMENTS_KEY, defaultComments);
}

export function addComment(text) {
  const user = getUser();
  const comments = getComments();
  const newComment = {
    id: Date.now(),
    author: user.username,
    text,
    createdAt: "Agora",
  };
  safeWrite(COMMENTS_KEY, [newComment, ...comments]);
}
