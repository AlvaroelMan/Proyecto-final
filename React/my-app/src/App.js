import './App.css';
import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import './listaclientes.php';

const tablaClientes = [
    { id: 1, año: "2000", nombre: 'Alvert' }, 
    { id: 2, año: "3000", nombre: 'Gorge' },
]
const columnas = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true
    },
    {
        name: 'AÑO',
        selector: 'año',
        sortable: true
    },
    {
        name: 'NOMBRE',
        selector: 'nombre',
        sortable: true,
        right: true
    }
]
const paginacionAjustes = {
    rowsPerPageText: 'Filas Por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}

function App() {
    return ( 
        <div>
        <DataTable columns = { columnas }
        data = { tablaClientes }
        title = "Tabla clientes"
        pagination paginationComponentOptions = { paginacionAjustes }
        fixedHeader fixedHeaderScrollHeight = "600px" 
        />
        </div>
    )
}

export default App;