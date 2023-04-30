import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import CharacterDemo from '../../asset/img/demo/character.png'
import generateHelps from '../constants/pompom'
import Header from './common/header'
import DemoSection from './common/demo-section'
import CommandSection from './common/command-section'

const useStyles = makeStyles((theme:Theme) => ({
  '@import': [
    'url(https://fonts.googleapis.com/css?family=Roboto)',
    'url(https://fonts.googleapis.com/css?family=Roboto+Mono)',
    'url(https://fonts.googleapis.com/css?family=DM+Serif+Display)'
  ] as any,
  container: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    padding: '0 32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '0 16px',
    }
  },
  descriptionRow: {
    textAlign: 'center',
    paddingTop: '32px',
    paddingBottom: '16px'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  },
  inviteButtons: {
    textAlign: 'center',
    paddingTop: '16px',
    paddingBottom: '32px'
  },
  inviteButton: {
    margin: '8px',
    padding: '8px 32px',
    borderRadius: '21px',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  dividerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap'
  },
  divider: {
    flexGrow: 1,
    margin: '16px'
  },
  footer: {
    width: '100vw',
    padding: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(33, 33, 33)'
  }
}))
const LandingPage:React.FunctionComponent = () => {
  const classes = useStyles({})
  return (
    <div className={classes.container}>
      <Header/>
      <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container justify='center' classes={{container:classes.descriptionRow}}>
          <Typography color='textPrimary' variant='body1'>
            Pom Pom is our bot designed to provide information of in game equipments to discord.<br/>
            More features coming up soon...
          </Typography>
        </Grid>
        <Grid container justify='center' classes={{container:classes.inviteButtons}}>
          <Button classes={{root:classes.inviteButton}} variant='contained' size='large'
            href='https://discord.com/oauth2/authorize?client_id=1102264320911478848&scope=bot%20applications.commands&permissions=8'
          >
            INVITE ME
          </Button>
        </Grid>
        <Grid container classes={{container:classes.dividerRow}}>
          <Divider classes={{root:classes.divider}}/>
          <Typography color='textPrimary' variant='h5'>
            FEATURES
          </Typography>
          <Divider classes={{root:classes.divider}}/>
        </Grid>
        <DemoSection
          demos={[{
            headline: 'Show & Describe Character',
            command: `command: ${PREFIX}character`,
            description: [
              'You don\'t have to open the game to learn more about other characters.'
            ],
            image: CharacterDemo
          }]}
        />
        <Grid container classes={{container:classes.dividerRow}}>
          <Divider classes={{root:classes.divider}}/>
          <Typography color='textPrimary' variant='h5'>
            COMMANDS
          </Typography>
          <Divider classes={{root:classes.divider}}/>
        </Grid>
        <CommandSection
          name='Paimon'
          helps={generateHelps(PREFIX)}
        />
      </Grid>
      <div className={classes.footer}>
        <Grid container justify='space-between' alignItems='center' classes={{container:classes.pageContainer}}>
          <Typography color='textSecondary' variant='caption'>
            Developed by: Ching Yaw Hao, Lil'Cookie
          </Typography>
          <Typography color='textSecondary' variant='caption'>
            <a className={classes.link} href='https://discord.gg/cWbWNuy'>Try It</a> | <a className={classes.link} href='https://www.patreon.com/user?u=10662508'>Support Us</a> 
          </Typography>
        </Grid>
      </div>
    </div>
  )
}

export default LandingPage