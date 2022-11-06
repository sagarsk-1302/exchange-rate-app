import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from 'primereact/button'

const DataTableSort = ({ countries, allConversionrates }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(countries.map(country => {
            return {
                code: country.code,
                name: country.name,
                rate: allConversionrates[country.code]
            }
        }))
    }, []);
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
    return (
        <div>
            <div className="card">
                <h4>Exchange Rate Column</h4>
                <DataTable paginator value={products}
                    responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                    rows={5}
                    rowsPerPageOptions={[10, 20, 50]}
                    paginatorLeft={paginatorLeft}
                    paginatorRight={paginatorRight}>
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="rate" header="Rate" sortable></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default DataTableSort