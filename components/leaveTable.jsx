import { Fragment } from "react";
import {
  Container,
  Row,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
  Col,
  ListGroup,
  Badge,
  Alert,
} from "react-bootstrap";

import moment from "moment";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

// const { SearchBar } = Search;

const columns = [
  {
    dataField: "user_name",
    text: "Your leaves",
    sort: true,
    formatter: nameFormatter,
  },
  {
    dataField: "type",
    text: "Type",
    sort: true,
  },
  {
    dataField: "date",
    text: "Leave date",
    sort: true,
  },
];

function nameFormatter(cell, row) {
  return <>{row.user_name}</>;
}

class LeaveTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: [],
    };
  }
  render() {
    return (
      <Fragment>
        <ToolkitProvider
          keyField="id"
          data={this.props.leaves}
          columns={columns}
          search
          hover
          wrapperClasses="table-responsive"
        >
          {(props) => (
            <div>
              {/* <SearchBar {...props.searchProps} /> */}
              <hr />
              <BootstrapTable {...props.baseProps} />
            </div>
          )}
        </ToolkitProvider>
      </Fragment>
    );
  }
}

export default LeaveTable;
