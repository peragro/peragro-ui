import React from 'react'

import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';
import BreadCrumb from './BreadCrumb'

import auth from '../utils/auth'

const sampleData = [5, 10, 5, 20];

const SparkLine = React.createClass({
    render(){
        return (
        <Sparklines data={sampleData} width={47} height={30}>
            <SparklinesLine color="blue" />
            <i className="fa fa-clock-o">0</i>
            <span className="txt-info">Next 7 Days</span>
        </Sparklines>
        )
    }
});

export default React.createClass({

  render: function() {
    var token = auth.getToken();

    return (
      <div className="container-fluid">
        <BreadCrumb routes={this.props.routes}/>
        <div id="dashboard-header" className="row">
            <div className="col-xs-10 col-sm-2">
        		<h3>DASHBOARD</h3>
        	</div>
            <div className="clearfix visible-xs"></div>
        	<div className="col-xs-12 col-sm-8 col-md-7 pull-right">
        		<div className="row">
        		    <div className="col-xs-0 col-sm-2 col-md-1"></div>
                    <div className="col-xs-6 col-sm-4 col-md-4">
                        <SparkLine/>
                    </div>
        			<div className="col-xs-0 col-sm-2 col-md-3"></div>
                    <div className="col-xs-6 col-sm-4 col-md-4">
                        <SparkLine/>
                    </div>
        	    </div>
            </div>
        </div>
        </div>
    );
    },
});
