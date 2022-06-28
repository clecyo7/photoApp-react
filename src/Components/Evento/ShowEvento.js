import React from "react";
import ReactDOM from "react-dom";
import { EVENT_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFetch from '../../Hooks/useFetch';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';


const ShowEvento = () => {
  const { data, loading, error, request } = useFetch();
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    async function fetchEvents() {
      const total = 6;
      const token = window.localStorage.getItem('token');
      const { url, options } = EVENT_GET(token);
      const { response, json } = await request(url, options);
      setDados(json);
    }
    fetchEvents();
  }, [request]);


 const columns = [
    {
      name: "Evento",
      selector: "name",
      sortable: true
    },
    {
      name: "Descrição",
      selector: "description",
      sortable: true
    },
    {
      name: "Data",
      selector: "date",
      sortable: true,
    },
    {
      name: "Horário",
      selector: "time",
      sortable: true
    },
    {
      name: "Local",
      selector: "place",
      sortable: true
    },
    {
      name: "Status",
      selector: "status",
      sortable: false
    }
  ];
  const tableData = {
    columns,
    dados
  };

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)

  return (
    <div className="main">
      {/* <DataTableExtensions {...tableData}> */}
        <DataTable
          columns={columns}
          data={dados}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      {/* </DataTableExtensions> */}
    </div>
  );
  else return null;
}

export default ShowEvento