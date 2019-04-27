export const fetchCats = () =>
  fetch("http://localhost:3000/cats").then(response => {
    return response.json();
  });

export const fetchCatDetails = catId =>
  fetch(`http://localhost:3000/cats/${catId}`).then(response => {
    return response.json();
  });

export const createCat = cat =>
  fetch("http://localhost:3000/cats", {
    method: "POST",
    body: JSON.stringify(cat),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

export const updateCat = cat =>
  fetch(`http://localhost:3000/cats/${cat.id}`, {
    method: "PUT",
    body: JSON.stringify(cat),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

export const deleteCat = cat =>
  fetch(`http://localhost:3000/cats/${cat.id}`, {
    method: "DELETE",
    body: JSON.stringify(cat),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

export const fetchDogs = () =>
  fetch("http://localhost:3000/dogs").then(response => {
    return response.json();
  });

export const fetchDogDetails = dogId =>
  fetch(`http://localhost:3000/dogs/${dogId}`).then(response => {
    return response.json();
  });

export const createDog = dog =>
  fetch("http://localhost:3000/dogs", {
    method: "POST",
    body: JSON.stringify(dog),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

export const updateDog = dog =>
  fetch(`http://localhost:3000/dogs/${dog.id}`, {
    method: "PUT",
    body: JSON.stringify(dog),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

export const deleteDog = dog =>
  fetch(`http://localhost:3000/dogs/${dog.id}`, {
    method: "DELETE",
    body: JSON.stringify(dog),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
