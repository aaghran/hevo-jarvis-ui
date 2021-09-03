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

const { SearchBar } = Search;


const columns = [
  {
    dataField: "name",
    text: "Name",
    sort: true,
    formatter: nameFormatter,
  },
  {
    dataField: "value",
    text: "Value",
    sort: true,
    // formatter: nameFormatter,
  }
];

function nameFormatter(cell, row) {
  return (
    <>
      <Badge>{row.name}</Badge>
    </>
  );
}
const expandRow = {
  onlyOneExpanding: true,
  renderer: (row) => (
    <div>
      <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
      <p>
        You can render anything here, also you can add additional data on every
        row object
      </p>
      <p>expandRow.renderer callback will pass the origin row object to you</p>
    </div>
  ),
};

class RecognitionTable extends React.Component {
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
          data={this.props.kudos}
          columns={columns}
          search
          hover
          wrapperClasses="table-responsive"
        >
          {(props) => (
            <div>
              <SearchBar {...props.searchProps} />
              <hr />
              <BootstrapTable {...props.baseProps} />
            </div>
          )}
        </ToolkitProvider>
      </Fragment>
    );
  }
}

export default RecognitionTable;
