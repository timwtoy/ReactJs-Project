import sound from 'react-sound';
import React from 'react';

class SongState extends React.Component {
    initialState = {
        accessToken: null,
        refreshToken: null,
        user: {
          loading: false,
          country: null,
          display_name: null,
          email: null,
          external_urls: {},
          followers: {},
          href: null,
          id: null,
          images: [],
          product: null,
          type: null,
          uri: null,
        },
        song: {
          loading: false,
          url: '',
          playState: SONG_INITIAL_STATE,
        },
      
    };
}