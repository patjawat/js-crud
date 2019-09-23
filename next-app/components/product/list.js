import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import { Button } from 'reactstrap';
import axios  from 'axios'
import ReactLoading from 'react-loading';

export default class list extends Component {
    constructor(props) {
        super(props)
    this.loadData = this.loadData.bind(this);
        this.state = {
             data:[],
             isLoading:true
        }
    }
    
    loadData= async () => {
        const res= await axios.get('http://127.0.0.1:4000')
        this.setState({
            data:res.data,
            isLoading:false
        });
      };
      componentDidMount(){
        this.loadData()
      }
    
    render() {
        const columns = ["id","product"];


// const options = {
//     filterType: 'checkbox',f
// };

        return (
            this.state.isLoading ?  <div class="d-flex justify-content-center align-items-center;" style={{marginTop:'10%'}}><ReactLoading type='spin' color="#ddd" height={300} width={100} /> </div> :
            <div>

<div className="card">
  <div className="card-header">
    <h3 className="card-title">Striped Full Width Table</h3>
  </div>
  {/* /.card-header */}
  <div className="card-body p-0">
    <table className="table table-striped">
      <thead>
        <tr>
          <th style={{width: 10}}>#</th>
          <th>Task</th>
          <th>Progress</th>
          <th style={{width: 40}}>Label</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>Update software</td>
          <td>
            <div className="progress progress-xs">
              <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
            </div>
          </td>
          <td><span className="badge bg-danger">55%</span></td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Clean database</td>
          <td>
            <div className="progress progress-xs">
              <div className="progress-bar bg-warning" style={{width: '70%'}} />
            </div>
          </td>
          <td><span className="badge bg-warning">70%</span></td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Cron job running</td>
          <td>
            <div className="progress progress-xs progress-striped active">
              <div className="progress-bar bg-primary" style={{width: '30%'}} />
            </div>
          </td>
          <td><span className="badge bg-primary">30%</span></td>
        </tr>
        <tr>
          <td>4.</td>
          <td>Fix and squish bugs</td>
          <td>
            <div className="progress progress-xs progress-striped active">
              <div className="progress-bar bg-success" style={{width: '90%'}} />
            </div>
          </td>
          <td><span className="badge bg-success">90%</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* /.card-body */}
</div>

                <div>
               
                <MUIDataTable
                    title={"Employee List"}
                    data={this.state.data}
                    columns={columns}
                    // options={options}
                    />
                    </div>
            </div>
        )
    }
}
