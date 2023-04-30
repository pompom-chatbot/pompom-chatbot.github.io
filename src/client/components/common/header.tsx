import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import PomPomCharacter from '../../../asset/img/pompom.png'
import HonkaiStarRail from '../../../asset/img/honkai-star-rail.png'
import Star from '../../../asset/img/star.svg'
import Discord from '../../../asset/img/discord.png'
import {useScreenState} from '../../store/screen'

const useStyles = makeStyles((theme:Theme) => ({
  container: {
    width: '100vw',
    minHeight: '350px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(33, 33, 33)',
    overflow: 'hidden',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column'
    }
  },
  headerTextContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '24px 0',
    zIndex: 300
  },
  headerText: {
    textAlign: 'center',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      textAlign: 'center'
    }
  },
  headerTextFont: {
    fontFamily: 'DM Serif Display',
    lineHeight: '0.8em',
    color: 'rgb(255, 255, 255)',
    textShadow: '0 3px 8px rgb(76, 83, 108)',
    margin: '18px 0',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      margin: '8px 0'
    }
  },
  headerCharacter: {
    position: 'relative'
  },
  headerCharacterImage: {
    position: 'relative',
    width: 320,
    zIndex: 100
  },
  headerCharacterBackground: {
    position: 'absolute',
    top: 'calc((100% - 400px) / 2)',
    left: 'calc((100% - 400px) / 2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  honkaiStarRailImage: {
    display: 'inline-block',
    height: '60px',
    margin: '-24px 0',
    [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
      height: '36px',
      margin: '-12px 0',
    }
  },
  discordImage: {
    display: 'inline-block',
    height: '42px',
    margin: '-17px 0',
    [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
      height: '26px',
      margin: '-9px 0',
    }
  }
}))
const Header:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()

  const classes = useStyles({})
  return (
    <div className={classes.container}>
      <div className={classes.headerTextContent}>
        <img style={{position:'absolute', top:'-36px', width:'64px'}} src={Star}/>
        <img style={{position:'absolute', top:'106px', left:'0px', width:'32px'}} src={Star}/>
        <img style={{position:'absolute', top:'106px', left:'-24px', width:'48px'}} src={Star}/>
        <div className={classes.headerText}>
          <Typography classes={{root:classes.headerTextFont}}
            variant={['sm-tablet', 'xs-phone'].includes(screenType)? 'h2':'h1'}
          >
            <span style={{whiteSpace:'pre'}}>Pom Pom</span>
          </Typography>
          <Typography classes={{root:classes.headerTextFont}}
            variant={['sm-tablet', 'xs-phone'].includes(screenType)? 'subtitle1':'h5'}
          >
            from <img className={classes.honkaiStarRailImage} src={HonkaiStarRail}/>
            comes to <img className={classes.discordImage} src={Discord}/>
          </Typography>
        </div>
      </div>
      <div className={classes.headerCharacter}>
        <img src={PomPomCharacter} className={classes.headerCharacterImage}/>
      </div>
    </div>
  )
}

export default Header