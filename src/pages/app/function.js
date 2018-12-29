import _ from 'lodash'
import Contract from '../../helper/Web3Config.js';

export default {

  /**********************LifeCycle Components in Order **********************************/
  componentDidMount : function () {
    if (!_.isString(Contract)) {
      
      Contract.totalEthInWei((err, data) => {
        this.setState({
          totalRaised : data.toString(10)/1000000000000000000
        })
      });
    
    }
  },
  /***********************Additonal Functions to be used within component ***************/


  /**********************Connecting and defining the Redux ******************************/
  mapStateToProps: function (state) {
    return {

    }
  },

  mapDispatchToProps: function (dispatch) {
    return {

    }
  },
}

// Local functions limitng to only this component