import React from 'react';
import PropTypes from 'prop-types';
import ArticleCardWrapper, {
    Title,
} from './ArticleCard.style';

const ArticleCard = ({ title, imageUrl }) => {

    return (
        <ArticleCardWrapper imageUrl={imageUrl}>
            <Title>{title}</Title>
        </ArticleCardWrapper>
    );
};

ArticleCard.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string
};
  
ArticleCard.defaultProps = {
    title: '',
    image: '#'
};

export default ArticleCard;
