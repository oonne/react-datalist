import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import './Datalist.css';

class Datalist extends Component {
  static propTypes = {
      className: PropTypes.string,
      val: PropTypes.string,
      list: PropTypes.array,
      setVal: PropTypes.func,
      maxRow: PropTypes.number,
  };

  static defaultProps = {
    val: '',
    list: [],
    setVal: ()=>{},
    maxRow: 5,
  };

  constructor(props){
    super(props)

    this.state = {
      show: false,
    }
  }
  
  componentWillReceiveProps(nextProps){
    let val = nextProps.val;
    let list = this.getList(nextProps.list, val);

    let hit = list.some(item=>item==val);

    if(val=='' || list.length==0 || hit){
      this.hide();
    }else{
      this.show();
    }
  }

  show () {
    this.setState({
      show: true
    })
  }

  hide () {
    this.setState({
      show: false
    })
  }

  getList(list, val, maxRow=this.props.maxRow){
    let associative = list.filter(item=>{
      if (item){
        return item.indexOf(val)>=0;
      }else{
        return false
      }
    })

    if (associative.length>maxRow) {
      associative = associative.slice(0, maxRow)
    }

    return associative;
  }

  renderLi(item){
    return(
      <li key={item} onClick={this.props.setVal.bind(null, item)}>
        {item}
      </li>
    )
  }

  render() {
    let datalistClass = classname("datalist", this.props.className, {'hidden': !this.state.show});
    let list = this.getList(this.props.list, this.props.val);

    return (
      <div className={datalistClass}>
        <ul>
          {list.map(item=>this.renderLi(item))}
        </ul>
      </div>
    );
  }
}

export default Datalist;
