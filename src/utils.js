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

export const fetchCatById = (catId) =>
  fetch(`http://localhost:3000/cats/${catId}`)
  .then(response => {
    return response.json();
  });

export const fetchDogById = (datId) =>
  fetch(`http://localhost:3000/dogs/${datId}`)
  .then(response => {
    return response.json();
  });