 import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Obtener todos los productores
const fetchUsers = createAsyncThunk(
  "productores/fetchUsers ",
  async (_, thunkAPI) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      const response = await axios.get("http://localhost:3000/productores");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error al cargar los productores.");
    }
  }
);

// Obtener productor por ID
const fetchProductorById = createAsyncThunk(
  "productores/fetchById",
  async (id, thunkAPI) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      const response = await axios.get(`http://localhost:3000/productores/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error al cargar el productor.");
    }
  }
);

// Obtener productor por nombre
const fetchProductorByName = createAsyncThunk(
  "productores/fetchByName",
  async (name, thunkAPI) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      const response = await axios.get("http://localhost:3000/productores");

      const productor = response.data.find(
        (p) => p.nombre.toLowerCase().trim() === name.toLowerCase().trim()
      );

      if (!productor) {
        return thunkAPI.rejectWithValue("Productor no encontrado.");
      }

      return productor;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error al buscar por nombre.");
    }
  }
);

// Obtener productores por ciudad
const fetchProductorByCity = createAsyncThunk(
  "productores/fetchByCity",
  async (ciudad, thunkAPI) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      const response = await axios.get("http://localhost:3000/productores");

      const filtrados = response.data.filter((p) => p.ciudad === ciudad);

      if (filtrados.length === 0) {
        return thunkAPI.rejectWithValue("No se encontraron productores en esa ciudad.");
      }

      return filtrados;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error al buscar por ciudad.");
    }
  }
);

// Obtener ciudades únicas para usar en select
const fetchCiudades = async () => {
  try {
    const response = await axios.get("http://localhost:3000/productores");
    const ciudades = [...new Set(response.data.map(p => p.ciudad))];
    return ciudades;
  } catch (error) {
    throw new Error("Error al cargar las ciudades.");
  }
};


export {
  fetchUsers,
  fetchProductorById,
  fetchProductorByName,
  fetchProductorByCity,
  fetchCiudades,
};
