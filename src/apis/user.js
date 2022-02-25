import request from "../utilities/request";

export function getListUser() {
  return request({
    url: "/users",
    method: "GET",
  });
}

export function postUser(user) {
  return request({
    url: "/users",
    method: "POST",
    data: {
      name: user.name,
      city: user.city,
      email: user.email,
    },
  });
}

export function editUserById(user, id) {
  return request({
    url: `/users/${id}`,
    method: "PUT",
    data: {
      name: user.name,
      city: user.city,
      email: user.email,
    },
  });
}

export function deleteUserById(id) {
  return request({
    url: `/users/${id}`,
    method: "DELETE",
  });
}
