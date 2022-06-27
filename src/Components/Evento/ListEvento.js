import React from 'react';
import FeedEventItem from './FeedEventItem';
import useFetch from '../../Hooks/useFetch';
import { EVENT_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './ListEvento.module.css';

const ListEvento = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const token = window.localStorage.getItem('token');
      const { url, options } = EVENT_GET(token);
      const { response, json } = await request(url, options);
      //if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
       {data.length > 0 && data.map((event) => (
          <FeedEventItem
            key={event.id}
            event={event}
            //setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};


export default ListEvento;
