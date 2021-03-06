import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {NewsFormComponent} from "../../components/index";

import {createSingleNews} from "../../modules/news/actions";

class NewsCreateContainer extends Component {

  checkAndSend(data) {
    this.props.actions.createSingleNews(data);
  }

  render() {
    return (
      <div className="container content">
        <div className="text-center">
          <h3>Create new news</h3>
          <div className="row">
            <NewsFormComponent
              onSubmit={this.checkAndSend.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const NewsCreate = connect(
  (store) => ({
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      createSingleNews
    }, dispatch)
  })
)(NewsCreateContainer);
