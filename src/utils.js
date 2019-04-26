export const fetchCats = () => 
  fetch("http://localhost:3000/cats")
  .then(response => {
    return response.json();
  });

export const fetchDogs = () =>
  fetch ("http://localhost:3000/dogs")
  .then(response => {
    return response.json();
  });

export const fetchCatDetails = (catId) =>
  fetch(`http://localhost:3000/cats/${catId}`)
  .then(response => {
    return response.json();
  });

export const fetchDogDetails = (dogId) =>
  fetch(`http://localhost:3000/dogs/${dogId}`)
  .then(response => {
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