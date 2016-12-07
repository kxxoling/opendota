import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import {
  selectLoadingHeroBenchmark,
  selectloadHeroBenchmarkError,
  selectHeroBenchmark,
} from './selectors';
import {
  loadHeroBenchmark,
} from './actions';

import HeroBasics from '../../components/HeroBasics';
import HeroBenchmark from '../../components/HeroBenchmark';

import { heroById } from '../../utils/data';

export class HeroDetailsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { heroId: parseInt(this.props.params.heroId, 10) };
  }

  componentDidMount() {
    this.props.fetchHeroBenchmark(this.state.heroId);
  }

  render() {
    const { heroId } = this.state;
    const { benchmark, loadingHeroBenchmark, loadHeroBenchmarkError } = this.props;
    const hero = heroById[heroId];
    let benchmarkView;
    if (loadHeroBenchmarkError) {
      benchmarkView = (<div>loading error</div>);
    } else if (loadingHeroBenchmark) {
      benchmarkView = (<div>loading...</div>);
    } else if (benchmark.result) {
      benchmarkView = (<HeroBenchmark {...{ heroId, benchmark }} />);
    } else {
      benchmarkView = (<div></div>);
    }
    return (
      <div>
        <Helmet
          title={`英雄详情 ── ${hero.localized_name}`}
          meta={[
            { name: 'description', content: `英雄详情 ── ${hero.localized_name}` },
          ]}
        />
        <HeroBasics heroId={heroId} />
        { benchmarkView }
      </div>
    );
  }
}

HeroDetailsPage.propTypes = {
  params: T.shape({
    heroId: T.string,
  }),
  fetchHeroBenchmark: T.func,
  loadingHeroBenchmark: T.bool,
  loadHeroBenchmarkError: T.bool,
  benchmark: T.object,
};

const mapStateToProps = createStructuredSelector({
  loadingHeroBenchmark: selectLoadingHeroBenchmark(),
  loadHeroBenchmarkError: selectloadHeroBenchmarkError(),
  benchmark: selectHeroBenchmark(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchHeroBenchmark(heroId) {
      dispatch(loadHeroBenchmark(heroId));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetailsPage);
