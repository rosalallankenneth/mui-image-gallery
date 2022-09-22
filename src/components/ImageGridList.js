import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import homeImages from '../imgs/homeImages.js';
import Modal from './Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto'
  },
  tile: {
    cursor: 'pointer'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function ImageGridList() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState(homeImages[0].img);

  const handlePicClick = (e) => {
    setModalImg(e.target.src)
    setOpen(true);
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} cols={3}>
        {
          homeImages.map((tile, idx) => (
            <GridListTile key={idx} cols={tile.cols} className={classes.tile}
            >
              <img src={tile.img} alt={tile.title} onClick={handlePicClick} />

              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.subtitle}</span>}
                actionIcon={
                  <IconButton aria-label={`info about img${idx}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />

            </GridListTile>
        ))
        }
      </GridList>
      <Modal open={open} setOpen={setOpen} img={modalImg} />
    </div>
  );
}
