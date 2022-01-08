
import { Alert } from '@mui/material';
import { FormGroup } from '../FormGroup';
import { Container, Content } from './styles';
import { TweetDescription } from '../TweetDescription';
import { URL_BACKEND } from '../../config';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Tweet = {
  id: string,
  message: string,
  keyword: string,
}

const MainPage = () => {
  const [currentTweet, setCurrentTweet] = useState<Tweet>();
  const [requestError, setRequestError] = useState<boolean>(false);

  useEffect(() => {
    getTweet();
  }, [])

  const getTweet = async () => {
    try {
      const { data, status }: { data: Tweet,  status: number } = await axios.get(`${URL_BACKEND}/get-tweet`, { timeout: 1500});
      if (status === 200)
        return setCurrentTweet(data);
      setRequestError(true);
    }
    catch{
      setRequestError(true);
    }
  }

  return (
    <>
    {currentTweet &&
      <Container>
        <Content>
          <TweetDescription message={currentTweet?.message} keyword={currentTweet?.keyword} />
          <FormGroup currentTweetId={currentTweet.id} onSubmit={() => getTweet()} />
        </Content>
    </Container>}
      {requestError &&
        <Alert severity="error">Erro ao carregar o Tweet</Alert>
      }
      </>
  );
}

export default MainPage;
