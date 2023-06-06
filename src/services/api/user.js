/* eslint-disable no-console */
import BASE_URL, { LOGIN_URL, LOGOUT_URL } from "./url";

export function getMe() {
  return fetch(`${BASE_URL}/me`, {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return null;
  });
}

export async function emailExists(emailToVerify) {
  if (!emailToVerify) {
    throw new Error("Email is required");
  }

  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const users = await response.json();
    const isEmailExists = users.some(({ email }) => email === emailToVerify);
    return isEmailExists;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
}

export function getBenefitDateByBenefitId(id, usedBenefitDate) {
  usedBenefitDate.forEach((element) => {
    let date = null;
    if (element.benefit_id === id) {
      date = element.date;
    }
    return date;
  });
}

export function loginUrl() {
  return `${LOGIN_URL}?redirect=${encodeURIComponent(window.location)}`;
}

export function logoutUrl() {
  return `${LOGOUT_URL}?redirect=${encodeURIComponent(loginUrl())}`;
}

export async function registration(data) {
  const r = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response);
  return r;
}
