import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import {grey} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme:Theme) => ({
  demo: {
    width: '100%'
  },
  demoRow: {
    display: 'flex',
    padding: '32px 0'
  },
  demoRowEven: {
    flexDirection: 'row-reverse'
  },
  demoColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  demoCard: {
    background: grey[800]
  },
  bullet: {
    width: '11px',
    margin: '9px 0',
    marginRight: '12px'
  },
  description: {
    width: '100%',
    padding: '32px'
  },
  demoImage: {
    width: '75%',
    maxWidth: '400px'
  }
}))
const DemoSection:React.FunctionComponent<DemoSectionProps> = (props) => {
  const classes = useStyles({})
  const {demos} = props
  return (
    <div className={classes.demo}>
      {demos.map((demo, index) =>
        <Grid key={`demo-row-${index}`} container classes={{container:classes.demoRow + (index % 2 === 1? ' ' + classes.demoRowEven : '')} as any}>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <div className={classes.description}>
              <Typography color='textPrimary' variant='h5'>
                {demo.headline}
              </Typography>
              {demo.command &&
                <Typography color='textPrimary' variant='caption' gutterBottom>
                  {demo.command}
                </Typography>
              }
              <Typography color='textPrimary' variant='body1'>
                {demo.description.map((description, index) => [index !== 0 && <br key={'new-line-' + index}/>, description])}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <img src={demo.image} className={classes.demoImage}/>
          </Grid>
        </Grid>
      )}
    </div>
  )
}
type DemoSectionProps = {
  demos: {
    headline: string
    command?: string
    description: string[]
    image: string
  }[]
}

export default DemoSection
