import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  tile: {
    cursor: 'pointer'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function ImageGridTile({ tile, idx }) {
    const classes = useStyles();

    return (
        <GridListTile key={idx} cols={tile.cols} className={classes.tile}
        >
            <img src={tile.img} alt={tile.title} />

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
    )
}
