import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Card from '../Card';
import styles from './styles';
import strategy_svg from '../../assets/img/strategy.svg';
import design_svg from '../../assets/img/vector-art-and-design-svgrepo-com.svg';
import development from '../../assets/img/code-coding-development-programming-web-webpage-svgrepo-com.svg';

const data = [
  {
    title: 'Strategy',
    svg: strategy_svg
  },
  {
    title: 'Product Design',
    svg: design_svg
  },
  {
    title: 'Development',
    svg: development
  }
]


const CreativeDesign = () => {
  return (
    <Box sx={styles.creativeDesign}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>creative design solutions</Typography>
        <Typography variant='body1' sx={{textTransform: 'capitalize', margin: '25px 0'}}>
          professional design agency to provide solutions
        </Typography>
        <Stack sx={styles.stack}>
          {data.map((item, index) => {
            return <Card title={item.title} imgSrc={item.svg} key={index} />
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export default CreativeDesign;