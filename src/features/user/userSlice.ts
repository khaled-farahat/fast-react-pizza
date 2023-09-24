/*
interface Position {
  latitude: number;
  longitude: number;
}

interface Address {
  locality: string;
  city: string;
  postcode: string;
  countryName: string;
}

interface UserLocation {
  position: Position;
  address: string;
}

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress(): Promise<UserLocation> {
  // 1) We get the user's geolocation position
  const positionObj: GeolocationPosition = await getPosition();
  const position: Position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj: Address | undefined = await getAddress(position);
  const address: string = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}
*/

import { UserState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
