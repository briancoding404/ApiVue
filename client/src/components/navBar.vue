<template>

    <nav class="navbar">
      <ul class="nav-links">
        <li>
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li>
          <RouterLink to="/create">Crear</RouterLink>
        </li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    background-color: #181818; /* Indigo color */
    padding: 10px 10px;
    display: flex;
    justify-content:center;
    align-items: center;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li {
    display: inline-block;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white; /* White text for contrast */
    font-size: 1.0rem;
    font-weight: bold;
    padding: 5px 16px;
    transition: background-color 0.3s ease;
    border-radius: 5px red;
    /* background-color: red; */

  }
  
  .nav-links a:hover {
    background-color: red; /* Darker indigo for hover effect */
  }


  @media (max-width: 768px) {
    .nav-links {
      flex-direction: column;
      gap: 10px;
    }
  }
  </style>
  