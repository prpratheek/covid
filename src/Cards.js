import React from 'react';
import './App.css';
import { Card, CardContent,Typography,Grid } from '@material-ui/core';
import { LoopCircleLoading } from 'react-loadingg';
import CountUp from 'react-countup';

function Cards(props) {
    if(props.data.TotalConfirmed==null)
    {
        return(
        <LoopCircleLoading />
        )
    }
  return (
    <div className="cardContainer" >
      <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className ="infected">
                <CardContent>
                    <Typography  color="textSecondary"  gutterBottom>Infected</Typography>
                    <Typography variant="h5" component="h2">
                        <CountUp
                        start={0}
                        end={props.data.TotalConfirmed}
                        duration={2.5}
                        separator={','}
                        />
                    </Typography>
                    <Typography variant="body2" gutterBottom>Total active cases of COVID 19</Typography>
                    <Typography variant="h6" component="h2">
                    <CountUp
                        start={0}
                        end={props.data.NewConfirmed}
                        duration={2.5}
                        separator={','}
                        />
                    </Typography>
                    <Typography variant="body2" >Daily active cases of COVID 19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className ="recovered">
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5" component="h2">
                    <CountUp
                        start={0}
                        end={props.data.TotalRecovered}
                        duration={2.5}
                        separator={','}
                        />
                    </Typography>
                    <Typography variant="body2" gutterBottom>Total recoveries from COVID 19</Typography>
                    <Typography variant="h6" component="h2">
                    <CountUp
                        start={0}
                        end={props.data.NewRecovered}
                        duration={2.5}
                        separator={','}
                        />
                    </Typography>
                    <Typography variant="body2" >Daily recoveries from COVID 19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className ="deaths">
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5" component="h2">
                    <CountUp
                        start={0}
                        end={props.data.TotalDeaths}
                        duration={2.5}
                        separator={','}
                        />
                    </Typography>
                    <Typography variant="body2" gutterBottom>Total deaths from COVID 19</Typography>
                    <Typography variant="h6" component="h2">
                    <CountUp
                        start={0}
                        end={props.data.NewDeaths}
                        duration={2.5}
                        separator={','}
                        />
                    </Typography>
                    <Typography variant="body2" >Daily deaths from COVID 19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
  );
}

export default Cards;
