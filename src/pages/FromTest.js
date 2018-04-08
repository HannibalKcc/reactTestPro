import React from 'react';

class FormTest extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inp1: '或哈哈',
      valCheck: true,
      valSele: 'cat'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange (e) {
    this.setState({inp1: e.target.value});
  }

  handleChange2 (e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div className='FormTest'>
        <h3>实现简单的双向绑定</h3>
        <p>
          在react中是区分受控组件与非受控组件的，简单的划分:<br/>
          受控组件能对表单信息的变化过程加与监视、干预。<br/>
          非受控组件只获取表单信息的结果。<br/>
        </p>
        <form className='demoBlock'>
          {this.state.inp1}
          <input type="text" value={this.state.inp1} onChange={this.handleChange}/>
          <br/>
          {this.state.valCheck + ',' + this.state.valSele}
          <input type="checkbox" name="valCheck" checked={this.state.valCheck} onChange={this.handleChange2}/>
          <select name="valSele" value={this.state.valSele}
                  onChange={this.handleChange2}>
            {['dog', 'cat', 'tigger', 'monkey'].map((item, idx) => (
              <option value={item} key={idx}>{item}</option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default FormTest;
