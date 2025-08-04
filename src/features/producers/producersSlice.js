// src/features/producers/producersSlice.js

import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUsers,
  fetchProductorById,
  fetchProductorByName,
  fetchProductorByCity
} from "./producersThunks";

// Creamos el slice de productores - estado inicial de productores y acciones que cambiarán
const productoresSlice = createSlice({
  name: "productores", // 👈 nombre del slice debe coincidir con el nombre del estado en el store
  initialState: {
    users: [],   // puedes cambiar esto a 'productores' si prefieres más claridad
    user: {},
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Obtener todos los productores
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Obtener productor por ID
      .addCase(fetchProductorById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = {};
      })
      .addCase(fetchProductorById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchProductorById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Buscar productor por nombre
      .addCase(fetchProductorByName.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = {};
      })
      .addCase(fetchProductorByName.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchProductorByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Buscar productores por ciudad
      .addCase(fetchProductorByCity.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.users = [];
      })
      .addCase(fetchProductorByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchProductorByCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Exportaciones
export const { setLoading } = productoresSlice.actions;
export default productoresSlice.reducer;
