import { FormGroup } from '../FormGroup';
import { Title, TweetMessage, Container, TwitterIcon, TitleContent, ContentMessage, ContentChip, TextChip } from './styles';
import { Chip } from "@mui/material";


interface ITweetDescription {
    message: string;
    keyword: string;
};

export const TweetDescription = ({ message, keyword }: ITweetDescription) => {
    return (
        <Container>
            <TitleContent>
                <TwitterIcon color='primary' />
                <Title>
                    Classificador de Tweets
                </Title>
                <TwitterIcon />
            </TitleContent>
            <ContentMessage>
                <TweetMessage>{message}</TweetMessage>
            </ContentMessage>
            <ContentChip>
                <TextChip>Palavra-chave:</TextChip>
                <Chip variant="outlined" color="secondary" label={keyword} size='small'/>
            </ContentChip>
        </Container>
    );
}
