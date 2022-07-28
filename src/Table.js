import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

function TableInfo() {
  return (
    <div>
        <Alert variant="info" className="info-al" style={{textAlign: 'center'}}>
        Trending songs this week
      </Alert>
    <Table striped bordered hover variant="dark" className='tab mb-5'>
      <thead>
        <tr>
          <th>Sr no.</th>
          <th>Song Name</th>
          <th>Artists' Name</th>
          <th>Movie Name</th>
          <th>Release Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>O Paalanhaare</td>
          <td>Lata Mangeshkar</td>
          <td>Lagaan</td>
          <td>2001</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Andekhi Anjaani</td>
          <td>Lata Mangeshkar, Udit Narayan</td>
          <td>Triveni</td>
          <td>1985</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Hawayein</td>
          <td>Arijit Singh</td>
          <td>Jab Harry Met Sejal</td>
          <td>2017</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dil Dhadakne Do</td>
          <td>Farhan Akhtar</td>
          <td>Dil Dhadakne Do</td>
          <td>2015</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Rangisaari</td>
          <td>Kavita Seth</td>
          <td>Jug Jugg Jeeyo</td>
          <td>2022</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default TableInfo;