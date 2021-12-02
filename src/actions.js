export const Action = Object.freeze({
    LoadArtists: 'LoadArtists',
    LoadAlbums: 'LoadAlbums',
    LoadTracks: 'LoadTracks',
    ShowProgress: 'ShowProgress',
    HideProgress: 'HideProgress'
});




export function fetchArtists() {
    return dispatch => {
        dispatch(showProgress());
        fetch("https://dukebox.twodee.org:8443/artists").then(response => response.json()).then(data => {
            dispatch(loadArtists(data));
            dispatch(hideProgress());
        });
    }
}

export function fetchAlbums(artist) {
    return dispatch => {
        dispatch(showProgress());
        fetch("https://dukebox.twodee.org:8443/artists/" + artist).then(response => response.json()).then(data => {
            dispatch(loadAlbums(data));
            dispatch(hideProgress());
        });
    }
}

export function fetchTracks(artist, album) {
    return dispatch => {
        dispatch(showProgress());
        fetch("https://dukebox.twodee.org:8443/artists/" + artist + "/" + album).then(response => response.json()).then(data => {
            dispatch(loadTracks(data));
            dispatch(hideProgress());
        });
    }
}

export function loadArtists(artists) {
    return { type: Action.LoadArtists, payload: artists }
}

export function loadAlbums(albums) {
    return { type: Action.LoadAlbums, payload: albums }
}


export function loadTracks(tracks) {
    return { type: Action.LoadTracks, payload: tracks }
}

export function showProgress() {
    return { type: Action.ShowProgress, payload: true };
}

export function hideProgress() {
    return { type: Action.HideProgress, payload: false };
}