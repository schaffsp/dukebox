import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchAlbums } from "./actions";
import { useEffect } from "react";
import './spinner.css';

export function Albums() {
  const albums = useSelector(state => state.albums);
  const isProgressing = useSelector(state => state.isProgressing);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums(params.artist));
  }, [dispatch]);

  return (
    <div className="Albums">
      <h2>Albums from {params.artist}</h2>
      {isProgressing && <div className="spinner" />}
      <ul>
        {albums.map(album => <li><a href={`/${params.artist}/${album}`}>{album}</a></li>)}
      </ul>
    </div>
  );
}