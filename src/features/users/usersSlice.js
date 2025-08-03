//aqui realizamos la logica para gestionarususarios
//createSlice: crea un slice en redux, redux crea un slice en Redux significa
//dibidir el estado global enrebanadas (slices), que representan diferentes parteesde tu app y
//asosciar a cada slice
//createAsyncThunk: permite hacer peticiones asincronas como Apis

import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, fetchUserById, fetchUserByName, fetchUserByCity} from "./usersThunks";

// Creamos el slice de usuarios- estado inicial de usuarios y acciones que cambiaran
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
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
      //Redirige a todos los usuarios
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

      //Redirige a cargar usuario- id
      .addCase(fetchUserById.pending, (state) => {
        state.user = {};
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      // Redirige a buscar usuario por nombre
.addCase(fetchUserByName.pending, (state) => {
  state.user = {};
  state.loading = true;
  state.error = null;
})

.addCase(fetchUserByName.fulfilled, (state, action) => {
  state.loading = false;
  state.user = action.payload; // Resultado del .find()
})

.addCase(fetchUserByName.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload; // mensaje de error
})
      // Redirige a buscar usuario por ciudad
.addCase(fetchUserByCity.pending, (state) => {
  state.users = {};
  state.loading = true;
  state.error = null;
})

.addCase(fetchUserByCity.fulfilled, (state, action) => {
  state.loading = false;
  state.users = action.payload;
})
.addCase(fetchUserByCity.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload; // mensaje de error

});
  },
});

export const { setLoading } = usersSlice.actions;
export default usersSlice.reducer;
