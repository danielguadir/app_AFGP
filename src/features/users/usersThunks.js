import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//obtener usuario por id
const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un delay
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error al cargar el usuario.");
    }
  }
);

//obtener datos por ciudad de usuario
const fetchUserByCity = createAsyncThunk(
  "users/fetchByCity",
  async (city, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");

      const usersByCity = response.data.filter(
        (user) => user.address.city === city
      );

      if (usersByCity.length === 0) {
        return thunkAPI.rejectWithValue("No se encontraron usuarios en esa ciudad.");
      }

      return usersByCity;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error al cargar los usuarios por ciudad.");
    }
  }
);
//obtener ciudades del archivo json, para poder filtral por ciudad los datos de usario con un select en el componente que corresponda
// Esta función no es parte del slice, pero se puede usar para obtener las ciudades
const fetchCities = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const cities = [...new Set(response.data.map(user => user.address.city))];
    return cities;
  } catch (error) {
    throw new Error("Error al cargar las ciudades.");
  }
};



//obtener datos por nombre de usuario

const fetchUserByName = createAsyncThunk(
  "users/fetchByName",
  async (name, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();

      const user = users.find(
        (u) => u.name.toLowerCase().trim() === name.toLowerCase().trim()
      );

      if (!user) throw new Error("Usuario no encontrado");
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Obtener datos de API  de todos los usuarios
const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (__, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error al cargar los usuarios");
    }
  }
);
// Exportar las funciones para ser utilizadas en el slice
// Estas funciones se importarán en el SLICE para manejar las acciones asincrónicas.
//el fetchCities no es un thunk, es una función normal que se puede usar en cualquier parte del código
export { fetchUserById, fetchUsers, fetchUserByName, fetchUserByCity, fetchCities };
