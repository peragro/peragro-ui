import React from 'react'

import { browserHistory, Router, Route, Link } from 'react-router'


export default React.createClass({
    render() {
        const depth = this.props.routes.length;

        return (
            <div className="row">
                <div id="breadcrumb" className="col-xs-12">
                    <ol className="breadcrumb pull-left">
                    {this.props.routes.map((item, index) =>
                    <li key={index}>
                        <Link
                            onlyActiveOnIndex={true}
                            activeClassName="breadcrumb-active"
                            to={item.path || ''}>
                            {item.name}
                        </Link>
                        {(index + 1) < depth && '\u2192'}
                    </li>
                    )}
                    </ol>
                </div>
            </div>
        );
    }
});
