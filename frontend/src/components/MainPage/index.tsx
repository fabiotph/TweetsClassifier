import { FormGroup } from '../FormGroup';
import { Container, Content } from './styles';
import { TweetDescription } from '../TweetDescription';

const MainPage = () => {
  return (
    <Container>
      <Content>
        <TweetDescription message='Você é um filho duma puta ta bom entao' keyword='macaco'/>
        <FormGroup/>
      </Content>
    </Container>
  );
}

export default MainPage;
